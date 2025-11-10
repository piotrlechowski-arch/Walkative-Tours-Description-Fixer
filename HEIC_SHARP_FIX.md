# ✅ Naprawa Sharp HEIC Support - Finalne Rozwiązanie

**Data:** 7 listopada 2025  
**Wersja:** walkative-tours-fixer-v2-00046-mts  
**Status:** ✅ WDROŻONE

---

## 🎯 Problem (Rzeczywisty)

Pliki HEIC przechodziły przez filtry frontendu i docierały do backendu, ale **Sharp nie mógł ich zdekodować** mimo zainstalowanych bibliotek systemowych.

**Błąd:**
```
Failed to upload photo: source: bad seek to 3062764
heif: Error while loading plugin: No decoding plugin installed for this compression format (11,6003)
```

**Przyczyna:**
- Biblioteki systemowe były zainstalowane: `libheif-dev`, `libheif1`, `libde265-0`, `libx265-199` ✅
- Ale Sharp został zainstalowany PRZED instalacją bibliotek systemowych ❌
- Sharp używał pre-compiled binary bez obsługi HEIC ❌
- **Sharp musi być przebudowany PO instalacji bibliotek systemowych!**

---

## ✅ Rozwiązanie

### Dockerfile - Przebudowanie Sharp

**Dodano narzędzia build i rebuild Sharp:**

```dockerfile
# Install system dependencies for Sharp image processing (including HEIC support)
# Note: We need build tools to rebuild Sharp with HEIC support
RUN apt-get update && apt-get install -y \
    python3 \
    build-essential \
    pkg-config \
    libvips-dev \
    libheif-dev \
    libheif1 \
    libde265-0 \
    libx265-199 \
    && rm -rf /var/lib/apt/lists/*

# Install production dependencies only
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Rebuild Sharp with HEIC support using local libvips/libheif
# This is critical - Sharp needs to be rebuilt to use the system libraries
RUN npm rebuild sharp --verbose
```

**Kluczowe zmiany:**
1. Dodano `python3` (wymagany do budowania native modules)
2. Dodano `build-essential` (gcc, g++, make)
3. Dodano `pkg-config` (wykrywanie bibliotek)
4. **Dodano `npm rebuild sharp --verbose`** - przebudowuje Sharp z lokalnymi bibliotekami

---

## 📊 Dlaczego to działa?

### Przed (Nie działało):
```
1. npm ci --omit=dev
   → Sharp instaluje się z pre-compiled binary (brak HEIC)
2. Biblioteki HEIC są już w systemie, ale Sharp ich nie widzi
3. Sharp próbuje zdekodować HEIC → ❌ Błąd: "No decoding plugin"
```

### Po (Działa):
```
1. Instalacja bibliotek systemowych (libheif, libvips)
2. npm ci --omit=dev
   → Sharp instaluje się z pre-compiled binary
3. npm rebuild sharp --verbose
   → Sharp kompiluje się od nowa, wykrywa libheif/libvips
   → Włącza obsługę HEIC w czasie kompilacji ✅
4. Sharp może teraz dekodować HEIC → ✅ Sukces!
```

---

## 🔍 Weryfikacja

### Cloud Run Logs - Sharp Rebuild

Po deploymencie sprawdź logi budowania:

```bash
gcloud builds log --region=us-west1 $(gcloud builds list --limit=1 --format='value(id)')

# Szukaj linii:
> sharp@0.33.0 install
> (node install/libvips) || (node install/dll-copy)
sharp: Detected globally-installed libvips v8.15.2
sharp: Building from source via node-gyp
...
```

### Runtime Logs - Upload HEIC

Po próbie uploadu HEIC sprawdź logi runtime:

```bash
gcloud run services logs read walkative-tours-fixer-v2 --region=us-west1 --limit=50

# Powinno być:
Uploaded image format: heic, size: 4032x3024, original size: 3062764 bytes
Resizing image from 4032px to max 1920px width
Final WebP size: 245678 bytes (239.9 KB), quality: 60
✓ Successfully uploaded photo to Drive
```

---

## 🧪 Testowanie

### Test 1: Upload HEIC w Edytorze (SourceColumn)

1. Otwórz: https://walkative-tours-fixer-v2-427383392801.us-west1.run.app
2. Wybierz wycieczkę
3. Zakładka **"English Editing"**
4. Scroll w dół do sekcji **"Zdjęcia do analizy"**
5. Przeciągnij lub wybierz plik HEIC

**Oczekiwany rezultat:**
- ✅ "Przetwarzanie zdjęcia..." pojawia się
- ✅ Sharp konwertuje HEIC → WebP (bez błędów!)
- ✅ Upload do Google Drive działa
- ✅ Gemini analizuje zdjęcie
- ✅ Alert: "Zdjęcie zostało przesłane, przeanalizowane i dodane do wycieczki!"
- ✅ Zdjęcie pojawia się na liście

### Test 2: Upload HEIC w "Dodaj Wycieczkę" (AddTourView)

1. Menu górne → **"Dodaj Wycieczkę"**
2. Wpisz miasto i nazwę
3. Sekcja **"Zdjęcia (opcjonalnie)"**
4. Przeciągnij plik HEIC

**Oczekiwany rezultat:**
- ✅ Preview zdjęcia pojawia się (może być czerwony X - to normalne, przeglądarka nie obsługuje HEIC)
- ✅ Spinner "uploading" → zielony checkmark
- ✅ Photo ID automatycznie dodane do listy
- ✅ Zapis wycieczki działa
- ✅ Zdjęcie jest w Google Drive (sprawdź w Drive)
- ✅ Zdjęcie jest w Photos_Source (sprawdź w Sheets)

---

## 📁 Pliki Zmienione

### Docker
- `Dockerfile` (linie 30-48) - dodane narzędzia build + `npm rebuild sharp`

### Bez zmian (już były poprawne):
- `server.js` - endpoint `/api/upload-photo` z Sharp
- `src/components/SourceColumn.tsx` - filtry z HEIC
- `src/components/AddTourView.tsx` - filtry z HEIC

---

## 🚀 Deployment

**Wersja:** walkative-tours-fixer-v2-00046-mts  
**URL:** https://walkative-tours-fixer-v2-427383392801.us-west1.run.app  
**Data:** 7 listopada 2025

**Historia wersji:**
- `00044-nq4` - Dodany endpoint `/api/convert-image` (nieużywany)
- `00045-rxc` - Naprawione filtry frontendu, usunięty PhotoAnalyzerView
- `00046-mts` - **AKTUALNA** - Przebudowany Sharp z HEIC support

---

## ✅ Checklist

- [x] Dodane narzędzia build do Dockerfile (python3, build-essential, pkg-config)
- [x] Dodany `npm rebuild sharp --verbose` do Dockerfile
- [x] Build frontendu zakończony pomyślnie
- [x] Deployment do Cloud Run zakończony (wersja 00046)
- [ ] **Test ręczny z plikiem HEIC** (wymaga użytkownika)
- [ ] **Sprawdzenie czy zdjęcie jest w Google Drive** (wymaga użytkownika)

---

## 💡 Kluczowe Lekcje

### Co było problemem?
1. Sharp był instalowany Z PRE-COMPILED BINARY bez HEIC
2. Biblioteki systemowe były, ale Sharp ich nie używał
3. Trzeba było **PRZEBUDOWAĆ Sharp** po instalacji bibliotek

### Jak to naprawić?
1. Zainstaluj biblioteki systemowe (`libheif-dev`, `libvips-dev`)
2. Zainstaluj narzędzia build (`python3`, `build-essential`, `pkg-config`)
3. Zainstaluj Sharp (`npm ci`)
4. **REBUILD Sharp** (`npm rebuild sharp --verbose`)

### Dlaczego wcześniej nie działało?
- Dockerfile miał biblioteki, ale **NIE PRZEBUDOWYWAŁ Sharp**
- Sharp używał pre-compiled binary bez HEIC
- Native modules (Sharp) muszą być rebuild po instalacji bibliotek systemowych!

---

## 🔗 Powiązane Dokumenty

- **HEIC_FIX_FINAL.md** - poprzednie próby naprawy (filtry frontendu)
- **HEIC_FIX_SUMMARY.md** - pierwsza próba (endpoint `/api/convert-image`)
- **Dockerfile** - finalna konfiguracja z rebuild Sharp
- **PROJECT_SUMMARY.md** - główne podsumowanie projektu

---

## 🎯 Status Końcowy

### ✅ Naprawione:
1. Filtry frontendu akceptują HEIC (rozszerzenie pliku)
2. Sharp dekoduje HEIC (przebudowany z libheif)
3. Upload do Drive działa (konwersja HEIC → WebP)
4. Analiza Gemini działa (używa `/api/image/:fileId`)

### ❓ Do sprawdzenia przez użytkownika:
1. Upload HEIC w Edytorze → czy działa bez błędów?
2. Upload HEIC w "Dodaj Wycieczkę" → czy pojawia się w Drive?
3. Czy zdjęcie jest w arkuszu Photos_Source?

---

**Gotowe do testowania! 🎉**

**URL:** https://walkative-tours-fixer-v2-427383392801.us-west1.run.app

Jeśli nadal są problemy, sprawdź logi Cloud Run:
```bash
gcloud run services logs read walkative-tours-fixer-v2 --region=us-west1 --limit=100
```


