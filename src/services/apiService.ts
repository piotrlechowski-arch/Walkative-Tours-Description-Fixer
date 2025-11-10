

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

  createTour: async (tourData: {
    city: string;
    name: string;
    short?: string;
    long?: string;
    highlightsTitle?: string;
    highlightsDescription?: string;
    photoIds?: string[];
  }): Promise<void> => {
    const response = await fetch('/api/tours', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tourData),
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

  uploadPhoto: async (file: File, city: string, country: string = ''): Promise<{
    photoId: string;
    url: string;
    driveFileId: string;
  }> => {
    const formData = new FormData();
    formData.append('photo', file);
    formData.append('city', city);
    formData.append('country', country);

    const response = await fetch('/api/upload-photo', {
      method: 'POST',
      body: formData,
    });
    return handleResponse(response);
  },

  uploadAndAnalyzePhoto: async (
    tourName: string,
    photoId: string,
    photoUrl: string,
    city: string
  ): Promise<void> => {
    const response = await fetch(`/api/tours/${encodeURIComponent(tourName)}/upload-photo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ photoId, photoUrl, city }),
    });
    return handleResponse(response);
  },

  // OAuth 2.0 Google Drive authorization
  authorizeGoogleDrive: async (): Promise<void> => {
    // Redirect to OAuth endpoint
    window.location.href = '/api/auth/google';
  },

  getGoogleDriveAuthStatus: async (): Promise<{ authorized: boolean; message: string }> => {
    const response = await fetch('/api/auth/google/status');
    return handleResponse(response);
  },

  // Prompts API
  getPrompts: async (): Promise<{ prompts: Record<string, string>; rules: Partial<Record<keyof import('../types').ValidationRules, number>> }> => {
    const response = await fetch('/api/prompts');
    return handleResponse(response);
  },

  updatePrompt: async (promptId: string, promptText: string): Promise<{ success: boolean }> => {
    const response = await fetch(`/api/prompts/${encodeURIComponent(promptId)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: promptText }),
    });
    return handleResponse(response);
  },

  updateCharLimit: async (limitId: string, value: number): Promise<{ success: boolean }> => {
    const response = await fetch(`/api/prompts/char-limits/${encodeURIComponent(limitId)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value }),
    });
    return handleResponse(response);
  },

  initializePromptsSheet: async (constantsData: any): Promise<{ success: boolean; count: number }> => {
    const response = await fetch('/api/prompts/initialize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ constantsData }),
    });
    return handleResponse(response);
  },
};