#!/usr/bin/env node
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔍 Sprawdzam dane wycieczek...\n');

try {
  const mockServicePath = join(__dirname, 'src/services/mockApiService.ts');
  const content = readFileSync(mockServicePath, 'utf-8');
  
  const hasAntwerp = content.includes('"city": "Antwerp"') || content.includes('city: \'Antwerp\'');
  const hasKrakow = content.includes('"city": "Krakow"') || content.includes('city: \'Krakow\'');
  const tourMatches = content.match(/"city":|city:/g);
  const tourCount = tourMatches ? tourMatches.length : 0;
  
  console.log('📊 Wyniki:');
  console.log('─────────────────────────────────────');
  console.log(`✓ Liczba wycieczek: ${tourCount}`);
  console.log(`${hasAntwerp ? '✅' : '❌'} Antwerp (nowe dane): ${hasAntwerp ? 'ZNALEZIONE' : 'BRAK'}`);
  console.log(`${hasKrakow ? '⚠️ ' : '✅'} Krakow (stare dane): ${hasKrakow ? 'ZNALEZIONE' : 'BRAK'}`);
  console.log('─────────────────────────────────────\n');
  
  if (hasAntwerp && tourCount > 100) {
    console.log('✅ SUKCES! Dane z Excela są załadowane!');
    process.exit(0);
  } else {
    console.log('❌ PROBLEM z danymi!');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Błąd:', error.message);
  process.exit(1);
}
