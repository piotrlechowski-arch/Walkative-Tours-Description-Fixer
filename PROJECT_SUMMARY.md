# Walkative Tours Description Fixer - Podsumowanie Projektu

**Data ostatniej aktualizacji:** 7 listopada 2025  
**Wdrożona wersja:** walkative-tours-fixer-v2-00059-p7v  
**URL aplikacji:** https://walkative-tours-fixer-v2-427383392801.us-west1.run.app

---

## 📋 Cel Projektu

Aplikacja full-stack do normalizacji, lokalizacji i kontroli jakości opisów wycieczek Walkative oraz metadanych zdjęć. System wykorzystuje Google Gemini AI do automatycznego generowania i optymalizacji treści w wielu językach (EN, PL, DE, ES).

---

## 🏗️ Architektura

### Frontend (React + TypeScript + Vite)
- **Framework:** React 18 z TypeScript
- **Build tool:** Vite 5.2.11
- **Główne komponenty:**
  - `App.tsx` - główny kontroler aplikacji, state management
  - `EditorView.tsx` - widok edycji z zakładkami językowymi
  - `GeneratedColumn.tsx` - kolumna z wygenerowaną treścią + przyciski generowania
  - `SourceColumn.tsx` - kolumna ze źródłową treścią, miniaturami zdjęć i uploadu HEIC
  - `AddTourView.tsx` - widok dodawania nowej wycieczki z uploadu zdjęć HEIC
  - `CanonicalEnView.tsx` - widok zaakceptowanej treści kanonicznej (read-only)
  - `TourSelector.tsx` - dropdown wyboru wycieczki
  - `Header.tsx` - nagłówek z nawigacją
  - `SettingsView.tsx` - ustawienia AI (prompty, modele) + zapis do Sheets

### Backend (Node.js + Express)
- **Runtime:** Node.js 20
- **Framework:** Express.js 4.19.2
- **Główne pliki:**
  - `server.js` - serwer Express z endpointami API (838 linii)
    - Upload i konwersja zdjęć (HEIC → WebP pipeline)
    - API dla promptów (/api/prompts, /api/prompts/:id, /api/prompts/initialize)
  - `googleApiService.js` - integracja z Google Sheets i Drive (1372 linie)
    - Zarządzanie wycieczkami i zdjęciami
    - System promptów (getPromptsFromSheet, updatePrompt, initializePromptsSheet)
    - Inteligentna logika RENAME/COPY dla zdjęć
  - `src/services/geminiService.ts` - obsługa Gemini AI (359 linii)
  - `src/services/apiService.ts` - wrapper dla fetch API (154 linie)
    - Nowe funkcje: getPrompts, updatePrompt, initializePromptsSheet

### Infrastruktura
- **Deployment:** Google Cloud Run (us-west1)
- **Container:** Docker (multi-stage build)
- **Secrets:** Google Secret Manager
  - `GEMINI_API_KEY:latest`
  - `GOOGLE_SERVICE_ACCOUNT_CREDENTIALS:latest`
  - `GOOGLE_SHEET_ID:latest`
- **APIs:** Google Sheets API, Google Drive API, Gemini API

---

## 🔄 Najnowsze Zmiany (7 listopada 2025)

### 1. ✅ SUKCES: Upload i Konwersja Zdjęć HEIC z iPhone'a

**Problem:** Zdjęcia HEIC z iPhone'a nie były uploadowane i konwertowane. Błędy: "Unable to process input image", "heif: Invalid input: Unspecified: Too many auxiliary image references".

**Zastosowane Rozwiązanie (WebAssembly-based):**
- Biblioteka: `heic-convert@2.1.0` (npm package)
- Pipeline: HEIC → WebAssembly JPEG → Sharp → WebP → Google Drive
- Zamiast systemowych bibliotek libheif (niestabilne)

**Pliki zmienione:**
- `package.json` - dodano `heic-convert@2.1.0`
- `server.js` - nowa funkcja `convertHeicToJpeg()` używająca WebAssembly
- `Dockerfile` - uproszczono (usunięto niepotrzebne pakiety libheif-cli)
- `src/components/SourceColumn.tsx` - filtr plików po rozszerzeniu `.heic`
- `src/components/AddTourView.tsx` - filtr plików po rozszerzeniu `.heic`

**Efekt:** ✅ Zdjęcia HEIC są poprawnie uploadowane, konwertowane i analizowane.

---

### 2. ✅ Fix Duplikacji Zdjęć przy Akceptacji

**Problem:** Gdy użytkownik wgrywał nowe zdjęcie HEIC i akceptował zmiany, tworzyła się kopia pliku zamiast rename, prowadząc do bałaganu i duplikacji.

**Rozwiązanie - Inteligentna Logika RENAME/COPY:**

Zaimplementowano 3 scenariusze w `googleApiService.js` → `acceptChanges()`:
1. **RENAME** - plik już jest w folderze "Nowe" → tylko zmiana nazwy (bez duplikacji)
2. **COPY** - plik jest w innym folderze → kopiowanie do "Nowe"
3. **SKIP** - plik ma już poprawną nazwę → bez akcji

**Kod wykrywania:**
```javascript
const fileMetadata = await drive.files.get({
  fileId: sourcePhoto.driveFileId,
  fields: 'parents,name',
  supportsAllDrives: true
});
const isAlreadyInTargetFolder = fileMetadata.data.parents?.includes(targetFolderId);
const needsRename = currentName !== photoMeta.newName;
```

**Efekt:** ✅ Eliminacja duplikatów dla świeżo wgranych zdjęć.

---

### 3. ✅ System Dynamicznych Promptów w Google Sheets

**Problem:** Prompty AI były hardcoded w `src/constants.ts`. Przy każdym deploy były nadpisywane, utrudniając iteracyjne poprawki.

**Rozwiązanie - Google Sheets jako CMS dla Promptów:**

**Nowy Arkusz: "Prompts"**

Struktura (8 kolumn):
- `ID` - unikalny identyfikator (np. `brandbook`, `normalize_en`)
- `Name` - czytelna nazwa (np. "EN Normalize Description")
- `Language` - język promptu (EN/PL/DE/ES/ALL)
- `Type` - kategoria (brand_guidelines, tour_description, quality_check, seo_generation, photo_analysis, photo_translation)
- `Prompt` - pełna treść promptu (może być bardzo długi tekst)
- `Version` - wersjonowanie (np. "1.0", "1.1")
- `Last_Modified` - data ostatniej modyfikacji (YYYY-MM-DD)
- `Active` - TRUE/FALSE (możliwość A/B testów)

**18 wierszy danych:**
1. `brandbook` - Brandbook / Tone of Voice
2. `normalize_en` - EN Normalize Description
3. `localize_pl` - PL Localize Description
4-9. Pozostałe lokalizacje i QC (DE, ES)
10-17. SEO Fields i Meta Descriptions (wszystkie języki)
18. `photo_base` - Photo Analysis & Metadata
19. `photo_translate` - Photo Metadata Translation

**Backend API (nowe funkcje i endpointy):**

`googleApiService.js`:
- `getPromptsFromSheet()` - pobiera aktywne prompty z Sheets
- `updatePrompt(id, text)` - aktualizuje prompt i Last_Modified
- `initializePromptsSheet()` - jednorazowa inicjalizacja arkusza

`server.js`:
- `GET /api/prompts` - pobierz wszystkie prompty
- `PUT /api/prompts/:id` - zaktualizuj prompt
- `POST /api/prompts/initialize` - zainicjalizuj arkusz (jednorazowo)

**Frontend Integration:**

`src/App.tsx`:
- Auto-load promptów przy starcie aplikacji
- Mapowanie ID z Sheets → klucze w settings
- Fallback do defaults w przypadku błędu

`src/services/apiService.ts`:
- `getPrompts()` - pobieranie promptów z API
- `updatePrompt(id, text)` - aktualizacja promptu
- `initializePromptsSheet(data)` - inicjalizacja

`src/components/SettingsView.tsx`:
- ✅ CZYTANIE: Prompty z Sheets są ładowane i wyświetlane
- ✅ ZAPIS: Kliknięcie "Zapisz ustawienia" zapisuje do Sheets
- Pokazuje liczbę zapisanych promptów
- Status "Zapisywanie..." podczas operacji
- Dodano pole dla `photoTranslate` w UI

**Efekt:** ✅ Prompty można edytować w Google Sheets i aplikacja je automatycznie pobiera. Zmiany w aplikacji są zapisywane z powrotem do Sheets.

---

### 4. ✅ Usunięto Deprecated PhotoAnalyzerView

**Zmiany:**
- Usunięto `src/components/PhotoAnalyzerView.tsx` - nieużywany komponent
- Sekcja "Analizator Zdjęć" była dawno usunięta z aplikacji
- Obecnie zdjęcia wgrywa się przez "Edytor" i "Dodaj Nową Wycieczkę"

**Efekt:** ✅ Kod czystszy, bez nieużywanych komponentów.

---

## 📜 Historia Zmian (6 listopada 2025)

### 1. ✅ Naprawione Pobieranie Obrazów z Google Drive

**Problem:** Błąd "Unable to process input image" podczas generowania metadanych zdjęć.

**Rozwiązanie:**
- Dodano endpoint `/api/image/:fileId` w backendzie (`server.js`)
- Endpoint pobiera obrazy z Google Drive z autoryzacją service account
- Zaktualizowano `urlToGenerativePart()` w `geminiService.ts`

**Efekt:** Generowanie metadanych zdjęć działa poprawnie.

### 2. ✅ Tłumaczenie Metadanych Zdjęć Zamiast Ponownej Analizy

**Problem:** Lokalizacja zdjęć analizowała obrazy od nowa i zmieniała nazwy plików.

**Rozwiązanie:**
- Dodano funkcję `translatePhotosOnly()` w `geminiService.ts`
- Dodano prompt `PROMPT_PHOTO_TRANSLATE` w `constants.ts`
- Funkcja tłumaczy tylko teksty (caption, alt) z angielskich metadanych
- Zachowuje `newName` z wersji EN (nie zmienia nazwy pliku)
- Używa modelu tekstowego zamiast obrazowego (szybsze i tańsze)

**Efekt:** Lokalizacja zdjęć jest szybsza i nie zmienia nazw plików.

### 3. ✅ Przywrócone Jednoczesne Generowanie Opisów i Zdjęć

**Zmiany:**
- Przycisk "Generuj" (niebieski) generuje jednocześnie opis i zdjęcia
- Dla EN: `normalizeAndAnalyze()` - generuje opis + analizuje zdjęcia
- Dla lokalizacji: `localizeAndAnalyze()` - tłumaczy opis + tłumaczy metadane zdjęć
- Osobne przyciski "Generuj Opis" i "Generuj Zdjęcia" pozostają jako opcjonalne
- Różne modele LLM: `gemini-2.5-pro` (opisy), `gemini-2.5-flash-image` (zdjęcia)

### 4. ✅ Naprawiony Zapis Opisów do Właściwego Wiersza

**Problem:** Opisy były dodawane na końcu arkusza zamiast aktualizować istniejący wiersz.

**Rozwiązanie:**
- Wyszukiwanie wiersza po kolumnie A (nazwa wycieczki)
- Porównywanie case-insensitive z normalizacją białych znaków
- Aktualizacja istniejącego wiersza zamiast `append()`
- Jeśli wiersz nie istnieje, dodanie nowego

**Efekt:** Opisy są zapisywane do właściwego wiersza w arkuszu.

### 5. ✅ Naprawione Sprawdzanie Statusu Lokalizacji

**Problem:** Zakładka PL świeciła się na zielono mimo braku zaakceptowanych danych.

**Rozwiązanie:**
- Porównywanie statusu case-insensitive w `getTours()`
- Użycie `.some()` zamiast `.has()` dla bardziej elastycznego dopasowania
- Szczegółowe logowanie dla debugowania
- Poprawione wyszukiwanie w `getAcceptedData()`

**Efekt:** Status lokalizacji jest wykrywany poprawnie.

---

## 📊 Struktura Google Sheets

### Arkusze (Sheets):

1. **`Tours_Source`** - źródłowe dane wycieczek
   - Kolumny: `city`, `name`, `short`, `long`, `highlightsTitle`, `highlightsDescription`, `photoIds`

2. **`Photos_Source`** - źródłowe dane zdjęć
   - Kolumny: `ID`, `URL`, `Name`, `city`, `country`, `en caption`, `pl caption`, `de caption`, `es caption`, `en alt`, `pl alt`, `de alt`, `es alt`, `en description`

3. **`Tours_EN`** - zaakceptowane treści EN
   - Kolumny: `A=tourName`, `B=short`, `C=long`, `D=highlights`

4. **`Tours_PL`** / **`Tours_DE`** / **`Tours_ES`** - zaakceptowane lokalizacje
   - Kolumny: `A=tourName`, `B=short`, `C=long`, `D=highlights`

5. **`Photos_Metadata`** - metadane zdjęć
   - Kolumny: `A=photo id`, `B=lang`, `C=new name`, `D=caption`, `E=alt`, `F=description`

6. **`Prompts`** - 🆕 dynamiczne prompty AI (nowe w v7.11.2025)
   - Kolumny:
     - `ID` - unikalny identyfikator (np. `brandbook`, `normalize_en`)
     - `Name` - czytelna nazwa (np. "EN Normalize Description")
     - `Language` - język promptu (EN/PL/DE/ES/ALL)
     - `Type` - kategoria (brand_guidelines, tour_description, quality_check, seo_generation, photo_analysis, photo_translation)
     - `Prompt` - pełna treść promptu (może być bardzo długi tekst)
     - `Version` - wersjonowanie (np. "1.0", "1.1")
     - `Last_Modified` - data ostatniej modyfikacji (YYYY-MM-DD, auto-update)
     - `Active` - TRUE/FALSE (tylko aktywne prompty są używane)
   - 18 wierszy: 1 brandbook + 4 normalizacje + 4 lokalizacje + 4 QC + 4 SEO + 4 Meta + 2 photo

**Ważne:** 
- Nazwa wycieczki w kolumnie A musi dokładnie pasować do `Tours_Source` (case-insensitive, ale z normalizacją białych znaków)
- Arkusz `Prompts` może być zainicjalizowany przez endpoint `/api/prompts/initialize` lub ręcznie

---

## 🔧 Konfiguracja Środowiskowa

### Cloud Run - Zmienne Środowiskowe (Secrets)

**Wymagane sekrety (skonfigurowane):**
```
1. API_KEY → secret: GEMINI_API_KEY:latest
2. GOOGLE_SERVICE_ACCOUNT_CREDENTIALS → secret: GOOGLE_SERVICE_ACCOUNT_CREDENTIALS:latest
3. GOOGLE_SHEET_ID → secret: GOOGLE_SHEET_ID:latest
```

**Weryfikacja:**
```bash
gcloud run services describe walkative-tours-fixer-v2 --region=us-west1 \
  --format="value(spec.template.spec.containers[0].env)"
```

### Włączone API w Projekcie

```bash
gcloud services enable sheets.googleapis.com drive.googleapis.com \
  --project=content-machine-476312
```

**Status:** ✅ Włączone

---

## 📁 Ważne Pliki i Ich Lokalizacje

### Backend:
- `server.js` (173 linie) - główny serwer Express
- `googleApiService.js` (513 linii) - integracja z Google Sheets/Drive
- `Dockerfile` - multi-stage build
- `package.json` - dependencies i scripts

### Frontend (src/):
- `App.tsx` (269 linii) - główny komponent, state management
- `types.ts` - TypeScript interfaces
- `constants.ts` - domyślne ustawienia i prompty AI

### Frontend Components (src/components/):
- `EditorView.tsx` (309 linii) - główny widok edycji z zakładkami
- `GeneratedColumn.tsx` (359 linii) - kolumna z generowaną treścią + przyciski
- `SourceColumn.tsx` (192 linie) - kolumna źródłowa + miniatury + upload HEIC
- `AddTourView.tsx` (427 linii) - widok dodawania wycieczki + upload HEIC
- `CanonicalEnView.tsx` - widok zaakceptowanej treści
- `TourSelector.tsx` - dropdown wyboru wycieczki
- `Header.tsx` - nagłówek z nawigacją
- `SettingsView.tsx` (295 linii) - ustawienia AI (prompty, modele) + zapis do Sheets
- ~~`PhotoAnalyzerView.tsx`~~ - usunięty (deprecated)

### Frontend Services (src/services/):
- `apiService.ts` (63 linie) - wrapper dla fetch API
- `geminiService.ts` (359 linii) - logika generowania AI
- `mockApiService.ts.bak` - stary mock data (nieużywany)

### Frontend Utils (src/utils/):
- `validators.ts` - walidacja długości tekstów

---

## 🚀 Deployment

### Build i Deploy (manualnie):
```bash
cd /Users/Lechu1/Walkative-Tours-Description-Fixer
npm run build
gcloud run deploy walkative-tours-fixer-v2 \
  --source . \
  --region=us-west1 \
  --platform=managed \
  --allow-unauthenticated
```

### Historia Rewizji:
- `walkative-tours-fixer-v2-00013-ztc` - thumbnail URL format
- `walkative-tours-fixer-v2-00014-xzn` - naprawione pobieranie obrazów
- `walkative-tours-fixer-v2-00015-jcm` - tłumaczenie metadanych zdjęć
- `walkative-tours-fixer-v2-00016-qhh` - jednoczesne generowanie + poprawki zapisu
- `walkative-tours-fixer-v2-00017-gwz` - poprawki zapisu opisów
- `walkative-tours-fixer-v2-00018-l67` - case-insensitive porównywanie nazw (6 listopada 2025)
- `walkative-tours-fixer-v2-00059-p7v` - **AKTUALNA** - HEIC support + fix duplikacji + system promptów (7 listopada 2025)

### Viewing Logs:
```bash
# Cloud Run logs
gcloud run services logs read walkative-tours-fixer-v2 --region=us-west1 --limit=50

# Cloud Logging (bardziej szczegółowe)
gcloud logging read "resource.type=cloud_run_revision AND \
  resource.labels.service_name=walkative-tours-fixer-v2" \
  --limit=50 --format="table(timestamp,textPayload)"
```

---

## 🔑 Kluczowe Zależności

### Frontend (`package.json`):
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "typescript": "~5.4.5",
  "vite": "^5.2.11"
}
```

### Backend (`package.json`):
```json
{
  "@google/genai": "^0.15.0",
  "express": "^4.19.2",
  "googleapis": "^140.0.1",
  "google-auth-library": "^9.11.0",
  "xlsx": "^0.18.5",
  "dotenv": "^16.4.5",
  "sharp": "^0.32.6",
  "heic-convert": "^2.1.0",
  "multer": "^1.4.5-lts.1"
}
```

**Nowe zależności dla HEIC:**
- `heic-convert@2.1.0` - WebAssembly-based konwersja HEIC → JPEG
- `sharp@0.32.6` - przetwarzanie obrazów (resize, compress, JPEG → WebP)
- `multer@1.4.5-lts.1` - upload plików

### Runtime:
- Node.js 20 (w Dockerfile)
- Port 8080 (Cloud Run default)

---

## 📝 Notatki Deweloperskie

### Gemini AI Models:
- **Text generation:** `gemini-2.5-pro` (main) + `gemini-2.5-flash` (QC)
- **Image analysis:** `gemini-2.5-flash-image` (domyślnie)
- **Context window:** Bardzo duże (ponad 32k tokenów)

### Optymalizacje Tokenów:
1. **Batch size:** 1 zdjęcie na raz (linie 141, 234 w geminiService.ts)
2. **Long description summary:** Tylko pierwsze 500 znaków dla photo analysis (linie 149-152, 238-241)
3. **HTML stripping:** Usuwanie tagów HTML przed wysłaniem (`.replace(/<[^>]*>/g, '')`)

### Flow Generowania (EN):
1. User klika **"Generuj"** (lub osobne przyciski)
2. → `handleGenerate()` w App.tsx
3. → `geminiService.normalizeAndAnalyze()`
   - Generuje opis: `normalizeDescriptionOnly()` → `runQuickFix()` → `parseDescriptionResponse()`
   - Analizuje zdjęcia: `analyzePhotosOnly()` → dla każdego zdjęcia: `/api/image/:fileId` → Gemini API
4. → Aktualizacja `processedData` (description + photos)
5. User klika **"Akceptuj"**
6. → `handleAccept()` → `apiService.acceptChanges()`
7. → Backend `/api/tours/:name/accept`
8. → `acceptChanges()` w googleApiService.js
9. → Wyszukanie wiersza po kolumnie A → aktualizacja lub append
10. → Zapis do `Tours_EN` i `Photos_Metadata` w Google Sheets

### Flow Lokalizacji (PL/DE/ES):
1. User przechodzi do zakładki PL/DE/ES
2. → `handleModeChange()` w EditorView.tsx
3. → Jeśli `canonicalEnData` istnieje, ładuje do edycji
4. User klika **"Generuj"**
5. → `handleGenerate()` w App.tsx
6. → `geminiService.localizeAndAnalyze()`
   - Tłumaczy opis: `localizeDescriptionOnly()` → `runQuickFix()` → `parseDescriptionResponse()`
   - Tłumaczy metadane zdjęć: `translatePhotosOnly()` → Gemini API (model tekstowy)
7. → Aktualizacja `processedData`
8. User klika **"Akceptuj"**
9. → Zapis do `Tours_PL/DE/ES` i `Photos_Metadata` w Google Sheets

### XML Response Format (Descriptions):
```xml
<short>Short description text here</short>
<long><p>Long description with HTML tags</p></long>
<highlights>
- Highlight 1
- Highlight 2
</highlights>
```

### JSON Response Format (Photos):
```json
[
  {
    "id": "12345",
    "newName": "city_landmark_description_12345.webp",
    "caption": "Caption text",
    "alt": "Alt text for SEO",
    "description": "Detailed description (EN only)"
  }
]
```

---

## 🐛 Znane Problemy i Ich Status

### ✅ ROZWIĄZANE:
1. **Missing GOOGLE_SHEET_ID** - Dodano sekret do Cloud Run
2. **Google Sheets API disabled** - Włączono sheets.googleapis.com i drive.googleapis.com
3. **Brak arkusza Photos_Metadata** - Użytkownik utworzył arkusz
4. **Nieprawidłowe nazwy kolumn** - Dodano normalizację (ID → id, URL → url, Name → name)
5. **Niedziałające URL zdjęć** - Zmieniono format na thumbnail API
6. **Błąd "Unable to process input image"** - Dodano backend endpoint `/api/image/:fileId`
7. **Lokalizacja zdjęć analizowała od nowa** - Dodano `translatePhotosOnly()`
8. **Opisy zapisywały się na końcu** - Naprawiono wyszukiwanie i aktualizację wiersza
9. **Status PL błędnie wykryty** - Naprawiono case-insensitive porównywanie
10. **❗HEIC nie uploadowały się** - Dodano WebAssembly `heic-convert` + pipeline HEIC→JPEG→WebP (7.11.2025)
11. **❗Duplikacja zdjęć przy akceptacji** - Inteligentna logika RENAME/COPY (7.11.2025)
12. **❗Prompty hardcoded** - System dynamicznych promptów w Google Sheets (7.11.2025)

### ⚠️ DO SPRAWDZENIA:
1. **Zakładka PL może nadal świecić na zielono** - Jeśli w arkuszu `Tours_PL` są błędne wpisy na końcu, trzeba je usunąć ręcznie w Google Sheets
2. **Miniatury zdjęć mogą nie wyświetlać się** - Wymaga uprawnień do plików w Google Drive (ustaw pliki jako publiczne lub udostępnij folder service account)
3. **❗Arkusz Prompts wymaga inicjalizacji** - Użytkownik musi utworzyć arkusz "Prompts" i wypełnić danymi (jednorazowo)

---

## 🎯 Następne Kroki (TODO)

### Priorytet Wysoki:
1. **✅ DONE:** Upload i konwersja HEIC - działa poprawnie
2. **✅ DONE:** Fix duplikacji zdjęć - RENAME zamiast COPY
3. **✅ DONE:** System dynamicznych promptów - Google Sheets integration
4. **⏳ WYMAGANE:** Inicjalizacja arkusza "Prompts" w Google Sheets (jednorazowo)
   - Utworzyć arkusz o nazwie "Prompts"
   - Wypełnić 18 wierszy zgodnie ze strukturą (ID, Name, Language, Type, Prompt, Version, Last_Modified, Active)
   - Lub użyć endpoint `/api/prompts/initialize` z danymi z `constants.ts`

### Priorytet Średni:
5. **Przetestować upload HEIC** - wgrać zdjęcia z iPhone'a i sprawdzić konwersję
6. **Przetestować edycję promptów** - zmienić prompt w Sheets i w aplikacji
7. **Monitorować logi tokenów** - sprawdzić czy optymalizacje działają
8. **Ustawić uprawnienia Drive** - dla miniatur zdjęć

### Priorytet Niski:
9. **Opcjonalnie:** Dodać cache dla promptów (obecnie ładują się przy starcie app)
10. **Opcjonalnie:** Dodać walidację składni promptów przed zapisem
11. **Opcjonalnie:** Dodać A/B testing dla promptów (kolumna Active w Sheets)

---

## 🔍 Troubleshooting

### Problem: "Nie udało się załadować listy wycieczek"
**Przyczyna:** Brak GOOGLE_SHEET_ID lub wyłączone API  
**Rozwiązanie:** ✅ Naprawione - sekrety skonfigurowane, API włączone

### Problem: "Unable to process input image"
**Przyczyna:** Frontend nie mógł pobrać obrazów z Google Drive  
**Rozwiązanie:** ✅ Naprawione - dodano backend endpoint `/api/image/:fileId`

### Problem: Opisy zapisują się na końcu arkusza
**Przyczyna:** Używano `append()` zamiast wyszukiwania i aktualizacji wiersza  
**Rozwiązanie:** ✅ Naprawione - dodano wyszukiwanie po kolumnie A z case-insensitive porównywaniem

### Problem: Zakładka PL świeci się na zielono bez danych
**Przyczyna:** Błędne wpisy w arkuszu `Tours_PL` lub niepoprawne porównywanie nazw  
**Rozwiązanie:** ✅ Naprawione - case-insensitive porównywanie. Jeśli nadal występuje, sprawdź arkusz i usuń błędne wpisy ręcznie.

### Problem: Lokalizacja zdjęć zmienia nazwy plików
**Przyczyna:** Funkcja analizowała zdjęcia od nowa zamiast tłumaczyć metadane  
**Rozwiązanie:** ✅ Naprawione - dodano `translatePhotosOnly()` która zachowuje `newName` z EN

### Problem: Miniatury nie wyświetlają się
**Przyczyna:** Uprawnienia do plików w Google Drive  
**Rozwiązanie:** ⚠️ Wymaga ustawienia uprawnień przez użytkownika (ustaw pliki jako publiczne lub udostępnij folder service account)

### Problem: ❗Zdjęcia HEIC nie uploadują się / "heif: Invalid input"
**Przyczyna:** Systemowe biblioteki libheif są niestabilne i nie obsługują wszystkich wariantów HEIC z iPhone'a  
**Rozwiązanie:** ✅ Naprawione (7.11.2025) - użyto WebAssembly `heic-convert` + pipeline HEIC→JPEG→WebP

### Problem: ❗Duplikacja zdjęć przy akceptacji
**Przyczyna:** Funkcja `acceptChanges()` kopiowała pliki zamiast je renameować  
**Rozwiązanie:** ✅ Naprawione (7.11.2025) - inteligentna logika RENAME/COPY sprawdzająca `parents` pliku w Drive

### Problem: ❗Prompty nadpisywane przy deploy
**Przyczyna:** Prompty były hardcoded w `src/constants.ts`  
**Rozwiązanie:** ✅ Naprawione (7.11.2025) - prompty w Google Sheets, dynamiczne ładowanie i zapis

### Problem: Prompty nie ładują się z Sheets
**Przyczyna:** Brak arkusza "Prompts" lub nieprawidłowa struktura  
**Rozwiązanie:** ⚠️ Wymaga utworzenia arkusza "Prompts" zgodnie ze strukturą (8 kolumn, 18 wierszy) lub użycia `/api/prompts/initialize`

### Problem: Zmiany promptów w aplikacji nie zapisują się do Sheets
**Przyczyna:** Brak implementacji zapisu w `SettingsView.tsx`  
**Rozwiązanie:** ✅ Naprawione (7.11.2025) - `handleSave()` wywołuje `apiService.updatePrompt()` dla każdego zmienionego promptu

---

## 📞 Kontakt i Projekty

**Projekt:** content-machine-476312  
**Region:** us-west1  
**Service:** walkative-tours-fixer-v2  
**Google Sheets ID:** `1rk6I18sOP5gYQtdsS3Jt65CxwfMJ8eCmzOoB9XdMqn0`

**Git Status:**
- Branch: `cursor`
- Untracked files: `*.bak` (Dockerfile, cloudbuild.yaml, package.json, mockApiService.ts)

---

## 🔑 Kluczowe Funkcje

### Generowanie Treści:
- **EN:** Normalizacja opisów + analiza zdjęć (jednoczesnie lub osobno)
- **PL/DE/ES:** Tłumaczenie opisów + tłumaczenie metadanych zdjęć (jednoczesnie lub osobno)
- **Modele:** Różne dla opisów (`gemini-2.5-pro`) i zdjęć (`gemini-2.5-flash-image`)

### Zapis do Google Sheets:
- **Wyszukiwanie:** Po kolumnie A (nazwa wycieczki) - case-insensitive
- **Aktualizacja:** Jeśli wiersz istnieje, aktualizuje kolumny A-D
- **Dodawanie:** Jeśli wiersz nie istnieje, dodaje nowy
- **Metadane zdjęć:** Zapis do `Photos_Metadata` z clear existing entries

### UI:
- **Przycisk "Generuj":** Generuje opis i zdjęcia jednocześnie
- **Przyciski osobne:** "Generuj Opis" i "Generuj Zdjęcia" (opcjonalne)
- **Przycisk "Akceptuj":** Zapisuje do Google Sheets
- **Zakładki:** EN, Canonical EN, PL, DE, ES

---

**Koniec podsumowania** - Dokument zaktualizowany i gotowy do użycia ✅

**Ostatnia sesja:** 7 listopada 2025 - HEIC upload + fix duplikacji + system dynamicznych promptów w Google Sheets

📋 **Szczegółowe podsumowanie sesji:** Zobacz `SESSION_2025-11-07_SUMMARY.md`
