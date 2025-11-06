import React, { useState } from 'react';
import { ProcessedTourData, Language, ValidationResult, AppSettings, Photo } from '../types';
import { LoadingSpinner } from './LoadingSpinner';
import { geminiService } from '../services/geminiService';

interface GeneratedColumnProps {
  processedData: ProcessedTourData | null;
  sourcePhotos: Photo[];
  setProcessedData: React.Dispatch<React.SetStateAction<ProcessedTourData | null>>;
  onGenerate?: () => void; // Optional: for backward compatibility
  onGenerateDescription?: () => void; // NEW: separate description generation
  onGeneratePhotos?: () => void; // NEW: separate photo generation
  onAccept: () => void;
  isLoading: boolean;
  feedback: string;
  setFeedback: (value: string) => void;
  renameInDrive: boolean;
  setRenameInDrive: (value: boolean) => void;
  mode: 'EN' | Language;
  validationResults: {[key: string]: ValidationResult};
  settings: AppSettings;
  isEditMode?: boolean;
  onSaveChanges?: () => void;
  onCancel?: () => void;
}

const ValidationIndicator: React.FC<{ result?: ValidationResult }> = ({ result }) => {
  if (!result) return null;
  const color = result.isValid ? 'text-green-500' : 'text-yellow-500';
  return <p className={`text-xs mt-1 ${color}`}>{result.message}</p>;
};

const TextAssistant: React.FC<{ isLoading: boolean; onInstruction: (instruction: string) => void }> = ({ isLoading, onInstruction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customInstruction, setCustomInstruction] = useState('');
  const actions = {
    'Improve Writing': 'Popraw styl i gramatykę tekstu, zachowując jego znaczenie.',
    'Shorten': 'Skróć tekst, zachowując najważniejsze informacje.',
    'Expand': 'Rozwiń tekst, dodając więcej szczegółów i opisowych sformułowań.',
  };

  const handleAction = (instruction: string) => {
    onInstruction(instruction);
    setIsOpen(false);
  }

  const handleCustomSubmit = () => {
    if (!customInstruction.trim()) return;
    onInstruction(customInstruction);
    setCustomInstruction('');
    setIsOpen(false);
  }

  return (
    <div className="absolute top-1 right-1">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        disabled={isLoading}
        className="p-1 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-600 dark:text-gray-300 disabled:opacity-50"
      >
        {isLoading ? (
            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-700 rounded-md shadow-lg z-20 border border-gray-200 dark:border-gray-600">
          <ul className="py-1">
            {Object.entries(actions).map(([label, instruction]) => (
              <li key={label}>
                <button 
                    onClick={() => handleAction(instruction)}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                    {label}
                </button>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-200 dark:border-gray-600 p-2">
            <textarea
              value={customInstruction}
              onChange={(e) => setCustomInstruction(e.target.value)}
              placeholder="Or type your instruction..."
              rows={2}
              className="block w-full text-sm rounded-md bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={handleCustomSubmit}
              disabled={!customInstruction.trim()}
              className="mt-2 w-full text-center px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-700"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


export const GeneratedColumn: React.FC<GeneratedColumnProps> = ({
  processedData,
  sourcePhotos,
  setProcessedData,
  onGenerate, // Old unified handler (kept for backward compatibility)
  onGenerateDescription, // NEW: separate description handler
  onGeneratePhotos, // NEW: separate photos handler
  onAccept,
  isLoading,
  feedback,
  setFeedback,
  renameInDrive,
  setRenameInDrive,
  mode,
  validationResults,
  settings,
  isEditMode = false,
  onSaveChanges,
  onCancel,
}) => {
  const isDataReady = processedData !== null;
  const hasDescription = processedData?.description !== undefined && processedData?.description !== null;
  const hasPhotos = processedData?.photos !== undefined && processedData?.photos?.length > 0;
  const [assistantLoading, setAssistantLoading] = useState<string | null>(null);
  
  // Use separate handlers if provided, otherwise fall back to unified handler
  const useSeparateHandlers = onGenerateDescription !== undefined || onGeneratePhotos !== undefined;
  
  const handleDescriptionChange = (field: 'short' | 'long' | 'highlights', value: string) => {
    if (!processedData) return;
    setProcessedData({
      ...processedData,
      description: {
        ...processedData.description,
        [field]: value
      }
    });
  };
  
  const handlePhotoMetaChange = (id: string, field: keyof ProcessedTourData['photos'][0], value: string) => {
     if (!processedData) return;
     setProcessedData({
       ...processedData,
       photos: processedData.photos.map(p => p.id === id ? {...p, [field]: value} : p)
     });
  };

  const handleAssistantAction = async (field: 'short' | 'long' | 'highlights', instruction: string) => {
      if (!processedData) return;
      setAssistantLoading(field);
      try {
          const originalText = processedData.description[field];
          const newText = await geminiService.quickEditText(originalText, instruction);
          handleDescriptionChange(field, newText);
      } catch (e) {
          console.error("Assistant failed:", e);
          alert(`Asystent AI napotkał błąd: ${e instanceof Error ? e.message : String(e)}`);
      } finally {
          setAssistantLoading(null);
      }
  };

  return (
    <div className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">{isEditMode ? 'Edycja treści kanonicznej (EN)' : 'Wygenerowana treść'}</h2>
      <div className="relative max-h-[80vh] overflow-y-auto pr-2">
        {isLoading && (
          <div className="absolute inset-0 bg-white/70 dark:bg-gray-800/70 flex justify-center items-center z-10 rounded-lg">
            <LoadingSpinner />
          </div>
        )}
        
        {!isDataReady && !isEditMode && (
          <div className="text-center py-20 text-gray-500">
            <p>Kliknij "Generuj", aby rozpocząć.</p>
          </div>
        )}

        {isDataReady && (
          <div>
            {/* Description Fields */}
            <div className="mb-4 relative">
              <label className="block text-sm font-medium">Short Description</label>
              <textarea
                value={processedData.description.short}
                onChange={(e) => handleDescriptionChange('short', e.target.value)}
                rows={3}
                className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0"
              />
              <ValidationIndicator result={validationResults.short} />
              <TextAssistant isLoading={assistantLoading === 'short'} onInstruction={(inst) => handleAssistantAction('short', inst)} />
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm font-medium">Long Description</label>
              <textarea
                value={processedData.description.long}
                onChange={(e) => handleDescriptionChange('long', e.target.value)}
                rows={10}
                className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0"
              />
              <ValidationIndicator result={validationResults.long} />
              <TextAssistant isLoading={assistantLoading === 'long'} onInstruction={(inst) => handleAssistantAction('long', inst)} />
            </div>
             <div className="mb-6 relative">
              <label className="block text-sm font-medium">Highlights</label>
              <textarea
                value={processedData.description.highlights}
                onChange={(e) => handleDescriptionChange('highlights', e.target.value)}
                rows={8}
                className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0"
              />
              <ValidationIndicator result={validationResults.highlights} />
              <TextAssistant isLoading={assistantLoading === 'highlights'} onInstruction={(inst) => handleAssistantAction('highlights', inst)} />
            </div>

            {/* Photo Metadata Fields */}
            <h3 className="text-lg font-semibold mb-3">Metadane Zdjęć</h3>
            <div className="space-y-4">
            {processedData.photos.map(photoMeta => {
              const sourcePhoto = sourcePhotos.find(p => p.id === photoMeta.id);
              return (
                <div key={photoMeta.id} className="flex gap-4 p-3 border border-gray-200 dark:border-gray-700 rounded-md">
                   {sourcePhoto && (
                     <img src={sourcePhoto.url} alt={sourcePhoto.name} className="w-32 h-32 object-cover rounded-md flex-shrink-0" />
                   )}
                   <div className="flex-grow space-y-2">
                      <div>
                        <label className="block text-xs font-medium text-gray-500">New Name</label>
                        <input type="text" value={photoMeta.newName} onChange={e => handlePhotoMetaChange(photoMeta.id, 'newName', e.target.value)} className="mt-1 block w-full text-sm rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500">Caption</label>
                        <textarea value={photoMeta.caption} onChange={e => handlePhotoMetaChange(photoMeta.id, 'caption', e.target.value)} rows={2} className="mt-1 block w-full text-sm rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500">Alt Text</label>
                        <input type="text" value={photoMeta.alt} onChange={e => handlePhotoMetaChange(photoMeta.id, 'alt', e.target.value)} className="mt-1 block w-full text-sm rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0" />
                        <ValidationIndicator result={validationResults[`photo_alt_${photoMeta.id}`]} />
                      </div>

                      {mode === 'EN' && photoMeta.description && (
                        <div>
                          <label className="block text-xs font-medium text-gray-500">Description (EN only)</label>
                          <textarea value={photoMeta.description} onChange={e => handlePhotoMetaChange(photoMeta.id, 'description', e.target.value)} rows={2} className="mt-1 block w-full text-sm rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0" />
                        </div>
                      )}
                   </div>
                </div>
              )
            })}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        {isEditMode ? (
           <div className="flex justify-end space-x-3">
             <button
                onClick={onCancel}
                disabled={isLoading}
                className="py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
             >
                Anuluj
             </button>
             <button
                onClick={onSaveChanges}
                disabled={isLoading || !isDataReady}
                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
             >
                Zapisz zmiany
             </button>
           </div>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Feedback do AI (opcjonalnie)</label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={2}
                placeholder={mode === 'EN' ? "Np. 'Make the tone more adventurous.'" : "Np. 'Użyj bardziej potocznego języka.'"}
                className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center min-h-[24px]">
                {isDataReady && (
                  <>
                    <input
                      id="rename-drive"
                      type="checkbox"
                      checked={renameInDrive}
                      onChange={(e) => setRenameInDrive(e.target.checked)}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="rename-drive" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                      Zmień nazwy plików w Drive
                    </label>
                  </>
                )}
              </div>
              <div className="flex items-center space-x-2 w-full sm:w-auto flex-wrap gap-2">
                {/* Main "Generate" button - generates both description and photos simultaneously */}
                {onGenerate && (
                  <button
                    onClick={onGenerate}
                    disabled={isLoading}
                    className="flex-1 sm:flex-initial flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    {isDataReady ? 'Regeneruj Wszystko' : 'Generuj'}
                  </button>
                )}
                
                {/* Optional separate buttons for individual generation */}
                {useSeparateHandlers && (
                  <>
                    {onGenerateDescription && (
                      <button
                        onClick={onGenerateDescription}
                        disabled={isLoading}
                        className="flex-1 sm:flex-initial flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                        title="Tylko opis"
                      >
                        {hasDescription ? 'Regeneruj Opis' : 'Generuj Opis'}
                      </button>
                    )}
                    {onGeneratePhotos && (
                      <button
                        onClick={onGeneratePhotos}
                        disabled={isLoading || !hasDescription}
                        className="flex-1 sm:flex-initial flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        title={!hasDescription ? 'Najpierw wygeneruj opis' : 'Tylko zdjęcia'}
                      >
                        {hasPhotos ? 'Regeneruj Zdjęcia' : 'Generuj Zdjęcia'}
                      </button>
                    )}
                  </>
                )}
                
                {/* Accept button */}
                <button
                  onClick={onAccept}
                  disabled={isLoading || !isDataReady}
                  className="flex-1 sm:flex-initial flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Akceptuj
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};