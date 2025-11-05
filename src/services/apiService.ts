

import { Tour, Photo, TourNameAndStatus, ProcessedTourData, Language } from '../types';
import { mockApiService } from './mockApiService';

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
  // Use mockApiService for tour data (hardcoded from Excel)
  getTours: (): Promise<TourNameAndStatus[]> => {
    return mockApiService.getTours();
  },

  getTourDetails: (name: string): Promise<{ tour: Tour; photos: Photo[] }> => {
    return mockApiService.getTourDetails(name);
  },

  getCanonicalEnData: (name: string): Promise<ProcessedTourData> => {
    return mockApiService.getCanonicalEnData(name);
  },

  getLocalizedData: (tourName: string, lang: Language): Promise<ProcessedTourData> => {
    return mockApiService.getLocalizedData(tourName, lang);
  },

  acceptChanges: (tourName: string, mode: Language | 'EN', data: ProcessedTourData, renameInDrive: boolean): Promise<void> => {
    return mockApiService.acceptChanges(tourName, mode, data, renameInDrive);
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