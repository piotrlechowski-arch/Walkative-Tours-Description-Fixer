# Status Projektu - Problemy z Google Drive

**Data:** 6 listopada 2025 (wieczór)  
**Ostatnia rewizja:** walkative-tours-fixer-v2-00025-88b  
**URL:** https://walkative-tours-fixer-v2-427383392801.us-west1.run.app

---

## 🔴 Aktualne Problemy

### 1. Upload Zdjęć Nie Działa

**Błąd:** `Either GOOGLE_DRIVE_PHOTOS_FOLDER_ID or GOOGLE_DRIVE_SHARED_DRIVE_ID must be configured`

**Przyczyna:**
- Service Account w Google Drive **nie ma własnego storage quota**
- Google wymaga użycia **Shared Drive (Team Drive)** lub **OAuth delegation**
- Obecna implementacja próbuje uploadować do osobistego storage Service Account, co nie jest możliwe

**Lokalizacja błędu:**
- `googleApiService.js` - funkcja `uploadPhotoToDrive()`
- `server.js` - endpoint `/api/upload-photo`

**Co zostało zrobione:**
- ✅ Dodano `supportsAllDrives: true` do wszystkich operacji Drive API
- ✅ Zmieniono Buffer na Stream dla uploadu
- ✅ Dodano walidację wymaganych zmiennych środowiskowych
- ❌ **BRAKUJE:** Konfiguracja Shared Drive w Cloud Run

**Wymagane działanie:**
1. Utworzyć lub użyć istniejącego **Shared Drive** w Google Workspace
2. Dodać Service Account email do Shared Drive jako członka z uprawnieniami **Content Manager** lub **Manager**
3. Utworzyć folder w Shared Drive na zdjęcia
4. Skonfigurować w Cloud Run secret: `GOOGLE_DRIVE_PHOTOS_FOLDER_ID` = ID folderu w Shared Drive

**Jak znaleźć ID folderu:**
- Otwórz folder w Google Drive
- URL: `https://drive.google.com/drive/folders/FOLDER_ID`
- Skopiuj `FOLDER_ID` z URL

---

### 2. Zmiana Nazw Plików w Drive Nie Działa

**Problem:** 
- Checkbox "Zmien nazwy plikow w Drive" nie zmienia nazw plików w Google Drive
- Funkcjonalność jest zaimplementowana, ale prawdopodobnie nie działa z powodu:
  - Braku `driveFileId` w danych zdjęć
  - Problemów z uprawnieniami Service Account
  - Braku Shared Drive configuration

**Lokalizacja kodu:**
- `googleApiService.js` - funkcja `acceptChanges()` (linie 640-674)
- `googleApiService.js` - funkcja `getTourDetails()` (linia 391) - mapowanie `driveFileId`

**Co zostało zrobione:**
- ✅ Dodano mapowanie `driveFileId` w `getTourDetails()` (obsługa różnych wariantów nazwy kolumny)
- ✅ Dodano szczegółowe logowanie w `acceptChanges()` dla diagnozy
- ✅ Dodano `supportsAllDrives: true` do operacji `drive.files.update()`
- ❌ **BRAKUJE:** Weryfikacja czy `driveFileId` jest poprawnie zapisywane w `Photos_Source`
- ❌ **BRAKUJE:** Testy z rzeczywistymi danymi

**Wymagane działanie:**
1. Sprawdzić czy kolumna `driveFileId` (lub `drivefileid`, `DriveFileId`) istnieje w arkuszu `Photos_Source`
2. Sprawdzić czy `driveFileId` jest poprawnie zapisywane podczas uploadu zdjęć
3. Sprawdzić logi Cloud Run podczas próby rename - logi pokażą:
   - Czy `driveFileId` jest dostępne dla każdego zdjęcia
   - Czy operacja rename się powiodła
   - Szczegóły błędów

**Logi do sprawdzenia:**
```bash
gcloud run services logs read walkative-tours-fixer-v2 --region=us-west1 --limit=100 | grep -i "rename\|driveFileId"
```

---

## 📋 Stan Implementacji

### ✅ Zaimplementowane Funkcjonalności

1. **Drag-and-Drop Upload Zdjęć**
   - Komponent w `SourceColumn.tsx` (tylko w widoku English Editing)
   - Obsługa przeciągania i klikania
   - Integracja z `/api/upload-photo`
   - Automatyczna analiza przez Gemini po uploadzie
   - Dodawanie do `Photos_Source` i `Photos_Metadata`
   - Aktualizacja `photoIds` w `Tours_Source`

2. **Backend Endpoints**
   - `/api/upload-photo` - upload zdjęcia do Drive i dodanie do `Photos_Source`
   - `/api/tours/:name/upload-photo` - analiza zdjęcia i dodanie do wycieczki
   - `/api/image/:fileId` - pobieranie obrazów z Drive

3. **Funkcje w googleApiService.js**
   - `uploadPhotoToDrive()` - upload z obsługą Shared Drive
   - `addPhotoToSource()` - dodanie do arkusza `Photos_Source`
   - `addPhotoIdToTour()` - dodanie photoId do wycieczki w `Tours_Source`
   - `getTourDetails()` - mapowanie `driveFileId` z arkusza

4. **Rename Files w Drive**
   - Implementacja w `acceptChanges()` z logowaniem
   - Obsługa `supportsAllDrives: true`

---

## 🔧 Wymagana Konfiguracja

### Cloud Run Secrets/Environment Variables

**Obecnie skonfigurowane:**
- ✅ `GEMINI_API_KEY:latest`
- ✅ `GOOGLE_SERVICE_ACCOUNT_CREDENTIALS:latest`
- ✅ `GOOGLE_SHEET_ID:latest`

**WYMAGANE do dodania:**
- ❌ `GOOGLE_DRIVE_PHOTOS_FOLDER_ID` - ID folderu w Shared Drive dla zdjęć

**Opcjonalne:**
- `GOOGLE_DRIVE_SHARED_DRIVE_ID` - ID całego Shared Drive (jeśli potrzebne)

### Google Workspace Setup

**Wymagane:**
1. **Shared Drive (Team Drive)**
   - Utworzyć w Google Workspace Admin Console
   - Lub użyć istniejącego

2. **Service Account Permissions**
   - Dodać Service Account email do Shared Drive
   - Uprawnienia: **Content Manager** lub **Manager**
   - Service Account email można znaleźć w `GOOGLE_SERVICE_ACCOUNT_CREDENTIALS` → `client_email`

3. **Folder w Shared Drive**
   - Utworzyć folder na zdjęcia
   - Skopiować ID folderu z URL
   - Użyć jako `GOOGLE_DRIVE_PHOTOS_FOLDER_ID`

---

## 📝 Pliki Zmodyfikowane (Ostatnia Sesja)

### Backend:
- `googleApiService.js`
  - `uploadPhotoToDrive()` - dodano obsługę Shared Drive, stream conversion
  - `acceptChanges()` - dodano logowanie i `supportsAllDrives: true`
  - `getTourDetails()` - dodano mapowanie `driveFileId`
  - `addPhotoIdToTour()` - nowa funkcja do dodawania photoId do wycieczki

- `server.js`
  - `/api/upload-photo` - endpoint uploadu
  - `/api/tours/:name/upload-photo` - endpoint analizy i dodania do wycieczki
  - `/api/image/:fileId` - dodano `supportsAllDrives: true`

### Frontend:
- `src/components/SourceColumn.tsx`
  - Dodano drag-and-drop zone
  - Dodano `handleFileUpload()` z integracją API
  - Dodano `onPhotoUploaded` callback

- `src/components/EditorView.tsx`
  - Dodano prop `onPhotoUploaded`

- `src/App.tsx`
  - Dodano `handlePhotoUploaded()` callback
  - Przekazywanie do `EditorView`

- `src/services/apiService.ts`
  - Dodano `uploadPhoto()`
  - Dodano `uploadAndAnalyzePhoto()`

---

## 🐛 Znane Problemy Techniczne

### 1. Service Account Storage Quota
- **Problem:** Service Accounts nie mają własnego storage quota
- **Rozwiązanie:** Użycie Shared Drive (Team Drive)
- **Status:** Czeka na konfigurację Shared Drive

### 2. Drive File ID Mapping
- **Problem:** Możliwe że `driveFileId` nie jest poprawnie zapisywane w `Photos_Source`
- **Rozwiązanie:** Sprawdzić arkusz `Photos_Source` i kolumnę `driveFileId`
- **Status:** Wymaga weryfikacji

### 3. Permissions dla Rename
- **Problem:** Service Account może nie mieć uprawnień do rename w Shared Drive
- **Rozwiązanie:** Upewnić się że Service Account ma uprawnienia **Manager** w Shared Drive
- **Status:** Wymaga weryfikacji

---

## 🔍 Debugging Steps

### Dla Upload Zdjęć:

1. **Sprawdź konfigurację:**
   ```bash
   gcloud run services describe walkative-tours-fixer-v2 --region=us-west1 \
     --format="value(spec.template.spec.containers[0].env)"
   ```

2. **Sprawdź logi uploadu:**
   ```bash
   gcloud run services logs read walkative-tours-fixer-v2 --region=us-west1 \
     --limit=50 | grep -i "upload\|drive\|photo"
   ```

3. **Sprawdź czy folder istnieje w Shared Drive:**
   - Otwórz Google Drive
   - Sprawdź czy folder z ID z `GOOGLE_DRIVE_PHOTOS_FOLDER_ID` istnieje
   - Sprawdź czy Service Account ma dostęp

### Dla Rename Files:

1. **Sprawdź logi rename:**
   ```bash
   gcloud run services logs read walkative-tours-fixer-v2 --region=us-west1 \
     --limit=100 | grep -i "rename\|RENAMING\|driveFileId"
   ```

2. **Sprawdź arkusz Photos_Source:**
   - Otwórz Google Sheets
   - Sprawdź arkusz `Photos_Source`
   - Sprawdź czy kolumna `driveFileId` (lub warianty) istnieje
   - Sprawdź czy zawiera wartości dla zdjęć

3. **Sprawdź dane w getTourDetails:**
   - Dodaj console.log w `getTourDetails()` aby zobaczyć czy `driveFileId` jest mapowane
   - Sprawdź w logach Cloud Run

---

## 📚 Dokumentacja Google Drive API

**Shared Drives:**
- https://developers.google.com/workspace/drive/api/guides/about-shareddrives
- https://developers.google.com/drive/api/guides/enable-shareddrives

**Service Account Permissions:**
- Service Account musi być dodany jako członek Shared Drive
- Wymagane uprawnienia: **Manager** lub **Content Manager**
- Nie można użyć "anyone" permissions dla Shared Drive

**API Parameters:**
- `supportsAllDrives: true` - wymagane dla wszystkich operacji na Shared Drive
- `driveId` - opcjonalne, jeśli operujemy na konkretnym Shared Drive

---

## ✅ Checklist do Rozwiązania Problemów

### Upload Zdjęć:
- [ ] Utworzyć/znaleźć Shared Drive w Google Workspace
- [ ] Dodać Service Account do Shared Drive jako Manager
- [ ] Utworzyć folder w Shared Drive na zdjęcia
- [ ] Skopiować ID folderu z URL
- [ ] Dodać secret `GOOGLE_DRIVE_PHOTOS_FOLDER_ID` w Cloud Run
- [ ] Przetestować upload zdjęcia
- [ ] Sprawdzić logi Cloud Run

### Rename Files:
- [ ] Sprawdzić czy kolumna `driveFileId` istnieje w `Photos_Source`
- [ ] Sprawdzić czy `driveFileId` jest zapisywane podczas uploadu
- [ ] Sprawdzić logi podczas próby rename
- [ ] Zweryfikować uprawnienia Service Account w Shared Drive
- [ ] Przetestować rename z zaznaczonym checkboxem "Zmien nazwy plikow w Drive"

---

## 🚀 Następne Kroki

1. **Priorytet 1:** Skonfigurować Shared Drive i `GOOGLE_DRIVE_PHOTOS_FOLDER_ID`
2. **Priorytet 2:** Przetestować upload zdjęć po konfiguracji
3. **Priorytet 3:** Sprawdzić i naprawić rename files (jeśli nadal nie działa)
4. **Priorytet 4:** Dodać lepsze komunikaty błędów dla użytkownika

---

## 📞 Przydatne Komendy

**Sprawdzenie konfiguracji Cloud Run:**
```bash
gcloud run services describe walkative-tours-fixer-v2 --region=us-west1
```

**Dodanie secret do Cloud Run:**
```bash
gcloud run services update walkative-tours-fixer-v2 \
  --region=us-west1 \
  --update-secrets=GOOGLE_DRIVE_PHOTOS_FOLDER_ID=SECRET_NAME:latest
```

**Lub jako environment variable (mniej bezpieczne):**
```bash
gcloud run services update walkative-tours-fixer-v2 \
  --region=us-west1 \
  --set-env-vars=GOOGLE_DRIVE_PHOTOS_FOLDER_ID=FOLDER_ID
```

**Sprawdzenie logów:**
```bash
gcloud run services logs read walkative-tours-fixer-v2 --region=us-west1 --limit=100
```

---

**Koniec dokumentacji** - Gotowe do kontynuacji pracy w następnym chacie ✅

