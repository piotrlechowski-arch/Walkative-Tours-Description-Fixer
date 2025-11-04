import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';
import { getTours, getTourDetails, getCanonicalEnData, getLocalizedData, acceptChanges } from './googleApiService.js';

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

// Gemini API endpoint
app.post('/api/generate', async (req, res) => {
  try {
    if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable is not set.");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent(req.body);
    res.json(response);
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    res.status(500).json({ error: error.message });
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
