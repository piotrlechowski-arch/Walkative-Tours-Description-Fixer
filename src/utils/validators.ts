// FIX: Import `ProcessedTourData` type to fix a 'Cannot find name' error.
import { ValidationResult, ValidationRules, TourDescription, PhotoMetadata, ProcessedTourData } from '../types';

const countWords = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

const countParagraphs = (text: string) => text.split(/\n\s*\n/).filter(p => p.trim() !== '').length;

const parseHighlights = (text: string) => {
    const lines = text.trim().split('\n').filter(line => line.trim() !== '');
    const items = [];
    for (let i = 0; i < lines.length; i += 2) {
        if (lines[i+1]) {
            items.push({ title: lines[i], description: lines[i+1] });
        }
    }
    return items;
};

export const validateShort = (text: string, rules: ValidationRules): ValidationResult => {
    const charCount = text.length;
    if (charCount < rules.shortCharMin || charCount > rules.shortCharMax) {
        return { isValid: false, message: `Nieprawidłowa długość (${charCount} znaków). Wymagane: ${rules.shortCharMin}-${rules.shortCharMax}.` };
    }
    return { isValid: true, message: `OK (${charCount} znaków)` };
};

export const validateLong = (text: string, rules: ValidationRules): ValidationResult => {
    const charCount = text.length;
    if (charCount < rules.longCharMin || charCount > rules.longCharMax) {
        return { isValid: false, message: `Nieprawidłowa liczba znaków (${charCount}). Wymagane: ${rules.longCharMin}-${rules.longCharMax}.` };
    }
    return { isValid: true, message: `OK (${charCount} znaków)` };
};

export const validateNewName = (text: string, rules: ValidationRules): ValidationResult => {
    const charCount = text.length;
    if (charCount < rules.newNameCharMin || charCount > rules.newNameCharMax) {
        return { isValid: false, message: `Nieprawidłowa długość (${charCount} znaków). Wymagane: ${rules.newNameCharMin}-${rules.newNameCharMax}.` };
    }
    return { isValid: true, message: `OK (${charCount} znaków)` };
};

export const validateTitle = (text: string, rules: ValidationRules): ValidationResult => {
    const charCount = text.length;
    if (charCount < rules.titleCharMin || charCount > rules.titleCharMax) {
        return { isValid: false, message: `Nieprawidłowa długość (${charCount} znaków). Wymagane: ${rules.titleCharMin}-${rules.titleCharMax}.` };
    }
    return { isValid: true, message: `OK (${charCount} znaków)` };
};

export const validateH1 = (text: string, rules: ValidationRules): ValidationResult => {
    const charCount = text.length;
    if (charCount < rules.h1CharMin || charCount > rules.h1CharMax) {
        return { isValid: false, message: `Nieprawidłowa długość (${charCount} znaków). Wymagane: ${rules.h1CharMin}-${rules.h1CharMax}.` };
    }
    return { isValid: true, message: `OK (${charCount} znaków)` };
};

export const validateMeta = (text: string, rules: ValidationRules): ValidationResult => {
    const charCount = text.length;
    if (charCount < rules.metaCharMin || charCount > rules.metaCharMax) {
        return { isValid: false, message: `Nieprawidłowa długość (${charCount} znaków). Wymagane: ${rules.metaCharMin}-${rules.metaCharMax}.` };
    }
    return { isValid: true, message: `OK (${charCount} znaków)` };
};

export const validateHighlights = (text: string, rules: ValidationRules): ValidationResult => {
    const items = parseHighlights(text);
    if (items.length < rules.highlightsMin || items.length > rules.highlightsMax) {
        return { isValid: false, message: `Nieprawidłowa liczba punktów (${items.length}). Wymagane: ${rules.highlightsMin}-${rules.highlightsMax}.` };
    }
    const longDescriptions = items.filter(item => item.description.length > rules.highlightLine2Max);
    if (longDescriptions.length > 0) {
        return { isValid: false, message: `${longDescriptions.length} opis(ów) punktów jest za długich (max ${rules.highlightLine2Max} znaków).` };
    }
    return { isValid: true, message: `OK (${items.length} punktów)` };
};

export const validatePhotoAlt = (text: string, rules: ValidationRules): ValidationResult => {
    const charCount = text.length;
    if (charCount > rules.photoAltMax) {
        return { isValid: false, message: `Za długi (${charCount} znaków). Max: ${rules.photoAltMax}.` };
    }
    if (charCount === 0) {
        return { isValid: false, message: `Wymagane.` };
    }
    return { isValid: true, message: `OK (${charCount} znaków)` };
};

export const validateAll = (
    data: ProcessedTourData,
    rules: ValidationRules
): { [key: string]: ValidationResult } => {
    const results: { [key: string]: ValidationResult } = {};
    if (data.description.newName) {
        results.newName = validateNewName(data.description.newName, rules);
    }
    if (data.description.title) {
        results.title = validateTitle(data.description.title, rules);
    }
    if (data.description.h1) {
        results.h1 = validateH1(data.description.h1, rules);
    }
    if (data.description.meta) {
        results.meta = validateMeta(data.description.meta, rules);
    }
    results.short = validateShort(data.description.short, rules);
    results.long = validateLong(data.description.long, rules);
    results.highlights = validateHighlights(data.description.highlights, rules);
    data.photos.forEach(photo => {
        results[`photo_alt_${photo.id}`] = validatePhotoAlt(photo.alt, rules);
    });
    return results;
};