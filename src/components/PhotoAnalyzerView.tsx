import React, { useState } from 'react';
import { AppSettings } from '../types';
import { geminiService } from '../services/geminiService';
import { LoadingSpinner } from './LoadingSpinner';

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // remove 'data:mime/type;base64,' part
      resolve(result.split(',')[1]);
    };
    reader.onerror = (error) => reject(error);
  });
};

interface PhotoAnalyzerViewProps {
  settings: AppSettings;
}

export const PhotoAnalyzerView: React.FC<PhotoAnalyzerViewProps> = ({ settings }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('Describe this image for a tourist visiting the city. What is the main subject and what is the atmosphere?');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setResult(null);
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    if (!imageFile || !prompt) {
      setError("Proszę wybrać zdjęcie i wpisać polecenie.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const base64Data = await fileToBase64(imageFile);
      const analysisResult = await geminiService.analyzeUploadedPhoto(
        base64Data,
        imageFile.type,
        prompt,
        settings
      );
      setResult(analysisResult);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(`Wystąpił błąd podczas analizy zdjęcia: ${errorMessage}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Analizator Zdjęć</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Wybierz lokalne zdjęcie, aby poddać je analizie przez model Gemini. Możesz zadać pytanie lub poprosić o opis, aby zrozumieć, jak AI interpretuje obraz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Left Column: Upload & Preview */}
                <div className="space-y-4">
                    <div>
                        <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Wybierz zdjęcie
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 dark:ring-offset-gray-800 focus-within:ring-blue-500">
                                    <span>Prześlij plik</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
                                </label>
                                <p className="pl-1">lub przeciągnij i upuść</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF do 10MB</p>
                            </div>
                        </div>
                    </div>
                    {imagePreview && (
                        <div>
                            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Podgląd</h3>
                            <img src={imagePreview} alt="Image preview" className="rounded-lg shadow-md w-full object-contain max-h-64" />
                        </div>
                    )}
                </div>

                {/* Right Column: Prompt & Action */}
                <div className="space-y-4">
                    <div>
                        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Polecenie dla AI
                        </label>
                        <textarea
                            id="prompt"
                            rows={4}
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0"
                            placeholder="Np. Opisz to zdjęcie..."
                        />
                    </div>
                    <button
                        onClick={handleAnalyze}
                        disabled={isLoading || !imageFile}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                        {isLoading ? "Analizowanie..." : "Analizuj zdjęcie"}
                    </button>
                </div>
            </div>

            {(isLoading || result || error) && (
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                     <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Wynik analizy</h3>
                    {isLoading && <div className="flex justify-center"><LoadingSpinner /></div>}
                    {error && <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-200 rounded-md">{error}</div>}
                    {result && <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-md text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono text-sm">{result}</div>}
                </div>
            )}
        </div>
    </div>
  );
};