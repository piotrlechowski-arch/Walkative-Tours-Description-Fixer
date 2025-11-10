# Naprawa Obsługi Zdjęć HEIC - Podsumowanie

**Data:** 7 listopada 2025  
**Wersja:** walkative-tours-fixer-v2-00044-nq4  
**Status:** ✅ Wdrożone

---

## 🎯 Problem

Aplikacja nie mogła przetwarzać zdjęć w formacie HEIC (High Efficiency Image Container), używanym domyślnie przez iPhone'y i nowsze urządzenia Apple.

**Błąd:**
```
Błąd podczas przesyłania zdjęcia: Failed to upload photo: source: bad seek to 3082764
heif: Error while loading plugin: No decoding plugin installed for this compression format (11,6003)
```

**Przyczyna:**
- Przeglądarka nie może zdekodować HEIC przez FileReader
- Komponent `PhotoAnalyzerView` próbował konwertować HEIC do base64 po stronie frontendu
- Brak wsparcia dla formatu HEIC w przeglądarce

---

## ✅ Rozwiązanie

### 1. Nowy Endpoint Backend: `/api/convert-image`

Dodano endpoint do konwersji obrazów (w tym HEIC) na JPEG po stronie backendu.

**Lokalizacja:** `server.js` linie 389-438

**Funkcjonalność:**
- Przyjmuje dowolny format obrazu (HEIC, JPEG, PNG, WebP)
- Używa biblioteki Sharp do konwersji
- Skaluje obrazy powyżej 1920px szerokości (oszczędność tokenów)
- Konwertuje do JPEG z jakością 85%
- Zwraca base64 + informacje o konwersji

**Przykład:**
```javascript
POST /api/convert-image
Content-Type: multipart/form-data
Body: { image: File }

Response:
{
  "data": "base64...",
  "mimeType": "image/jpeg",
  "originalFormat": "heic",
  "originalSize": 3082764,
  "convertedSize": 456123
}
```

### 2. Aktualizacja `PhotoAnalyzerView`

Zaktualizowano komponent do używania backend endpoint zamiast FileReader.

**Lokalizacja:** `src/components/PhotoAnalyzerView.tsx` linie 6-54

**Zmiany:**
- Funkcja `fileToBase64()` zawsze używa `/api/convert-image`
- Fallback do FileReader tylko dla nie-HEIC plików, gdy backend jest niedostępny
- Wykrywanie HEIC po rozszerzeniu pliku i MIME type
- Lepsze komunikaty błędów

**Zalety:**
- ✅ Obsługa HEIC, HEIF i innych formatów
- ✅ Automatyczna kompresja i skalowanie
- ✅ Spójność między uploadem a analizą
- ✅ Mniejsze użycie tokenów (skalowanie obrazów)

---

## 🐳 Docker - Wsparcie HEIC

Dockerfile już zawierał potrzebne biblioteki (dodane wcześniej):

```dockerfile
RUN apt-get update && apt-get install -y \
    libvips-dev \      # Sharp używa libvips
    libheif-dev \      # HEIF/HEIC decoder
    libheif1 \         # HEIF library
    libde265-0 \       # H.265 codec
    libx265-199 \      # x265 codec
    && rm -rf /var/lib/apt/lists/*
```

---

## 📝 Instrukcja Testowania

### Test 1: Upload i Analiza HEIC w Photo Analyzer

1. Otwórz aplikację: https://walkative-tours-fixer-v2-427383392801.us-west1.run.app
2. Przejdź do zakładki **"Analizator Zdjęć"**
3. Wybierz zdjęcie HEIC z iPhone'a
4. Wpisz prompt (np. "Describe this image")
5. Kliknij **"Analizuj zdjęcie"**

**Oczekiwany rezultat:**
- ✅ Zdjęcie się wgrywa bez błędów
- ✅ W konsoli pojawia się: `Image converted: heic → JPEG, size: ... → ... bytes`
- ✅ Gemini zwraca opis zdjęcia

### Test 2: Upload HEIC do Tour (Add Tour View)

1. Przejdź do zakładki **"Dodaj Wycieczkę"**
2. Wybierz miasto
3. Kliknij **"Upload Photo"**
4. Wybierz zdjęcie HEIC

**Oczekiwany rezultat:**
- ✅ Zdjęcie konwertuje się do WebP
- ✅ Upload do Google Drive działa
- ✅ Zdjęcie pojawia się w `Photos_Source`

---

## 🔍 Debugging

### Sprawdzenie Logów

```bash
# Cloud Run logs
gcloud run services logs read walkative-tours-fixer-v2 --region=us-west1 --limit=50

# Szukaj:
# - "Converting image: ..."
# - "Image format: heic, size: ..."
# - "Successfully converted image to JPEG base64"
```

### Lokalny Test (wymaga libheif na macOS)

```bash
# Instalacja libheif na macOS (opcjonalnie)
brew install libheif

# Start dev server
npm run dev

# Test w przeglądarce
open http://localhost:3000
```

**Uwaga:** Sharp na macOS może nie mieć wsparcia dla HEIC bez dodatkowych bibliotek. Zalecane jest testowanie na Cloud Run (produkcja).

---

## 📦 Pliki Zmienione

### Backend
- `server.js` (linie 389-438) - nowy endpoint `/api/convert-image`

### Frontend
- `src/components/PhotoAnalyzerView.tsx` (linie 6-54, 89-96, 133) - konwersja przez backend

---

## 🚀 Deployment

**Wersja:** walkative-tours-fixer-v2-00044-nq4  
**URL:** https://walkative-tours-fixer-v2-427383392801.us-west1.run.app  
**Data:** 7 listopada 2025

**Komenda:**
```bash
cd /Users/Lechu1/Walkative-Tours-Description-Fixer
npm run build
gcloud run deploy walkative-tours-fixer-v2 \
  --source . \
  --region=us-west1 \
  --platform=managed \
  --allow-unauthenticated
```

---

## ✅ Checklist

- [x] Dodany endpoint `/api/convert-image` w backendzie
- [x] Zaktualizowany `PhotoAnalyzerView` do używania endpointu
- [x] Dockerfile ma biblioteki HEIC (libheif, libde265, libx265)
- [x] Build frontendu zakończony pomyślnie
- [x] Deployment do Cloud Run zakończony (wersja 00044)
- [ ] **Test ręczny z plikiem HEIC** (wymaga testu przez użytkownika)

---

## 📊 Porównanie: Przed vs Po

### Przed
```
User wybiera HEIC → FileReader (browser) → ❌ Błąd: "No decoding plugin"
```

### Po
```
User wybiera HEIC → Upload do /api/convert-image → Sharp (backend) konwertuje HEIC→JPEG 
→ Zwraca base64 → Gemini analizuje → ✅ Sukces
```

---

## 💡 Dodatkowe Korzyści

1. **Automatyczne skalowanie** - obrazy >1920px są pomniejszane (oszczędność tokenów)
2. **Jednolite przetwarzanie** - wszystkie obrazy przechodzą przez Sharp (spójność)
3. **Lepsze logowanie** - szczegółowe logi konwersji w Cloud Run
4. **Fallback** - dla standardowych formatów działa FileReader (gdy backend niedostępny)

---

## 🔗 Powiązane Dokumenty

- **PROJECT_SUMMARY.md** - główne podsumowanie projektu
- **README.md** - instrukcja instalacji i konfiguracji
- **Dockerfile** - konfiguracja środowiska z bibliotekami HEIC

---

**Gotowe do testowania! 🎉**

Przetestuj upload zdjęcia HEIC w aplikacji:
👉 https://walkative-tours-fixer-v2-427383392801.us-west1.run.app


