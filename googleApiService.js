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
const sheetDataToObject = (header, row) => {
    const obj = {};
    header.forEach((key, i) => obj[key] = row[i] || '');
    return obj;
};

// --- CORE FUNCTIONS ---

export async function getTours() {
    const sheets = getSheetsClient();
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Tours_Source!A:H', // Assuming columns A-H are used
    });
    const [header, ...rows] = res.data.values;
    const toursSource = rows.map(row => sheetDataToObject(header, row));

    // Fetch statuses from all destination sheets
    const langSheetNames = ['Tours_EN', 'Tours_PL', 'Tours_DE', 'Tours_ES'];
    const statusData = {};
    for (const sheet of langSheetNames) {
        try {
            const statusRes = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: `${sheet}!A:A` });
            statusData[sheet] = new Set(statusRes.data.values.flat());
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
    // Get tour data
    const toursRes = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: 'Tours_Source!A:G' });
    const [toursHeader, ...toursRows] = toursRes.data.values;
    const tourData = toursRows.map(row => sheetDataToObject(toursHeader, row)).find(t => t.name === name);

    if (!tourData) throw new Error('Tour not found');
    const tour = { ...tourData, photoIds: tourData.photoIds.split(',').map(s => s.trim()) };

    // Get photo data
    const photosRes = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: 'Photos_Source!A:F' });
    const [photosHeader, ...photosRows] = photosRes.data.values;
    const allPhotos = photosRows.map(row => sheetDataToObject(photosHeader, row));
    const photos = allPhotos.filter(p => tour.photoIds.includes(p.id)).map(p => ({...p, metadata: {}}));

    return { tour, photos };
}

async function getAcceptedData(tourName, lang) {
    const sheets = getSheetsClient();
    const sheetName = `Tours_${lang}`;
    
    // Get description data
    const descRes = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: `${sheetName}!A:D` });
    const [descHeader, ...descRows] = descRes.data.values;
    const tourDescData = descRows.map(row => sheetDataToObject(descHeader, row)).find(t => t.tourName === tourName);
    if (!tourDescData) throw new Error(`Accepted data not found for tour "${tourName}" in sheet "${sheetName}"`);
    const description = { short: tourDescData.short, long: tourDescData.long, highlights: tourDescData.highlights };

    // Get photo metadata
    const photoMetaRes = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: 'Photos_Metadata!A:F' });
    const [photoHeader, ...photoRows] = photoMetaRes.data.values;
    const { photos: sourcePhotos } = await getTourDetails(tourName);
    const sourcePhotoIds = new Set(sourcePhotos.map(p => p.id));

    const photos = photoRows.map(row => sheetDataToObject(photoHeader, row))
        .filter(p => p.lang === lang && sourcePhotoIds.has(p.photoId))
        .map(({ photoId, ...meta }) => ({ ...meta, id: photoId }));

    return { description, photos };
}

export const getCanonicalEnData = (tourName) => getAcceptedData(tourName, 'EN');
export const getLocalizedData = (tourName, lang) => getAcceptedData(tourName, lang.toUpperCase());


export async function acceptChanges(tourName, mode, data, renameInDrive) {
    const sheets = getSheetsClient();
    const lang = mode.toUpperCase();
    const descSheetName = `Tours_${lang}`;

    // 1. Write/Update description
    const descData = [tourName, data.description.short, data.description.long, data.description.highlights];
    await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${descSheetName}!A1`,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        requestBody: { values: [descData] }
    });

    // 2. Write photo metadata
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
