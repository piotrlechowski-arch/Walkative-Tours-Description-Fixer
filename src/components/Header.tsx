import React from 'react';
import { View } from '../types';

interface HeaderProps {
  currentView: View;
  setView: (view: View) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const NavButton: React.FC<{ viewName: View; children: React.ReactNode }> = ({ viewName, children }) => {
    const isActive = currentView === viewName;
    return (
      <button
        onClick={() => setView(viewName)}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        {children}
      </button>
    );
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Walkative Tours Description Fixer</h1>
          </div>
          <nav className="flex space-x-2">
            <NavButton viewName="editor">Edytor</NavButton>
            <NavButton viewName="analyzer">Analizator Zdjęć</NavButton>
            <NavButton viewName="settings">Ustawienia</NavButton>
          </nav>
        </div>
      </div>
    </header>
  );
};