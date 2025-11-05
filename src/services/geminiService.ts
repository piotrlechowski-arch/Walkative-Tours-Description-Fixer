
import { Tour, Photo, AppSettings, ProcessedTourData, Language, TourDescription } from '../types';
import { apiService } from './apiService';


/**
 * A post-processing step to fix validation issues automatically.
 * It takes the generated text and a specific QC system prompt.
 * Uses a fast model for efficiency.
 */
async function runQuickFix(text: string, qcSystemPrompt: string): Promise<string> {
  const response = await apiService.generate({
      model: 'gemini-2.5-flash',
      contents: text,
      config: { systemInstruction: qcSystemPrompt }
  });
  return response.text;
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
  let cleanedText = text.replace(/```json\n?|\n?```/g, '').trim();
  const startIndex = cleanedText.indexOf('[');
  const endIndex = cleanedText.lastIndexOf(']');
  if (startIndex === -1 || endIndex === -1) {
    throw new Error(`Could not find a JSON array in the response. Response text: "${cleanedText}"`);
  }
  const jsonString = cleanedText.substring(startIndex, endIndex + 1);
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
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const blob = await response.blob();
        const base64Data = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                 if (typeof reader.result !== 'string') return reject(new Error("Failed to read blob as string."));
                 resolve(reader.result.split(',')[1]);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
        return { inlineData: { data: base64Data, mimeType: blob.type || 'image/jpeg' } };
    } catch (e) {
        console.error(`Could not fetch image from ${url}. Error:`, e);
        return { inlineData: { data: '', mimeType: 'image/jpeg' } };
    }
};

export const geminiService = {
  normalizeAndAnalyze: async (
    tour: Tour,
    photos: Photo[],
    settings: AppSettings,
    feedback: string
  ): Promise<ProcessedTourData> => {
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
    
    const descriptionResult = await apiService.generate({
        model: settings.models.text,
        contents: descriptionUserInput,
        config: { systemInstruction: settings.prompts.normalizeEN }
    });

    const fixedDescriptionText = await runQuickFix(descriptionResult.text, settings.prompts.qcEN);
    const description = parseDescriptionResponse(fixedDescriptionText);

    // Process photos one by one to avoid token limit
    const BATCH_SIZE = 1;
    const photoMetadata: any[] = [];
    
    for (let i = 0; i < photos.length; i += BATCH_SIZE) {
      const batch = photos.slice(i, i + BATCH_SIZE);
      const photoParts = await Promise.all(batch.map(p => urlToGenerativePart(p.url)));
      // Use only short description and highlights summary for photo analysis to save tokens
      // Remove HTML tags from long description if present and take first 500 chars
      const longSummary = description.long
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .substring(0, 500) // Take first 500 characters
        .trim();
      const photoPromptText = `
<city>${tour.city}</city>
<name>${tour.name}</name>
<en_short>${description.short}</en_short>
<en_long_summary>${longSummary}</en_long_summary>
<en_highlights>${description.highlights}</en_highlights>
<photo_ids>${batch.map(p => p.id).join(', ')}</photo_ids>
`;
      
      const allParts = [{ text: photoPromptText }, ...photoParts];

      const photoResult = await apiService.generate({
          model: settings.models.image,
          contents: { parts: allParts },
          config: { systemInstruction: settings.prompts.photoBase.replace('{{LANG}}', 'EN') }
      });
      
      const batchMetadata = parsePhotoMetadataResponse(photoResult.text);
      photoMetadata.push(...batchMetadata);
    }
    
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
    const systemInstruction = settings.prompts[`localize${lang}` as keyof typeof settings.prompts];
    const localizationUserInput = `
<feedback>${feedback || 'Brak'}</feedback>
<city>${tour.city}</city>
<name>${tour.name}</name>
<short>${enTour.short}</short>
<long>${enTour.long}</long>
<highlights>${enTour.highlights}</highlights>
    `;

    const descriptionResult = await apiService.generate({
        model: settings.models.text,
        contents: localizationUserInput,
        config: { systemInstruction }
    });
    
    const qcSystemPrompt = settings.prompts[`qc${lang}` as keyof AppSettings['prompts']];
    const fixedDescriptionText = await runQuickFix(descriptionResult.text, qcSystemPrompt);
    const description = parseDescriptionResponse(fixedDescriptionText);

    // Process photos one by one to avoid token limit
    const BATCH_SIZE = 1;
    const photoMetadata: any[] = [];
    
    for (let i = 0; i < photos.length; i += BATCH_SIZE) {
      const batch = photos.slice(i, i + BATCH_SIZE);
      const photoParts = await Promise.all(batch.map(p => urlToGenerativePart(p.url)));
      // Use only short description and highlights summary for photo analysis to save tokens
      // Remove HTML tags from long description if present and take first 500 chars
      const longSummary = enTour.long
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .substring(0, 500) // Take first 500 characters
        .trim();
      const photoPromptText = `
<city>${tour.city}</city>
<name>${tour.name}</name>
<en_short>${enTour.short}</en_short>
<en_long_summary>${longSummary}</en_long_summary>
<en_highlights>${enTour.highlights}</en_highlights>
<photo_ids>${batch.map(p => p.id).join(', ')}</photo_ids>
`;
      
      const allParts = [{ text: photoPromptText }, ...photoParts];

      const photoResult = await apiService.generate({
          model: settings.models.image,
          contents: { parts: allParts },
          config: { systemInstruction: settings.prompts.photoBase.replace('{{LANG}}', lang) }
      });

      const batchMetadata = parsePhotoMetadataResponse(photoResult.text);
      photoMetadata.push(...batchMetadata);
    }

    return { description, photos: photoMetadata };
  },
  
  analyzeUploadedPhoto: async (
    base64Data: string,
    mimeType: string,
    prompt: string,
    settings: AppSettings
  ): Promise<string> => {
    const imagePart = { inlineData: { data: base64Data, mimeType: mimeType } };
    const textPart = { text: prompt };
    
    const response = await apiService.generate({
      model: settings.models.image,
      contents: { parts: [imagePart, textPart] },
    });
    return response.text;
  },
  
  quickEditText: async (text: string, instruction: string): Promise<string> => {
    const systemInstruction = `You are a writing assistant. Modify the given text based on the user's instruction. Respond only with the modified text, without any preamble, explanation, or markdown formatting.
Instruction: ${instruction}.`;
    
    const response = await apiService.generate({
        model: 'gemini-2.5-flash',
        contents: text,
        config: { systemInstruction }
    });
    
    return response.text.trim();
  },
};