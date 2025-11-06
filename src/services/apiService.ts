

import { Tour, Photo, TourNameAndStatus, ProcessedTourData, Language } from '../types';

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let message = `Request failed with status ${response.status}`;
    try {
      const errorData = await response.json();
      message = errorData.error || message;
    } catch {
      // ignore JSON parsing errors
    }
    throw new Error(message);
  }
  return response.json();
}

export const apiService = {
  // Restore Google Sheets API integration
  getTours: async (): Promise<TourNameAndStatus[]> => {
    const response = await fetch('/api/tours');
    return handleResponse(response);
  },

  getTourDetails: async (name: string): Promise<{ tour: Tour; photos: Photo[] }> => {
    const response = await fetch(`/api/tours/${encodeURIComponent(name)}`);
    return handleResponse(response);
  },

  getCanonicalEnData: async (name: string): Promise<ProcessedTourData> => {
    const response = await fetch(`/api/tours/${encodeURIComponent(name)}/canonical-en`);
    return handleResponse(response);
  },

  getLocalizedData: async (tourName: string, lang: Language): Promise<ProcessedTourData> => {
    const response = await fetch(`/api/tours/${encodeURIComponent(tourName)}/localized/${lang.toLowerCase()}`);
    return handleResponse(response);
  },

  acceptChanges: async (tourName: string, mode: Language | 'EN', data: ProcessedTourData, renameInDrive: boolean): Promise<void> => {
    const response = await fetch(`/api/tours/${encodeURIComponent(tourName)}/accept`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mode, data, renameInDrive }),
    });
    return handleResponse(response);
  },
  
  // Keep Gemini API calls going through the backend
  generate: async (body: object): Promise<any> => {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return handleResponse(response);
  },
};