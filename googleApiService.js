
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
      'https://www.googleapis.com/auth/drive.file', // For file uploads
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
        title: '',
        h1: '',
        meta: '',
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
            case 'title':
                base.title = cellValue;
                break;
            case 'h1':
                base.h1 = cellValue;
                break;
            case 'meta':
            case 'metadescription':
                base.meta = cellValue;
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

const stripHighlightLine = (line = '') => line.replace(/^\s*-\s*/, '').trim();

const parseHighlightPairsFromText = (text = '') => {
    if (!text) return [];
    const lines = text.split('\n').map(line => line.trim()).filter(line => line !== '');
    const items = [];
    for (let i = 0; i < lines.length; i += 2) {
        const title = stripHighlightLine(lines[i] || '');
        const description = stripHighlightLine(lines[i + 1] || '');
        if (title || description) {
            items.push({ title, description });
        }
    }
    return items;
};

const serializeHighlightColumn = (items, key) => {
    const values = items
        .map(item => stripHighlightLine(item[key] || ''))
        .filter(value => value);
    if (values.length === 0) {
        return '';
    }
    return values.map(value => `- ${value}`).join('\n');
};

const parseHighlightColumn = (text = '') => {
    if (!text) return [];
    return text.split('\n').map(stripHighlightLine).filter(value => value !== '');
};

const buildHighlightsTextFromColumns = (titlesText = '', descriptionsText = '') => {
    const titles = parseHighlightColumn(titlesText);
    const descriptions = parseHighlightColumn(descriptionsText);
    const maxLen = Math.max(titles.length, descriptions.length);
    const lines = [];
    for (let i = 0; i < maxLen; i++) {
        const title = titles[i] || '';
        const description = descriptions[i] || '';
        if (!title && !description) {
            continue;
        }
        if (title) {
            lines.push(title);
        }
        if (description) {
            lines.push(description);
        }
    }
    return lines.join('\n').trim();
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
            const statusRes = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: `${sheet}!A:B` });
            const rawRows = statusRes.data.values || [];
            const tourNames = rawRows
                .flatMap(row => row ? row.slice(0, 2) : [])
                .map(toTrimmedString)
                .filter(Boolean)
                .map(name => name.toLowerCase());

            const filteredNames = tourNames.filter(name => name !== 'tour name' && name !== 'name');

            statusData[sheet] = new Set(filteredNames);
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
        const enDesc = statusData['Tours_EN'].has(normalizedTourName);
        const plDesc = statusData['Tours_PL'].has(normalizedTourName);
        const deDesc = statusData['Tours_DE'].has(normalizedTourName);
        const esDesc = statusData['Tours_ES'].has(normalizedTourName);
        
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
            driveFileId: p.driveFileId || p.drivefileid || p.DriveFileId || p.DriveFileID || '', // Map driveFileId (handle various case variations)
            metadata: {}
        }));

    console.log('Filtered photos count:', photos.length);
    return { tour, photos };
}

async function getAcceptedData(tourName, lang) {
    const sheets = getSheetsClient();
    const sheetName = `Tours_${lang}`;
    
    // Get description data - new layout uses columns:
    // A=Tour Name, B=New Name, C=Title, D=H1, E=Meta, F=Short, G=Highlights Title(s), H=Highlights Description(s), I=Long
    const descRes = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: `${sheetName}!A:I` });
    const descValues = descRes.data.values || [];
    
    if (descValues.length === 0) {
        throw new Error(`Sheet "${sheetName}" is empty. No accepted data available.`);
    }
    
    const normalizedTourName = toTrimmedString(tourName).toLowerCase();
    
    // Find row by comparing column A (tour name) or column B (new name) for backwards compatibility
    let tourRow = null;
    let matchedColumn = null;
    for (const row of descValues) {
        if (!row) continue;
        const columnA = row[0] ? toTrimmedString(row[0]).toLowerCase() : '';
        const columnB = row[1] ? toTrimmedString(row[1]).toLowerCase() : '';
        if (columnA && columnA === normalizedTourName) {
            tourRow = row;
            matchedColumn = 'A';
            break;
        }
        if (columnB && columnB === normalizedTourName) {
            tourRow = row;
            matchedColumn = 'B';
            break;
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
    
    const isNewFormat = tourRow.length >= 9 || matchedColumn === 'A';

    let description;
    if (isNewFormat) {
        const highlightTitlesCell = tourRow[6] || '';
        const highlightDescriptionsCell = tourRow[7] || '';
        const highlightsCombined = buildHighlightsTextFromColumns(highlightTitlesCell, highlightDescriptionsCell);

        description = {
            newName: toTrimmedString(tourRow[1] || ''),
            title: toTrimmedString(tourRow[2] || ''),
            h1: toTrimmedString(tourRow[3] || ''),
            meta: toTrimmedString(tourRow[4] || ''),
            short: toTrimmedString(tourRow[5] || ''),
            long: toTrimmedString(tourRow[8] || ''),
            highlights: highlightsCombined,
        };
    } else {
        // Legacy format: A=New Name, B=Title, C=H1, D=Meta, E=Short, F=Long, G=Highlights (combined)
        description = {
            newName: toTrimmedString(tourRow[0] || ''),
            title: toTrimmedString(tourRow[1] || ''),
            h1: toTrimmedString(tourRow[2] || ''),
            meta: toTrimmedString(tourRow[3] || ''),
            short: toTrimmedString(tourRow[4] || ''),
            long: toTrimmedString(tourRow[5] || ''),
            highlights: toTrimmedString(tourRow[6] || ''),
        };
    }

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
        // Find existing row for this tour (match by original name or legacy new name)
        const allRowsRes = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: `${descSheetName}!A:B`,
        });
        const allRows = allRowsRes.data.values || [];
        let existingRowIndex = null;

        // Normalize identifiers for comparison (case-insensitive, trimmed)
        const normalizedTourName = toTrimmedString(tourName).toLowerCase();
        const normalizedNewName = toTrimmedString(data.description.newName || '').toLowerCase();

        for (let i = 0; i < allRows.length; i++) {
            const row = allRows[i] || [];
            const columnA = row[0] ? toTrimmedString(row[0]).toLowerCase() : '';
            const columnB = row[1] ? toTrimmedString(row[1]).toLowerCase() : '';

            if (columnA && (columnA === normalizedTourName || columnA === normalizedNewName)) {
                existingRowIndex = i + 1;
                console.log(`Found existing row ${existingRowIndex} for tour "${tourName}" (matched column A value "${row[0]}")`);
                break;
            }
            if (columnB && (columnB === normalizedTourName || columnB === normalizedNewName)) {
                existingRowIndex = i + 1;
                console.log(`Found existing row ${existingRowIndex} for tour "${tourName}" (matched column B value "${row[1]}")`);
                break;
            }
        }

        if (!existingRowIndex) {
            console.log(`No existing row found for tour "${tourName}". Will append new row.`);
        }

        const highlightItems = parseHighlightPairsFromText(data.description.highlights || '');
        const highlightTitlesCell = serializeHighlightColumn(highlightItems, 'title');
        const highlightDescriptionsCell = serializeHighlightColumn(highlightItems, 'description');

        // Columns: A=Tour Name, B=New Name, C=Title, D=H1, E=Meta, F=Short, G=Highlights Title(s), H=Highlights Description(s), I=Long
        const descData = [
            tourName || '',
            data.description.newName || '',
            data.description.title || '',
            data.description.h1 || '',
            data.description.meta || '',
            data.description.short || '',
            highlightTitlesCell,
            highlightDescriptionsCell,
            data.description.long || '',
        ];

        console.log(`Writing description to ${descSheetName}:`, {
            tourName: descData[0],
            newName: descData[1],
            title: descData[2],
            h1: descData[3],
            meta: descData[4],
            shortLength: descData[5]?.length || 0,
            highlightsTitlesCount: highlightItems.length,
            highlightTitlesSample: highlightItems.slice(0, 3),
            longLength: descData[8]?.length || 0,
            existingRowIndex,
        });

        let result;
        if (existingRowIndex) {
            // Update existing row (columns A through I)
            result = await sheets.spreadsheets.values.update({
                spreadsheetId: SPREADSHEET_ID,
                range: `${descSheetName}!A${existingRowIndex}:I${existingRowIndex}`,
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

        console.log(`=== RENAMING FILES IN DRIVE ===`);
        console.log(`Tour: ${tourName}, Photos to rename: ${data.photos?.length || 0}`);
        console.log(`Source photos count: ${sourcePhotos.length}`);
        
        for (const photoMeta of data.photos) {
            const sourcePhoto = sourcePhotos.find(p => p.id === photoMeta.id);
            console.log(`Processing photo ID: ${photoMeta.id}`);
            console.log(`  - Found in sourcePhotos: ${!!sourcePhoto}`);
            console.log(`  - driveFileId: ${sourcePhoto?.driveFileId || 'MISSING'}`);
            console.log(`  - newName: ${photoMeta.newName || 'MISSING'}`);
            
            if (sourcePhoto && sourcePhoto.driveFileId) {
                try {
                    await drive.files.update({
                        fileId: sourcePhoto.driveFileId,
                        requestBody: { name: photoMeta.newName },
                        supportsAllDrives: true,
                    });
                    console.log(`✓ Successfully renamed file ${sourcePhoto.driveFileId} to ${photoMeta.newName}`);
                } catch (e) {
                    console.error(`✗ Failed to rename file ${sourcePhoto.driveFileId}:`, e.message);
                    console.error(`  Error details:`, e);
                }
            } else {
                console.warn(`⚠ Skipping photo ${photoMeta.id}: ${!sourcePhoto ? 'not found in sourcePhotos' : 'driveFileId missing'}`);
            }
        }
        console.log(`=== RENAME OPERATION COMPLETE ===`);
    } else {
        console.log(`Rename in Drive not requested (renameInDrive=false)`);
    }
}

export async function createTour(tourData) {
    const sheets = getSheetsClient();
    
    try {
        // Get headers from Tours_Source to map columns correctly
        const headerRes = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Tours_Source!1:1',
        });
        const headers = (headerRes.data.values && headerRes.data.values[0]) || [];
        
        // Create a map of column index to normalized header name
        const columnMap = {};
        headers.forEach((header, index) => {
            if (header) {
                const normalized = normalizeKey(header.trim());
                columnMap[normalized] = index;
            }
        });
        
        // Create row data array with enough columns
        const maxColumnIndex = Math.max(...Object.values(columnMap), headers.length - 1);
        const rowData = new Array(maxColumnIndex + 1).fill('');
        
        // Map data to correct columns based on headers
        if (columnMap['city'] !== undefined) rowData[columnMap['city']] = tourData.city || '';
        if (columnMap['name'] !== undefined || columnMap['tourname'] !== undefined) {
            const nameIndex = columnMap['name'] !== undefined ? columnMap['name'] : columnMap['tourname'];
            rowData[nameIndex] = tourData.name || '';
        }
        if (columnMap['title'] !== undefined) rowData[columnMap['title']] = tourData.title || '';
        if (columnMap['h1'] !== undefined) rowData[columnMap['h1']] = tourData.h1 || '';
        if (columnMap['meta'] !== undefined || columnMap['metadescription'] !== undefined) {
            const metaIndex = columnMap['meta'] !== undefined ? columnMap['meta'] : columnMap['metadescription'];
            rowData[metaIndex] = tourData.meta || '';
        }
        if (columnMap['short'] !== undefined) rowData[columnMap['short']] = tourData.short || '';
        if (columnMap['long'] !== undefined) rowData[columnMap['long']] = tourData.long || '';
        if (columnMap['highlightstitle'] !== undefined) rowData[columnMap['highlightstitle']] = tourData.highlightsTitle || '';
        if (columnMap['highlightsdescription'] !== undefined) rowData[columnMap['highlightsdescription']] = tourData.highlightsDescription || '';
        
        // Add photo IDs - find columns that match "photoid" pattern
        if (tourData.photoIds && tourData.photoIds.length > 0) {
            const photoIdColumns = [];
            headers.forEach((header, index) => {
                if (header && normalizeKey(header.trim()).startsWith('photoid')) {
                    photoIdColumns.push(index);
                }
            });
            
            // Fill photo ID columns
            tourData.photoIds.forEach((photoId, index) => {
                if (photoIdColumns[index] !== undefined) {
                    rowData[photoIdColumns[index]] = photoId;
                } else {
                    // If we run out of photo ID columns, append to the end
                    rowData.push(photoId);
                }
            });
        }
        
        // Remove trailing empty cells
        while (rowData.length > 0 && rowData[rowData.length - 1] === '') {
            rowData.pop();
        }
        
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Tours_Source!A1',
            valueInputOption: 'USER_ENTERED',
            requestBody: { values: [rowData] },
        });
        console.log(`Tour "${tourData.name}" created successfully in Tours_Source`);
    } catch (error) {
        console.error('Error creating tour:', error);
        throw new Error(`Failed to create tour: ${error.message || String(error)}`);
    }
}

/**
 * Upload a photo file to Google Drive
 * @param {Buffer} fileBuffer - The file buffer
 * @param {string} fileName - The desired file name (should be .webp)
 * @param {string} folderId - Optional folder ID where to upload (if null, uploads to root)
 * @returns {Promise<{fileId: string, webViewLink: string, thumbnailLink: string}>}
 */
export async function uploadPhotoToDrive(fileBuffer, fileName, folderId = null) {
    const drive = getDriveClient();
    
    try {
        // For Shared Drive, we need a folder ID within the Shared Drive
        // The folderId parameter should be a folder within the Shared Drive
        const sharedDriveId = process.env.GOOGLE_DRIVE_SHARED_DRIVE_ID || null;
        
        if (!folderId && !sharedDriveId) {
            throw new Error('Either GOOGLE_DRIVE_PHOTOS_FOLDER_ID or GOOGLE_DRIVE_SHARED_DRIVE_ID must be configured');
        }
        
        const fileMetadata = {
            name: fileName,
            ...(folderId && { parents: [folderId] })
        };
        
        // Convert Buffer to stream for Google Drive API
        const { Readable } = await import('stream');
        const stream = Readable.from(fileBuffer);
        
        const media = {
            mimeType: 'image/webp',
            body: stream,
        };
        
        // Use supportsAllDrives for Shared Drive support
        const createOptions = {
            requestBody: fileMetadata,
            media: media,
            fields: 'id, webViewLink, thumbnailLink',
            supportsAllDrives: true,
        };
        
        const file = await drive.files.create(createOptions);
        
        // Make the file publicly viewable (optional, depending on requirements)
        await drive.permissions.create({
            fileId: file.data.id,
            requestBody: {
                role: 'reader',
                type: 'anyone',
            },
            supportsAllDrives: true,
        });
        
        // Generate thumbnail URL
        const thumbnailLink = `https://drive.google.com/thumbnail?id=${file.data.id}&sz=w400`;
        
        return {
            fileId: file.data.id,
            webViewLink: file.data.webViewLink,
            thumbnailLink: thumbnailLink,
        };
    } catch (error) {
        console.error('Error uploading photo to Drive:', error);
        throw new Error(`Failed to upload photo to Drive: ${error.message || String(error)}`);
    }
}

/**
 * Generate a unique photo ID
 * @returns {string} Unique photo ID (timestamp + random)
 */
export function generatePhotoId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${timestamp}-${random}`;
}

/**
 * Add a photo entry to Photos_Source sheet
 * @param {string} photoId - The photo ID
 * @param {string} url - The photo URL (Google Drive link)
 * @param {string} name - The photo name
 * @param {string} city - The city name
 * @param {string} country - The country name
 * @param {string} driveFileId - The Google Drive file ID
 */
export async function addPhotoIdToTour(tourName, photoId) {
    const sheets = getSheetsClient();
    
    try {
        // Get all rows from Tours_Source
        const res = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Tours_Source!A:AZ',
        });
        const values = res.data.values || [];
        if (values.length === 0) {
            throw new Error('Tours_Source sheet is empty');
        }
        
        const [header, ...rows] = values;
        const tourRowIndex = rows.findIndex(row => {
            const nameIndex = header.findIndex(h => normalizeKey(h) === 'name' || normalizeKey(h) === 'tourname');
            return nameIndex >= 0 && toTrimmedString(row[nameIndex]).toLowerCase() === toTrimmedString(tourName).toLowerCase();
        });
        
        if (tourRowIndex === -1) {
            throw new Error(`Tour "${tourName}" not found in Tours_Source`);
        }
        
        const tourRow = rows[tourRowIndex];
        
        // Find photo ID columns
        const photoIdColumns = [];
        header.forEach((h, index) => {
            if (h && normalizeKey(h.trim()).startsWith('photoid')) {
                photoIdColumns.push(index);
            }
        });
        
        // Check if photoId already exists
        const existingPhotoIds = photoIdColumns
            .map(colIndex => toTrimmedString(tourRow[colIndex] || ''))
            .filter(Boolean);
        
        if (existingPhotoIds.includes(photoId)) {
            console.log(`Photo ID ${photoId} already exists in tour "${tourName}"`);
            return; // Already added
        }
        
        // Find first empty photo ID column or add new column
        let targetColumnIndex = photoIdColumns.find(colIndex => !tourRow[colIndex] || !toTrimmedString(tourRow[colIndex]));
        
        if (targetColumnIndex === undefined) {
            // Need to add a new column - find the last column index
            const lastPhotoIdCol = photoIdColumns.length > 0 ? photoIdColumns[photoIdColumns.length - 1] : header.length - 1;
            targetColumnIndex = lastPhotoIdCol + 1;
            
            // Add header for new column
            const newHeaderName = `Photo ID ${photoIdColumns.length + 1}`;
            await sheets.spreadsheets.values.update({
                spreadsheetId: SPREADSHEET_ID,
                range: `Tours_Source!${String.fromCharCode(65 + targetColumnIndex)}1`,
                valueInputOption: 'USER_ENTERED',
                requestBody: { values: [[newHeaderName]] }
            });
        }
        
        // Update the cell with photoId
        const rowNumber = tourRowIndex + 2; // +2 because: +1 for header, +1 for 1-based indexing
        const columnLetter = String.fromCharCode(65 + targetColumnIndex);
        await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range: `Tours_Source!${columnLetter}${rowNumber}`,
            valueInputOption: 'USER_ENTERED',
            requestBody: { values: [[photoId]] }
        });
        
        console.log(`Added photo ID ${photoId} to tour "${tourName}" in column ${columnLetter}`);
    } catch (error) {
        console.error('Error adding photo ID to tour:', error);
        throw new Error(`Failed to add photo ID to tour: ${error.message || String(error)}`);
    }
}

export async function addPhotoToSource(photoId, url, name, city, country, driveFileId) {
    const sheets = getSheetsClient();
    
    try {
        // Get headers from Photos_Source to map columns correctly
        const headerRes = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Photos_Source!1:1',
        });
        const headers = (headerRes.data.values && headerRes.data.values[0]) || [];
        
        // Create a map of column index to normalized header name
        const columnMap = {};
        headers.forEach((header, index) => {
            if (header) {
                const normalized = normalizeKey(header.trim());
                columnMap[normalized] = index;
            }
        });
        
        // Create row data array with enough columns
        const maxColumnIndex = Math.max(...Object.values(columnMap), headers.length - 1);
        const rowData = new Array(maxColumnIndex + 1).fill('');
        
        // Map data to correct columns based on headers
        if (columnMap['id'] !== undefined) rowData[columnMap['id']] = photoId;
        if (columnMap['url'] !== undefined) rowData[columnMap['url']] = url;
        if (columnMap['name'] !== undefined) rowData[columnMap['name']] = name;
        if (columnMap['city'] !== undefined) rowData[columnMap['city']] = city;
        if (columnMap['country'] !== undefined) rowData[columnMap['country']] = country;
        if (columnMap['drivefileid'] !== undefined) rowData[columnMap['drivefileid']] = driveFileId;
        
        // Remove trailing empty cells
        while (rowData.length > 0 && rowData[rowData.length - 1] === '') {
            rowData.pop();
        }
        
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Photos_Source!A1',
            valueInputOption: 'USER_ENTERED',
            requestBody: { values: [rowData] },
        });
        
        console.log(`Photo "${photoId}" added successfully to Photos_Source`);
    } catch (error) {
        console.error('Error adding photo to Photos_Source:', error);
        throw new Error(`Failed to add photo to Photos_Source: ${error.message || String(error)}`);
    }
}
