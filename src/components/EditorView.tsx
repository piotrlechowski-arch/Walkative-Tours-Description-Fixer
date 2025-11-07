import React, { useState, useEffect } from 'react';
import { Tour, Photo, ProcessedTourData, Language, AppSettings, ValidationResult, Mode, TourNameAndStatus, TourStatus } from '../types';
import { SourceColumn } from './SourceColumn';
import { GeneratedColumn } from './GeneratedColumn';
import { validateAll } from '../utils/validators';
import { AcceptedContentView } from './CanonicalEnView';

interface EditorViewProps {
  sourceTour: Tour;
  selectedTour: TourNameAndStatus;
  sourcePhotos: Photo[];
  processedData: ProcessedTourData | null;
  setProcessedData: React.Dispatch<React.SetStateAction<ProcessedTourData | null>>;
  canonicalEnData: ProcessedTourData | null;
  acceptedLocalizedData: ProcessedTourData | null;
  setAcceptedLocalizedData: React.Dispatch<React.SetStateAction<ProcessedTourData | null>>;
  onGenerate: (mode: Mode, feedback: string, renameInDrive: boolean) => void;
  onAccept: (mode: Mode, data: ProcessedTourData, renameInDrive: boolean) => void;
  onLoadCanonicalEn: () => Promise<void>;
  onLoadLocalizedData: (lang: Language) => Promise<void>;
  onPhotoUploaded?: () => void;
  isLoading: boolean;
  settings: AppSettings;
}

export const EditorView: React.FC<EditorViewProps> = ({
  sourceTour,
  selectedTour,
  sourcePhotos,
  processedData,
  setProcessedData,
  canonicalEnData,
  acceptedLocalizedData,
  setAcceptedLocalizedData,
  onGenerate,
  onAccept,
  onLoadCanonicalEn,
  onLoadLocalizedData,
  onPhotoUploaded,
  isLoading,
  settings
}) => {
  const [mode, setMode] = useState<Mode>('EN');
  const [feedback, setFeedback] = useState('');
  const [renameInDrive, setRenameInDrive] = useState(false);
  const [validationResults, setValidationResults] = useState<{[key: string]: ValidationResult}>({});
  const [isEditingCanonical, setIsEditingCanonical] = useState(false);


  useEffect(() => {
    // Reset state when tour changes
    setMode('EN');
    setFeedback('');
    setRenameInDrive(false);
    setIsEditingCanonical(false);
  }, [sourceTour.name]);

  useEffect(() => {
    if (processedData) {
      const results = validateAll(processedData, settings.rules);
      setValidationResults(results);
    } else {
      setValidationResults({});
    }
  }, [processedData, settings.rules]);

  const handleModeChange = async (newMode: Mode) => {
    if (mode === newMode) return;

    setMode(newMode);
    setProcessedData(null); 
    setFeedback('');
    setIsEditingCanonical(false);

    if (newMode === 'EN' || newMode === 'CANONICAL_EN') {
        setAcceptedLocalizedData(null); // Clear any viewed localized data
    } else if (newMode === 'PL' || newMode === 'DE' || newMode === 'ES') {
        const statusKey = `${newMode.toLowerCase()}Desc` as keyof TourStatus;
        const isAccepted = selectedTour.statuses[statusKey];
        
        if (isAccepted) {
            await onLoadLocalizedData(newMode);
        } else {
            setAcceptedLocalizedData(null);
            if (!canonicalEnData) {
                await onLoadCanonicalEn();
            }
        }
    }
  };
  
  const handleGenerateClick = () => {
      onGenerate(mode, feedback, renameInDrive);
  };
  
  const handleAcceptClick = () => {
      if (processedData) {
        // Ensure description is present before accepting
        if (!processedData.description) {
          alert('Błąd: Brak opisu w danych. Najpierw wygeneruj opis wycieczki.');
          return;
        }
        console.log('Accepting data:', {
          mode,
          hasDescription: !!processedData.description,
          descriptionKeys: processedData.description ? Object.keys(processedData.description) : [],
          photosCount: processedData.photos?.length || 0
        });
        onAccept(mode, processedData, renameInDrive);
      } else {
        alert('Brak danych do zapisania. Najpierw wygeneruj treść.');
      }
  };

  const handleStartEdit = () => {
    if (canonicalEnData) {
      setProcessedData(canonicalEnData);
      setIsEditingCanonical(true);
    }
  };

  const handleCancelEdit = () => {
    setIsEditingCanonical(false);
    setProcessedData(null);
  };

  const handleSaveEdit = () => {
    if (processedData) {
      onAccept('EN', processedData, false); // No need to rename files on manual edit
      setIsEditingCanonical(false);
      setProcessedData(null);
    }
  };

  const Tab: React.FC<{ targetMode: Mode; children: React.ReactNode; disabled?: boolean }> = ({ targetMode, children, disabled = false }) => {
    const isActive = mode === targetMode;
    
    const isCanonicalTab = targetMode === 'CANONICAL_EN';
    const hasCanonicalData = canonicalEnData !== null;
    
    const isLocalizedAndAccepted = 
        (targetMode === 'PL' || targetMode === 'DE' || targetMode === 'ES') &&
        selectedTour.statuses[`${targetMode.toLowerCase()}Desc` as keyof TourStatus];

    const baseClasses = 'px-4 py-2 text-sm font-medium rounded-t-lg focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-blue-500 transition-colors';
    const activeClasses = 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400';
    const disabledClasses = 'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-gray-500';
    
    let inactiveClasses = 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200';
    if (isCanonicalTab && hasCanonicalData) {
        inactiveClasses = 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300';
    } else if (isLocalizedAndAccepted) {
        inactiveClasses = 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300';
    }


    return (
      <button
        onClick={() => handleModeChange(targetMode)}
        disabled={isLoading || disabled}
        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${disabledClasses}`}
        title={disabled ? "Najpierw wygeneruj i zaakceptuj treść w zakładce 'English Editing'" : ''}
      >
        {children}
      </button>
    );
  };
  
  const renderContent = () => {
    // Case 1: English editing (generation)
    if (mode === 'EN') {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SourceColumn tour={sourceTour} photos={sourcePhotos} mode="EN" canonicalEnData={null} onPhotoUploaded={onPhotoUploaded} />
          <GeneratedColumn
            processedData={processedData}
            sourcePhotos={sourcePhotos}
            setProcessedData={setProcessedData}
            onGenerate={handleGenerateClick}
            onAccept={handleAcceptClick}
            isLoading={isLoading}
            feedback={feedback}
            setFeedback={setFeedback}
            renameInDrive={renameInDrive}
            setRenameInDrive={setRenameInDrive}
            mode={mode}
            validationResults={validationResults}
            settings={settings}
          />
        </div>
      );
    }

    // Case 2: Canonical EN View (read-only or edit)
    if (mode === 'CANONICAL_EN') {
      if (isEditingCanonical) {
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SourceColumn tour={sourceTour} photos={sourcePhotos} mode="EN" canonicalEnData={null} onPhotoUploaded={onPhotoUploaded} />
            <GeneratedColumn
              processedData={processedData}
              sourcePhotos={sourcePhotos}
              setProcessedData={setProcessedData}
              isLoading={isLoading}
              mode="EN"
              validationResults={validationResults}
              settings={settings}
              isEditMode={true}
              onSaveChanges={handleSaveEdit}
              onCancel={handleCancelEdit}
               // Dummy props to satisfy type, won't be used in edit mode
              onGenerate={() => {}}
              onAccept={() => {}}
              feedback=""
              setFeedback={() => {}}
              renameInDrive={false}
              setRenameInDrive={() => {}}
            />
          </div>
        );
      } else {
        return (
          <AcceptedContentView
            lang="EN"
            tourName={sourceTour.name}
            data={canonicalEnData}
            sourcePhotos={sourcePhotos}
            onStartEdit={handleStartEdit}
          />
        );
      }
    }

    // Case 3: Localization (PL, DE, ES)
    if (mode === 'PL' || mode === 'DE' || mode === 'ES') {
      const isAccepted = selectedTour.statuses[`${mode.toLowerCase()}Desc` as keyof TourStatus];
      if (isAccepted) {
        return (
          <AcceptedContentView
            lang={mode}
            tourName={sourceTour.name}
            data={acceptedLocalizedData}
            sourcePhotos={sourcePhotos}
          />
        );
      } else {
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SourceColumn tour={sourceTour} photos={sourcePhotos} mode={mode} canonicalEnData={canonicalEnData} />
            <GeneratedColumn
              processedData={processedData}
              sourcePhotos={sourcePhotos}
              setProcessedData={setProcessedData}
              onGenerate={handleGenerateClick}
              onAccept={handleAcceptClick}
              isLoading={isLoading}
              feedback={feedback}
              setFeedback={setFeedback}
              renameInDrive={renameInDrive}
              setRenameInDrive={setRenameInDrive}
              mode={mode}
              validationResults={validationResults}
              settings={settings}
            />
          </div>
        );
      }
    }
    
    return null; // Should not happen
  };

  const hasCanonicalData = canonicalEnData !== null;
  
  return (
    <div className="mt-6">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-4" aria-label="Tabs">
          <Tab targetMode="EN">English Editing</Tab>
          <Tab targetMode="CANONICAL_EN">Canonical EN</Tab>
          <Tab targetMode="PL" disabled={!hasCanonicalData}>Lokalizacja PL</Tab>
          <Tab targetMode="DE" disabled={!hasCanonicalData}>Lokalizacja DE</Tab>
          <Tab targetMode="ES" disabled={!hasCanonicalData}>Lokalizacja ES</Tab>
        </nav>
      </div>
      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
};