# Walkative Tours Description Fixer

Full-stack tool for normalizing, localizing, and quality-checking Walkative tour descriptions and photo metadata.  
The frontend (React + Vite) consumes a small Express API that reads and writes data in a shared Google Sheets workbook.

## Prerequisites

- Node.js 18+
- Google Cloud service account with access to Google Sheets & Drive APIs
- Gemini API key (used by the backend to call `@google/genai`)

## 1. Configure environment variables

Create `.env` based on [.env.example](.env.example):

```env
GOOGLE_SHEET_ID=1AbC...xyz
GOOGLE_SERVICE_ACCOUNT_CREDENTIALS={"type":"service_account", ... }
API_KEY=your-gemini-backend-key
PORT=8080
```

Create `.env.local` (used by Vite during dev) based on [.env.local.example](.env.local.example). The Gemini key is optional on the client, but keeping the placeholder avoids warnings.

> **Service account setup**
> 1. Enable the *Google Sheets API* and *Google Drive API* for your project.
> 2. Create a service account and download the JSON key.
> 3. Share the spreadsheet and photo folders with the service account’s email.

## 2. Spreadsheet structure

The code expects the following tabs and columns (all values are trimmed when read):

### `Tours_Source`

| Column | Purpose |
| --- | --- |
| `city` | City name used in prompts |
| `name` (or `tour name`) | Display name shown in the app |
| `short` | Original short description |
| `long` | Original long description |
| `highlightsTitle` | Heading for highlights |
| `highlightsDescription` | Bullet list or markdown of highlights |
| `Photo ID 1...N` **or** `photoIds` | Each cell contains a photo ID referenced in `Photos_Source` |

Additional columns are preserved and returned alongside the core fields.

### `Tours_EN`, `Tours_PL`, `Tours_DE`, `Tours_ES`

Column A contains the tour name (must match `Tours_Source` exactly).  
Columns B–D store `short`, `long`, and `highlights` for the accepted content.

These sheets drive the status pills in the UI: a tour is considered “done” in a language when its name appears anywhere in column A.

### `Photos_Source`

Columns should include at least:

- `id` – matches the IDs referenced in `Tours_Source`
- `url`
- `name`
- `city`
- `country`
- `driveFileId` (optional, used for renaming in Drive)

### `Photos_Metadata`

Columns (in order) are interpreted as:

| Header | Description |
| --- | --- |
| `photoId` | Matches `Photos_Source.id` |
| `lang` | EN / PL / DE / ES |
| `newName` | Target filename |
| `caption` | Caption text |
| `alt` | Alt-text |
| `description` | Optional long description (only EN is used) |

Rows are filtered by `lang` (case-insensitive) and the photo IDs already linked to the selected tour.

## 3. Install dependencies

```bash
npm install
```

> Network access is required to install packages. Run the command inside this directory.

## 4. Run in development

Two processes run in parallel: the Express API (`localhost:8080`) and the Vite dev server (`localhost:3000`).

```bash
npm run dev
```

The Vite dev server proxies `/api` calls to the backend, so the React app can call `/api/tours`, `/api/tours/:name`, etc. directly.

## 5. Build & run in production

```bash
npm run build    # Produces ./dist
npm start        # Serves the API + built frontend on PORT (default 8080)
```

`server.js` automatically serves files from `dist` when present.

## 6. Notes on Google Sheets sync

- All data is trimmed and normalized (`"Photo ID 1"` works as well as a single `photoIds` column).
- If a tour name cannot be found in the status sheets, its status pills remain gray.
- `acceptChanges` appends rows to the relevant language sheet and to `Photos_Metadata`. De-duplication should be handled manually (or extend the code with a search-and-update routine if needed).

## 7. Troubleshooting checklist

- **Tour names missing** → verify `Tours_Source` column header is `name` or `tour name`, and there are no hidden characters; confirm the value appears exactly the same in status sheets.
- **Photos not loading** → ensure the ID columns in `Tours_Source` match the `id` column in `Photos_Source`.
- **Service account errors** → confirm the spreadsheet is shared with the service account and the private key is copied verbatim (escape newlines as `\n` inside `.env`).
- **CORS issues in dev** → ensure you launch the app via `npm run dev`; the Vite proxy handles `/api` calls.

## 8. Available npm scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Vite dev server + Express API (via `concurrently`) |
| `npm run dev:client` | Start Vite only |
| `npm run dev:server` | Start the API with nodemon |
| `npm run build` | Build the React frontend |
| `npm run preview` | Preview the Vite build |
| `npm start` | Run only the Express API (expects `dist/` to exist) |

---

Happy editing! Let me know if you want to extend the workflow (e.g. Slack notifications when a tour is completed or Drive renaming rules). 
