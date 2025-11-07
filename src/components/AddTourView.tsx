import React, { useState } from 'react';
import { apiService } from '../services/apiService';

interface AddTourViewProps {
  onTourAdded?: () => void;
}

export const AddTourView: React.FC<AddTourViewProps> = ({ onTourAdded }) => {
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [short, setShort] = useState('');
  const [long, setLong] = useState('');
  const [highlightsTitle, setHighlightsTitle] = useState('');
  const [highlightsDescription, setHighlightsDescription] = useState('');
  const [photoIds, setPhotoIds] = useState<string[]>([]);
  const [newPhotoId, setNewPhotoId] = useState('');
  const [uploadingPhotos, setUploadingPhotos] = useState<{file: File; preview: string; status: 'uploading' | 'success' | 'error'; photoId?: string}[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleAddPhotoId = () => {
    if (newPhotoId.trim()) {
      setPhotoIds([...photoIds, newPhotoId.trim()]);
      setNewPhotoId('');
    }
  };

  const handleRemovePhotoId = (index: number) => {
    setPhotoIds(photoIds.filter((_, i) => i !== index));
  };

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;
    
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const preview = URL.createObjectURL(file);
        setUploadingPhotos(prev => [...prev, { file, preview, status: 'uploading' }]);
        
        // Upload file
        uploadPhoto(file, preview);
      }
    });
  };

  const uploadPhoto = async (file: File, preview: string) => {
    const formData = new FormData();
    formData.append('photo', file);
    formData.append('city', city || '');
    formData.append('country', ''); // Can be added later if needed

    try {
      const response = await fetch('/api/upload-photo', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Upload failed' }));
        throw new Error(errorData.error || 'Upload failed');
      }

      const data = await response.json();
      
      // Update status to success
      setUploadingPhotos(prev => prev.map(p => 
        p.preview === preview 
          ? { ...p, status: 'success' as const, photoId: data.photoId }
          : p
      ));

      // Automatically add photo ID to list
      if (data.photoId) {
        setPhotoIds(prev => [...prev, data.photoId]);
      }
    } catch (err) {
      // Update status to error
      setUploadingPhotos(prev => prev.map(p => 
        p.preview === preview 
          ? { ...p, status: 'error' as const }
          : p
      ));
      setError(`Błąd podczas wgrywania zdjęcia: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(e.target.files);
  };

  const removeUploadingPhoto = (preview: string) => {
    setUploadingPhotos(prev => {
      const photo = prev.find(p => p.preview === preview);
      if (photo && photo.photoId) {
        setPhotoIds(prevIds => prevIds.filter(id => id !== photo.photoId));
      }
      URL.revokeObjectURL(preview);
      return prev.filter(p => p.preview !== preview);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    if (!city.trim() || !name.trim()) {
      setError('Miasto i nazwa wycieczki są wymagane.');
      setIsLoading(false);
      return;
    }

    try {
      await apiService.createTour({
        city: city.trim(),
        name: name.trim(),
        short: short.trim() || undefined,
        long: long.trim() || undefined,
        highlightsTitle: highlightsTitle.trim() || undefined,
        highlightsDescription: highlightsDescription.trim() || undefined,
        photoIds: photoIds.length > 0 ? photoIds : undefined,
      });

      setSuccess(true);
      // Reset form
      setCity('');
      setName('');
      setShort('');
      setLong('');
      setHighlightsTitle('');
      setHighlightsDescription('');
      setPhotoIds([]);
      setNewPhotoId('');

      if (onTourAdded) {
        onTourAdded();
      }

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(`Nie udało się dodać wycieczki: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Dodaj nową wycieczkę</h2>

        {error && (
          <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-200 rounded-md">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-200 rounded-md">
            Wycieczka została dodana pomyślnie!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Miasto <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nazwa wycieczki <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Short Description (opcjonalnie)
            </label>
            <textarea
              value={short}
              onChange={(e) => setShort(e.target.value)}
              rows={3}
              className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Long Description (opcjonalnie)
            </label>
            <textarea
              value={long}
              onChange={(e) => setLong(e.target.value)}
              rows={10}
              className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Highlights Title (opcjonalnie)
            </label>
            <input
              type="text"
              value={highlightsTitle}
              onChange={(e) => setHighlightsTitle(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Highlights Description (opcjonalnie)
            </label>
            <textarea
              value={highlightsDescription}
              onChange={(e) => setHighlightsDescription(e.target.value)}
              rows={8}
              className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Zdjęcia (opcjonalnie)
            </label>
            
            {/* Drag and Drop Area */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                isDragging
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50'
              }`}
            >
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                multiple
                onChange={handleFileInputChange}
                className="hidden"
              />
              <label
                htmlFor="photo-upload"
                className="cursor-pointer block"
              >
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Kliknij aby wybrać</span> lub przeciągnij i upuść zdjęcia tutaj
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                  Pliki zostaną automatycznie skonwertowane na WebP i wgrane do Google Drive
                </p>
              </label>
            </div>

            {/* Uploading Photos Preview */}
            {uploadingPhotos.length > 0 && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {uploadingPhotos.map((photo, index) => (
                  <div key={index} className="relative group">
                    <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                      <img
                        src={photo.preview}
                        alt={photo.file.name}
                        className="w-full h-full object-cover"
                      />
                      {photo.status === 'uploading' && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      {photo.status === 'success' && (
                        <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                      {photo.status === 'error' && (
                        <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
                          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeUploadingPhoto(photo.preview)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                    {photo.photoId && (
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 truncate">ID: {photo.photoId}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Manual Photo ID Input */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Lub wpisz Photo ID ręcznie
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newPhotoId}
                  onChange={(e) => setNewPhotoId(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddPhotoId();
                    }
                  }}
                  placeholder="Wpisz Photo ID i naciśnij Enter"
                  className="flex-1 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0"
                />
                <button
                  type="button"
                  onClick={handleAddPhotoId}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Dodaj
                </button>
              </div>
            </div>

            {/* Photo IDs List */}
            {photoIds.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Dodane Photo IDs:</p>
                <div className="flex flex-wrap gap-2">
                  {photoIds.map((id, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {id}
                      <button
                        type="button"
                        onClick={() => handleRemovePhotoId(index)}
                        className="ml-2 text-red-600 hover:text-red-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Zapisywanie...' : 'Zapisz wycieczkę'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

