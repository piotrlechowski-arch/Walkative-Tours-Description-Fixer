import { Tour, Photo, TourNameAndStatus, ProcessedTourData, Language } from '../types';

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || `Request failed with status ${response.status}`);
  }
  return response.json();
}

async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  return handleResponse<T>(response);
}

export const apiService = {
  getTours: (): Promise<TourNameAndStatus[]> => {
    return apiFetch<TourNameAndStatus[]>('/api/tours');
  },

  getTourDetails: (name: string): Promise<{ tour: Tour; photos: Photo[] }> => {
    return apiFetch<{ tour: Tour; photos: Photo[] }>(`/api/tours/${encodeURIComponent(name)}`);
  },

  getCanonicalEnData: (name: string): Promise<ProcessedTourData> => {
    return apiFetch<ProcessedTourData>(`/api/tours/${encodeURIComponent(name)}/canonical-en`);
  },

  getLocalizedData: (tourName: string, lang: Language): Promise<ProcessedTourData> => {
    return apiFetch<ProcessedTourData>(`/api/tours/${encodeURIComponent(tourName)}/localized/${lang.toLowerCase()}`);
  },

  acceptChanges: (tourName: string, mode: Language | 'EN', data: ProcessedTourData, renameInDrive: boolean): Promise<void> => {
    return apiFetch<void>(`/api/tours/${encodeURIComponent(tourName)}/accept`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mode, data, renameInDrive }),
    });
  },
  
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