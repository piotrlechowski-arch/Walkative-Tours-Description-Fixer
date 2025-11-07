export type Language = 'PL' | 'DE' | 'ES';
export type View = 'editor' | 'settings' | 'addTour';
export type Mode = 'EN' | Language | 'CANONICAL_EN';

export interface TourDescription {
  newName: string;
  title: string;
  h1: string;
  meta: string;
  short: string;
  long: string;
  highlights: string;
}

export interface Tour {
  city: string;
  name: string;
  title?: string;
  h1?: string;
  meta?: string;
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
    newNameCharMin: number;
    newNameCharMax: number;
    titleCharMin: number;
    titleCharMax: number;
    h1CharMin: number;
    h1CharMax: number;
    metaCharMin: number;
    metaCharMax: number;
    shortCharMin: number;
    shortCharMax: number;
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
    newNameTitleH1EN: string;
    newNameTitleH1PL: string;
    newNameTitleH1DE: string;
    newNameTitleH1ES: string;
    metaEN: string;
    metaPL: string;
    metaDE: string;
    metaES: string;
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