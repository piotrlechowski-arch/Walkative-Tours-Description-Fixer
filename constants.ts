
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

Dla każdego zdjęcia zwróć obiekt:
- newName – docelowa nazwa pliku (kebab-case, ascii, bez znaków PL/DE/ES), format: {{city}}-{{główne_miejsce}}-{{kontekst}}-{{unikalny-sufiks}}.webp.
- caption – 1–2 zdania, żywe i rzeczowe, naturalne dla {{LANG}}; unikać klisz i wykrzykników.
- alt – ≤125 znaków, opisowe i unikalne, zawiera kluczowy obiekt i miejsce.
- description – (tylko dla EN; w innych językach puste lub pomiń).

Zasady:
- Nie zmieniaj nazw własnych; używaj tych z kontekstu (dzielnice, katedry, place).
- Nie zgaduj na siłę – jeśli niepewność, opisz neutralnie („widok na…”, „fragment…”).
- Zachowaj spójność z kanonicznym EN (brzmienie nazw, kolejność skojarzeń).
- Wyjście JSON array: [ { "id": "photoId", "newName": "...", "caption": "...", "alt": "...", "description": "..." }, … ] – gdzie id = Photo ID z arkusza.`;


export const DEFAULT_SETTINGS: AppSettings = {
  brandBook: `
    ## Walkative Brand Voice: Smart Fun
    - **Smart**: Accurate, insightful, historically correct. We connect the dots for our guests.
    - **Fun**: Engaging, lively, witty. We are storytellers, not lecturers.
    - **Avoid**: Clichés, marketing fluff, hard CTAs (e.g., "Book now!"), overly academic language.
    - **Tone**: Conversational, friendly, approachable, but always professional.
  `,
  rules: {
    shortCharMin: 300,
    shortCharMax: 450,
    longParagraphs: 6,
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
    photoBase: PROMPT_PHOTO_BASE,
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
