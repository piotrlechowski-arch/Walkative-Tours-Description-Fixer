# 📊 Status Projektu - Najnowsze Zmiany

**Data:** 7 listopada 2025  
**Ostatnia rewizja:** walkative-tours-fixer-v2-00021-zr5  
**URL:** https://walkative-tours-fixer-v2-427383392801.us-west1.run.app

---

## ✅ Ostatnio Zaimplementowane Zmiany (7 listopada 2025)

### 1. Dodanie pól SEO (New Name, Title, H1, Meta)
- **TourDescription** rozszerzone o: `newName`, `title`, `h1`, `meta`
- **ValidationRules** zaktualizowane:
  - Usunięto `longParagraphs`
  - Dodano limity znaków dla: `newNameCharMin/Max`, `titleCharMin/Max`, `h1CharMin/Max`, `metaCharMin/Max`
- **Prompty AI** dodane:
  - `newNameTitleH1EN`, `newNameTitleH1PL`, `newNameTitleH1DE`, `newNameTitleH1ES` (wspólny prompt dla New Name, Title i H1 - osobny dla każdego języka)
  - `metaEN`, `metaPL`, `metaDE`, `metaES` (osobne prompty dla każdego języka)
- **Generowanie:** Wszystkie pola SEO generowane dla EN i lokalizacji (PL/DE/ES)
- **UI:** Pola edycji dodane w GeneratedColumn.tsx przed Short Description
- **Google Sheets:** Struktura kolumn zmieniona:
  - Tours_EN/PL/DE/ES: A=New Name, B=Title, C=H1, D=Meta, E=short, F=long, G=highlights

### 2. Wyświetlanie Title, H1, Meta z Tours_Source
- **Tour interface** rozszerzone o opcjonalne pola: `title?`, `h1?`, `meta?`
- **parseTourRow()** zaktualizowane aby parsowało te pola z Tours_Source
- **SourceColumn.tsx** wyświetla Title, H1, Meta gdy mode === 'EN' i gdy istnieją w tour

### 3. Naprawa zapisu nowych wycieczek
- **createTour()** zaktualizowane aby:
  - Pobierało nagłówki z Tours_Source
  - Mapowało dane do właściwych kolumn na podstawie nagłówków
  - Obsługiwało wszystkie pola, w tym Title, H1, Meta i Photo IDs

### 4. Drag-and-drop upload zdjęć
- **Zależności dodane:** `sharp` (konwersja obrazów), `multer` (obsługa multipart/form-data)
- **Endpoint:** `/api/upload-photo` w server.js:
  - Przyjmuje plik obrazu
  - Konwertuje na WebP z wysoką kompresją (quality: 75, effort: 6)
  - Uploaduje do Google Drive
  - Generuje unikalne ID dla zdjęcia
  - Dodaje wpis do Photos_Source
  - Zwraca nowe ID i URL
- **Funkcje w googleApiService.js:**
  - `uploadPhotoToDrive()` - upload do Google Drive
  - `addPhotoToSource()` - dodanie do Photos_Source
  - `generatePhotoId()` - generowanie unikalnego ID (timestamp + random)
- **AddTourView.tsx:**
  - Drag-and-drop area z wizualnym feedbackiem
  - Podgląd wgrywanych zdjęć ze statusem (uploading/success/error)
  - Automatyczne dodawanie nowych ID do listy photoIds po udanym uploadzie
  - Możliwość usuwania wgrywanych zdjęć

### 5. Usunięcie Analizatora Zdjęć i osobnych przycisków
- Usunięto sekcję "Analizator Zdjęć" z nawigacji
- Usunięto przyciski "Generuj Opis" i "Generuj Zdjęcia"
- Pozostawiono tylko główny przycisk "Generuj" który generuje wszystko jednocześnie

---

## 📊 Struktura Google Sheets - Aktualna

### Tours_EN, Tours_PL, Tours_DE, Tours_ES:
- **A:** New Name
- **B:** Title  
- **C:** H1
- **D:** Meta
- **E:** short
- **F:** long
- **G:** highlights

### Tours_Source:
- Kolumny: city, name, title (opcjonalnie), h1 (opcjonalnie), meta (opcjonalnie), short, long, highlightsTitle, highlightsDescription, Photo ID 1, Photo ID 2, ...
- **UWAGA:** createTour() mapuje dane do właściwych kolumn na podstawie nagłówków

### Photos_Source:
- Kolumny: ID, URL, Name, city, country, driveFileId, oraz metadane dla różnych języków

---

## 🔧 Konfiguracja Środowiskowa

### Cloud Run - Zmienne Środowiskowe (Secrets)
- `GEMINI_API_KEY:latest` → API_KEY
- `GOOGLE_SERVICE_ACCOUNT_CREDENTIALS:latest` → GOOGLE_SERVICE_ACCOUNT_CREDENTIALS
- `GOOGLE_SHEET_ID:latest` → GOOGLE_SHEET_ID
- `GOOGLE_DRIVE_PHOTOS_FOLDER_ID` (opcjonalnie) - folder ID dla uploadowanych zdjęć

### Włączone API w Projekcie
- sheets.googleapis.com
- drive.googleapis.com

---

## 📁 Ważne Pliki

### Backend:
- `server.js` - Express server z endpointami API (w tym `/api/upload-photo`)
- `googleApiService.js` - integracja z Google Sheets/Drive (z funkcjami uploadPhotoToDrive, addPhotoToSource, generatePhotoId)
- `Dockerfile` - multi-stage build
- `package.json` - dependencies (sharp, multer dodane)

### Frontend:
- `src/App.tsx` - główny komponent, state management
- `src/components/AddTourView.tsx` - formularz dodawania wycieczek z drag-and-drop uploadem
- `src/components/SourceColumn.tsx` - wyświetla Title, H1, Meta z Tours_Source
- `src/components/GeneratedColumn.tsx` - pola edycji dla SEO (New Name, Title, H1, Meta)
- `src/components/SettingsView.tsx` - ustawienia z limitami i promptami dla nowych pól
- `src/services/geminiService.ts` - generowanie pól SEO dla EN i lokalizacji
- `src/types.ts` - TourDescription z polami SEO, Tour z opcjonalnymi title/h1/meta
- `src/utils/validators.ts` - walidacja dla nowych pól SEO

---

## 🚀 Szybki Start

```bash
# Lokalnie
cd /Users/Lechu1/Walkative-Tours-Description-Fixer
npm install
npm start

# Deploy
npm run build
gcloud run deploy walkative-tours-fixer-v2 \
  --source . \
  --region=us-west1 \
  --platform=managed \
  --allow-unauthenticated
```

---

## 📝 Notatki

- **Upload zdjęć:** Wymaga uprawnień do zapisu w Google Drive (scope: `drive.file`)
- **Konwersja WebP:** Używa sharp z quality: 75, effort: 6 dla wysokiej kompresji
- **Generowanie ID:** Format: `{timestamp}-{random4digits}`
- **Mapowanie kolumn:** createTour() i addPhotoToSource() używają nagłówków z arkuszy do mapowania danych

---

**Gotowe do pracy!** 💪

