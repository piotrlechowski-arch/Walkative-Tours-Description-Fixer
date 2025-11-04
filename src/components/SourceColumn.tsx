import React from 'react';
import { Tour, Photo, Language, ProcessedTourData, TourDescription } from '../types';
import { LoadingSpinner } from './LoadingSpinner';

interface SourceColumnProps {
  tour: Tour;
  photos: Photo[];
  mode: 'EN' | Language;
  canonicalEnData: ProcessedTourData | null;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600 pb-2 mb-3">{title}</h3>
    <div className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap font-mono bg-gray-100 dark:bg-gray-900 p-3 rounded-md">{children}</div>
  </div>
);

export const SourceColumn: React.FC<SourceColumnProps> = ({ tour, photos, mode, canonicalEnData }) => {
  const isEnEditing = mode === 'EN';
  
  let title: string;
  let descriptionData: TourDescription | null = null;
  
  if (isEnEditing) {
    title = 'Oryginalna treść (EN)';
    descriptionData = {
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
            <Section title="Short Description">{descriptionData.short}</Section>
            <Section title="Long Description">{descriptionData.long}</Section>
            <Section title="Highlights">{descriptionData.highlights}</Section>
          </>
        ) : (
            <div className="flex justify-center items-center h-64"><LoadingSpinner/></div>
        )}

        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600 pb-2 mb-3">Zdjęcia do analizy</h3>
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
            <p className="text-sm text-gray-500">Brak przypisanych zdjęć.</p>
          )}
        </div>
      </div>
    </div>
  );
};