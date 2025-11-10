import React, { useState, useRef } from 'react';
import { Tour, Photo, Language, ProcessedTourData, TourDescription } from '../types';
import { LoadingSpinner } from './LoadingSpinner';
import { apiService } from '../services/apiService';

interface SourceColumnProps {
  tour: Tour;
  photos: Photo[];
  mode: 'EN' | Language;
  canonicalEnData: ProcessedTourData | null;
  onPhotoUploaded?: () => void;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600 pb-2 mb-3">{title}</h3>
    <div className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap font-mono bg-gray-100 dark:bg-gray-900 p-3 rounded-md">{children}</div>
  </div>
);

export const SourceColumn: React.FC<SourceColumnProps> = ({ tour, photos, mode, canonicalEnData, onPhotoUploaded }) => {
  const isEnEditing = mode === 'EN';
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileUpload = async (file: File) => {
    if (!tour.city || !tour.name) {
      alert('Brak wymaganych danych wycieczki (miasto, nazwa)');
      return;
    }
    
    setIsUploading(true);
    try {
      // Step 1: Upload photo to Drive and add to Photos_Source
      const uploadResult = await apiService.uploadPhoto(file, tour.city, '');
      
      // Step 2: Analyze photo and add to tour
      await apiService.uploadAndAnalyzePhoto(tour.name, uploadResult.photoId, uploadResult.url, tour.city);
      
      // Step 3: Refresh photos list
      if (onPhotoUploaded) {
        onPhotoUploaded();
      }
      
      alert('Zdjęcie zostało przesłane, przeanalizowane i dodane do wycieczki!');
    } catch (error) {
      console.error('Error uploading photo:', error);
      alert(`Błąd podczas przesyłania zdjęcia: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };
  
  let title: string;
  let descriptionData: TourDescription | null = null;
  
  if (isEnEditing) {
    title = 'Oryginalna treść (EN)';
    descriptionData = {
        newName: tour.name || '',
        title: tour.title || '',
        h1: tour.h1 || '',
        meta: tour.meta || '',
        short: tour.short,
        long: tour.long,
        highlights: `${tour.highlightsTitle}\n${tour.highlightsDescription}`,
    };
  } else {
    if (canonicalEnData) {
        title = `Kanoniczna treść (EN) dla lokalizacji na ${mode}`;
        descriptionData = canonicalEnData.description;
    } else {
        title = `Ładowanie kanonicznej treści (EN)...`;
    }
  }

  return (
    <div className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow-sm h-full">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="max-h-[80vh] overflow-y-auto pr-2">
        {descriptionData ? (
           <>
            {isEnEditing && (
              <>
                <Section title="City">{tour.city || '—'}</Section>
                <Section title="Name">{tour.name || '—'}</Section>
              </>
            )}
            {isEnEditing && descriptionData.title && (
              <Section title="Title">{descriptionData.title}</Section>
            )}
            {isEnEditing && descriptionData.h1 && (
              <Section title="H1">{descriptionData.h1}</Section>
            )}
            {isEnEditing && descriptionData.meta && (
              <Section title="Meta Description">{descriptionData.meta}</Section>
            )}
            <Section title="Short Description">{descriptionData.short}</Section>
            <Section title="Long Description">{descriptionData.long}</Section>
            <Section title="Highlights">{descriptionData.highlights}</Section>
          </>
        ) : (
            <div className="flex justify-center items-center h-64"><LoadingSpinner/></div>
        )}

        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600 pb-2 mb-3">Zdjęcia do analizy</h3>
          
          {isEnEditing && (
            <div
              className={`mt-3 mb-4 p-6 border-2 border-dashed rounded-lg text-center transition-colors ${
                isDragging
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50 hover:border-gray-400 dark:hover:border-gray-500'
              } ${isUploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              onDragOver={(e) => {
                e.preventDefault();
                if (!isUploading) setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={async (e) => {
                e.preventDefault();
                setIsDragging(false);
                if (isUploading) return;
                // Accept all files that are images OR have image extensions (HEIC files may have empty type)
                const files = Array.from(e.dataTransfer.files).filter(file => 
                  file.type.startsWith('image/') || 
                  /\.(jpg|jpeg|png|gif|webp|heic|heif)$/i.test(file.name)
                );
                if (files.length > 0) {
                  await handleFileUpload(files[0]);
                }
              }}
              onClick={() => !isUploading && fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    await handleFileUpload(file);
                  }
                }}
                disabled={isUploading}
              />
              {isUploading ? (
                <div className="flex flex-col items-center">
                  <LoadingSpinner />
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Przetwarzanie zdjęcia...</p>
                </div>
              ) : (
                <>
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Przeciągnij zdjęcie tutaj lub kliknij, aby wybrać
                  </p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                    Akceptowane formaty: JPG, PNG, WebP, HEIC. Zdjęcie zostanie skompresowane do WebP i przeanalizowane.
                  </p>
                </>
              )}
            </div>
          )}
          
          {photos.length > 0 ? (
            <div className="space-y-4">
              {photos.map(photo => (
                <div key={photo.id} className="flex items-center gap-4 p-2 bg-gray-50 dark:bg-gray-900 rounded-md">
                  <img src={photo.url} alt={photo.name} className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-mono break-all">
                    {photo.name}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            !isEnEditing && <p className="text-sm text-gray-500">Brak przypisanych zdjęć.</p>
          )}
        </div>
      </div>
    </div>
  );
};