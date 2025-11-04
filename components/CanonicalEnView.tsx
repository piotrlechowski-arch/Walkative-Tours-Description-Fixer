import React from 'react';
import { ProcessedTourData, Photo, Language } from '../types';

interface AcceptedContentViewProps {
  lang: Language | 'EN';
  tourName: string;
  data: ProcessedTourData | null;
  sourcePhotos: Photo[];
  onStartEdit?: () => void;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600 pb-2 mb-3">{title}</h3>
    <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-sans bg-gray-50 dark:bg-gray-900/50 p-4 rounded-md">{children}</div>
  </div>
);

const parseHighlights = (text: string): { title: string, description: string }[] => {
    if (!text) return [];
    const lines = text.trim().split('\n').filter(line => line.trim() !== '');
    const items = [];
    for (let i = 0; i < lines.length; i += 2) {
        items.push({ 
            title: lines[i], 
            description: lines[i + 1] || '' 
        });
    }
    return items;
};

export const AcceptedContentView: React.FC<AcceptedContentViewProps> = ({ lang, tourName, data, sourcePhotos, onStartEdit }) => {
  if (!data) {
    return (
      <div className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-center h-96 flex flex-col justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
            {lang === 'EN' ? 'Brak kanonicznej treści' : `Brak zaakceptowanej treści dla ${lang}`}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
          {lang === 'EN' 
            ? "Wygeneruj i zaakceptuj treść w zakładce 'English Editing', aby zobaczyć ją w tym miejscu. Ta wersja będzie podstawą dla wszystkich lokalizacji."
            : `Wygeneruj i zaakceptuj treść w zakładce 'Lokalizacja ${lang}', aby zobaczyć ją tutaj.`
          }
        </p>
      </div>
    );
  }
  
  const title = lang === 'EN' ? 'Canonical English Content (Read-Only)' : `Accepted Content for ${tourName} (${lang})`;
  const description = lang === 'EN' 
    ? "This is the accepted version that will be used as the source for all localizations."
    : `This is the accepted, read-only version for language: ${lang}.`;

  const parsedHighlights = parseHighlights(data.description.highlights);

  return (
    <div className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-xl font-bold text-green-600 dark:text-green-400">{title}</h2>
        {lang === 'EN' && onStartEdit && (
            <button
                onClick={onStartEdit}
                className="py-1.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-yellow-500"
            >
                Edytuj
            </button>
        )}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column for Descriptions */}
        <div>
            <Section title="Short Description">{data.description.short}</Section>
            <Section title="Long Description">{data.description.long}</Section>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600 pb-2 mb-3">Highlights</h3>
              <div className="overflow-x-auto relative rounded-md border border-gray-200 dark:border-gray-700">
                <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300 table-fixed">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-4 w-1/3">
                        Title
                      </th>
                      <th scope="col" className="py-3 px-4 w-2/3">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {parsedHighlights.map((item, index) => (
                      <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="py-3 px-4 font-medium text-gray-900 dark:text-white align-top">
                          {item.title}
                        </td>
                        <td className="py-3 px-4 align-top">
                          {item.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        </div>

        {/* Right Column for Photo Metadata */}
        <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600 pb-2 mb-3">Photo Metadata</h3>
            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                {data.photos.map(photoMeta => {
                    const sourcePhoto = sourcePhotos.find(p => p.id === photoMeta.id);
                    return (
                        <div key={photoMeta.id} className="flex gap-4 p-3 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900/50">
                            {sourcePhoto && (
                                <img src={sourcePhoto.url} alt={sourcePhoto.name} className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
                            )}
                            <div className="flex-grow space-y-2 text-xs">
                                <p><strong className="font-medium text-gray-500">New Name:</strong> <span className="font-mono">{photoMeta.newName}</span></p>
                                <p><strong className="font-medium text-gray-500">Alt Text:</strong> {photoMeta.alt}</p>
                                <p><strong className="font-medium text-gray-500">Caption:</strong> {photoMeta.caption}</p>
                                {photoMeta.description && <p><strong className="font-medium text-gray-500">Description:</strong> {photoMeta.description}</p>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  );
};