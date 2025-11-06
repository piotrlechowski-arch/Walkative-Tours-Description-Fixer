
import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

// --- AUTHENTICATION ---
const getAuth = () => {
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS);
  return new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive',
    ],
  });
};

const getSheetsClient = () => {
  const auth = getAuth();
  return google.sheets({ version: 'v4', auth });
};

const getDriveClient = () => {
    const auth = getAuth();
    return google.drive({ version: 'v3', auth });
};

// Helper function to convert Google Drive URLs to viewable format for thumbnails
const convertDriveUrlToViewable = (url) => {
    if (!url) return url;
    
    // Convert "https://drive.google.com/file/d/FILE_ID/view?usp=drivesdk"
    // to thumbnail format which works better in <img> tags
    const match = url.match(/\/d\/([^\/]+)/);
    if (match) {
        const fileId = match[1];
        // Use thumbnail API with size parameter for better performance and reliability
        // sz=w400 means width 400px (you can adjust: w200, w400, w800, etc.)
        return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`;
    }
    
    // Return original URL if pattern doesn't match
    return url;
};

// Helper function to clear existing entries for a specific tour and language
async function clearExistingEntries(sheets, sheetName, tourName, lang, isPhotoMetadata = false) {
    try {
        // Get all data from the sheet
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: `${sheetName}!A:Z`,
        });
        const values = response.data.values || [];

        if (values.length === 0) return;

        // Get photo IDs for this tour (needed for photo metadata clearing)
        let tourPhotoIds = [];
        if (isPhotoMetadata) {
            const { photos } = await getTourDetails(tourName);
            tourPhotoIds = photos.map(p => p.id);
        }

        // Find rows that match the criteria
        const rowsToClear = [];
        for (let i = 0; i < values.length; i++) {
            const row = values[i];
            if (isPhotoMetadata) {
                // For Photos_Metadata: clear if photoId belongs to tour AND lang matches
                const photoId = row[0]; // Column A
                const rowLang = row[1]; // Column B
                if (tourPhotoIds.includes(photoId) && rowLang === lang) {
                    rowsToClear.push(i + 1);
                }
            } else {
                // For tour sheets: clear if tour name matches (column A)
                if (row[0] === tourName) {
                    rowsToClear.push(i + 1);
                }
            }
        }

        if (rowsToClear.length > 0) {
            // Clear the rows by setting them to empty arrays
            const requests = rowsToClear.map(rowIndex => ({
                range: `${sheetName}!A${rowIndex}:Z${rowIndex}`,
                values: [[]]
            }));

            await sheets.spreadsheets.values.batchUpdate({
                spreadsheetId: SPREADSHEET_ID,
                requestBody: {
                    valueInputOption: 'USER_ENTERED',
                    data: requests
                }
            });
        }
    } catch (e) {
        console.warn(`Could not clear existing entries in ${sheetName}:`, e.message);
    }
}

// --- HELPERS ---
const toTrimmedString = (value) => {
    if (value === undefined || value === null) return '';
    return String(value).trim();
};

const normalizeKey = (key) => {
    if (!key) return '';
    return key.trim().toLowerCase().replace(/[\s_-]+/g, '');
};

const getValueForKeys = (obj, candidateKeys) => {
    if (!obj) return '';
    const normalizedEntries = Object.entries(obj).map(([key, value]) => [normalizeKey(key), value]);
    for (const candidate of candidateKeys) {
        const target = normalizeKey(candidate);
        const match = normalizedEntries.find(([normalizedKey]) => normalizedKey === target);
        if (match) {
            return toTrimmedString(match[1]);
        }
    }
    return '';
};

const sheetDataToObject = (header, row) => {
    const obj = {};
    header.forEach((rawKey, i) => {
        if (!rawKey) return;
        const key = rawKey.trim();
        if (!key) return;
        obj[key] = toTrimmedString(row[i]);
    });
    return obj;
};

const parseTourRow = (header, row) => {
    const base = {
        city: '',
        name: '',
        short: '',
        long: '',
        highlightsTitle: '',
        highlightsDescription: '',
        photoIds: [],
    };
    const extras = {};

    header.forEach((rawKey, index) => {
        if (!rawKey) return;
        const key = rawKey.trim();
        if (!key) return;

        const normalized = normalizeKey(key);
        const cellValue = toTrimmedString(row[index]);

        if (!cellValue && !normalized.startsWith('photoid')) {
            return;
        }

        if (normalized.startsWith('photoid')) {
            if (cellValue) base.photoIds.push(cellValue);
            return;
        }

        switch (normalized) {
            case 'city':
                base.city = cellValue;
                break;
            case 'name':
            case 'tourname':
                base.name = cellValue;
                break;
            case 'short':
                base.short = cellValue;
                break;
            case 'long':
                base.long = cellValue;
                break;
            case 'highlightstitle':
                base.highlightsTitle = cellValue;
                break;
            case 'highlightsdescription':
                base.highlightsDescription = cellValue;
                break;
            case 'photoids':
                base.photoIds = cellValue.split(',').map(toTrimmedString).filter(Boolean);
                break;
            default:
                extras[key] = cellValue;
        }
    });

    if (base.photoIds.length > 0) {
        base.photoIds = Array.from(new Set(base.photoIds));
    }

    return { ...extras, ...base };
};

const fetchToursSource = async (sheets) => {
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Tours_Source!A:AZ',
    });
    const values = res.data.values || [];
    if (values.length === 0) return [];
    const [header, ...rows] = values;
    return rows
        .map(row => parseTourRow(header, row))
        .filter(tour => Boolean(tour.name));
};

// --- CORE FUNCTIONS ---

export async function getTours() {
    const sheets = getSheetsClient();
    const toursSource = await fetchToursSource(sheets);

    // Fetch statuses from all destination sheets
    const langSheetNames = ['Tours_EN', 'Tours_PL', 'Tours_DE', 'Tours_ES'];
    const statusData = {};
    for (const sheet of langSheetNames) {
        try {
            const statusRes = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: `${sheet}!A:A` });
            const tourNames = statusRes.data.values
                ? statusRes.data.values
                    .flat()
                    .map(toTrimmedString)
                    .filter(Boolean)
                : [];
            statusData[sheet] = new Set(tourNames);
            console.log(`Sheet ${sheet} has ${tourNames.length} tours:`, Array.from(tourNames).slice(0, 5));
        } catch(e) {
            console.warn(`Could not read sheet ${sheet}, assuming no tours are completed.`, e.message);
            statusData[sheet] = new Set();
        }
    }

    return toursSource.map(tour => {
        const tourName = tour.name;
        const normalizedTourName = toTrimmedString(tourName).toLowerCase();
        
        // Check if tour exists in each sheet (case-insensitive comparison)
        const enDesc = Array.from(statusData['Tours_EN']).some(n => toTrimmedString(n).toLowerCase() === normalizedTourName);
        const plDesc = Array.from(statusData['Tours_PL']).some(n => toTrimmedString(n).toLowerCase() === normalizedTourName);
        const deDesc = Array.from(statusData['Tours_DE']).some(n => toTrimmedString(n).toLowerCase() === normalizedTourName);
        const esDesc = Array.from(statusData['Tours_ES']).some(n => toTrimmedString(n).toLowerCase() === normalizedTourName);
        
        // Log status for debugging
        if (plDesc || deDesc || esDesc) {
            const matchingPL = Array.from(statusData['Tours_PL']).filter(n => toTrimmedString(n).toLowerCase() === normalizedTourName);
            console.log(`Tour "${tourName}" status:`, {
                enDesc,
                plDesc,
                deDesc,
                esDesc,
                matchingPLTours: matchingPL,
                allPLTours: Array.from(statusData['Tours_PL']).slice(0, 10),
            });
        }
        
        return {
            name: tourName,
            statuses: {
                enDesc,
                photosEn: enDesc, // Assume photos done with desc
                plDesc,
                photosPl: plDesc,
                deDesc,
                photosDe: deDesc,
                esDesc,
                photosEs: esDesc,
            },
        };
    });
}

export async function getTourDetails(name) {
    const sheets = getSheetsClient();
    const toursSource = await fetchToursSource(sheets);
    const tourData = toursSource.find(t => t.name === name);

    if (!tourData) throw new Error('Tour not found');
    const tour = {
        ...tourData,
        photoIds: Array.isArray(tourData.photoIds)
            ? tourData.photoIds
            : toTrimmedString(tourData.photoIds).split(',').map(toTrimmedString).filter(Boolean),
    };

    // Get photo data
    const photosRes = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: 'Photos_Source!A:AZ' });
    const photoValues = photosRes.data.values || [];
    const [photosHeader = [], ...photosRows] = photoValues;
    
    console.log('Photos_Source header:', photosHeader);
    console.log('Total photo rows:', photosRows.length);
    console.log('Looking for photoIds:', tour.photoIds);
    
    const allPhotos = photosRows.map(row => sheetDataToObject(photosHeader, row));
    console.log('Sample photo objects (first 3):', allPhotos.slice(0, 3));
    
    const photoIdSet = new Set(tour.photoIds);
    const photos = allPhotos
        .filter(p => {
            // Handle both 'ID' (from sheet header) and 'id' (lowercase)
            const photoId = p.ID || p.id;
            const hasMatch = photoIdSet.has(photoId);
            if (hasMatch) console.log('Found matching photo:', photoId);
            return hasMatch;
        })
        .map(p => ({
            ...p,
            id: p.ID || p.id, // Normalize to lowercase 'id'
            url: convertDriveUrlToViewable(p.URL || p.url), // Convert URL to viewable format
            name: p.Name || p.name,
            metadata: {}
        }));

    console.log('Filtered photos count:', photos.length);
    return { tour, photos };
}

async function getAcceptedData(tourName, lang) {
    const sheets = getSheetsClient();
    const sheetName = `Tours_${lang}`;
    
    // Get description data - column A is tour name, B is short, C is long, D is highlights
    const descRes = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: `${sheetName}!A:D` });
    const descValues = descRes.data.values || [];
    
    if (descValues.length === 0) {
        throw new Error(`Sheet "${sheetName}" is empty. No accepted data available.`);
    }
    
    const normalizedTourName = toTrimmedString(tourName).toLowerCase();
    
    // Find row by comparing column A (tour name) directly
    let tourRow = null;
    for (const row of descValues) {
        if (row && row[0]) {
            const rowTourName = toTrimmedString(row[0]).toLowerCase();
            if (rowTourName === normalizedTourName) {
                tourRow = row;
                break;
            }
        }
    }
    
    if (!tourRow) {
        // Log available tour names for debugging
        const availableNames = descValues
            .filter(row => row && row[0])
            .map(row => row[0])
            .slice(0, 10);
        console.error(`Accepted data not found for tour "${tourName}" in sheet "${sheetName}". Available names:`, availableNames);
        throw new Error(`Accepted data not found for tour "${tourName}" in sheet "${sheetName}"`);
    }
    
    // Column A = tour name, B = short, C = long, D = highlights
    const description = {
        short: toTrimmedString(tourRow[1] || ''),
        long: toTrimmedString(tourRow[2] || ''),
        highlights: toTrimmedString(tourRow[3] || ''),
    };

    // Get photo metadata
    const photoMetaRes = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: 'Photos_Metadata!A:F' });
    const photoValues = photoMetaRes.data.values || [];
    const [photoHeader = [], ...photoRows] = photoValues;
    const { photos: sourcePhotos } = await getTourDetails(tourName);
    const sourcePhotoIds = new Set(sourcePhotos.map(p => p.id));

    const photos = photoRows.map(row => sheetDataToObject(photoHeader, row))
        .map(row => {
            const metadataLang = getValueForKeys(row, ['lang']).toUpperCase();
            const photoId = getValueForKeys(row, ['photoId', 'photo id']);
            return {
                metadataLang,
                photoId,
                newName: getValueForKeys(row, ['newName', 'new name']),
                caption: getValueForKeys(row, ['caption']),
                alt: getValueForKeys(row, ['alt']),
                description: getValueForKeys(row, ['description']),
            };
        })
        .filter(meta => meta.metadataLang === lang && sourcePhotoIds.has(meta.photoId))
        .map(({ metadataLang, photoId, ...meta }) => ({ ...meta, id: photoId }));

    return { description, photos };
}

export const getCanonicalEnData = (tourName) => getAcceptedData(tourName, 'EN');
export const getLocalizedData = (tourName, lang) => getAcceptedData(tourName, lang.toUpperCase());


export async function acceptChanges(tourName, mode, data, renameInDrive) {
    const sheets = getSheetsClient();
    const lang = mode.toUpperCase();
    const descSheetName = `Tours_${lang}`;

    console.log(`=== ACCEPT CHANGES ===`);
    console.log(`Tour: ${tourName}, Mode: ${mode}, Lang: ${lang}`);
    console.log(`Data object:`, JSON.stringify(data, null, 2));
    console.log(`Description data present:`, !!data.description);
    console.log(`Description keys:`, data.description ? Object.keys(data.description) : 'N/A');
    console.log(`Photos count:`, data.photos?.length || 0);

    // 1. Clear existing entries for this tour and language, then write new description
    if (!data.description) {
        throw new Error(`Description is missing in data. Cannot save tour description without description object.`);
    }
    
    if (!data.description.short || !data.description.long || !data.description.highlights) {
        console.warn(`Incomplete description data:`, {
            hasShort: !!data.description.short,
            hasLong: !!data.description.long,
            hasHighlights: !!data.description.highlights
        });
    }
    
    try {
        // Find existing row for this tour in column A
        const allRowsRes = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: `${descSheetName}!A:A`,
        });
        const allRows = allRowsRes.data.values || [];
        let existingRowIndex = null;
        
        // Normalize tour name for comparison (case-insensitive, trimmed)
        const normalizedTourName = toTrimmedString(tourName).toLowerCase();
        
        for (let i = 0; i < allRows.length; i++) {
            const rowValue = toTrimmedString(allRows[i][0]);
            if (rowValue.toLowerCase() === normalizedTourName) {
                existingRowIndex = i + 1; // Sheet rows are 1-indexed
                console.log(`Found existing row ${existingRowIndex} for tour "${tourName}" (matched "${rowValue}")`);
                break;
            }
        }
        
        if (!existingRowIndex) {
            console.log(`No existing row found for tour "${tourName}". Will append new row.`);
        }
        
        const descData = [
            tourName, 
            data.description.short || '', 
            data.description.long || '', 
            data.description.highlights || ''
        ];
        
        console.log(`Writing description to ${descSheetName}:`, {
            tourName: descData[0],
            existingRowIndex,
            shortLength: descData[1]?.length || 0,
            longLength: descData[2]?.length || 0,
            highlightsLength: descData[3]?.length || 0
        });
        
        let result;
        if (existingRowIndex) {
            // Update existing row (columns A, B, C, D)
            result = await sheets.spreadsheets.values.update({
                spreadsheetId: SPREADSHEET_ID,
                range: `${descSheetName}!A${existingRowIndex}:D${existingRowIndex}`,
                valueInputOption: 'USER_ENTERED',
                requestBody: { values: [descData] }
            });
            console.log(`Updated existing row ${existingRowIndex} in ${descSheetName}`);
        } else {
            // Append new row if not found
            result = await sheets.spreadsheets.values.append({
                spreadsheetId: SPREADSHEET_ID,
                range: `${descSheetName}!A1`,
                valueInputOption: 'USER_ENTERED',
                requestBody: { values: [descData] }
            });
            console.log(`Appended new row to ${descSheetName}`);
        }
        
        console.log(`Description saved successfully to ${descSheetName}. Updated range:`, result.data.updatedRange);
    } catch (error) {
        console.error(`Error saving description:`, error);
        throw new Error(`Failed to save description: ${error.message || String(error)}`);
    }

    // 2. Clear existing photo metadata for this tour and language, then write new metadata
    try {
        await clearExistingEntries(sheets, 'Photos_Metadata', tourName, lang, true);
        if (data.photos && data.photos.length > 0) {
            const photoMetaData = data.photos.map(p => [p.id, lang, p.newName, p.caption, p.alt, p.description || '']);
            console.log(`Writing ${photoMetaData.length} photo metadata entries`);
            await sheets.spreadsheets.values.append({
                spreadsheetId: SPREADSHEET_ID,
                range: 'Photos_Metadata!A1',
                valueInputOption: 'USER_ENTERED',
                requestBody: { values: photoMetaData },
            });
            console.log(`Photo metadata saved successfully`);
        } else {
            console.log(`No photos to save`);
        }
    } catch (error) {
        console.error(`Error saving photo metadata:`, error);
        throw new Error(`Failed to save photo metadata: ${error.message || String(error)}`);
    }
    
    // 3. Rename files in Drive if requested
    if (renameInDrive) {
        const drive = getDriveClient();
        const { photos: sourcePhotos } = await getTourDetails(tourName);

        for (const photoMeta of data.photos) {
            const sourcePhoto = sourcePhotos.find(p => p.id === photoMeta.id);
            // Assuming driveFileId is present in your 'Photos_Source' sheet
            if (sourcePhoto && sourcePhoto.driveFileId) {
                try {
                    await drive.files.update({
                        fileId: sourcePhoto.driveFileId,
                        requestBody: { name: photoMeta.newName }
                    });
                    console.log(`Renamed file ${sourcePhoto.driveFileId} to ${photoMeta.newName}`);
                } catch (e) {
                    console.error(`Failed to rename file ${sourcePhoto.driveFileId}:`, e.message);
                }
            }
        }
    }
}
