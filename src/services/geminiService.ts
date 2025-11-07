
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
  const newNameMatch = text.match(/<newName>([\s\S]*?)<\/newName>/);
  const titleMatch = text.match(/<title>([\s\S]*?)<\/title>/);
  const h1Match = text.match(/<h1>([\s\S]*?)<\/h1>/);
  const metaMatch = text.match(/<meta>([\s\S]*?)<\/meta>/);
  const shortMatch = text.match(/<short>([\s\S]*?)<\/short>/);
  const longMatch = text.match(/<long>([\s\S]*?)<\/long>/);
  const highlightsMatch = text.match(/<highlights>([\s\S]*?)<\/highlights>/);

  return {
    newName: newNameMatch ? newNameMatch[1].trim() : '',
    title: titleMatch ? titleMatch[1].trim() : '',
    h1: h1Match ? h1Match[1].trim() : '',
    meta: metaMatch ? metaMatch[1].trim() : '',
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
        // Extract fileId from Google Drive URL (supports multiple formats)
        // Format 1: https://drive.google.com/thumbnail?id=FILE_ID&sz=w400
        // Format 2: https://drive.google.com/file/d/FILE_ID/view?usp=drivesdk
        // Format 3: https://drive.google.com/uc?id=FILE_ID
        let fileId: string | null = null;
        const thumbnailMatch = url.match(/[?&]id=([^&]+)/);
        const fileMatch = url.match(/\/d\/([^\/]+)/);
        const ucMatch = url.match(/\/uc\?id=([^&]+)/);
        
        if (thumbnailMatch) {
            fileId = thumbnailMatch[1];
        } else if (fileMatch) {
            fileId = fileMatch[1];
        } else if (ucMatch) {
            fileId = ucMatch[1];
        }
        
        if (fileId) {
            // Use backend endpoint to fetch image with proper authentication
            const response = await fetch(`/api/image/${fileId}`);
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
                throw new Error(`Backend error: ${errorData.error || response.statusText}`);
            }
            const { data, mimeType } = await response.json();
            return { inlineData: { data, mimeType: mimeType || 'image/jpeg' } };
        } else {
            // Fallback: try direct fetch for non-Google Drive URLs
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
        }
    } catch (e) {
        console.error(`Could not fetch image from ${url}. Error:`, e);
        throw new Error(`Failed to load image: ${e instanceof Error ? e.message : String(e)}`);
    }
};

export const geminiService = {
  // NEW: Generate only description (no photos) for EN normalization
  normalizeDescriptionOnly: async (
    tour: Tour,
    settings: AppSettings,
    feedback: string
  ): Promise<TourDescription> => {
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
    
    console.log('=== GENERATING DESCRIPTION ===');
    console.log('Using prompt (normalizeEN):', settings.prompts.normalizeEN.substring(0, 100) + '...');
    console.log('Using model:', settings.models.text);
    
    const descriptionResult = await apiService.generate({
        model: settings.models.text,
        contents: descriptionUserInput,
        config: { systemInstruction: settings.prompts.normalizeEN }
    });

    const fixedDescriptionText = await runQuickFix(descriptionResult.text, settings.prompts.qcEN);
    const description = parseDescriptionResponse(fixedDescriptionText);
    
    // Generate SEO fields (New Name, Title, H1)
    const seoUserInput = `
      <city>${tour.city}</city>
      <name>${tour.name}</name>
      <short>${description.short}</short>
      <long>${description.long}</long>
      <highlights>${description.highlights}</highlights>
    `;
    
    console.log('Using prompt (newNameTitleH1EN):', settings.prompts.newNameTitleH1EN.substring(0, 100) + '...');
    const seoResult = await apiService.generate({
        model: settings.models.text,
        contents: seoUserInput,
        config: { systemInstruction: settings.prompts.newNameTitleH1EN }
    });
    
    const seoFields = parseDescriptionResponse(seoResult.text);
    
    // Generate Meta description
    const metaUserInput = `
      <city>${tour.city}</city>
      <name>${tour.name}</name>
      <short>${description.short}</short>
      <long>${description.long}</long>
      <highlights>${description.highlights}</highlights>
    `;
    
    console.log('Using prompt (metaEN):', settings.prompts.metaEN.substring(0, 100) + '...');
    const metaResult = await apiService.generate({
        model: settings.models.text,
        contents: metaUserInput,
        config: { systemInstruction: settings.prompts.metaEN }
    });
    
    const metaFields = parseDescriptionResponse(metaResult.text);
    
    return {
      ...description,
      newName: seoFields.newName || '',
      title: seoFields.title || '',
      h1: seoFields.h1 || '',
      meta: metaFields.meta || '',
    };
  },

  // NEW: Generate only photo metadata for EN (requires description)
  analyzePhotosOnly: async (
    tour: Tour,
    description: TourDescription,
    photos: Photo[],
    settings: AppSettings
  ): Promise<any[]> => {
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

      const photoPrompt = settings.prompts.photoBase.replace('{{LANG}}', 'EN');
      console.log('Using prompt (photoBase for EN):', photoPrompt.substring(0, 100) + '...');
      console.log('Using model (image):', settings.models.image);
      
      const photoResult = await apiService.generate({
          model: settings.models.image,
          contents: { parts: allParts },
          config: { systemInstruction: photoPrompt }
      });
      
      const batchMetadata = parsePhotoMetadataResponse(photoResult.text);
      photoMetadata.push(...batchMetadata);
    }
    
    return photoMetadata;
  },

  // Existing method - now uses the separate functions
  normalizeAndAnalyze: async (
    tour: Tour,
    photos: Photo[],
    settings: AppSettings,
    feedback: string
  ): Promise<ProcessedTourData> => {
    const description = await geminiService.normalizeDescriptionOnly(tour, settings, feedback);
    const photoMetadata = await geminiService.analyzePhotosOnly(tour, description, photos, settings);
    
    return { description, photos: photoMetadata };
  },

  // NEW: Generate only localized description (no photos)
  localizeDescriptionOnly: async (
    tour: Tour,
    enTour: TourDescription,
    lang: Language,
    feedback: string,
    settings: AppSettings
  ): Promise<TourDescription> => {
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
    
    // Generate SEO fields (New Name, Title, H1) for localized version
    const seoUserInput = `
      <city>${tour.city}</city>
      <name>${tour.name}</name>
      <en_newName>${enTour.newName}</en_newName>
      <en_title>${enTour.title}</en_title>
      <en_h1>${enTour.h1}</en_h1>
      <short>${description.short}</short>
      <long>${description.long}</long>
      <highlights>${description.highlights}</highlights>
    `;
    
    const seoPrompt = settings.prompts[`newNameTitleH1${lang}` as keyof AppSettings['prompts']];
    const seoResult = await apiService.generate({
        model: settings.models.text,
        contents: seoUserInput,
        config: { systemInstruction: seoPrompt }
    });
    
    const seoFields = parseDescriptionResponse(seoResult.text);
    
    // Generate Meta description for localized version
    const metaUserInput = `
      <city>${tour.city}</city>
      <name>${tour.name}</name>
      <en_meta>${enTour.meta}</en_meta>
      <short>${description.short}</short>
      <long>${description.long}</long>
      <highlights>${description.highlights}</highlights>
    `;
    
    const metaPrompt = settings.prompts[`meta${lang}` as keyof AppSettings['prompts']];
    const metaResult = await apiService.generate({
        model: settings.models.text,
        contents: metaUserInput,
        config: { systemInstruction: metaPrompt }
    });
    
    const metaFields = parseDescriptionResponse(metaResult.text);
    
    return {
      ...description,
      newName: seoFields.newName || '',
      title: seoFields.title || '',
      h1: seoFields.h1 || '',
      meta: metaFields.meta || '',
    };
  },

  // NEW: Translate photo metadata from EN to target language (does NOT analyze images)
  translatePhotosOnly: async (
    enPhotos: (PhotoMetadata & { id: string })[],
    lang: Language,
    settings: AppSettings
  ): Promise<any[]> => {
    if (!enPhotos || enPhotos.length === 0) {
      return [];
    }

    // Prepare input with EN metadata for translation
    const photosInput = enPhotos.map(p => ({
      id: p.id,
      newName: p.newName,
      caption: p.caption,
      alt: p.alt,
      description: p.description || ''
    }));

    const translationInput = `
Przetłumacz poniższe metadane zdjęć z angielskiego na język ${lang}.
Ważne: Zachowaj newName bez zmian - każdy plik ma tylko jedną nazwę.

Angielskie metadane:
${JSON.stringify(photosInput, null, 2)}
`;

    const translationResult = await apiService.generate({
      model: settings.models.text,
      contents: translationInput,
      config: { systemInstruction: settings.prompts.photoTranslate.replace('{{LANG}}', lang) }
    });

    const translatedMetadata = parsePhotoMetadataResponse(translationResult.text);
    
    // Ensure all IDs match and newName is preserved from EN
    return translatedMetadata.map((translated: any) => {
      const enPhoto = enPhotos.find(p => p.id === translated.id);
      if (!enPhoto) {
        throw new Error(`Photo ID ${translated.id} not found in EN photos`);
      }
      // Always preserve newName from EN version
      return {
        ...translated,
        newName: enPhoto.newName, // Force same name as EN
        description: lang === 'EN' ? (translated.description || enPhoto.description || '') : '' // Only EN has description
      };
    });
  },

  // DEPRECATED: This function analyzes photos from scratch (use translatePhotosOnly for localization instead)
  analyzeLocalizedPhotosOnly: async (
    tour: Tour,
    enTour: TourDescription,
    photos: Photo[],
    lang: Language,
    settings: AppSettings
  ): Promise<any[]> => {
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

    return photoMetadata;
  },

  // Existing method - now uses the separate functions
  // For localization: translates description and photo metadata (does NOT re-analyze photos)
  localizeAndAnalyze: async (
    tour: Tour,
    enTour: TourDescription,
    enPhotos: (PhotoMetadata & { id: string })[],
    lang: Language,
    feedback: string,
    settings: AppSettings
  ): Promise<ProcessedTourData> => {
    // Generate localized description
    const description = await geminiService.localizeDescriptionOnly(tour, enTour, lang, feedback, settings);
    
    // Translate existing EN photo metadata (does NOT analyze images)
    const photoMetadata = await geminiService.translatePhotosOnly(enPhotos, lang, settings);
    
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