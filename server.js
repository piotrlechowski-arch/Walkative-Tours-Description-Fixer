import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';
import { getTours, getTourDetails, getCanonicalEnData, getLocalizedData, acceptChanges } from './googleApiService.js';
import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

const app = express();
app.use(express.json({ limit: '10mb' }));

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

// Helper to get Google Drive client
const getDriveClient = () => {
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS);
  const auth = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
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
    });
    const mimeType = fileMetadata.data.mimeType || 'image/jpeg';
    
    // Get file content using get_media
    const response = await drive.files.get(
      { fileId, alt: 'media' },
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
