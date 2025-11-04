
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
        } catch(e) {
            console.warn(`Could not read sheet ${sheet}, assuming no tours are completed.`);
            statusData[sheet] = new Set();
        }
    }

    return toursSource.map(tour => ({
        name: tour.name,
        statuses: {
            enDesc: statusData['Tours_EN'].has(tour.name),
            photosEn: statusData['Tours_EN'].has(tour.name), // Assume photos done with desc
            plDesc: statusData['Tours_PL'].has(tour.name),
            photosPl: statusData['Tours_PL'].has(tour.name),
            deDesc: statusData['Tours_DE'].has(tour.name),
            photosDe: statusData['Tours_DE'].has(tour.name),
            esDesc: statusData['Tours_ES'].has(tour.name),
            photosEs: statusData['Tours_ES'].has(tour.name),
        },
    }));
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
    const allPhotos = photosRows.map(row => sheetDataToObject(photosHeader, row));
    const photoIdSet = new Set(tour.photoIds);
    const photos = allPhotos
        .filter(p => photoIdSet.has(p.id))
        .map(p => ({ ...p, metadata: {} }));

    return { tour, photos };
}

async function getAcceptedData(tourName, lang) {
    const sheets = getSheetsClient();
    const sheetName = `Tours_${lang}`;
    
    // Get description data
    const descRes = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: `${sheetName}!A:D` });
    const descValues = descRes.data.values || [];
    const [descHeader = [], ...descRows] = descValues;
    const tourDescData = descRows
        .map(row => sheetDataToObject(descHeader, row))
        .find(row => getValueForKeys(row, ['tourName', 'name']) === toTrimmedString(tourName));
    if (!tourDescData) throw new Error(`Accepted data not found for tour "${tourName}" in sheet "${sheetName}"`);
    const description = {
        short: getValueForKeys(tourDescData, ['short']),
        long: getValueForKeys(tourDescData, ['long']),
        highlights: getValueForKeys(tourDescData, ['highlights', 'highlightsDescription']),
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

    // 1. Write/Update description
    // To prevent duplicates, we first need to find if a row exists and update it, or append if not.
    // For simplicity in this context, we will continue to append, but a real-world app should handle updates.
    // A simple way to handle this without complex searches would be to clear existing entries for the tour before appending.
    const descData = [tourName, data.description.short, data.description.long, data.description.highlights];
    await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${descSheetName}!A1`,
        valueInputOption: 'USER_ENTERED',
        // Note: A more robust solution might use batchUpdate to find and replace or delete and insert.
        // For this app's flow, append might be acceptable if old versions are manually cleared or ignored.
        requestBody: { values: [descData] }
    });

    // 2. Write photo metadata
    // Similar to descriptions, this appends. A robust solution would update existing metadata.
    const photoMetaData = data.photos.map(p => [p.id, lang, p.newName, p.caption, p.alt, p.description || '']);
    await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Photos_Metadata!A1',
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: photoMetaData },
    });
    
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
