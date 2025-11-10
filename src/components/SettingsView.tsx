

import React, { useState, useEffect } from 'react';
import { AppSettings, ValidationRules } from '../types';
import { apiService } from '../services/apiService';

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
  const [driveAuthStatus, setDriveAuthStatus] = useState<{ authorized: boolean; message: string } | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // Check Google Drive authorization status on mount
    const checkAuthStatus = async () => {
      try {
        setCheckingAuth(true);
        const status = await apiService.getGoogleDriveAuthStatus();
        setDriveAuthStatus(status);
      } catch (error) {
        console.error('Error checking auth status:', error);
        setDriveAuthStatus({ authorized: false, message: 'Error checking authorization status' });
      } finally {
        setCheckingAuth(false);
      }
    };
    checkAuthStatus();
  }, []);
  
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

  const handleSave = async () => {
    setSaving(true);
    try {
      // Mapping from settings keys to sheet IDs
      const promptMapping: Record<keyof AppSettings['prompts'], string> = {
        normalizeEN: 'normalize_en',
        localizePL: 'localize_pl',
        localizeDE: 'localize_de',
        localizeES: 'localize_es',
        qcEN: 'qc_en',
        qcPL: 'qc_pl',
        qcDE: 'qc_de',
        qcES: 'qc_es',
        newNameTitleH1EN: 'seo_name_title_h1_en',
        newNameTitleH1PL: 'seo_name_title_h1_pl',
        newNameTitleH1DE: 'seo_name_title_h1_de',
        newNameTitleH1ES: 'seo_name_title_h1_es',
        metaEN: 'meta_en',
        metaPL: 'meta_pl',
        metaDE: 'meta_de',
        metaES: 'meta_es',
        photoBase: 'photo_base',
        photoTranslate: 'photo_translate',
      };

      const ruleMapping: Record<keyof ValidationRules, string> = {
        newNameCharMin: 'char_limit_new_name_min',
        newNameCharMax: 'char_limit_new_name_max',
        titleCharMin: 'char_limit_title_min',
        titleCharMax: 'char_limit_title_max',
        h1CharMin: 'char_limit_h1_min',
        h1CharMax: 'char_limit_h1_max',
        metaCharMin: 'char_limit_meta_min',
        metaCharMax: 'char_limit_meta_max',
        shortCharMin: 'char_limit_short_min',
        shortCharMax: 'char_limit_short_max',
        longCharMin: 'char_limit_long_min',
        longCharMax: 'char_limit_long_max',
        highlightsMin: 'char_limit_highlights_min',
        highlightsMax: 'char_limit_highlights_max',
        highlightLine2Max: 'char_limit_highlight_line2_max',
        photoAltMax: 'char_limit_photo_alt_max',
        photoCaptionMax: 'char_limit_photo_caption_max',
      };

      const updatePromises: Promise<any>[] = [];

      // Save brandbook if changed
      if (localSettings.brandBook !== settings.brandBook) {
        updatePromises.push(apiService.updatePrompt('brandbook', localSettings.brandBook));
      }

      // Save all changed prompts
      for (const [settingsKey, sheetId] of Object.entries(promptMapping)) {
        const key = settingsKey as keyof AppSettings['prompts'];
        if (localSettings.prompts[key] !== settings.prompts[key]) {
          updatePromises.push(apiService.updatePrompt(sheetId, localSettings.prompts[key]));
        }
      }

      // Save all changed character limits
      for (const [settingsKey, sheetId] of Object.entries(ruleMapping)) {
        const key = settingsKey as keyof ValidationRules;
        if (localSettings.rules[key] !== settings.rules[key]) {
          updatePromises.push(apiService.updateCharLimit(sheetId, localSettings.rules[key]));
        }
      }

      // Wait for all updates to complete
      if (updatePromises.length > 0) {
        await Promise.all(updatePromises);
        console.log(`Successfully saved ${updatePromises.length} items to Sheets (prompts and character limits)`);
      }

      // Update local state
      setSettings(localSettings);
      alert(`Ustawienia zostały zapisane${updatePromises.length > 0 ? ` (${updatePromises.length} zmian zapisanych do Google Sheets)` : ''}.`);
    } catch (error) {
      console.error('Error saving settings:', error);
      alert(`Błąd podczas zapisywania ustawień: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setSaving(false);
    }
  };

  const handleAuthorizeGoogleDrive = () => {
    apiService.authorizeGoogleDrive();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <SettingsSection title="Google Drive Authorization">
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Aby wgrywać nowe zdjęcia do Google Drive, musisz autoryzować aplikację do dostępu do Twojego Google Drive.
            To jednorazowa operacja - po autoryzacji wszystkie użytkownicy będą mogli wgrywać zdjęcia.
          </p>
          {checkingAuth ? (
            <p className="text-sm text-gray-500 dark:text-gray-500">Sprawdzanie statusu autoryzacji...</p>
          ) : driveAuthStatus?.authorized ? (
            <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
              <span className="text-green-600 dark:text-green-400">✅</span>
              <span className="text-sm text-green-700 dark:text-green-300">
                Google Drive jest autoryzowany. Możesz wgrywać zdjęcia.
              </span>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md">
                <span className="text-yellow-600 dark:text-yellow-400">⚠️</span>
                <span className="text-sm text-yellow-700 dark:text-yellow-300">
                  Google Drive nie jest autoryzowany. Kliknij poniżej, aby autoryzować.
                </span>
              </div>
              <button
                onClick={handleAuthorizeGoogleDrive}
                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Autoryzuj Google Drive
              </button>
            </div>
          )}
        </div>
      </SettingsSection>

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
          <NumberInput label="New Name: min znaków" value={localSettings.rules.newNameCharMin} onChange={v => handleRuleChange('newNameCharMin', v)} />
          <NumberInput label="New Name: max znaków" value={localSettings.rules.newNameCharMax} onChange={v => handleRuleChange('newNameCharMax', v)} />
          <NumberInput label="Title: min znaków" value={localSettings.rules.titleCharMin} onChange={v => handleRuleChange('titleCharMin', v)} />
          <NumberInput label="Title: max znaków" value={localSettings.rules.titleCharMax} onChange={v => handleRuleChange('titleCharMax', v)} />
          <NumberInput label="H1: min znaków" value={localSettings.rules.h1CharMin} onChange={v => handleRuleChange('h1CharMin', v)} />
          <NumberInput label="H1: max znaków" value={localSettings.rules.h1CharMax} onChange={v => handleRuleChange('h1CharMax', v)} />
          <NumberInput label="Meta: min znaków" value={localSettings.rules.metaCharMin} onChange={v => handleRuleChange('metaCharMin', v)} />
          <NumberInput label="Meta: max znaków" value={localSettings.rules.metaCharMax} onChange={v => handleRuleChange('metaCharMax', v)} />
          <NumberInput label="Short: min znaków" value={localSettings.rules.shortCharMin} onChange={v => handleRuleChange('shortCharMin', v)} />
          <NumberInput label="Short: max znaków" value={localSettings.rules.shortCharMax} onChange={v => handleRuleChange('shortCharMax', v)} />
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
         <TextAreaInput label="New Name/Title/H1 - EN" value={localSettings.prompts.newNameTitleH1EN} onChange={v => handlePromptChange('newNameTitleH1EN', v)} />
         <TextAreaInput label="New Name/Title/H1 - PL" value={localSettings.prompts.newNameTitleH1PL} onChange={v => handlePromptChange('newNameTitleH1PL', v)} />
         <TextAreaInput label="New Name/Title/H1 - DE" value={localSettings.prompts.newNameTitleH1DE} onChange={v => handlePromptChange('newNameTitleH1DE', v)} />
         <TextAreaInput label="New Name/Title/H1 - ES" value={localSettings.prompts.newNameTitleH1ES} onChange={v => handlePromptChange('newNameTitleH1ES', v)} />
         <TextAreaInput label="Meta Description - EN" value={localSettings.prompts.metaEN} onChange={v => handlePromptChange('metaEN', v)} />
         <TextAreaInput label="Meta Description - PL" value={localSettings.prompts.metaPL} onChange={v => handlePromptChange('metaPL', v)} />
         <TextAreaInput label="Meta Description - DE" value={localSettings.prompts.metaDE} onChange={v => handlePromptChange('metaDE', v)} />
         <TextAreaInput label="Meta Description - ES" value={localSettings.prompts.metaES} onChange={v => handlePromptChange('metaES', v)} />
         <TextAreaInput label="Analiza Zdjęć (baza)" value={localSettings.prompts.photoBase} onChange={v => handlePromptChange('photoBase', v)} />
         <TextAreaInput label="Tłumaczenie Metadanych Zdjęć" value={localSettings.prompts.photoTranslate} onChange={v => handlePromptChange('photoTranslate', v)} />
         <TextAreaInput label="Kontrola Jakości (QC) - EN" value={localSettings.prompts.qcEN} onChange={v => handlePromptChange('qcEN', v)} />
         <TextAreaInput label="Kontrola Jakości (QC) - PL" value={localSettings.prompts.qcPL} onChange={v => handlePromptChange('qcPL', v)} />
         <TextAreaInput label="Kontrola Jakości (QC) - DE" value={localSettings.prompts.qcDE} onChange={v => handlePromptChange('qcDE', v)} />
         <TextAreaInput label="Kontrola Jakości (QC) - ES" value={localSettings.prompts.qcES} onChange={v => handlePromptChange('qcES', v)} />
      </SettingsSection>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleSave}
          disabled={saving}
          className="py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {saving ? 'Zapisywanie...' : 'Zapisz ustawienia'}
        </button>
      </div>
    </div>
  );
};