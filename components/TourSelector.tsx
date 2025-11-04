import React, { useState, useRef, useEffect } from 'react';
import { TourNameAndStatus, TourStatus } from '../types';

interface TourSelectorProps {
  tours: TourNameAndStatus[];
  selectedTourName: string | null;
  onSelectTour: (name: string) => void;
  disabled: boolean;
}

const LanguageStatusIcons: React.FC<{ statuses: TourStatus }> = ({ statuses }) => {
  const langStatus: {lang: keyof TourStatus; label: string}[] = [
    { lang: 'enDesc', label: 'EN' },
    { lang: 'plDesc', label: 'PL' },
    { lang: 'deDesc', label: 'DE' },
    { lang: 'esDesc', label: 'ES' },
  ];
  
  // For EN, the canonical description must be done. For others, just their description.
  const isDone = (lang: keyof TourStatus, label: string) => {
      if (label === 'EN') return statuses.enDesc;
      return statuses[lang];
  }

  return (
    <div className="flex items-center space-x-1.5 ml-auto">
      {langStatus.map(({lang, label}) => (
        <span
          key={label}
          className={`flex items-center justify-center h-5 w-6 text-xs font-bold text-white rounded-full ${
            isDone(lang, label) ? 'bg-green-500' : 'bg-gray-400 dark:bg-gray-600'
          }`}
          title={`${label}: ${isDone(lang, label) ? 'Gotowe' : 'Oczekuje'}`}
        >
          {label}
        </span>
      ))}
    </div>
  );
};

export const TourSelector: React.FC<TourSelectorProps> = ({ tours, selectedTourName, onSelectTour, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (name: string) => {
    onSelectTour(name);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Wybierz wycieczkę
        </label>
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                disabled={disabled}
                className="relative w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 text-left dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-50"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className="block truncate">{selectedTourName || 'Wybierz...'}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
            {isOpen && (
                <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" role="listbox">
                    {tours.map(tour => (
                        <li key={tour.name} className="text-gray-900 dark:text-white relative cursor-default select-none">
                            <button
                                onClick={() => handleSelect(tour.name)}
                                className="w-full text-left flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                                <span className={`font-normal block truncate ${selectedTourName === tour.name ? 'font-semibold' : ''}`}>
                                    {tour.name}
                                </span>
                                <LanguageStatusIcons statuses={tour.statuses} />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  );
};