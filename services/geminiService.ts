import { GoogleGenAI, Type } from "@google/genai";
import { Tour, Photo, AppSettings, ProcessedTourData, Language, TourDescription } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

/**
 * A post-processing step to fix validation issues automatically.
 * It takes the generated text and a specific QC system prompt.
 * Uses a fast model for efficiency.
 */
async function runQuickFix(text: string, qcSystemPrompt: string): Promise<string> {
  const textModel = 'gemini-2.5-flash';
  const result = await ai.models.generateContent({
      model: textModel,
      contents: text,
      config: { systemInstruction: qcSystemPrompt }
  });
  return result.text;
}

function parseDescriptionResponse(text: string): TourDescription {
  const shortMatch = text.match(/<short>([\s\S]*?)<\/short>/);
  const longMatch = text.match(/<long>([\s\S]*?)<\/long>/);
  const highlightsMatch = text.match(/<highlights>([\s\S]*?)<\/highlights>/);

  return {
    short: shortMatch ? shortMatch[1].trim() : `Error: could not parse short description from:\n${text}`,
    long: longMatch ? longMatch[1].trim() : `Error: could not parse long description from:\n${text}`,
    highlights: highlightsMatch ? highlightsMatch[1].trim() : `Error: could not parse highlights from:\n${text}`,
  };
}

/**
 * Robustly parses a JSON array from the AI's response string.
 * It cleans markdown, finds the array content, and parses it.
 */
function parsePhotoMetadataResponse(text: string): any[] {
  // 1. Clean up markdown and trim whitespace
  let cleanedText = text.replace(/```json\n?|\n?```/g, '').trim();

  // 2. Find the start and end of the array
  const startIndex = cleanedText.indexOf('[');
  const endIndex = cleanedText.lastIndexOf(']');

  // If no array found, throw a clear error
  if (startIndex === -1 || endIndex === -1) {
    throw new Error(`Could not find a JSON array in the response. Response text: "${cleanedText}"`);
  }

  // 3. Extract the JSON array string
  const jsonString = cleanedText.substring(startIndex, endIndex + 1);

  // 4. Parse the extracted string
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Error parsing extracted JSON:", error);
    throw new Error(`Failed to parse photo metadata JSON. Extracted text: "${jsonString}"`);
  }
}

const urlToGenerativePart = async (url: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        const base64Data = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                 if (typeof reader.result !== 'string') {
                    return reject(new Error("Failed to read blob as string."));
                 }
                 resolve(reader.result.split(',')[1]);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
        return {
            inlineData: {
                data: base64Data,
                mimeType: blob.type || 'image/jpeg',
            },
        };
    } catch (e) {
        console.error(`Could not fetch image from ${url}. Error:`, e);
        // Return a placeholder part if fetch fails
        return {
            inlineData: {
                data: '',
                mimeType: 'image/jpeg',
            },
        };
    }
};

export const geminiService = {
  normalizeAndAnalyze: async (
    tour: Tour,
    photos: Photo[],
    settings: AppSettings,
    feedback: string
  ): Promise<ProcessedTourData> => {
    // 1. Normalize Description
    const textModel = settings.models.text;
    const feedbackTag = feedback ? `<feedback>${feedback}</feedback>\n` : '';
    const descriptionUserInput = `
      ${feedbackTag}<city>${tour.city}</city>
      <name>${tour.name}</name>
      <short>${tour.short}</short>
      <long>${tour.long}</long>
      <highlights>
Title: ${tour.highlightsTitle}
Description: ${tour.highlightsDescription}
</highlights>
    `;
    
    const descriptionResult = await ai.models.generateContent({
        model: textModel,
        contents: descriptionUserInput,
        config: {
            systemInstruction: settings.prompts.normalizeEN,
        }
    });

    // 2. Run QC step to fix potential validation issues
    const initialDescriptionText = descriptionResult.text;
    const fixedDescriptionText = await runQuickFix(initialDescriptionText, settings.prompts.qcEN);
    const description = parseDescriptionResponse(fixedDescriptionText);

    // 3. Analyze Photos using the newly normalized description as context
    const imageModel = settings.models.image;
    const photoParts = await Promise.all(photos.map(p => urlToGenerativePart(p.url)));
    
    const photoPromptText = `
<city>${tour.city}</city>
<name>${tour.name}</name>
<en_short>${description.short}</en_short>
<en_long>${description.long}</en_long>
<en_highlights>${description.highlights}</en_highlights>
<photo_ids>${photos.map(p => p.id).join(', ')}</photo_ids>
`;
    
    const allParts = [{ text: photoPromptText }, ...photoParts];

    const photoResult = await ai.models.generateContent({
        model: imageModel,
        contents: { parts: allParts },
        config: {
            systemInstruction: settings.prompts.photoBase.replace('{{LANG}}', 'EN'),
        }
    });
    
    const photoMetadata = parsePhotoMetadataResponse(photoResult.text);
    return { description, photos: photoMetadata };
  },

  localizeAndAnalyze: async (
    tour: Tour,
    enTour: TourDescription,
    photos: Photo[],
    lang: Language,
    feedback: string,
    settings: AppSettings
  ): Promise<ProcessedTourData> => {
    // 1. Localize Description
    const textModel = settings.models.text;
    const promptKey = `localize${lang}` as keyof typeof settings.prompts;
    const systemInstruction = settings.prompts[promptKey];
    
    const localizationUserInput = `
<feedback>${feedback || 'Brak'}</feedback>
<city>${tour.city}</city>
<name>${tour.name}</name>
<short>${enTour.short}</short>
<long>${enTour.long}</long>
<highlights>${enTour.highlights}</highlights>
    `;

    const descriptionResult = await ai.models.generateContent({
        model: textModel,
        contents: localizationUserInput,
        config: { systemInstruction }
    });
    
    // 2. Run QC step for the specific language
    const initialDescriptionText = descriptionResult.text;
    const qcPromptKey = `qc${lang}` as keyof AppSettings['prompts'];
    const qcSystemPrompt = settings.prompts[qcPromptKey];
    const fixedDescriptionText = await runQuickFix(initialDescriptionText, qcSystemPrompt);
    const description = parseDescriptionResponse(fixedDescriptionText);

    // 3. Analyze Photos for the target language
    const imageModel = settings.models.image;
    const photoParts = await Promise.all(photos.map(p => urlToGenerativePart(p.url)));
    
    const photoPromptText = `
<city>${tour.city}</city>
<name>${tour.name}</name>
<en_short>${enTour.short}</en_short>
<en_long>${enTour.long}</en_long>
<en_highlights>${enTour.highlights}</en_highlights>
<photo_ids>${photos.map(p => p.id).join(', ')}</photo_ids>
`;
    
    const allParts = [{ text: photoPromptText }, ...photoParts];

    const photoResult = await ai.models.generateContent({
        model: imageModel,
        contents: { parts: allParts },
        config: {
            systemInstruction: settings.prompts.photoBase.replace('{{LANG}}', lang),
        }
    });

    const photoMetadata = parsePhotoMetadataResponse(photoResult.text);

    return { description, photos: photoMetadata };
  },

  // FIX: Added missing 'analyzeUploadedPhoto' method, which is called by the PhotoAnalyzerView component.
  analyzeUploadedPhoto: async (
    base64Data: string,
    mimeType: string,
    prompt: string,
    settings: AppSettings
  ): Promise<string> => {
    const imageModel = settings.models.image;
    
    const imagePart = {
      inlineData: {
        data: base64Data,
        mimeType: mimeType,
      },
    };
    
    const textPart = {
      text: prompt,
    };

    const response = await ai.models.generateContent({
      model: imageModel,
      contents: { parts: [imagePart, textPart] },
    });

    return response.text;
  },
  
  quickEditText: async (text: string, instruction: string): Promise<string> => {
    const textModel = 'gemini-2.5-flash';

    const systemInstruction = `You are a writing assistant. Modify the given text based on the user's instruction. Respond only with the modified text, without any preamble, explanation, or markdown formatting.
Instruction: ${instruction}.`;
    
    const response = await ai.models.generateContent({
        model: textModel,
        contents: text,
        config: { systemInstruction }
    });
    
    return response.text.trim();
  },
};