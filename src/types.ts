export type Language = 'PL' | 'DE' | 'ES';
export type View = 'editor' | 'settings' | 'analyzer';
export type Mode = 'EN' | Language | 'CANONICAL_EN';

export interface TourDescription {
  short: string;
  long: string;
  highlights: string;
}

export interface Tour {
  city: string;
  name: string;
  short: string;
  long: string;
  highlightsTitle: string;
  highlightsDescription: string;
  photoIds: string[];
}

export interface Photo {
  id: string;
  url: string;
  name: string;
  city: string;
  country: string;
  metadata: {
    [key in Language | 'EN']?: PhotoMetadata;
  };
}

export interface PhotoMetadata {
  newName: string;
  caption: string;
  alt: string;
  description?: string; // Only for EN
}

export interface ProcessedTourData {
  description: TourDescription;
  photos: (PhotoMetadata & { id: string })[];
}

export interface TourStatus {
  enDesc: boolean;
  photosEn: boolean;
  plDesc: boolean;
  photosPl: boolean;
  deDesc: boolean;
  photosDe: boolean;
  esDesc: boolean;
  photosEs: boolean;
}

export interface TourNameAndStatus {
  name: string;
  statuses: TourStatus;
}

export interface ValidationResult {
  isValid: boolean;
  message: string;
}

export interface ValidationRules {
    shortCharMin: number;
    shortCharMax: number;
    longParagraphs: number;

    longCharMin: number;
    longCharMax: number;
    highlightsMin: number;
    highlightsMax: number;
    highlightLine2Max: number;
    photoAltMax: number;
    photoCaptionMax: number;
}

export interface AppSettings {
  brandBook: string;
  rules: ValidationRules;
  prompts: {
    normalizeEN: string;
    localizePL: string;
    localizeDE: string;
    localizeES: string;
    photoBase: string;
    photoTranslate: string;
    qcEN: string;
    qcPL: string;
    qcDE: string;
    qcES: string;
  };
  models: {
    text: string;
    image: string;
  };
}