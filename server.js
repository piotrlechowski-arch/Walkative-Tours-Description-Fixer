import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';
import { getTours, getTourDetails, getCanonicalEnData, getLocalizedData, acceptChanges, createTour, uploadPhotoToDrive, addPhotoToSource, generatePhotoId, addPhotoIdToTour, getPromptsFromSheet, updatePrompt, updateCharLimit, initializePromptsSheet } from './googleApiService.js';
import { google } from 'googleapis';
import { JWT, OAuth2Client } from 'google-auth-library';
import multer from 'multer';
import sharp from 'sharp';
import convert from 'heic-convert';

/**
 * Convert HEIC/HEIF to JPEG using heic-convert npm library (WebAssembly-based)
 * This is more reliable than CLI tools and doesn't require system dependencies
 * @param {Buffer} heicBuffer - HEIC file buffer
 * @returns {Promise<Buffer>} - JPEG file buffer
 */
async function convertHeicToJpeg(heicBuffer) {
    try {
        console.log(`Converting HEIC to JPEG using heic-convert library (input size: ${heicBuffer.length} bytes)`);
        
        // Convert HEIC to JPEG using WebAssembly-based library
        // format: 'JPEG', quality: 0.9 (90%)
        const jpegBuffer = await convert({
            buffer: heicBuffer,
            format: 'JPEG',
            quality: 0.9
        });
        
        console.log(`HEIC converted to JPEG successfully, size: ${jpegBuffer.length} bytes`);
        return Buffer.from(jpegBuffer);
    } catch (error) {
        console.error(`HEIC conversion error:`, error);
        throw new Error(`Failed to convert HEIC to JPEG: ${error.message}`);
    }
}

const app = express();
app.use(express.json({ limit: '10mb' }));

// Configure multer for file uploads (memory storage)
const upload = multer({ 
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
    fileFilter: (req, file, cb) => {
        // Accept image files including HEIC
        const allowedMimes = [
            'image/jpeg',
            'image/jpg', 
            'image/png',
            'image/webp',
            'image/heic',
            'image/heif',
            'image/heic-sequence',
            'image/heif-sequence'
        ];
        
        // Check mimetype or extension for HEIC files
        const isImage = file.mimetype.startsWith('image/') || 
                       allowedMimes.includes(file.mimetype.toLowerCase()) ||
                       /\.(heic|heif)$/i.test(file.originalname);
        
        if (isImage) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed (JPEG, PNG, WebP, HEIC)'), false);
        }
    }
});

// Log unexpected rejections/exceptions so Railway/Cloud Run logs show the root cause.
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled promise rejection:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// OAuth 2.0 configuration for Google Drive uploads
const getOAuth2Client = () => {
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_OAUTH_REDIRECT_URI || 
    `${process.env.PUBLIC_URL || 'https://walkative-tours-fixer-v2-427383392801.us-west1.run.app'}/api/auth/google/callback`;
  
  if (!clientId || !clientSecret) {
    return null;
  }
  
  return new OAuth2Client(clientId, clientSecret, redirectUri);
};

// Get owner's access token (refresh if needed)
const getOwnerAccessToken = async () => {
  const refreshToken = process.env.GOOGLE_DRIVE_OWNER_REFRESH_TOKEN;
  if (!refreshToken) {
    throw new Error('Google Drive owner authorization required. Please authorize the app in Settings.');
  }
  
  const oauth2Client = getOAuth2Client();
  if (!oauth2Client) {
    throw new Error('OAuth 2.0 client not configured. Please set GOOGLE_OAUTH_CLIENT_ID and GOOGLE_OAUTH_CLIENT_SECRET.');
  }
  
  oauth2Client.setCredentials({ refresh_token: refreshToken });
  
  try {
    const { credentials } = await oauth2Client.refreshAccessToken();
    return credentials.access_token;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw new Error('Failed to refresh access token. Please re-authorize the app in Settings.');
  }
};

// Get Drive client using owner's OAuth token (for uploads and rename)
const getOwnerDriveClient = async () => {
  const accessToken = await getOwnerAccessToken();
  const oauth2Client = getOAuth2Client();
  if (!oauth2Client) {
    throw new Error('OAuth 2.0 client not configured');
  }
  oauth2Client.setCredentials({ access_token: accessToken });
  return google.drive({ version: 'v3', auth: oauth2Client });
};

// Helper to get Google Drive client (with write access for uploads)
const getDriveClient = () => {
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS);
  const auth = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: [
      'https://www.googleapis.com/auth/drive.readonly',
      'https://www.googleapis.com/auth/drive.file', // For file uploads
    ],
  });
  return google.drive({ version: 'v3', auth });
};

// Endpoint to fetch image from Google Drive and return as base64
app.get('/api/image/:fileId', async (req, res) => {
  try {
    const { fileId } = req.params;
    if (!fileId) {
      return res.status(400).json({ error: 'File ID is required' });
    }

    const drive = getDriveClient();
    
    // Get MIME type first
    const fileMetadata = await drive.files.get({
      fileId,
      fields: 'mimeType',
      supportsAllDrives: true,
    });
    const mimeType = fileMetadata.data.mimeType || 'image/jpeg';
    
    // Get file content using get_media
    const response = await drive.files.get(
      { fileId, alt: 'media', supportsAllDrives: true },
      { responseType: 'arraybuffer' }
    );
    
    // Convert to base64
    const buffer = Buffer.from(response.data);
    const base64 = buffer.toString('base64');
    
    console.log(`Successfully fetched image ${fileId}, size: ${buffer.length} bytes, mimeType: ${mimeType}`);
    
    res.json({ 
      data: base64, 
      mimeType 
    });
  } catch (error) {
    console.error('Error fetching image from Drive:', error);
    const errorMessage = error.message || String(error);
    res.status(500).json({ 
      error: `Failed to fetch image: ${errorMessage}` 
    });
  }
});

// Gemini API endpoint
app.post('/api/generate', async (req, res) => {
  try {
    if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable is not set.");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Normalize the request format for Gemini API
    const { model, contents, config } = req.body;
    
    if (!contents) {
      throw new Error("contents is required in request body");
    }
    
    // LOG: Calculate approximate token count and request size
    const contentsStr = JSON.stringify(contents);
    const configStr = JSON.stringify(config || {});
    const approxTokens = Math.ceil((contentsStr.length + configStr.length) / 4);
    
    console.log('=== GEMINI API REQUEST ===');
    console.log('Model:', model || 'gemini-2.5-pro');
    console.log('Contents length:', contentsStr.length, 'chars');
    console.log('Config length:', configStr.length, 'chars');
    console.log('Estimated tokens:', approxTokens);
    console.log('System instruction length:', config?.systemInstruction?.length || 0, 'chars');
    
    // Count images in contents if present
    let imageCount = 0;
    if (Array.isArray(contents)) {
      contents.forEach(content => {
        if (content.parts && Array.isArray(content.parts)) {
          imageCount += content.parts.filter(p => p.inlineData || p.fileData).length;
        }
      });
    } else if (contents.parts && Array.isArray(contents.parts)) {
      imageCount = contents.parts.filter(p => p.inlineData || p.fileData).length;
    }
    console.log('Images/files in request:', imageCount);
    console.log('==========================');
    
    // Get the model (default to gemini-2.5-pro if not specified)
    const modelName = model || 'gemini-2.5-pro';
    
    // Build request object
    const request = {
      model: modelName,
      contents: contents, // API accepts string, array, or object directly
    };
    
    // Add config if provided
    if (config) {
      request.config = config;
    }
    
    // Call generateContent using models API
    const response = await ai.models.generateContent(request);
    
    // Extract text from response
    const text = response.text;
    
    console.log('=== GEMINI API RESPONSE ===');
    console.log('Response length:', text?.length || 0, 'chars');
    console.log('===========================');
    
    res.json({ text });
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    const errorMessage = error.message || String(error);
    res.status(500).json({ error: errorMessage });
  }
});

// OAuth 2.0 endpoints for Google Drive authorization
app.get('/api/auth/google', async (req, res) => {
  try {
    const oauth2Client = getOAuth2Client();
    if (!oauth2Client) {
      return res.status(500).json({ error: 'OAuth 2.0 client not configured' });
    }
    
    const scopes = ['https://www.googleapis.com/auth/drive.file'];
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
      prompt: 'consent', // Force consent screen to get refresh token
    });
    
    res.redirect(authUrl);
  } catch (error) {
    console.error('Error initiating OAuth flow:', error);
    res.status(500).json({ error: 'Failed to initiate OAuth flow' });
  }
});

app.get('/api/auth/google/callback', async (req, res) => {
  try {
    const { code } = req.query;
    if (!code) {
      return res.status(400).json({ error: 'Authorization code not provided' });
    }
    
    const oauth2Client = getOAuth2Client();
    if (!oauth2Client) {
      return res.status(500).json({ error: 'OAuth 2.0 client not configured' });
    }
    
    const { tokens } = await oauth2Client.getToken(String(code));
    
    if (!tokens.refresh_token) {
      return res.status(400).json({ error: 'Refresh token not received. Please try again.' });
    }
    
    // Store refresh token - in production, this should be saved to Cloud Run secret
    // For now, we'll return it so it can be manually added to Cloud Run secret
    res.send(`
      <html>
        <head><title>Authorization Successful</title></head>
        <body style="font-family: Arial, sans-serif; padding: 40px; text-align: center;">
          <h1 style="color: green;">✅ Authorization Successful!</h1>
          <p>Please add this refresh token to Cloud Run secret <code>GOOGLE_DRIVE_OWNER_REFRESH_TOKEN</code>:</p>
          <textarea readonly style="width: 100%; height: 100px; font-family: monospace; padding: 10px; margin: 20px 0;">${tokens.refresh_token}</textarea>
          <p><strong>Important:</strong> Keep this token secure. Do not share it publicly.</p>
          <p><a href="/settings" style="color: blue;">Return to Settings</a></p>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Error handling OAuth callback:', error);
    res.status(500).send(`
      <html>
        <head><title>Authorization Failed</title></head>
        <body style="font-family: Arial, sans-serif; padding: 40px; text-align: center;">
          <h1 style="color: red;">❌ Authorization Failed</h1>
          <p>Error: ${error instanceof Error ? error.message : String(error)}</p>
          <p><a href="/settings" style="color: blue;">Return to Settings</a></p>
        </body>
      </html>
    `);
  }
});

app.get('/api/auth/google/status', async (req, res) => {
  try {
    const refreshToken = process.env.GOOGLE_DRIVE_OWNER_REFRESH_TOKEN;
    if (!refreshToken) {
      return res.json({ authorized: false, message: 'Not authorized' });
    }
    
    // Try to refresh token to verify it's valid
    try {
      await getOwnerAccessToken();
      return res.json({ authorized: true, message: 'Authorized' });
    } catch (error) {
      return res.json({ authorized: false, message: 'Token expired or invalid' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to check authorization status' });
  }
});

// Google Sheets API Endpoints
app.get('/api/tours', async (req, res) => {
  try {
    const tours = await getTours();
    res.json(tours);
  } catch (error) {
    console.error('Error fetching tours:', error);
    res.status(500).json({ error: 'Failed to fetch tours from Google Sheets.' });
  }
});

app.post('/api/tours', async (req, res) => {
  try {
    const tourData = req.body;
    await createTour(tourData);
    res.status(201).json({ message: 'Tour created successfully.' });
  } catch (error) {
    console.error('Error creating tour:', error);
    res.status(500).json({ error: 'Failed to create tour.' });
  }
});

app.get('/api/tours/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const tourDetails = await getTourDetails(name);
    res.json(tourDetails);
  } catch (error) {
    console.error(`Error fetching details for tour ${req.params.name}:`, error);
    res.status(500).json({ error: `Failed to fetch tour details for ${req.params.name}.` });
  }
});

app.get('/api/tours/:name/canonical-en', async (req, res) => {
    try {
        const data = await getCanonicalEnData(req.params.name);
        res.json(data);
    } catch(e) {
        res.status(404).json({error: e.message});
    }
});

app.get('/api/tours/:name/localized/:lang', async (req, res) => {
    try {
        const {name, lang} = req.params;
        const data = await getLocalizedData(name, lang);
        res.json(data);
    } catch(e) {
        res.status(404).json({error: e.message});
    }
});

app.post('/api/tours/:name/accept', async (req, res) => {
    try {
        const { name } = req.params;
        const { mode, data, renameInDrive } = req.body;
        await acceptChanges(name, mode, data, renameInDrive);
        res.status(200).json({ message: 'Changes accepted successfully.' });
    } catch (error) {
        console.error('Error accepting changes:', error);
        res.status(500).json({ error: 'Failed to accept changes.' });
    }
});

// Endpoint to convert HEIC/HEIF images to base64 JPEG for analysis
app.post('/api/convert-image', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        console.log(`Converting image: ${req.file.originalname}, format: ${req.file.mimetype}, size: ${req.file.buffer.length} bytes`);

        // Convert any image format (including HEIC) to JPEG using Sharp
        let image = sharp(req.file.buffer);
        
        // Get image metadata
        const metadata = await image.metadata();
        console.log(`Image format: ${metadata.format}, size: ${metadata.width}x${metadata.height}`);
        
        // Resize if image is too large (max width 1920px to reduce token usage)
        if (metadata.width && metadata.width > 1920) {
            image = image.resize(1920, null, {
                withoutEnlargement: true,
                fit: 'inside'
            });
            console.log(`Resizing image from ${metadata.width}px to max 1920px width`);
        }
        
        // Convert to JPEG with good quality for analysis
        const jpegBuffer = await image
            .jpeg({ 
                quality: 85,
                mozjpeg: true
            })
            .toBuffer();
        
        // Convert to base64
        const base64Data = jpegBuffer.toString('base64');
        
        console.log(`Successfully converted image to JPEG base64, final size: ${jpegBuffer.length} bytes`);
        
        res.json({ 
            data: base64Data, 
            mimeType: 'image/jpeg',
            originalFormat: metadata.format,
            originalSize: req.file.buffer.length,
            convertedSize: jpegBuffer.length
        });
    } catch (error) {
        console.error('Error converting image:', error);
        res.status(500).json({ error: `Failed to convert image: ${error.message || String(error)}` });
    }
});

// Photo upload endpoint
app.post('/api/upload-photo', upload.single('photo'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const { city, country } = req.body;
        if (!city) {
            return res.status(400).json({ error: 'City is required' });
        }

        // TWO-STAGE CONVERSION for HEIC files:
        // 1. HEIC -> JPEG using heif-convert (handles modern iPhone HEIC better)
        // 2. JPEG -> WebP using Sharp (this already works well)
        let processBuffer = req.file.buffer;
        const originalMimetype = req.file.mimetype.toLowerCase();
        const isHeic = originalMimetype.includes('heic') || originalMimetype.includes('heif') || 
                       req.file.originalname.toLowerCase().match(/\.(heic|heif)$/);
        
        if (isHeic) {
            console.log(`Detected HEIC file, using two-stage conversion (HEIC -> JPEG -> WebP)`);
            try {
                processBuffer = await convertHeicToJpeg(req.file.buffer);
            } catch (heicError) {
                console.error(`HEIC conversion failed: ${heicError.message}`);
                return res.status(400).json({ error: `Failed to process HEIC file: ${heicError.message}` });
            }
        }

        // Convert image to WebP with aggressive compression
        // Now using JPEG buffer if it was HEIC, or original buffer for other formats
        let image = sharp(processBuffer);
        
        // Get image metadata to check format and size
        const metadata = await image.metadata();
        console.log(`Uploaded image format: ${metadata.format}, size: ${metadata.width}x${metadata.height}, original size: ${processBuffer.length} bytes`);
        
        // Resize if image is too large (max width 1920px, maintain aspect ratio)
        if (metadata.width && metadata.width > 1920) {
            image = image.resize(1920, null, {
                withoutEnlargement: true,
                fit: 'inside'
            });
            console.log(`Resizing image from ${metadata.width}px to max 1920px width`);
        }
        
        // Convert to WebP with aggressive compression
        // Quality: 60 (lower = smaller file, but still good quality)
        // Effort: 6 (maximum compression effort)
        let webpBuffer = await image
            .webp({ 
                quality: 60,  // Reduced from 75 for smaller files
                effort: 6,     // Maximum compression effort
                nearLossless: false,
                smartSubsample: true
            })
            .toBuffer();
        
        // If file is still too large (>300KB), reduce quality further
        const maxSize = 300 * 1024; // 300KB
        let quality = 60;
        let attempts = 0;
        const maxAttempts = 5;
        
        while (webpBuffer.length > maxSize && attempts < maxAttempts && quality > 30) {
            quality -= 10;
            attempts++;
            console.log(`File too large (${webpBuffer.length} bytes), reducing quality to ${quality}`);
            
            image = sharp(processBuffer);
            if (metadata.width && metadata.width > 1920) {
                image = image.resize(1920, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                });
            }
            
            webpBuffer = await image
                .webp({ 
                    quality: quality,
                    effort: 6,
                    nearLossless: false,
                    smartSubsample: true
                })
                .toBuffer();
        }
        
        console.log(`Final WebP size: ${webpBuffer.length} bytes (${(webpBuffer.length / 1024).toFixed(1)} KB), quality: ${quality}`);

        // Generate unique photo ID
        const photoId = generatePhotoId();
        
        // Generate file name
        const originalName = req.file.originalname.replace(/\.[^/.]+$/, ''); // Remove extension
        const fileName = `${city}_${originalName}_${photoId}.webp`.replace(/[^a-zA-Z0-9._-]/g, '_');

        // Upload to Google Drive - use Shared Drive if configured, otherwise use folder ID
        // Shared Drive ID takes precedence over folder ID
        const driveFolderId = process.env.GOOGLE_DRIVE_PHOTOS_FOLDER_ID || null;
        const driveResult = await uploadPhotoToDrive(webpBuffer, fileName, driveFolderId);

        // Add to Photos_Source
        const photoName = `${city}_${originalName}`;
        await addPhotoToSource(
            photoId,
            driveResult.thumbnailLink, // Use thumbnail link as URL
            photoName,
            city || '',
            country || '',
            driveResult.fileId
        );

        res.status(200).json({
            photoId,
            url: driveResult.thumbnailLink,
            driveFileId: driveResult.fileId,
            message: 'Photo uploaded successfully'
        });
    } catch (error) {
        console.error('Error uploading photo:', error);
        res.status(500).json({ error: `Failed to upload photo: ${error.message || String(error)}` });
    }
});

// Endpoint to analyze uploaded photo and add to tour
app.post('/api/tours/:name/upload-photo', async (req, res) => {
    try {
        const { name } = req.params;
        const { photoId, photoUrl, city } = req.body;
        
        if (!photoId || !photoUrl || !city) {
            return res.status(400).json({ error: 'photoId, photoUrl, and city are required' });
        }
        
        // Get tour details to get description for photo analysis
        const { tour } = await getTourDetails(name);
        
        // Get photo from Photos_Source - we'll use a simpler approach via getTourDetails
        // For now, we'll get the photo info from the uploaded photo response
        // The photo should already be in Photos_Source from the upload endpoint
        const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS);
        const auth = new JWT({
            email: credentials.client_email,
            key: credentials.private_key,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const sheets = google.sheets({ version: 'v4', auth });
        const photosRes = await sheets.spreadsheets.values.get({ 
            spreadsheetId: process.env.GOOGLE_SHEET_ID, 
            range: 'Photos_Source!A:AZ' 
        });
        const photoValues = photosRes.data.values || [];
        const [photosHeader = [], ...photosRows] = photoValues;
        const allPhotos = photosRows.map(row => {
            const obj = {};
            photosHeader.forEach((key, i) => {
                if (key) obj[key.trim()] = row[i] ? String(row[i]).trim() : '';
            });
            return obj;
        });
        
        const photo = allPhotos.find(p => (p.ID || p.id) === photoId);
        if (!photo) {
            return res.status(404).json({ error: `Photo with ID ${photoId} not found in Photos_Source` });
        }
        
        // Get driveFileId from photo data (preferred) or extract from URL
        const driveFileId = photo.driveFileId || photo.drivefileid || photo.DriveFileId || photo.DriveFileID || null;
        let fileId = driveFileId;
        
        if (!fileId) {
            // Fallback: extract from URL
            const fileIdMatch = photoUrl.match(/[?&]id=([^&]+)/) || photoUrl.match(/\/d\/([^\/]+)/);
            fileId = fileIdMatch ? fileIdMatch[1] : null;
        }
        
        if (!fileId) {
            return res.status(400).json({ error: 'Could not find driveFileId in Photos_Source or extract fileId from photoUrl' });
        }
        
        // Analyze photo using Gemini
        if (!process.env.API_KEY) {
            throw new Error("API_KEY environment variable is not set.");
        }
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        // Fetch image from Drive using Service Account (for reading)
        const drive = getDriveClient();
        
        const imageResponse = await drive.files.get({ 
            fileId, 
            alt: 'media',
            supportsAllDrives: true 
        }, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data);
        const base64 = buffer.toString('base64');
        const mimeType = imageResponse.headers['content-type'] || 'image/jpeg';
        
        // Prepare photo analysis prompt
        const photoPromptText = `
<city>${tour.city}</city>
<name>${tour.name}</name>
<en_short>${tour.short || ''}</en_short>
<photo_ids>${photoId}</photo_ids>
`;
        
        const photoPrompt = `Analizujesz zdjęcia przypisane do konkretnej wycieczki i tworzysz metadane w języku EN. Każde zdjęcie oceniaj w kontekście: city, tour name oraz kanonicznego opisu EN (short/long/highlights) – to pozwala rozpoznać miejsce, motyw i użyć właściwych nazw.

WAŻNE: ZAWSZE zwróć metadane dla zdjęcia, nawet jeśli nie jest idealnie związane z wycieczką. Jeśli zdjęcie nie pasuje do tematu wycieczki, opisz je neutralnie używając kontekstu miasta i wycieczki.

Dla każdego zdjęcia zwróć obiekt:
- newName – docelowa nazwa pliku (kebab-case, ascii, bez znaków PL/DE/ES), format: {{city}}-{{główne_miejsce}}-{{kontekst}}-{{unikalny-sufiks}}.webp.
- caption – 1–2 zdania, żywe i rzeczowe, naturalne dla EN; unikać klisz i wykrzykników.
- alt – ≤125 znaków, opisowe i unikalne, zawiera kluczowy obiekt i miejsce.
- description – (tylko dla EN; w innych językach puste lub pomiń).

Zasady:
- Nie zmieniaj nazw własnych; używaj tych z kontekstu (dzielnice, katedry, place).
- Nie zgaduj na siłę – jeśli niepewność, opisz neutralnie („widok na…", „fragment…").
- Jeśli zdjęcie nie pasuje do tematu wycieczki, opisz je używając kontekstu miasta i ogólnego tematu wycieczki.
- ZAWSZE zwróć poprawny JSON array, nawet dla zdjęć które nie pasują idealnie.
- Wyjście JSON array: [ { "id": "photoId", "newName": "...", "caption": "...", "alt": "...", "description": "..." } ] – gdzie id = Photo ID z arkusza.`;
        
        const photoResult = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
                parts: [
                    { text: photoPromptText },
                    { inlineData: { data: base64, mimeType } }
                ]
            },
            config: { systemInstruction: photoPrompt }
        });
        
        const responseText = photoResult.text;
        let cleanedText = responseText.replace(/```json\n?|\n?```/g, '').trim();
        const startIndex = cleanedText.indexOf('[');
        const endIndex = cleanedText.lastIndexOf(']');
        if (startIndex === -1 || endIndex === -1) {
            throw new Error(`Could not find a JSON array in the response. Response text: "${cleanedText}"`);
        }
        const jsonString = cleanedText.substring(startIndex, endIndex + 1);
        const photoMetadata = JSON.parse(jsonString);
        
        if (!photoMetadata || photoMetadata.length === 0) {
            throw new Error('No photo metadata returned from analysis');
        }
        
        const metadata = photoMetadata[0];
        if (metadata.id !== photoId) {
            console.warn(`Photo ID mismatch: expected ${photoId}, got ${metadata.id}`);
            metadata.id = photoId;
        }
        
        // Add metadata to Photos_Metadata sheet
        const metadataRow = [
            photoId,
            'EN',
            metadata.newName || '',
            metadata.caption || '',
            metadata.alt || '',
            metadata.description || ''
        ];
        
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Photos_Metadata!A1',
            valueInputOption: 'USER_ENTERED',
            requestBody: { values: [metadataRow] }
        });
        
        // Add photoId to tour's photoIds
        await addPhotoIdToTour(name, photoId);
        
        // Automatically rename file in Drive if newName was generated
        if (metadata.newName && fileId) {
            try {
                console.log(`Attempting to automatically rename file ${fileId} to ${metadata.newName}`);
                const ownerDrive = await getOwnerDriveClient();
                const result = await ownerDrive.files.update({
                    fileId: fileId,
                    requestBody: { name: metadata.newName },
                });
                console.log(`✓ Successfully automatically renamed uploaded file ${fileId} to ${metadata.newName}`);
                console.log(`  Renamed file details:`, result.data);
            } catch (renameError) {
                console.error(`✗ Failed to automatically rename file ${fileId}:`, renameError.message);
                console.error(`  Error details:`, renameError);
                // Don't fail the whole operation if rename fails
            }
        } else {
            console.log(`Skipping automatic rename: newName=${!!metadata.newName}, fileId=${!!fileId}`);
        }
        
        res.status(200).json({ 
            message: 'Photo analyzed and added to tour successfully',
            metadata 
        });
    } catch (error) {
        console.error('Error analyzing and adding photo to tour:', error);
        res.status(500).json({ error: `Failed to analyze and add photo: ${error.message || String(error)}` });
    }
});

// ============================================================================
// PROMPTS API
// ============================================================================

// Get all prompts
app.get('/api/prompts', async (req, res) => {
    try {
        const prompts = await getPromptsFromSheet();
        res.json(prompts);
    } catch (error) {
        console.error('Error fetching prompts:', error);
        res.status(500).json({ error: `Failed to fetch prompts: ${error.message || String(error)}` });
    }
});

// Update a prompt
app.put('/api/prompts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { prompt } = req.body;
        
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt text is required' });
        }
        
        const result = await updatePrompt(id, prompt);
        res.json(result);
    } catch (error) {
        console.error('Error updating prompt:', error);
        res.status(500).json({ error: `Failed to update prompt: ${error.message || String(error)}` });
    }
});

// Update a character limit
app.put('/api/prompts/char-limits/:limitId', async (req, res) => {
    try {
        const { limitId } = req.params;
        const { value } = req.body;
        
        if (value === undefined || value === null) {
            return res.status(400).json({ error: 'Value is required' });
        }
        
        const numericValue = parseInt(value, 10);
        if (isNaN(numericValue)) {
            return res.status(400).json({ error: 'Value must be a valid number' });
        }
        
        const result = await updateCharLimit(limitId, numericValue);
        res.json(result);
    } catch (error) {
        console.error('Error updating character limit:', error);
        res.status(500).json({ error: `Failed to update character limit: ${error.message || String(error)}` });
    }
});

// Initialize prompts sheet (one-time operation)
app.post('/api/prompts/initialize', async (req, res) => {
    try {
        const { constantsData } = req.body;
        
        if (!constantsData || !constantsData.prompts || !constantsData.brandBook) {
            return res.status(400).json({ error: 'Constants data with prompts and brandBook is required' });
        }
        
        const result = await initializePromptsSheet(constantsData);
        res.json(result);
    } catch (error) {
        console.error('Error initializing prompts sheet:', error);
        res.status(500).json({ error: `Failed to initialize prompts sheet: ${error.message || String(error)}` });
    }
});


// Serve static files
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  console.warn('Dist folder not found. The frontend will not be served by Express. Run "npm run build" to generate it.');
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
