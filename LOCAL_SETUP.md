# 🚀 Lokalne uruchomienie - Walkative Tours Description Fixer

## Szybki start

```bash
# 1. Zainstaluj zależności
npm install

# 2. Sprawdź czy dane są OK
node test-data.js

# 3. Zbuduj frontend
npm run build

# 4. Uruchom aplikację  
npm start
```

**Aplikacja będzie na: http://localhost:8080**

---

## Co sprawdzić po uruchomieniu

1. Otwórz http://localhost:8080
2. W dropdown menu u góry powinieneś zobaczyć **~195 wycieczek**
3. **Pierwsze wycieczki** powinny być:
   - ✅ "Antwerp Night Tour: Dark Stories & Legends"
   - ✅ "Welcome to Antwerp! Old Town Guided Walking Tour"
   - ✅ "Alternative Athens: Street Art & Counterculture"

4. **NIE** powinieneś widzieć jako pierwszych:
   - ❌ "Krakow Old Town" 
   - ❌ "Warsaw WWII History"
   - ❌ "Gdansk Main Town"

*(Krakow/Warsaw są w danych z Excela, ale NIE jako pierwsze wycieczki)*

---

## Tryb deweloperski (z hot reload)

```bash
npm run dev
```

- Backend: http://localhost:8080
- Frontend dev: http://localhost:3000 ← **użyj tego!**

---

## API Key (opcjonalnie)

Jeśli chcesz używać funkcji AI:

1. Skopiuj `.env.example` do `.env`
2. Dodaj swój Gemini API key:
   ```
   API_KEY=twój_klucz
   ```

**Ważne**: API key jest potrzebny TYLKO dla funkcji AI. 
Dane wycieczek działają bez niego!

---

## Rozwiązywanie problemów

### Stare dane (Krakow jako pierwszy)
```bash
rm -rf node_modules/.vite dist
npm run build
npm start
```

### Port zajęty
Zmień w `server.js`:
```javascript
const PORT = process.env.PORT || 3001;
```

### Cannot find module
```bash
rm -rf node_modules package-lock.json
npm install
```
