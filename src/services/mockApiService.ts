

import { Tour, Photo, TourNameAndStatus, TourDescription, ProcessedTourData, Language, PhotoMetadata } from '../types';

const MOCK_TOURS: Tour[] = [
  {
    city: 'Krakow',
    name: 'Krakow Old Town',
    short: 'Discover the heart of Krakow, where legends meet history. From the bustling Main Market Square to the majestic Wawel Castle, this tour is your key to Poland\'s cultural capital. Welcome to Krakow!',
    long: `Welcome to the magical Old Town of Krakow! Our journey begins in the Main Market Square, one of the largest medieval squares in Europe, pulsating with life day and night. It's surrounded by historic townhouses and palaces.
    
    Krakow's history is rich and complex, serving as the royal capital of Poland for centuries. We'll trace the footsteps of kings along the Royal Route, uncovering stories of power, art, and intrigue that shaped this city.
    
    You will see the magnificent St. Mary's Basilica with its famous wooden altarpiece, and listen for the legendary bugle call from its tower. We'll also explore the Cloth Hall, a hub of trade for centuries.
    
    This tour is about the people who made Krakow. We will share tales of great artists, influential scholars from Jagiellonian University, and the everyday citizens whose lives are woven into the city's fabric.
    
    Today, the Old Town is a vibrant center of culture, with countless cafes, galleries, and street performers. We'll soak in the modern atmosphere that makes Krakow a top destination for travelers worldwide.
    
    Join us for an unforgettable walk through a city that beautifully blends its past with a lively present. This experience will leave you with a deep appreciation for Krakow's enduring spirit.`,
    highlightsTitle: 'Main Sights',
    highlightsDescription: `- Main Market Square\n- St. Mary's Basilica\n- Cloth Hall\n- Wawel Castle (exterior view)\n- Jagiellonian University\n- St. Florian's Gate\n- Barbican`,
    photoIds: ['p1', 'p2', 'p3', 'p6', 'p7'],
  },
  {
    city: 'Warsaw',
    name: 'Warsaw WWII History',
    short: 'Explore the dramatic WWII history of Warsaw. This tour covers the key sites of the 1944 Uprising and the Ghetto, revealing a story of incredible resilience.',
    long: `This tour delves into the harrowing and heroic history of Warsaw during World War II. We start by understanding the city's pre-war vibrancy.
    The story of Warsaw is one of destruction and rebirth. We'll discuss the German occupation and the creation of the Warsaw Ghetto, the largest in all of Nazi-occupied Europe.
    We will visit remnants of the Ghetto wall, the Umschlagplatz monument, and the POLIN Museum area, honoring the memory of the city's Jewish community.
    The tour highlights the human spirit. We'll talk about the brave souls of the Ghetto Uprising and the city-wide 1944 Warsaw Uprising, acts of defiance against overwhelming odds.
    Warsaw today is a testament to the will of its people. The painstakingly reconstructed Old Town is a symbol of this revival, a true phoenix from the ashes.
    By the end, you'll understand why Warsaw is a city with an unbreakable spirit, having triumphed over its tragic past to become a thriving European capital.`,
    highlightsTitle: 'Key Locations',
    highlightsDescription: `- POLIN Museum Area\n- Ghetto Wall Fragments\n- Umschlagplatz Monument\n- Warsaw Uprising Monument\n- Pawiak Prison Museum\n- Grzybowski Square`,
    photoIds: ['p4', 'p5', 'p8', 'p9', 'p10'],
  },
  {
    city: 'Gdansk',
    name: 'Gdansk Main Town',
    short: 'Walk through the beautifully reconstructed Main Town of Gdansk. Discover its Hanseatic League past, see the iconic Neptune\'s Fountain, and feel the maritime spirit of this Baltic port city.',
    long: `Welcome to Gdansk, a city with a thousand years of history at the crossroads of important trade routes. Our tour focuses on the Main Town, which was meticulously rebuilt after its near-total destruction in WWII. We will start at the Golden Gate and walk down the stunning Long Lane.
    Gdansk's golden age was during the Hanseatic League, and its wealth is reflected in the ornate facades of the townhouses. We will uncover the stories of rich merchants and the city's struggle for independence.
    You will see the famous Neptune's Fountain, a symbol of the city's connection to the sea. We'll also visit the Artus Court, a former meeting place of merchants, and admire the towering St. Mary's Church, one of the largest brick churches in the world.
    The human angle of Gdansk is fascinating, from the astronomers like Hevelius to the birth of the Solidarity movement that changed the course of European history. We will connect these grand events to the places we visit.
    Today, Gdansk is buzzing with energy. Amber shops line the picturesque Mariacka Street, and riverside cafes offer stunning views of the Motlawa River and the medieval crane, the Żuraw.
    This walk will leave you with an appreciation for Gdansk's resilience and its unique blend of Polish, German, and Kashubian influences. It's an unforgettable journey through a city that has always looked to the sea.`,
    highlightsTitle: 'Main Attractions',
    highlightsDescription: `- Long Lane & Long Market\n- Neptune's Fountain\n- Artus Court\n- St. Mary's Church\n- Mariacka Street\n- The Żuraw Crane\n- Golden Gate`,
    photoIds: ['p11', 'p12', 'p13', 'p14', 'p15'],
  },
];

const MOCK_PHOTOS: Photo[] = [
  { id: 'p1', url: 'https://picsum.photos/seed/krakow1/800/600', name: 'DSC_0123.jpg', city: 'Krakow', country: 'Poland', metadata: {} },
  { id: 'p2', url: 'https://picsum.photos/seed/krakow2/800/600', name: 'IMG_5432.png', city: 'Krakow', country: 'Poland', metadata: {} },
  { id: 'p3', url: 'https://picsum.photos/seed/krakow3/800/600', name: 'market_square.jpg', city: 'Krakow', country: 'Poland', metadata: {} },
  { id: 'p6', url: 'https://picsum.photos/seed/krakow4/800/600', name: 'wawel-castle.jpg', city: 'Krakow', country: 'Poland', metadata: {} },
  { id: 'p7', url: 'https://picsum.photos/seed/krakow5/800/600', name: 'st-marys-church.jpg', city: 'Krakow', country: 'Poland', metadata: {} },
  { id: 'p4', url: 'https://picsum.photos/seed/warsaw1/800/600', name: 'warsaw-uprising.jpg', city: 'Warsaw', country: 'Poland', metadata: {} },
  { id: 'p5', url: 'https://picsum.photos/seed/warsaw2/800/600', name: 'ghetto_hero_monument.jpg', city: 'Warsaw', country: 'Poland', metadata: {} },
  { id: 'p8', url: 'https://picsum.photos/seed/warsaw3/800/600', name: 'polin-museum.jpg', city: 'Warsaw', country: 'Poland', metadata: {} },
  { id: 'p9', url: 'https://picsum.photos/seed/warsaw4/800/600', name: 'reconstructed-old-town.jpg', city: 'Warsaw', country: 'Poland', metadata: {} },
  { id: 'p10', url: 'https://picsum.photos/seed/warsaw5/800/600', name: 'ghetto-wall-fragment.jpg', city: 'Warsaw', country: 'Poland', metadata: {} },
  { id: 'p11', url: 'https://picsum.photos/seed/gdansk1/800/600', name: 'neptune-fountain.jpg', city: 'Gdansk', country: 'Poland', metadata: {} },
  { id: 'p12', url: 'https://picsum.photos/seed/gdansk2/800/600', name: 'zuraw-crane.jpg', city: 'Gdansk', country: 'Poland', metadata: {} },
  { id: 'p13', url: 'https://picsum.photos/seed/gdansk3/800/600', name: 'long-market-gdansk.jpg', city: 'Gdansk', country: 'Poland', metadata: {} },
  { id: 'p14', url: 'https://picsum.photos/seed/gdansk4/800/600', name: 'mariacka-street-amber.jpg', city: 'Gdansk', country: 'Poland', metadata: {} },
  { id: 'p15', url: 'https://picsum.photos/seed/gdansk5/800/600', name: 'gdansk-motlawa-river.jpg', city: 'Gdansk', country: 'Poland', metadata: {} },
];


// In-memory store for accepted canonical EN data - starts empty
const MOCK_ACCEPTED_CANONICAL_EN: { [key: string]: ProcessedTourData } = {};

// In-memory store for accepted localizations
const MOCK_ACCEPTED_LOCALIZATIONS: { [key: string]: ProcessedTourData } = {};

// In-memory store for completion statuses
let MOCK_STATUSES: { [key: string]: { plDesc: boolean, deDesc: boolean, esDesc: boolean } } = {
  'Krakow Old Town': { plDesc: false, deDesc: false, esDesc: false },
  'Warsaw WWII History': { plDesc: false, deDesc: false, esDesc: false },
  'Gdansk Main Town': { plDesc: false, deDesc: false, esDesc: false },
};


const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const mockApiService = {
  getTours: async (): Promise<TourNameAndStatus[]> => {
    await delay(500);
    return MOCK_TOURS.map(tour => {
      const hasAcceptedEn = !!MOCK_ACCEPTED_CANONICAL_EN[tour.name];
      return {
        name: tour.name,
        statuses: { 
          enDesc: hasAcceptedEn, 
          photosEn: hasAcceptedEn,
          plDesc: MOCK_STATUSES[tour.name]?.plDesc || false,
          photosPl: MOCK_STATUSES[tour.name]?.plDesc || false, // Assuming photos are accepted with description
          deDesc: MOCK_STATUSES[tour.name]?.deDesc || false,
          photosDe: MOCK_STATUSES[tour.name]?.deDesc || false,
          esDesc: MOCK_STATUSES[tour.name]?.esDesc || false,
          photosEs: MOCK_STATUSES[tour.name]?.esDesc || false,
        },
      }
    });
  },

  getTourDetails: async (name: string): Promise<{ tour: Tour; photos: Photo[] }> => {
    await delay(800);
    const tour = MOCK_TOURS.find(t => t.name === name);
    if (!tour) {
      throw new Error('Tour not found');
    }
    const photos = MOCK_PHOTOS.filter(p => tour.photoIds.includes(p.id));
    return { tour, photos };
  },

  getCanonicalEnData: async (name: string): Promise<ProcessedTourData> => {
    await delay(600);
    const data = MOCK_ACCEPTED_CANONICAL_EN[name];
    if (!data) {
      throw new Error(`Canonical EN data not found for tour: ${name}. Please generate and accept it first.`);
    }
    return data;
  },

  getLocalizedData: async (tourName: string, lang: Language): Promise<ProcessedTourData> => {
    await delay(300);
    const key = `${tourName}-${lang}`;
    const data = MOCK_ACCEPTED_LOCALIZATIONS[key];
    if (!data) {
      throw new Error(`Accepted data for ${lang} not found for tour: ${tourName}.`);
    }
    return data;
  },
  
  acceptChanges: async (tourName: string, mode: Language | 'EN', data: ProcessedTourData, renameInDrive: boolean): Promise<void> => {
    await delay(1000);
    console.log(`--- ACCEPTING CHANGES for "${tourName}" in lang: ${mode} ---`);
    console.log(data);

    if (mode === 'EN') {
      MOCK_ACCEPTED_CANONICAL_EN[tourName] = data;
    } else {
      const key = `${tourName}-${mode}`;
      MOCK_ACCEPTED_LOCALIZATIONS[key] = data;
      if (MOCK_STATUSES[tourName]) {
        const statusKey = `${mode.toLowerCase()}Desc` as keyof typeof MOCK_STATUSES[string];
        MOCK_STATUSES[tourName][statusKey] = true;
      }
    }
    
    // This would be the logic to write to a specific Google Sheet tab, e.g., 'Tours EN' or 'Tours PL'
    console.log(`ACTION: Writing to Google Sheet 'Tours ${mode}' for tour '${tourName}'`);

    // This would update columns in the 'Photos' sheet
    console.log(`ACTION: Updating photo metadata in 'Photos' sheet for ${mode}`);
    data.photos.forEach(p => {
        console.log(`  - Photo ID ${p.id}: newName=${p.newName}, alt=${p.alt}, caption=${p.caption}`);
    });

    if (renameInDrive) {
        console.log('--- Renaming files in Google Drive ---');
        const tour = MOCK_TOURS.find(t => t.name === tourName);
        const originalPhotos = MOCK_PHOTOS.filter(p => tour?.photoIds.includes(p.id));

        data.photos.forEach(p => {
            const originalPhoto = originalPhotos.find(op => op.id === p.id);
            if (originalPhoto) {
                // Logic to extract fileId from URL would go here
                const fileIdMatch = originalPhoto.url.match(/seed\/([^/]+)/);
                const fileId = fileIdMatch ? fileIdMatch[1] : 'unknown-file-id';
                console.log(`  - Renaming file '${originalPhoto.name}' (ID: ${fileId}) to '${p.newName}'`);
            }
        });
    }

    console.log('--- ACCEPTANCE COMPLETE ---');
  },
};