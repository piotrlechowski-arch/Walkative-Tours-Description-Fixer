import React, { useState, useEffect, useCallback } from 'react';
import { Tour, Photo, AppSettings, Language, View, TourNameAndStatus, ProcessedTourData } from './types';
import { apiService } from './services/apiService';
import { geminiService } from './services/geminiService';
import { DEFAULT_SETTINGS } from './constants';
import { Header } from './components/Header';
import { TourSelector } from './components/TourSelector';
import { EditorView } from './components/EditorView';
import { SettingsView } from './components/SettingsView';
import { LoadingSpinner } from './components/LoadingSpinner';
import { PhotoAnalyzerView } from './components/PhotoAnalyzerView';

const App: React.FC = () => {
  const [view, setView] = useState<View>('editor');
  const [tours, setTours] = useState<TourNameAndStatus[]>([]);
  const [selectedTourName, setSelectedTourName] = useState<string | null>(null);
  const [sourceTour, setSourceTour] = useState<Tour | null>(null);
  const [sourcePhotos, setSourcePhotos] = useState<Photo[]>([]);
  const [processedData, setProcessedData] = useState<ProcessedTourData | null>(null);
  const [canonicalEnData, setCanonicalEnData] = useState<ProcessedTourData | null>(null);
  const [acceptedLocalizedData, setAcceptedLocalizedData] = useState<ProcessedTourData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);

  const fetchTourList = useCallback(async () => {
    setIsLoading(true);
    try {
      const tourList = await apiService.getTours();
      setTours(tourList);
      if (!selectedTourName && tourList.length > 0) {
        setSelectedTourName(tourList[0].name);
      }
    } catch (err) {
      setError('Nie udało się załadować listy wycieczek.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [selectedTourName]);


  useEffect(() => {
    fetchTourList();
  }, []); // Removed fetchTourList from dependency array to avoid re-fetching on tour selection change

  useEffect(() => {
    if (selectedTourName) {
      const fetchTourDetails = async () => {
        setIsLoading(true);
        setError(null);
        setSourceTour(null);
        setProcessedData(null); 
        setCanonicalEnData(null);
        setAcceptedLocalizedData(null);
        try {
          const { tour, photos } = await apiService.getTourDetails(selectedTourName);
          setSourceTour(tour);
          setSourcePhotos(photos);
        } catch (err) {
          setError('Nie udało się załadować szczegółów wycieczki.');
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchTourDetails();
    }
  }, [selectedTourName]);

  const handleLoadCanonicalEn = useCallback(async () => {
    if (!selectedTourName) return;
    setIsLoading(true);
    setError(null);
    try {
      const data = await apiService.getCanonicalEnData(selectedTourName);
      setCanonicalEnData(data);
    } catch(err) {
      setError(`Nie udało się załadować kanonicznej treści EN: ${err instanceof Error ? err.message : String(err)}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [selectedTourName]);

  const handleLoadLocalizedData = useCallback(async (lang: Language) => {
    if (!selectedTourName) return;
    setIsLoading(true);
    setError(null);
    try {
        const data = await apiService.getLocalizedData(selectedTourName, lang);
        setAcceptedLocalizedData(data);
    } catch(err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        setError(`Nie udało się załadować zaakceptowanej treści dla ${lang}: ${errorMessage}`);
        console.error(err);
    } finally {
        setIsLoading(false);
    }
  }, [selectedTourName]);


  const handleGenerate = useCallback(async (mode: Language | 'EN', feedback: string, renameInDrive: boolean) => {
    if (!sourceTour) return;
    setIsLoading(true);
    setError(null);
    try {
      let result;
      if (mode === 'EN') {
        // Generate both description and photos simultaneously for EN
        result = await geminiService.normalizeAndAnalyze(sourceTour, sourcePhotos, settings, feedback);
      } else {
        // For localization: translate both description and photo metadata simultaneously
        if (!canonicalEnData) {
          throw new Error("Cannot localize because canonical English data is not available. Please switch to the EN tab, generate, and accept the content first.");
        }
        if (!canonicalEnData.photos || canonicalEnData.photos.length === 0) {
          throw new Error("Cannot localize photos because canonical English photo metadata is not available. Please generate and accept EN photos first.");
        }
        result = await geminiService.localizeAndAnalyze(
          sourceTour, 
          canonicalEnData.description, 
          canonicalEnData.photos, 
          mode, 
          feedback, 
          settings
        );
      }
      setProcessedData(result);
      console.log('Generated Data:', result);
    } catch (err) {
      setError(`Wystąpił błąd podczas generowania treści: ${err instanceof Error ? err.message : String(err)}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [sourceTour, sourcePhotos, settings, canonicalEnData]);

  // NEW: Separate handler for description only
  const handleGenerateDescription = useCallback(async (mode: Language | 'EN', feedback: string) => {
    if (!sourceTour) return;
    setIsLoading(true);
    setError(null);
    try {
      let description;
      if (mode === 'EN') {
        description = await geminiService.normalizeDescriptionOnly(sourceTour, settings, feedback);
      } else {
        if (!canonicalEnData) {
          throw new Error("Cannot localize because canonical English data is not available. Please switch to the EN tab, generate, and accept the content first.");
        }
        description = await geminiService.localizeDescriptionOnly(sourceTour, canonicalEnData.description, mode, feedback, settings);
      }
      // Update processedData with new description, keep existing photos if any
      setProcessedData(prev => ({
        description,
        photos: prev?.photos || []
      }));
      console.log('Generated Description:', description);
    } catch (err) {
      setError(`Wystąpił błąd podczas generowania opisu: ${err instanceof Error ? err.message : String(err)}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [sourceTour, settings, canonicalEnData]);

  // NEW: Separate handler for photos only
  const handleGeneratePhotos = useCallback(async (mode: Language | 'EN') => {
    if (!sourceTour || !processedData?.description) {
      setError('Najpierw wygeneruj opis przed wygenerowaniem metadanych zdjęć.');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      let photos;
      if (mode === 'EN') {
        // For EN: analyze photos from scratch
        photos = await geminiService.analyzePhotosOnly(sourceTour, processedData.description, sourcePhotos, settings);
      } else {
        // For localization: translate existing EN photo metadata
        if (!canonicalEnData || !canonicalEnData.photos || canonicalEnData.photos.length === 0) {
          throw new Error("Cannot localize photos because canonical English photo metadata is not available. Please generate and accept EN photos first.");
        }
        photos = await geminiService.translatePhotosOnly(canonicalEnData.photos, mode, settings);
      }
      // Update processedData with new photos, keep existing description
      setProcessedData(prev => ({
        description: prev!.description,
        photos
      }));
      console.log('Generated Photos:', photos);
    } catch (err) {
      setError(`Wystąpił błąd podczas generowania metadanych zdjęć: ${err instanceof Error ? err.message : String(err)}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [sourceTour, sourcePhotos, settings, canonicalEnData, processedData]);

  const handleAccept = useCallback(async (mode: Language | 'EN', data: ProcessedTourData, renameInDrive: boolean) => {
    if (!sourceTour) return;
    setIsLoading(true);
    setError(null);
    try {
      await apiService.acceptChanges(sourceTour.name, mode, data, renameInDrive);
      if (mode === 'EN') {
        setCanonicalEnData(data);
      } else {
        setAcceptedLocalizedData(data);
      }
      alert(`Zmiany dla wycieczki "${sourceTour.name}" w języku ${mode} zostały zaakceptowane i zapisane.`);
      // Refetch tour list to get updated statuses
      await fetchTourList();

    } catch (err) {
      setError(`Nie udało się zapisać zmian: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsLoading(false);
    }
  }, [sourceTour, fetchTourList]);

  const selectedTour = tours.find(t => t.name === selectedTourName) || null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <Header currentView={view} setView={setView} />
      <main className="p-4 sm:p-6 lg:p-8">
        {view === 'editor' && (
          <>
            <TourSelector
              tours={tours}
              selectedTourName={selectedTourName}
              onSelectTour={setSelectedTourName}
              disabled={isLoading}
            />
            {error && <div className="mt-4 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-200 rounded-md">{error}</div>}
            {isLoading && !sourceTour && <div className="flex justify-center items-center h-64"><LoadingSpinner /></div>}
            {sourceTour && selectedTour && (
              <EditorView
                sourceTour={sourceTour}
                selectedTour={selectedTour}
                sourcePhotos={sourcePhotos}
                processedData={processedData}
                setProcessedData={setProcessedData}
                canonicalEnData={canonicalEnData}
                acceptedLocalizedData={acceptedLocalizedData}
                setAcceptedLocalizedData={setAcceptedLocalizedData}
                onGenerate={handleGenerate}
                onGenerateDescription={handleGenerateDescription}
                onGeneratePhotos={handleGeneratePhotos}
                onAccept={handleAccept}
                onLoadCanonicalEn={handleLoadCanonicalEn}
                onLoadLocalizedData={handleLoadLocalizedData}
                isLoading={isLoading}
                settings={settings}
              />
            )}
          </>
        )}
        {view === 'settings' && <SettingsView settings={settings} setSettings={setSettings} />}
        {view === 'analyzer' && <PhotoAnalyzerView settings={settings} />}
      </main>
    </div>
  );
};

export default App;