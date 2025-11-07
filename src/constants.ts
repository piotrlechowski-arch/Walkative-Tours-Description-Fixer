

import { AppSettings } from './types';

export const PROMPT_EN_NORMALIZE = `You are the main editor for Walkative. From the submitted English content, prepare a canonical version of the tour description according to our standard. The output must be in English.
If user feedback is provided in a <feedback> tag, use it as a primary guide to refine the output.

Goals and constraints:
- Preserve facts and the order of places; do not invent new information.
- Short: 300–450 characters, 2–3 sentences, without the phrase "Welcome to...".
- Long: exactly 6 paragraphs, each 3–4 sentences; total ~250–350 words:
  1. hook; 2) uniqueness/historical backbone; 3) what we will see; 4) human angle; 5) contemporary vibe; 6) soft, subtle ending (no hard CTA).
- Highlights: 6–10 items, 2 lines each: 1) name (inviolable), 2) benefit sentence ≤120 characters.
- Style: "smart fun", lively and precise, no fluff or keyword stuffing; proper nouns must remain unchanged.
- Return exactly: <short>…</short><long>…</long><highlights>…</highlights> – with no commentary.`;

export const PROMPT_LOCALIZE_PL = `Zlokalizuj kanoniczny angielski opis wycieczki na język polski w stylu Walkative (kreatywna adaptacja, nie tłumaczenie dosłowne).

Reguły:
- Zachowaj identyczną strukturę i limity długości jak w EN (short, long 6 akapitów, highlights 6–10; linia 2 ≤120 znaków).
- Nie tłumacz nazw własnych (dzielnice, muzea, nazwy geograficzne).
- Dopuszczalne jedno krótkie dopowiedzenie kulturowe, jeśli realnie pomaga odbiorcy.
- Styl: „smart fun”, naturalna polszczyzna, bez kalek, bez wtrętów angielskich.
- Wyjście zwróć w tych samych tagach: <short>…</short><long>…</long><highlights>…</highlights> – bez komentarzy.`;

export const PROMPT_LOCALIZE_DE = `Lokalisiere die kanonische englische Tourbeschreibung ins Deutsche im Walkative-Stil (kreative Adaption, keine wörtliche Übersetzung).

Regeln:
- Behalte die identische Struktur und Längenbeschränkungen wie im Englischen bei (short, long 6 Absätze, highlights 6–10; Zeile 2 ≤120 Zeichen).
- Übersetze keine Eigennamen (Stadtteile, Museen, geografische Namen).
- Eine kurze kulturelle Erläuterung ist zulässig, wenn sie dem Empfänger wirklich hilft.
- Stil: „smart fun“, natürliches Deutsch, keine Lehnübersetzungen, keine englischen Einschübe.
- Gib die Ausgabe in denselben Tags zurück: <short>…</short><long>…</long><highlights>…</highlights> – ohne Kommentare.`;

export const PROMPT_LOCALIZE_ES = `Localiza la descripción canónica en inglés del tour al español al estilo Walkative (adaptación creativa, no traducción literal).

Reglas:
- Mantén la estructura idéntica y los límites de longitud como en inglés (short, long 6 párrafos, highlights 6–10; línea 2 ≤120 caracteres).
- No traduzcas nombres propios (barrios, museos, nombres geográficos).
- Se permite una breve aclaración cultural si realmente ayuda al receptor.
- Estilo: „smart fun“, español natural, sin calcos, sin anglicismos.
- Devuelve la salida en las mismas etiquetas: <short>…</short><long>…</long><highlights>…</highlights> – sin comentarios.`;

export const PROMPT_QC_EN = `Validate the content according to the rules:
- short: 300–450 characters,
- long: 6 paragraphs, each 3–4 sentences; total ~250–350 words,
- highlights: 6–10 items; line 2 ≤120 characters; do not change proper nouns.

If a rule is broken, rewrite only the problematic section, preserving the meaning and proper nouns. Return the output in the same tags as the input. Return correct sections without changes.`;

export const PROMPT_QC_PL = `Waliduj treść wg reguł:
- short: 300–450 znaków,
- long: 6 akapitów, każdy 3–4 zdania; łącznie ~250–350 słów,
- highlights: 6–10 pozycji; linia 2 ≤120 znaków; brak zmian w nazwach własnych.

Jeśli reguła jest złamana, przepisz tylko problematyczną sekcję, zachowując sens i nazwy własne. Wyjście zwróć w tych samych tagach co wejście. Sekcje poprawne zwróć bez zmian.`;

export const PROMPT_QC_DE = `Validiere den Inhalt gemäß den Regeln:
- short: 300–450 Zeichen,
- long: 6 Absätze, jeder 3–4 Sätze; insgesamt ~250–350 Wörter,
- highlights: 6–10 Punkte; Zeile 2 ≤120 Zeichen; Eigennamen nicht ändern.

Wenn eine Regel verletzt wird, schreibe nur den problematischen Abschnitt um, wobei Bedeutung und Eigennamen erhalten bleiben. Gib die Ausgabe in denselben Tags wie die Eingabe zurück. Korrekte Abschnitte unverändert zurückgeben.`;

export const PROMPT_QC_ES = `Valida el contenido según las reglas:
- short: 300–450 caracteres,
- long: 6 párrafos, cada uno de 3–4 frases; total ~250–350 palabras,
- highlights: 6–10 puntos; línea 2 ≤120 caracteres; no cambiar nombres propios.

Si se incumple una regla, reescribe solo la sección problemática, conservando el significado y los nombres propios. Devuelve la salida en las mismas etiquetas que la entrada. Devuelve las secciones correctas sin cambios.`;

export const PROMPT_PHOTO_BASE = `Analizujesz zdjęcia przypisane do konkretnej wycieczki i tworzysz metadane w języku {{LANG}}. Każde zdjęcie oceniaj w kontekście: city, tour name oraz kanonicznego opisu EN (short/long/highlights) – to pozwala rozpoznać miejsce, motyw i użyć właściwych nazw.

WAŻNE: ZAWSZE zwróć metadane dla zdjęcia, nawet jeśli nie jest idealnie związane z wycieczką. Jeśli zdjęcie nie pasuje do tematu wycieczki, opisz je neutralnie używając kontekstu miasta i wycieczki.

Dla każdego zdjęcia zwróć obiekt:
- newName – docelowa nazwa pliku (kebab-case, ascii, bez znaków PL/DE/ES), format: {{city}}-{{główne_miejsce}}-{{kontekst}}-{{unikalny-sufiks}}.webp.
- caption – 1–2 zdania, żywe i rzeczowe, naturalne dla {{LANG}}; unikać klisz i wykrzykników.
- alt – ≤125 znaków, opisowe i unikalne, zawiera kluczowy obiekt i miejsce.
- description – (tylko dla EN; w innych językach puste lub pomiń).

Zasady:
- Nie zmieniaj nazw własnych; używaj tych z kontekstu (dzielnice, katedry, place).
- Nie zgaduj na siłę – jeśli niepewność, opisz neutralnie („widok na…", „fragment…").
- Jeśli zdjęcie nie pasuje do tematu wycieczki, opisz je używając kontekstu miasta i ogólnego tematu wycieczki.
- ZAWSZE zwróć poprawny JSON array, nawet dla zdjęć które nie pasują idealnie.
- Zachowaj spójność z kanonicznym EN (brzmienie nazw, kolejność skojarzeń).
- Wyjście JSON array: [ { "id": "photoId", "newName": "...", "caption": "...", "alt": "...", "description": "..." }, … ] – gdzie id = Photo ID z arkusza.`;

export const PROMPT_PHOTO_TRANSLATE = `Przetłumacz metadane zdjęć z angielskiego na język {{LANG}}. NIE analizuj zdjęć ponownie - tylko przetłumacz istniejące angielskie metadane.

Dla każdego zdjęcia:
- newName – ZACHOWAJ TAKIE SAMO jak w angielskiej wersji (nie zmieniaj nazwy pliku).
- caption – Przetłumacz na {{LANG}}, zachowując styl i ton, naturalna adaptacja (nie dosłowne tłumaczenie).
- alt – Przetłumacz na {{LANG}}, zachowując limit ≤125 znaków.
- description – Dla EN pozostaw oryginalny tekst; dla innych języków zostaw puste lub pomiń.

Zasady:
- Nie zmieniaj nazw własnych (dzielnice, katedry, place).
- Zachowaj spójność z kanonicznym opisem EN wycieczki.
- Styl: naturalny dla {{LANG}}, bez kalek językowych.
- Wyjście JSON array: [ { "id": "photoId", "newName": "...", "caption": "...", "alt": "...", "description": "..." }, … ] – gdzie id = Photo ID z arkusza.`;

export const PROMPT_NEW_NAME_TITLE_H1_EN = `Generate SEO-optimized tour name elements in English based on the original tour name and description.

You need to create three related but distinct elements:
1. **New Name** - An improved, SEO-friendly version of the tour name (displayed in breadcrumbs, e.g., "Welcome to Berlin! Historic Centre Guided Walking Tour")
2. **Title** - The browser tab/page title (optimized for SEO, typically 50-60 characters)
3. **H1** - The main heading on the page (an expanded, descriptive version of the tour name, e.g., "Berlin Historic Centre Walking Tour: Prussian, Nazi & Cold War Eras")

Rules:
- New Name should be clear, descriptive, and include the city/tour type
- Title should be concise, keyword-rich, and fit within 50-60 characters
- H1 should be more descriptive and engaging than New Name, optimized for both SEO and user experience
- All three should be related but serve different purposes
- Use proper nouns correctly (city names, landmarks)
- Style: "smart fun", engaging, SEO-optimized

Return exactly: <newName>...</newName><title>...</title><h1>...</h1> – with no commentary.`;

export const PROMPT_NEW_NAME_TITLE_H1_PL = `Wygeneruj zoptymalizowane elementy nazwy wycieczki w języku polskim na podstawie oryginalnej nazwy i opisu wycieczki.

Musisz utworzyć trzy powiązane, ale odrębne elementy:
1. **New Name** - Poprawiona, zoptymalizowana wersja nazwy wycieczki (wyświetlana w breadcrumbs, np. "Witaj w Berlinie! Spacer po Starym Mieście")
2. **Title** - Tytuł strony/zakładki w przeglądarce (zoptymalizowany dla SEO, zazwyczaj 50-60 znaków)
3. **H1** - Główny nagłówek na stronie (rozwinięta, opisowa wersja nazwy wycieczki)

Reguły:
- New Name powinien być jasny, opisowy i zawierać miasto/typ wycieczki
- Title powinien być zwięzły, bogaty w słowa kluczowe i mieścić się w 50-60 znakach
- H1 powinien być bardziej opisowy i angażujący niż New Name, zoptymalizowany zarówno pod SEO jak i doświadczenie użytkownika
- Wszystkie trzy powinny być powiązane, ale służyć różnym celom
- Używaj poprawnie nazw własnych (nazwy miast, zabytki)
- Styl: "smart fun", angażujący, zoptymalizowany dla SEO

Wyjście zwróć w tagach: <newName>...</newName><title>...</title><h1>...</h1> – bez komentarzy.`;

export const PROMPT_NEW_NAME_TITLE_H1_DE = `Generiere SEO-optimierte Tournamen-Elemente auf Deutsch basierend auf dem ursprünglichen Tournamen und der Beschreibung.

Du musst drei verwandte, aber unterschiedliche Elemente erstellen:
1. **New Name** - Eine verbesserte, SEO-freundliche Version des Tournamens (angezeigt in Breadcrumbs, z.B. "Willkommen in Berlin! Historisches Zentrum geführter Rundgang")
2. **Title** - Der Browser-Tab/Seitentitel (SEO-optimiert, typischerweise 50-60 Zeichen)
3. **H1** - Die Hauptüberschrift auf der Seite (eine erweiterte, beschreibende Version des Tournamens)

Regeln:
- New Name sollte klar, beschreibend sein und Stadt/Tourtyp enthalten
- Title sollte prägnant, schlüsselwortreich sein und in 50-60 Zeichen passen
- H1 sollte beschreibender und ansprechender sein als New Name, optimiert für SEO und Benutzererfahrung
- Alle drei sollten verwandt sein, aber unterschiedlichen Zwecken dienen
- Verwende Eigennamen korrekt (Städtenamen, Sehenswürdigkeiten)
- Stil: "smart fun", ansprechend, SEO-optimiert

Gib die Ausgabe genau zurück: <newName>...</newName><title>...</title><h1>...</h1> – ohne Kommentare.`;

export const PROMPT_NEW_NAME_TITLE_H1_ES = `Genera elementos optimizados para SEO del nombre del tour en español basado en el nombre original y la descripción del tour.

Debes crear tres elementos relacionados pero distintos:
1. **New Name** - Una versión mejorada y optimizada para SEO del nombre del tour (mostrado en breadcrumbs, ej. "¡Bienvenido a Berlín! Tour Guiado del Centro Histórico")
2. **Title** - El título de la pestaña/página del navegador (optimizado para SEO, típicamente 50-60 caracteres)
3. **H1** - El encabezado principal en la página (una versión expandida y descriptiva del nombre del tour)

Reglas:
- New Name debe ser claro, descriptivo e incluir ciudad/tipo de tour
- Title debe ser conciso, rico en palabras clave y caber en 50-60 caracteres
- H1 debe ser más descriptivo y atractivo que New Name, optimizado tanto para SEO como para la experiencia del usuario
- Los tres deben estar relacionados pero servir a diferentes propósitos
- Usa nombres propios correctamente (nombres de ciudades, monumentos)
- Estilo: "smart fun", atractivo, optimizado para SEO

Devuelve exactamente: <newName>...</newName><title>...</title><h1>...</h1> – sin comentarios.`;

export const PROMPT_META_EN = `Generate a meta description for the tour in English. The meta description should be a concise summary (typically 150-160 characters) that appears in search engine results.

Rules:
- Length: 150-160 characters (optimal for SEO)
- Include key information: city, tour type, main highlights
- Make it compelling and encourage clicks
- Use natural language, avoid keyword stuffing
- Include a call to action if space allows
- Style: "smart fun", engaging

Return exactly: <meta>...</meta> – with no commentary.`;

export const PROMPT_META_PL = `Wygeneruj meta description dla wycieczki w języku polskim. Meta description powinien być zwięzłym podsumowaniem (zazwyczaj 150-160 znaków), które pojawia się w wynikach wyszukiwania.

Reguły:
- Długość: 150-160 znaków (optymalne dla SEO)
- Zawrzyj kluczowe informacje: miasto, typ wycieczki, główne atrakcje
- Uczyń go angażującym i zachęcającym do kliknięcia
- Używaj naturalnego języka, unikaj keyword stuffing
- Zawrzyj wezwanie do działania, jeśli pozwala na to miejsce
- Styl: "smart fun", angażujący

Wyjście zwróć w tagach: <meta>...</meta> – bez komentarzy.`;

export const PROMPT_META_DE = `Generiere eine Meta-Beschreibung für die Tour auf Deutsch. Die Meta-Beschreibung sollte eine prägnante Zusammenfassung sein (typischerweise 150-160 Zeichen), die in Suchergebnissen angezeigt wird.

Regeln:
- Länge: 150-160 Zeichen (optimal für SEO)
- Enthalte Schlüsselinformationen: Stadt, Tourtyp, Hauptattraktionen
- Mache es ansprechend und ermutige zum Klicken
- Verwende natürliche Sprache, vermeide Keyword-Stuffing
- Füge eine Handlungsaufforderung ein, wenn der Platz es erlaubt
- Stil: "smart fun", ansprechend

Gib die Ausgabe genau zurück: <meta>...</meta> – ohne Kommentare.`;

export const PROMPT_META_ES = `Genera una meta descripción para el tour en español. La meta descripción debe ser un resumen conciso (típicamente 150-160 caracteres) que aparece en los resultados de búsqueda.

Reglas:
- Longitud: 150-160 caracteres (óptimo para SEO)
- Incluye información clave: ciudad, tipo de tour, principales atracciones
- Hazlo atractivo y anima a hacer clic
- Usa lenguaje natural, evita el keyword stuffing
- Incluye una llamada a la acción si el espacio lo permite
- Estilo: "smart fun", atractivo

Devuelve exactamente: <meta>...</meta> – sin comentarios.`;


export const DEFAULT_SETTINGS: AppSettings = {
  brandBook: `
    ## Walkative Brand Voice: Smart Fun
    - **Smart**: Accurate, insightful, historically correct. We connect the dots for our guests.
    - **Fun**: Engaging, lively, witty. We are storytellers, not lecturers.
    - **Avoid**: Clichés, marketing fluff, hard CTAs (e.g., "Book now!"), overly academic language.
    - **Tone**: Conversational, friendly, approachable, but always professional.
  `,
  rules: {
    newNameCharMin: 30,
    newNameCharMax: 100,
    titleCharMin: 40,
    titleCharMax: 60,
    h1CharMin: 50,
    h1CharMax: 120,
    metaCharMin: 150,
    metaCharMax: 160,
    shortCharMin: 300,
    shortCharMax: 450,
    longCharMin: 1500,
    longCharMax: 2100,
    highlightsMin: 6,
    highlightsMax: 10,
    highlightLine2Max: 120,
    photoAltMax: 125,
    photoCaptionMax: 250,
  },
  prompts: {
    normalizeEN: PROMPT_EN_NORMALIZE,
    localizePL: PROMPT_LOCALIZE_PL,
    localizeDE: PROMPT_LOCALIZE_DE,
    localizeES: PROMPT_LOCALIZE_ES,
    newNameTitleH1EN: PROMPT_NEW_NAME_TITLE_H1_EN,
    newNameTitleH1PL: PROMPT_NEW_NAME_TITLE_H1_PL,
    newNameTitleH1DE: PROMPT_NEW_NAME_TITLE_H1_DE,
    newNameTitleH1ES: PROMPT_NEW_NAME_TITLE_H1_ES,
    metaEN: PROMPT_META_EN,
    metaPL: PROMPT_META_PL,
    metaDE: PROMPT_META_DE,
    metaES: PROMPT_META_ES,
    photoBase: PROMPT_PHOTO_BASE,
    photoTranslate: PROMPT_PHOTO_TRANSLATE,
    qcEN: PROMPT_QC_EN,
    qcPL: PROMPT_QC_PL,
    qcDE: PROMPT_QC_DE,
    qcES: PROMPT_QC_ES,
  },
  models: {
    text: 'gemini-2.5-pro',
    image: 'gemini-2.5-flash-image',
  },
};