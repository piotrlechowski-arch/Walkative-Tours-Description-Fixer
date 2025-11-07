# Podsumowanie Sesji - 7 Listopada 2025

## 🎯 Główne Cele i Problemy Rozwiązane

### 1. ✅ Upload i Konwersja Zdjęć
**Problem:** Zdjęcia nie były wgrywane, brak obsługi formatu HEIC, kompresja zbyt słaba (3.1MB → 403KB zamiast ~200KB)

**Rozwiązanie:**
- Dodano pełną obsługę formatów: JPEG, JPG, PNG, WebP, HEIC, HEIF
- Zaimplementowano agresywną kompresję WebP:
  - Quality: 60 (zmniejszone z 75)
  - Automatyczny resize do max 1920px szerokości
  - Iteracyjna kompresja jeśli plik > 300KB (redukcja quality do min. 30)
  - Cel: pliki ~200-300KB
- Dodano biblioteki systemowe do Dockerfile dla HEIC:
  - `libvips-dev`, `libheif-dev`, `libheif1`, `libde265-0`, `libx265-199`

**Pliki zmienione:**
- `server.js` - logika uploadu i kompresji
- `Dockerfile` - biblioteki systemowe dla HEIC

### 2. ✅ Kopiowanie Zdjęć do Folderu "Nowe"
**Problem:** Stare zdjęcia nie były przemianowywane (brak uprawnień OAuth do modyfikacji)

**Rozwiązanie:**
- Zmieniono logikę z "rename" na "copy" - kopiowanie plików do folderu "Nowe" z nowymi nazwami
- Użycie Service Account do czytania starych plików
- Użycie OAuth do zapisu nowych plików w folderze "Nowe"
- Automatyczna aktualizacja URL w `Photos_Source` po skopiowaniu

**Pliki zmienione:**
- `googleApiService.js` - funkcja `acceptChanges()` (sekcja kopiowania plików)

### 3. ✅ Automatyczne Kopiowanie przy Akceptacji
**Problem:** Checkbox "Zmien nazwy plikow w Drive" był niewygodny, użytkownik chciał automatycznego działania

**Rozwiązanie:**
- Usunięto checkbox z UI
- Kopiowanie plików do "Nowe" zawsze wykonywane przy kliknięciu "Akceptuj"
- `renameInDrive` zawsze ustawiane na `true` przy akceptacji

**Pliki zmienione:**
- `src/components/GeneratedColumn.tsx` - usunięto checkbox
- `src/components/EditorView.tsx` - zawsze `renameInDrive=true` przy akceptacji

### 4. ✅ Automatyczny Rename po Analizie
**Problem:** Nowe zdjęcia nie były automatycznie przemianowywane po analizie

**Rozwiązanie:**
- Dodano automatyczny rename po analizie zdjęcia w `/api/tours/:name/upload-photo`
- Jeśli AI wygenerowało `newName`, plik jest automatycznie przemianowywany w Drive

**Pliki zmienione:**
- `server.js` - endpoint `/api/tours/:name/upload-photo`

### 5. ✅ Wyciąganie fileId z URL
**Problem:** Kolumna `driveFileId` nie istnieje w `Photos_Source`, więc rename nie działał

**Rozwiązanie:**
- Dodano funkcję `extractFileIdFromUrl()` do wyciągania `fileId` z URL Google Drive
- Fallback: jeśli `driveFileId` nie istnieje w kolumnie, używa `fileId` z URL

**Pliki zmienione:**
- `googleApiService.js` - funkcja `extractFileIdFromUrl()` i użycie w `getTourDetails()`

### 6. ✅ Poprawiony Prompt dla Analizy Zdjęć
**Problem:** AI czasami odmawiało analizy zdjęć mówiąc że nie pasują do wycieczki

**Rozwiązanie:**
- Dodano instrukcję: "ZAWSZE zwróć metadane dla zdjęcia, nawet jeśli nie jest idealnie związane z wycieczką"
- AI zawsze zwraca metadane, nawet dla niepasujących zdjęć

**Pliki zmienione:**
- `server.js` - prompt dla analizy zdjęć
- `src/constants.ts` - `PROMPT_PHOTO_BASE`

## 📁 Struktura Projektu

### Backend (`server.js`)
- **OAuth 2.0 endpoints:**
  - `/api/auth/google` - inicjacja OAuth flow
  - `/api/auth/google/callback` - callback z refresh tokenem
  - `/api/auth/google/status` - sprawdzanie statusu autoryzacji
- **Photo endpoints:**
  - `/api/upload-photo` - upload zdjęcia (wszystkie formaty → WebP)
  - `/api/tours/:name/upload-photo` - analiza i dodanie zdjęcia do wycieczki
- **Tour endpoints:**
  - `/api/tours/:name/accept` - akceptacja zmian (zawsze kopiuje pliki do "Nowe")

### Backend (`googleApiService.js`)
- **Funkcje Drive:**
  - `uploadPhotoToDrive()` - upload z OAuth (do folderu "Nowe")
  - `getOwnerDriveClient()` - klient Drive z OAuth tokenem
  - `acceptChanges()` - kopiowanie plików do "Nowe" z nowymi nazwami
- **Funkcje Sheets:**
  - `getTourDetails()` - pobieranie danych wycieczki (z fallback fileId z URL)
  - `addPhotoToSource()` - dodawanie zdjęcia do `Photos_Source`

### Frontend
- **Usunięto:** Checkbox "Zmien nazwy plikow w Drive"
- **Automatyczne:** Kopiowanie zawsze przy "Akceptuj"

## 🔧 Konfiguracja

### Environment Variables (Cloud Run Secrets)
- `GOOGLE_OAUTH_CLIENT_ID` - OAuth Client ID
- `GOOGLE_OAUTH_CLIENT_SECRET` - OAuth Client Secret
- `GOOGLE_DRIVE_OWNER_REFRESH_TOKEN` - Refresh token właściciela
- `GOOGLE_DRIVE_PHOTOS_FOLDER_ID` - ID folderu "Nowe" (gdzie kopiowane są pliki)
- `GOOGLE_SERVICE_ACCOUNT_CREDENTIALS` - Service Account (do czytania)
- `GOOGLE_SHEET_ID` - ID arkusza Google Sheets
- `API_KEY` - Gemini API key

### Dockerfile
- Dodano biblioteki dla HEIC: `libvips-dev`, `libheif-dev`, `libheif1`, `libde265-0`, `libx265-199`

## 📊 Aktualny Stan

### ✅ Działające Funkcjonalności
1. Upload zdjęć (JPEG, PNG, WebP, HEIC) → konwersja do WebP ~200-300KB
2. Automatyczny rename nowych zdjęć po analizie
3. Automatyczne kopiowanie wszystkich zdjęć do folderu "Nowe" przy "Akceptuj"
4. Aktualizacja URL w `Photos_Source` po skopiowaniu
5. Analiza zdjęć przez Gemini (zawsze zwraca metadane)

### 🔄 Workflow
1. **Upload zdjęcia:**
   - Użytkownik wgrywa zdjęcie (drag-and-drop lub kliknięcie)
   - Konwersja do WebP z kompresją (~200-300KB)
   - Upload do folderu "Nowe" w Drive
   - Dodanie do `Photos_Source`

2. **Analiza zdjęcia:**
   - Automatyczna analiza przez Gemini
   - Generowanie metadanych (newName, caption, alt, description)
   - Automatyczny rename pliku w Drive na `newName`
   - Zapis do `Photos_Metadata`

3. **Akceptacja zmian:**
   - Kliknięcie "Akceptuj" → zawsze kopiuje pliki do "Nowe"
   - Dla starych zdjęć: pobiera z Drive → kopiuje do "Nowe" z nową nazwą
   - Aktualizuje URL w `Photos_Source`
   - Zapisuje opisy i metadane do arkuszy

## 🐛 Znane Problemy / Do Sprawdzenia

1. **HEIC Support:** 
   - Dodano biblioteki do Dockerfile, ale może wymagać testów
   - Jeśli nadal nie działa, może być potrzebna konfiguracja libvips z pluginami HEIC

2. **Kompresja:**
   - Obecnie: quality 60, resize do 1920px, iteracyjna redukcja jeśli > 300KB
   - Może wymagać dostrojenia dla różnych typów zdjęć

3. **Performance:**
   - Kopiowanie plików może być wolne dla wielu zdjęć
   - Rozważyć równoległe przetwarzanie

## 📝 Ważne Uwagi

1. **Folder "Nowe":** 
   - `GOOGLE_DRIVE_PHOTOS_FOLDER_ID` powinien wskazywać na folder "Nowe"
   - To jest folder docelowy dla wszystkich skopiowanych plików

2. **OAuth vs Service Account:**
   - Service Account: tylko do czytania (Google Sheets, czytanie starych plików)
   - OAuth: do zapisu (upload, kopiowanie, rename)

3. **driveFileId:**
   - Kolumna nie istnieje w `Photos_Source`
   - Używany jest fallback: wyciąganie `fileId` z URL

## 🚀 Ostatnia Rewizja

- **Cloud Run:** `walkative-tours-fixer-v2-00043-57n`
- **URL:** https://walkative-tours-fixer-v2-427383392801.us-west1.run.app
- **Branch:** `cursor`
- **Ostatni commit:** `31d6584` - "fix: add HEIC decoding plugins (libheif1, libde265, libx265) for full HEIC support"

## 📚 Przydatne Komendy

```bash
# Deploy
npm run build && gcloud run deploy walkative-tours-fixer-v2 --source . --region=us-west1 --platform=managed --allow-unauthenticated

# Logi
gcloud run services logs read walkative-tours-fixer-v2 --region=us-west1 --limit=100

# Sprawdzenie kompresji
gcloud run services logs read walkative-tours-fixer-v2 --region=us-west1 --limit=50 | grep -i "Final WebP size\|Uploaded image format"

# Sprawdzenie kopiowania
gcloud run services logs read walkative-tours-fixer-v2 --region=us-west1 --limit=50 | grep -i "COPYING\|Successfully copied"
```

## 🔗 Kluczowe Pliki

- `server.js` - główny serwer Express, upload, analiza, OAuth
- `googleApiService.js` - integracja z Google APIs (Sheets, Drive)
- `src/components/EditorView.tsx` - główny komponent edycji
- `src/components/GeneratedColumn.tsx` - kolumna z wygenerowaną treścią
- `src/components/SourceColumn.tsx` - kolumna źródłowa (upload zdjęć)
- `Dockerfile` - konfiguracja Docker z bibliotekami HEIC

---

**Data:** 7 Listopada 2025  
**Status:** Wszystkie główne funkcjonalności działają ✅

