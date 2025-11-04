

import React, { useState } from 'react';
import { AppSettings, ValidationRules } from '../types';

interface SettingsViewProps {
  settings: AppSettings;
  setSettings: (settings: AppSettings) => void;
}

const SettingsSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
    <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{title}</h2>
    {children}
  </div>
);

const TextAreaInput: React.FC<{ label: string; value: string; onChange: (value: string) => void; rows?: number }> = ({ label, value, onChange, rows = 8 }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0 font-mono text-sm"
    />
  </div>
);

const NumberInput: React.FC<{ label: string; value: number; onChange: (value: number) => void }> = ({ label, value, onChange }) => (
  <div className="flex items-center justify-between mb-2">
    <label className="text-sm text-gray-700 dark:text-gray-300">{label}</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value, 10) || 0)}
      className="w-24 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-0 text-sm"
    />
  </div>
);

const SelectInput: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  description?: string;
}> = ({ label, value, onChange, options, description }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="mt-1 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
        {description && <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{description}</p>}
    </div>
);


export const SettingsView: React.FC<SettingsViewProps> = ({ settings, setSettings }) => {
  const [localSettings, setLocalSettings] = useState<AppSettings>(settings);
  
  const handleModelChange = (modelType: 'text' | 'image', value: string) => {
    setLocalSettings(prev => ({
      ...prev,
      models: { ...prev.models, [modelType]: value }
    }));
  };

  const handlePromptChange = (promptName: keyof AppSettings['prompts'], value: string) => {
    setLocalSettings(prev => ({
      ...prev,
      prompts: { ...prev.prompts, [promptName]: value }
    }));
  };
  
  const handleRuleChange = (ruleName: keyof ValidationRules, value: number) => {
    setLocalSettings(prev => ({
      ...prev,
      rules: { ...prev.rules, [ruleName]: value }
    }));
  };

  const handleSave = () => {
    setSettings(localSettings);
    alert('Ustawienia zostały zapisane.');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <SettingsSection title="Brand Book / Tone of Voice">
        <TextAreaInput
          label="Główne zasady i styl komunikacji"
          value={localSettings.brandBook}
          onChange={value => setLocalSettings(p => ({...p, brandBook: value}))}
          rows={10}
        />
      </SettingsSection>
      
      <SettingsSection title="Modele AI">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <SelectInput 
                label="Model Tekstowy"
                description="Używany do generowania opisów, highlights i zadań QC."
                value={localSettings.models.text}
                onChange={v => handleModelChange('text', v)}
                options={[
                    { value: 'gemini-2.5-pro', label: 'Gemini 2.5 Pro (najlepsza jakość)' },
                    { value: 'gemini-2.5-flash', label: 'Gemini 2.5 Flash (szybszy i tańszy)' }
                ]}
            />
            <SelectInput 
                label="Model Obrazu (multimodalny)"
                description="Używany do analizy zdjęć i generowania metadanych."
                value={localSettings.models.image}
                onChange={v => handleModelChange('image', v)}
                options={[
                    { value: 'gemini-2.5-pro', label: 'Gemini 2.5 Pro (najlepsza jakość analizy)' },
                    { value: 'gemini-2.5-flash-image', label: 'Gemini 2.5 Flash Image (szybki, zoptymalizowany)' }
                ]}
            />
        </div>
      </SettingsSection>

      <SettingsSection title="Limity i reguły walidacji">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <NumberInput label="Short: min znaków" value={localSettings.rules.shortCharMin} onChange={v => handleRuleChange('shortCharMin', v)} />
          <NumberInput label="Short: max znaków" value={localSettings.rules.shortCharMax} onChange={v => handleRuleChange('shortCharMax', v)} />
          <NumberInput label="Long: liczba akapitów" value={localSettings.rules.longParagraphs} onChange={v => handleRuleChange('longParagraphs', v)} />
          <NumberInput label="Long: min znaków" value={localSettings.rules.longCharMin} onChange={v => handleRuleChange('longCharMin', v)} />
          <NumberInput label="Long: max znaków" value={localSettings.rules.longCharMax} onChange={v => handleRuleChange('longCharMax', v)} />
          <NumberInput label="Highlights: min pozycji" value={localSettings.rules.highlightsMin} onChange={v => handleRuleChange('highlightsMin', v)} />
          <NumberInput label="Highlights: max pozycji" value={localSettings.rules.highlightsMax} onChange={v => handleRuleChange('highlightsMax', v)} />
          <NumberInput label="Highlights: max znaków opisu" value={localSettings.rules.highlightLine2Max} onChange={v => handleRuleChange('highlightLine2Max', v)} />
          <NumberInput label="Photo Alt: max znaków" value={localSettings.rules.photoAltMax} onChange={v => handleRuleChange('photoAltMax', v)} />
          <NumberInput label="Photo Caption: max znaków" value={localSettings.rules.photoCaptionMax} onChange={v => handleRuleChange('photoCaptionMax', v)} />
        </div>
      </SettingsSection>
      
      <SettingsSection title="Prompty AI">
         <TextAreaInput label="Normalizacja EN" value={localSettings.prompts.normalizeEN} onChange={v => handlePromptChange('normalizeEN', v)} />
         <TextAreaInput label="Lokalizacja PL" value={localSettings.prompts.localizePL} onChange={v => handlePromptChange('localizePL', v)} />
         <TextAreaInput label="Lokalizacja DE" value={localSettings.prompts.localizeDE} onChange={v => handlePromptChange('localizeDE', v)} />
         <TextAreaInput label="Lokalizacja ES" value={localSettings.prompts.localizeES} onChange={v => handlePromptChange('localizeES', v)} />
         <TextAreaInput label="Analiza Zdjęć (baza)" value={localSettings.prompts.photoBase} onChange={v => handlePromptChange('photoBase', v)} />
         <TextAreaInput label="Kontrola Jakości (QC) - EN" value={localSettings.prompts.qcEN} onChange={v => handlePromptChange('qcEN', v)} />
         <TextAreaInput label="Kontrola Jakości (QC) - PL" value={localSettings.prompts.qcPL} onChange={v => handlePromptChange('qcPL', v)} />
         <TextAreaInput label="Kontrola Jakości (QC) - DE" value={localSettings.prompts.qcDE} onChange={v => handlePromptChange('qcDE', v)} />
         <TextAreaInput label="Kontrola Jakości (QC) - ES" value={localSettings.prompts.qcES} onChange={v => handlePromptChange('qcES', v)} />
      </SettingsSection>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleSave}
          className="py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Zapisz ustawienia
        </button>
      </div>
    </div>
  );
};