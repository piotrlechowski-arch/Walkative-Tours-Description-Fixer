/**
 * MOCK API SERVICE - HARDCODED TOUR DATA FROM EXCEL
 * =================================================
 * This file contains 195 tours and 1138 photos parsed from Tours Description Fixer-2.xlsx
 * Last updated: 2025-11-05
 * Build timestamp: $(date +%Y%m%d_%H%M%S)
 * 
 * DATA SOURCE: Excel file (not Google Sheets)
 * TOURS: 195 tours from cities across Europe
 * PHOTOS: 1138 photo entries with metadata
 * 
 * This replaces the old mock data (Krakow, Warsaw, Gdansk) with real tour data.
 */


import { Tour, Photo, TourNameAndStatus, TourDescription, ProcessedTourData, Language, PhotoMetadata } from '../types';

// UNIQUE_BUILD_MARKER_20251105105133_ANTWERP_DATA_IS_HERE
const MOCK_TOURS: Tour[] = [
  {
    "city": "Antwerp",
    "name": "Antwerp Night Tour: Dark Stories & Legends",
    "short": "Evening tour focused on Antwerp’s dark history and legends, from the historic centre to the old port. We start at Grote Markt and trace medieval and baroque sites to the Red Light District and riverside—Het Steen (Stone Castle), Butchers’ Hall, St. Paul’s Church and MAS Museum—with night views over the harbor.",
    "long": "<p>Antwerp, the largest Belgian city known as the home to the diamond trade, has a culturally and artistically rich history. As one of the biggest ports in Europe and an art lovers’ heaven, it attracts millions of tourists dying to discover its colorful – to say the least – history.</p>\n<p>Since its foundation, Antwerp was almost destined to become a successful trade and shipping center. It was only a matter of time before that success happened. During the 16th century Antwerp’s glory was most visible. Even though over the centuries, the city had its ups and downs and overcame bumps and hurdles, it established a strong position on the visitor’s map of Europe. Antwerp attracts with its stunning cathedral, hidden alleyways, and squares. It is a definite must-see not only for all history enthusiasts but also for contemporary architecture lovers. This medieval heart of Belgium, filled with cobbled lanes and artistic cafes, intrigues with its culturally abundant day but also nightlife. There is hardly any other city with a more vibrant fashion and entertainment scene. With its great past reflected on every corner, Antwerp appeals to many international visitors looking for a unique and quirky vibe.</p>\n<p>Discover with us the charms and secrets that Antwerp has to offer after sunset. Look at Antwerp’s past and present from a different perspective. Start your walk on Grote Markt Square, where you can dive into the old and dark medieval days. Admire Baroque churches and brush up on history, arts, and architectural styles. Move on to the bustling nightlife of the city in the Red Light District. Listen to the gripping stories about the giants, crime, and prostitution that you have never heard before. Enter the modern part of Antwerp and finish your tour admiring the stunning night views of the illuminated city, including the second-largest harbor in Europe.</p>\n<p>In every city, the best sightseeing happens after dark. Antwerp is no exception. Are you one of those who love uncovering the dark sides of cities? You are in for a treat! Discover Antwerp’s old legends, spooky stories, and hidden secrets on our free evening tour.</p>",
    "highlightsTitle": "- Grote Markt\n- Het Steen Castle\n- Butcher's Hall\n- St. Paul's Church\n- Red Light District\n- The Old Port\n- MAS Museum",
    "highlightsDescription": "- Antwerp's main square, where you can dive into the city's dark medieval history after sunset.\n- A medieval fortress on the river Scheldt, tied to local legends of giants and spooky stories.\n- The impressive 16th-century guildhall of the butchers, an architectural highlight of medieval Antwerp.\n- A stunning Baroque church housing masterpieces by famous Antwerp painters like Rubens and Van Dyck.\n- The city's historic neighborhood, known for its bustling nightlife and intriguing stories of crime and prostitution.\n- The historic heart of Europe's second-largest harbor, offering stunning illuminated nighttime views.\n- A modern architectural landmark in the old port, representing the contemporary side of the city.",
    "photoIds": [
      "23779",
      "23815",
      "23785",
      "23791",
      "23797",
      "20388"
    ]
  },
  {
    "city": "Antwerp",
    "name": "Welcome to Antwerp! Old Town Guided Walking Tour",
    "short": "A historical introduction to Antwerp’s rise as a global port, finance, printing and art hub, set in the historic city centre: we cover Grote Markt, the Cathedral of Our Lady, Museum Plantin-Moretus, the Old Bursary and Rubens House, tracing the story from Golden Age trade to today’s fashion scene.",
    "long": "<p>Antwerp, an ancient Roman settlement, rose into power when the old order was passing away and a new era was setting in – an era of discovery! The whole world was beginning to look in a different direction. The old, Mediterranean routes were losing their importance and this is when Antwerp conquered the scene with a bang! It became a European window to the newly discovered lands of America and new sea routes to Africa and Asia, a port through which unimaginable wealth flowed. Textiles, silver and diamonds, pepper, cinnamon and sugar were the foundation of the city’s richness. It was here that the new method of diamond polishing was created and Antwerp became (and remains to this day) the diamond capital of the world. Merchants from every corner of the world were streaming into the city wanting their share of these riches thus making Antwerp a cosmopolitan hub and an economic centre of the world. A centre that was able to lend money (on interest of course) to almost everyone, individuals, and countries alike. Its cosmopolitan character and tolerance attracted those who were not welcomed in other places because of their religion – Jews. This international community of merchants needed just one thing – an easy way of exchanging money and goods. This is how the first in the world, especially built, commodity exchange came into being. The wealth of the city attracted not only merchants but also many great painters, among them the famous Pieter Bruegel. They all knew that Antwerp had the resources to pay well (or pay anything) for their talent. There was a time when so many artists lived in Antwerp that there was one painter for every 250 residents!</p>\n<p>But such a sudden explosion of prosperity couldn’t and didn’t last long, soon Antwerp was knocked off its high pedestal. Then came the usual suspects: war, fire and bloodshed. In more recent times Napoleon envisioned Antwerp as the greatest port in Europe but with the Battle of Waterloo he failed to implement this (as well as other) plan. Nevertheless when the new Belgian state emerged, Antwerp proved vital for it. Following its great past, today’s Antwerp is the cool kid – the centre of fashion and avant-garde art, a place where every artsy type wants to hang out! Discover with us the remarkable city of Antwerp and get to know its amazing vibe!</p>",
    "highlightsTitle": "- Grote Markt\n- Charles Borromeo Church\n- Cathedral of Our Lady\n- Diamond Capital\n- Rubens House\n- Museum Plantin-Moretus\n- Vlaeykensgang\n- MoMu Fashion Museum",
    "highlightsDescription": "- The city's central market square surrounded by magnificent guildhalls and the city hall.\n- A stunning example of Baroque architecture, with a facade designed by Rubens.\n- A majestic Gothic cathedral dominating the city skyline, housing masterpieces by Rubens.\n- Learn why Antwerp became the world’s centre for diamond cutting and trading.\n- The former home and studio of the world-famous Baroque painter Peter Paul Rubens.\n- A UNESCO World Heritage site dedicated to the history of printing and typography.\n- A secret, picturesque medieval alley that will transport you back in time.\n- A world-renowned museum showcasing Antwerp’s status as an international fashion hub.",
    "photoIds": [
      "20825",
      "20844",
      "20838",
      "20388"
    ]
  },
  {
    "city": "Athens",
    "name": "Alternative Athens: Street Art & Counterculture",
    "short": "Contemporary Athens and its counterculture: we trace protest, street art and alternative scenes across Gazi and Psiri to the university area – Technopolis, Psiri murals by Ino, Achilles and Sonke, the Loukanikos memorial, the occupied Embros Theatre and Athens University (1974 anti-junta protests) – linking recent crises to daily life.",
    "long": "<p>Modern Athens is many things, but most of all a city of contrasts! Beyond its ancient temples and classical heritage lies a vibrant metropolis brimming with radical art and underground culture fuelled by the tales of resilience. The centuries of upheaval – from Ottoman rule and Nazi occupation to military coups and the European Debt Crisis – has been rocking and throwing the city in every direction, causing Athens to emerge as a hub for alternative lifestyles, protest movements, and cutting-edge creativity. Intrigued? Join us to explore the underbelly of the Greek capital!</p>\n<p>During this unique journey, we will step beyond the tourist hotspots to explore the raw, authentic side of Athens and delve into its lesser-known stories and hidden treasures. We will start the tour by exploring the industrial jungle of <strong>Technopolis in Gazi</strong>, a former gasworks turned into a cultural hotspot, surrounded by an industrial landscape now alive with art and innovation. We will see and decipher for you some of the <strong>boldest graffiti and most famous European street art</strong> created by renowned artists like Ino, Achilles, and Sonke, that define the alternative Psiri district. We will learn the story of <strong>Loukanikos, the Athenian Riot Dog</strong>, a symbol of protest and solidarity during the city’s struggles. We will visit the <strong>occupied Embros Theatre</strong>, a reclaimed cultural space emblematic of Athens’ counterculture spirit and stand at <strong>Athens University</strong>, where the 1974 anti-junta protests marked a turning point in Greek democracy. Finally we will explore the impact of the Eurozone Crisis and Neo-Nazi movements, and see what it’s really like to walk the streets as an Athenian. This tour is perfect for travellers seeking an insider’s perspective – one that goes beyond ancient ruins and reveals the pulse of Athens’ contemporary soul. It’s an opportunity to witness how Athens tumultuous past has shaped its dynamic present, its creativity, resilience, and defiance that have come to define this extraordinary city.</p>\n<p>Join our <strong>Alternative Athens: Hidden Gems and Forgotten Stories</strong> tour and step away from the beaten path. Instead set on a journey deep into the heart of a city that thrives on creativity and rebellion. Book your spot today and discover its industrial past, marvel at its bold street art, and feel the spirit of Athens, a city constantly reinventing itself!</p>",
    "highlightsTitle": "- Technopolis in Gazi\n- Psiri Street Art\n- Loukanikos the Riot Dog\n- Embros Theatre\n- Athens University\n- Modern Greek Protests",
    "highlightsDescription": "- A former industrial gasworks complex transformed into a vibrant cultural and arts centre.\n- Bold graffiti and murals by famous European artists in the alternative Psiri district.\n- A memorial to the stray dog who became a symbol of Greek protests.\n- An occupied and reclaimed cultural space emblematic of Athens’ vibrant counterculture spirit.\n- The historic site of the 1974 student uprising against the military junta.\n- Stories of recent upheavals, from military coups to the European Debt Crisis.",
    "photoIds": [
      "40070",
      "40112",
      "40194",
      "40200",
      "40182",
      "40206",
      "40188"
    ]
  },
  {
    "city": "Athens",
    "name": "A Taste of Athens: Greek Cuisine",
    "short": "Culinary tour of Athens centered on Greek food traditions in and around the Athens Central Market; we taste specialties and meet producers at the market halls, a family-run honey store, an olive oil producer, a spice shop and a street meze taverna.",
    "long": "<p>Discover the Flavours of Athens and Experience a Culinary Journey Through Time</p>\n<p>Greek cuisine, deeply rooted in tradition and history, has long been celebrated as one of the world’s most remarkable. From the simple, yet delicious, dishes of everyday life to the legendary ambrosia and nectar—the mythical food of the gods—Greek cuisine has always been about quality ingredients, rich flavors, passion and shared experiences. Now, visiting Athens, you have the unique chance to go beyond the typical tourist spots and treat yourself with the authentic tastes of Greece. Join us and explore the markets, meet passionate local producers, and discover the secrets behind the dishes that have been enjoyed here for centuries!</p>\n<p>At the heart of our tour lies the bustling Athens Central Market, a place where tradition meets everyday life. For over 130 years, this place has been the city’s main source of fresh ingredients, supplying households and tavernas alike. Imagine stalls overflowing with plump olives, golden olive oil, fragrant herbs, freshly baked bread, and the finest meats and seafood. From sweet, floral honey harvested by Greek beekeepers to thick, creamy yoghurt and the famous tangy feta cheese, every product tells us a story of excellent craftsmanship and passion. As we walk through the market’s historic alleys, you’ll get a true taste of Greece and Athens—one bite at a time.</p>\n<p>Our guides, local Athenians, will lead you through these wonders, sharing insights into the history and cultural significance of the foods you’ll encounter, enriching your understanding of Greece’s culinary landscape.</p>\n<p>No matter if you’re a seasoned foodie or simply eager to explore new tastes, this tour will be a journey right into the heart of Athens’ food culture. Book your spot today and discover the flavors, aromas, and stories that define this remarkable city!</p>\n<p>We accommodate various dietary preferences, including vegetarian, vegan, gluten-free, and lactose-free options. Please inform us of any dietary requirements when booking.</p>\n<p>Please note that if you book a tour starting after 3.30pm from Monday to Saturday or anytime on Sunday, the markets are closed. Instead we will visit two traditional tavernas, a fantastic delicatessen, spice shop, as well as a honey and olive producer.</p>",
    "highlightsTitle": "- Athens Central Market\n- Greek Delicacies Tasting\n- Olive Oil Producer\n- Family Honey Store\n- Traditional Meze Taverna\n- Greek Cheeses & Yoghurt",
    "highlightsDescription": "- A bustling, historic market that has been the city’s culinary heart for over 130 years.\n- An opportunity to sample over 20 authentic specialties, from savory pies to succulent souvlaki and olives.\n- Meet a local producer to discover the secrets behind Greece’s award-winning extra virgin olive oil.\n- Visit a family-run shop to taste different honey varieties and learn about local beekeeping traditions.\n- Enjoy a meal at a traditional street taverna, dining on authentic local dishes like the Athenians do.\n- Taste tangy feta cheese and thick, creamy yoghurt, staples of the renowned Greek culinary tradition.",
    "photoIds": [
      "41695",
      "41713",
      "41725",
      "41707",
      "41701",
      "41731",
      "41755",
      "41737",
      "41719",
      "41749",
      "41683"
    ]
  },
  {
    "city": "Athens",
    "name": "Athens Private Custom Tour",
    "short": "Private, tailor-made tour: we set the start time and shape the route around your interests—city highlights or focused themes such as for example the birth of democracy and philosophy, Roman invasion, Ottoman rule or Nazi occupation. We adjust the pace and scope to you and can plan across any district you wish to cover.",
    "long": "<p>Private tour is a great opportunity for people who have limited time and cannot join our regular FREE walking TOURs or simply prefer staying in a small group of friends.</p>\n<p>It is you who chooses when the tour should start and what should be its topic. If you are not sure what do you want to visit during the tour, let us know and we will help you plan the tour that fits best your needs and interests.</p>\n<p>What is more, you do not have to worry about finding the guide at the meeting point – they can meet you in any place in the city or pick you up from your hotel. You don’t have to follow our strict schedule of regular tours, we can make a tour according to your needs.</p>\n<p>For more information please <strong><a href=\"https://freewalkingtour.com/contact/\">contact us</a></strong>.</p>",
    "highlightsTitle": "- Private Group\n- Flexible Start Time\n- Custom Tour Topic\n- Personalized Itinerary\n- Convenient Pickup\n- Personal Guide",
    "highlightsDescription": "- Enjoy a tour exclusively for you and your group of friends or family.\n- You decide the most convenient time for your private tour to begin.\n- Choose the theme of your tour based on your personal interests.\n- We help you plan a tour route that perfectly matches your needs and interests.\n- Your guide can meet you anywhere in the city, including at your hotel.\n- Benefit from the undivided attention and expertise of your own dedicated guide.",
    "photoIds": [
      "41936",
      "40131",
      "40064",
      "40058",
      "40052"
    ]
  },
  {
    "city": "Athens",
    "name": "Welcome to Athens! Old Town Guided Walking Tour",
    "short": "Introduction to Athens, its history and culture. We cover Athens’ history from antiquity to today in the historic centre beneath the Acropolis and through Plaka; we see the Acropolis and Parthenon (outside), Ancient Agora, Temple of Hephaestus, Hadrian’s Library, as well as the Evzones.",
    "long": "<p>Athens, as timeless as its myths, welcomes you to discover its rich history, culture, and inspiring stories of resilience. From the divine rivalry between Athena and Poseidon to its role as the birthplace of democracy, philosophy, and the modern Olympics, it is like a treasure trove filled with thousands of stories, spanning over thousands of years. Let’s discover it together!</p>\n<p>Nestled beneath the majestic Acropolis, Athens has been shaped by gods and mortals alike, witnessing the rise and fall of empires, enduring invasions, and thriving against all odds. Its story starts with the mythical rivalry of Athena and Poseidon. The gods vied for the honor of becoming the city’s patron. Poseidon struck the earth with his trident, creating a spring symbolizing naval power. Athena planted an olive tree, embodying prosperity, peace, and sustenance. Her gift won the hearts of the people, and thus, Athens was born, named after the goddess of wisdom. It reached the zenith of its development in the 5th century BC under the rule of Pericles becoming the cradle of Western civilization, fostering great minds like Plato and Aristotle and monumental achievements in philosophy, science, and the arts. The Peloponnesian War marked the decline of Athens’ dominance, leaving it vulnerable to Roman conquest in 86 BC, which in turn brought the astounding building projects under its new Emperor Hadrian. Spreading Christianity reshaped Athens under Byzantine rule. Ancient temples were transformed into churches, only to later become mosques under the Ottoman Empire which lasted four centuries, until a hard-fought war of independence that led to Greece’s liberation in 1829. Athens entered a new era under King Otto, a Bavarian prince installed by Europe’s great powers. Seeking to revive Athens’ classical glory, he laid the groundwork for the first modern Olympics in 1896. Despite 20th-century turmoil, including wars, dictatorship, and a financial crisis, Athens continues to thrive embracing its rich history while forging its vibrant contemporary identity.</p>\n<p>Join us on the <strong>Welcome to Athens</strong> tour, the perfect introduction to this mesmerising city. Together, we’ll take a walk through the ages, from the ancient Athenians to modern-day Greece, uncovering stories of triumph, conflict, and rebirth. Whether it’s your first visit or your fifth, the <strong>Welcome to Athens tour</strong> will leave you inspired by the city’s remarkable past and its enduring spirit. With our expert guides and amazing stories, you’ll walk away with unforgettable memories and a deeper appreciation for the cradle of civilization. Book your spot today, and let’s walk through history together!</p>",
    "highlightsTitle": "- The Monument of Lysikrates\n- Acropolis & Parthenon\n- Ancient Agora\n- Temple of Hephaestus\n- Roman Agora\n- Tower of the Winds\n- The Evzones\n- Hadrian's Library\n- Plaka District",
    "highlightsDescription": "- A model for the world architecture\n- The ancient citadel and its iconic temple, symbols of Athens' Golden Age and Western civilization.\n- The heart of classical Athens, a hub for commerce, politics, and philosophical debates.\n- The world's best-preserved ancient Greek temple, dedicated to the god of craftsmanship and fire.\n- The city's central market during the Roman period, with the impressive Gate of Athena Archegetis.\n- An ancient octagonal clocktower and meteorological station, an early marvel of scientific engineering.\n- Greece's elite Presidential Guard, known for their unique uniforms and ceremonial changing of the guard.\n- A grand Roman-era complex built to house books and serve as a centre for learning.\n- The historic \"Neighborhood of the Gods,\" with charming streets, local shops, and traditional tavernas.",
    "photoIds": [
      "40102",
      "40070",
      "40039",
      "40064",
      "40058",
      "40131"
    ]
  },
  {
    "city": "Athens",
    "name": "Women in Ancient Greece Guided Walking Tour",
    "short": "Women in Ancient Greece is our theme: we walk Athens’ ancient centre through a female perspective and daily life, linking myth and history while visiting Hadrian’s Library, the Gate of Athena, the Ancient Agora and the Pnyx, and finishing below Filopappou Hill.",
    "long": "<p>What was the daily life of a wife, a slave or a prostitute? Why were Spartan girls kidnapped? What happened during the mysterious women’s festival in Athens?</p>\n<p>Walking in the ancient city with your guide, you’ll immerse yourself in the daily life of an Ancient Greek woman. Follow in the footsteps of legendary women like Sappho, Aspasia, and Agnodice, who defied societal expectations and became leaders, philosophers, doctors, and poets. Discover how Greek mythology influenced women’s roles through the stories of Athena, Penelope, Demeter, and the enigmatic Pandora.</p>\n<p>Come and discover for yourself the extraordinary legacy of Women in Ancient Greece!</p>",
    "highlightsTitle": "- Monastiraki Square\n- Women's Daily Life\n- Legendary Greek Women\n- Mythological Heroines\n- Ancient Agora\n- Pnyx Hill\n- Acropolis View\n- Secret Women's Festivals",
    "highlightsDescription": "- One of Athens’ liveliest squares, surrounded by colorful shops, cafes, and ancient ruins.\n- Explore the everyday lives and societal roles of women in the patriarchal world of ancient Greece.\n- Follow the footsteps of leaders, philosophers, and poets like Sappho, Aspasia, and Agnodice.\n- Uncover how goddesses like Athena and heroines like Penelope shaped the perception of women.\n- Visit the heart of ancient Athens, the central public space, from a female perspective.\n- Stand where democracy was born and learn about women's exclusion from the political process.\n- Admire a fantastic panoramic view of the iconic Acropolis, dedicated to the goddess Athena.\n- Learn about the mysterious all-female rituals and festivals that were held in ancient Athens.",
    "photoIds": [
      "44175",
      "44247",
      "44235",
      "44193",
      "44229",
      "44187",
      "44217",
      "44205",
      "44241"
    ]
  },
  {
    "city": "Barcelona",
    "name": "Welcome to Barcelona! Old Town and Gothic Quarter Guided Walking Tour\n",
    "short": "Join us today where history and culture meet the Mediterranean and be enchanted by the contrast between the winding streets of the Gothic Quarter and the orderly Eixample, where past and present coexist seamlessly.",
    "long": "<p>They say Barcelona was founded by either mythological Hercules or Carthaginian general Hamilcar Barca, father of Hannibal, one of the greatest military commanders of all times. So much the legends, the truth is that the city was a political center of the Catalan region for at least 2000 years since the Romans built their city there. Walking around the Barri Gotic, the Gothic Quarter you still see old walls and the grid of streets typical for Roman cities. An excellent harbour and a beautiful setting made Barcelona develop fast. The Old Town bears traces of all the powers that ruled it through the ages: the Romans, the Visigoths, the Moors and the Aragones. The concept of the city changed at the turn of the 19th and 20th century when Barcelona went through rapid urban development, architectural remodeling and became a center of a fascinating architectural style called Catalan modernism known around the world because of the works of the ingenious Antoni Gaudi. Standing against Francisco Franco Barcelona was devastated and severely punished. It was here, living opposite Franco, that George Orwell wrote his memoirs “Homage to Catalonia.” The development of the city was accelerated by the organization of the 1992 Summer Olympics (the Barcelona effect!). Today it is one of the most popular cities in the world combining rich history, culture, amazing works of artists like Pablo Picasso and Joan Miró and all the joys of the Mediterranean coast.</p>\n<p>Walk with us through the labyrinth of small, winding streets and tranquil plazas of the Barcelona Old Town to discover its fascinating history, culture, dining and drinking scene. Take a chance to see the residence of Aragonese kings, seat of the Catalan government, ancient churches and palaces as well as one of the oldest synagogues in Europe. The Old Town went through some substantial restoration works in the late 19th and early 20th century and from a humble district changed into a major tourist destination. Hence, next to original Roman and medieval structures you will see some modern and neo-Gothic ones, like the beautiful Bishop’s Bridge or the facade of Barcelona Cathedral. All forming a unique and charming mix waiting there to be admired!</p>",
    "highlightsTitle": "- Placa de Sant Miquel, behind the City Hall of Barcelona\n- Gothic Quarter\n- Casa Batlló\n- Casa Amatller\n- Casa Lleó i Morera\n- Plaça Catalunya\n- Las Ramblas\n- King’s Square\n- Bishop’s Bridge\n- Sant Jaume Square\n- Plaça Nova\n- Barcelona Cathedral\n- Palau de la Generalitat",
    "highlightsDescription": "- A famously oval square filled with impressive architecture\n- A maze of narrow streets, Roman ruins, and medieval charm that tells the city’s 2,000-year-old story\n- Gaudí’s colorful masterpiece, inspired by nature and myth, where bones, scales, and light dance together in a unique architectural symphony.\n- A Modernist gem by Josep Puig i Cadafalch, blending neo-Gothic detail with the elegance of early 20th-century bourgeois Barcelona.\n- An Art Nouveau marvel by Lluís Domènech i Montaner, celebrated for its lavish mosaics, sculpted lions, and floral motifs.\n- The heart of the city — a lively square connecting old and new Barcelona, always buzzing with people, pigeons, and energy.\n- The city’s most famous promenade, full of life, colors, flowers, and street performers — the pulse of everyday Barcelona.\n- A perfectly preserved medieval square that once hosted royal audiences and echoes with tales of the Crown of Aragon.\n- A neo-Gothic bridge connecting two historic buildings — mysterious, photogenic, and wrapped in urban legend.\n- The political heart of Catalonia, framed by City Hall and the Palau de la Generalitat — where past and present meet in debate.\n- An ancient square by the Roman gates of Barcino, where centuries of history converge with lively modern culture.\n- A stunning Gothic cathedral dedicated to Saint Eulalia, crowned with spires and filled with light, legends, and singing geese.\n- Seat of the Catalan government since the Middle Ages, an architectural treasure symbolizing Catalonia’s enduring identity.",
    "photoIds": [
      "19105",
      "47078",
      "19120",
      "19115",
      "19148"
    ]
  },
  {
    "city": "Barcelona",
    "name": "El Raval, the Forbidden Barcelona Guided Walking Tour",
    "short": "History and culture of Barcelona’s El Raval – from the former “Barrio Chino” to today’s street-art scene; we cover Rambla del Raval and MACBA, Casa de la Misericordia and its “vampire” tale, Botero’s Cat, and Gaudí’s Palau Güell.",
    "long": "<p>Enter with us what was once the forbidden and most infamous of all the Barcelona districts. Discover the notorious El Raval!</p>\n<p>Areas close to ports had forever been known for their bad reputations, and El Raval was not any different. Factories, workers, immigrants, sailors, prostitutes, alcohol, crime and murder were what once defined this neighbourhood. Because of all the social problems and difficulties, it was often called the Barrio Chino – the Chinatown of Barcelona. But those days are long gone, now El Raval is the hottest place in the city, a cool bohemian zone full of street and urban art, where all the artists and creative spirits are streaming to. It is also a place where Barcelona’s nightlife pulsates, where you can find some of the best bars and pubs in the city!</p>\n<p>The city council had its fair share of improving the living conditions of the neighbourhood by creating new streets like the Rambla del Raval and institutions like the Museum of Contemporary Art that changed the way people perceive it.</p>\n<p>During our tour, we will discover both the past and present of El Raval. We will delve into its dark days to talk about Casa de la Misericordia, old, ivy-covered orphanage and its peculiar history or the figure of the infamous vampire of El Raval accused of prostituting and slaying young children. We will also introduce you to the present day life and culture of the area full of shops, galleries, modern art and murals.</p>\n<p>Interested? Intrigued? Come with us to discover all the flavours of the coolest district of Barcelona!</p>",
    "highlightsTitle": "- Barrio Chino\n- Vampire of Raval\n- Casa de la Misericordia\n- Palau Güell\n- Botero's Cat\n- Urban Art Scene\n- La Boqueria Market",
    "highlightsDescription": "- Discover the notorious past of El Raval, once Barcelona's most infamous and dangerous neighbourhood.\n- Hear the terrifying story of a serial killer who became a dark local legend in the city.\n- Uncover the peculiar history of the neighbourhood's old and mysterious ivy-covered orphanage.\n- See one of the earliest architectural masterpieces designed by the legendary Antoni Gaudí.\n- Meet the charming, chubby cat sculpture that has become an icon of the modern El Raval.\n- Explore the area's vibrant culture through its many colourful murals and modern street art.\n- Get directed to Barcelona's most famous and bustling food market on the edge of the district.",
    "photoIds": [
      "19234",
      "19229",
      "19099"
    ]
  },
  {
    "city": "Barcelona",
    "name": "Gaudí, Sagrada Familia & Modernism Guided Walking Tour",
    "short": "We focus on Catalan modernism in central Barcelona: from Plaza Cataluña into Eixample along Passeig de Gràcia and the Manzana de la Discordia – Casa Batlló, Casa Amatller, Casa Lleó Morera – then Gaudí’s La Pedrera and Sagrada Família.",
    "long": "<p>In those days, at the turn of the 19th and 20th century, Barcelona was changing rapidly. The city was going through spectacular urban development. The fast industrialization resulted in giant fortunes being made in the blink of an eye. The modern city was forming, based on the new ideas fuelled by the movement of the Catalan cultural revival. It expressed itself in many fields of art: poetry, painting, sculpting and theatre, but most of all in architecture and decorative art.</p>\n<p>Barcelona was right in the heart of the Catalan modernist movement. With the money coming from affluent families who wanted their houses decorated in the most opulent style and some of the most creative minds in the history of architecture, it was here that the greatest masterpieces of this era were created. The best known architect who made Barcelona modernism immortal was of course Antoni Gaudí.</p>\n<p>Join us and let’s discover together the style that makes Barcelona different and unique compared to all the other cities in the world. Let us introduce you to the one and only Catalan modernism!</p>",
    "highlightsTitle": "- Plaça de Catalunya\n- Catalan Modernism\n- Eixample District\n- Passeig de Gràcia\n- Apple of Discord\n- Casa Batlló\n- La Pedrera\n- La Sagrada Família",
    "highlightsDescription": "- A famous square representing Catalan architecture\n- An artistic movement expressing Catalan identity through unique architecture inspired by nature.\n- A modern neighbourhood famous for its unique grid pattern and modernist buildings.\n- One of Barcelona's most important avenues, lined with architectural masterpieces.\n- A city block showcasing competing buildings by Barcelona’s most renowned modernist architects.\n- Gaudí's surrealist masterpiece with a facade resembling a dragon, built with almost no straight lines.\n- An iconic Gaudí building with a stone-like facade resembling a cliff sculpted by waves.\n- Gaudí's genius, unfinished basilica, the undisputed symbol of Barcelona.",
    "photoIds": [
      "19173",
      "19158",
      "19168",
      "19099"
    ]
  },
  {
    "city": "Barcelona",
    "name": "Barcelona: Spanish Civil War Guided Walking Tour",
    "short": "History of the Spanish Civil War in Barcelona. We follow the 1936 uprising, rival factions, and repression through Plaça de Catalunya and the Old Town, with Orwell’s references, traces of bomb damage, and visits to La Rambla, Plaça de Sant Jaume, and Plaça de Sant Felip Neri.",
    "long": "<p>Standing today in the bustling Plaça de Catalunya, watching tourists from all around the world pass by, it is quite hard to imagine that this was just the place where on July 19th, 1936 the first shots were fired in what was to become the Spanish Civil War.</p>\n<p>On one side were the Nationalists, supported by conservative elements, the military, land owners, and the Catholic Church supported by fascist Italy and Nazi Germany. On the other side were the Republicans, workers, peasants, and supporters of progressive, secular, and democratic government, along with anarchists and communists supported by the Soviet Union and international volunteers, including the famous International Brigades. It began with a failed military coup against the Spanish Republic, led by a group of nationalist under General Francisco Franco. The spiral of violence wound up quickly, marking the war by widespread violence and atrocities on both sides, with the bombing of Guernica in 1937 by German and Italian air forces being one of the most notorious incidents. The war ended in 1939. Franco entered the capital and declared victory. His dictatorship lasted until 1975, the year of his death. Hundreds of thousands of Spaniards fled to refugee camps in southern France. Those associated with the losing Republicans who stayed were persecuted and murdered.</p>\n<p>The war was not only a pivotal event in Spanish history, dividing the country both geographically and ideologically, but had significant international implications, influencing global politics in the lead-up to World War II. It also mobilized many artists and intellectuals to take up arms. Among the most notable artistic responses were George Orwell’s memoir <em>Homage to Catalonia</em> (1938) and Pablo Picasso’s painting <em>Guernica</em> (1937). The echoes of the war are also heard in The Clash’s song “Spanish Bomb” (1979).</p>\n<p>Join our tour and learn why Barcelona was once known as the most explosive and revolutionary city in Europe! Get to know how and why the war began, who the fighting groups were and how was to live under Franco’s dictatorship. Our guides will explain how both the war and the dictatorship finally ended and make you understand the important role of the women before, during and after the war. Join us to understand the war that had grave implications not only on Spain, but the world at large!</p>",
    "highlightsTitle": "- Plaça de Catalunya\n- The Spanish Civil War\n- Franco's Dictatorship\n- George Orwell's Barcelona\n- Old Town Battlegrounds\n- Bombing Remnants\n- Women in the War",
    "highlightsDescription": "- The site where the first shots of the Civil War were fired in Barcelona in 1936.\n- Understand the conflict between Republicans and Nationalists that deeply divided Spain.\n- Learn about life in Spain under the repressive 40-year regime that followed the Civil War.\n- Visit locations from the author's famous memoir about the war, 'Homage to Catalonia'.\n- Explore the narrow streets of the Old Town which became the main urban battlefields.\n- See the lasting scars on buildings from the wartime aerial bombings of the city.\n- Discover the crucial and often overlooked role women played throughout the conflict and its aftermath.",
    "photoIds": [
      "30796",
      "30802",
      "30808",
      "30814",
      "30820"
    ]
  },
  {
    "city": "Berlin",
    "name": "Alternative Berlin: Street Art & Counterculture Guided Walking Tour",
    "short": "The story of Berlin’s alternative scene and street art. We explore Mitte, Kreuzberg, and the Spree riverfront, stopping at Haus Schwarzenberg, the Treehouse at the Wall, Holzmarkt, and YAAM, while tracing the rise of squats, the music scene, and the city’s multicultural communities.",
    "long": "<p>Big beautiful churches, nice Baroque palaces, grand theatre buildings, and many other places… that you will NOT see on this tour! 😉 Why? Because Berlin is way more than that. Berlin is a European capital of alternative lifestyle and street art! So on this tour, you will explore very different aspects of the German capital. You will be taken to various corners and nooks where most tourists never go.</p>\n<p>After this 3-hour tour, you will discover a new city of Berlin. You will know why it is called a “cultural melting pot”. You will learn about the impact of Berlin’s music scene. Furthermore, you will be able to decipher some hidden messages of different graffiti and murals around the city. You will witness squat life very close to the centre of Berlin.</p>\n<p>Our Alternative Berlin tour will allow you to feel the true vibe of Berlin!</p>\n<p><strong>Attention! An AB Single ticket is needed for this tour!</strong></p>\n<p>Please be informed that the exact tour can vary, depending on the guide.</p>",
    "highlightsTitle": "- Haus Schwarzenberg\n- Street Art & Graffiti\n- Treehouse at the Wall\n- Kreuzberg District\n- YAAM\n- Holzmarkt",
    "highlightsDescription": "- A unique courtyard showcasing independent art, studios, and vibrant alternative culture.\n- Learn to decipher hidden messages within Berlin's world-famous murals and urban art scene.\n- A quirky, self-built house on a former no-man's land strip of the Berlin Wall.\n- A vibrant, multicultural area known for its alternative scene, street art, and lively atmosphere.\n- Young African Arts Market, a cultural hub with music, art, and food on the Spree river.\n- An urban creative village on the Spree with clubs, restaurants, art spaces, and a community garden.",
    "photoIds": [
      "48908",
      "42172",
      "15564",
      "15603",
      "48916",
      "48889",
      "15609",
      "48897",
      "48907"
    ]
  },
  {
    "city": "Berlin",
    "name": "Berlin: Communist & Socialist Guided Walking Tour",
    "short": "Historical tour of communism and socialism in Berlin. We trace German communism from Marx and Engels to the GDR and beyond across Mitte and Friedrichshain – visiting the Marx-Engels Forum, Liebknecht Balcony, Karl-Marx-Allee, Frankfurter Tor, and the Berlin Wall’s East Side Gallery.",
    "long": "<p>What comes to your mind when you’re in Berlin and someone says “communism”? The Wall? GDR? Hotspot of the Cold War?</p>\n<p>All of these things are an important portion of our tour, but they’re only a part of the topic called “communism &amp; socialism.” So our goal is more ambitious than just showing you the Berlin Wall and mentioning a couple of chapters of the Cold War history. We want to give you a holistic understanding of one of the most revolutionary and controversial ideological movements in world history.</p>\n<p>How? By way of having a chronological journey from the 19th to 21st century and covering all the main chapters of the history of German communism. You will learn about the fathers of communist ideas – K. Marx &amp; F. Engels and what they really taught about. You’ll hear the story of R. Luxembourg &amp; K. Liebknecht and understand their role in a political struggle that tore German society apart 100 years ago and thus also helped A. Hitler rise to power. You’ll see and compare the Soviet model of socialism exported to Germany after WWII: you’ll experience it architecturally, grasp it geopolitically and perceive it through people’s life stories. Finally, we’ll talk about leftwing movements today.</p>\n<p>After this 3 hours Walkative journey, you’ll form a historical Gestalt of communist &amp; socialist ideas! Both in Germany and Europe (and even beyond). Both before and after WWII. Long before and long after.</p>\n<p><strong>This tour requires an AB Single ticket.</strong></p>",
    "highlightsTitle": "- Marx-Engels Forum\n- Liebknecht Balcony\n- Karl-Marx-Allee\n- Frankfurter Tor\n- The Berlin Wall\n- Cold War History",
    "highlightsDescription": "- A memorial dedicated to Karl Marx and Friedrich Engels, the fathers of communist ideas.\n- The historic balcony from which a Free Socialist Republic was proclaimed in Germany in 1918.\n- A monumental socialist boulevard showcasing the most impressive Stalinist architecture in East Germany.\n- Two landmark towers representing the architectural development of socialist ideas in the former GDR.\n- The longest remaining section of the notorious border that once divided East and West Berlin.\n- Discover Berlin's role as a geopolitical hotspot during the decades-long standoff between East and West.",
    "photoIds": [
      "12272",
      "48923",
      "30898",
      "48940",
      "48953",
      "48928",
      "48937",
      "48938"
    ]
  },
  {
    "city": "Berlin",
    "name": "Taste of Berlin: Kreuzberg Food & Culture Tour",
    "short": "Food tour of Berlin’s multicultural cuisine in Kreuzberg. We make seven food stops from a family bakery to street-food stalls, tasting currywurst, Turkish gözleme, falafel with peanut sauce, alpine cheeses, German wine, and Berlin beer, finishing by the Berlin Wall in a cozy beer hall.",
    "long": "<p>You think of Germany and with eyes of imagination you see the Brandenburg Gate, Bavarian leather pants and beer… Well, we have to admit that Germany is not famous for its cuisine. It’s high time to change that! Berlin is one of the most international cities in the world, with a large Turkish, Polish, Syrian community and plenty of expats working here creatively and mentally. So where else can trends, including food trends, be concentrated, if not here? Each nationality has added something from itself to the local cuisine, making it a truly explosive mix!</p>\n<p>Join us on a tour organised by our partner Secret Food Tours, which will take you on a stroll through the streets of one of Berlin’s most trendy destinations – the Kreuzberg district. Over the course of 7 carefully selected food stops, you’ll have the opportunity to enjoy a diverse culinary experience accompanied with excellent local beer and wine. Yes, the Germans produce wine, and yes, it is truly delicious! We will end the tour right next to the Berlin Wall, in a small beer hall, where a secret dessert will be waiting for us!</p>\n<p>And after you’ve eaten your fill, why not join a historic tour? Come on <a href=\"https://freewalkingtour.com/tours/welcome-to-berlin/\">Welcome to Berlin</a> Free Tour to see and understand Berlin like locals!</p>\n<p>Thank you for choosing Walkative &amp; Secret Food Tours! If you have any further questions, please do not hesitate to contact us.</p>",
    "highlightsTitle": "- Kreuzberg District\n- Classic Currywurst\n- Turkish Gozleme\n- Alpine Cheeses & Meats\n- German Beer & Wine\n- Iced SpitzKugel\n- Secret Dessert",
    "highlightsDescription": "- Explore one of Berlin's trendiest and most multicultural destinations on a culinary journey.\n- Taste Berlin's most iconic street food—a sausage smothered in a special curry ketchup.\n- Try a savoury, orientally spiced pancake with meat or cheese, a local Turkish specialty.\n- Sample a curated selection of delicious German and Austrian cheeses and cured meats.\n- Enjoy excellent local beer from a Berlin brewery and surprisingly delicious German wine.\n- A unique Berlin pastry from a local family-run bakery to start your food adventure.\n- End the tour with a mysterious sweet treat waiting for you at a local beer hall.",
    "photoIds": [
      "21261",
      "21213",
      "21237",
      "21255",
      "21249",
      "21231"
    ]
  },
  {
    "city": "Berlin",
    "name": "Berlin Private Custom Tour",
    "short": "Private Berlin tour tailored to your interests: from a city introduction to Alternative Berlin, the Communist era, or WWII. We adapt the route to your needs, exploring key districts like Mitte, Kreuzberg, or Friedrichshain, and covering both iconic landmarks — Brandenburg Gate, Reichstag, Museum Island, Checkpoint Charlie, Berlin Wall — and hidden corners known mostly to locals.",
    "long": "<p>Ah, Berlin! From humble village beginnings to the capital of the mighty kingdom, then empire, through darkness and division of the Nazi and Communist eras and back to its glory as the defining capital of European culture, trends and fanciness – what a place to tell stories about!</p>\n<p>A private tour is a great opportunity for people who have limited time and cannot join our regular FREE walking TOURs or simply prefer staying in a small group of friends.</p>\n<p>It is you who chooses when the tour should start and what should be its topic. If you are not sure what do you want to visit during the tour, let us know and we will help you plan the tour that fits best your needs and interests.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including <a href=\"https://freewalkingtour.com/private-offer/\"> <strong>prices</strong> </a>, dates and booking rules.</p>\n<p>What is more, you do not have to worry about finding the guide at the meeting point – they can meet you in any place in the city or pick you up from your hotel. You don’t have to follow our strict schedule of regular tours, we can make a tour according to your needs.</p>\n<p>Let us know what kind of group are you (students, school group, seniors, group of friends, group of colleagues on a business trip, etc.) and what are your interests and we will do our best to prepare for you a tour that fits your needs and expectations.</p>\n<p><strong>LANGUAGES:</strong></p>\n<p>We can arrange private tours for you in different languages:</p>\n<p>English</p>\n<p>Spanish</p>\n<p>German</p>",
    "highlightsTitle": "- Welcome to Berlin\n- Third Reich History\n- Communist Berlin\n- The Berlin Wall\n- Alternative Berlin",
    "highlightsDescription": "- An introduction to Berlin's most iconic landmarks and its fascinating history from its origins to today.\n- Explore the rise and fall of Nazi Germany and its dramatic, lasting impact on the city.\n- Uncover the history of East Germany (GDR) and life behind the Iron Curtain during the Cold War.\n- Discover the story of the iconic symbol of division, its historic fall, and Germany's reunification.\n- Experience the city's vibrant counter-culture, famous street art scene, and unique modern subcultures.",
    "photoIds": [
      "11357",
      "14444",
      "17901",
      "13573",
      "15564",
      "28806",
      "48879",
      "48965"
    ]
  },
  {
    "city": "Berlin",
    "name": "Hitler's Third Reich & Nazi Berlin Guided Walking Tour",
    "short": "Historical tour of Nazi Berlin and WWII: we cover the former Jewish Quarter and the government district around the Reichstag and Brandenburg Gate, discuss propaganda and resistance, and see key sites – New Synagogue, Brandenburger Tor, Reichstag, Soviet War Memorial, Holocaust Memorial as well as memorials to other persecuted groups.",
    "long": "<p>Once the heart of Jewish life in Germany, Berlin’s landscape changed irreversably with the Nazi seizure of power. Within a matter of years, Europe’s most liberal and metropolitan city had been transformed into the capital of one of the most destructive regimes in human history: Hitler’s Third Reich, but also the birthplace of powerful forms of resistance – big and small.</p>\n<p>Join Walkative! Tours on ‘Hitler’s Third Reich: Nazi Berlin &amp; WW2’ to explore this dramatic shift in the history of the city, and trace the steps of the rise of the Third Reich to its final destructive vision.</p>\n<p>On this tour, we will go to the former Jewish quarter and learn about the thriving Jewish life here before 1933, and how it was soon lost. We will explore the former ministry district and Reichstag, and discuss the propaganda machine and glorification of the Fuhrer, and we will see, too, the memorials dedicated to the groups victimised by the Nazis – from the Roma and Sinti to the homosexuals.</p>\n<p>After this 3.5 hour tour, you will see how after rebuilding itself twice since the Second World War, Berlin became the city it is now: never hiding anything about its gruesome past, but openly trying to make amends and pay respect to the people who suffered here during that time.</p>\n<p><strong>AB Single ticket required (do not validate it before the tour).</strong></p>",
    "highlightsTitle": "- Former Jewish Quarter\n- New Synagogue\n- Brandenburg Gate\n- The Reichstag\n- Third Reich Ministries\n- Memorials to Victims\n- Soviet War Memorial",
    "highlightsDescription": "- Discover the centre of Jewish life in Berlin before its tragic destruction by the Nazi regime.\n- A symbol of Berlin's vibrant pre-war Jewish community and a testament to its resilience.\n- Learn how this iconic landmark was co-opted for Nazi propaganda during the Third Reich.\n- Site of the infamous fire that helped Hitler consolidate his power and end German democracy.\n- Walk through the government district that housed the central command of Hitler's totalitarian regime.\n- Pay respect at memorials dedicated to the many groups persecuted and murdered by the Nazis.\n- A monumental tribute to the Soviet soldiers who died during the final Battle of Berlin.",
    "photoIds": [
      "20088",
      "48965",
      "48964",
      "48886",
      "28794"
    ]
  },
  {
    "city": "Berlin",
    "name": "Sachsenhausen Concentration Camp – Guided Tour",
    "short": "WWII history tour at Sachsenhausen Memorial. We travel to Oranienburg to explore one of the Nazi regime’s model camps. We walk through the camp gate, roll-call square, barracks, prison block, and crematorium, combining the site’s layout with the individual prisoner stories that bring history to life.",
    "long": "<p>Sachsenhausen concentration camp was built in 1936 just outside the Third Reich capital Berlin. The idea was to design a model for all future camps in Nazi Germany. By the end of the Second World War, about 200,000 people were interned there, mostly political prisoners, “socially undesirable” (Jews, Roma and Sinti, homosexuals, Jehovah’s Witnesses) as well as Polish and Soviet citizens. At least 30,000 people were murdered in the camp, most of them were Soviet POWs. Today the former Nazi concentration camp is a museum and a memorial site. It is located in Oranienburg, a town some 35 km (22 mi) north of Berlin.</p>\n<p>Visiting Sachsenhausen is a meaningful experience for those interested in learning about the history of the Second World War and the Nazi regime. To better understand the context of your visit, we recommend joining our <a href=\"https://freewalkingtour.com/tours/welcome-to-berlin/\">Welcome to Berlin</a> and <a href=\"https://freewalkingtour.com/tours/berlin-communist-socialist-tour/\">Communist Berlin</a> free tours.</p>\n<p><strong>Requires two Single tickets ABC</strong></p>",
    "highlightsTitle": "- Sachsenhausen Memorial\n- A Model Camp\n- The Camp's Prisoners\n- Third Reich History\n- Fate of Soviet POWs\n- Scale of Atrocities",
    "highlightsDescription": "- A former Nazi concentration camp near Berlin, now a museum and a memorial site for its victims.\n- Discover the camp's design, which was intended as a blueprint for all future Nazi camps.\n- Learn about the diverse groups interned, including political opponents, Jews, Roma, Sinti, and homosexuals.\n- Understand the camp’s role within the Nazi regime and the history of the Second World War.\n- Uncover the story of Soviet prisoners of war, the largest group of victims murdered at the camp.\n- Grasp the scale of horror, with over 200,000 prisoners and at least 30,000 people murdered.",
    "photoIds": [
      "15657",
      "48981",
      "48983",
      "15645",
      "15651"
    ]
  },
  {
    "city": "Berlin",
    "name": "Welcome to Berlin! Historic Centre Guided Walking Tour",
    "short": "Introduction to Berlin, its history and culture. We trace the Prussian, Nazi, and Cold War eras on a walk through Mitte — starting at Alexanderplatz and the TV Tower, passing Museum Island, strolling along Unter den Linden, continuing to Checkpoint Charlie, pausing at the Memorial to the Murdered Jews of Europe, and finishing at the Brandenburg Gate.",
    "long": "<p>Ah, Berlin! From humble village beginnings to the capital of the mighty kingdom, then empire, through darkness and division of the Nazi and Communist eras and back to its glory as the defining capital of European culture, trends and fanciness – what a place to tell stories about!</p>\n<p>On our tour we will journey from the east to the west, crossing times, rivers and stories that, especially in the last 200 years, have shaped not only the city but the entire world. Let us tell you who that Alexander on the <em>Platz</em> was, is there really any medieval Berlin and what are the connections between American and German Martin Luthers. Add to that the Humboldt University, Checkpoint Charlie and our finishing point, the Brandenburg Gate with its memories from the time of the Wall and you will have learned the basics of Berlin’s identity.</p>\n<p>We will also revisit the stories connected with the darkest moments of the city, nation and Europe: Adolf Hitler’s rise to power and the resulting war and the Holocaust – the Jewish Memorial will remind us of the fragility of the world around us.</p>\n<p>On the upper note feel free to ask us about the local hip and party scene, many calling it the defining nightlife scene of Europe and the beginning of the world trends. Berlin has learned its lesson – let the feeling of inclusiveness, hundreds of cultures coexisting and shaping the world for better take you!</p>\n<p>After joining the general Berlin tour check out our <a href=\"https://freewalkingtour.com/tours/alternative-berlin/\">Alternative Berlin</a> and <a href=\"https://freewalkingtour.com/tours/berlin-communist-socialist-tour/\">Communist & Socialist</a> free tours to understand Berlin and its history much better!</p>",
    "highlightsTitle": "- Museum Island\n- Bebelplatz Book Burning\n- Humboldt University\n- Checkpoint Charlie\n- Hitler's Bunker Site\n- Holocaust Memorial\n- Brandenburg Gate",
    "highlightsDescription": "- A UNESCO site featuring five world-renowned museums and the magnificent Berlin Cathedral.\n- The historic square of the infamous 1933 Nazi book burning, with a unique underground memorial.\n- One of Germany's most prestigious universities, located on the historic Unter den Linden boulevard.\n- The most famous Cold War crossing point between East and West Berlin.\n- The former location of the Führerbunker where Adolf Hitler spent his final days in 1945.\n- A powerful memorial of concrete slabs commemorating the Jewish victims of the Holocaust.\n- Berlin's iconic landmark, a symbol of German division during the Cold War and joyous reunification.",
    "photoIds": [
      "48224",
      "11059",
      "15540",
      "48225",
      "48978",
      "48977",
      "48971",
      "48968",
      "48941"
    ]
  },
  {
    "city": "Bratislava",
    "name": "Bratislava: 20th Century & Iron Curtain Guided Walking Tour",
    "short": "20th-century history of Bratislava told in the city center: from WWI and Czechoslovakia through WWII, communist rule, the Iron Curtain and the Velvet Revolution. We cover key sites: Uprising Square (ex-Stalin Square), the Last Synagogue, the Slovak Radio Upside-Down Pyramid, and the Presidential Palace.",
    "long": "<p>Bratislava, located at the heart of Europe, experienced all of the continents troubles and tragedies of the 20th century. It was a period of dramatic transformation for both Bratislava and Slovakia. At the century’s dawn, the city, then known as Pressburg, was a melting pot of cultures under the Austro-Hungarian Empire, boasting a vibrant mix of Slovaks, Germans, and Hungarians. Now it is all gone. Join our tour to understand dramatic events of the 20th century that changed Europe forever.</p>\n<p>The tides of change swept in with World War I, reshaping the political landscape of the region. In 1919, Bratislava became part of the newly formed Czechoslovakia, marking a significant shift in its identity. The interwar period saw the city flourish as a cultural and political hub, embracing its newfound Czechoslovak character. However, the shadows of World War II soon cast over the city. It experienced the turmoil of Fascist collaboration and later occupation, a dark chapter that brought suffering and devastation. Following the war, Bratislava, now within the Soviet sphere of influence, found itself behind the Iron Curtain, entering an era of socialist rule and extensive urban redevelopment under Czechoslovakia’s communist regime. The winds of change returned with the Velvet Revolution of 1989, a peaceful uprising that ended communist rule. Bratislava became the capital of an independent Slovakia in 1993 after the peaceful dissolution of Czechoslovakia, a moment that marked the beginning of a new era.</p>\n<p>Join us and step into the captivating narrative of the 20th century. Learn the intriguing stories that shaped the city’s modern identity and embrace both its triumphs and its downfalls. Begin with our first main stop on the Uprising Square (ex Stalin Square), a pulsating hub that witnessed pivotal moments in Slovakia’s history. Visit the street with the Last Synagogue, symbol of resilience of the Jewish people, and learn about the cruel trials of the Holocaust. Discover the enigmatic Upside Down Pyramid, a stunning architectural creation that represents the city’s artistic and cultural renaissance. Witness the grandeur of the Presidential Palace, where political leaders who once ruled the country left their indelible mark.</p>\n<p>Guided by passionate local guides, our tour invites you to explore Bratislava’s latest history. Come, let us cast some light on the past and connect the dots that shaped today Slovakia and Europe. Join us on this unforgettable journey, where every stop carries the weight of history!</p>",
    "highlightsTitle": "- Uprising Square\n- The Last Synagogue\n- Radio Pyramid Building\n- Presidential Palace\n- The Iron Curtain\n- Velvet Revolution\n- First Czechoslovak Republic",
    "highlightsDescription": "- A hub that witnessed pivotal moments like the Velvet Revolution and communist rallies.\n- Discover the history of Bratislava's Jewish community and the impact of the Holocaust.\n- An iconic upside-down pyramid, a masterpiece of socialist modernist architecture from the 1980s.\n- The official seat of the Slovak president, a site of key political events.\n- Hear stories of life on the border between the communist East and capitalist West.\n- Understand the peaceful 1989 uprising that ended 41 years of communist rule.\n- Learn how Slovakia became part of a new democratic state after World War I.",
    "photoIds": [
      "33166",
      "20181",
      "38812"
    ]
  },
  {
    "city": "Bratislava",
    "name": "Welcome to Bratislava! Old Town & Castle Guided Walking Tour",
    "short": "We trace Bratislava’s history—from medieval coronations to today—through the Old Town and Castle Hill: Hlavne Namestie, Michael’s Gate, St. Martin’s Cathedral, Bratislava Castle and Čumil; we also pass the Bratislava Opera House, the UFO and Jewish heritage sites.",
    "long": "<p>Bratislava, surrounded by 4 tourist giants – Prague, Krakow, Budapest and Vienna – is often overlooked by tourists. But it is a big mistake! Yes, you won’t find here the splendour of Vienna, the liveliness of Krakow, Budapest’s neo-Gothic architecture or a castle as grand as Prague’s Hradcany. But you will find something completely different – authenticity, special charm, peace and quiet (although not in the evenings!) and lots of greenery! Bratislava does not live only for tourists, it is a true asylum for its inhabitants. Drop in for a day or two to take a break from the crowds and get to know the history of this intriguing city!</p>\n<p>Bratislava for the Slovaks, Pozsony for the Hungarians, Pressburg for the Germans. Whatever it was called in the past, it has always been a cultural melting pot. Founded by the Celts, taken over by the Romans who set up a fortified camp here. When it belonged to the Hungarians, it was here – not in Budapest – that Hungarian monarchs were crowned! After the First World War, it became the capital of the young Slovakia and it was then when it got renamed to Bratislava – the city “celebrating brothers.” </p>\n<p>Join our tour and fall in love with this enchanting city. During the walk you will learn about the history of Slovak statehood from the Middle Ages up to the present day. You will hear stories big and small, but certainly worth telling. We will visit the beautiful old town, full of gothic, renaissance and baroque buildings, with Hlavne Namestie Square, where you can still feel the small-town charm of Bratislava. We will also climb up the castle hill, from where we will admire the panorama of the city and see that a lot of time has passed since it was small. Today Bratislava has a modern and metropolitan flair. Of course, there will also be plenty of recommendations on what and where to eat – Slovak cuisine will certainly not disappoint you!</p>",
    "highlightsTitle": "- Hlavné Námestie\n- Bratislava Castle\n- St. Martin's Cathedral\n- Michael's Gate\n- Čumil Sculpture\n- UFO Bridge\n- Hungarian Coronations",
    "highlightsDescription": "- The city's main square, the historical heart of the Old Town featuring diverse architecture and small-town charm.\n- A prominent landmark on a hill overlooking the Danube, offering panoramic views of the entire city.\n- The magnificent Gothic church where Hungarian monarchs were crowned for centuries, a key site in local history.\n- The only preserved gate from Bratislava’s medieval fortifications, a symbol of the city's past.\n- A whimsical bronze statue of a man peeking out of a manhole, one of the city's most photographed spots.\n- A unique bridge with a flying saucer-shaped observation deck representing Bratislava's modern and metropolitan flair.\n- Stories of the city's past as the coronation site for the Kingdom of Hungary, underlining the importance of Bratislava.",
    "photoIds": [
      "20188",
      "20133",
      "32034",
      "38818",
      "20181"
    ]
  },
  {
    "city": "Bratislava",
    "name": "Hidden gems of Bratislava’s Old Town - Guided Walking Tour",
    "short": "Tour of Bratislava’s historical curiosities, covering the Old Town and the Danube riverfront: Old Town Hall, Primate’s Palace, St. George statue, the Blue Church, and the Old Bridge. We trace the city’s story from medieval streets to 20th-century milestones, including the Prague Spring of 1968 and the 1988 Candle Manifestation.",
    "long": "<p>Bratislava, a small yet dynamic European capital, hides many secrets and gems waiting to be discovered. Imagine walking with a local friend who shows you the coolest places and the nicest highlights of Bratislava. Well, this tour is just like that, join it if you wish to spend the best 2 hours of your stay here!</p>\n<p>Explore with us unique and somewhat hidden courtyards, palaces, churches and statues of the historical Old-Town. During the tour we will visit the Primate’s Palace, where Napoleon was confirmed as the ruler of Europe, see the statue of St. George, one of the patrons of the city, and get to know his life story. From there on we will be moving towards the eastern gate of the city towards 19th and 20th century landmarks, such as the amazing secession style school and the breathtaking Blue Church where you will be able to peek in and enjoy the marvellous colours and decorations. If the weather permits, we have one of the best spots to enjoy the skyline of Bratislava from the Old-Bridge, a place where nations and rulers once clashed and where tanks first arrived in Bratislava during the Prague Spring in 1968. Before coming back to the Medieval city centre, we will visit the National Museum and National Gallery, walk the river promenade and get to the Philharmonic orchestra, the location of the first anti-communist protest in all of Czechoslovakia in 1988.</p>\n<p>Join us on this walk to understanding the soul of Bratislava, a city that has stood at the crossroads of history and emerged vibrant and full of life. Discover with us the city’s hidden gems and while doing so get to know the city’s past as well as its present, and leave with memories that will beckon you back to this charming European capital!</p>",
    "highlightsTitle": "- Primate's Palace\n- The Blue Church\n- The Old Bridge\n- Slovak Philharmonic\n- Old Town Hall\n- St. George Statue\n- River Promenade",
    "highlightsDescription": "- A stunning palace where a treaty confirming Napoleon as the ruler of Europe was signed.\n- A breathtaking Art Nouveau church, famous for its unique blue colour inside and out.\n- A historic bridge offering skyline views and insight into the 1968 Prague Spring events.\n- The site of the 1988 Candle Manifestation, the first major anti-communist protest in Czechoslovakia.\n- One of Bratislava's oldest stone buildings, forming the historic heart of the Old Town.\n- A statue of one of the city’s patron saints, located in a charming hidden courtyard.\n- A scenic walk along the Danube, passing the Slovak National Museum and National Gallery.",
    "photoIds": [
      "32034",
      "32040",
      "20181",
      "38824"
    ]
  },
  {
    "city": "Bratislava",
    "name": "Spooky Legends of Bratislava Guided Walking Tour",
    "short": "Dark legends and true horrors of Bratislava’s past in the Old Town backstreets: we trace witch-hunts, epidemics and crimes around Michael’s Gate, the medieval city walls, the sculpture of the Witch and Franciscan Church, visiting spots tied to local ghosts and tales.",
    "long": "<p>Bratislava, the capital of Slovakia, is best known for its huge castle dating back to the 10th century, Michalská Gate, St Martin’s Cathedral (where Hungarian kings were crowned), the blue St. Elisabeth’s Church and… a restaurant in the shape of a UFO, located almost 100 metres above the Danube. Tourists coming here enjoy the Market Square with its Old Town Hall and the Slavin Hill, while very few are familiar with the terrifying face of this European capital from mediaeval times and beyond….</p>\n<p>Bratislava is filled with horror stories. In mediaeval times witch-hunts were practised in many European countries, including Slovakia. Crowds of bloodthirsty onlookers would gather in the town square to watch with their own eyes as innocent women accused of witchcraft were burnt at the stake or executed with a sword. Historians believe that the witch trials did not end until the turn of the 17th and 18th centuries; unfortunately, we do not know the name of the last woman who was burned at the stake in Bratislava but many of them lost their lives here. In the 16th and 17th century the territory of present-day Slovakia experienced massive waves of epidemics that took a bloody toll. At one point there were so many corpses that the city was unable to keep up with their removal outside the city walls. The corpses were everywhere: in houses, vineyards and even in streets. As the number of victims continued to grow, grave digging could not be kept up with, forcing the authorities to create mass graves, including those without coffins…. The modern history of Bratislava also abounds with many horrific anecdotes and chilling stories. The legend of the White Lady of White Street, tales of a water goblin tormenting children, a haunted manor house on the Main Square or an inn where witches used to dine are still alive. And as we well know, there is a grain of truth in every legend…</p>\n<p>If you want to discover Bratislava’s lesser-known face, we invite you on our walk – Spooky Legends Free Tour. It’s a fascinating tour during which you’ll get to know the dark stories from mediaeval times and beyond. You will visit places associated with epidemics, witch-hunts or bloody crimes that took place in Bratislava. If you are bored with the standard city tours, like the dark atmosphere and are looking for a thrill, it is a perfect tour for you!</p>",
    "highlightsTitle": "- Witch Hunts\n- Medieval Epidemics\n- Local Ghost Legends\n- Michael's Gate\n- Medieval City Walls\n- Dark Backstreets",
    "highlightsDescription": "- Hear chilling stories of medieval witch trials and executions that once took place in the city.\n- Discover the horrific history of plagues that filled Bratislava's streets and vineyards with unburied corpses.\n- Learn about the White Lady, a haunted manor, a tormenting water goblin, and other spooky tales.\n- See the only preserved gate of the city's medieval fortifications, one of Bratislava's oldest buildings.\n- Walk along the unique, well-preserved fortifications that have witnessed centuries of wars and natural disasters.\n- Explore the city's lesser-known, spooky alleys away from the main tourist crowds and noise.",
    "photoIds": [
      "28457",
      "20181",
      "28475",
      "28463"
    ]
  },
  {
    "city": "Bruges",
    "name": "Bruges By Night: Dark Tales & Legends Guided Walking Tour",
    "short": "Night tour of Bruges focused on dark tales, ghosts and the city’s medieval rise and fall; we walk the historic centre and canals toward the old walls and windmills – Market Square, Old Bursary, Jan van Eyck Square, Golden Hand Canal and Jerusalem Church.",
    "long": "<p><em>Golden Hand… of the Devil</em> – some can say it’s not just a strange monument and a spooky local story, but also, symbolically, the whole story of Bruges summed up. The city, a testament to the brilliance of the human mind, was touched by greatness and then suddenly thrown from the pedestal – just like the devil who seemingly blesses but actually curses you for eternity. Bruges is a home not only to grand beauty, but also many creepy and dark stories. Wandering along the canals of the city after dusk can be very romantic or simply… dangerous. </p>\n<p>Do you want to meet lover ghosts, learn the stories of murder and intrigue? Or simply get the chance to find out more about Bruges history, the rise and fall of the mediaeval city and discover why it became one of the most important financial centres in the world during the Middle Ages? Join us for a night walk to experience the atmosphere of the city after dark and uncover its hidden tales.</p>\n<p>Bruges provides a perfect setting for an evening walk and can be so appealing with its noir-style, evening locations. But it won’t be all so grim when you walk with us: besides the history and dark tales we will also discuss crucial things like local beer, bars and nightlife. Now, you cannot say no!</p>",
    "highlightsTitle": "- Golden Hand Canal\n- Old Bursary\n- Bruges Ghost House\n- Market Square\n- Belgium's Oldest Bar\n- Jerusalem Church\n- Bruges Windmills",
    "highlightsDescription": "- Hear the spooky legend that gives this canal its name and symbolizes the city's rise and fall.\n- Discover the site of the world's first stock exchange, where medieval Bruges flourished as a financial hub.\n- Uncover the chilling legend of a haunted house, one of the city's most famous dark tales.\n- Experience the historic heart of Bruges, a vibrant central square surrounded by impressive medieval guildhalls.\n- Learn about local beer culture at a legendary pub that has been serving patrons since the year 1515.\n- See a unique 15th-century chapel inspired by Jerusalem's famous Church of the Holy Sepulchre.\n- Visit the historic windmills standing on the old city ramparts, offering picturesque views over the canals.",
    "photoIds": [
      "20418",
      "20388"
    ]
  },
  {
    "city": "Bruges",
    "name": "Welcome to Bruges! Historic Centre Guided Walking Tour",
    "short": "Introduction to Bruges, its history and culture. We trace the rise and decline of this great trading city on a walk through the medieval historic centre — from Market Square and the Belfry to the Church of Our Lady, St. John’s Hospital, and the Beguinage.",
    "long": "<p>Diamonds, amber: the most beautiful jewels are made by nature by removing one of the bloodlines of the given material and letting it stay beautiful – forever! But how do you stop time and preserve the richest and most powerful trading city north of the Alps with its gothic and renaissance architecture? Well, you actually cut it off from its bloodline just the same – in terms of Bruges, you deprive it of direct access to the sea. This paradoxical event that occurred in northern Flanders over four centuries ago allowed the city to stay intact and be a true witness of time, sidelined by history at the peak of the city’s power, freezing its assets just as they were in the middle of the 16th century.</p>\n<p>Today, we can marvel at this mediaeval gem in its unrivalled beauty. Town houses and stately buildings adorn the canals in the pearl of Flanders and are a testament to the city’s position. The waterways remind us of yet another fascinating feature of the city and land surrounding it: we are still close to the North Sea and its might. In order to regulate the waterways, a system of windmills was set up here, and you can still see some of those today. The cobbled historic centre spans over 400 hectares, making it one of the biggest European old towns. The 83-metre Belfry tower marks the power of the city government. Indeed, Bruges attracted great capital and became one of the richest in Europe, which in turn resulted in another wonder: the art of Bruges. Yeah, you will meet the “Flemish masters” here: Jan van Eyck and Hans Memling (although the latter’s most famous work, <a href=\"https://freewalkingtour.com/tours/main-town-gdansk/\">The Last Judgement, is to be found in Gdańsk, why? Ask your guide 😊</a>) and their distinct painting style, but also… Michelangelo’s sculpture of Madonna!</p>\n<p>On this tour we will take you around the historic centre of Bruges. Not only will you learn about the rise and decline of this great Hanseatic city, once the champion of the North Sea and today one of the leading tourist destinations in Europe, but we will also talk about other localities: food and drinks, with famous chocolate, mussels, wafer, and beer at the forefront. Altogether, it will be a journey full of stories of romance, war, devotion, and striving for greatness. And greatness we will reach.</p>",
    "highlightsTitle": "- Market Square\n- Belfry of Bruges\n- Church of Our Lady\n- Beguinage\n- Lake of Love\n- St. John's Hospital\n- Flemish Masters",
    "highlightsDescription": "- The historic heart of Bruges, surrounded by picturesque guildhalls and the impressive Provincial Court.\n- The city's iconic 83-metre medieval bell tower, a symbol of Bruges's wealth and power.\n- A Gothic church that is home to Michelangelo’s famous marble sculpture, the Madonna and Child.\n- A tranquil architectural complex, once home to a community of emancipated lay-religious women.\n- A serene lake surrounded by a park, famously known for its romantic legends and swans.\n- One of Europe's oldest surviving hospital buildings, now a museum with art by Hans Memling.\n- Discover the art of painters like Jan van Eyck and Hans Memling who flourished here.",
    "photoIds": [
      "20412",
      "20394",
      "20400",
      "20388",
      "20406"
    ]
  },
  {
    "city": "Brussels",
    "name": "Welcome to Brussels! Historic Centre Guided Walking Tour",
    "short": "Introduction to Brussels, its history and culture. We explore the city’s historic centre — from the Old Town to Marolles and Sablon, then the Royal Quarter and Mont des Arts — visiting the Grand Place, Manneken Pis, Palace of Justice, Church of Our Blessed Lady of Sablon, and the Royal Palace.",
    "long": "<p>Even if Brussels was not on top of your wish list, we are sure that after the first visit you will want to come back over and over again! The heart of Europe has so much to offer, no matter what you are looking for: history, architecture, art, food and drinks! It is all part of the wonderful city of Brussels!</p>\n<p>The settlement here was established long before the Romans came to conquer the area. After the decline of the Roman Empire, Brussels became part of the Frankish realm. Officially established in the late 10th century and set in a favourable location, on the banks of the river Senne, the city experienced rapid development and became a thriving centre of trade, especially the textile trade. Ruled by the Dukes of Brabant Brussels belonged to the Holy Roman Empire, there was even a time when kings of Spain and Holy Roman Emperors lived here! No wonder, its legacy as the heart of Europe prevails till the present day! Over time the textile industry has reached the peak of perfection: the lace produced here was worn by the aristocracy and royals all over Europe, while the tapestries made in Brussels adorned their palaces wherever they lived. The main square of old Brussels, the Grande Place, is a vivid testimony of the wealth and prosperity of the merchants living here. It is certainly one of the most stunning squares you will ever see! The way it looks, though, is a result of the most disastrous event in the history of the city – the bombardment conducted by the French king Louis XIV in 1695. The bombing and the fire it caused consumed one third of the old city! The high-speed reconstruction carried out within 5 subsequent years continues to amaze visitors to this day!</p>\n<p>Finally, there came a time when Belgium struck for independence. Inspired by the opera about the revolution, the people of Brussels took to the streets to fight for their freedom. It was 1830 when the city became the capital of the Kingdom of Belgium. Following the independence and industrial revolution, Brussels grew from a small town of 60 thousand people to a metropolis of 625 thousand. The development accelerated even more in the 20th century with modernization, exquisite art nouveau houses adorning the city streets and a number of international fairs and conferences marking the clear transition of Brussels into the modern capital of Europe.</p>\n<p>But Brussels is not only about history and architecture, it is also about the very things making us all happy and satisfied. Starting from art and comics (yes, most major European comics books artists worked and lived in Belgium!) finishing with food and drinks. If only you can forget about counting calories, visiting Brussels you will be transmitted straight to a foodie haven! Frites (traditionally double fried in animal fat), mussels, chocolate, waffles and Belgian beers (it is a whole, fascinating universum!) will make you want to stay here forever!</p>\n<p>So waste no time! Come and join our tour and we will introduce you to the joys and marvels of Brussels!</p>",
    "highlightsTitle": "- Grand Place\n- Manneken Pis\n- Belgian Comics Art\n- Palace of Justice\n- Church of Sablon\n- Royal Palace\n- Mont des Arts",
    "highlightsDescription": "- A stunning central square showcasing the city's historical wealth and prosperity.\n- The famous and quirky bronze fountain sculpture of a little boy.\n- See vibrant street art murals dedicated to famous comic book characters like Tintin.\n- An immense 19th-century courthouse, one of the largest buildings of its era.\n- A magnificent 15th-century Gothic church located in the elegant Sablon district.\n- The impressive official palace of the King and Queen of the Belgians.\n- An elevated historic site offering stunning city views, museums, and a public garden.",
    "photoIds": [
      "20280",
      "20286",
      "20381",
      "20292",
      "20274"
    ]
  },
  {
    "city": "Brussels",
    "name": "Brussels Night Tour: Legends & Dark Stories",
    "short": "An evening tour of Brussels’ dark history—revolts, executions and torture—across the historic centre and Sablon. We pass Grand Place, Saint Jean Square and Anneessens Tower, continue via Rollebeek Street to Notre Dame du Sablon and Petit Sablon, with a stop by a Comic Book Wall.",
    "long": "<p>Welcome to Brussels as you’ve never experienced it before! Behind the pristine facades and countless chocolate stores, there lies a dark and bloody past that is rarely discussed. During this evening tour illuminated by lantern light, you’ll explore the city’s rich history while delving into the tales of revolts, forgotten heroes, executions and torture techniques.</p>\n<p>Get away from the main tourist attractions and immerse yourself in the chilling and tragic history of the capital of Europe. This unique experience will leave you with the best view of the city and memories that will last a lifetime.</p>",
    "highlightsTitle": "- Grand Place\n- Brussels' Dark Past\n- Anneessens Tower\n- Notre Dame du Sablon\n- Petit Sablon",
    "highlightsDescription": "- Discover the dark secrets and bloody history behind Brussels' stunning central square.\n- Uncover chilling tales of revolts, public executions, and forgotten city heroes.\n- A medieval tower and remnant of the city's first wall, tied to stories of rebellion.\n- A magnificent Gothic church with a legendary past and tales of stolen statues.\n- A charming garden surrounded by statues representing medieval guilds and historical figures.",
    "photoIds": [
      "38784",
      "38790",
      "20292",
      "38796",
      "38802"
    ]
  },
  {
    "city": "Bucharest",
    "name": "Bucharest Bellu Cemetery: Art, History & Legends",
    "short": "Historical and cultural tour of Bellu Cemetery in Bucharest: we walk the alleys to study funerary art and the lives of notable Romanians, stopping at Writers’ Alley, Artists’ Alley, grand mausoleums and the cemetery chapels, while addressing burial customs, myths and legends.",
    "long": "<p>Think cemeteries are just quiet resting places?</p>\n<p>Think again. Bellu Cemetery is an open-air museum packed with jaw-dropping sculptures, tragic love stories, and the legacies of Romania’s most legendary figures.</p>\n<p>On this tour, we’ll take you through the eerie yet fascinating alleys of Bucharest’s most famous cemetery, uncovering tales of passion, betrayal, heroism, and mystery. From poets and revolutionaries to scandalous romances and urban legends, this is where history gets seriously intriguing.</p>\n<p>Expect stunning architecture, unexpected stories, and a deep dive into Romania’s cultural customs surrounding life and death. It’s hauntingly beautiful, totally unique, and a must-do for curious travelers who love exploring off the beaten path.</p>\n<p>Join us for a walk through history like no other!</p>",
    "highlightsTitle": "- Cemetery Art & Architecture\n- Legendary Figures' Tombs\n- Tragic Love Stories\n- Bucharest Urban Legends\n- Romanian Death Customs\n- Tales of Heroism",
    "highlightsDescription": "- Discover sculptures and mausoleums that make this cemetery an open-air art gallery.\n- Visit the resting places of Romania’s most famous poets, artists, and revolutionaries.\n- Uncover heartbreaking tales of passion and romance hidden among the tombstones.\n- Hear spooky and mysterious local legends that are an integral part of Bucharest’s folklore.\n- Learn about unique local traditions and cultural beliefs surrounding life and remembrance.\n- Listen to inspiring stories of courage and sacrifice from key figures in Romanian history.",
    "photoIds": [
      "44595",
      "44598",
      "44604",
      "20560"
    ]
  },
  {
    "city": "Bucharest",
    "name": "Welcome to Bucharest! Old Town Guided Walking Tour",
    "short": "Introduction to Bucharest, its history and culture. We trace the city’s story from Vlad the Impaler to the 1989 Revolution, walking through the Old Town and central boulevards — especially Victory Boulevard — and visiting Stavropoleos Monastery, St. Anthony Church, the Macca-Vilacrosse Passage, CEC Palace, and the Palace of the Parliament.",
    "long": "<p>Romania is usually associated only with Transylvania and the bloody Vlad the Impaler, the prototype of Dracula from Bram Stoker’s Gothic novel. The sound of the city’s name, however, should be associated with something completely different… Rome!!! Much of southern Romania was once under Roman rule, and although millennia have passed since then, it can still be heard today in the beautiful Romanian language, and Romania calls itself a Latin island surrounded by a Slavic sea. It is also a country at an eternal crossroads, with each historical part gravitating toward different cultures. Situated in the south, Wallachia gravitates toward the Balkans, Transylvania follows the west, and eastern Moldova looks fearfully to the east… Bucharest is at the very centre of this unusual mix.</p>\n<p>Our tour will be a wonderful introduction to the history of the “Paris of the East,” as its residents proudly call the city. Bucharest can resemble Frankenstein’s monster in some places – beautiful 19th century palaces stand here right next to colossal communist edifices, silent witnesses of 20th century history. The city has been constantly changing over the centuries, which has been “facilitated” by numerous fires and earthquakes. After the catastrophic earthquake in 1977, much of Bucharest had to be built from scratch. An indelible mark was left here by the hubris and megalomania of dictator Nicolae Ceaușescu, who ordered the demolition of thousands of buildings in order to build a new communist city.</p>\n<p>Take a walk with us to explore 500 years of the city’s history, starting with its founding in the 15th century and the reign of Vlad the Impaler, ending with the Romanian Revolution and the fall of the communist dictatorship. We will experience the rich cultural heritage and dynamic spirit that define Bucharest today, including its architecture, history, and vibrant culinary scene.</p>",
    "highlightsTitle": "- Palace of the Parliament\n- Romanian Revolution\n- Vlad the Impaler\n- Stavropoleos Monastery\n- Victory Boulevard\n- Manuc's Inn\n- Macca-Vilacrosse Passage",
    "highlightsDescription": "- A colossal communist edifice, the world's second-largest administrative building, a testament to Ceaușescu's megalomania.\n- Explore key sites of the violent 1989 revolution that overthrew Romania's communist dictatorship.\n- Discover the history of the Wallachian prince and city founder, the real-life inspiration for Bram Stoker's Dracula.\n- An Eastern Orthodox monastery for nuns, known for its unique Brâncovenesc style and beautiful, peaceful courtyard.\n- Stroll down Bucharest’s \"Champs-Élysées,\" a prestigious avenue lined with grand palaces, museums, and landmarks.\n- Visit Bucharest's oldest operating hotel, a beautifully preserved historic inn that has witnessed centuries of local history.\n- Walk through a beautiful, fork-shaped, yellow glass-covered arcade full of charming cafes and unique shops.",
    "photoIds": [
      "20618",
      "20560",
      "20890",
      "49213",
      "49211",
      "20914",
      "49209",
      "20612"
    ]
  },
  {
    "city": "Bucharest",
    "name": "Communist Bucharest: Revolution & Daily Life",
    "short": "Communist history tour of Bucharest: we start at Revolution Square, pass the Jewish quarter and finish at the Palace of Parliament, seeing the Former Headquarters of the Communist Party, Coral Synagogue and the Bucharest Court of Appeal.",
    "long": "<p>Discover the main landmarks of communist history in Bucharest with our passionate local guides. We will start the tour in the Revolution Square by the former headquarters of the Romanian Communist Party and continue off the beaten path to see another face of Bucharest that we do not show on the other tours we offer.</p>\n<p>During the walking tour we will share stories of communism in Romania, pros and cons of the period, the relation between the communist regime and religion, industry, labour, economy, culture and everyday life of the people. We try to be objective in presentation, but share true family stories and bring “nostalgic” items of the period.</p>\n<p>We’ll walk from the Revolution Square to the Jewish quarter and end the tour in front of Parliament Palace. Be prepared to explore the city in an almost 3-hour long walk while exploring life under the socialist regime and visiting sites that played a role in communist days.</p>",
    "highlightsTitle": "- Revolution Square\n- Communist Party HQ\n- Jewish Quarter\n- Coral Synagogue\n- Palace of Parliament\n- Life Under Communism",
    "highlightsDescription": "- The epicentre of the 1989 revolution that led to the downfall of communism in Romania.\n- The former building where dictator Ceaușescu made his final, ill-fated public speech.\n- Explore the historic district and learn about the community's survival during the communist period.\n- Bucharest's largest synagogue, a testament to the Jewish community's perseverance through the communist regime.\n- The world’s heaviest building, a colossal symbol of Nicolae Ceaușescu's communist-era ambitions.\n- Hear personal family stories and discover what daily life was truly like behind the Iron Curtain.",
    "photoIds": [
      "45484",
      "24781",
      "49215",
      "27563",
      "20560",
      "27569",
      "20548",
      "20642"
    ]
  },
  {
    "city": "Budapest",
    "name": "Buda Castle – Budapest Guided Walking Tour",
    "short": "Historical tour of Budapest’s Castle Hill and Castle Quarter: we trace the medieval royal city of Buda and its Baroque redevelopment, visiting Matthias Church, Holy Trinity Square, Fisherman’s Bastion, the Royal Palace (Buda Castle) with the Hungarian National Gallery, and the Buda Castle Promenade.",
    "long": "<p>Castle Hill rises over Budapest and reminds us all of the city’s ancient past – after all, this was the core of the mediaeval, royal city of Buda. Discover with us a city within a city, an amazing mix of old and new, culture and heritage!</p>\n<p>The plateau with its museums and monuments, churches and public buildings, gates, and bastions is one of the most important places in Budapest and a UNESCO World Heritage Site. Winding cobblestone streets and steps take you to the top of it. This is where king Bela IV built his palace in the 13th century. The original structure was torn down, rebuilt and redeveloped countless times, resulting in a monumental Baroque structure housing today the Hungarian National Gallery, the National Library and The Budapest History Museum. In the heart of the Castle Quarter sits the Matthias Church, sometimes referred to as Coronation Church of Buda. This is where the statue of Virgin Mary scared the Turks occupying the city so much that their resistance fell on the same day! Finally, there is the Fisherman’s Bastion – an architectural masterpiece, with its seven towers representing the seven Magyar tribes that settled in the area in the 9th century. The Bastion offers breathtaking views of Buda hills, Pest, and the Danube. Last but not least there is the beautifully renovated Castle Garden Bazaar – sort of a leisure park with countless galleries, theatres, restaurants, and gardens. All that is surrounded by beautiful Baroque and Rococo houses. No doubt, Castle Hill is truly like a treasure chest. Go ahead and let’s open it together!</p>",
    "highlightsTitle": "- Castle Hill\n- Royal Palace\n- Matthias Church\n- Fisherman's Bastion\n- Holy Trinity Square\n- Baroque Houses\n- Castle Garden Bazaar",
    "highlightsDescription": "- The historic core of Buda, a UNESCO World Heritage Site with cobblestone streets, museums, and monuments.\n- Monumental Baroque structure housing the National Gallery, National Library, and the Budapest History Museum.\n- The historic Coronation Church of Buda, with a miraculous legend connected to its Virgin Mary statue.\n- An architectural masterpiece with seven towers representing the Magyar tribes and offering breathtaking views of the Danube.\n- The central square of the Castle Quarter, home to the iconic Holy Trinity Column and Matthias Church.\n- Beautifully preserved historical houses in Baroque and Rococo styles lining the district's charming cobblestone streets.\n- A stunningly renovated leisure complex with galleries, theatres, and gardens at the foot of the castle.",
    "photoIds": [
      "17658",
      "17638",
      "17648",
      "17625"
    ]
  },
  {
    "city": "Budapest",
    "name": "Welcome to Budapest! Pest Guided Walking Tour",
    "short": "Introduction to Budapest, its history and culture. We explore Pest’s centre and the Danube Promenade — starting at St. Stephen’s Basilica, passing Gresham Palace and the Chain Bridge, and finishing by the Parliament and the Shoe Memorial.",
    "long": "<p>For centuries, the area of the city has been crucial for those wanting to cross the mighty Danube river. First to settle here were the Celts, then came the Romans, eventually defeated by the Hun ruler Attila. Some say it was after his brother, Buda, that the city was named. Finally, the Hungarians arrived and built their settlement on the remnants of the old, Roman structures.</p>\n<p>The 14th and 15th centuries was Buda’s high time. Influx of people of different nationalities and backgrounds gave it a real boost for fast development. Buda was among the greatest European cities at the time and one of the centres of the Renaissance. Recognizing this, the kings of Hungary moved their seat there. But soon came the time of decline – Buda was again famous, but now mostly for its moral decay. Following came other misfortunes – the biggest among them was the Turkish invasion and internal wars. In consequence, Buda had fallen into Turkish hands for more than a century. It started to rise again after it was taken by the Habsburg empire at the end of the 17th century. 200 years later, celebrating a millennium of its existence Buda and located across the river Pest were already united into a modern, developing metropolis, with the oldest underground railway on the continent, competing with Vienna for the top spot.</p>\n<p>Walking around Budapest you feel its ancient history but at the same time you are captivated by its fin de siècle charm and glamour and reminded of times when Europe was still unspoiled by the two world wars. Cafés, palaces, wide boulevards and parks illustrate the transformation of the city into the elegant salon of the old continent. Budapest amazes also with its excellent food and wines – the Hungarians say that there are only three cuisines that really count in the world: French, Chinese, and… their own! And if this was not enough once you are fed, watered and culturally infused Budapest offers one more treat – therapeutic hot springs, spas and Turkish baths (clear relics of the Turkish times)!</p>\n<p>Join us to discover it all! Our tour will show you the historical, architectural, cultural and foodie aspects of the city and get you acquainted with the best Budapest has to offer!</p>\n<p>After doing the basics why not join us for other amazing tours around Budapest: the <a href=\"https://freewalkingtour.com/tours/buda-castle-hungary/\">Buda castle tour</a>, Jewish or Communist tour? Do it, you won’t regret it!</p>\n<p>Note: the <strong>evening version of this Free Tour is shorter and lasts up to 1,5 hours,</strong> but covers mostly the same places and adds the romantic atmosphere of the lit-up Budapest by night!</p>",
    "highlightsTitle": "- Elisabeth Square\n- St. Stephen's Basilica\n- Hungarian Academy of Sciences\n- Gresham Palace\n- Chain Bridge\n- Danube Promenade\n- Hungarian Parliament\n- Shoes on the Danube",
    "highlightsDescription": "- A popular central park featuring the iconic Budapest Eye Ferris wheel with fantastic city views.\n- A monumental Roman Catholic basilica named in honour of the first King of Hungary.\n- The most prestigious learned society in Hungary, housed in a magnificent Neo-Renaissance palace.\n- An iconic example of Art Nouveau architecture in Budapest, now a luxury hotel.\n- The first permanent stone bridge connecting Buda and Pest, a famous city landmark.\n- A scenic walkway along the Pest side of the Danube, offering views of Buda Castle.\n- The magnificent Gothic Revival seat of the National Assembly and an iconic symbol of Hungary.\n- A moving memorial commemorating the Jewish victims of World War II shot on the river's bank.",
    "photoIds": [
      "17600",
      "17653",
      "48515",
      "48514",
      "17625",
      "17630"
    ]
  },
  {
    "city": "Budapest",
    "name": "Budapest Jewish Quarter Guided Tour",
    "short": "Jewish history in Budapest—from its medieval roots through WWII and the Holocaust to today’s vibrant community—on a walk through the Jewish district of Pest. We visit the Dohány Street Grand Synagogue, the Tree of Life memorial, Kazinczy Street Orthodox Synagogue, and the Rumbach Street Synagogue, and note the cafés and ruin bars that shape life here today.",
    "long": "<p>Once, Central-Eastern Europe was home to the biggest Jewish community in the world. Today, it is here, in Hungary, where the largest Jewish population in this part of Europe lives. Our tour will give you a chance to learn about the multithreaded history of the Jewish people in Hungary and Budapest, the Holocaust, and the present-day life of the community.</p>\n<p>Despite the presence of Jews in Budapest dating back to medieval ages, their original district does not exist anymore. It was destroyed during the great clash between the Ottomans and allied European forces that finally led to the city being taken over by the Habsburgs in the 17th century. The rebuild and rapid development of the coming years offered numerous opportunities, and the Jewish community was reestablished here, in the district of Pest in the 18th century. The growing number of Jewish entrepreneurs, lawyers, doctors, and scientists, who had finally gained equal citizens' rights, contributed greatly to the development of Budapest.</p>\n<p>Before the Second World War, Jews constituted 23% of the population of the city, and the Jewish quarter was bustling with life. Some left Budapest facing growing antisemitism and made their way to the USA, making great careers, including in Hollywood. Life and progress came to a halt during the war years. Although Jews in Hungary were relatively safe for a time, in 1944 mass killings and deportations to the Auschwitz-Birkenau camp began. After the war, those who survived lived mostly here, in Budapest. Today the city is home to some 80 thousand Jewish people of different walks of life: Hasidic, conservative, reform, and non-religious.</p>\n<p>During our tour, we will explore the Jewish district, sharing insights into its traditions, culture, and hidden symbols. We will also introduce you to the vibrant and colorful atmosphere that makes the area the epicenter of Budapest’s nightlife and creativity.</p>",
    "highlightsTitle": "- Dohány Street Synagogue\n- Tree of Life Memorial\n- Kazinczy Street Synagogue\n- Rumbach Street Synagogue\n- Jewish History\n- The Holocaust in Hungary\n- Ruin Bars",
    "highlightsDescription": "- The largest synagogue in Europe and a monumental landmark of the city's historic Jewish Quarter.\n- A poignant sculpture dedicated to the Hungarian Jewish victims of the Holocaust, located behind the Great Synagogue.\n- An impressive Art Nouveau building which is the main centre of the Orthodox Jewish community in Budapest.\n- A beautiful Moorish Revival synagogue that once served the more traditional Status Quo Ante community.\n- Learn about the rich culture, traditions, and multithreaded history of the Jewish people in Hungary.\n- Discover the story of the Jewish community during World War II, including mass deportations and survival.\n- Explore the district's modern side, famous for its unique nightlife and iconic bars in abandoned buildings.",
    "photoIds": [
      "18236",
      "18231",
      "17625"
    ]
  },
  {
    "city": "Bydgoszcz",
    "name": "Bydgoszcz Private Custom Tour",
    "short": "Private, flexible introduction to Bydgoszcz in the historic center along the Brda River: Old Market Square, the Cathedral of St. Martin and St. Nicholas, Mill Island, and the riverside granaries, with options to add museums or other areas based on your personal interests and ideas.",
    "long": "<p>A private tour is a great opportunity for people who have limited time and cannot join our regular FREE walking TOURs or simply prefer staying in a small group of friends.</p>\n<p>It is you who chooses when the tour should start and what should be its topic. If you are not sure what do you want to visit during the tour, let us know and we will help you plan the tour that fits best your needs and interests.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including <a href=\"https://freewalkingtour.com/private-offer/\"> <strong>prices</strong> </a>, dates and booking rules.</p>\n<p>What is more, you do not have to worry about finding the guide at the meeting point – they can meet you in any place in the city or pick you up from your hotel. You don’t have to follow our strict schedule of regular tours, we can make a tour according to your needs.</p>\n<p>Let us know what kind of group are you (students, school group, seniors, group of friends, group of colleagues on a business trip, etc.) and what are your interests and we will do our best to prepare for you a tour that fits your needs and expectations.</p>\n<p><strong>LANGUAGES:</strong></p>\n<p>We can arrange private tours for you in different languages:</p>\n<p>English</p>\n<p>Polish</p>\n<p><strong>PRICES & BOOKING RULES</strong></p>\n<p>Every group or visitor that comes to us has different needs, interests, and expectations. Because of that, we treat every one of them individually to make sure that our services will meet their expectations. If your time is limited and you would like to try more than one tour or you would like to see something else, let us know and we will prepare a tailor-made tour for you. The final price can be varied. It will depend on the language and duration of your tour.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including prices, dates and booking rules.</p>\n<p>We kindly ask you to book private or group tours in advance, otherwise, we cannot guarantee that a guide will be available.</p>",
    "highlightsTitle": "- Private Tour\n- Custom Itinerary\n- Flexible Scheduling\n- Convenient Hotel Pickup\n- Tailor-Made Experience",
    "highlightsDescription": "- Enjoy an exclusive tour experience with just your own group of friends or family.\n- Explore the city with a route designed specifically around your personal interests and needs.\n- Choose the exact starting time and date that works best for your travel schedule.\n- Begin your tour with ease as the guide can meet you directly at your hotel.\n- Get a tour fully adapted for your group, whether students, seniors, or business colleagues.",
    "photoIds": [
      "12207",
      "48604",
      "14547",
      "48578"
    ]
  },
  {
    "city": "Bydgoszcz",
    "name": "Bydgoszcz Explorers – A City Game",
    "short": "Polish-only urban game: follow a simple map, solve tasks and clues across the city, and test your observation skills and local knowledge. Play in teams or solo. Learn about the city through riddles and questions—no prior familiarity required—only perceptiveness and a will to learn will lead you from one checkpoint to the next.",
    "long": "<p>What is the best way to learn? By having fun, of course! And what is the best way to learn about a city? Of course, fun and active participation in our city game! So let’s discuss the plan! First, gather a team: it can be your family or friends, or you can try it alone. Second, sharpen your senses: an urban game is an activity in which perceptiveness can be a great asset, and a constant desire to learn will inevitably lead to victory in the game! Thirdly, whether you know the city or not is not important, everyone has a chance to fight for victory. Like a string, a simple map, which will be attached to the tasks, will lead the participants everywhere. Fourth and last, just come and try to face the questions that we have prepared.</p>\n<p>This game is conducted in <strong>Polish only.</strong></p>",
    "highlightsTitle": "- City Game\n- Team Competition\n- Puzzle Solving\n- Map Navigation\n- Active Exploration\n- Polish Language Experience",
    "highlightsDescription": "- Explore the city by completing tasks and solving riddles on a specially prepared route.\n- Play with your friends and family or try the challenge solo to test your wits and skills.\n- Sharpen your senses to answer the challenging questions that we have prepared for you.\n- Follow a simple map attached to your tasks that will lead you through the game's course.\n- Discover the city in a fun and active way, combining sightseeing with an exciting adventure.\n- Immerse yourself in the local culture with a game conducted entirely in the Polish language.",
    "photoIds": [
      "x"
    ]
  },
  {
    "city": "Bydgoszcz",
    "name": "Bydgoszcz Midtown & Music District Tour",
    "short": "Urban history and architecture of Bydgoszcz’s Midtown: we cover the garden‑city area and Music District, stopping at the Marian Rejewski monument, the Archer statue, Pod Orłem Hotel, the “Deluge” Fountain and the Poor Clares’ Church.",
    "long": "<p><strong>Discover the magic of Bydgoszcz’s Midtown – the city’s green heart, full of style and history!</strong>  </p>\n<p>On this walk, you’ll experience the unique atmosphere of the area, rich in culture and stories from the past.  </p>\n<p>We’ll immerse ourselves in the charm of the garden city and enjoy the vibrant local life.</p>",
    "highlightsTitle": "- The Archer Statue\n- Music District\n- Marian Rejewski\n- Pod Orłem Hotel\n- \"The Deluge\" Fountain\n- Poor Clares' Church",
    "highlightsDescription": "- The iconic and most recognizable nude sculpture that has become a famous symbol of Bydgoszcz.\n- The city's cultural heart, home to the philharmonic hall and a gallery of composers' sculptures.\n- The brilliant Polish cryptologist who was instrumental in breaking the German Enigma code before WWII.\n- A historic and architecturally impressive hotel, one of the most recognizable landmarks in the city's midtown.\n- A monumental multi-figure sculpture depicting the biblical flood, one of the city's most impressive landmarks.\n- A beautiful Gothic-Renaissance church, which is one of the most valuable historical monuments in Bydgoszcz.",
    "photoIds": [
      "44342",
      "44360",
      "44348",
      "44336",
      "44354",
      "44366",
      "314",
      "21808"
    ]
  },
  {
    "city": "Bydgoszcz",
    "name": "Welcome to Bydgoszcz! Old Town Guided Walking Tour",
    "short": "Introduction to Bydgoszcz’s Old Town and riverside heritage. We explore the Old Market Square, St. Martin and St. Nicholas Cathedral, a stretch of the medieval city wall, and the city panorama with its symbols — the Three Granaries and the Man Crossing the River sculpture — along with local legends and snapshots of city life.",
    "long": "<p>Strolling through the old town, you will experience the unique atmosphere of the city and learn about its rich history and culture. You will have the opportunity to immerse yourself in the local life, get acquainted with traditions, and enjoy the charm that makes Bydgoszcz special. See you in Bydgoszcz! Become our guest!</p>",
    "highlightsTitle": "- Old Market Square\n- Bloody Sunday Legend\n- Hidden Medieval Wall\n- Bydgoszcz Cathedral\n- The Granaries\n- Man Crossing the River\n- The Dry Street",
    "highlightsDescription": "- The historical heart of the city, bustling with daily life and local stories.\n- Hear the story of the tragic events that took place in the market square.\n- Discover remnants of the old city fortifications tucked away in a tenement house yard.\n- A historic church where a valuable treasure was recently discovered, a key city landmark.\n- The iconic timber-framed granaries, a well-known symbol of the city's trading history.\n- A famous sculpture of a man balancing on a wire stretched over the Brda River.\n- A unique street where, according to local legend, you can't get wet when it rains.",
    "photoIds": [
      "14547",
      "12207",
      "48573",
      "48563",
      "48572",
      "48565",
      "48571",
      "48561"
    ]
  },
  {
    "city": "Cadiz",
    "name": "Welcome to Cadiz! Old Town & Seafront Guided Tour",
    "short": "Historical tour of Cádiz’s Old Town and seafront: from its Phoenician origins to its role as a gateway to the New World. Stroll through the charming El Pópulo quarter and along the scenic Campo del Sur to La Caleta Beach. Along the way, explore the Roman Theater, the Church of Santa Cruz, the Cádiz Cathedral, and the Central Market.",
    "long": "<p>From the breathtaking views from the Torre Tavira, to the golden beaches of La Caleta and the vibrant local markets brimming with Andalusian flavours, Cadiz is a true gem waiting to be admired. Don’t miss the chance to discover with us its rich heritage, welcoming atmosphere, and all that makes Cadiz an unforgettable destination!</p>\n<p>Being over 3,000 years old, Cadiz is known as the oldest continuously inhabited city in Western Europe. With a strong maritime tradition and bustling port, it has long been an important centre for trade, connecting Europe to the wider world. It played a pivotal role from its beginnings as a Phoenician settlement to its significance as the gateway to the New World for explorers like Christopher Columbus. Cadiz experienced a surge in wealth when the centre for colonial trade was transferred here from Seville, and it is still visible in the opulent architecture and historic buildings. It is also famous for its annual Carnival, an exuberant celebration showcasing the city’s rich cultural heritage and love for life. But the most fascinating thing about this city is that it still remains a living place, where locals go about their daily lives, adding a unique charm to the ancient town.</p>\n<p>Our tour of Cadiz will begin at the San Juan de Dios square, in front of the majestic City Hall. It will take you then to the fascinating El Pópulo neighbourhood, one of the oldest in town, where history and tradition magically intertwine. It will continue along Campo del Sur, also known as ‘Little Havana,’ filled with colourful buildings that echo the Cuban landscapes, and stand as a testament to the city’s long connection with the New World. We will admire the most important city churches: the symbol of Cadiz’s mediaeval history – St Cruz Church and the magnificent Cadiz Cathedral. We will also discover the ancient Roman Theater, one of the largest ever built in the Roman Empire. The remnants of this grand structure provide a fascinating glimpse into Cadiz’s Roman past. The tour will then take you towards the quaint Flower Square and continue to the bustling Central Market, where the city’s culinary heart beats. You can find here an array of fresh local produce and try some traditional tapas for an authentic taste of Cadiz. During the tour you will also see the Cruz Verde Square, a charming plaza surrounded by colourful houses and adorned with a beautiful tiled fountain and the nearby La Palma Church, with its elegant Baroque façade. It will finish at the picturesque La Caleta Beach, known for its stunning sunsets and historical bathhouses – the perfect place to unwind and soak in the warmth of Cadiz.</p>\n<p>Join us on our exploration of Cadiz, one of Europe’s oldest cities. Our tour provides a glimpse into its intriguing past and dynamic present, trying to encapsulate the essence of this charming city!</p>",
    "highlightsTitle": "- El Pópulo Neighbourhood\n- Roman Theater\n- Cádiz Cathedral\n- Campo del Sur\n- Central Market\n- St. Cruz Church\n- Flower Square\n- La Caleta Beach",
    "highlightsDescription": "- One of the oldest and most traditional neighbourhoods in Cadiz, full of history and local charm.\n- The impressive ruins of one of the largest theatres ever built in the entire Roman Empire.\n- The city's magnificent symbol, representing its golden age of trade with the Americas.\n- A scenic promenade called ‘Little Havana’ for its colourful buildings reminiscent of Cuban landscapes.\n- The city’s bustling culinary heart, offering fresh local produce and authentic Andalusian tapas.\n- The former cathedral of Cadiz, a beautiful symbol of the city's rich mediaeval history.\n- A quaint and lively plaza, famous for its colourful flower stalls and charming cafés.\n- The city’s most iconic beach, known for its stunning sunsets and historical bathhouses.",
    "photoIds": [
      "28527",
      "28542",
      "28515",
      "48479",
      "28533",
      "28509"
    ]
  },
  {
    "city": "Cannes",
    "name": "Welcome to Cannes! Old Town Guided Tour",
    "short": "Introduction to Cannes, its history and culture. We trace Cannes’ journey from a humble fishing village to a world-famous festival city — exploring the Old Town of Le Suquet, the lively Marché Forville, and the Vieux Port, before continuing along the glamorous seafront to the Palais des Festivals and the iconic Croisette.",
    "long": "<p>Lights, camera… history! Cannes may be known for flashing cameras and the sparkle of the red carpet, but behind the celebrity selfies lies a town layered with centuries of stories. From ancient Roman settlers and medieval monks to British aristocrats and mysterious prisoners hidden away on island fortresses. Cannes is a place where legend meets luxury, and where every quiet street corner has a past just as rich as its famous promenade.</p>\n<p>Long before film stars arrived in chauffeured limousines, Cannes was a sleepy fishing village hugging the Mediterranean. That all changed in 1834 when British Lord Brougham, fleeing a cholera outbreak, made an unexpected stop here — and fell in love with the place. Word spread quickly among Europe’s elite, and within a few decades, the town blossomed into a stylish resort. The arrival of the railway in 1863 sealed its fate: Cannes became a Riviera icon, attracting Russians, English, Americans, and — eventually — the global glitterati. But rest assured: beneath the glitz, Cannes has soul, and we will help you discover it!</p>\n<p>Our journey begins at the <strong>Cannes Train Station</strong>, the gateway to its transformation. We’ll stroll down <strong>Rue d’Antibes</strong>, once a dusty path, now a haven of elegance. At the vibrant <strong>Marché Forville</strong>, we’ll take in the sights and scents of the region’s best produce and Provençal specialties, still loved by locals and chefs alike. Then we’ll rise above the modern town to <strong>Le Suquet</strong>, Cannes’ ancient heart, where pastel houses, cobbled alleys, and the hilltop <strong>Musée de la Castre</strong> reveal stories older than cinema. From the medieval watchtower, you’ll catch a panoramic view that rivals any film set. We’ll then descend to the <strong>Old Port</strong>, where traditional <em>pointu</em> boats sit beside superyachts, before stepping into the spotlight at the <strong>Palais des Festivals</strong>, where cinematic history is made every May. Finally, we’ll stroll the legendary <strong>La Croisette</strong>, lined with palms, palaces, and postcard views — ending with a gaze toward the <strong>Île Sainte-Marguerite</strong>, once home to the enigmatic Man in the Iron Mask.</p>\n<p>This tour blends history and glamour, legends and lifestyle, celebrity and authenticity. Doesn’t matter if you came here for sunshine, cinema, or a story to remember — join us and discover the real Cannes — in all its beauty and contradictions.</p>",
    "highlightsTitle": "- Le Suquet Old Town\n- Marché Forville\n- La Croisette Promenade\n- Palais des Festivals\n- Old Port\n- Musée de la Castre\n- Man in the Iron Mask",
    "highlightsDescription": "- The ancient heart of Cannes, with cobbled alleys, pastel houses, and captivating medieval charm.\n- A vibrant Provençal market filled with local produce, regional specialties, and fragrant flowers.\n- The legendary palm-lined boulevard known for its luxury hotels, designer shops, and sandy beaches.\n- The iconic home of the Cannes Film Festival, where stars walk the famous red carpet.\n- A picturesque harbour where traditional fishing boats sit alongside luxurious modern superyachts.\n- A medieval castle museum atop Le Suquet hill, offering stunning panoramic views of the city.\n- The legendary prisoner of Île Sainte-Marguerite, a mysterious tale shrouded in local history.",
    "photoIds": [
      "46375",
      "30951",
      "46381",
      "46297",
      "46303",
      "46387"
    ]
  },
  {
    "city": "Cordoba",
    "name": "Welcome to Cordoba! Mezquita, Alcázar & Jewish Quarter Tour",
    "short": "Introduction to Córdoba, its history and culture. We trace the city’s Al-Andalus and multi-faith heritage through the historic centre and former Jewish Quarter — from Plaza de las Tendillas to the Mezquita, Synagogue, Alcázar de los Reyes Cristianos, and the Roman Bridge.",
    "long": "<p>The land we know today as Spain has been known as Al-Andalus since the 8th century and the Arab conquest of the Iberian Peninsula. Governed by Muslim rulers, the peninsula first as an Emirate and then as a Caliphate, had its capital in Cordoba. The Muslim period was a true golden age in the city’s history. Never before, during the reign of the Roman Empire and never later, after the fall of the Caliphate and the Reconquista (the recapture of Spain from Arab hands by Christian kings from the north), when Seville became the main Spanish city, Cordoba meant so much. The period between the 8th and 11th centuries was a time of stunning development and peaceful coexistence of 3 great cultures and religions – Jewish, Christian and Muslim. A time when science, art and philosophy flourished. A time of heated discussions, new ideas, interpenetration of styles and trends. It was in Córdoba where the Roman Seneca, the Muslim Averroes and the Jewish Maimonides were born. At a time when Paris or London were just small villages, Córdoba was the cultural capital and largest city in Western Europe. It is estimated that between 250,000 and even 500,000 inhabitants lived there at that time!</p>\n<p>On our tour we will walk through the narrow streets of Córdoba, look into the famous, often hidden, patios and squares of the city. These nooks, full of flowers, carefully cared for by the residents, delight with fountains, mosaics and ceramic decorations. We will see the only surviving medieval synagogue in all of Spain and the magnificent Mezquita Mosque. This stately and architecturally sublime building is one of the city’s most beautiful sites. We will also visit the Alcazar (palace) of the Christian Kings, built in the unusual mudéjar style, which combines Arab and European influences. It was from here that Isabella of Castile and Ferdinand of Aragon led Christopher Columbus on a journey that changed the fate of the world forever, and instead of a sea route to India, led him to the discovery of America. During our walk, we will also pass through the former Jewish quarter, which will take us to the most important building in the city from the Roman times – the Bridge Gate and the monumental Roman Bridge from the time of Emperor Augustus!</p>\n<p>Our walk will allow you to discover Cordoba, a fascinating mix of styles, cultures and traditions, and proof that peaceful coexistence allows the creation of the most beautiful and sophisticated works of art known to human history.</p>",
    "highlightsTitle": "- Mezquita Grand Mosque\n- Alcazar of Christian Kings\n- Jewish Quarter\n- Roman Bridge\n- Patios of Córdoba\n- Three Cultures Legacy",
    "highlightsDescription": "- A stunning and architecturally sublime mosque-cathedral, one of the most iconic sites in Spain.\n- A mudéjar-style palace where Spanish monarchs sponsored Christopher Columbus's famous voyage to the Americas.\n- Historic neighborhood of narrow streets, home to the only medieval synagogue remaining in all of Spain.\n- A monumental bridge dating back to the time of Emperor Augustus, a key landmark from Roman times.\n- Charming, flower-filled courtyards with fountains and mosaics, hidden within the city's narrow streets.\n- Discover the city's golden age, a time of peaceful coexistence between Jewish, Christian, and Muslim cultures.",
    "photoIds": [
      "17967",
      "17947",
      "17952",
      "17942"
    ]
  },
  {
    "city": "Dresden",
    "name": "Welcome to Dresden! Old Town Guided Walking Tour",
    "short": "Introduction to Dresden, its history and culture. We explore the Old Town and the Elbe riverfront, tracing the city’s story from Slavic roots and Saxon electors through WWII destruction and reconstruction, while visiting Neumarkt and the Frauenkirche, the Fürstenzug, Dresden Castle, the Zwinger, and the Semperoper.",
    "long": "<p>Dresden, beautifully set at the river Elbe, is one of Germany’s most wonderful cities, with the famous porcelain-like, baroque architecture dominating its silhouette. Fittingly, the capital of Saxony hides a grandiose history of princes and kings, but also its fair share of tragedies.</p>\n<p>Elbe is often described as the line dividing the Germanic and Slavic civilizations of old – we would argue and claim that it actually connects them, and you can feel that in Dresden. The city was once a small Slavic settlement and so its name sounds very familiar to anyone speaking Czech, Slovak, Polish or Sorbian. A small village turned into a city built around a castle in the 13th century and grew into one of the most important trading centers of the region at the end of the Middle Ages. One of the sources of its prosperity was silver and lead mined in the nearby Rudavy mountains. It was also then, at the end of the 15th century, when Dresden was elevated to become the seat of the Holy Roman Empire’s prince-electors. But it wasn’t until the early 1700s, when it really started to shine. It was then when the Saxon princes of the Wettin dynasty were elected Kings of Poland and Grand Dukes of Lithuania and Dresden gained its almost imperial grandeur. Zwinger Palace, Frauenkirche and the redesigned Dresden Castle are only a few pearls among dozens of baroque structures adorning the panorama.</p>\n<p>Yet, it was not to last forever. The events of the 20th century, Nazi domination and subsequent World War 2 left the city famously bombed to the point beyond recognition. However, unlike many of its Western German counterparts, the city centre of Dresden was painstakingly restored using old techniques and design elements and now, together with Warsaw, its stands as the most impressive example of historical reconstructions in Europe. So much so that while walking along its cobbled streets, you might not even notice that it’s all… new.</p>\n<p>On our tour, we will present you with the history of the city and its current lively face. We will be sure to make you understand how the Germanic organization merged with Slavic hopeless romanticism to form one of a kind Central European fusion.</p>\n<p>Today, Dresden is a leading tourism and educational hub and attracts visitors from Germany and abroad. A short ride from Prague and Berlin helps to plan it as a short weekend trip, but it can also be a base to discover the beauty of Saxony with the nearby Bautzen, the centre of the Sorbian culture or Meisen, famous for its medieval old town and porcelain.</p>",
    "highlightsTitle": "- Frauenkirche\n- Fürstenzug Mural\n- Dresden Castle\n- Zwinger Palace\n- Semperoper Opera House\n- Brühl's Terrace\n- Hofkirche Cathedral\n- Altmarkt Square",
    "highlightsDescription": "- Iconic Baroque church, painstakingly reconstructed after its destruction in WWII, dominating the Neumarkt square.\n- A stunning outdoor porcelain mural depicting a procession of Saxony's rulers throughout history.\n- The former residence of Saxon electors and kings, now a complex of world-class museums.\n- A grand Baroque palace complex with beautiful gardens and world-renowned art collections.\n- The magnificent home of the Saxon State Opera, a masterpiece of 19th-century architecture.\n- A historic promenade along the Elbe River, nicknamed \"The Balcony of Europe\" for its views.\n- The Catholic Cathedral of Dresden and the burial place of the Saxon rulers.\n- Dresden's oldest square, home to the Kreuzkirche and a vibrant Christmas market.",
    "photoIds": [
      "44451",
      "17769",
      "34699",
      "17735",
      "17725",
      "21749",
      "17710",
      "32875",
      "17715"
    ]
  },
  {
    "city": "Dresden",
    "name": "Dresden Private Custom Tour",
    "short": "Private tour of Dresden’s history and culture — from the Saxon electors and baroque architecture to WWII destruction and postwar reconstruction — on a walk through the Old Town and along the Elbe riverfront. The route can include Neumarkt and the Frauenkirche, the Fürstenzug, Dresden Castle, the Zwinger Palace, and the Semperoper, but can always be customized to your pace and interests.",
    "long": "<p>Dresden, beautifully set at the river Elbe, is one of Germany’s most wonderful cities, with the famous porcelain-like, baroque architecture dominating its silhouette. Fittingly, the capital of Saxony hides a grandiose history of princes and kings, but also its fair share of tragedies.</p>\n<p>Elbe is often described as the line dividing the Germanic and Slavic civilizations of old – we would argue and claim that it actually connects them, and you can feel that in Dresden. The city was once a small Slavic settlement and so its name sounds very familiar to anyone speaking Czech, Slovak, Polish or Sorbian. A small village turned into a city built around a castle in the 13th century and grew into one of the most important trading centers of the region at the end of the Middle Ages. One of the sources of its prosperity was silver and lead mined in the nearby Rudavy mountains. It was also then, at the end of the 15th century, when Dresden was elevated to become the seat of the Holy Roman Empire’s prince-electors. But it wasn’t until the early 1700s, when it really started to shine. It was then when the Saxon princes of the Wettin dynasty were elected Kings of Poland and Grand Dukes of Lithuania and Dresden gained its almost imperial grandeur. Zwinger Palace, Frauenkirche and the redesigned Dresden Castle are only a few pearls among dozens of baroque structures adorning the panorama.</p>\n<p>Yet, it was not to last forever. The events of the 20th century, Nazi domination and subsequent World War 2 left the city famously bombed to the point beyond recognition. However, unlike many of its Western German counterparts, the city centre of Dresden was painstakingly restored using old techniques and design elements and now, together with Warsaw, it stands as the most impressive example of historical reconstructions in Europe. So much so that while walking along its cobbled streets, you might not even notice that it’s all… new.</p>\n<p>On our tour, we will present you with the history of the city and its current lively face. We will be sure to make you understand how the Germanic organization merged with Slavic hopeless romanticism to form one of a kind Central European fusion.</p>\n<p>Today, Dresden is a leading tourism and educational hub and attracts visitors from Germany and abroad. A short ride from Prague and Berlin helps to plan it as a short weekend trip, but it can also be a base to discover the beauty of Saxony with the nearby Bautzen, the centre of the Sorbian culture or Meisen, famous for its medieval old town and porcelain.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including <a href=\"https://freewalkingtour.com/private-offer/\"> <strong>prices</strong> </a>, dates and booking rules.</p>",
    "highlightsTitle": "- Zwinger Palace\n- Frauenkirche\n- Procession of Princes\n- Dresden Castle\n- Brühl's Terrace\n- Semperoper\n- Hofkirche\n- Altmarkt Square",
    "highlightsDescription": "- Ornate baroque palace and art museum, a key symbol of Dresden's imperial grandeur.\n- Iconic Lutheran church, famously destroyed in WWII and rebuilt as a symbol of reconciliation.\n- A stunning mural made of Meissen porcelain tiles depicting the rulers of Saxony.\n- One of the city's oldest buildings, a former residence for electors and kings.\n- A historic riverside promenade nicknamed \"The Balcony of Europe\" with stunning Elbe views.\n- The grand opera house of the Saxon State Opera, known for its beautiful architecture.\n- The city's Catholic Cathedral, which also served as the royal court church of Saxony.\n- Dresden's historic old market square, home to the Kreuzkirche and famous Christmas markets.",
    "photoIds": [
      "44445",
      "17725",
      "32875",
      "21749",
      "17710",
      "17735",
      "17715",
      "48478"
    ]
  },
  {
    "city": "Dresden",
    "name": "Dresden Neustadt: From History To Hipster Guided Walking Tour",
    "short": "Dresden beyond the Old Town: Neustadt. We explore the districts across the Elbe, tracing Baroque rebuilding, industrial growth, and the post-1989 counterculture from Innere Neustadt to Äußere Neustadt — visiting the Golden Rider, Königstraße, Albertplatz, Dreikönigskirche, and the creative Kunsthofpassage.",
    "long": "<p>Go beyond Dresden’s Old Town, cross the Elbe and explore Neustadt, a district that has changed so many times in the past. From a fishing village, through a magnificent Baroque city, past the Industrial Revolution and wartime destruction, to the political and cultural ferment of the early 1990s! Join us to feel the true spirit of Dresden!</p>\n<p>Neustadt, which literally means ‘new town’, is not all that new. It dates back to the 11th century, when a small fishing village was settled here. To add to confusion, it was originally called “Altendresden” (Old Dresden), as it is where the original Slavic settlements existed. It soon grew into a town with its own market square and a church. All this was reduced to ashes in a devastating fire in 1685, only to be rebuilt in a much more spectacular and monumental form at the request of Augustus the Strong. Now renamed the New Royal City, it gave the area its current name. Despite the bombing of Dresden in February 1945, some amazing baroque buildings survived and can still be admired here. In stark contrast to the palatial Innere Neustadt is the outer Neustadt (Äußere Neustadt), an area born as a result of the Industrial Revolution, full of factories and shops established to meet the needs of the growing population. One of them is now known today as the most beautiful milk shop in the world. 1989, a time of change, brought new challenges to Neustadt: factories disappeared, some were turned into clubs and art galleries, while others were demolished to make way for residential buildings. The place where the artists used to live was no longer affordable for them. So they revolted – in 1990 the Bunte Republik Neustadt (“The Colourful Republic of the New Town”) was founded, rejecting the introduction of capitalism and declaring itself an independent state. Although it didn’t last long, it left an indelible mark on the cultural face of the area, and its ideas are still remembered here.</p>\n<p>Our walk will start at the Golden Rider, the most conspicuous statue in the area, setting the tone for the first part of our tour through the Inner New Town, which has the largest number of baroque buildings in Dresden! We will walk along the Königstraße to see some of the most beautiful houses and the Albertplatz with its charming fountains. We will see the Kügelgenhaus, where artists and thinkers, including Caspar David Friedrich, discussed romantic ideas, and stop at the Dreikönigskirche, once the city’s parish church. Then the atmosphere will change as we head into the area covered by graffiti and street art, known for its counter-culture: the Outer New Town. Many say it has the best club and pub scene in Germany! Walking around, you will see some of the coolest bars and cafés. We will stop at the Kunsthofpassage, a complex of a few courtyards that have been transformed by local artists into wonderful art zones. We will show you the famous Assi-Eck intersection, the hub of nightlife, and the popular Martin Luther Square. We will then pass by the Old Jewish Cemetery and end our tour in front of the most beautiful milk shop in the world, decorated with neo-Renaissance tiles.</p>\n<p>Join us to see the two contrasting faces of Neustadt and learn about its fascinating history. Discover the transformation of this vibrant district and see how its blend of old and new creates an unforgettable experience. We promise – this tour will change the way you see Dresden forever!</p>",
    "highlightsTitle": "- Golden Rider Statue\n- Königstraße\n- Kügelgenhaus\n- Outer Neustadt\n- Kunsthofpassage\n- Colourful Republic\n- Pfunds Molkerei",
    "highlightsDescription": "- An iconic equestrian statue of Augustus the Strong, marking the magnificent entrance to the Neustadt district.\n- Neustadt's grand Baroque street, lined with beautifully restored historic houses, courtyards, and exclusive boutiques.\n- A former meeting place for important German Romantic artists and thinkers, including Caspar David Friedrich.\n- A vibrant, alternative district known for its counter-culture, street art, independent shops, and bustling nightlife.\n- A series of interconnected courtyards creatively transformed by local artists into unique and imaginative installations.\n- A 1990s counter-cultural movement that declared independence, leaving a legacy of artistic freedom and activism.\n- Famed as the world's most beautiful dairy shop, lavishly decorated with hand-painted neo-Renaissance tiles.",
    "photoIds": [
      "48477",
      "35602",
      "35632",
      "35596",
      "21749",
      "35590",
      "35584",
      "35644",
      "35614",
      "35620"
    ]
  },
  {
    "city": "Dublin",
    "name": "Rebellion & Independence – Dublin North Side Tour",
    "short": "Historical tour of Dublin’s fight for independence, mid-19th to mid-20th century, from the Great Famine through the Easter Rising and War of Independence. We cover the north city centre—General Post Office, Garden of Remembrance, St. Mary’s Pro-Cathedral, Custom House, and the Famine Memorial.",
    "long": "<p>Ireland’s capital city witnessed heroic deeds and remarkable social change over its history, it holds stories of great ideas of freedom and solidarity but also of clashing cultures and world-views. This unique tour will focus on the changes that Dublin and Ireland went through over 100 years, between the mid 19th and mid 20th century. </p>\n<p>At first glance, in the 19th century and the beginning of the 20th century, Dublin looked relatively successful. But the first glance was deeply misleading. The reality was harsh and brutal. Infant mortality, hunger, crime and alcoholism, even among children, were ever present. Life in Dublin was not a fairy tale. The situation got tragic when the staple crop for most of the Irish poor – potatoes – was destroyed by a disease for several years in a row. The Potato Famine changed Ireland forever. About 1 million of its people died of starvation and diseases that followed after, and about two million left in a desperate search for a better life. It proved to be a watershed moment also for Irish national aspirations and accelerated changes in people’s mentality. They were ready to fight and shed blood for their ultimate goal – independence. This will be the story of these people, the story of desperation, struggle and faith. </p>\n<p>The tour will give you an overview of the history of the Irish struggle for independence – over the centuries, its people committed themselves to a myriad of sacrifices in the name of shared ideals. The dozens of lost uprisings ended up with the Easter Rising of 1916, which led to the War of Independence. Starting the tour at the General Post Office which became the headquarters of the insurgents, we will tell you what motivated them to take action, we will visit the Garden of Remembrance, a memorial to those who died for the state’s freedom. We will tell you what Sinn Féin is, and how it was formed. We will explain what impact did the Great Famine have on society, and finally tell you why theatre and actors were so influential in the drive for independence. </p>\n<p>Join us on a walk in the Irish rebels’ footsteps, to get a better understanding of what their ideas and beliefs were, but also to understand the modern city of Dublin. Join us and see the city through the eyes of Ireland’s freedom fighters!</p>",
    "highlightsTitle": "- General Post Office\n- The Great Famine\n- Easter Rising 1916\n- Garden of Remembrance\n- Famine Memorial\n- Custom House\n- St. Mary’s Pro-Cathedral",
    "highlightsDescription": "- The headquarters of the rebels during the 1916 Easter Rising, a symbol of Irish republicanism.\n- Learn about the catastrophic event that changed Ireland and fueled the fight for independence.\n- The story of the armed insurrection that proved to be a pivotal moment for Irish independence.\n- A serene memorial garden dedicated to all who died for the cause of Irish freedom.\n- Poignant sculptures commemorating the millions of victims of the devastating 19th-century Great Famine.\n- A neoclassical masterpiece that was a significant target during the Irish War of Independence.\n- An important symbol of the Catholic faith through the city's turbulent and changing history.",
    "photoIds": [
      "23244",
      "23238",
      "22896",
      "47819"
    ]
  },
  {
    "city": "Dublin",
    "name": "Welcome to Dublin! South Side Guided Tour",
    "short": "Introduction to Dublin, its history and culture. We trace the city’s story from Viking settlement through British rule to independence — walking along O’Connell Street, crossing the River Liffey to College Green, and exploring the medieval quarter. Highlights include the General Post Office, O’Connell Bridge, Trinity College, Christ Church Cathedral, and Dublin Castle.",
    "long": "<p>Dublin, just like its people, is ambiguous. At first glance, it is not the most handsome city you’ve ever seen, a place where signs of former greatness meet with the signs of former poverty. But give it a little time, and it will win you over just like its people – at first sarcastic and witty but warm, friendly and welcoming if you give them time. Welcome to one of the most curious capitals of the world, welcome to Dublin!</p>\n<p>The city, nestled on Ireland’s east coast, between the mountains and the mouth of the River Liffey, appeals to those who appreciate the beauty of nature. This safe bay was no doubt what attracted Danish Vikings who in the 9th century established one of their trading settlements here – at the time, referred to as Dúbh Linn meaning the Black Pond in Irish. Vikings resided here until the 12th century, when they were defeated by the Anglo-Normans. With time, England finally took over the entire island and Dublin grew to be the second-largest city in the British Empire and one of the biggest cities in Europe. In the 18th century when that happened, Dublin went through a spectacular transformation – fuelled by the economic growth the city was becoming more elegant than ever, attracting writers, thinkers, artists and musicians. But the time of prosperity was soon forgotten when in the 19th century Ireland and Dublin were struck by a number of disasters, culminating with the Irish Potato Famine. People of Ireland revolted against the English government a number of times, but it was only at the beginning of the 20th century when they successfully fought for independence. This however did not stop the bloodshed, but that is another story…</p>\n<p>Take a walk with us through the streets of the Irish capital to get the sense of its history and mentality of its people. We will take you on a journey through centuries, from the Roman times, when Dublin was called Hibernia, the land of winter, through the British occupation to liberation in the 20th century, finishing with stories of the recent remarkable transformation of the city and its inhabitants. We will get you acquainted with the most curious stories associated with Dublin. Starting at the Spire, the city’s most useless and visible monument, we will walk together across a unique bridge that’s wider than it is longer, discover how St. Patrick liberated the island from snakes that were never actually there, and find out why Ireland’s premier university – Trinity College – sued the creators of Star Wars movies. We will pass through the heart of entertainment life, the Temple Bar district, finishing by the least ‘castle-like’ castle of all the castles you have ever seen.</p>\n<p>Join us on this outstanding Irish adventure and exploration of Dublin. We guarantee an extraordinary journey through the history and culture of the city and the nation, topped off with amusing anecdotes and delicious recommendations of Irish specialities!</p>",
    "highlightsTitle": "- O’Connell Bridge in the Liffey River\n- Trinity College\n- Temple Bar\n- Christchurch Cathedral\n- St. Patrick’s Cathedral\n- Dublin Castle",
    "highlightsDescription": "- A unique Dublin bridge that is famously wider than it is long, crossing the River Liffey.\n- Ireland’s most prestigious university, home to the famous Book of Kells and beautiful historic grounds.\n- Dublin’s cultural heart, known for its vibrant nightlife, traditional pubs, and cobblestone streets.\n- Dublin’s oldest cathedral, founded in the 11th century, with a fascinating Viking history and stunning architecture.\n- The National Cathedral of Ireland, famously associated with the country's beloved patron saint, Saint Patrick.\n- The former seat of British rule in Ireland, now a major government complex and top attraction.",
    "photoIds": [
      "22962",
      "22968",
      "22956",
      "47818",
      "22896"
    ]
  },
  {
    "city": "Dubrovnik",
    "name": "Welcome to Dubrovnik! Old Town Guided Tour",
    "short": "Introduction to Dubrovnik, its history and culture. We trace the city’s past from the Republic of Ragusa to the 1991 siege, with a touch of its Game of Thrones fame. Walking along the Stradun, we see Onofrio’s Fountain, Dubrovnik Cathedral, the Rector’s Palace, and Sponza Palace, with context on the city’s famous walls.",
    "long": "<p>Close your eyes and imagine a white stone city with terracotta rooftops set against a turquoise sea. Can there be something more beautiful and enchanting than that? We think not! Welcome to the amazing city of Dubrovnik!</p>\n<p>The source of wealth for the tiny but brilliantly developed, self-governed town of Ragusa (that’s how Dubrovnik was called for centuries) was the sea and the maritime trade. International community of merchants and ship builders, some of the best in the Mediterranean, and effectively competing even with the Venetian Republic, would call it their home. Their meeting place was the Sponza Palace, cultural and business centre of Ragusa. This city-republic was ruled in an unexpectedly modern way, applying modern laws and regulations in almost every sphere of life, including politics! The governor, called the Rector, was chosen for only a month, a means taken to prevent anyone from getting too rich and powerful. He lived in the majestic Rector’s Palace, a beautiful gothic-renaissance building adorning the main promenade of the old city. Its appearance gives you a sense of what the life of aristocratic spheres, that valued their liberty very highly, was like.</p>\n<p>But the old city of Dubrovnik has one more marvel that makes it one of very few of its kind in the world – the spectacular city walls! They were built in the Middle Ages and expanded greatly in the 15th century, which featured the Turkish attack. Mighty walls, towers, bastions and cannons make it a fantastic scenery, so incredibly tale-like that it provided a perfect setting for many movies, including the Game of Thrones.</p>\n<p>During the tour we will walk the main promenade of the Old Town, the Stradun. We will hear fantastic stories of the free city-state of Ragusa and learn how Dubrovnik became a cradle of the Croatian culture. We will also talk about the 7 months of shelling in 1991 when the whole city was in danger and suffered great damages. Last but not least we will naturally visit the places that became known around the world thanks to the Game of Thrones series, including the famous stairs from the Cercei’s walk of shame!</p>\n<p>Since the tour operates in the city’s historical center, please keep in mind it’s forbidden to walk in a bikini or shirtless.</p>\n<p>During the tour, alcohol consumption is not permitted. Make sure that your behaviour does not affect other guests on the tour.</p>\n<p>This tour is not possible in a wheelchair since the route cannot be adjusted adequately.</p>",
    "highlightsTitle": "- City Walls\n- Rector's Palace\n- Stradun Promenade\n- Sponza Palace\n- Republic of Ragusa\n- Game of Thrones Sites",
    "highlightsDescription": "- Spectacular mediaeval fortifications offering incredible views of the city and the Adriatic Sea.\n- A majestic Gothic-Renaissance building that housed the government of the independent Republic of Ragusa.\n- Walk the main limestone-paved street of the Old Town, the vibrant heart of the city.\n- The former cultural and business center of Ragusa, a unique blend of Gothic and Renaissance styles.\n- Learn about the history of Dubrovnik as a powerful, independent maritime republic.\n- Discover real-life King's Landing, including the famous Jesuit Stairs from Cersei's 'walk of shame'.",
    "photoIds": [
      "20454",
      "20468",
      "20442",
      "20460"
    ]
  },
  {
    "city": "Edinburgh",
    "name": "Edinburgh Castle Guided Tour",
    "short": "A historical tour of Edinburgh Castle. Discover its highlights, from the Portcullis Gate and St. Margaret’s Chapel to the Great Hall, Royal Palace, and Argyle Battery. Learn the stories of the Crown Jewels and the Stone of Destiny; interiors are self-guided and can be explored after the tour.",
    "long": "<p>“Edinburgh Castle is a great and ancient fortress, with the city growing around it like a shell.” – William Ewart Gladstone </p>\n<p>On this tour you will be guided around Edinburgh Castle, with specific stops assigned by the castle authorities. No tour company is authorized to guide inside the buildings. After the tour you will have time to explore all of the buildings inside the castle until its closure.</p>\n<p>Begin your unforgettable journey through Edinburgh Castle, the iconic symbol of Scotland’s capital, meeting your guide at the historic Royal Mile. As you explore the ancient fortifications, the castle’s rich and storied past will come to life, unveiling captivating tales of battles, kings, queens, and legends that have shaped the country’s history, including the inspiring story of William Wallace, the hero portrayed in the film “Braveheart.”</p>\n<p>Discover the castle’s many treasures and learn about its pivotal role in Scotland’s turbulent history. Marvel at the architectural beauty and military might that have made it a symbol of Scottish pride and power. Uncover tales of love, betrayal, and intrigue that have echoed through the centuries. From the fateful reign of Mary, Queen of Scots, to the daring exploits of Bonnie Prince Charlie, you will be captivated by the extraordinary lives and events that have shaped Edinburgh Castle’s history.</p>\n<p>Whether you are a history buff or simply seeking to experience the magic of Scotland’s capital, your visit to Edinburgh Castle promises to entertain, educate, and leave you in awe of this incredible fortress. Don’t miss out on this unforgettable journey into Scotland’s past hidden within the walls of Edinburgh Castle.</p>",
    "highlightsTitle": "- St. Margaret's Chapel\n- Scottish Crown Jewels\n- Stone of Destiny\n- The Royal Palace\n- The Great Hall\n- Argyle Battery\n- Portcullis Gate\n- William Wallace Legend",
    "highlightsDescription": "- Discover the oldest surviving building in Edinburgh, dating back to the 12th century.\n- See the magnificent Honours of Scotland, the oldest crown jewels in the British Isles.\n- An ancient symbol of the Scottish monarchy used for centuries in coronation ceremonies.\n- Explore the former royal residence and the historic birthplace of King James VI.\n- Admire the impressive hall completed in 1511 for state ceremonies and banquets.\n- Enjoy breathtaking panoramic views of Edinburgh from this historic military defence.\n- The iconic and imposing fortified entrance to the historic Edinburgh Castle.\n- Hear the captivating story of Scotland's legendary knight and national hero, the famous \"Braveheart\".",
    "photoIds": [
      "38319",
      "30367",
      "30353",
      "20756"
    ]
  },
  {
    "city": "Edinburgh",
    "name": "Edinburgh: Ghosts, Mysteries & Legends in Spanish",
    "short": "Ghosts & Dark History of Edinburgh. Discover the city's darker side, from plague and witch hunts to body-snatching and the crimes of Burke and Hare. Walk through the Old and New Towns with stops at Old Calton Hill Burial Ground, Canongate Graveyard, and Calton Hill, where tales of torture and executions still linger.",
    "long": "<p>Unravel the sinister secrets of Scotland’s capital…. Our expert guides will lead you on a spine-chilling journey through the dark and twisted history of Edinburgh’s Old and New Towns, sharing haunting tales of the supernatural, infamous criminals, and terrifying events that have shaped the city’s past.</p>\n<p>As we navigate the atmospheric streets, we will delve into the horrifying stories of the Black Death, graverobbers, and notorious serial killers such as Burke and Hare. Discover how their heinous crimes sent shockwaves through the city and earned them a place in Edinburgh’s grisly folklore. Our tour will also take you to the eerily beautiful Old Calton Hill Burial Ground and Canongate graveyard, where we will explore the macabre history of torture, executions, and their restless spirits. From the haunting cries of the condemned to the sinister whispers of the undead, you will be left questioning the very fabric of reality. Edinburgh’s supernatural history extends beyond its graveyards, and our guides will regale you with tales of the Scottish Fairies and the city’s infamous witch hunts. Learn how superstition and fear led to the persecution of countless innocent souls and how their tortured spirits still linger in the city’s hidden corners.</p>\n<p>Whether you are a skeptic or a believer, our Edinburgh Ghost Walking Tour promises to captivate, educate, and send shivers down your spine. Immerse yourself in the city’s darkest secrets and join us on this unforgettable journey into the supernatural world. Book your spot today and dare to uncover the mysteries, legends, and murders that haunt Edinburgh’s past.</p>",
    "highlightsTitle": "- The Black Death\n- Graverobbing Tales\n- Burke and Hare\n- Old Calton Burial Ground\n- Canongate Graveyard\n- Edinburgh Witch Hunts\n- Scottish Fairies",
    "highlightsDescription": "- Uncover horrifying stories of the plague and its devastating impact on the city.\n- Learn about the dark history of body-snatching for medical science in Edinburgh.\n- Hear about the infamous serial killers who murdered for medical dissection money.\n- Visit an eerie graveyard and discover the spine-chilling stories of its restless spirits.\n- Explore one of Edinburgh’s most haunted graveyards and its macabre history.\n- Discover the tragic and horrifying history of the city’s witch trials and persecution.\n- Delve into the sinister side of Scottish folklore and its mischievous supernatural beings.",
    "photoIds": [
      "30341",
      "20742",
      "30335",
      "31995",
      "30329"
    ]
  },
  {
    "city": "Edinburgh",
    "name": "Welcome to Edinburgh! Old Town Guided Tour",
    "short": "Introduction to Edinburgh’s Old Town, its history and culture. We follow the Royal Mile towards Edinburgh Castle, continuing through the Grassmarket and Greyfriars Kirkyard. Highlights include the City Chambers, St Giles’ Cathedral, the Heart of Midlothian, and the Greyfriars Bobby statue, with historical context from William Wallace to Robert the Bruce.",
    "long": "<p>Welcome to Edinburgh, a place that has the power of setting people’s imagination running wild and free, enabling them to create amazing things. Magic, castles, pirates, adventures and crime are all there waiting to be discovered. Rest assured that you would want to come back for more over and over again, and each time Edinburgh will not cease to enchant and surprise you!</p>\n<p>The city developed from an old stronghold set on the rocky hill and a settlement below it. From one side it was guarded by the sea, from the other by mountains. For centuries, England and Scotland fought battles for it. Once often called an “old reekie” for the way its oldest parts looked like, dotted with crooked houses with countless added floors, narrow winding streets and black smoke constantly rising over its roofs. But then the new Edinburgh was built and for a change, it started to be called “Athens of the North” as it was here that thinkers, writers and artists created ideas that gave birth to the new Scottish society.</p>\n<p>Edinburgh forever attracted great artists, poets, writers and filmmakers, inspiring them to produce their finest works. It was here that Robert Louis Stevenson created his pirate stories, Arthur Conan Doyle founded the character of Sherlock Holmes and J.K. Rowling wrote her Harry Potter books. Where would we be without them?</p>\n<p>During the tour we will explore the historic centre of the city, located on a hill towering over Edinburgh. We’ll start at the representative Royal Mile and then begin the climb up to the royal castle to feel the mediaeval atmosphere of the city, as if taken straight from the legendary “Braveheart.” Edinburgh is famous for its dark stories and ghosts, so it’s no surprise that we’ll end up in Scotland’s most famous graveyard. But even in such a gloomy place we will surprise you with an exceptionally warm story about the strongest of friendships – the friendship between man and dog. Of course, there will be no shortage of tips on where and what to eat, we will try to reduce your fear of haggis and familiarise you with Scottish whisky. It is possible that we will ruin your notion that every Scot wears a kilt and plays the bagpipes, but that’s who we are – we want you to get to know the real Scotland and the more than 1,000-year history of its capital.</p>",
    "highlightsTitle": "- Royal Mile\n- St. Giles' Cathedral\n- Braveheart's Heroes\n- Grassmarket\n- Greyfriars Kirkyard\n- Greyfriars Bobby\n- Literary Edinburgh",
    "highlightsDescription": "- The historic main street of Edinburgh's Old Town, connecting the castle to the palace.\n- The main church of Edinburgh, also known as the High Kirk, located on the Royal Mile.\n- Learn the true stories behind Scottish national heroes William Wallace and Robert the Bruce.\n- A historic marketplace in the Old Town, once the site of public executions.\n- Scotland's most famous cemetery, home to notable graves and the city's most famous ghost.\n- Hear the heartwarming tale of the loyal dog who guarded his master's grave for 14 years.\n- Discover the city that inspired authors like J.K. Rowling and Sir Arthur Conan Doyle.",
    "photoIds": [
      "20742",
      "20789",
      "20736",
      "25773",
      "20748",
      "30335",
      "30355"
    ]
  },
  {
    "city": "Gdansk",
    "name": "Gdańsk City Game: Team Challenge",
    "short": "City Game in Gdańsk: discover the historic centre in a fun and interactive way — solving clues and completing tasks in teams as you explore. Along the route you’ll uncover stories of the city’s past and present through creative challenges. Activity available only in Polish.",
    "long": "<p>This activity is available only in Polish.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including prices, dates and booking rules.</p>\n<p>We kindly ask you to book private or group tours in advance, otherwise, we cannot guarantee that a guide will be available.</p>",
    "highlightsTitle": "- Gdańsk City Game\n- Polish Language Tour\n- Private Group Offer\n- Advance Booking\n- Guaranteed Guide",
    "highlightsDescription": "- An interactive game format for exploring the city of Gdańsk with a local guide.\n- This activity is available exclusively in the Polish language for an immersive experience.\n- The city game is available as a private offer, perfect for you and your group.\n- We kindly ask you to book your private tour in advance to secure your spot.\n- Booking ahead of time ensures that a guide will be available for your city game.",
    "photoIds": [
      "42508",
      "42522"
    ]
  },
  {
    "city": "Gdansk",
    "name": "Gdańsk: European Solidarity Centre Guided Tour",
    "short": "Tour focusing on history of Solidarity and the fall of communism in the European Solidarity Centre at the Gdańsk Shipyard. Trace the 1980 strikes and the movement that changed Europe as you follow the permanent exhibition through the 21 Demands boards, Lech Wałęsa’s story, the rise of Solidarity, and the shipyard itself.",
    "long": "<p>The European Solidarity Centre (ECS) is not only one of the newest museums in Poland, but also a museum presenting recent European history. A rust-coloured building resembling the crude hull of a ship under construction hides an exhibition presenting the bloodless upheaval staged by the shipyard workers of Gdańsk in 1980.</p>\n<p>Walkative!’s top-notch guides, who are qualified to lead tours of the permanent exhibition, will take you through the story of how the regime fell thanks to the determination of the workers. </p>\n<p>You are welcome to arrange a private tour at your convenience of the ECS main exhibition. We recommend a group of up to 10 people (maximum limit is 15 people). The tour of the ECS lasts approximately 2 hours. Our guides are ready to answer your questions, including those that go beyond the themes of the exhibition. The price of the tour does not include the price of the museum tickets. Call or write for details.</p>",
    "highlightsTitle": "- European Solidarity Centre\n- Solidarity Movement\n- Gdańsk Shipyard Strike\n- The Fall of Communism\n- Lech Wałęsa\n- 21 Postulates",
    "highlightsDescription": "- A modern museum telling the story of the collapse of communism in Europe.\n- Learn about the Polish trade union that peacefully challenged the communist regime.\n- The 1980 workers' protest that gave birth to the Solidarity movement and changed history.\n- Understand the events that sparked the beginning of the end for communism in Europe.\n- The story of the shipyard electrician who jumped the fence and won the Nobel Peace Prize.\n- How wooden boards with workers' demands became a priceless document of world heritage.",
    "photoIds": [
      "27722",
      "18015",
      "26414",
      "26410",
      "26384",
      "26359",
      "26353",
      "18020"
    ]
  },
  {
    "city": "Gdansk",
    "name": "Gdańsk Private Custom Tour",
    "short": "Create your own tour of Gdańsk, choosing from themes such as Main Town history, WWII and Solidarity, or the seaside. Visit key sites like Długi Targ with the Neptune Fountain, St. Mary’s Basilica, the European Solidarity Centre, or Westerplatte, tailored to your interests and pace.",
    "long": "<p>A private tour is a great opportunity for people who have limited time and cannot join our regular FREE walking TOURs or simply prefer staying in a small group of friends.</p>\n<p>It is you who chooses when the tour should start and what should be its topic. If you are not sure what do you want to visit during the tour, let us know and we will help you plan the tour that fits best your needs and interests.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including <a href=\"https://freewalkingtour.com/private-offer/\"> <strong>prices</strong> </a>, dates and booking rules.</p>\n<p>What is more, you do not have to worry about finding the guide at the meeting point – they can meet you in any place in the city or pick you up from your hotel. You don’t have to follow our strict schedule of regular tours, we can make a tour according to your needs.</p>\n<p>Let us know what kind of group are you (students, school group, seniors, group of friends, group of colleagues on a business trip, etc.) and what are your interests and we will do our best to prepare for you a tour that fits your needs and expectations.</p>\n<p><strong>LANGUAGES:</strong></p>\n<p>We can arrange private tours for you in different languages:</p>\n<p>English</p>\n<p>Polish</p>\n<p>Spanish</p>\n<p>German</p>\n<p><strong>PRICES & BOOKING RULES</strong></p>\n<p>Every group or visitor that comes to us has different needs, interests, and expectations. Because of that, we treat every one of them individually to make sure that our services will meet their expectations. If your time is limited and you would like to try more than one tour or you would like to see something else, let us know and we will prepare a tailor-made tour for you. The final price can be varied. It will depend on the language and duration of your tour.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including prices, dates and booking rules.</p>\n<p>We kindly ask you to book private or group tours in advance, otherwise, we cannot guarantee that a guide will be available.</p>",
    "highlightsTitle": "- Main Town Gdańsk\n- European Solidarity Center\n- World War II Museum\n- Battle of Westerplatte\n- Stutthof Concentration Camp\n- Sopot Resort Town\n- Roads to Freedom",
    "highlightsDescription": "- The historic heart of the city, beautifully reconstructed with its iconic colorful facades and famous landmarks.\n- Discover the history of the Solidarity movement that led to the fall of communism in Eastern Europe.\n- Learn about the global conflict that started in Gdańsk, focusing on the experiences of the Polish people.\n- Visit the site where the first shots of World War II were fired, a symbol of Polish resistance.\n- A memorial visit to the first Nazi concentration camp established on Polish soil during World War II.\n- A trip to the charming seaside town known for its iconic wooden pier and vibrant atmosphere.\n- Trace Poland's journey from communism to democracy, focusing on the influential Solidarity trade union movement.",
    "photoIds": [
      "14583",
      "47033",
      "12804",
      "13285",
      "47042",
      "18009",
      "3983",
      "47034"
    ]
  },
  {
    "city": "Gdansk",
    "name": "Gdańsk Shipyard Uncovered: Birthplace of Solidarity Guided Tour",
    "short": "Historical tour of the Gdańsk Shipyard and its role in Solidarity and the fall of communism; we start at Plac Solidarności and move into the yards to trace the city’s industrial past and post‑1989 transformation – Monument to the Fallen Shipyard Workers of 1970, the shipyard grounds and cranes.",
    "long": "<p>The Gdańsk Shipyard is a must-see for visitors to Gdańsk, so we invite you to our Walkative! tour to uncover with us the Shipyard of change.</p>\n<p>For many, the Gdańsk Shipyard is the cradle of “Solidarity” and a symbol of the fall of communism in Europe. For fans of industrial buildings, it is a magical space where the industrial architecture of the late 19th century meets the early 20th century, where relics of communism intertwine with modern 21st century architecture.</p>\n<p>The Gdańsk Shipyard is a place where imperialism changed into capitalism, where the industrial goals of Nazism changed into the industrial goals of socialism, where communism with the entire Iron Curtain changed into freedom, where the brutal hand of the free market changed the industrial space into a place of entrepreneurship, culture and entertainment.</p>\n<p>We will start our tour at Plac Solidarności (next to Pomnik Poległych Stoczniowców 1970 Monument), from where we will take a journey through the dark years of communism, arriving at the Shipyard, where a lot happened and is still happening.</p>\n<p>Come to the Gdańsk Shipyard Ucovered Tour by Walkative!</p>",
    "highlightsTitle": "- Solidarity Movement\n- Fall of Communism\n- Fallen Shipyard Workers Monument\n- Industrial Architecture\n- Shipyard's Modern Life\n- Communist-era History\n- Centuries of Change",
    "highlightsDescription": "- Learn about the birthplace of the trade union that played a key role in ending communism.\n- Discover the shipyard's role as a symbol of the collapse of the Iron Curtain in Europe.\n- See the powerful monument at Solidarity Square commemorating victims of the 1970 worker protests.\n- Admire a unique mix of 19th-century industrial buildings, communist relics, and 21st-century structures.\n- Explore how the area has transformed into a vibrant hub of culture, art, and entertainment.\n- Journey through the \"dark years of communism\" and learn about the industrial goals of socialism.\n- Hear how the shipyard transformed under imperialism, Nazism, socialism, and modern capitalism.",
    "photoIds": [
      "18009",
      "26431",
      "26359",
      "21755",
      "18015",
      "18030",
      "26353",
      "47016"
    ]
  },
  {
    "city": "Gdansk",
    "name": "Welcome to Gdańsk! Main Town Guided Walking Tour",
    "short": "Introduction to Gdańsk’s history and culture in the Main Town, from Baltic trade and the Free City era to the outbreak of WWII. See the Golden Gate, St. Mary’s Basilica, and Arthur’s Court before finishing at the Old Harbor with the Crane and the Polish Post Office.",
    "long": "<p>Gdańsk, Gdanzc, Dantzk, Danzig… whatever it was called, it always symbolized the same thing – the proud, wealthy, independent, beautiful pearl of the Baltic Sea. Its character, visible until today, was shaped by gold and vanity. Wealthy merchants came here from all corners of Europe and simply considered themselves citizens of Gdańsk – Danzigers.</p>\n<p>The source of the city’s prosperity was its perfect location. Established in the 10th century, over time it became the largest city of the Polish-Lithuanian Commonwealth and the biggest harbor on the Baltic Sea, supplying Europe with Polish grain, timber, and “Baltic gold” – amber. The city was the birthplace of Daniel Fahrenheit, Arthur Schopenhauer, and Günter Grass. Napoleon once said, “Gdańsk is the key to everything,” and created the first Free City of Danzig. Much later, the second Free City of Danzig was intended by Adolf Hitler to become the home of the Nazi movement. World War II – the world’s largest military conflict – began right here on 1 September 1939. It was also here in Gdańsk that the shipyard workers’ strike led by Lech Wałęsa heralded the beginning of the end of communism in this part of Europe.</p>\n<p>Come join us for a walk through the cobbled streets of the Main Town, filled with elegant, slender buildings and charming terraces. Visit the biggest brick church in the world, see the largest crane in medieval Europe, and listen to the fascinating history of the City of Freedom.  </p>\n<p><a href=\"https://freewalkingtour.com/tours/gdansk-private-tour/\"> <strong>PRIVATE TOUR</strong> </a> </p>\n<p><strong>The last point</strong> is near to Monument to the Defenders of the Polish Post Office. Location: https://goo.gl/maps/Rbmy7JwXfbr4EcwQ9.</p>\n<p>After the Main Town tour we strongly recommend taking our <a href=\"https://freewalkingtour.com/tours/nazi-terror-tour/\">Nazi Terror</a> to talk about the dark WW2 days and <a href=\"https://freewalkingtour.com/tours/gdansk-shipyard-tour-poland/\">Gdańsk Shipyard Uncovered</a> tour to talk about the cradle of “Solidarity” movement and a fight that eventually brought communism to an end in Europe.</p>",
    "highlightsTitle": "- Uplands & Golden Gates\n- Prison Tower\n- Great Armory\n- Main Town\n- St. Mary's Basilica\n- Artus's Court\n- The Crane",
    "highlightsDescription": "- The grand historical entrance to the city's Royal Route, once welcoming Polish kings and guests.\n- Part of the medieval fortifications which once housed a notorious torture chamber and city dungeon.\n- An ornate 17th-century building that once served as the city's impressive main arsenal.\n- The historic heart of Gdańsk, with cobbled streets, elegant buildings, and charming terraces.\n- One of the world's largest brick churches, dominating the city skyline with its massive tower.\n- A former meeting place for the city’s wealthy merchants and a centre of social life.\n- The largest port crane in mediaeval Europe, a powerful symbol of Gdańsk's trading history.",
    "photoIds": [
      "21126",
      "47005",
      "21755",
      "14577",
      "47023",
      "14583",
      "47008",
      "3983"
    ]
  },
  {
    "city": "Gdansk",
    "name": "From Free City to Nazi Terror: WWII in Gdańsk",
    "short": "Tour focusing on the era of the Free City of Danzig and World War II in Gdańsk, tracing the rise of Nazism and the fate of Jewish and Polish minorities. We visit key sites in the historic center and beyond, including the Uplands Gate, Gdańsk Shakespeare Theatre, former Intelligence Agency, Main Train Station, and Gradowa Hill.",
    "long": "<p>The 20th-century Free City of Gdansk was not a city of freedom… at least not for everyone.</p>\n<p>Between WWI and WWII, a small semi-independent city-state (the Free City of Danzig) was the nest of the Nazi movement. From the early ’30s till the end of WWII the city of Gdańsk witnessed countless marches of SS and SA troops, fluttering swastikas, acts of violence and terror against local Jews and Poles, and finally death of all: Jews, Poles, Germans and … the city itself.</p>\n<p>Come to our tour to hear the story of what was one of the cradles of the Nazi movement. Get to know the story of the Jewish and Polish minorities of Gdańsk. Find out about the tragedy four times larger than the one of Titanic. Learn about both glorious and shameful moments of wartime Gdańsk, the city where it all started.</p>",
    "highlightsTitle": "- Free City of Danzig\n- Rise of Nazism\n- Uplands’ Gate\n- Main Train Station\n- Gradowa Hill\n- Polish & Jewish Stories",
    "highlightsDescription": "- A semi-independent city-state between the World Wars, a cradle of the Nazi movement.\n- Learn how the Nazi movement gained power in the city of Danzig before WWII.\n- A historic city gate that witnessed countless Nazi parades and the city's wartime transformation.\n- A key transportation hub that played a significant role in the city's wartime events.\n- A strategic viewpoint offering insights into the city's wartime history and fortifications.\n- Hear the tragic stories of the Polish and Jewish minorities under Nazi oppression.",
    "photoIds": [
      "3676",
      "21755"
    ]
  },
  {
    "city": "Gdansk",
    "name": "Sopot City Game",
    "short": "City Game in Sopot: explore the seaside town in a fun and interactive way — solving clues and completing tasks in teams as you move through its streets and landmarks. Along the route you’ll discover stories of Sopot’s past and present, from the pier to the town centre, through engaging challenges. Activity available only in Polish.",
    "long": "\"<p>Discover Sopot with Walkative! 😊 We invite you to participate in a city game, during which you will get to know this extraordinary city and the people who created it in an interesting way.\n<p>Who was the visionary who first came up with the idea of creating a real spa infrastructure here? Where is the oldest building in Sopot? Who built the most tenement houses here? Where did Witold Wańkowicz live? Who was the funniest soldier who fought in the Battle of Monte Cassino? What are the names of the shells that lie on the beach? Who accompanied the guests of the Grand Hotel in Sopot unnoticed? You will have the opportunity to answer these and many other questions yourself during an interactive tour of the resort – because Sopot is a city that not only asks questions, but also provides answers.\nParticipants in our game are divided into teams of several people, whose task is to discover the secrets of the city. Each group receives a set of questions and a map, and then sets off on a journey during which they find the answers to the questions themselves, competing with the rest of the participants! The teams that score the most points will receive prizes. Our city game is great not only for families with children and individual tourists, but also for team-building events, school tours, and summer camps.\n<p>The estimated duration of the event is 1.5-2 hours. We meet in Sopot at Plac Przyjaciół Sopotu (Sopot Friends Square) next to the Haffner Center (Multikino) building, where you will see a guide with a yellow Walkative umbrella!</p>\n<p>Cost of participation in the city game:</p>\n<ul>\n<li>adult – PLN 50  </li>\n<li>child – PLN 20  </li>\n<li>children under 6 – free  </li>\n<li>family ticket (2 adults + children [max. 4]) – PLN 120  </li>\n</ul>\n<p>Payable on site to the guide.</p>\n<p>Game for organized groups of up to 35 people – PLN 590</p>\"",
    "highlightsTitle": "- Healing Resort Visionaries\n- The Oldest House in Sopot\n- Famous Tenement Builders\n- Witold Wańkowicz’s Home\n- Monte Cassino’s Funniest Soldier\n- Secrets of the Grand Hotel\n- Seashell Mysteries",
    "highlightsDescription": "- Learn about the pioneers who turned Sopot into a famous spa destination.\n- Find the city’s most ancient building and uncover its hidden stories.\n- Discover the entrepreneurs who shaped Sopot’s iconic architecture.\n- Visit the place once lived in by the celebrated Polish writer.\n- Hear the curious story of a legendary soldier connected to Sopot.\n- Uncover the hidden guest who once slipped unnoticed among celebrities.\n- Explore the Sopot beach and learn the names of the shells lying on the sand.",
    "photoIds": [
      "18183",
      "21755",
      "18198",
      "18188",
      "18178",
      "18203"
    ]
  },
  {
    "city": "Gdansk",
    "name": "Gdańsk Pub Crawl",
    "short": "Nightlife pub crawl in Gdańsk’s Main Town. Join local guides and an international crowd to explore the lively streets around Neptune’s Fountain and the historic centre’s main avenues. We visit several bars along the way and finish the night together at a club.",
    "long": "<p>Looking for a great night out? Want to meet other people and party together? Pub Crawl Gdansk is an absolute must-do while in the north of Poland! It is the only regularly organized party tour in 3city. Our local guides will show you the best bars &amp; clubs in this part of Poland where you will party like a rockstar until late morning!</p>\n<p>During this 4 hour of pure fun, together with an international crowd led by our friendly local guides, you will enjoy a memorable night full of excitement and great company. In each of the venues you’ll get a free shot, along with 2 free drinks of your choice in one of the bars, and free entry to one of the coolest venues in Gdansk. Just go for it and join our Pub Crawl Party Crowd at 8:30 PM at the Neptune’s Fountain and make the most of your stay in Gdansk!</p>\n<p>Meet us at <strong>8:30 PM at the Neptune’s Fountain</strong>. Look for the guides. Shall you have any problem please call <strong>+48 575 030 304.</strong></p>",
    "highlightsTitle": "- Expert Party Guides\n- International Crowd\n- Gdansk's Best Bars\n- Free Welcome Shots\n- Two Free Drinks\n- VIP Club Entry",
    "highlightsDescription": "- Let our fun, local guides show you the best spots for an unforgettable night out in Gdansk.\n- Meet and party with other fun-loving travellers from all around the world in a great atmosphere.\n- Explore a curated selection of the city’s liveliest and most popular bars on a 4-hour tour.\n- Get the party started with a complimentary shot in every single bar that you visit with us.\n- Enjoy two free drinks of your choice at one of the best bars on the pub crawl.\n- Finish the night in style with free entry to one of Gdansk's most popular nightclubs.",
    "photoIds": [
      "4927",
      "4937",
      "4932",
      "16727",
      "4947",
      "4942"
    ]
  },
  {
    "city": "Gdansk",
    "name": "Welcome to Sopot! Guided Walking Tour",
    "short": "A walking tour of Sopot: stroll through the town famous for its grand villas, vibrant promenade (Monciak), the Crooked House, the longest wooden pier in Europe, and the storied Grand Hotel. Along the way, hear about local legends, cultural icons, and what makes Sopot the Tricity’s seaside heart.",
    "long": "<p>Sopot is the smallest of the towns constituting Polish Tricity. On one side it neighbours historic Gdańsk, on the other industrial Gdynia. So what is its role in this organism? Very simple, yet very important – Sopot is the nightlife centre of the Tricity! Once it was mainly a spa town, full of 19th century mansions, palaces and cafes where the intellectual and cultural elite of the country spent their vacations. Today, the old style mixes with modernity and kitsch of the 90’s, and Sopot, and in particular the so-called Monciak, or Bohaterów Monte Cassino Street is a place where you can meet the stars of Polish culture, the cream of society and the richest Poles flaunting their wealth. This 600 metre long promenade is full of sophisticated restaurants and modern clubs, next to which you can still find the old intellectual cafes and pubs. It all ends with what is most important in Sopot – the longest wooden pier in the world. But Sopot is not only about glamour, parties and fun. It is also beautiful architecture and a large dose of history. In the Sopot Grand Hotel Adolf Hitler stayed before the war and after the war the French President Charles de Gaulle spent his time. Who knows, maybe they stayed in the same room? </p>\n<p>During our tour we will explore the vibrant atmosphere of the city, discovering its blend of historic charm and contemporary energy. You will hear intriguing stories and experience the unique spirit that makes Sopot the most party city on the Polish coast!</p>",
    "highlightsTitle": "- Monciak Street\n- Crooked House\n- Sopot Pier\n- Grand Hotel\n- Wojtek the Bear Monument\n- SPATiF Club\n- Spa Town Heritage",
    "highlightsDescription": "- The city's main promenade, famous for its vibrant nightlife, restaurants, and bustling atmosphere.\n- An iconic building with a unique, fairytale-like design, symbolizing Sopot's postmodern architecture.\n- The longest wooden pier in Europe, offering stunning views of the Baltic Sea.\n- A luxurious, historic hotel that hosted guests like Adolf Hitler and Charles de Gaulle.\n- A monument dedicated to the famous Syrian brown bear who served in the Polish army.\n- A legendary artists' club known for its scandalous parties and bohemian atmosphere.\n- Discover Sopot's past as a 19th-century spa resort through its beautiful historic villas and mansions.",
    "photoIds": [
      "18203",
      "18183",
      "18193",
      "18198",
      "21755",
      "18188",
      "18178",
      "47003"
    ]
  },
  {
    "city": "Gdansk",
    "name": "KL Stutthof Concentration Camp – Guided Tour",
    "short": "WWII history at Stutthof, the first Nazi concentration camp established outside of Germany. We visit the museum site and preserved facilities to examine the camp’s operation and victims – barracks, gas chamber, crematorium, commissariat and camp canteen.",
    "long": "<p>Excursion to Stutthof, a former concentration camp and the first Nazi concentration camp built on the territory of present-day Poland. Out of 110,000 prisoners of 28 nationalities, 65,000 lost their lives here.</p>\n<p>The price includes transport (max. 4 persons). The tour including transport lasts approx. 4 hours.</p>",
    "highlightsTitle": "- Stutthof Museum\n- Historical Exhibition\n- Prisoner Barracks\n- Gas Chamber\n- Crematorium",
    "highlightsDescription": "- Site of the first Nazi concentration camp in Poland, now a state museum and memorial.\n- An exhibit detailing the camp's history and the fates of its more than 110,000 prisoners.\n- See the preserved barracks where prisoners were forced to live in horrific conditions.\n- A somber visit to the authentic gas chamber used for the mass murder of prisoners.\n- See the ovens where victims' bodies were incinerated, a testament to the camp's atrocities.",
    "photoIds": [
      "27608",
      "27614"
    ]
  },
  {
    "city": "Gdansk",
    "name": "Gdańsk: The Battle of Westerplatte Guided Tour ",
    "short": "WWII history at Westerplatte in Gdańsk: discover where the war began with the opening shots of 1 September 1939 and learn about the seven-day defense of the peninsula. Visit key sites including the Monument to the Defenders of the Coast, Guardhouse No. 1, the former Military Transit Depot, and the ruins of the barracks.",
    "long": "<p>Westerplatte, a small peninsula was the starting point of the world’s largest military conflict. A 7-day long battle between the mighty German Army and a small group of Polish soldiers was the first episode of WW2. Come with us to Westerplatte, to know the history of blood, honour and courage. </p>\n<p>At dawn, 1 September 1939, the eyes of the world turned towards Gdańsk. The main gun battery of the German battleship Schleswig-Holstein announced the beginning of a new world war. Surrounded and isolated, Westerplatte, attacked from land, air and sea, was expected to be taken within a maximum of 3 hours. But what was supposed to be a quick victory turned into a furious battle that took 7 days and many brave lives. Soon, stories and songs, the incredible effort of Polish soldiers of Westerplatte.</p>\n<p>Come and see with your own eyes how the impossible became possible. Learn how a small company of men fought their way to immortality in the annals of history.</p>",
    "highlightsTitle": "- Westerplatte Peninsula\n- Outbreak of WWII\n- Battle of Westerplatte\n- Battleship Schleswig-Holstein\n- Polish Soldiers' Courage\n- The Seven-Day Siege",
    "highlightsDescription": "- The historic site where the first battle of World War II in Europe took place.\n- Learn about the German invasion on September 1, 1939, which ignited the devastating global conflict.\n- The story of the epic struggle between a small Polish garrison and overwhelming German forces.\n- The German warship that fired the first shots of World War II, starting the assault.\n- Hear stories of blood, honour, and incredible bravery of the Polish defenders against impossible odds.\n- Discover how a defense expected to last only hours heroically held out for an entire week.",
    "photoIds": [
      "3687",
      "21755"
    ]
  },
  {
    "city": "Gdansk",
    "name": "Gdańsk WW2 Museum Guided Tour",
    "short": "WWII history at the Museum of the Second World War in Gdańsk: we guide you through the main exhibition—underground galleries, thematic rooms, and multimedia displays—to explain the war from its origins, including the Treaty of Versailles and Franco’s regime, to major battles and fronts across Europe, Africa, Asia, and the world’s oceans.",
    "long": "<p>The Museum of the Second World War (WW2M) is the most popular museum in Gdańsk, visited by several hundred thousand visitors each year. The inconspicuous, modern architecture of the tower is the azimuth leading to a huge underground building housing a gigantic exhibition of exhibits, maps, multimedia and graphics. A visit to the M2W is not only a fascinating journey in time and space, but also a valuable history lesson.</p>\n<p>A self-guided tour of the M2W’s extensive main exhibition can take between two hours and two days. Numerous thematic rooms and multimedia allow you on the one hand to immerse yourself in history, and on the other hand to get lost in the multitude of themes. The best Walkative! guides who are certified by the WW2 Museum will take you on an interesting journey through the greatest war in the history of mankind, which began in Gdańsk. Dates, facts, names and figures will be combined by the guides of Walkative! into a coherent, harmonious story of tragedy, violence, suffering, destruction, courage and heroism.</p>\n<p>You are welcome to arrange a private tour at your convenience of the main exhibition of the WW2M. We recommend a group of up to 10 people (maximum limit is 15 people). The tour of the museum lasts approximately 3h. Our guides are ready to answer your questions, including those that go beyond the subject of the exhibition. The tour price does not include the price of museum tickets. Excursions are not offered on Tuesdays. Call or write for details.</p>",
    "highlightsTitle": "- Museum's Architecture\n- Origins of WWII\n- Global Theaters of War\n- Main Exhibition\n- Human Stories of War\n- Expert Guided Tour",
    "highlightsDescription": "- A modern, symbolic tower leading to a vast underground exhibition space housing the main collection.\n- Discover the political tensions and events that led to the war's outbreak, starting in Gdańsk.\n- Explore the conflict's scope, from European battlefields to fronts in Africa, Asia, and across the oceans.\n- A huge underground collection of artifacts, maps, and multimedia telling the comprehensive story of the war.\n- Go beyond facts and figures to understand the personal experiences of tragedy, courage, suffering, and heroism.\n- Navigate the vast exhibition with a museum-certified guide who brings the complex history of the war to life.",
    "photoIds": [
      "27652",
      "27658",
      "27676",
      "27664",
      "27701",
      "27695",
      "27689",
      "27683"
    ]
  },
  {
    "city": "Ghent",
    "name": "Dark Stories of Ghent: Night Tour",
    "short": "Night walk through Ghent’s darker side in the historic center along the Lys: Graslei and the Hoofdbrug (Execution Bridge), Vrijdagmarkt, Gravensteen Castle, and the De Stroppendrager statue. We explore tales of medieval executions and Charles V’s humiliation of the city.",
    "long": "<p>Ghent, the capital of the province of East Flanders, is an excellent destination for lovers of history, architecture (medieval, modern and contemporary) and… Belgian delicacies. However, the fantastic atmosphere and the city center, which is a UNESCO World Heritage Site, are not the only reasons why crowds of tourists from all over the world flock here. Ghent was the scene of many interesting and often frightening events throughout its long history… Let’s dive into them together!</p>\n<p>Ghent’s horror stories are connected, among other things, to the Graslei waterfront – it is here, on the banks of the River Lys and in close proximity to the Park Appelbrugparkje, there is the famous Hoofdbrug bridge, also known as the ‘execution bridge’. Today it is a popular tourist destination, but back in dark medieval times murderers and rapists were brought to this stone bridge to be punished by beheading. On the bridge there used to be also two monuments commemorating the macabre experiment of the Count of Flanders. The cruel man decided to execute the related rebels (father and son) in an unusual way – the one who would dare to cut off the head of the other would be spared. Father and son agreed that the younger of the two should survive, but when the son proceeded to carry out the execution, the sword shattered into tiny pieces… So much legend but in addition to the bridge, public executions in Ghent were also carried out on the Vrijdagmarkt. On such occasions crowds of onlookers eager for this macabre entertainment would gather. The instruments used during torture and execution can be seen today in Gravensteen Castle, otherwise known as the “Castle of the Counts”. The hero of many legends connected with Ghent is King Charles V. The Spanish ruler humiliated the rebellious citizens of Ghent: some of the rebels were executed, while the others were led through the streets of the city with nooses hung around their necks. Those events are still remembered in the city – near the St Anthony Bridge there is a statue of De Stroppendrager, depicting a rebel with a noose hung around his neck. </p>\n<p>If you want to discover lesser-known, often dark secrets of Ghent join us for a guided night walk. We have many such tales in store for you! Join us to feel the thrill and see the city at night, when it empties, becomes very atmospheric and… spooky!</p>",
    "highlightsTitle": "- Graslei Waterfront\n- Hoofdbrug Bridge\n- Vrijdagmarkt Executions\n- Gravensteen Castle\n- King Charles V\n- De Stroppendrager Statue",
    "highlightsDescription": "- The riverfront that was the scene of many dark medieval events and public punishments.\n- The infamous ‘execution bridge’ where criminals were publicly beheaded during the Middle Ages.\n- A historic square that also served as a gruesome location for crowded public executions.\n- The \"Castle of the Counts,\" which houses a museum of torture and execution instruments.\n- The Spanish ruler who cruelly suppressed a Ghent revolt, executing and humiliating its citizens.\n- A monument depicting a rebel with a noose, a symbol of Ghent's historic uprising.",
    "photoIds": [
      "23809",
      "23842",
      "20388"
    ]
  },
  {
    "city": "Ghent",
    "name": "Welcome to Ghent! Historic Centre Guided Tour",
    "short": "An introduction to Ghent’s history and culture in the medieval center along the Leie. We follow the canalsides and main squares to key sights: Saint Michael’s Bridge, Graslei and Korenlei, Saint Bavo’s Cathedral and the Belfry, and Gravensteen Castle.",
    "long": "<p>Ghent seems marvellously frozen in time with its mediaeval architecture almost completely intact and unbelievably picturesquely settled along canals and riverfront of Leie. It feels small and cosy but at the same time vibrant and quirky, having so much to offer in terms of sightseeing, museums, food and activities which all creates a perfect combination for a couple of days visit!</p>\n<p>The area where Ghent is located was inhabited since the Stone Age, but the city, which was settled between two early medieval abbeys, grew in strength and importance particularly from the 11th century onwards. This was the time when Ghent was developing into one of the biggest European metropolises – often called Manhattan of the Middle Ages – successfully battling with Paris for the palm of supremacy among cities in the north. Its citizens were becoming ever richer thanks to the highly developed wool trade. Having a proud and independent nature, the people of Ghent have repeatedly rebelled against authority and fought for their freedoms. They and their city were punished severely for that too, so during its history Ghent saw devastation and bloodshed a number of times.</p>\n<p>The textile business that shaped Ghent in the Middle Ages had its second boom centuries later, at the turn of the 18th and 19th century, with the new inventions that simplified and fastened the process of textile manufacturing. Textile trade meant so much back in the day that even a magnificent 12th century Ghent castle, the Gravensteen, was converted into a cotton mill!</p>\n<p>A visit to Ghent will be a treat not only for history buffs but also architecture lovers. Besides the beautifully preserved medieval centre, listed on the UNESCO Heritage List, there are excellent examples of modernist and contemporary architecture too. What is more, the people of Ghent have mastered the impossible – it is not a city-museum but a truly living place where the comforts of life are mixed with the respect for the monuments of history. Speaking about the comforts and joys of life, while visiting Ghent one cannot miss three excellent Belgian delights – pralines, waffles, and beer (not necessarily in this order!). Combine it with great museums where you find masterpieces of Flemish painters like Bosch or Rubens, contemporary works of Warhol, Horta and Le Corbusier as well as amazing parks and green zones, and it becomes clear why you simply have to come here! And while you are here, join our tour! It will be a perfect introduction to the city, to learn about its history, legends, and curiosities and a way to discover why some call Ghent “Europe’s best-kept secret”!</p>",
    "highlightsTitle": "- St. Michael's Bridge\n- St. Nicholas' Church\n- Graslei & Korenlei Quays\n- St. Bavo's Cathedral & Belfry\n- Historic Guild Houses\n- Gravensteen Castle\n- Vrijdagmarkt Square",
    "highlightsDescription": "- A central bridge offering the most iconic panoramic view of Ghent's three famous towers.\n- A prime example of Scheldt Gothic architecture and one of the city's oldest landmarks.\n- Picturesque quays along the Leie river, lined with historic buildings, forming the medieval port.\n- Home to the Ghent Altarpiece and a 91-metre-tall belfry, a UNESCO World Heritage site.\n- Magnificent buildings that belonged to powerful medieval guilds, showcasing the city's historical wealth.\n- A 12th-century castle of the Counts of Flanders with a turbulent history as a fortress.\n- A historic square that has been the city's bustling social and political heart for centuries.",
    "photoIds": [
      "20957",
      "20388",
      "20945",
      "20939"
    ]
  },
  {
    "city": "Glasgow",
    "name": "Welcome to Glasgow! Historic Centre Guided Walking Tour",
    "short": "Introduction to Glasgow, its history and culture. From George Square through the city’s heart — City Chambers, Buchanan Street, and the cone-topped Duke of Wellington statue — past the Tobacco Merchant’s House and Glasgow Cross, we finish at the Cathedral, with stories of industrial growth, social change, rivalry, humour, and identity.",
    "long": "<p>Glasgow, the largest city in Scotland and once known as the “Second City of the Empire,” has a rich and complex history that dates back centuries. Its rapid industrial growth during the 19th century, fueled by shipbuilding and trade, made it one of the most prosperous cities in the British Empire. However, the decline of these industries in the 20th century, the closure of coal mines, and the policies of Margaret Thatcher’s government brought economic hardships and social challenges that have shaped the city’s modern identity. It was shaped as well by the competition between two groups, the Catholics and the Protestants, which is still evident today through the intense competition between the two football teams, the Catholic Celtic and the Protestant Rangers. Their rivalry, known as the Old Firm, has left a lasting impact on the city’s culture and identity. Another unique aspect of Glasgow is its distinctive local accent, known as Glaswegian. You’ll experience its charm firsthand when you hear our local guide sharing stories and insights during the tour.</p>\n<p>Discover how the city rose to prominence and the dark secrets that lie beneath its surface. From tales of crime and punishment to the impact of political decisions, uncover the stories that have left their mark on Glasgow’s heart. The tour begins in George Square, a bustling city center steeped in history. Marvel at the stunning architecture that surrounds you, including the Glasgow City Chambers, a symbol of the city’s Victorian prosperity. Stroll down Buchanan Street, one of the city’s main shopping thoroughfares, and admire the Duke of Wellington statue, famous for its traffic cone hat – a symbol of Glasgow’s sense of humor. Continue your journey to the Tobacco Merchant’s House, a fascinating reminder of the city’s former trading prowess. As you explore these iconic locations, you’ll gain a deeper appreciation for Glasgow’s complex history and the events that have shaped its narrative.</p>\n<p>From the city’s rise as a powerful center of industry to its recent struggles, this walking tour offers a unique insight into Glasgow’s past and present. As you uncover the hidden stories and significant figures that have defined the city’s history, you’ll be left with lasting memories and a newfound appreciation for this captivating city.</p>",
    "highlightsTitle": "- George Square\n- Glasgow City Chambers\n- Buchanan Street\n- Duke of Wellington Statue\n- Tobacco Merchant’s House\n- Glasgow Cross\n- Glasgow Cathedral",
    "highlightsDescription": "- The city’s main square, lined with statues of famous Scots and surrounded by grand Victorian buildings\n- Ornate 19th-century council building showcasing Glasgow’s wealth during the industrial era\n- Glasgow’s bustling shopping avenue, known for elegant architecture and lively street performers\n- Iconic equestrian statue, often humorously crowned with a traffic cone – a local symbol\n- A rare surviving 18th-century townhouse, once home to wealthy tobacco traders\n- Historic crossroads of the medieval city, marked by the Tolbooth Steeple\n- Majestic medieval cathedral, Scotland’s only mainland cathedral to survive the Reformation intact",
    "photoIds": [
      "32335",
      "32319",
      "32092",
      "32074",
      "32086",
      "32098"
    ]
  },
  {
    "city": "Glasgow",
    "name": "Whisky Tales of Glasgow: Guided Tasting Tour",
    "short": "Explore Scotland’s whisky heritage in a 1.5-hour guided walk. We’ll meet at George Square and head to a historic local pub, where you’ll hear tales of Glasgow’s past, enjoy tastings of four whisky varieties (non-alcoholic options available), and learn how Scotland became a whisky powerhouse.",
    "long": "<p>Are you a whiskey fan? Or maybe you are a fan of Scottish history? Or do you want to feel like a real Scotsman? How did Scotland become the preeminent producer of Whisky in the world (outshining the USA, Ireland and the Cognac industries of Europe)? If the answer to any of those questions is yes you have to join the Whiskey tasting tour with Scotland’s and Glasgow’s top and most experienced guides.</p>\n<p>We meet in Glasgow city center, at George Square near Queen Street Railway station. During the short walk to a local pub, the guide will share some history of Glasgow and the area to set the mood for the tour.</p>\n<p>We visit a local and traditional Glasgow pub, at least two hundred years old. The pub is a Glasgow favourite for many years, steeped in history and tales of its complicated and ominous past. In a private area of the pub, the guide tells stories about the pub's history and Scotland and Glasgow’s relationship with alcohol, particularly whisky.</p>\n<p>A tasting sample of whisky will be provided to enhance your experience, with a guide elaborating on the details to help you understand and appreciate it. Non-alcoholic drinks are also available.</p>\n<p>Enjoy a “Dram” while hearing tales of Scotland and Glasgow with someone who has lived here almost all their life. The journey starts in George Square and ends 1.5 hours later less than half a mile away.</p>",
    "highlightsTitle": "- Whisky Tasting\n- Historic Glasgow Pub\n- George Square\n- Whisky History\n- Expert Local Guide\n- Glasgow's History",
    "highlightsDescription": "- Sample four whiskies from three of Scotland’s distinct whisky-producing regions.\n- Visit a traditional pub that is over two hundred years old, steeped in local history and tales.\n- Begin your tour in Glasgow's principal civic square, a central hub rich with the city's history.\n- Learn the story of Scotland and Glasgow’s relationship with its most famous spirit from an expert guide.\n- Hear tales of Scotland and Glasgow from a guide who has lived in the city their whole life.\n- Discover some of Glasgow's history during a short introductory walk through the city center.",
    "photoIds": [
      "38069",
      "32074",
      "38051",
      "38057",
      "38039",
      "38045",
      "1306"
    ]
  },
  {
    "city": "Granada",
    "name": "Granada: Albaicín and Sacromonte Guided Tour",
    "short": "Historical tour of the Albaicín and Sacromonte: trace Islamic Granada, the Spanish Inquisition, and flamenco culture as we walk from Plaza Nueva and the Paseo de los Tristes to the Aljibes, the Mirador de San Nicolás with its stunning Alhambra views, and along the Camino del Sacromonte with its cave houses and the story of Chorrojumo.",
    "long": "<p>The Albaicín, a UNESCO World Heritage site, is a maze of narrow streets lined with whitewashed houses and vibrant gardens. As the ancient Moorish quarter, it reflects Granada’s medieval past. However, the arrival of the Spanish Inquisition marked a turning point for Granada. The once harmonious coexistence of Muslims, Christians, and Jews was shattered, and religious tensions escalated. As a result, mosques were gradually transformed into churches, and the neighborhoods lost their unique atmosphere, along with their Jewish and Muslim communities.</p>\n<p>The Sacromonte neighborhood, nestled on the slopes of Valparaíso hill right next to Albaicín, is known for its unique cave houses and flamenco heritage. Here, visitors can explore the intriguing history of the Roma community who inhabited these caves and played a significant role in the development of Granada’s flamenco culture.</p>\n<p>The tour begins at the bustling Plaza Nueva and continues with a walk along the picturesque Paseo de los Tristes, a promenade beside the Darro River. Then, the tour ventures into the Albaicín quarter. Here, you’ll explore the Aljibes, historical water cisterns that demonstrate the ingenious hydraulic systems of the Moors. The next stop is the Placeta del Comino and the Mirador de San Nicolás with breathtaking panoramic views of the Alhambra – a stunning palace and fortress complex that exemplifies Moorish architecture in Spain. After taking in the vista, the tour continues to the Cruz de Rauda, an intriguing crossroads of cultures.</p>\n<p>The journey through the neighboring Sacromonte district includes a walk along the Camino del Sacromonte, where you’ll learn about the history of cave houses, flamenco culture, and the impact of the Spanish Inquisition on Granada’s diverse society. Discover the story of Chorrojumo, the enigmatic king of the gypsies, who contributed to Granada’s rich cultural heritage.</p>",
    "highlightsTitle": "- Albaicín Quarter\n- Sacromonte Caves\n- San Nicolás Viewpoint\n- Paseo de los Tristes\n- Moorish Water Cisterns\n- Flamenco Heritage\n- The Spanish Inquisition\n- King of the Gypsies",
    "highlightsDescription": "- Granada's ancient Moorish quarter, a UNESCO World Heritage site with a maze of narrow streets.\n- Unique cave houses inhabited by the Roma community, the birthplace of Granada’s flamenco culture.\n- A famous viewpoint offering breathtaking panoramic vistas of the magnificent Alhambra palace complex.\n- A picturesque promenade that runs alongside the Darro River at the foot of the Alhambra.\n- Historical water cisterns demonstrating the ingenious hydraulic engineering systems of the Moors.\n- Discover the history of flamenco and the Roma community who developed it in Sacromonte's caves.\n- Learn about the historical impact of religious persecution on Granada’s diverse communities.\n- The story of Chorrojumo, the enigmatic 'king of the gypsies' and a local cultural legend.",
    "photoIds": [
      "49368",
      "33965",
      "33984",
      "49371",
      "33953",
      "49365",
      "49374",
      "49372"
    ]
  },
  {
    "city": "Granada",
    "name": "Welcome to Granada! City Center Guided Tour",
    "short": "Introduction to the history and culture of Granada. Walking through the city center, we trace the transition from Moorish to Catholic eras—from Plaza Nueva through the Cathedral quarter, visiting the Royal Chapel and Cathedral, Alcaicería, Corral del Carbón, Madraza Palace, and Plaza Bib-Rambla—ending with the Monument to the Catholic Monarchs and Columbus.",
    "long": "<p>As if suspended between heaven and earth, Granada is a city of dreams, where the air breathes a thousand sublime secrets,” said Ibn Zamrak, an Andalusian poet. Located at the foot of the Sierra Nevada Mountains, Granada enchants visitors with its rich history, lively culture, and breathtaking landmarks, offering an unforgettable journey through time.</p>\n<p>Granada is famous for its unique blend of Moorish and Spanish architecture, exemplified by the magnificent Alhambra palace and the Generalife gardens. Its ancient neighborhoods, such as the Albaicín and the Sacromonte, provide a glimpse into the city’s fascinating past. The city’s history spans over a thousand years, influenced by its strategic position and the diverse cultures that have left their imprint on Granada’s distinctive identity. Granada was the last of the Muslim kingdoms in Andalusia, and the end of Al-Andalus came with the completion of the Reconquista led by the Catholic Monarchs, Ferdinand and Isabella. In the same pivotal year of 1492, the newly unified Spain could now face new challenges and dedicate its resources to Christopher Columbus’s voyage, leading to the discovery of the New World.</p>\n<p>The Granada tour starts at the iconic Plaza Nueva, a central hub of activity and a gateway to the city’s history. Visit the Royal Chapel and Cathedral, where the famous Catholic Monarchs lie in rest, and stroll through the ancient Moorish silk market of Alcaicería. Marvel at the well-preserved Nasrid-era monument, Corral del Carbón, which once served as a corn exchange and warehouse. Learn about the former Islamic university at the stunning Madraza Palace and explore the charming Plaza Bib-Rambla, a popular gathering spot encircled by cafes, shops, and the renowned flower market. The tour concludes at a captivating location that highlights Granada’s rich history and allure.</p>\n<p>Experience this captivating journey through Granada’s past, uncovering the city’s hidden gems and immersing yourself in its enchanting atmosphere. Secure your spot and explore the fascinating stories that make Granada a truly remarkable destination. This insightful tour lasts approximately 2 hours.</p>\n<hr />",
    "highlightsTitle": "- Plaza Nueva\n- Royal Chapel & Cathedral\n- Alcaicería Market\n- Corral del Carbón\n- Madraza Palace\n- Plaza Bib-Rambla\n- Catholic Monarchs Monument",
    "highlightsDescription": "- A vibrant central square and a historic gateway to the old city's most important monuments.\n- The final resting place of the Catholic Monarchs, Ferdinand and Isabella, a masterpiece of Gothic architecture.\n- The ancient Moorish silk market, now a bustling bazaar with narrow streets and souvenir craft shops.\n- A well-preserved Nasrid-era monument that once served as a warehouse and inn for travelling merchants.\n- The site of Granada's former Islamic university, showcasing a stunning mix of Moorish and Baroque styles.\n- A popular gathering spot with a central fountain, lively cafes, shops, and a traditional flower market.\n- A sculpture honouring Queen Isabella's and King Ferdinand's pivotal meeting with Christopher Columbus before his voyage.",
    "photoIds": [
      "33977",
      "31145",
      "33965",
      "23361",
      "49370",
      "49373",
      "33953",
      "49366",
      "49367"
    ]
  },
  {
    "city": "Hamburg",
    "name": "Harbour, Reeperbahn & Beatles – Hamburg’s Alternative Side",
    "short": "Discover Hamburg’s alternative side—music, port life, and counterculture—in the harbour and St. Pauli. We start at the Elbphilharmonie and Landungsbrücken, take a ferry across the Elbe, visit the Old Elbtunnel, then walk through the notorious Reeperbahn and finish at Beatles-Platz.",
    "long": "<p>Hamburg is a city shaped by water, trade, and music. These three powerful forces have created a fascinating mix that continues to attract people from all over the world. Known for its grand port, elegant architecture, and vibrant cultural life, Hamburg also has a side that doesn’t fit into postcard-perfect images. It’s a city of contrasts, where old sailors’ pubs stand next to trendy bars, where alternative culture thrives, and where a small band from Liverpool played before taking over the world.</p>\n<p>If you want to experience the real Hamburg—the one with raw energy, rebellious spirit, and fascinating history—this is the tour for you!</p>\n<h3 id=\"adistrictofsailorsoutsidersandrockroll\"><strong>A District of Sailors, Outsiders, and Rock & Roll</strong></h3>\n<p>Hamburg’s St. Pauli district has always been a place for those who lived outside the rules. In the 19th century, sailors from all over the world filled its bars, bringing new ideas, stories, and… music. The neighborhood grew around the harbor, becoming home to merchants, immigrants, and dock workers, who shaped its unique character.</p>\n<p>Thanks to this explosive mix of people and their rough energy by the 20th century, St. Pauli had become Germany’s most famous entertainment district, known for its wild nightlife, clubs, cabarets, and the notorious <strong>Reeperbahn</strong>, Hamburg’s legendary red-light district. This “Sinful Mile” was where sailors spent their nights before heading back to sea, and where, in smoky bars, <strong>The Beatles</strong> played some of their earliest gigs, shaping their sound before they became legends.</p>\n<p>But St. Pauli is more than just nightlife—it’s a neighborhood with a strong sense of community, a countercultural and working-class identity, and a history of activism, squatting movements, and leftist politics. While gentrification has been changing the area, St. Pauli continues to retain its rebellious spirit and unique character.</p>\n<h3 id=\"seehamburglikeneverbefore\"><strong>See Hamburg Like Never Before!</strong></h3>\n<p>This tour is for those who want to go beyond Hamburg’s polished tourist spots and experience the city’s true character. From the harbor to the backstreets of St. Pauli, from historic tunnels to legendary music clubs, this walk takes you through the places that shaped Hamburg’s rebellious, creative, and unforgettable spirit. Join us and discover Hamburg like never before!</p>",
    "highlightsTitle": "- Elbphilharmonie\n- Landungsbrücken\n- Harbor Ferry Ride\n- Old Elbtunnel\n- Reeperbahn\n- The Beatles’ Story\n- St. Pauli District",
    "highlightsDescription": "- Hamburg's stunning modern concert hall, an architectural icon with breathtaking views over the harbor.\n- The city’s lively waterfront, a bustling harbor promenade with views of massive passing ships.\n- A unique way to experience Hamburg's port from the water, crossing the Elbe River.\n- An impressive engineering marvel from 1911 that runs deep beneath the Elbe River.\n- Hamburg’s legendary “Sinful Mile,” the city's famous nightlife hub and red-light district.\n- Explore the clubs where the band played their earliest gigs, shaping their legendary sound.\n- A neighborhood with a rebellious spirit, countercultural identity, and a rich history of activism.",
    "photoIds": [
      "43163",
      "43187",
      "43208",
      "43157",
      "43121",
      "43151",
      "43139",
      "42705",
      "43214",
      "43175",
      "43145",
      "43199",
      "43127",
      "43133"
    ]
  },
  {
    "city": "Hamburg",
    "name": "Welcome to Hamburg! Old Town Tour",
    "short": "An introduction to Hamburg’s history and culture: the Hanseatic League, the Great Fire and WWII. We walk the city center, Speicherstadt and HafenCity – Rathaus, Alster Lake, Deichstraße, St. Nikolai Church and the Elbphilharmonie – from historic canals to the modern waterfront.",
    "long": "<p>A city shaped by water, trade, and resilience, Hamburg is a place like no other. With its grand harbor, historic canals, and striking architecture, it has long been a meeting point for merchants, travelers, and dreamers. From the red-brick warehouses of the <strong>UNESCO-listed Speicherstadtred</strong>, to the shimmering glass of the <strong>Elbphilharmonie</strong>, Hamburg seamlessly blends history with modernity. But there’s more to it than just impressive buildings—this city has some incredible stories to tell. Join our <strong>Hamburg walking tour</strong> and discover them all! </p>\n<h3 id=\"acitybuiltontradefireandrebirth\"><strong>A City Built on Trade, Fire, and Rebirth</strong></h3>\n<p>Founded over 1,200 years ago, Hamburg grew from a small medieval settlement, quickly becoming one of Europe’s most important trade hubs. As a key member of the <strong>Hanseatic League</strong>, the city prospered, attracting merchants and wealth from all over the world. But its history has also been marked by destruction and resilience. The <strong>Great Fire of 1842</strong> left much of the city in ruins, only for it to rise again stronger than before. The devastation of <strong>World War II</strong> reshaped Hamburg once more and today, it stands as a vibrant metropolis, where historic canals meet modern skyscrapers, and centuries-old churches stand alongside vibrant cultural venues.</p>\n<h3 id=\"thebestofhamburg\"><strong>The Best of Hamburg</strong></h3>\n<p>Hamburg is a city of contrasts—where medieval trade routes meet cutting-edge architecture, and historical resilience blends with modern creativity. This tour offers a perfect mix of <strong>history, culture, and fun</strong>, making it ideal for first-time visitors as well as those who visited the city before. Whether you’re interested in architecture, wartime history, or just looking for <strong>things to do in Hamburg</strong>, this tour has you covered!</p>",
    "highlightsTitle": "- Rathaus (Town Hall)\n- Alster Lake\n- Deichstraße Street\n- Speicherstadt District\n- St. Nikolai Church\n- HafenCity District\n- Elbphilharmonie",
    "highlightsDescription": "- A grand symbol of Hamburg’s independence and stunning example of Neo-Renaissance architecture.\n- The heart of the city’s scenic beauty, a favorite spot for locals and visitors.\n- Hamburg’s oldest surviving street, home to stories of the merchants who shaped the city.\n- A UNESCO-listed site and the world’s largest warehouse district built over canals.\n- The haunting ruins of a church, now serving as a powerful war memorial.\n- A modern waterfront district built on historic docks, showcasing the city's sleek transformation.\n- The city’s breathtaking and futuristic concert hall, now a new icon of Hamburg.",
    "photoIds": [
      "42611",
      "43089",
      "43077",
      "48312",
      "42699",
      "43175",
      "42637",
      "42681"
    ]
  },
  {
    "city": "Istanbul",
    "name": "Alternative Istanbul: Bazaars & Mosques",
    "short": "A look at everyday Istanbul beyond Sultanahmet, through the bazaar and university quarters to the Golden Horn. We walk from Istanbul Universitesi via Süleymaniye Mosque to Eminönü – Rustem Pasha Mosque, the Spice Bazaar and Galata Bridge.",
    "long": "<p>The former Constantinople, a cultural and religious melting pot, was a gigantic city, from Hagia Sophia to the city walls is as much as 5 kilometres in a straight line! And all this already existed in ancient times! Today’s Istanbul is still one of the largest cities in the world, with an official population of 16 million people. Despite this, most tourists do not visit anything but the strict city centre in Sultanahmet and the Grand Bazaar. They leave Istanbul now knowing much about modern Turkey, its people and their culture. This is a big mistake and our tour aim is to change that! Join us then to delve into places most tourists don’t visit and get an insight to the life of modern Istanbul!</p>\n<p>Colourful, noisy, full of flavours and smells, the Grand Bazaar is a remarkable place on a global scale and has been a temple of commerce for centuries long. But just behind it, spreads another temple – the temple of science – the oldest Turkish university. This will be our first point of interest. We will talk about the Turkish education system, regular life in Turkey and Turkish (in)religiosity. We will then visit a true pearl of Ottoman architecture – the Mosque of Suleiman the Magnificent. This grand building is definitely something you can’t miss while visiting Istanbul. Crownin one of the city’s seven hills, despite being a huge construction, it impresses everyone with its delicate beauty.</p>\n<p>From the mosque we will walk through the narrow streets, winding streets of Istanbul and finally get to an authentic bazaar, used only by the locals. A place where you buy not souvenirs and scarves, but tools, food, toys, electronics… The list is long! We’ll conclude our tour with a true spectacle for the eyes – at the Eminönü Square, by the waters of the Golden Horn, overlooking the majestic Galata Tower across the bay.</p>\n<p>Join our Alternative Istanbul tour for splendid views, great stories and joint discovering the true face of this remarkable city!</p>\n<p>Haven’t done a tour of the main part of the old town with us yet? Join the <a href=\"https://freewalkingtour.com/istanbul/old-istanbul-free-tour-turkey/\">Old Istanbul Tour</a>, you won’t regret it!</p>",
    "highlightsTitle": "- Istanbul University\n- Süleymaniye Mosque\n- Local Bazaars\n- Old Book Bazaar\n- Rustem Pasha Mosque\n- Spice Bazaar\n- Eminönü Square",
    "highlightsDescription": "- The oldest Turkish university, a gateway to understanding modern life, culture, and education.\n- A pearl of Ottoman architecture crowning one of Istanbul's seven hills with delicate beauty.\n- Authentic markets used by locals for everyday shopping, a true spectacle of Istanbul life.\n- A historic courtyard market dedicated to the sale of new and secondhand books.\n- An impressive Ottoman mosque known for its stunning interior filled with exquisite tilework.\n- A vibrant, colourful, and aromatic covered market, also known as the Egyptian Bazaar.\n- A bustling waterfront square offering majestic views of the Golden Horn and Galata Tower.",
    "photoIds": [
      "25736",
      "25706",
      "25730",
      "25724",
      "25712",
      "25718",
      "20373"
    ]
  },
  {
    "city": "Istanbul",
    "name": "Istanbul Private Custom Tour",
    "short": "Tours tailored to each client’s interests—covering anything from the Old City and Beyoğlu to the Asian side, with optional extensions to the Bosphorus or the Princes’ Islands. Your tour can focus on iconic sights in Sultanahmet such as the Blue Mosque, Hagia Sophia, Basilica Cistern, and Grand Bazaar, or branch out to neighborhoods like Cihangir, Karaköy, Galata, Kadıköy, and Moda, or any other themes you’d like to explore.",
    "long": "<p>If you are looking for a unique, personally tailored experience, this is the offer for you.</p>\n<p>A local guide is prepared to provide you with an unforgettable experience during one of the tours offered below. There is a vast range of topics to choose from. It doesn’t matter if you are looking for some historical insights, some time spent in nature, a bit of adrenaline thrill, or some pure entertainment. The offer covers all of those and make no doubt—each one of them is worth a shot!</p>\n<p>List of the tours to choose from:</p>\n<ul>\n<li><p><strong>Historical Highlights of Istanbul</strong>; 250 USD including private guide, hotel pick up and drop off. For 2 people. Around 5 hours, can be personalized.</p></li>\n<li><p><strong>Turkish Breakfast and Rooftop Walk</strong>; 300 USD including private guide, hotel pick up and drop off. For 2 people. Around 5 hours, can be personalized.</p></li>\n<li><p><strong>Private Yacht Ride</strong>; 350 USD including private guide, hotel pick up and drop off. For 2 people, 2 hours, can be personalized.</p></li>\n<li><p><strong>Turkish Bath Ritual</strong>; 400 USD including private guide, hotel pick up and drop off. For 2 people. Around 4 hours, can be personalized.</p></li>\n<li><p><strong>Canoeing in Bosphorus</strong>; 350 USD including private guide, hotel pick up and drop off. For 2 people. Around 4 hours, can be personalized.</p></li>\n<li><p><strong>Dervish Show</strong>; 350 USD including private guide, hotel pick up and drop off. For 2 people. Around 3 hours, can be personalized.</p></li>\n<li><p><strong>Belly Dance Night</strong>; 350 USD including private guide, hotel pick up and drop off. For 2 people. Around 3 hours, can be personalized.</p></li>\n<li><p><strong>Horseback Riding on the Beach</strong>; 350 USD including private guide, hotel pick up and drop off. For 2 people. Around 3 hours, can be personalized.</p></li>\n<li><p><strong>Asian Side Walk</strong>; 300 USD including private guide, hotel pick up and drop off. For 2 people. Around 5 hours, can be personalized.</p></li>\n<li><p><strong>Art Walk Istanbul</strong>; 250 USD including private guide, hotel pick up and drop off. For 2 people. Around 4 hours, can be personalized.</p></li>\n<li><p><strong>Vintage Carpet Hunt</strong>; 250 USD including private guide, hotel pick up and drop off. For 2 people. Around 5 hours, can be personalized.</p></li>\n<li><p><strong>Istanbul Night Out</strong>; 300 USD including private guide, hotel pick up and drop off. For 2 people. Around 3 hours, can be personalized.</p></li>\n<li><p><strong>Private Shopping Day</strong>; 350 USD including private guide, hotel pick up and drop off. For 2 people. Around 5 hours, can be personalized.</p></li>\n<li><p><strong>Karting</strong>; 300 USD including private guide, hotel pick up and drop off. For 2 people. Around 4 hours, can be personalized.</p></li>\n<li><p><strong>Beach Day</strong>; 500 USD including private guide, hotel pick up and drop off. For 2 people. Around 8 hours, can be personalized.</p></li>\n<li><p><strong>Prince’s Island Day</strong>; 500 USD including private guide, hotel pick up and drop off. For 2 people. Around 8 hours, can be personalized.</p></li>\n</ul>\n<p>*(T): Ticket is needed</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"><strong>Contact us</strong></a> in order to get more information.</p>",
    "highlightsTitle": "- Istanbul's Old City\n- Bosphorus Cruise\n- Turkish Breakfast\n- Whirling Dervish Show\n- Turkish Bath Ritual\n- Istanbul's Asian Side\n- Grand Bazaar",
    "highlightsDescription": "- Discover iconic sites like the Blue Mosque, Hagia Sophia, and the Basilica Cistern.\n- Enjoy breathtaking city views from the water on a private yacht or canoe tour.\n- Savor an authentic local breakfast while enjoying stunning views from a city rooftop.\n- Witness the captivating and spiritual Sema ceremony, a unique Sufi meditative dance performance.\n- Indulge in a traditional hammam experience with a foam bath, massage, and body scrub.\n- Explore the charming and trendy neighborhoods of Kadikoy and Moda across the Bosphorus.\n- Get lost in one of the world’s oldest covered markets for a unique shopping experience.",
    "photoIds": [
      "33043",
      "33091",
      "33049",
      "33085",
      "33037",
      "33103",
      "33073",
      "33097",
      "33061",
      "33067",
      "33079",
      "33055"
    ]
  },
  {
    "city": "Istanbul",
    "name": "Welcome to Istanbul! Old Town Guided Tour",
    "short": "Intruduction to Istanbul history and culture during a tour through its Byzantine and Ottoman heart. We walk through Sultanahmet and into the Grand Bazaar, tracing the former Constantinople via key sites: Hippodrome, Hagia Sophia, Blue Mosque and the Basilica Cistern.",
    "long": "<p>New Rome, Byzantium, Constantinople… finally Istanbul. The capital of the Eastern Roman Empire has had many names over the centuries. Situated strategically on both sides of the Bosphorus Strait, once the last leg of the famous Silk Road, it reaped unimaginable benefits from controlling trade between the Black Sea and the Sea of Marmara. Defended by the sea on one side and the Bay of the Golden Horn on the other, it was surrounded by an additional 40 kilometre long wall – all that making the city an impregnable fortress! No wonder, then, that after the fall of Rome in 476, it became the de facto capital of European civilization, continuing occupying this position until 1453, until Constantinople was finally captured by the Turks. For some, this marked its downfall, while for others it marked the beginning of a golden era. The city remained invincible, it was still a vibrant metropolis where Latin no longer mixed only with Greek, but now also Turkish, Arabic, Yiddish and Ladino. As the capital of the Ottoman Empire, it was thriving, growing larger and more powerful than ever before. Istanbul is rightly called the gateway to Europe… or to Asia, as it is the only metropolis lying on two continents and combines Eastern and Western influences like no other place on earth. And like a lens, it focuses and combines the history of both East and West.</p>\n<p>Our tour will begin in Sultanahmet, the historic centre of the former Greek polis that used to function here. It was here in the majestic Hippodrome that gladiatorial battles and bloody horse races, beloved by the Byzantine emperors, took place. Today on the site of it there is a square with the war trophies of the Roman emperors – old obelisks and the famous Serpentine Column. Right next to it, in a place where the imperial palace once stood, stands the pride and most important building of the Ottoman Empire, the Blue Mosque, the first mosque in the world built with as many as 6 minarets! The construction of this magnificent structure was intended, among other things, to overshadow a building standing opposite, the almost 1,000 years older Christian Temple of Divine Wisdom – Hagia Sophia. After leaving the strict centre, we’ll delve into the narrow streets of the Grand Bazaar, a mediaeval hypermarket, where you can buy almost everything from cashmere shawls, sweet baklava to aromatic herbs and spices. We’ll sink into the hustle and bustle of Turkish culture, so steeped in traditions of commerce, joie de vivre and hospitality – we’ll also be treated to some Turkish delicacies ourselves….</p>\n<p>During this 2.5 hour tour you will learn about Istanbul’s history, Turkish culture and have a chance to taste some Turkish delicacies.</p>\n<p>Please note that during the tour we will enter mosques, remember about the appropriate dress code – shoulders and knees should be covered, and in the case of women also the head. Make sure you take a scarf, an extra blouse or shirt with you.</p>",
    "highlightsTitle": "- Hippodrome\n- Egyptian Obelisk\n- German Fountain\n- Blue Mosque\n- Hagia Sophia\n- Grand Bazaar\n- Turkish Delicacies",
    "highlightsDescription": "- A square where Roman emperors held gladiator battles and horse races, now featuring ancient monuments.\n- An ancient monument brought from Egypt as a war trophy by a Roman emperor.\n- An elegant fountain gifted by the German Emperor Wilhelm II to the Ottoman Sultan.\n- A monumental Ottoman mosque, famously known as the first in the world with six minarets.\n- A monumental marvel that served as the main Orthodox Christian cathedral and later an imperial mosque.\n- One of the world's oldest and largest covered markets, a vibrant hub of Turkish commerce.\n- An opportunity to taste local treats and immerse yourself in the rich flavours of Turkish cuisine.",
    "photoIds": [
      "20357",
      "25736",
      "33043",
      "33103",
      "20373"
    ]
  },
  {
    "city": "Bethlehem",
    "name": "Welcome Bethlehem! History, Food & Culture Guided Tour",
    "short": "Explore Bethlehem’s religious heart and contemporary reality in the Old City and beyond. We can tailor the walk to your interests, from sacred landmarks such as Star Street, Manger Square, the Church of the Nativity, and the Milk Grotto to modern sites like the Separation Wall, Banksy’s Walled Off Hotel and museum. Optional visits can also include Aida Camp and the Mosaic Center.",
    "long": "<p>Explore the city of Bethlehem, the birthplace of Jesus Christ, with an experienced tour guide (Moh) from the most local point of view, reviewing the history, legends, and most unknown facts of the city. Knowing also the coolest plans in the city, gastronomy tips, and much more.</p>",
    "highlightsTitle": "- Church of the Nativity\n- Manger Square\n- The Separation Wall\n- Bethlehem Old City\n- Milk Grotto Chapel\n- Aida Refugee Camp\n- Palestinian Cuisine",
    "highlightsDescription": "- Visit the UNESCO World Heritage site believed to be the birthplace of Jesus Christ.\n- Explore the central city plaza located in front of the famous Church of the Nativity.\n- See powerful political street art, including famous graffiti works by the artist Banksy.\n- Experience daily life by walking through the city's ancient streets and traditional market.\n- Discover the serene chapel where the Holy Family is believed to have found refuge.\n- Gain insight into Palestinian refugee life with an optional visit to a local camp.\n- Taste authentic local dishes like Makloba for a truly memorable culinary experience.",
    "photoIds": [
      "48183",
      "41809",
      "41815",
      "41821",
      "41829",
      "48200",
      "48187",
      "48194",
      "48202"
    ]
  },
  {
    "city": "Jerusalem",
    "name": "Jerusalem: Christian Pilgrim’s Path Tour",
    "short": "Christian heritage tour of Jerusalem’s Old City and Mount Zion: follow the Via Dolorosa through the Muslim Quarter to the Church of the Holy Sepulchre, visit the Upper Room on Mount Zion, see the Armenian Cathedral of Saint James and other Crusader sites, and enjoy panoramic views of the Temple Mount and the Mount of Olives.",
    "long": "<p>Walk in the sacred footsteps of Jesus and his disciples with our unparalleled tours in Jerusalem. Explore the iconic sites and churches in the Old City that honor his journey through the holy city.</p>\n<p>Discover the captivating ambiance of Jerusalem, the vibrant crossroads of the three Abrahamic faiths and a meeting place of all Christian denominations. Immerse yourself in the rich history and traditions of the Catholic and Orthodox churches scattered across the different quarters of the Old City and beyond its ancient walls.</p>\n<p>Embark on a pilgrimage along the Via Dolorosa, the path of Jesus’ suffering, spanning through the Muslim Quarter and culminating in the sacred Church of the Holy Sepulchre. Experience the profound significance of some of the 14 stations along the way.</p>\n<p>Ascend to Mount Zion and visit the hallowed Upper Room, where the Last Supper took place. Witness the awe-inspiring churches that surround it, offering a glimpse into the depth of religious devotion. Marvel at the architectural splendour of the Armenian Orthodox Cathedral of Saint James, and delve into the fascinating history of the Protestant presence in Jerusalem, established here during the 19th century.</p>\n<p>Choose Walkative, the epitome of excellence and inclusivity in walking tours of the Old City. Our expert guides are licensed by Israel’s Ministry of Tourism, ensuring an unforgettable and enlightening journey through the sacred heart of Jerusalem.</p>\n<p>Unlock the wonders of Jerusalem and join us for a transformative experience. Book your extraordinary tour now!</p>\n<p>NOTE: due to long lines we do not enter the edicule, the tomb of Jesus, we show it and recommend entering on your own.</p>\n<p>The tour ends at the Church of the Holy Sepulchre.</p>",
    "highlightsTitle": "- Church of the Holy Sepulchre\n- Via Dolorosa\n- Mount Zion\n- Last Supper Room\n- Crusaders' Sites\n- Jerusalem Panorama",
    "highlightsDescription": "- The revered site of Jesus' crucifixion, burial, and resurrection, the most important church in Christianity.\n- The \"Way of Suffering,\" the path Jesus walked on his way to crucifixion, marked by significant stations.\n- A significant hill outside the Old City walls, home to key holy sites and important landmarks.\n- The hallowed Upper Room where Jesus and his disciples shared their final meal together before his arrest.\n- Discover the architectural and historical legacy left by the Crusaders during their time in the Holy Land.\n- A spectacular viewpoint over the sacred Temple Mount and the historic Mount of Olives.",
    "photoIds": [
      "24495",
      "24513",
      "24476",
      "24507",
      "24555",
      "24519",
      "24470"
    ]
  },
  {
    "city": "Jerusalem",
    "name": "Jerusalem by Night: Food, Street Art & Stories",
    "short": "Evening history tour of Jerusalem’s newer center along Jaffa Road: trace the city’s Ottoman and British Mandate–era growth from Jaffa Gate and the Old City walls past HaNeviyim Street to Machane Yehuda Market (Shuk), exploring market street art, notable public buildings, and offbeat local stories.",
    "long": "<p>Discover the Best Evening Tour of Jerusalem with Walkative’s Professional Licensed Tour Guides</p>\n<p>Explore the enchanting city of Jerusalem in the evening with Walkative, the leading tour company offering unforgettable experiences on the “Pay what you like” free tour platform. Our expert licensed tour guides will take you on a journey through the rich history and captivating stories of newer neighborhoods of this ancient city. Join us and delve into the hidden gems and iconic landmarks that make Jerusalem truly remarkable.</p>\n<p>Embark on an adventure along Jaffa Road, the main street of Jerusalem, which stretches from the renowned Jaffa Gate of the Ottoman wall of the Old City to the western outskirts of the city. Originally leading to the port city of Jaffa during the Ottoman period and biblical times, Jaffa Road has evolved into a vibrant central artery, showcasing the growth and expansion of Jerusalem. As you stroll along this historic path, witness the fusion of old and new, with charming neighborhoods and magnificent buildings lining the way.</p>\n<p>Discover the intriguing tale of Jaffa Street’s rise to prominence, surpassing its rival, HaNeviyim Street, as the city’s main thoroughfare. Marvel at the dynamic atmosphere and everyday life that pulsates through Jaffa Street, reflecting the city’s vibrant spirit.</p>\n<p>Immerse yourself in the architectural wonders of Jaffa Road, where notable public buildings emerged during the Mandate period, all integral parts of Jaffa Road’s distinctive design. This street bears testament to the convergence of Ottoman and Mandatory influences, preserving its historical charm amidst modern times.</p>\n<p>As the evening tour reaches its climax, visit the Machane Yehuda market, a captivating transition from the Ottoman era to the Mandate period. It’s a striking reminder of the city’s historical transformations. Experience the allure of Jerusalem’s city center, where charming houses with red-tiled roofs and stone-sculpted decorations from a bygone era create an enchanting ambiance.</p>\n<p>For those seeking unique and offbeat stories, Walkative offers visits to the sites of Jerusalem’s strangest tales. Uncover the mysteries of the Freemasons in Jerusalem, exploring the possibility of bodies buried beneath a local office building and commercial center. Discover the fascinating story of a bride who married a deceased man and unravel the secrets behind the renowned clock maker who fled the holy city.</p>\n<p>During your Jerusalem evening tour with Walkative, prepare to tantalize your senses at the renowned Machane Yehuda Market, affectionately known as the Shuk. Delight in the intoxicating aroma that fills the air as you wander through the bustling market stalls. Indulge in the vibrant colors and flavors of a wide array of spices, a true feast for the senses. Immerse yourself in the lively atmosphere of this iconic market, where locals and visitors alike come together to experience the heart and soul of Jerusalem. As you explore, take a moment to admire the captivating graffiti street art adorning the shop’s shutter doors, showcasing the artistic spirit that permeates the city. This fusion of culinary delights and urban creativity is sure to leave a lasting impression on your Jerusalem evening tour.</p>\n<p>After an enriching tour, indulge in Jerusalem’s vibrant nightlife. Uncover the best spots to savor a local beer and enjoy the city’s culinary delights while immersing yourself in its lively atmosphere.</p>\n<p>Join Walkative’s “pay what you like” tours and make memories that will last a lifetime. Book your Jerusalem evening tour now and let our professional licensed tour guides provide you with an extraordinary journey through this captivating city.</p>",
    "highlightsTitle": "- Jaffa Road\n- Mandate Period Architecture\n- Machane Yehuda Market\n- Graffiti & Street Art\n- Jerusalem's Strange Tales\n- Local Nightlife",
    "highlightsDescription": "- The city's vibrant main street connecting the Old City with newer neighborhoods of Jerusalem.\n- Discover public buildings showcasing the unique architectural design from the British Mandate era.\n- A bustling market full of intoxicating aromas, vibrant colors, and delicious local spices.\n- Admire the captivating graffiti art that adorns the shutter doors of the market shops.\n- Uncover the city's offbeat stories about Freemasons, mysterious burials, and other local legends.\n- Get tips on the best spots to enjoy a local beer and a delightful Israeli dinner.",
    "photoIds": [
      "27521",
      "24555",
      "27539",
      "27527",
      "27533",
      "27515",
      "47809"
    ]
  },
  {
    "city": "Jerusalem",
    "name": "Welcome to Jerusalem! Old City Guided Walking Tour",
    "short": "Introduction to Jerusalem’s Old City, its history and culture. We explore the Armenian, Jewish, Muslim, and Christian quarters, passing through Jaffa Gate and the Tower of David, visiting the Western Wall with views of the Dome of the Rock, and ending outside the Church of the Holy Sepulchre.",
    "long": "<p>If we had to choose the most important city in the world, what would it be? A capital of a great empire, like London, Paris, New York or Beijing? Perhaps, but to over half of the world’s population it has to be Jerusalem. The most important city for the Jews and the Christians, and considered to be the third most significant site for the Muslims, the city is so charged with history, meaning and symbolism that it often ignites the unfortunate human tendency for conflict. Today it is placed in a vulnerable limbo between the Israeli and Palestinian claims, fascinating with its iconic monuments and atmosphere swathed in myth.</p>\n<p>The history of the Old City of Jerusalem is rich and complex, spanning over 3,000 years. Originally inhabited by the Canaanites, the city was conquered by King David in the 10th century BCE and later became the capital of the Kingdom of Israel. The city was subsequently conquered by numerous other empires, including the Babylonians, Persians, Greeks, and Romans, each of which left their own indelible mark on the city’s history and culture. Today, the Old City is home to some of the most significant religious and historical sites in the world.</p>\n<p>On this tour of the Old City of Jerusalem, visitors will have the opportunity to explore all four quarters of the city and experience the rich history and culture of each. In this tour we will walk through parts of the Armenian Quarter, where visitors can experience the rich history and culture of the Armenian people and the Armenian Orthodox Church. From there, visitors will proceed to the Jewish Quarter, home to numerous historical and religious sites. Next, visitors will touch on the Muslim presence in the city and explore the Christian Quarter, with the most important site of Christianity: the Church of the Holy Sepulchre, the site where Jesus was crucified and buried. This tour of the Old City of Jerusalem is a once-in-a-lifetime experience that will leave visitors with a deep appreciation for the city’s rich history and cultural significance.</p>\n<p>The tour ends at the Church of the Holy Sepulchre.</p>",
    "highlightsTitle": "- Jaffa Gate\n- Tower of David\n- Armenian Quarter\n- Jewish Quarter\n- Western Wall\n- Christian Quarter\n- Church of Holy Sepulchre",
    "highlightsDescription": "- One of the main stone portals in the historic fortifications of Jerusalem's Old City.\n- An ancient citadel showcasing the city's millennia-long history, located near the Jaffa Gate.\n- Discover the unique history and culture of the Armenian people and their Orthodox Church.\n- The historic area of the Old City, home to numerous synagogues and archaeological sites.\n- The holiest site in Judaism and a remnant of the ancient wall of the Second Temple.\n- Home to about 40 Christian holy places, including the Church of the Holy Sepulchre.\n- Christianity’s most important site, where Jesus was crucified, buried, and resurrected.",
    "photoIds": [
      "27508",
      "47794",
      "24555",
      "47797",
      "24537",
      "24549",
      "24489"
    ]
  },
  {
    "city": "Jerusalem",
    "name": "Jerusalem: Temple Mount Guided Tour",
    "short": "History and multi-faith significance of Jerusalem’s Temple Mount: walk the plaza surrounding the site of Solomon’s Temple and the Islamic complex—the Dome of the Rock, Al-Aqsa Mosque, and other Muslim prayer halls and tombs. The tour covers only the above-ground areas; entry to mosque interiors is not permitted for non-Muslims.",
    "long": "<p>Experience an exclusive and captivating one and a half hour walking tour of the renowned Temple Mount in Jerusalem, guided by the best professional licensed Israel tour guides from Walkative. Discover the rich history and religious significance of this sacred complex, all while enjoying the unique “pay what you like” concept of Walkative’s free tours.</p>\n<p>Delve into the sanctity of the Temple Mount, an iconic site where Solomon’s Temple once stood, leaving an indelible mark on its surroundings. This sprawling complex, encompassing a large plato built atop vaults and an earthen floor, housed the Temple, the halls of the royal Stylobate, and other remarkable structures. These magnificent structures were destroyed during the Roman occupation in 70 AD. Nevertheless, remnants of its grandeur have been remarkably preserved to this day.</p>\n<p>During the Byzantine-Christian rule, the mountain lay in ruins, serving as a solemn symbol of Christ’s prophecy and the Jewish people’s humiliation in the face of Christianity’s glory. The Temple Mount has remained a spiritual focal point and direction of prayer, embodying the yearning for the past and the hopes of future redemption.</p>\n<p>Imagine the Temple Mount as a colossal treasure chest, its lid concealing hidden treasures such as ancient tunnels, magnificent vaults, and numerous deep cisterns, most dating back to the Second Temple period. While all of these underground wonders are typically off-limits to visitors, our tour will focus on the awe-inspiring structures above ground.</p>\n<p>Presently, exploring the Temple Mount entails traversing the compound of an expansive mosque. Standing proudly in the center is the iconic Dome of the Rock, often misidentified as the Mosque of Omar. Surrounding it are myriad Muslim religious buildings, prayer facilities, Muslim tombs, and mosques. The sanctity of the Temple Mount and Jerusalem in Islam is intrinsically connected to their significance in Judaism and Christianity. Moreover, during the early Muslim period, an additional layer of importance was added as the Temple Mount became associated with the place from which Muhammad ascended to heaven.</p>\n<p>It is important to note that the Temple Mount is a site of immense religious and geopolitical sensitivities. Due to these sensitivities, access to non-Muslim visitors is limited during specific hours. Additionally, both men and women are required to adhere to a modest dress code when visiting the site. It is strictly prohibited to enter with non-Muslim religious items, including Bibles or prayer books, and alcohol is not allowed.</p>\n<p>Furthermore, certain areas such as the Mosque and the Dome of the Rock are off-limits to non-Muslim visitors. These restrictions are in place to respect the sacredness of these spaces.</p>\n<p>In recent years, there has been a growing phenomenon among religious Jews who reject older rabbinical rulings that forbid entering the most holy site. These individuals hold a strong desire to access and connect with the Temple Mount, often stirring suspicion among local Muslims. Some Muslims fear that these Jewish groups aim to rebuild the holy Temple in place of the Dome of the Rock, which holds significant religious and historical significance in Islam.</p>\n<p>These complex dynamics and sensitivities surrounding the Temple Mount highlight the importance of respectful and informed exploration of this revered site. Visitors are encouraged to be mindful of these sensitivities, follow the established guidelines, and approach the tour with an appreciation for the diverse religious perspectives and historical context of the Temple Mount.</p>\n<p>Join Walkative’s exceptional walking tour of the Temple Mount and unravel the layers of history, spirituality, and architectural marvels that make this sacred site an unparalleled destination. Book your tour now for an unforgettable experience in Jerusalem.</p>",
    "highlightsTitle": "- The Temple Mount\n- Solomon's Temple Site\n- Dome of the Rock\n- Al-Aqsa Mosque\n- Muhammad's Ascension\n- Religious Complexities",
    "highlightsDescription": "- A sacred plateau holy to Judaism, Christianity, and Islam, with immense historical and religious significance.\n- Discover the original location of the First and Second Temples, the holiest site in Judaism.\n- See the iconic, golden-domed Islamic shrine that stands at the center of the holy complex.\n- Learn about the third holiest site in Islam, a cornerstone of Muslim faith in Jerusalem.\n- Hear the story of the Prophet Muhammad's miraculous night journey and ascent from this holy site.\n- Understand the site's modern sensitivities governing this deeply revered and contested religious space.",
    "photoIds": [
      "28824",
      "24722",
      "24555",
      "47801",
      "47800",
      "47798",
      "47799",
      "47803"
    ]
  },
  {
    "city": "Krakow",
    "name": "Auschwitz-Birkenau Guided Tour",
    "short": "Tour of the former Nazi concentration and death camp Auschwitz-Birkenau: visit Auschwitz I and Auschwitz II–Birkenau to see the ‘Arbeit Macht Frei’ gate, original barracks, gas chambers and crematoria, and exhibitions of documents, photographs, and personal belongings of the victims.",
    "long": "<p>Auschwitz Tour reveals one of the most (in)famous periods of humankind history. A place where over one million people perished, murdered in an industrial, planned way, according to the mad plan of Hitler and Nazi Germany’s leadership. Prisoners, among them Jews, Poles, Roma and Sinti and Soviet prisoners of war among others, lived in horrible conditions with 700 kcal worth of nourishment per day, forced to work beyond their strength. You will witness real places and barracks where they lived in. After the camp was liberated on January 28th, 1945, only a few hundred starving people were found in it. The Auschwitz Birkenau Memorial Museum was created in 1947 and has since dedicated its efforts to showing and educating about the horrors of the past. On this tour you will not only learn the background story of the Nazi terror and the Holocaust but also experience the authentic environment connected to those tragic events.</p>\n<p>Auschwitz has been put on the UNESCO World Heritage List in 1979.</p>",
    "highlightsTitle": "- Arbeit Macht Frei Gate\n- Auschwitz II-Birkenau\n- Prisoner Barracks\n- Gas Chambers & Crematoria\n- Inmates' Personal Belongings\n- History of the Holocaust\n- UNESCO World Heritage Site",
    "highlightsDescription": "- The infamous main gate to Auschwitz I camp with the cynical inscription \"Work Sets You Free\".\n- The vast extermination camp, including its iconic railway gate, guard towers, and grounds.\n- Original barracks where prisoners endured overcrowded and inhumane living conditions during their imprisonment.\n- The terrifying, reconstructed sites of mass murder and the industrial-scale cremation facilities.\n- Poignant exhibitions of items confiscated from prisoners, including suitcases, shoes, and personal photos.\n- Learn about the Nazi terror and the systematic, industrial-scale murder of over one million people.\n- The memorial was recognized by UNESCO in 1979 for its historical significance to all humanity.",
    "photoIds": [
      "16891",
      "16879",
      "11091",
      "16871",
      "29682",
      "16883",
      "16875",
      "16887",
      "13197"
    ]
  },
  {
    "city": "Krakow",
    "name": "Nowa Huta: Kraków’s Ideal Communist City Tour",
    "short": "Tour explores Kraków’s communist past in Nowa Huta, the model socialist district: visit Centralny Square, walk along the Avenue of Roses, see the site where the Lenin statue was attacked, and discover the ‘Ark of the Lord’ church and the Nowa Huta Cross. Along the way, we trace postwar urban planning, workers’ protests, and the rise of Solidarity.",
    "long": "<p>Those were the days when Kraków’s veins were running with coal and steel and the glorious, royal past of the city didn’t matter anymore. The world was on the eve of the Cold War and Nowa Huta, the communist district of Kraków, was built to fight and resist it.</p>\n<p>Visit with us Nowa Huta, one of the two still existing ideal communist cities in the world, and get a chance to learn about the representative part of Nowa Huta – monumental Central Square and the Avenue of Roses, and enter the ‘Ark of Lord’ church, a symbol of spiritual resistance of Catholic workers against the communist party will.</p>\n<p>An ideal communist city, monumental and grand, was built in a country that had just started to raise itself from the rubble of World War II. But, for the Communist Party, the costs of its construction were meaningless. Tangible proof of communist power was the only thing that mattered.</p>\n<p>This ideal city, where religion was replaced with communist propaganda, was supposed to be inhabited by ideal communist citizens: Homo Sovieticus. A new and better type of people, obedient, brainwashed and entirely devoted to the system. They were to replace the old chaotic, stubborn, free-willed and creative Homo Sapiens. But, nothing lasts forever. Eventually, the creatures turned against their masters. The people of Nowa Huta revolted and fought for freedom.</p>\n<p>Join us and we will tell you the story of a heroic struggle of Polish workers, initiators of great strikes and protests that eventually started the fall of a Communist Block, and the beginnings of the biggest social movement of all times – Solidarity. All this takes place in the surroundings of one of the best examples of an ideal communist city, which today, surprisingly, has so much to offer.</p>",
    "highlightsTitle": "- Ideal Communist City\n- Central Square\n- Avenue of Roses\n- The Nowa Huta Cross\n- Solidarity Movement\n- Ark of Lord Church",
    "highlightsDescription": "- Discover Nowa Huta, one of the world's few ideal communist cities, built after WWII.\n- The monumental heart of the district, a prime example of socialist realist urban planning.\n- The district's representative boulevard, where a massive statue of Vladimir Lenin once stood.\n- Learn about the famous cross that became the focus of a fierce fight for religious freedom.\n- Hear about the workers' revolt that helped spark the fall of the entire Communist Bloc.\n- A modernist masterpiece and a powerful symbol of spiritual resistance against the atheist communist regime.",
    "photoIds": [
      "23752",
      "23758",
      "23746",
      "4647",
      "47683",
      "21767",
      "12362",
      "47775",
      "47776",
      "23740",
      "47753",
      "1741",
      "47767"
    ]
  },
  {
    "city": "Krakow",
    "name": "Kraków Food & Culture Tour",
    "short": "Food and culture tour of Kraków: taste 13–14 traditional Polish dishes and sample vodka and craft beer while exploring the Old Town and Kazimierz. Along the way we visit spots around the Main Market Square—including the Cloth Hall and St. Mary’s Basilica—as well as the Jewish quarter’s Old Synagogue and Plac Nowy.",
    "long": "<p>Trying new foods is a huge part of visiting new places, but it is always difficult to find the best places to try authentic dishes. You could wander around randomly choosing places to eat, you could spend hours reading reviews online, or you could just join us for our food and culture tour. If you choose the latter option, we will take you to some of our favorite places and will guide you as you try a variety of tasty and authentic Polish foods.</p>\n<p>We pride ourselves on being the best food tour in Krakow. We value quality and want you to experience the best of each dish. Thanks to the country’s turbulent history – it’s a real melting pot of influences which you'll learn about from our guide. We hope to enchant you with Poland's rich culture and delight your tastebuds.</p>\n<p>There is far too much drink history to cover in the food tour but we promise to give you a glimpse into Polish drink culture by trying some samples of craft Polish alcohol and beer.</p>\n<p>There are many Polish restaurants in Krakow but few prepare Polish food like our main venue that we take you to. We love sharing the best that Krakow has to offer to our guests.</p>\n<p>Make sure you don’t eat much before the tour as there will be plenty to try and eat!</p>",
    "highlightsTitle": "- Polish Cuisine\n- Local Street Food\n- Polish Alcohol Tasting\n- Old Town Main Market Square\n- Kazimierz District\n- Polish History & Culture",
    "highlightsDescription": "- A guided tasting of 13-14 authentic dishes showcasing Poland's rich and diverse culinary traditions.\n- An opportunity to try some of the best and most popular street food snacks Krakow has to offer.\n- A glimpse into Polish drink culture with samples of traditional vodka and locally brewed craft beer.\n- A walk through one of Europe's largest medieval squares while discovering its history and local flavours.\n- Explore the historic Jewish quarter of Krakow, learning about its unique history and culinary scene.\n- Learn how Poland's turbulent history created a unique melting pot of cultural and culinary influences.",
    "photoIds": [
      "32155",
      "29539",
      "32203",
      "32191",
      "32179",
      "32197",
      "32119",
      "32161",
      "32137",
      "32149",
      "32131"
    ]
  },
  {
    "city": "Krakow",
    "name": "Jewish Kraków: Kazimierz & WWII Ghetto Guided Tour",
    "short": "Jewish heritage and World War II history of Kraków: explore Kazimierz, the historic Jewish district, then cross the river to the former ghetto in Podgórze, tracing both pre-war Jewish life and the Holocaust. Key stops include Szeroka Street, the Old Synagogue, Remuh Synagogue, Schindler’s List sites, and Ghetto Heroes Square.",
    "long": "<p>Without Kazimierz, the Jewish world would be as empty as a body without a soul. In a different time, in a different Kazimierz, Moses Isserles (the Remuh), one of the greatest Jewish scholars to ever live, said: “The aim of man is to search for the cause and the meaning of things”. Let’s follow his advice and go deeper into the history of the Jewish presence in Kraków.</p>\n<p>Jews have lived in Poland for nearly a millennium. In the Middle Ages, the country became known for its religious tolerance and gave Jews an unprecedented degree of social autonomy. Expelled and suffering persecutions in many other European countries, Jews flocked to Poland and the population grew rapidly. Jewish culture and learning flourished in Kazimierz. By the mid-16th century, it was the most significant center of Jewish life in the world. Even today, Jews from all over the world travel to Kazimierz and Poland to find their family, cultural and spiritual roots. By the end of the 1930s, the Jewish community of Kraków constituted about 25% of the city’s population. Just like everyone else, Jewish Cracovians had their hopes, dreams, ideas and plans for the future. All of them were crushed by the war and the occupation. The streets of the former Kraków ghetto bear witness to the desperate struggle to survive, and the destruction of Kraków’s Jewish community.</p>\n<p>Today’s Kazimierz is a very peculiar place. During the tour, you can experience many contradictory emotions all at once: joy at discovering the rich history, culture and traditions of Polish Jewry; sadness and nostalgia for the lost, pre-war world; excitement at witnessing the rebirth of Jewish life here. The uniqueness of Kazimierz can be measured by one more thing: its amazing transition from the worst slum in Kraków to the most vibrant and hip district of the city where the lights never go out.</p>\n<p>Final point: Plac Bohaterów Getta (Ghetto Heroes Square)</p>\n<p>After walking around Jewish district and the former ghetto we recommend taking <a href=\"https://freewalkingtour.com/tours/schindlers-factory-museum/\">Schindler’s Factory</a> and <a href=\"https://freewalkingtour.com/tours/communist-krakow-nowa-huta/\">Communist Kraków – Nowa Huta</a> tours to understand history of Kraków better!</p>\n<p>This tour describes the crimes of the Nazi Germans during the war and the terrible fate of Kraków Jews. In order to get to know this grim chapter of history better it is necessary to visit the former Nazi camp <a href=\"https://freewalkingtour.com/tours/auschwitz/\">Auschwitz-Birkenau</a>.</p>",
    "highlightsTitle": "- Szeroka Street\n- Historic Synagogues\n- Plac Nowy\n- Schindler's List Sites\n- WWII Jewish Ghetto\n- Ghetto Heroes Square\n- Pharmacy Under the Eagle",
    "highlightsDescription": "- The main square and historic heart of the former Jewish Quarter, lined with important synagogues.\n- Visit the Old and Remuh synagogues, which were once central to Jewish spiritual and intellectual life.\n- The bustling center of modern Kazimierz’s nightlife, famous for its market and zapiekanka street food.\n- Discover filming locations from Steven Spielberg’s movie and learn the real story of Oskar Schindler.\n- The area where Kraków's Jews were forcibly relocated by the Nazis during World War II.\n- A moving monument with empty chairs, commemorating the victims of the Kraków Ghetto.\n- A pharmacy whose non-Jewish owner secretly aided ghetto residents during the Holocaust.",
    "photoIds": [
      "47621",
      "23764",
      "47349",
      "47607",
      "47597",
      "47614",
      "47643",
      "47620",
      "47640",
      "47616",
      "3948",
      "47656",
      "47669",
      "21767"
    ]
  },
  {
    "city": "Krakow",
    "name": "KL Plaszow Concentration Camp – Guided Tour",
    "short": "Tour of the original grounds of KL Plaszow, immortalized in Schindler’s List, where thousands of Jews and Poles were imprisoned, forced into labor, and murdered during WWII. Visit key remains including the Grey House, ruins of the Jewish Pre-Burial House, cemetery remains and tombstone pavements, Hujowa Górka, and the Monument to the Victims.",
    "long": "<p>Just 20 minutes from the heart of Kraków lies a quiet, windswept terrain that still echoes with the tragedy and despair of World War II and the Holocaust. Hidden in plain sight, the area of the former <strong>KL Plaszow concentration camp</strong> is a haunting reminder of the Nazi occupation and the brutal history that unfolded here. Join us as we step off the beaten path to explore one of Krakow’s most horrific historical sites — where layers of silence, memory, and loss still linger.</p>\n<p><strong>A place of forced labor, suffering, and death</strong></p>\n<p>In 1942, four years after the brutal invasion and two years after the creation of Kraków’s ghetto, the Nazis began to build the KL Plaszow camp. Established on the grounds of two Jewish cemeteries and originally intended as a forced labour camp, it quickly turned into a site of systematic terror, mass executions, and unimaginable cruelty inflicted under the brutal command of the infamous Amon Göth. It became a place of forced slave labour, inhuman conditions, disease, persecution, and death for thousands of innocent people — Jews and Poles. Most of them perished. Those who did survive carried memories that were almost too painful to share. </p>\n<p>After the war, KL Plaszow received little public attention and remained forgotten for decades. Its story returned to global awareness thanks to Steven Spielberg’s “Schindler’s List,” which portrayed the horrors inflicted there. Today, efforts are underway to restore the memory of this place and honor those who suffered and died here. Walking through today’s quiet, and seemingly, peaceful fields and hills, we work to ensure their stories are never lost again.</p>\n<p>This <strong>2-hour walking tour</strong> takes you across the <strong>original grounds of the former KL Plaszow concentration camp</strong>, where no buildings remain but the history is deeply etched into the landscape. With the help of survivor testimonies, historical context, and powerful storytelling, your guide will bring this silenced chapter of history back to life. During the tour you will learn not only about the creation and history of the camp, but about the people imprisoned here — their lives, their struggles, and the enduring memory of their suffering. You will also hear about the post-war silence, and the modern efforts to preserve memory and give voice to those who suffered and died here. </p>\n<p><strong>Join us as we remember those whose voices were nearly silenced — and ensure they are never forgotten.</strong></p>",
    "highlightsTitle": "- The Grey House\n- Jewish Pre-Burial House\n- Jewish Cemetery Grounds\n- Tombstone Pavements\n- Hujowa Górka\n- Monument to Victims",
    "highlightsDescription": "- A building on the camp grounds used by the Nazis as the main prison and torture chamber.\n- The ruins of a Jewish ceremonial hall destroyed on the orders of the camp commandant Amon Göth.\n- The site of former Jewish cemeteries desecrated and destroyed by the Nazis to build the camp.\n- Pavements built by prisoners using tombstones taken from the destroyed Jewish cemeteries on the camp grounds.\n- A hill within the camp grounds which became one of the main sites for mass executions.\n- A large, post-war monument standing in tribute to the thousands of people who perished in the camp.",
    "photoIds": [
      "45396",
      "45426",
      "45402",
      "45414",
      "45390",
      "45408",
      "47508",
      "47646",
      "47313",
      "21767"
    ]
  },
  {
    "city": "Krakow",
    "name": "Kraków Private Custom Tour",
    "short": "A tailored private tour of Kraków covering the areas you choose—Old Town, Kazimierz and Podgórze, the former ghetto, Nowa Huta and beyond—seeing key places such as the Main Square, St. Mary’s Basilica, Wawel Castle, Ghetto Heroes Square and Schindler’s Factory; we can adjust the route to your needs and interests.",
    "long": "<p>Private tour is a great opportunity for people who have limited time and cannot join our regular FREE walking TOURs or simply prefer staying in a small group of friends.</p>\n<p>It is you who chooses when the tour should start and what should be its topic. If you are not sure what do you want to visit during the tour, let us know and we will help you plan the tour that fits best your needs and interests.</p>\n<p>What is more, you do not have to worry about finding the guide at the meeting point – they can meet you in any place in the city or pick you up from your hotel. You don’t have to follow our strict schedule of regular tours, we can make a tour according to your needs.</p>\n<p>In the best interest of our visitors, we aim to keep our FREE walking TOUR groups relatively small but we do not have any influence on the number of people coming to the meeting point, so we generally do not allow organized groups (bigger than 8 persons) to join FREE walking TOURs.</p>\n<p>For such cases, we have prepared a special offer of private sightseeing for organised groups. Let us know what kind of group you are (students, school group, seniors, group of friends, group of colleagues on a business trip etc.) and what are your interests and we will do our best to prepare for you a tour that fits your needs and expectations.</p>\n<p>In case of groups bigger than 35 people, we recommend splitting the group and hiring two (or more) guides, as sightseeing in smaller groups is more effective and comfortable. Nevertheless, if you prefer only one guide, the price will be higher than the basic one.</p>\n<p>Every tour from our regular offer can be organized as a private one, both for individual visitors and groups.</p>\n<p>For more information please <strong><a href=\"https://freewalkingtour.com/contact/\">contact us</a></strong>.</p>\n<p>If your time is limited and you would like to try more than one tour or you would like to see something else, let us know and we will prepare a tailor-made tour for you.</p>\n<p><strong>ATTENTION: The final price can be varied. It will depend on the language and duration of your tour.</strong></p>\n<p><strong>LANGUAGES:</strong></p>\n<p>We can arrange private tours for you in different languages:</p>\n<ul>\n<li>English  </li>\n<li>Polish  </li>\n<li>Spanish  </li>\n<li>German  </li>\n<li>Italian  </li>\n<li>French  </li>\n<li>Portuguese  </li>\n<li>Ukrainian  </li>\n<li>Russian  </li>\n</ul>\n<p>If you would like to have a private tour in another language please write us a message as well and we will try to help you.</p>\n<p>For more information please <strong><a href=\"https://freewalkingtour.com/contact/\">contact us</a></strong>.</p>\n<p><strong>PRICES & BOOKING RULES</strong></p>\n<p>Every group or visitor that comes to us has different needs, interests and expectations. Because of that, we treat every one of them individually to make sure that our services will meet their expectations.</p>\n<p>Contact us in order to get more information about our private offer including prices, dates and booking rules.</p>\n<p>We kindly ask you to book private or group tours not later than 24 hours in advance, otherwise we cannot guarantee that a guide will be available; also, in such case the price will be higher than the basic one.</p>",
    "highlightsTitle": "- Old Town Kraków\n- Jewish Kraków\n- World War II History\n- Communist Kraków\n- Food & Vodka Tour\n- Schindler's Factory Museum\n- Street Art Tour",
    "highlightsDescription": "- Explore the historic Main Market Square, St. Mary’s Basilica, and the famous Royal Route.\n- Discover the rich heritage of the Kazimierz district, its synagogues, and unique bohemian atmosphere.\n- Uncover stories of Nazi occupation, the former ghetto, and important sites from this tragic period.\n- Journey to Nowa Huta, a model socialist city designed to showcase communist ideals and architecture.\n- Taste traditional Polish delicacies and sample a variety of local vodkas on a delicious culinary journey.\n- Visit the famous enamel factory to learn about Oskar Schindler and Kraków under Nazi occupation.\n- See murals from local and international artists in the vibrant districts of Kazimierz and Podgórze.",
    "photoIds": [
      "1487",
      "12220",
      "18050",
      "1675",
      "1741",
      "6890",
      "16896",
      "47317"
    ]
  },
  {
    "city": "Krakow",
    "name": "Kraków Step by Step - Thematic Walking Tours",
    "short": "An advanced, thematic look at Kraków’s history and urban development. We design specialist routes across the city—beyond the standard Old Town circuit—to less‑visited streets and districts; topics and stops vary by edition and are chosen by our guides who follow their interests.",
    "long": "<p>Kraków Step by Step tours are made especially for the enjoyment of permanent residents and visitors who are already familiar with the basic city history. For all those who want to learn something more, deepen the knowledge they have already gained. For all interested in history and processes that influenced the development of cities and shaped their today’s image.</p>\n<p>Descriptions and more info about each of the tour can be found in the events on our <a href=\"https://www.facebook.com/Walkative.Tours.Krakow/events/\"><strong>Facebook</strong></a> profile. Please remember that booking is required!</p>\n<p><strong>If you want to be up to date with our plans for future tours make sure you join our Facebook group</strong> <a href=\"https://www.facebook.com/groups/walkativestepbystep\"><strong>My City – Step by Step</strong></a></p>\n<p>We strongly believe that only through self-development can we strive for perfection. We also want to share with you the love and passion we have for our cities. Each of our guides also has their own interests and we want to give them the opportunity to deepen and present them to the world. For these (among other) reasons a special tours project has been created, called “Krakow step by step.”</p>\n<p>Our guides prepare routes according to their interests, hobbies, subjects they studied, things in which they specialize. Thanks to this, unusual tours are created. Tours during which we visit places that usually nobody goes to, tell stories that would otherwise have no chance to be told. Real treasures are forged!</p>\n<p>Kraków step by step is also a constantly developing project – we hope that you will be an inspiration for us to take up new topics, stories, and matters that interest you and about which you would like to hear on the next tours! Come on! Be our inspiration!</p>",
    "highlightsTitle": "- Hidden Kraków\n- Untold Stories\n- Thematic Walks\n- City's Evolution\n- In-depth History",
    "highlightsDescription": "- Discover lesser-known locations and unique spots often missed on standard city tours.\n- Hear fascinating local narratives and forgotten histories that bring the city's past to life.\n- Explore specific subjects based on the unique knowledge and passions of your expert local guide.\n- Understand the historical processes and architectural changes that have shaped modern-day Kraków.\n- Go beyond the typical tourist facts with an advanced exploration of the city's complex past.",
    "photoIds": [
      "47604",
      "47735",
      "47557",
      "47448",
      "48217",
      "47478",
      "47465",
      "47476"
    ]
  },
  {
    "city": "Krakow",
    "name": "Macabre Kraków: Crime Stories & Dark Legends",
    "short": "Dark legends and crime in Kraków’s Old Town. We cover ghosts and urban legends, medieval torture and the executioner’s trade, and factual 20th‑century serial killers. We stop by former punishment sites, a haunted palace and a monastery gate, ending on Kanonicza Street.",
    "long": "<p>Every city has its dark secrets and Kraków is no exception. Come with us and we will tell you stories that will make your hair stand on end…</p>\n<p>During the walk through the streets of Old Town you will hear about Krakow’s Lady In Black and other ghosts and urban legends. You will find out about some of the instruments of torture used here in dark medieval times. Your blood will run cold when we will unveil the secrets around the executioner’s profession and you will have a chance to feel a hangman’s noose tightening around your neck. At the gates of a monastery you will hear a story straight from a Gothic romance — for forbidden love, there must be a severe punishment. And last but not least, you will hear the historically factual tales about brutal serial killers that terrorised Kraków in the 20th century.</p>\n<p>Join us… this time only if you dare!</p>\n<p><strong>Final point:</strong> Kanonicza Street</p>",
    "highlightsTitle": "- Urban Legends & Ghosts\n- Medieval Punishments\n- The Executioner\n- A Gothic Romance\n- 20th-Century Serial Killers\n- A Haunted Palace",
    "highlightsDescription": "- Hear chilling tales of Kraków’s famous Lady in Black and other ghoulish stories that haunt the city.\n- Discover the gruesome instruments of torture and harsh punishments used during the city's darkest medieval times.\n- Unveil the grim secrets of the executioner's profession and learn how public executions were carried out.\n- Hear a tragic tale of forbidden love and severe punishment that unfolded at a local monastery.\n- Learn the true, brutal stories of the serial killers who terrorised Kraków in the modern era.\n- Visit the site of a real haunted palace and listen to the eerie stories of its ghostly residents.",
    "photoIds": [
      "6291",
      "23734",
      "6286",
      "21767",
      "6281",
      "47680",
      "47672",
      "47674",
      "47676",
      "47681"
    ]
  },
  {
    "city": "Krakow",
    "name": "Welcome to Kraków! Old Town & Wawel Hill Guided Walking Tour",
    "short": "Introduction to Kraków’s history and culture in the Old Town and on Wawel Hill – we trace a clear route from the medieval walls and Barbican through the Main Market Square and Cloth Hall, St. Mary’s Basilica and Collegium Maius, to Wawel Hill’s Cathedral and castle courtyard.",
    "long": "<p>Kraków’s Old Town survived the Second World War, so you’re able to feel the ambiance of the days when it used to be the capital of Europe’s largest country. Come join us for a tour around a city that hasn’t changed much since the Middle Ages to find out why it was included on the first-ever UNESCO Heritage List!</p>\n<p>We will show you where to look to find traces of the city in its heyday in the 15th and 16th centuries, when Copernicus himself walked these streets. These were the days when Kraków teemed with the sounds of many different languages, colourful clothing and exotic goods, and people from around the world who came here seeking their fortune. But the roller-coaster of history never missed the royal city, and its days of wealth and prosperity turned to times of collapse and decline. The most recent tragedy of World War II and the hopelessness of communism are something you can still feel roiling under the seemingly calm and peaceful surface of contemporary Kraków. It was also during this dark time that Kraków was home to a young man who later changed the fate of Poland and the world. His name was Karol Wojtyła, better known as Pope John Paul II.</p>\n<p>Like every good story, Kraków’s should have a happy ending, right? The city today will surely provide one! Join us and be ready to watch, touch, listen, smell and taste. You will definitely need all of your senses to discover Kraków!</p>\n<p>After visiting the Old Town we recommend taking <a href=\"https://freewalkingtour.com/tours/jewish-krakow/\">Jewish Kraków</a> and <a href=\"https://freewalkingtour.com/tours/world-war-ii-in-krakow/\">World War II in Kraków</a> free tours to understand Kraków’s history better!</p>",
    "highlightsTitle": "- City Walls & Barbican\n- Main Market Square\n- St. Mary's Basilica\n- Collegium Maius\n- Archbishop's Palace\n- Wawel Hill\n- Wawel Dragon",
    "highlightsDescription": "- Medieval fortifications that once encircled the city, including a Gothic gatehouse.\n- Europe's largest medieval town square, featuring the historic Cloth Hall at its center.\n- A Gothic church famous for its wooden altarpiece and an hourly trumpet call.\n- The oldest building of the Jagiellonian University, where Nicolaus Copernicus once studied.\n- The former residence of Pope John Paul II with its famous “papal window.”\n- A historic complex featuring the Royal Castle courtyard and the magnificent Wawel Cathedral.\n- A fire-breathing statue commemorating the legendary dragon at the foot of the Wawel Hill.",
    "photoIds": [
      "47817",
      "6890",
      "47353",
      "47572",
      "47816",
      "47576",
      "47564",
      "16896",
      "21767"
    ]
  },
  {
    "city": "Krakow",
    "name": "Krakow Pub Crawl",
    "short": "Dive into Krakow’s nightlife! Join our legendary Pub Crawl for endless drinks, wild games, underground bars, and unforgettable vibes. The perfect mix of fun, chaos, and Polish spirit!",
    "long": "<p>We are professionals and not afraid to say it: we have been drinking all the magical potions that Poland has to offer over a decade long now! So trust us, the Krawl Through Krakow team is there for you and got you covered. From vodkas, beers and gins of the world to the most outrageous balls you have (n)ever dreamt of, we are doing it with you!</p>\n<p>Imagine all those scenes from Hangover with the background of old, enchanting, medieval Europe. We have created a roller coaster of drinks, crazy underground bars and set of the craziest games and challenges you can imagine. Plus, you can get to know local nutters to feel the place even more. What are you waiting for? Join us for the best Pub Crawl experience you’ll probably forget.</p>",
    "highlightsTitle": "- Power Hour\n- Smorgasbord Buffet\n- VIP Club Entry\n- Krakow's Best Bars\n- Drinking Games\n- Professional Photographer",
    "highlightsDescription": "- Two hours of unlimited beer, rum, gin, whisky, vodka, mixers, and even Champagne.\n- A free buffet featuring a variety of the finest Polish and international cuisine.\n- Enjoy free entrance and complimentary welcome shots at every venue with exclusive VIP treatment.\n- A curated tour of Krakow's hottest and most unique underground bars and party venues.\n- Participate in a series of fun and outrageous games and challenges throughout the night.\n- A free professional photographer will capture all the epic moments of your unforgettable night.\n",
    "photoIds": [
      "16814",
      "21442",
      "21400",
      "21418",
      "16806",
      "21424",
      "21412",
      "16798",
      "16823",
      "16818",
      "21406"
    ]
  },
  {
    "city": "Krakow",
    "name": "Schindler’s Factory Museum Guided Tour",
    "short": "WWII history of Kraków and its people at Oskar Schindler’s Factory Museum, located in the original administrative building of his former factory. The tour explores the German occupation of 1939–1945 — going beyond Oskar Schindler’s own story — through key exhibits on the outbreak of the Nazi occupation, the Kraków Ghetto, resistance hideouts, prison and interrogation cells, the Plaszow camp, and the city’s liberation.",
    "long": "<p>Visit the museum, located in the original building of what was once Oskar Schindler’s factory. Join us on a journey back to the dark times of the German occupation of the city. Enter one of the best historical museums in Poland and let yourself be immersed in a dramatic story from more than 70 years ago!</p>\n<p>Walk on the cobbled streets of a wartime city, feel overwhelmed by the omnipresent existence of the enemy, enter narrow passages and overpopulated apartments in the ghetto, find weapons hidden in a resistance house, experience the horror of being imprisoned and interrogated, try to imagine your life in hiding and finally feel the bittersweet joy of being liberated by the Soviet army. Understand the roles of Oskar Schindler, Amon Göth, Hans Frank and even the future Pope John Paul II. Learn the real story behind the Oscar-winning movie Schindler’s List.</p>\n<p>Join us for an emotional journey through the fates of Kraków’s citizens, follow their lives from the beginning of the Nazi occupation through the 1,967 days that came after. Discover not only the stories described by the historians, but also those told by our parents and grandparents. We hope that, as with us, they will stay with you forever.</p>\n<p>Joining the tour, you can skip long lines and be sure that we do all the bookings and formalities for you.</p>",
    "highlightsTitle": "- Oskar Schindler's Factory\n- Nazi-occupied Kraków\n- Recreated Wartime Streets\n- Kraków Ghetto Life\n- The Polish Resistance\n- Oskar Schindler's Story\n- \"Schindler's List\" Film",
    "highlightsDescription": "- The original factory, now a museum dedicated to the German occupation of Kraków from 1939-1945.\n- An immersive exhibition showing the city's dark history and the daily lives of its citizens.\n- Walk through reconstructed streets that recreate the atmosphere of Kraków during the Second World War.\n- See reconstructions of cramped apartments and narrow passages from the Jewish ghetto during the war.\n- Discover the story of the underground resistance movement and their secret operations in the city.\n- Learn about the German industrialist who saved over a thousand Jews from the Holocaust.\n- Uncover the real history and locations behind Steven Spielberg's famous Oscar-winning movie.",
    "photoIds": [
      "3905",
      "4380",
      "1652",
      "47330",
      "3915",
      "4390",
      "4385",
      "4370",
      "4848",
      "21767"
    ]
  },
  {
    "city": "Krakow",
    "name": "Wieliczka Salt Mine Guided Tour",
    "short": "A visit to the UNESCO-listed Wieliczka Salt Mine near Kraków: we descend underground to walk historic corridors and chambers to see salt sculptures and mining heritage, the St. Kinga Chapel, chambers honoring Chopin and Goethe, an underground lake, and the mine’s largest cavern.",
    "long": "<p><strong>Visit the legendary salt mine of Wieliczka near Krakow for a half-day guided tour and admire the beautiful salt sculptures made with “white gold”.</strong></p>\n<p>Our driver will pick you up from the agreed place and you will take a comfortable, air-conditioned bus to the city of Wieliczka, where the mine is located. The journey will take approximately 30 minutes. On site, you will meet your guide, who will take you on an underground adventure. The tour starts with going down the wooden stairs to a depth of 65 meters, where the guide will explain the rules of sightseeing and safety on the tourist route, the time of visiting underground is about 2 hours.</p>\n<p>The tour is based on an underground walk through the corridors and chambers of the mine. Some of the chambers are dedicated to, for example, famous people who visited the mines (Chopin, Gothe) or how the style of work and technology of miners changed. The highlight of the tour is a visit to an underground chapel considered to be the most beautiful in the world. St. Kinga, where the artists carved a church in salt. There will be a short break there for photos and toilet.</p>\n<p>At the very end of the tour, you will have the opportunity to buy souvenirs related to the mine and ride a real mining elevator back to the surface.</p>\n<p>Our driver will take you back to Krakow. The journey will take 25 minutes. The Wieliczka Salt Mine, is on the UNESCO list of world monuments, has been extracting salt for over 700 years and is one of the most beautiful facilities of this type in the world. While being in Krakow, it is simply worth visiting.</p>\n<hr />",
    "highlightsTitle": "- Chapel of St. Kinga\n- UNESCO World Heritage\n- Underground Lakes\n- Salt Sculptures\n- Miners' Elevator Ride\n- Famous Visitors' Chambers",
    "highlightsDescription": "- A breathtaking underground church where altars and chandeliers are all carved from pure rock salt.\n- Explore one of the world's oldest salt mines, a site recognized for its incredible history.\n- Discover the serene, briny waters of subterranean lakes deep within the ancient salt corridors.\n- Admire intricate statues and historical scenes masterfully carved by miners directly into the salt walls.\n- Experience an authentic ascent back to the surface in a genuine, historical mining elevator cage.\n- See chambers dedicated to illustrious guests like Chopin and Goethe who have visited the mine.",
    "photoIds": [
      "29694",
      "29718",
      "21882",
      "29700",
      "29724",
      "13219",
      "29706",
      "21888",
      "21906",
      "29682"
    ]
  },
  {
    "city": "Krakow",
    "name": "Kraków at War: WWII & Nazi Occupation Guided Tour",
    "short": "World War II history in Kraków. We examine the Nazi occupation, repressions, life and local responses, beginning at the Katyń wooden cross, then visiting St. Michael’s Prison, Park Krakowski with the wartime bomb shelters and the Gestapo headquarters on Pomorska Street — tracing how the city and its people endured under Nazi rule.",
    "long": "<p>The time of the German occupation of Krakow is considered to be the most difficult period in the history of the city. It was a time of darkness but also a time of true heroes. A time of courage, fear and betrayal, when even the simplest decision could bear grave consequences. A time that lives in us thanks to the stories of our parents and grandparents.</p>\n<p>On this tour we will learn about the Nazi plans towards the Poles and understand how they repressed their victims. We will also talk about the citizens of Krakow and their attitudes towards the Germans.</p>\n<p>That’s true – Kraków didn’t have an uprising and the city wasn’t demolished, but the resistance movement still had its part during WWII. Join the World War 2 in Kraków FREE walking TOUR and learn more!</p>",
    "highlightsTitle": "- Katyń Wooden Cross\n- German Occupation\n- St. Michael’s Prison\n- Resistance Movement\n- Bomb Shelters\n- Gestapo Headquarters",
    "highlightsDescription": "- A memorial commemorating the Polish victims of the Katyń massacre, a key WWII event.\n- The harsh realities of life in Kraków under Nazi rule during World War II.\n- A former prison where the Gestapo held and tortured Polish political prisoners during the occupation.\n- Stories of Kraków's underground state and their fight against the Nazi occupiers.\n- Original WWII-era air raid shelters built in Park Krakowski for German officials.\n- The infamous headquarters of the German secret police, a place of terror and interrogation.",
    "photoIds": [
      "14169",
      "14535",
      "47734",
      "47729",
      "47724",
      "47730",
      "47722",
      "47737",
      "47741",
      "47723",
      "21767"
    ]
  },
  {
    "city": "Lisbon",
    "name": "Lisbon Old Quarters Tour: Alfama & Mouraria",
    "short": "Historical walk through Alfama and Mouraria—the quarters that survived the 1755 earthquake and reflect Lisbon’s Moorish past and fado culture. We cover Praça do Comércio, Sé Cathedral, Casa dos Bicos, the Portas do Sol and Santa Luzia viewpoints, as well as São Jorge Castle.",
    "long": "<p>There were times when Lisbon was very different from the city you see today. There were times when its streets were reverberating with many different languages and inhabited by people whose walks of life were very different from each other. That Lisbon of old almost vanished with conquests, wars, time and the tragic earthquake from 1755. But there are certain neighbourhoods where you can still feel the transient presence of the bygone times and peoples. Visit with us Alfama and Mouraria – the only places that survived the disastrous earthquake and are both testimony of Lisbon’s complex past and its many mixing cultures of old.</p>\n<p>Lisbon is stretched over seven hills offering breathtaking views of the city, Tagus river and the Atlantic Ocean. Alfama and Mouraria are settled on one of them, between mediaeval Sao Jorge Castle and the mouth of Tagus river. Their names bear clear influence of the times when Lisbon was under the Muslim rule. Name Alfama comes from <em>al-hamma</em>, meaning hot baths and Mouraria means simply the Moorish quarter as this was the only place where Muslims were allowed to live after the Spanish reconquista. Then, when Arabs and Jews were already gone, their neighbourhoods became a habitat for the poor, port workers, sailors and fishermen. Finally, as is usually the case, they have undergone an incredible transformation and today are a place where, on one hand, you can still feel the traditional atmosphere of old Lisbon, but also visit galleries of local artists, artisan shops, trendy cafes and look for Lisbon street art. Alfama and Mouraria are also home to some of the greatest Lisbon attractions including the castle, Sé Cathedral, amazing palaces, viewpoints and museums.</p>\n<p>Take a walk with us through a maze of narrow, winding streets of Alfama and Mouraria, see charming palaces with crumbling facades covered with beautiful “azulejos” shining in the sun and old fashioned trams. Hear the melancholic fado music oozing from the many taverns and restaurants and believe us – it is all creating an unforgettable impression that will stay with you for long. Join this tour to discover Lisbon’s traditional atmosphere but be warned, it will steal your heart!</p>",
    "highlightsTitle": "- Alfama & Mouraria\n- Sé Cathedral\n- Lisbon Viewpoints\n- São Jorge Castle\n- Casa dos Bicos\n- Fado Music\n- Mouraria Street Art",
    "highlightsDescription": "- Lisbon's oldest districts, full of narrow streets that survived the great 1755 earthquake.\n- The city's oldest and most important church, a fortress-like Romanesque cathedral built in the 12th century.\n- Scenic terraces like Portas do Sol offering breathtaking panoramic views of the city and Tagus River.\n- A historic Moorish castle sitting atop Lisbon's highest hill with stunning views over the old town.\n- A unique 16th-century house with a quirky facade of diamond-shaped stones, a city landmark.\n- The soulful and melancholic traditional music of Portugal, born in the historic Alfama district.\n- Vibrant murals and urban art celebrating the cultural history of Lisbon's most multicultural neighbourhood.",
    "photoIds": [
      "21600",
      "21570",
      "21607",
      "148"
    ]
  },
  {
    "city": "Lisbon",
    "name": "Belém Tour: Birthplace of Discoveries",
    "short": "Tour focusing on Portugal’s Age of Discovery in Belém: we trace Lisbon’s 15th–16th‑century maritime rise along the waterfront and see Jerónimos Monastery, Belém Tower, the Monument to the Discoveries, MAAT and the Presidential Palace.",
    "long": "<p>Vessels under full sails, expeditions into the unknown, bravery, excitement and great adventures ultimately bringing unimaginable spoils for those who dared to reach for them – that is the story of Belem!</p>\n<p>Join our tour to learn about Portugal and Lisbon’s road to power during the times of the Age of Discovery in the 15th and 16th centuries. Learn how these far-flung expeditions come to life, consuming enormous funds and energy. Hear about people who despite the fear of the legendary sea monsters, unsure of what awaits at the end of their journey and whether there is anything at all there, were finally overcoming their limitations and deciding to take the boldest steps. The Portuguese sailors stood at the very vanguard of maritime explorations and discoveries. They were the people who allowed Europeans to sail the seas and oceans, reaching Africa, Asia, Canada and Brazil. They were first led by the prince Henry the Navigator, the key figure investing in voyages along the African coast. He was closely followed by merchant and explorer ships sponsored by the Portuguese crown, including the one of Bartolomeu Dias – the first European who rounded the southern tip of Africa and entered the Indian Ocean. Then came the groundbreaking voyage of Vasco da Gama, the first European who managed to reach India by sea. Following his route Pedro Alvares Cabral landed on the coast of Brazil… The list is endless – it all led to Portugal becoming a land of plenty, establishing monopoly in the sale of many products, most important being the spices – pepper and cinnamon, slaves and of course gold. The need for information, new sailing techniques and cartography brought about something else – a rapid development in nautology and creating a whole new elite, built of scientists. Join our tour and let’s delve together into the fascinating stories of these people and their ideas!</p>\n<p>We will spin this tale while walking through the most beautiful part of the city, the waterfront district of Belem. Looking around you will immediately feel the growing power of Portugal during the Age of Discovery. The maritime might externalised itself in a unique and lavish, Portuguese architectural style – the manueline. Two great symbols of Belem were built in this style. The first is the magnificent Jeronimos Monastery – a place where sailors embarking from the safe port of Lisbon were praying for protection and then returning from voyages – were thanking God for still being alive. The second is the Belem Tower, a lonely guard of the port and the mouth of the Tagus river. See with us the impressive Monument to the Discoveries, featuring 33 figures crucial to the history of Portuguese exploration as well as the compass rose with mappa mundi. But that’s not all we have in store! During the tour you will also have a chance to try Portuguese favourite sweet – pasteis de nata in one of the most renowned cafes in the city! Now that’s something you simply cannot miss while visiting Lisbon!</p>",
    "highlightsTitle": "- Belém Tower\n- Jerónimos Monastery\n- Age of Discovery\n- Monument to Discoveries\n- Manueline Architecture\n- Pastéis de Nata\n- Compass Rose Map",
    "highlightsDescription": "- A 16th-century fortress guarding the entrance to Lisbon's harbour, an icon of maritime exploration.\n- A magnificent UNESCO site where Portuguese sailors prayed before and after their long sea voyages.\n- The history of Portugal's 15th and 16th-century naval expeditions that shaped the modern world.\n- An impressive monument celebrating the key figures of Portugal's golden era of global exploration.\n- A lavish and unique Portuguese architectural style that reflects the wealth of the Discoveries era.\n- A chance to taste Lisbon’s most famous pastry, the delicious and iconic custard tart.\n- A giant marble world map showcasing the routes of the great Portuguese navigators.",
    "photoIds": [
      "21588",
      "21607",
      "21576"
    ]
  },
  {
    "city": "Lisbon",
    "name": "Essential Lisbon Tour in Spanish",
    "short": "Historical introduction to Lisbon across Bairro Alto, Chiado, Baixa and Alfama: we trace Roman and Moorish roots, the Age of Discovery, the 1755 earthquake, the Salazar dictatorship and the Carnation Revolution, stopping at Carmo Convent, Santa Justa Elevator, the Jewish Memorial and Baixa Pombalina.",
    "long": "<p>This is the only tour around Lisbon you need!  </p>\n<p>Local, experienced and energetic guide will let you thoroughly visit and understand the historical neighbourhoods of Bairro Alto, Chiado, Baixa (Downtown) and Alfama. You will be also introduced to the complex history of Portugal throughout the streets of Lisbon.</p>\n<p>Apart from the historical aspects, the tour also presents fun facts about the Portuguese people, their culture and their habits.</p>\n<p>Thanks to multiple smart tips you will be able to make the most of your vacation in Lisbon and totally fall in love with this amazing city!</p>\n<p>Additionally, there will be a Free Tasting of the best Pastel de Nata (Portuguese Custard Tart) in Lisbon. Who can say “no” to that?</p>",
    "highlightsTitle": "- Chiado & Bairro Alto\n- Alfama District\n- Baixa Pombalina\n- Carmo Convent Ruins\n- Santa Justa Lift\n- Age of Discovery\n- Pastel de Nata Tasting",
    "highlightsDescription": "- Lisbon's bohemian heart, known for elegant shops, historic cafes, and vibrant nightlife.\n- Lisbon's oldest quarter with narrow streets, traditional Fado houses, and views of the Tagus river.\n- The elegant downtown area, rebuilt on a grid plan after the great 1755 earthquake.\n- The beautiful ruins of a Gothic church destroyed during the 1755 earthquake, now an open-air museum.\n- An iconic 19th-century elevator connecting the Baixa district with the higher Largo do Carmo.\n- The era when Portugal led European exploration, establishing a vast and powerful maritime empire.\n- A tasting of Portugal's most famous pastry, a delicious and creamy egg custard tart.",
    "photoIds": [
      "21681",
      "21675",
      "21607"
    ]
  },
  {
    "city": "Lisbon",
    "name": "Welcome to Lisbon! Downtown Guided Tour",
    "short": "A historical introduction to central Lisbon—Baixa and Chiado—covering Muslim Lisbon, the Age of Discoveries as well as the 1755 earthquake and rebuilding. We walk Baixa up to Chiado: Praça do Comércio, Rua Augusta and its Arch, Rossio Square, the Santa Justa Elevator and the Carmo Convent.",
    "long": "<p>Dreaming of sun, pleasant weather, amazing food and rich history? Lisbon has you all covered! Join our tour to get to know the very heart of the marvellous city of Lisbon!</p>\n<p>Much older than Paris, Rome and London, in fact only Athens can compete with Lisbon in this matter. Legend has it that it was Ulysses, the wisest of men, who established the city and from here he sailed into the unknown. The city’s name originates (according to one of the versions) in old Phoenician and can be translated to “pleasant haven”. And this is exactly what it was for centuries – Europe’s westernmost port, safely sitting on the river banks, well established a long time before the Romans made it one of their trading centres. Lisbon became a true melting pot during the times it was ruled by the Muslims. They allowed different ethnic and religious groups to settle and the city flourished as a multicultural centre, where people were allowed to keep their own, unique ways of life. This thriving multiethnic hub came to an end when crusader knights conquered Lisbon and it soon became the capital of christian Portugal. With time Muslims fled, Arabic symbols were erased and the remaining Jewish population was forced to convert or killed. Lisbon of old was gone but shortly later the city rose again and it soon gained a new momentum, becoming the European window to the wide world during the Age of Discoveries. It was exactly from here, from the port of Lisbon that far flung expeditions left European shores and reached Africa, India and the New World. Lisbon was thriving. It became a commercial hub where maritime trade routes would meet, connecting Africa, India, China and Brazil bringing here unimaginable riches – spices, sugar, slaves, textile and gold. It all came to a tragic end – in 1755 the city experienced the biggest disaster in its history – the great earthquake followed by a tsunami and fire. Lisbon, one of the biggest cities in Europe at the time, was destroyed 85% with nearly 40 thousand people killed. And then from the ashes of the past a modern city arose, built according to new rules – with the first earthquake-resistant district in Europe. It was now centred around two magnificent squares – Praça do Rossio and Praca do Comercio and that is precisely where we are going to meet!</p>\n<p>During our walk around the downtown of Lisbon we will see the iconic, elegant landmarks of the city, including the harbour facing plaza, Praca do Comercio, with its pompous governmental and commercial buildings. It was exactly through this place that riches flowed into Portugal but it also became the stage of events that changed the country forever and ended centuries long period of monarchy. We will then visit Augusta Street starting with the famous Arch that commemorates the city’s rebuilt from the rumble of the earthquake. We will stop at Praça do Rossio which has been the centre of the city forever and still remains as the favourite meeting place of the locals. We will walk the streets of the centre of Lisbon to see its magnificent churches and monasteries, monuments and memorials and explain Lisbon’s history, its past and present. We will also get you acquainted with local food and drinking culture so you experience Lisbon like a true local! Come and join us to discover all the charms Lisbon has to offer!</p>",
    "highlightsTitle": "- Praça do Comércio\n- Rua Augusta Arch\n- Rossio Square\n- Santa Justa Lift\n- Carmo Convent Ruins\n- São Domingos Church\n- Jewish Memorial",
    "highlightsDescription": "- Lisbon's grand harbour-facing square, the former gateway for the riches of the Portuguese Empire.\n- The triumphal arch commemorating Lisbon’s reconstruction after the devastating 1755 earthquake.\n- One of Lisbon’s main squares since the Middle Ages and a favourite meeting place for locals.\n- An industrial-age iron elevator offering panoramic views and connecting the Baixa district with Carmo Square.\n- The haunting ruins of a Gothic church destroyed in the 1755 earthquake, now a powerful memorial.\n- A historic church that survived fires and an earthquake, bearing the visible scars of Lisbon’s past.\n- A monument honouring victims of the 1506 Lisbon massacre and commemorating the city’s Jewish heritage.",
    "photoIds": [
      "21681",
      "21675",
      "21607",
      "148"
    ]
  },
  {
    "city": "Liverpool",
    "name": "Liverpool Beatles Tour – Cavern Club to Penny Lane",
    "short": "Beatles-focused history tour of Liverpool. Walk through the city centre and into the Georgian Quarter, following the Fab Four’s rise from humble beginnings to global fame. From the Beatles Statue on the waterfront to the Cavern Club and the Eleanor Rigby statue, we keep the rhythm going with stops at the Jacaranda Club and LIPA — a chance to “come together” where their story still echoes.",
    "long": "<p>This tour will give you unique insight into the history of Liverpool in the 20th century and get you acquainted with the watershed moments that changed not only the history of the city and the country, but the entire world! </p>\n<p>Our adventure begins at the iconic Beatles Statue, a symbolic tribute to the band that changed the music scene.</p>\n<p>As we walk through the lively streets, we’ll reach the legendary Cavern Club, the birthplace of The Beatles’ extraordinary career. Feel the musical energy that shaped their early years as we explore the very place where they first captured the hearts of their fans. (P.S We also would like to talk about Pete Best, The Beatles’ former Drummer)</p>\n<p>Continuing our journey, we encounter the moving statues of Eleanor Rigby and Brian Epstein, that remind us of the profound impact of The Beatles’ music on the world.</p>\n<p>We’ll visit The Jacaranda Club, a historic venue where The Beatles performed during their formative years, before their career developed. Feel the echoes of the past, just like at The Philharmonic Pub, a majestic Victorian establishment, and Ye Cracke, a traditional pub with a interesting history – all places where The Beatles occasionally enjoyed a drink.</p>\n<p>Venturing further, we reach the Liverpool Institute for Performing Arts (LIPA), founded by Sir Paul McCartney. Explore the institution that continues to nurture emerging talents, following in the footsteps of the founding members of The Beatles: George Harrison, Stuart Sutcliffe, and John Lennon.</p>\n<p>Join us on this walking tour, in English and Spanish, where the melodies of The Beatles intertwine with the historic charm of Liverpool, creating an unforgettable experience for fans and music lovers alike.</p>",
    "highlightsTitle": "- The Beatles Statue\n- Cavern Club\n- Beatles-related Statues\n- Jacaranda Club\n- The Beatles' Pubs\n- Liverpool Performing Arts",
    "highlightsDescription": "- An iconic tribute to the Fab Four at the Liverpool Pier Head, our starting point.\n- The legendary club and birthplace of The Beatles’ career where they performed hundreds of times.\n- Moving statues of Eleanor Rigby and manager Brian Epstein, immortalised in bronze and stone.\n- One of the first venues where the band played, owned by their first manager, Allan Williams.\n- Discover traditional pubs like Ye Cracke and The Philharmonic, which were frequented by the band.\n- Institute founded by Paul McCartney on the site of the art college John Lennon attended.",
    "photoIds": [
      "31932",
      "21831",
      "21847"
    ]
  },
  {
    "city": "Liverpool",
    "name": "Welcome to Liverpool! Waterfront & Historic Centre Tour",
    "short": "History of Liverpool’s port and culture: from Atlantic trade and the slave economy to Titanic and The Beatles. We cover the city centre and waterfront—William Brown Street, Cavern Quarter and Pier Head—with stops at the Cavern Club, Beatles statue, Town Hall, Royal Albert Dock and the Three Graces.",
    "long": "<p>The beginnings of a great worldwide trade, the remarkable transformation of a small, sleepy village into a leading trade metropolis and the richest city in England, the birthplace of Titanic and The Beatles. A city that through its history had its great ups and very low-downs and experienced an amazing transformation and revival in recent years. Discover with us the fascinating city of Liverpool!</p>\n<p>There was a time when the British Empire was unquestionable power on a global scale. And there was a city that underpinned this success. The name of that city was Liverpool. All kinds of goods were shipped via the port of Liverpool, flowing here from the Empire’s colonies and other continents – sugar, tobacco, coal and cotton. However, the basis of the power of both Liverpool and the British Empire was dark and horrible – it was the slave trade that brought here enormous profit. Then, when it was finally abolished (and people native to Liverpool have been at the forefront of the fight for it), from the beginning of the 19th century the city was known as “the New York of Europe” – a place where masses of people were flowing in from all corners of the continent. Some were desperate to leave its shores, crossing the Atlantic Ocean, chasing the American dream. In the 19th century Liverpool became a leading global cargo port that introduced and supported modern technology and innovations which quickly spread around the world. In the 20th century, Liverpool has fallen low and very painfully. The city went through many hardships: social unrest, race riots, poverty, World War II destruction, unemployment. And then all of a sudden, not in the commerce field any longer, but still as the offspring of the heritage of the city, always open to the world and prone to the influences from many countries and continents, Liverpool became a leader in a whole different field. It gave birth to some of the greatest bands known to music history, especially the most influential one to this day – The Beatles.</p>\n<p>Take a walk with us through this city of trade, Titanic and The Beatles. Starting from William Brown street, through the famous Cavern Quarter and Cavern Club where The Beatles started, up to the port and Royal Albert Dock – the landmark of the city, former warehouse that today is the centre of culture, art and nightlife. During the tour we will search together for the relics of the Liverpool castle and see the architectural icons of the city, especially the marvellous Three Graces: the Royal Liver Building, Cunard Building and Port of Liverpool Building, all located at the Pier Head. We will also talk about the history of the Titanic and its tragedy, which took the lives of many citizens of Liverpool.</p>\n<p>The history of Liverpool gives us an incredible insight to the creation of the global market, and it proves to be the outstanding legacy of the mixing of cultures and influences from different corners of the world where once the British Empire stretched. Soak with us the atmosphere of Liverpool and witness its amazing transformation from neglected and rundown port city into a vibrant cultural centre full of museums, art galleries and lush green zones.</p>",
    "highlightsTitle": "- The Cavern Club\n- Royal Albert Dock\n- The Three Graces\n- The Beatles Story\n- Titanic History\n- Maritime Trade Legacy\n- Liverpool Town Hall",
    "highlightsDescription": "- The legendary music venue where The Beatles launched their incredible career in the early 1960s.\n- A historic dock complex, now a vibrant hub for museums, galleries, restaurants, and shops.\n- A trio of iconic buildings at Pier Head that define Liverpool's famous waterfront skyline.\n- Follow the story of the Fab Four, the world's most influential and famous music band.\n- Learn about the tragic connection between the famous ship and its home port, Liverpool.\n- Discover Liverpool's past as a leading global port and centre of the British Empire.\n- A stunning example of Georgian architecture and one of the country's finest town halls.",
    "photoIds": [
      "31923",
      "21847",
      "31917",
      "21837"
    ]
  },
  {
    "city": "London",
    "name": "Camden Town: Music, Markets & Canals",
    "short": "History and culture of Camden Town, from Victorian canals and rail yards to the punk scene and Amy Winehouse. We walk the district’s key spots – Music Walk of Fame, the Roving Bridge on Regent’s Canal, the Camden Horse Hospital, the Hawley Arms and Camden Market.",
    "long": "<p>It’s lively, quirky, cosmopolitan, and packed full of history! Camden Town is all of these things. It’s a neighbourhood that has been shaped by many communities and iconic figures, from Irish and Greek-Cypriot immigrants, to the Clash and Amy Winehouse, to Charles Dickens and George Orwell. Each of these have left an indelible mark on what is now one of the most iconic, historic, and artistic districts of London.</p>\n<p>Camden Town was developed at the end of the 18th century with the aim to attract the wealthy middle classes, but the arrival of the railways put a stop to those ambitious plans. It would soon develop into a bustling hub of gin houses, ice-wells, and horse-work in the goodyards, attracting working class immigrant communities from all over, who forged Camden into what it is today.</p>\n<p>How did Camden Town change from this, into now the modern mecca of music-makers and music-lovers alike, being the haunts of Amy Winehouse and the punk scene?</p>\n<p>On this walk you will explore the district with our true Camden local guide, Elena. She will show you hidden gems and unforgettable stories of Camden, from the Victorian Era to Rock’n’Roll. Join our Walkative private Camden tour for a bespoke exploration of one of London’s most famous districts.</p>",
    "highlightsTitle": "- Music Walk of Fame\n- Arlington House\n- Regent's Canal\n- The Horse Hospital\n- The Hawley Arms\n- Camden Market",
    "highlightsDescription": "- London's answer to the Hollywood Walk of Fame, honouring musical legends with commemorative stone discs.\n- A famous hostel that once housed author George Orwell, offering insight into London's social history.\n- A historic waterway featuring the innovative Roving Bridge, key to Camden's industrial development and past.\n- A former Victorian veterinary hospital for working horses, now a unique and historic arts venue.\n- An iconic local pub, famously known as a favourite haunt of legendary singer Amy Winehouse.\n- A world-famous collection of eclectic markets known for alternative culture, vibrant street food, and unique shops.",
    "photoIds": [
      "41654",
      "41636",
      "41642",
      "41630",
      "41648",
      "48724",
      "48725"
    ]
  },
  {
    "city": "London",
    "name": "The City of London Guided Walking Tour",
    "short": "Introduction to the City of London (the Square Mile). From Roman Londinium to modern finance, we trace the city’s evolution through its historic core — St. Paul’s Cathedral, Guildhall, the Bank of England, Leadenhall Market, and the Monument to the Great Fire — all set against the River Thames that shaped London’s destiny.",
    "long": "<p><strong>Welcome to London: The City of London Walking Tour</strong></p>\n<p>Long before red buses, royal weddings, and afternoon tea, there was <strong>Londinium</strong> — a Roman outpost on the banks of the River Thames. Two thousand years later, London is one of the most dynamic and fascinating cities in the world: a cultural powerhouse and a global trading hub. But it all began right here, in one compact area — the <strong>City of London</strong>, also known as the <strong>Square Mile</strong>. Join us on a walk through its ancient streets, past soaring domes and hidden ruins, and hear the stories that shaped London — and, with it, the world.</p>\n<p><strong>Walk Through the City That Built the Modern World</strong></p>\n<p>Our walk begins at <strong>Temple Station</strong> and takes you into the very core of London’s identity. Then, it’s on to <strong>St. Paul’s Cathedral</strong>, Christopher Wren’s iconic masterpiece — a beacon of resilience that has withstood bombs, hosted royal jubilees, and honoured national heroes. At <strong>Guildhall</strong>, you’ll hear stories of Roman gladiators, medieval governance, and London’s ancient civic pride. We’ll pass some of London’s most iconic institutions like the <strong>Bank of England</strong>, and the <strong>Royal Exchange</strong>, where for centuries fortunes were made, lost, and remade again. Next, we’ll make our way to the stunning <strong>Leadenhall Market</strong>, a Victorian masterpiece (and <em>Harry Potter</em> filming location!), <strong>Lloyd’s of London</strong>, the world-famous insurance market, continuing to the <strong>Monument to the Great Fire of London</strong>, commemorating the fire that changed everything in 1666. You’ll hear about the importance of the <strong>River Thames</strong> and <strong>London Bridge</strong>, the city’s oldest crossing, which once overflowed with shops, houses, and even heads on spikes. A marvel — and a disaster — all at once. We’ll also take in the views of the <strong>Tower of London</strong>, a site of intrigue, execution, and royal power and the majestic <strong>Tower Bridge</strong> — standing guard over the river that carried London’s name across the globe.</p>\n<p>Nowhere else in the world will you find so much history, so many stories, and such a powerful sense of place packed into one square mile. Join us to peel back the layers of time and get to know this ever-changing area, a place that helped pave England’s way to dominate the entire world. Join us to explore 2000 years of fascinating history of London – the City that built an empire!</p>\n<hr />",
    "highlightsTitle": "\n- Fleet Street\n- Old Bailey\n- Saint Paul’s Cathedral\n- Bank of England\n- Monument to the Great Fire of London\n- Tower Bridge \n- Tower of London\n",
    "highlightsDescription": "- Also known as “the Street of Ink”, once the centre of Britain’s press and publishing world from the 16th to the 20th century.\n- The seat of England and Wales’ Central Criminal Court, standing on a site linked to justice since the 12th century.\n- Sir Christopher Wren’s Baroque masterpiece, a symbol of London’s resilience and a beacon of national pride.\n- The United Kingdom’s central bank and the cornerstone of the City’s world-famous financial district.\n- A soaring column commemorating the Great Fire of 1666, which transformed the city forever.\n- London’s most recognisable bridge, a marvel of Victorian engineering and one of the capital’s enduring icons.\n- A historic fortress and former royal palace, infamous as a prison and site of intrigue, power, and execution.\n",
    "photoIds": [
      "45702",
      "45808",
      "45506",
      "45690",
      "31394",
      "48729",
      "45678",
      "45796",
      "45714",
      "45696",
      "45497"
    ]
  },
  {
    "city": "London",
    "name": "London at War Guided Walking Tour",
    "short": "London at War. We trace military history from the British Empire and WWI through the Blitz of WWII to the Cold War, walking across Westminster, The Mall, and Whitehall. Highlights include the Churchill War Rooms, the Cenotaph, the Battle of Britain Monument and St. Ermin’s Hotel.",
    "long": "<p>From defeating Napoleon, to crushing uprisings in the Empire, to fighting off the Nazi Luftwaffe, Britain has been at the centre of some of the most defining conflicts in world history, with London as the beating heart of its military prowess. How could it be that the capital of such a small island ended up running one of the greatest military powers of the globe? Join us on Walkative’s London At War tour to delve deep into this question and explore London’s wartime history, from the British Empire, the Blitz &amp; WWII, to the Cold War. </p>\n<p>Starting by the Palace of Westminster, and walking through the Mall and government district of Whitehall, we’ll discuss the conflicts of the British Empire and the millions of troops fighting for (and sometimes against) it in the 19th century. We’ll reveal the harrowing truth of the birth of concentration camps in South Africa standing by the Boer War Memorial, as well as pass the house of the famous T.E. Lawrence, whose life inspired the era-defining ‘Lawrence of Arabia’ movie. We will then step into the enthralling stories of WWII, and, at Blitz damage, discuss what it was like for Londoners as the Nazi Luftwaffe assaulted the city with thousands of bombs. We will see where Winston Churchill’s War Rooms were, explaining the decisions made below, and pay our respects at the Cenotaph and Battle of Britain Monument. Lastly, but not only, at St Ermin’s Hotel, we will unearth the secret story of the Cambridge Spy Ring operating during the times of the Cold War.</p>\n<p>Join our London At War tour to see both the iconic places related to WWII, as well as hidden spots and memorials to forgotten tales that you would otherwise have missed. Most of all, though, join us to understand the bigger picture of London at the centre of the world in times of conflict, from early Zeppelin air raids during WWI, through the battles of the British Empire, WWII and the Blitz, up to the movies that made the image of the dry, posh, tongue-in-cheek, moustachioed military officer so iconic. This tour has it all!</p>",
    "highlightsTitle": "- Lord North Street \n- Westminster Abbey \n- St Ermin’s Hotel \n- The Mall  \n- Admiralty Citadel & Churchill War Rooms\n- The Cenotaph & Whitehall\n- Battle of Britain Memorial\n",
    "highlightsDescription": "- Step into one of Westminster’s best-preserved wartime streets, where original air raid shelters reveal how Londoners endured the Blitz.\n- See the scars left by Nazi bombs on this centuries-old landmark — a reminder of London’s resilience during the relentless Luftwaffe raids.\n- Uncover the secret world of espionage; this elegant hotel once served as a base for MI6 and the famed Special Operations Executive.\n- Learn how the Royal Family supported the war effort, from rallying the nation’s morale to serving on the front lines.\n- Explore the fortified heart of wartime London, where Churchill and his team directed Britain’s defence from underground headquarters.\n- The United Kingdom’s central war memorial, honouring the men and women who gave their lives in service to the nation.\n- A moving tribute to the airmen who defended Britain’s skies during one of the most decisive battles of World War II.",
    "photoIds": [
      "35564",
      "35540",
      "31394",
      "35546",
      "35552",
      "35534",
      "35558"
    ]
  },
  {
    "city": "London",
    "name": "London Music Tour: Beatles, Bowie & Rock Legends",
    "short": "London’s music history in the West End and Soho. We walk Tin Pan Alley, The Marquee Club, and Trident Studios, pause at Heddon Street’s Ziggy Stardust location, and end at the Beatles’ Savile Row rooftop, tracing key venues in British pop, rock, and jazz history.",
    "long": "<p>Discover London’s illustrious music legacy on the exclusive walking tour devoted to the city’s vibrant music scene!</p>\n<p>Join us on this specially constructed walking excursion through London’s streets to uncover a range of iconic music landmarks. Guided by a knowledgeable local tour guide, you’ll stroll along the renowned Tin Pan Alley, the birthplace of British music where Elton John composed chart-topping hits like ‘Rocketman’ and ‘Your Song,’ Tom Jones recorded ‘It’s Not Unusual,’ and Adele graced the stage for her inaugural performance.</p>\n<p>En route, you’ll encounter the legendary rooftop where The Beatles bid farewell to live performances, as well as The Marquee Club, which hosted legendary acts such as The Who, Rolling Stones, Led Zeppelin, Pink Floyd, and many more.</p>\n<p>Pause at the exact spot where David Bowie immortalized his iconic album cover for ‘The Rise and Fall of Ziggy Stardust,’ witness the historic Trident Studios where the incomparable Freddie Mercury and Queen crafted their first three albums, and see the renowned Ronnie Scott’s Jazz Club, where Jimi Hendrix delivered his final performance.</p>\n<p>With numerous other London music destinations included, this complimentary walking tour offers an incredible journey through the highlights of British music, making it one of the finest free walking tours in London.</p>",
    "highlightsTitle": "- Tin Pan Alley\n- Beatles' Rooftop Concert\n- The Marquee Club\n- Ziggy Stardust Spot\n- Trident Studios\n- Ronnie Scott’s Club",
    "highlightsDescription": "- The birthplace of British music where Elton John composed hits and Adele gave her inaugural performance.\n- The legendary rooftop location where The Beatles gave their final, iconic farewell concert.\n- The legendary club that hosted iconic acts like The Rolling Stones, Led Zeppelin, and Pink Floyd.\n- The exact spot on Heddon Street where David Bowie shot his iconic 'Ziggy Stardust' album cover.\n- The historic recording studio where Freddie Mercury and Queen crafted their first three groundbreaking albums.\n- The world-famous jazz club where Jimi Hendrix delivered his final, unforgettable live performance.",
    "photoIds": [
      "31651",
      "31639",
      "31645",
      "31657",
      "23374",
      "31633"
    ]
  },
  {
    "city": "London",
    "name": "London Private Custom Tour",
    "short": "Tailor-made private guided tour of London: we set the theme and route with you to match your time and interests, giving a focused walk through the neighborhoods you choose—anything from a concise citywide highlights overview to an in‑depth visit to a single district.",
    "long": "<p>A private tour is a great opportunity for people who have limited time and cannot join our regular pay as you wish tours or simply prefer staying in a small group of friends.</p>\n<p>It is you who chooses when the tour should start and what should be its topic. If you are not sure what do you want to visit during the tour, let us know and we will help you plan the tour that fits best your needs and interests.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"><strong>Contact us</strong></a> in order to get more information about our private offer including <a href=\"https://freewalkingtour.com/private-offer/\"><strong>prices</strong></a>, dates and booking rules.</p>\n<p>What is more, you do not have to worry about finding the guide at the meeting point – they can meet you in any place in the city or pick you up from your hotel. You don’t have to follow our strict schedule of regular tours, we can make a tour according to your needs.</p>\n<p>Let us know what kind of group are you (students, school group, seniors, group of friends, group of colleagues on a business trip, etc.) and what are your interests and we will do our best to prepare for you a tour that fits your needs and expectations.</p>\n<p><strong>PRICES & BOOKING RULES</strong></p>\n<p>Every group or visitor that comes to us has different needs, interests, and expectations. Because of that, we treat every one of them individually to make sure that our services will meet their expectations. If your time is limited and you would like to try more than one tour or you would like to see something else, let us know and we will prepare a tailor-made tour for you. The final price can be varied. It will depend on the language and duration of your tour.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"><strong>Contact us</strong></a> in order to get more information about our private offer including prices, dates and booking rules.</p>\n<p>We kindly ask you to book private or group tours in advance, otherwise, we cannot guarantee that a guide will be available.</p>\n<hr />",
    "highlightsTitle": "- Private Group Tour\n- Custom Itinerary\n- Flexible Start Time\n- Hotel Pickup\n- Tailor-Made Experience\n- Expert Tour Planning",
    "highlightsDescription": "- An exclusive tour for just your small group of friends or family.\n- A tour plan tailored specifically to your group's unique interests and needs.\n- You choose the exact time the tour begins, fitting your personal schedule.\n- Your guide can conveniently meet you directly at your hotel or any place.\n- A tour adapted for any group type, from students to business colleagues.\n- Get professional help in planning the perfect sightseeing route for your group.",
    "photoIds": [
      "33239",
      "45808",
      "45506",
      "23305",
      "48723",
      "45796",
      "23408"
    ]
  },
  {
    "city": "London",
    "name": "Welcome to London! Westminster Walking Tour",
    "short": "An introduction to London’s history—royalty, politics, and theatre—as we walk from Westminster to the West End. See Big Ben, the Houses of Parliament, Westminster Abbey, Buckingham Palace, and Trafalgar Square, moving from royal and political London to the bright lights of Theatreland.",
    "long": "<p>‘When you are tired of London, you are tired of life’ the old saying goes. From the home of the British Royal Family to the packed pubs; from the heart of British politics, to the theatrical West End; from invading Romans to conquering Kings, London has it all.</p>\n<p>Starting as a marshland with just a handful of celtic tribes, and soon subject to Roman conquest as ‘Londinium’ in 47 AD, London had a slow and unimpressive start. However, by the time of the 11th Century, the city grew as the epicentre of English royalty, throwing in several centuries of war with France, for good measure. Through sabotage, murder, and revolutions, the heads that wore the crown constantly shifted, from titanic sovereigns like Henry VIII and Elizabeth I in the 16th Century, through civil war and the ‘merry monarch’ Charles II in the 17th, to the Germanic Georges and regency in the 18th. London itself would grow as the centre of the British Empire – and arguably – the centre of the modern world, reaping the benefits of the Industrial Revolution and using the Empire’s immense imperial power to its advantage, with all the trade, violence, and suffering that came with it. With one hand dominating the globe, and the other making the most of its great wealth, the city evoked awe and wonder, developing into a hub of world-leading science, innovation, and arts. It is here that Charles Darwin would write On the Origin of Species, JMW Turner would redefine painting, and Charles Dickens would birth the modern novel, pain-stakingly putting the conditions of real Londoners to the page. After the brutal Great War of 1914-1918, Britain -and London itself- became tired and over-extended, plunging into rapid political and social changes. Just 20 years later, it would be pulled into another horrifying war, for a time fighting as the lonely bastion against the Nazi regime in Europe, as the Luftwaffe flew above wreaking havoc. By 1945, a new world emerged. With a huge labour shortage and a post-war vision to assemble, parliament turned to the commonwealth to build a modern Britain: it passed the British Nationality Act. Now, those who had previously been under the British yoke as subjects came to London as citizens. This change re-invigorated the city, setting it onto a new path. Soon London was the cultural place-to-be. Its bars were swinging with jazz and rock’n’roll, its galleries filled with contemporary art, and its theatres hosted the great plays and musicals of the century. To this day London inspires with its music and theatre scene, museums, and fashion.</p>\n<p>Join us on our Welcome to London tour to hear and experience this astounding story yourself, and see the city as it’s meant to be seen. Starting in Westminster, we’ll take you to the most iconic and beautiful sites in London. We’ll talk about why Big Ben isn’t called Big Ben, see the Abbey that has witnessed over a 1,000 years of royal coronations, walk through the royal parks of Buckingham Palace, discuss great military battles both old and new, and get under the skin of modern London at Covent Garden. We might even end near a pub, in true London fashion. From Winston Churchill to the Suffragettes to Queen Elizabeth II to James Bond, London has a fantastic story to tell. And no worries – we’ll fuse history with tips and recommendations, and set you up for your London experience – so join us and get the perfect introduction to one of the greatest cities in the world!</p>",
    "highlightsTitle": "- Houses of Parliament and Big Ben\n- Westminster Abbey\n- St. James Park\n- Buckingham Palace\n- St. James’ Palace\n- Trafalgar Square \n- Covent Garden & Theaterland\n",
    "highlightsDescription": "- The iconic clock tower and the seat of the UK Parliament, where the nation’s most important political decisions are made.\n- The magnificent Gothic church where British monarchs have been crowned, married, and buried for nearly a thousand years.\n- The oldest of London’s Royal Parks, a green oasis and site of royal pageantry since the Norman Conquest.\n- The monarch’s official London residence, standing beside the beautiful St James’s Park.\n- The official royal residence for over 300 years, home to British monarchs from the 17th century until 1837.\n- A grand public square commemorating Admiral Nelson’s naval victory, guarded by its famous lion statues.\n- A lively district of markets, street performers, and world-famous theatres at the heart of London’s West End.",
    "photoIds": [
      "23305",
      "23402",
      "48723",
      "33239",
      "31394",
      "23299",
      "23408",
      "48717",
      "23432"
    ]
  },
  {
    "city": "Lviv",
    "name": "Austrian Lviv: The Habsburg Era",
    "short": "A historical tour of Austro‑Hungarian Lviv focusing on Habsburg‑era architecture and urban growth. We cover the historic center and 19th‑century boulevards: the oldest trading passage, the main city avenue, the largest medieval church, Secession‑style housing, and grand palaces and theatres.",
    "long": "<p>19th century Lviv was the capital of the big imperial province and one of the biggest cities in Austria: this is where the province parliament worked with its official languages being Polish and Ukrainian, having a sizeable Jewish and Armenian minority and being a settlement for the university and many famous noble families with their glorious palaces. Austro-Hungarian period in Lviv (which is nearly 150 years) is often humorously called ‘Granny Austria times’. Lovely name to refer to a country, right? The Habsburg’s federal system granted many freedoms to the Ukrainians (called ‘Ruthenians’ at the time); first coffee houses and buildings with balconies appeared in Lviv during that period, city walls were dismantled and the city extended greatly. These and many more changes were brought by the Austrians. It was a period of cultural and economic growth and a bloom of architecture.</p>\n<p>La petit Paris or a brother to Krakow, that might remind you a bit of Prague, Vienna or Budapest – this is our noble Lviv.</p>",
    "highlightsTitle": "- Granny Austria Times\n- Secession Architecture\n- Noble Palaces & Casinos\n- Old Trading Passage\n- The Grand Avenue\n- Austro-Hungarian Housing\n- Lviv Coffee Culture",
    "highlightsDescription": "- Discover why locals fondly call the 150-year Austro-Hungarian period the era of ‘Granny Austria’.\n- Admire stunning buildings in the Vienna Secession style, a hallmark of Lviv's architectural bloom.\n- See the lavish residences of noble families and glamorous casinos that defined 19th-century high society.\n- Explore the city’s oldest covered shopping arcade, a hub of commerce with original old advertisements.\n- Stroll along the main city promenade, the heart of Lviv's social and cultural life.\n- Observe diverse housing styles from the era, reflecting the city’s social and economic growth.\n- Learn about the first coffee houses that appeared in the city during the Austrian period.",
    "photoIds": [
      "17675",
      "1937",
      "21779"
    ]
  },
  {
    "city": "Lviv",
    "name": "High Castle Hill & Lviv's Origins Tour",
    "short": "Introduction to Lviv’s origins and Soviet traces. We tour the historic centre and the city’s oldest quarter — then climb High Castle Hill for panoramic views. Along the way we visit Market Square, the Pharmacy Museum, the Benedictine Monastery, Old Market Square, and finally the High Castle Hill observation deck, weaving in stories of the city’s early beginnings and Soviet-era legacies.",
    "long": "<p>On this 2.5 hour FREE Walkative! TOUR, we will explore the richest parts of Lviv’s history and culture. During these 2.5 hours, we will climb the highest point of Lviv – High Castle Hill – and uncover stories about Soviet traces, national diversity, art, and culture. You will discover Lviv’s oldest areas, even older than the Old Town, including the origins dating back to the 13th century. The tour includes visits to historical sites, parks, and churches, along with a breathtaking view from the highest observation deck in the city. We’ll also enjoy singing songs and share some with you! Unravel the mysteries of Lviv with us!</p>\n<p><strong>Final point:</strong> Observation deck on the High Castle Hill</p>",
    "highlightsTitle": "- Hidden Courtyards\n- Pharmacy Museum\n- Benedictine Monastery\n- Old Market Square\n- High Castle Hill\n- Panoramic City View\n- St. John's Church",
    "highlightsDescription": "- Explore secret Soviet-era yards and unique spots that are known only to the city's local residents.\n- Visit a unique museum dedicated to the history of pharmacy and medicine, located in Lviv's historic centre.\n- Discover a historical religious complex offering a glimpse into the monastic life and architecture of old Lviv.\n- Stand in the heart of Lviv's oldest district, where the city was originally founded in the 13th century.\n- Climb to Lviv's highest point to see remnants of the former castle and walk through its beautiful parks.\n- Enjoy a breathtaking panorama of the entire city from Lviv’s highest and most famous observation deck.\n- See one of the very first churches built in the city, located in Lviv's oldest historic district.",
    "photoIds": [
      "48480",
      "3853",
      "21779"
    ]
  },
  {
    "city": "Lviv",
    "name": "Welcome to Lviv! Old Town Guided Tour",
    "short": "Historical introduction to Lviv as a crossroads between East and West, focused on the UNESCO-listed Old Town. We trace medieval, Polish, Habsburg and Soviet layers as we walk the historic center – Rynok Square, City Hall, the Armenian Cathedral, the Dominican Church, and the Opera House.",
    "long": "<p>A historical bridge between East and West. A gate to the Orient. A multicultural port in the ocean of steppe. Are you ready to experience Lviv?</p>\n<p>Established in the Middle Ages by the revered King of the Rus’, Danilo of Galicia, and named after his are Lev, the city grew to become one of the region’s most important trading hubs. After being taken over by the Kingdom of Poland, it was one of its administrative centers. Inhabited by the Ruthenians, Poles, Jews, Germans, Greeks, Tatars, Turks, Persians, Arabs and Armenians, the city was famous for its unique character and atmosphere. In the 19th century, Lviv became part of the Austro-Hungarian Empire only to return to Poland for twenty years between WWI and WWII. In 1939, it was annexed by the Soviets, then conquered by the Germans to finally fall back into the Soviet hands for almost 50 years as part of the Ukrainian Socialist Republic. In 1991, it became one of the most important cities in independent Ukraine. Traces of this both glorious and complicated past are still visible in the fabric of the city. But Lviv is also a window through which one can discover present-day Ukraine – a fascinating country torn between West and East.</p>\n<p>Come and join us for a tour around one of the most beautiful and interesting cities in Eastern Europe. Enjoy the marvellous architecture, great food and unique atmosphere – all still unspoilt by the massive tourist industry.</p>",
    "highlightsTitle": "- Medieval Origins\n- Multicultural Heritage\n- Austrian Lemberg\n- 20th-Century History\n- Modern Ukraine\n- Lviv's Architecture\n- Local Food",
    "highlightsDescription": "- Learn about the city's founding by King Danilo of Galicia and its early medieval roots.\n- Explore the legacy of Poles, Jews, Armenians, and others who shaped the city’s unique character.\n- Discover the elegant architecture and legacy from Lviv's time as part of the Austro-Hungarian Empire.\n- Understand the city's complex past under Polish, Soviet, and German rule throughout the last century.\n- Experience the vibrant atmosphere of one of independent Ukraine’s most important cultural centers.\n- Admire the marvelous architecture that serves as a testament to the city's rich and complex history.\n- Enjoy the great food and unique flavours that reflect the city's diverse cultural influences.",
    "photoIds": [
      "40364",
      "3847",
      "1937",
      "12261",
      "17665",
      "21779",
      "3859",
      "9158"
    ]
  },
  {
    "city": "Lviv",
    "name": "WW II and Jewish Lviv Guided Tour",
    "short": "History of Jewish Lviv and WWII. We begin with centuries of Jewish presence before turning to the 20th century — from the Soviet occupation (1939–41) to the Nazi period (1941–44). The tour highlights the Lviv Ghetto, prison sites, and occupation regimes, and concludes at the Territory of Terror Museum with its archives and exhibitions.",
    "long": "<p>During World War II &amp; Jewish Lviv tour you will discover the full, nearly 700 year-old history of its Jewish community. This is an ambivalent story about looking for identity, happiness and good life as well as many challenges and atrocities. We will talk about the biggest ghetto in the USSR – located in Lviv, occupational administrations, Lviv prisons, witnesses’ testimonies and totalitarian regimes.  </p>\n<p>Destruction of the city and the discovery of Jewish past and present – makes this tour a must-join one!</p>",
    "highlightsTitle": "- Jewish Lviv History\n- Lviv Ghetto\n- Totalitarian Regimes\n- Lviv Prisons\n- Witness Testimonies\n- Terror Museum",
    "highlightsDescription": "- Explore the nearly 700-year-old history of the city's Jewish community, its identity and challenges.\n- Learn about the 3rd largest ghetto in Europe, a tragic chapter of World War II history.\n- Understand the impact of occupational administrations and totalitarian regimes on Lviv and its inhabitants.\n- Hear about the role of the city’s prisons during the turbulent times of the 20th century.\n- Listen to moving personal accounts from those who lived through the city's darkest historical moments.\n- Visit a modern museum with a huge digital archive dedicated to the victims of occupations.",
    "photoIds": [
      "3865",
      "21779"
    ]
  },
  {
    "city": "Madrid",
    "name": "20th Century Madrid: War, Dictatorship & Democracy",
    "short": "Story of 20th-century Madrid. We follow the city’s path from the Second Republic and the Civil War through Franco’s dictatorship, the democratic transition, and La Movida Madrileña. The route runs from the Royal Palace via Gran Vía to Malasaña, with stops at Plaza de España, Gran Vía & Callao, the Monument to Clara Campoamor, the Convent of las Comendadoras de Santiago, and Dos de Mayo Square.",
    "long": "<p>In Madrid, history whispers from every stone, but the 20th century resonates with a thunderous roar! Join our tour and buckle up for the ride, as this period swung wildly between progressive reforms and brutal dictatorships. Hear the stories of resilience, revolution, the fight for women’s rights and celebrate with us the city’s vibrant rebirth after Franco’s rule!</p>\n<p>It all begins with the dictatorship of Primo de Rivera and then the Second Spanish Republic, one of the most progressive governments in the country’s history. Madrid was then an intellectual hub and a place where Clara Campoamor led women to fight for their rights and was instrumental in securing their right to vote in 1931. From there it gets darker as the country enters the Spanish Civil War, a precursor to the Second World War, with fascist powers on one side and volunteers like the Abraham Lincoln Battalion on the other. Even Hemingway couldn’t resist the drama and came to Madrid to document the chaos! The city was a crucial battleground, enduring bombing and siege and becoming a symbol of anti-fascist resistance around the world. Soon, the country was in the grip of Franco’s dictatorship, which lasted until his death in 1975. Once again, Madrid was at the heart of Spain’s transition to democracy. Soon came the crazy 1980s, a period of cultural explosion known as “La Movida Madrileña”, and of course Madrid was at its epicentre! It embodied the freedom and creativity that shattered old norms and influenced music, film, art and nightlife. Think of Pedro Almódovar – a true symbol of this era! All of this has created the Madrid we know today – a vibrant, modern capital known for its cultural richness, lively atmosphere, bustling nightlife and diverse population.</p>\n<p>Our journey will begin close to the Royal Palace, home not only to the monarchs, but also other leaders we’ll meet on the tour. We will then head to Plaza de España, where one of the first battles of the Civil War was fought, setting the tone for the fierce struggles to come. We will talk about Gran Via and Callao, the beating heart of Madrid’s entertainment and media industries. This area was frequented by international journalists, including Ernest Hemingway, who covered the events. We will then explore the long Franco dictatorship, its impact on daily life, the role of the Church and learn why it remains such a controversial subject in Spain. Next, we will pay tribute to Clara Campoamor, a key figure in Spain’s feminist movement. Not far from her monument we will see the Convent of the Comendadoras de Santiago – a place that played a grim role during the Civil War, being used as a prison by both Republicans and Nationalists. We will finish our tour in Dos de Mayo Square, the epicentre of the La Movida Madrileña Movement, where you can still feel the legacy of freedom and artistic expression that defined it. It will be the perfect place to end our tour with food, drink and perhaps some nightlife to experience the vibrancy of Madrid!</p>\n<p>Join us for a deep dive into Madrid’s turbulent 20th century history. Explore both the struggle for democracy and the grip of dictatorship. Prepare to see the iconic landmarks as well as the hidden details. Come and discover the stories etched into Madrid’s soul!</p>",
    "highlightsTitle": "- Plaza de España\n- Gran Vía and Callao\n- Spanish Civil War\n- Franco's Dictatorship\n- Clara Campoamor\n- Convent of Comendadoras\n- Dos de Mayo Square",
    "highlightsDescription": "- A symbolic landmark that was the site of one of the first battles of the Civil War.\n- The heart of Madrid’s media industry, where journalists like Hemingway reported on the conflict.\n- Learn about the brutal conflict that was a precursor to the Second World War.\n- Discover the impact of the 36-year authoritarian regime that shaped modern Spanish society.\n- A tribute to the pioneering lawyer and politician who secured women's right to vote in Spain.\n- A historic convent that served as a grim political prison during the Spanish Civil War.\n- The epicentre of \"La Movida,\" the countercultural movement celebrating freedom after Franco's death.",
    "photoIds": [
      "35173",
      "35185",
      "35167",
      "35457",
      "35211",
      "35223",
      "35179"
    ]
  },
  {
    "city": "Madrid",
    "name": "Prado Museum Masterpieces Guided Tour",
    "short": "Art history tour of Madrid’s Prado Museum focused on the Spanish Golden Age and royal collections. We examine Velázquez’s Las Meninas, Bosch’s Garden of Earthly Delights, and major canvases by Goya, Titian and Raphael, linking Habsburg and Bourbon patronage to the museum’s masterpieces.",
    "long": "<p>From the grandeur of Spanish royalty to the raw emotion of its artists, the Prado Museum holds centuries of stories within its walls.</p>\n<p>Originally conceived as a cabinet of natural history, the Prado Museum’s transformation into a world-renowned art gallery began with the vision of King Charles III, who sought to showcase the best of Spanish artistic achievement. The museum’s collection, heavily influenced by royal patronage, reflects the changing tides of Spanish history and the personal tastes of its monarchs.</p>\n<p>The Golden Age of Spanish painting, with its dramatic realism and spiritual intensity, is profoundly represented. We’ll explore the revolutionary techniques of Diego Velázquez, whose “Las Meninas” continues to baffle and inspire, and delve into the haunting visions of Francisco Goya, whose works capture the turmoil of a nation.</p>\n<p>We’ll trace the influence of Italian Renaissance masters like Titian and Raphael, whose works enriched the Spanish artistic tradition. We’ll witness the mystical fervor of El Greco, whose elongated figures and vibrant colors evoke a spiritual realm. And we’ll confront the surreal and symbolic world of Hieronymus Bosch, whose “Garden of Earthly Delights” remains a masterpiece of enigmatic beauty.</p>\n<p>The Prado’s collection is not merely a display of artistic prowess; it’s a chronicle of Spanish society, politics, and religion. We’ll uncover the stories behind the portraits of kings and queens, the allegorical depictions of power, and the deeply moving religious works that reflect the nation’s spiritual heart.</p>\n<p>From the opulent halls of the Habsburgs to the turbulent era of the Bourbons, Prado’s art bears witness to the rise and fall of empires. We’ll explore how artists navigated the complex political landscape, expressing both loyalty and dissent through their work.</p>\n<p>Join the Prado Masterpieces tour to journey through the heart of Spanish art, uncovering the tales behind iconic works. We’ll stand before masterpieces by Goya, Velázquez, and El Greco, and explore the evolution of Spanish painting. We’ll delve into the lives of kings and commoners, saints and sinners, and pass through halls filled with passion and power. The Prado Masterpieces tour offers a captivating introduction to Spain’s artistic soul. Don’t miss your chance to witness history and beauty intertwined.</p>\n<p>Please note that the Prado Museum can be crowded and some areas may have limited accessibility. Comfortable shoes are highly recommended.</p>",
    "highlightsTitle": "- Diego Velázquez\n- Francisco Goya\n- El Greco\n- Hieronymus Bosch\n- Italian Renaissance Masters\n- Spanish Royal Collection",
    "highlightsDescription": "- Encounter the leading painter of the Spanish Golden Age and his iconic masterpiece \"Las Meninas.\"\n- Delve into the haunting visions of one of Spain’s most influential artists, capturing national turmoil.\n- Witness the mystical fervor and unique style of this master of the Spanish Renaissance.\n- Confront the surreal world of the Dutch master in his enigmatic \"Garden of Earthly Delights.\"\n- Admire works by masters like Titian and Raphael and trace their influence on Spanish art.\n- Discover how royal patronage from Spanish monarchs shaped the museum’s magnificent collection of art.",
    "photoIds": [
      "43768",
      "43774",
      "35457",
      "43780",
      "43762"
    ]
  },
  {
    "city": "Madrid",
    "name": "Madrid Private Custom Tour",
    "short": "A private, fully tailored tour: we set the theme, route and pace to your interests and schedule, covering any area of the city—from the historic center to modern districts—and we can start when and where you prefer, with hotel pick-up if needed.",
    "long": "<p>Private tour is a great opportunity for people who have limited time and cannot join our regular FREE walking TOURs or simply prefer staying in a small group of friends.</p>\n<p>It is you who chooses when the tour should start and what should be its topic. If you are not sure what do you want to visit during the tour, let us know and we will help you plan the tour that fits best your needs and interests.</p>\n<p>What is more, you do not have to worry about finding the guide at the meeting point – they can meet you in any place in the city or pick you up from your hotel. You don’t have to follow our strict schedule of regular tours, we can make a tour according to your needs.</p>\n<p>For more information please <strong><a href=\"https://freewalkingtour.com/contact/\">contact us</a></strong>.</p>",
    "highlightsTitle": "- Private Group\n- Flexible Start Time\n- Custom Itinerary\n- Hotel Pickup\n- Personal Guide\n- Tailored Experience",
    "highlightsDescription": "- An exclusive tour experience for you and your friends or family.\n- You choose the most convenient time for your private tour to begin.\n- The tour’s topic and route are planned according to your personal interests.\n- Your guide can meet you directly at your hotel or another chosen location.\n- Enjoy the undivided attention of a guide dedicated only to your group.\n- A tour designed specifically for you, perfect for those with limited time.",
    "photoIds": [
      "35235",
      "43768",
      "35223",
      "20965",
      "35205",
      "17805",
      "17790",
      "35457",
      "35241",
      "17780"
    ]
  },
  {
    "city": "Madrid",
    "name": "Modern Madrid: Culture & Iconic Neighbourhoods",
    "short": "Contemporary Madrid and barrio life. We explore Malasaña, Chueca, La Latina, and Lavapiés, tracing La Movida and today’s vibrant street culture. Along the way we stop at Plaza Dos de Mayo, Plaza de Chueca, Cava Baja, Mercado de la Cebada, and Mercado San Fernando, with tapas stops and a taste of madroño liqueur — a journey into the rhythm of local life.",
    "long": "<p>Madrid is a city of energy, creativity, and endless social life. From the rebellious streets of <strong>Malasaña</strong> to the stylish vibe of <strong>Chueca</strong>, the historic charm of <strong>La Latina</strong>, and the multicultural energy of <strong>Lavapiés</strong>, each neighbourhood has its own unique character. This tour is all about <strong>experiencing Madrid like a local</strong>—eating, drinking, and exploring the city’s most vibrant barrios while making new friends along the way.</p>\n<h3 id=\"thespiritofmadridsbarrios\"><strong>The Spirit of Madrid’s Barrios</strong></h3>\n<p>Madrid has always been a city of transformation, creativity, and expression. In the 1980s, <strong>La Movida Madrileña</strong> ignited a cultural revolution, bringing music, art, and nightlife to the forefront, making Madrid a symbol of cultural freedom. That creative energy still thrives today, from Malasaña’s underground scene to Lavapiés’ street art and multicultural influences.</p>\n<p>But Madrid isn’t just about its past—it’s about the people who keep its traditions alive while embracing new ones. This tour takes you through four <strong>iconic neighbourhoods</strong>, each with its own history, flavors, and local spirit.</p>\n<h3 id=\"whatwillwesee\"><strong>What Will We See?</strong></h3>\n<p>We meet at <strong>Tribunal Metro Station</strong>, right next to the stunning <em>History Museum of Madrid</em>, and begin our adventure in <strong>Malasaña</strong>. This neighbourhood was the heart of <em>La Movida Madrileña</em> and remains one of Madrid’s most exciting districts. We’ll visit <strong>Plaza Dos de Mayo</strong>, a lively square full of history, before stopping for a <strong>drink and tapa</strong> in one of Malasaña’s classic bars. From there, we continue to <strong>Plaza de San Ildefonso</strong>, a hotspot for both history and nightlife and a favourite gathering place for locals.</p>\n<p>Next, we explore <strong>Chueca</strong>, Madrid’s most inclusive and stylish neighbourhood. Known for its LGBTQ+ scene and modernist charm, this area is full of independent boutiques, lively bars, and beautiful architecture. We’ll stop at <strong>Plaza de Chueca</strong>, the heart of the district, to soak up the atmosphere and enjoy another <strong>tapas stop</strong>.</p>\n<p>A short metro ride takes us to <strong>La Latina</strong>, home to Madrid’s <strong>oldest streets</strong> and some of its best tapas bars. We’ll walk through <strong>Mercado de la Cebada</strong> and down <strong>Cava Baja</strong>, a street famous for its traditional taverns. Here, we’ll taste the famous <strong>Madroño liquor</strong>—a true local specialty.</p>\n<p>Our final stop is <strong>Lavapiés</strong>, the most multicultural area of Madrid. Known for its street art, diverse food scene, and alternative culture, this neighbourhood offers a glimpse into Madrid’s artistic underground. We’ll visit <strong>Calle de Embajadores</strong> and end at <strong>Mercado San Fernando</strong>, a unique space where tradition meets modern creativity.</p>\n<h3 id=\"experiencemadridlikealocal\"><strong>Experience Madrid Like a Local</strong></h3>\n<p>This isn’t just a sightseeing tour—it’s a chance to <strong>live and breathe Madrid</strong>. Walk through its most <strong>authentic neighbourhoods</strong>, taste its <strong>food and drinks</strong>, and discover the places where <strong>locals gather</strong>. Join us for an unforgettable evening of culture, history, and great company—let us show you the real heart of Madrid!</p>",
    "highlightsTitle": "- Malasaña District\n- Chueca District\n- La Latina District\n- Lavapiés District\n- La Movida Madrileña\n- Local Tapas Experience\n- Madroño Liquor Tasting",
    "highlightsDescription": "- The heart of Madrid’s 1980s counterculture movement, known for its rebellious, creative spirit.\n- Madrid's most inclusive and stylish neighbourhood, famous for its LGBTQ+ scene and modernist charm.\n- One of Madrid’s oldest areas, known for its historic streets and traditional tapas taverns.\n- A vibrant, multicultural neighbourhood famous for its street art and diverse global food scene.\n- The cultural revolution that transformed Madrid into a hub of art, music, and freedom.\n- Visiting authentic local bars to enjoy small snacks and drinks, a key part of Madrid’s social life.\n- Tasting a sweet liqueur made from the fruit of the Madroño, Madrid’s symbolic tree.",
    "photoIds": [
      "43296",
      "43308",
      "43314",
      "43302",
      "48229",
      "48228",
      "48240",
      "43363",
      "43290",
      "43333"
    ]
  },
  {
    "city": "Madrid",
    "name": "The Royal Retiro Park – Madrid’s green oasis",
    "short": "History-focused tour of Madrid’s Parque del Buen Retiro: we trace its evolution from a 17th‑century royal retreat to a public park as we move through key sites — Monument to Alfonso XII, Crystal Palace, the Great Pond, Parterre gardens and the Fallen Angel Fountain.",
    "long": "<p>The Parque del Buen Retiro, one of Spain’s most famous urban parks, is a living museum of Madrid’s history. This tour invites you to explore its architectural, sculptural, and landscape ensembles, spanning from the 17th to the 21st centuries.</p>\n<p>Originally a royal retreat, Retiro’s transformation into a public park is a tale of shifting power and evolving urban life. We’ll trace its origins, from a private garden for the Spanish monarchy to its gradual opening to the public. In 1767, Carlos III granted access for recreational events, marking a turning point in the park’s history. Then in 1868 the city of Madrid took ownership, creating the public park that we know today.</p>\n<p>This tour will unveil the stories behind the park’s sculptures, fountains, and gardens, each reflecting a different era of Madrid’s cultural and social development. You’ll gain a deeper understanding of how Retiro Park has shaped the city’s identity and provided a green sanctuary for generations.</p>\n<p>Join our Retiro Highlights tour to immerse yourself in the park’s rich history and natural beauty. Experience the blend of royal grandeur and public enjoyment that makes Retiro a must-see destination in Madrid.</p>\n<p>Retiro Park offers relatively flat terrain and paved pathways, making it accessible for most visitors. However, some areas may have uneven surfaces.</p>",
    "highlightsTitle": "- Monument to Alfonso XII\n- Crystal Palace\n- Great Pond\n- Parterre Gardens\n- Fallen Angel Fountain\n- Royal History",
    "highlightsDescription": "- A grand monument reflecting the nation’s history, overlooking the park's great pond.\n- A testament to 19th-century architectural innovation with its ethereal glass and metal structure.\n- The park's iconic central lake, a popular spot for recreation and relaxation.\n- Elegant French-style formal gardens showcasing precise, symmetrical design and beautiful landscaping.\n- The park’s controversial and unique sculpture dedicated to the Fallen Angel.\n- The park's transformation from a private royal retreat to a beloved public space.",
    "photoIds": [
      "43563",
      "43569",
      "43557",
      "43545",
      "35457"
    ]
  },
  {
    "city": "Madrid",
    "name": "Welcome to Madrid! Historic Centre Guided Walking Tour",
    "short": "Introduction to Madrid’s historic centre: we follow the city’s story from Islamic Mayrit through the Habsburg and Bourbon eras to the Civil War and Franco’s dictatorship. The walk leads from the Royal Palace via Plaza Mayor and Puerta del Sol to the Prado Museum, ending at the Fuente de Neptuno.",
    "long": "<p>With its great history visible everywhere, today’s Madrid is a fascinating metropolis, one of the European culinary hotspots, renowned for its excellent museums. A place that, despite being colder than most of Spain, still exudes a hot Spanish soul! Join our tour to discover the essence of Madrid – a city forged by ambition, resilience, and a touch of royal madness!</p>\n<p>Once a modest settlement whose name derives from the Arabic “Mayrit” – “a place of abundant water”, Madrid rose into importance when Philip II of Habsburg moved his court here, transforming the city into the political centre of his vast empire. Right here decisions were made leading to the colonial conquests that ensured “the sun never sets” on the Spanish Empire. The wealth of the city attracted countless artists and poets – Cervantes, Velázquez and Goya, to name a few. But it was under the Bourbons, the dynasty that still holds the Spanish crown, that Madrid really flourished. In particular, Charles III, known as “the best mayor of Madrid”, spared no effort and money (sometimes not his own!) to make Madrid one of Europe’s leading metropolises, paving the way for the creation of the fascinating, modern Madrid we know today.</p>\n<p>Our tour will start close to the majestic Royal Palace. Standing there you’re in fact entering the area where the Muslim settlement, from which Madrid grew, was established. Just opposite is the incredible Almudena Cathedral – built in a variety of neo-styles, reflecting its century-long construction. Continuing our walk, we will stop at Plaza de la Villa. Three centuries of Madrid’s architectural history are on display here, ranging from mediaeval Mudejar, influenced by Islamic art, up to Baroque. Next we will visit the iconic Plaza Mayor, a grand square that has witnessed a myriad of historical events including bullfights, public trials during the Inquisition, and opulent masquerade balls. Just a few steps away is the bustling Puerta del Sol, the very heart of Madrid, where all Spanish roads figuratively begin and where the statue of King Charles III watches over the vibrant city life. You’ll learn about the magnificent Gran Vía, often compared to Times Square or Broadway, and the modernisation of the city in the 19th century. We will then stop at the Prado Museum, home to an unrivalled collection of European art, and finish the tour at Fuente de Neptuno. As we journey through the city and its history, we will not forget about equally important things – to show you some of the coolest places to wine and dine!</p>\n<p>So join us to hear all about the triumphs and tragedies that have shaped Madrid, from the Habsburgs and Bourbons through the dark times of the Civil War and Francisco Franco’s dictatorship. Expect the Spanish Inquisition (although nobody expects the Spanish Inquisition!) and prepare yourself for royal drama, inbreeding, political upheaval, betrayal and intrigue… Get ready for the fascinating Madrid!</p>",
    "highlightsTitle": "- Royal Palace\n- Almudena Cathedral\n- Plaza de la Villa\n- Plaza Mayor\n- Puerta del Sol\n- Gran Vía\n- Prado Museum\n- Fuente de Neptuno",
    "highlightsDescription": "- The majestic official residence of the Spanish Royal Family, located on the site of the original Moorish settlement.\n- An incredible cathedral built in various neo-styles, reflecting its century-long construction process next to the palace.\n- A historic square displaying three centuries of Madrid’s architecture, from medieval Mudejar to Baroque styles.\n- A grand, iconic square that has witnessed bullfights, public trials during the Inquisition, and opulent balls.\n- The bustling heart of Madrid where all Spanish roads figuratively begin, watched over by King Charles III.\n- Madrid's vibrant main street, often compared to Broadway, symbolizing the city's modernisation in the 19th century.\n- Spain's main national art museum, home to an unrivalled and vast collection of European masterpieces.\n- An iconic and monumental neoclassical fountain depicting Neptune, the god of the sea, a city landmark.",
    "photoIds": [
      "36017",
      "17780",
      "48260",
      "35241",
      "35235",
      "20965",
      "35205",
      "48264",
      "35253",
      "35457"
    ]
  },
  {
    "city": "Malaga",
    "name": "Málaga: Alcazaba Guided Tour",
    "short": "Muslim-era Málaga and the Alcazaba. We trace the fortress’s Islamic heritage and later Christian conquest as we walk through its walls and palaces — visiting Puerta Principal, Arco del Cristo, Patio de Armas, Patio de los Surtidores, Patio de los Naranjos y de la Alberca, and the miradores with sweeping city and sea views.",
    "long": "<p><strong>Time to explore the flagship of the medieval Málaga!</strong></p>\n<p>If you want to see 8 centuries of Muslim influence in Spain reflected in architecture there is no better way to do it than joining Alcazaba of Málaga walking tour. In 1,5 hour you can admire the legacy confined within the walls of this palatial fortification while listening to captivating stories fi your guide.</p>\n<p>The Alcazaba of Malaga stands as a majestic testament to the city’s rich history and cultural heritage. This ancient fortress, nestled amidst the vibrant streets of Malaga, Spain, dates back to the 11th century, a remarkable relic from the era of Muslim rule in the region. Today, the Alcazaba stands not only as a symbol of Malaga’s storied past but also as a cherished cultural landmark, inviting travellers from around the world to immerse themselves in its timeless beauty and storied past.</p>\n<p>During the tour you see its imposing walls of the fortress, adorned with intricate Moorish architecture, offering a glimpse into the architectural mastery of its builders. The palaces area impresses with its majestic, well restored courtyards. As one ventures through its labyrinthine pathways and tranquil gardens, a sense of awe and reverence fills the air, transporting visitors back in time. This place tells a story of over 8 centuries of Muslim inhabitancy, fight of the Christian conquest and later a Spanish inquisition.</p>\n<p>From the vantage points atop its towers, breathtaking views of the Mediterranean Sea and the bustling city below unfold, this walking tour done by local guide will let tour appreciate not only architecture but also Alcazaba’s rich and complicated history. Don’t miss this one out!</p>\n<p><strong>Alcazaba entrance fee not included,</strong> the price is 3,50€ per person. It is necessary to buy the tickets prior to the tour date <strong><a href=\"https://alcazabaygibralfaro.spainheritagenetwork.com/reservarEntradas?idProducto=859\">HERE</a></strong>.</p>",
    "highlightsTitle": "- Moorish Architecture\n- Fortress Walls\n- Arco del Cristo\n- Patio de Armas\n- Palace Courtyards\n- Scenic Viewpoints",
    "highlightsDescription": "- Admire intricate details and design reflecting eight centuries of Muslim influence in Málaga.\n- Discover the imposing defensive walls that protected the palatial city and its inhabitants for centuries.\n- Pass through the historic Christ's Arch, a blend of Moorish and later Christian architecture.\n- Visit the fortress's former parade ground, now a garden and the heart of the lower citadel.\n- Explore serene courtyards with fountains, orange trees, and lush gardens, like the Patio de los Surtidores.\n- Enjoy breathtaking panoramic views of Málaga and the Mediterranean Sea from the ancient fortress towers.",
    "photoIds": [
      "31801",
      "31777",
      "31783",
      "31789",
      "31771",
      "31759"
    ]
  },
  {
    "city": "Malaga",
    "name": "Welcome to Malaga! Historic Centre Tour",
    "short": "Introduction to Málaga’s historic centre: we trace Phoenician, Roman, Moorish and Christian layers as we move past Plaza de la Constitución, the Alcazaba and Roman Theatre, Málaga Cathedral (La Manquita) and the Picasso Museum.",
    "long": "<p>Bathed in sun and sparkling sea, full of beautiful beaches, rich history, and delicious cuisine Malaga is a perfect place to soak up the unrivalled Mediterranean atmosphere. Its many historic landmarks, vibrant cultural scene and museums such as the Picasso Museum make it a great destination not only for the beach goers but for the history and art lovers too! Join us on our exploration of this fascinating Mediterranean gem!</p>\n<p>Malaga’s history dates back over 2,800 years, which makes it one of the longest continuously inhabited cities in Western Europe. It was founded by the Phoenicians in the 8th century BC and over its history has been ruled by the Romans, the Moors, and the Christian monarchs, all of whom have left their mark on the city’s culture and architecture. For centuries Malaga was an important port and a major centre of trade while today it is a thriving tourist destination, attracting visitors from all over the world.</p>\n<p>Our journey through Malaga’s past begins at the iconic Plaza de la Constitución, the very heart of the city’s historic centre. As we navigate the winding alleys of the Old Town, you’ll encounter the rich layers of its heritage—Moorish, Roman, and Christian—that coexist harmoniously in the city's architecture and culture. Walking around, we’ll also pay homage to Malaga’s most famous son, Pablo Picasso, and explore his deep connection to the city that shaped his artistic vision. Additionally, we’ll touch upon the achievements of another local legend, actor Antonio Banderas, and his contributions to Malaga’s cultural scene.</p>\n<p>Join us on our Malaga Historic Centre Tour and immerse in the city’s rich history, culture, and artistic spirit. Our local, expert guides will help you gain a deeper understanding of Malaga’s past and present, and uncover the hidden treasures that make it so magical.</p>",
    "highlightsTitle": "- Plaza de la Constitución\n- The Alcazaba\n- Roman Theatre\n- Malaga Cathedral\n- Malaga's Famous Sons\n- Old Town Alleys",
    "highlightsDescription": "- The main square and historic heart of the city's vibrant Old Town.\n- A well-preserved Moorish fortress showcasing Malaga's rich Islamic heritage.\n- Ancient ruins of a theatre from the 1st century AD, a relic of Roman times.\n- The city's grand cathedral, nicknamed \"La Manquita\" due to its famously unfinished tower.\n- Learn about the legacies of Pablo Picasso and Antonio Banderas, and their connection to the city.\n- Explore charming winding streets of the historic centre, filled with hidden gems and captivating tales.",
    "photoIds": [
      "28746",
      "28758",
      "28740",
      "28951"
    ]
  },
  {
    "city": "valletta",
    "name": "Mdina & Rabat: Malta’s Medieval Heart",
    "short": "Historical tour of Malta’s former capital Mdina and neighboring Rabat: we trace the story of medieval power and faith inside the walled city, see the Mdina Gate, St Paul’s Cathedral, Palazzo Falson and the bastions, then move to Rabat for St Paul’s Catacombs.",
    "long": "<p>Mdina, the old capital city of Malta, is exactly that: the place from where the nobility and the church controlled the island, protected by impregnable walls against enemy attacks. It is one of the most beautiful and well-preserved European medieval towns, selected as a setting by producers of movies and TV series like Game of Thrones, “Troy” and “Gladiator”! Coming here you will immediately understand why: the old narrow alleyways every now and then opening into charming squares or leading you to bastions with spectacular views haven’t changed much from the days when knights and lords walked them.</p>\n<p>Mdina has managed to do the impossible – to keep the passage of time away, there are no modern shops here, no neon lights… Right under the walled city of Mdina there is Rabat – a charming village full of colourful doors and balconies and quaint streets. It grew around the city, built by those who couldn’t afford a palace inside of the walls, but wanted to be close by in the (likely) case of an attack.</p>\n<p>During the tour we will visit both: Mdina and Rabat, weaving a fascinating story of the town, the village and their former inhabitants, stories that shaped Maltese traditions, beliefs and the essence of who we are today. It is a visit no one should miss if they really want to understand the soul of Malta.</p>",
    "highlightsTitle": "- Mdina, the Silent City\n- Charming Rabat\n- Famous Film Locations\n- Medieval Alleyways\n- The City Bastions\n- Stories of the Knights\n- Maltese Traditions",
    "highlightsDescription": "- Explore Malta's ancient walled capital, a beautifully preserved medieval town once home to noble families.\n- Discover the quaint village outside Mdina's walls, known for its colourful doors and winding streets.\n- See real-life settings for productions like Game of Thrones, Gladiator, and Troy in the ancient city.\n- Wander through narrow, winding streets that have remained unchanged since the time of knights and lords.\n- Enjoy spectacular panoramic views of the island from the top of Mdina's impressive defensive fortifications.\n- Hear tales of the legendary knights and lords who once walked these very streets and defended the city.\n- Learn how stories from these towns shaped the traditions and beliefs of the Maltese people today.",
    "photoIds": [
      "12541",
      "22868",
      "12535",
      "12562"
    ]
  },
  {
    "city": "valletta",
    "name": "Welcome to Valetta! Old Town Guided Walking Tour",
    "short": "Historical tour of Valletta, Malta’s fortified capital. We explore the Order of Saint John, the Great Siege, and World War II as we walk the walled city—City Gate, Upper Barrakka Gardens and the Saluting Battery with harbour views, and the magnificent St. John’s Co-Cathedral.",
    "long": "<p>Visit with us the smallest (and the sunniest!) capital in the European Union but at the same time packed with monuments like almost no other! Cross the city gates and once you do it, you will enter a real open air museum!</p>\n<p>Listen to the history of this amazing place, inseparably bound with the Crusader knights of the Order of Saint John. They were granted the island of Malta by the Spanish emperor, turning it into one of the most fortified areas in the world.</p>\n<p>Valletta was built after the Great Siege of Malta by the mighty Ottoman Empire, since the Order was expecting a new attack. They built an impregnable city that became the most modern in the old world. Walking through the streets of Valletta one has the impression that a knight in his shining armour is about to come around the corner…</p>\n<p>The war would come back to Valletta many times, the last and the hardest was during World War II. The island became known as the British “unsinkable aircraft carrier” and a submarine base. Despite the siege and the hunger it was never conquered by the Nazis! And still twice a day this brave city is reverberating with the firing of cannons remembering the times of war.</p>\n<p>Learn with us all about the Maltese capital: from the myths and tales, through the history and secrets up to the typical Maltese foods and drinks.</p>\n<p>The tour ends at the St. John’s Co-Cathedral. It may seem simple outside as it was built in a militaristic style but inside this masterpiece simply takes your breath away. Not entering it would be the biggest mistake you could ever make! Hence – you can do it with us, right after the tour.</p>",
    "highlightsTitle": "- Knights of St. John\n- Great Siege of 1565\n- Valletta's Fortifications\n- World War II History\n- Grand Harbour Views\n- St. John’s Co-Cathedral",
    "highlightsDescription": "- The crusading order of knights who founded and fortified the city of Valletta.\n- The epic battle against the Ottoman Empire that led to the city's construction.\n- The massive system of bastions and walls that made Valletta an impregnable fortress city.\n- Learn about Malta’s heroic role as Britain's \"unsinkable aircraft carrier\" in WWII.\n- Enjoy magnificent gardens with breathtaking panoramic views over the city's famous harbours.\n- A masterpiece of Baroque architecture and the Knights' conventual church, simple outside, stunning inside.",
    "photoIds": [
      "12507",
      "12458",
      "12516",
      "12476",
      "12470",
      "12495",
      "22868"
    ]
  },
  {
    "city": "valletta",
    "name": "Valetta Food & Culture Tour",
    "short": "Food tour in Valletta: we walk the capital’s streets, explain how Italian, Arab, African, Spanish and English influences shape Maltese cuisine, and taste local staples—pastizzi, bigilla, Maltese cheeselet—paired with local soft drinks or beers.",
    "long": "<p>The best and most enjoyable way to learn about foreign culture is by getting to know its cuisine, no doubt about that! The food can tell us much about the culture, people and history of the place we visit. So if we were to describe Maltese food in one word, that word would be – fusion. Just like the history of Malta, it exhibits the mixture of different influences that once were significant on the island. Over the centuries Italian, Spanish, African, Arab and finally English cuisine had an impact on what is traditionally eaten here. Apart from that, being right in the middle of the Mediterranean Sea naturally gives Malta the abundance of fresh seafood. There is also one more factor to consider: Malta is an extremely religious place – so it’s no surprise that the catholic rhythm of life, festivals and fasting periods impacted the local cuisine as well.</p>\n<p>Food is big on the island and some of the local delicacies are quite calorical, to put it mildly. On the other hand because of Malta’s sometimes stormy history there was a need for simple and cheap food – that is why you can find here lots of vegetables and all kinds of soups. Because of its proximity, traditional Maltese food is strongly influenced by Italian cuisine. This is visible for example in the popularity of open sandwiches with delicious toppings including olive oil, tomatoes, tuna, olives or pastizzi (sort of savoury cake) with different fillings. Amazing bread can also be spread with the local specialty: bigilla (bean paste with garlic) known and eaten in Malta forever! One of the most popular street foods is also a pie filled with dorado fish and various additives, vegetables and herbs. Octopus and rabbit are popular and eaten in all kinds of ways. There are many different kinds of local cheeses made of goat or sheep milk. Cakes and sweets clearly indicate the times when Malta was in Arab hands (oh those heavenly tasty date cakes!).</p>\n<p>Well, we think we will stop right here not to torture you any longer. Join our tour to experience and taste it all! During the tour, you will have the opportunity to immerse yourself in Maltese cuisine, gaining deeper insight into the island’s identity. Your guide will also provide vital information and tips on where to eat and shop for local products.</p>\n<p>Please note that the samples we try may vary depending on the day, availability, opening of local shops and eateries. But rest assured that you will need no lunch after the tour and your stomach will be pleasantly full!</p>",
    "highlightsTitle": "- Pastizzi\n- Bigilla\n- Maltese Cheeselet\n- Maltese Bread\n- Date Cakes\n- Fish Pie\n- Local Drinks",
    "highlightsDescription": "- A traditional savoury pastry, often filled with ricotta cheese or mushy peas.\n- A popular dip made from broad beans, garlic, and herbs, served with bread or crackers.\n- Small, round local cheese made from sheep or goat's milk, known as Ġbejna.\n- Traditional open sandwiches with delicious toppings like olive oil, tomatoes, tuna, and olives.\n- Sweet, diamond-shaped pastries filled with dates, showing the Arab influence on the island's cuisine.\n- A popular pie filled with dorado fish, also known as lampuki, spinach, and olives.\n- A taste of popular Maltese soft drinks or locally brewed beers to accompany the food.",
    "photoIds": [
      "17857",
      "17837",
      "17832",
      "17842",
      "17852",
      "32929"
    ]
  },
  {
    "city": "valletta",
    "name": "Vittoriosa & Inquisitor's Palace Guided Tour",
    "short": "Historical tour of Birgu (Vittoriosa) focused on medieval architecture and the Knights of St John. We cross the old city from the Main Gate through Couvre Port to Vittoriosa Main Square—key stops include the Inquisitor’s Palace, Church of Saint Lawrence, Bishop’s Palace and the Old Hospital.",
    "long": "<p>Join our historical tour with a local, knowledgeable guide. During the 3 hour tour your guide will show you the historic streets of the old city of Birgu, also known as Vittoriosa, one of the oldest and most famous cities in Malta.</p>\n<p>During the tour you will get the chance to travel back in time to the era of the Knights and learn about the rich history and intriguing mysteries of the city. Entrance ticket included.</p>\n<p>Your local guide will not only point out fascinating spots in Birgu but also provide a brief lesson on the city’s complex history. In addition to history, you will gain a deeper understanding of the local culture, as no one can explain it better than our guides!</p>\n<p>Itinerary is subject to change due to other events or activities taking place in Birgu that are beyond our control.</p>",
    "highlightsTitle": "- Historic Streets of Birgu\n- Knights of Saint John\n- Inquisitor's Palace\n- Couvre Port Entrance\n- Vittoriosa Main Square\n- Church of St. Lawrence\n- Mediaeval Norman House",
    "highlightsDescription": "- Discover the ancient, charming alleys of one of Malta's oldest and most historic cities, Vittoriosa.\n- Explore the old living quarters of the legendary military order that once ruled the island of Malta.\n- Uncover the mysteries of this palace, home to the inquisitors for over two centuries, with entrance included.\n- See the fortified main entrance to the city of Vittoriosa, a testament to its military past.\n- Experience the vibrant heart of the city, surrounded by historic buildings, monuments, and local life.\n- Admire the beautiful architecture of the historic conventual church of the Order of St. John.\n- See a well-preserved example of mediaeval architecture showcasing the city's long and rich history.",
    "photoIds": [
      "32935",
      "32929"
    ]
  },
  {
    "city": "Mostar",
    "name": "Sheva’s Original Walking Tour of Mostar: Explore Our Past, Understand Our Present",
    "short": "Historical tour of Mostar from the Ottoman era through Austro-Hungarian and Yugoslav periods to the 1990s war, covering the Old Town along the Neretva and the former front line. We visit key sites: the Old Bridge (UNESCO), Crooked Bridge, Kujundžiluk, Koski Mehmed Pasha Mosque and Bulevar/Titova Street.",
    "long": "<p>Beautifully nestled along the Neretva River Valley, Mostar is the jewel of Hercegovina. An exploration of the white stone houses on the riverbanks, connected by the iconic Old Bridge, transports visitors to Mostar’s distant past. It is a space where eastern and western influences converge. A place where cultures, traditions, and religions have blended over centuries to create an enchanting city. This beauty is marked with the haunting scars of the more recent wars of the late 20th century. Visiting Mostar will leave you delighted by its charm and horrified by the cruelty of war while instilling a sense of hope that is rooted in the resiliency of the human spirit.</p>\n<p>The Neretva River contributed to the foundation of Mostar, its history is storied by the traders, sailors and soldiers who traveled upon its strong current. The brilliant waters of the Neretva link the Adriatic Sea and the resource rich interior of central Bosnia and was responsible for pouring life and prosperity into the city. There is a long history of habitation along the river stretching from prehistory to Roman settlers, those living under the independent medieval Bosnian Kingdom, and for centuries, the Ottomans. It was during the Ottoman Empire that Mostar’s urban fortified core was established and the wooden suspension bridge which traversed the Neretva River was replaced with a single span arch stone bridge in the 16th century. The presence of the bridge at this river crossing gave the city its name and proved to be a masterpiece of Ottoman engineering and genius, outliving the very empire which was responsible for its creation. With the weakening of the Ottoman Empire in the late 19th century, Mostar was incorporated within the borders of the Austro-Hungarian Empire, a period during which the city transformed and quickly modernized. Following WWII and the city’s liberation from fascist control, Mostar became part of the Socialist Federal Republic of Yugoslavia. Bosnia and Hercegovina declared its independence in 1992; the wars which ensued devastated Mostar’s idyllic landscape and sense of community. The Old Bridge, a monument for which the city was long known, was destroyed and became emblematic of the massive loss the city and the greater region endured.</p>\n<p>The tour will explore 600 years of Mostar’s history as Hercegovina’s capital of culture. The picturesque historic core as well as dilapidated buildings, sprawling cemeteries, and damaged walls echo the past and reflect the cultures and the people who shaped the city. We will see the landmarks testifying to the city’s Ottoman past, including the Old Bridge, the reconstruction of which was completed in 2004 and is now included on the UNESCO World Heritage List. The long-standing local practice of bridge diving will be explained, and we will share how you could join the daring group that has carried this rite of passage into present day. We will marvel at the city’s cultural and religious diversity: mosques and churches, stately Austro-Hungarian structures, and Yugoslavia’s architectural modernism are physical reminders of the shifts the city of Mostar has experienced. The tour will also help guests to understand the recent wars with a visit to the Bulevar, the front line during the 1990s wars of Yugoslav succession. Finally, we will witness together how the diverse communities of Mostar work together to overcome challenges and navigate ethno-national difference in effort to create a space for future generations.</p>\n<p>Join us in the exploration of Mostar’s historical monuments, architectural masterpieces, and distinctive cultures, religions, peoples, and customs that merge to create an extraordinary urban landscape. Join us to discover Mostar as only a local can know and understand it!</p>",
    "highlightsTitle": "- Old Bridge\n- Kujundžiluk Old Bazaar\n- Bridge Diving Tradition\n- Koski Mehmed Pasha Mosque\n- Crooked Bridge\n- Scars of War\n- Religious Diversity",
    "highlightsDescription": "- UNESCO-listed Ottoman bridge, a symbol of reconciliation and the city’s icon.\n- Mostar's charming old bazaar, a cobbled street full of traditional coppersmiths and craft shops.\n- A centuries-old rite of passage for local men, diving from the iconic Old Bridge.\n- A beautiful 17th-century mosque offering breathtaking panoramic views of the city.\n- A charming, miniature version of the Old Bridge, believed to be its prototype.\n- Visit the former front line to understand the lasting impact of the 1990s wars.\n- Discover Mostar’s unique blend of mosques and churches, reflecting centuries of multicultural coexistence.",
    "photoIds": [
      "34536",
      "22458",
      "34518",
      "34500",
      "34566",
      "34512",
      "34554",
      "34542",
      "34548",
      "23664",
      "34560",
      "34524",
      "34506"
    ]
  },
  {
    "city": "Mostar",
    "name": "Sheva’s Heart of Mostar Walking Tour: History, Culture, and Tradition of Our Old Town",
    "short": "Historical tour of Mostar’s UNESCO-listed Old Town and čaršija (bazaar), focused on Ottoman heritage and the city’s wartime destruction and reconstruction. We cross the bazaar and riverfront to key sites—Old Bridge, Koski Mehmed Pasha Mosque, Crooked Bridge, Hamam, and Kujundžiluk (coppersmith street)—and note the tradition of bridge diving and coppersmith craft.",
    "long": "<p>Be immersed in Mostar’s earliest history, culture, and traditions! This tour explores Mostar’s historic center, the Old Town and a celebrated UNESCO World Heritage Site. Wander along the narrow cobblestone pathways of the čaršija, the commercial district established and developed through the four centuries of Ottoman presence in Mostar, and which, in accordance with UNESCO standards, has retained the integrity of the original 15th and early 16th century construction. Be witness to the traditions such as the famed Mostarian bridge diving and the unique coppersmith work that have withstood the test of time and continue as celebrated practices today.</p>\n<p>Experience Mostar’s vibrant foundations with a certified guide and local community member. Our route through Old Town ensures that guests will visit and learn about the most notable heritage sites, blending together knowledge about their origin, architectural design, anecdotes, and local perception. Your time on tour with us will also provide valuable insight into the reconstruction process which followed the destruction of the cultural landscape, including Mostar’s Old Town, during the 1990s. Maps and images shared by your guide will help you understand the transformation and revitalization Mostar has experienced over the last three decades.</p>\n<p>Along the way, your guide will provide suggestions and advice on how best to spend your time visiting Mostar, including handicraft shops, cafes, and restaurants which offer high quality and local produced goods and cuisine. This essential tour of Mostar’s idyllic center, with the streets infused with the same spirit and energy of centuries past, will make certain that you get the most out of even a brief visit to our beautiful country.</p>",
    "highlightsTitle": "- Old Bridge\n- Kujundžiluk Bazaar\n- Bridge Diving\n- Crooked Bridge\n- Koski Mehmed Pasha Mosque\n- Traditional Coppersmithing\n- Post-War Reconstruction",
    "highlightsDescription": "- The iconic 16th-century Ottoman bridge, a UNESCO symbol of Mostar, famously rebuilt after the war.\n- The Old Bazaar's cobblestone street, famous for its traditional workshops and authentic artisan souvenir shops.\n- A centuries-old tradition where brave locals dive from the Old Bridge into the chilly Neretva river.\n- A charming, miniature stone arch bridge believed to be a trial run for the larger Old Bridge.\n- An impressive Ottoman-era mosque offering breathtaking panoramic views of the Old Bridge and the historic city.\n- Discover unique, handcrafted copper items and learn about a craft that has existed here for centuries.\n- Learn about the city's resilience and the meticulous reconstruction of its cultural heritage after the 1990s.",
    "photoIds": [
      "34422",
      "34327",
      "23664",
      "34440",
      "34470",
      "34476",
      "34434",
      "34482",
      "34464",
      "34488"
    ]
  },
  {
    "city": "Mostar",
    "name": "Sheva’s The Making of Modern Mostar: A Century of Transformation and Conflict",
    "short": "We focus on Mostar’s modern history over the last 150 years—Austro‑Hungarian rule, Yugoslavia, the world wars and the 1990s conflict to the Dayton Accords. We walk outside the Old Town to sites that tell this story: Spanish Square, the Bulevar frontline, Glass Bank, Hotel Neretva and the National Theater.",
    "long": "<p>Are you curious about Mostar's recent history? Do you want to hear more about how the Austro-Hungarian period (1878–1918), the Socialist Federal Republic of Yugoslavia, and our modern state of Bosnia and Herzegovina evolved? Or perhaps you are wondering how the wars of the last century (WWI, WWII, and the recent wars of the 1990s) impacted and shaped the development of our beautiful city and region, the scars of which can still be seen on our landscape?</p>\n<p>Join us for Shevas Making of Modern Mostar! This walking tour focuses on the last 150 years of history – a time period that was equally transformative and tumultuous and gave shape to and resulted in the independent state of Bosnia and Herzegovina in 1992. Mostar has a long and varied history, the layers of which can be seen through the monuments, memorials, and architecture that make up its urban landscape. Shevas Making of Modern Mostar Walking Tour will explore the less visited areas outside of the Old Town and help to narrate the story of the last 150 years.</p>\n<p>Hear the most recent history from those who experienced and were impacted by it firsthand, having spent their childhood as a Yugoslav and come of age in an independent Bosnia and Herzegovina on the brink of war. Learn how peace was established with the brokering of the Dayton Peace Accords in 1995 and come to understand the current socio-economic condition of Bosnia and Herzegovina as well as the country’s political set-up and demographic make-up.</p>",
    "highlightsTitle": "- Austro-Hungarian Architecture\n- Yugoslavia's Legacy\n- The Bulevar Frontline\n- The Glass Bank\n- Spanish Square\n- War Stories",
    "highlightsDescription": "- Discover buildings from the empire’s rule, including the iconic Old Gymnasium and city bath house.\n- Explore monuments and buildings from the socialist era, learning about life in former Yugoslavia.\n- Walk the former dividing line from the 1990s war, a reminder of the city's siege.\n- See the imposing ruins of a modern bank, a stark and visible scar from the conflict.\n- Visit the central square honoring Spanish UN soldiers, a symbol of post-war reconstruction.\n- Hear firsthand accounts from a guide who lived through Mostar’s recent tumultuous history.",
    "photoIds": [
      "34614",
      "34608",
      "34620",
      "34626",
      "34584",
      "34638",
      "34596",
      "34632",
      "23664",
      "34602"
    ]
  },
  {
    "city": "Munich",
    "name": "Welcome to Munich! Old Town Guided Walking Tour",
    "short": "Intruduction to Munich’s history in the Old Town: from Wittelsbach Bavaria and Bismarck-era unification to the Nazi origins and the Beer Hall Putsch. We visit Marienplatz with the New and Old Town Halls, Hofbräuhaus, Odeonsplatz, Max-Joseph-Platz with the Residenz, and the National Theater/State Opera.",
    "long": "<p>Snow-covered Alps, Oktoberfest with hectolitres of beer in litre mugs, smiling Germans in leather pants, <em>lederhosen</em>, green vests and caps with feathers. When we think of Germany often, this is the image that comes to mind. What we see though is not Germany, it is Bavaria! When it comes to popularity, it definitely wins the race with the rest of the country! Munich, being the capital of this richest German state, with its grand Catholic churches, palaces, huge automobile industry, gigantic breweries and the Bayern Munich football team can be considered the quintessence of all of Germany.</p>\n<p>But Munich is also the place where the darkest chapter of German history began. It was here that the young Austrian Adolf Hitler attempted to seize power in the country by force during the Beer Hall Putsch of 1923, for which he ended up behind bars. It is where he wrote his “Mein Kampf”, the book that was the basis for the criminal Nazi ideology. It was also the birthplace of the NSDAP, which eventually seized power throughout the country and, with Adolf Hitler at its head, led to World War II…</p>\n<p>During our tour we will talk about both the light and dark pages of German history. We will learn about the history of Bavaria from the Roman beginnings of the city, through 700 years during which it was ruled by one powerful family, the Wittelsbachs, to the unification of Germany by Bismarck in the 19th century. We will see the places where Nazism was born, but also those where Joseph Ratzinger, the future Pope Benedict XVI, worked while still an archbishop. We will also see, perhaps the most disappointing attraction of the city – a show of knightly figure fights in the city’s carillon. </p>\n<p>Take a walk with us and get to know a city that combines like no other seemingly contradictory fields: history and motoring, art and technology, entrepreneurship and a specific lifestyle of Munich people, which is a mixture of self-confidence, freedom and cheerfulness. Perhaps all these contradictions are seamlessly united by what is most important to Munich people… beer! </p>\n<p>After visiting Munich do check our tours in other German cities: <a href=\"https://freewalkingtour.com/find-a-tour/berlin-germany/\">Berlin</a> and <a href=\"https://freewalkingtour.com/find-a-tour/dresden-germany/\">Dresden</a>!</p>",
    "highlightsTitle": "- Marienplatz (with its New and Old Town Hall) \n- Hofbräuhaus \n- Odeonsplatz\n- National Theater and State Opera \n- Max Joseph Platz (and the residence of Bavarian kings)\n",
    "highlightsDescription": "- Munich's central square, featuring the New and Old Town Halls and its famous Glockenspiel carillon.\n- One of the world's most famous beer halls, central to Munich's beer culture and history.\n- An elegant square known for its Italian-style architecture and as a site of historical events.\n- See the magnificent National Theatre, home to world-renowned opera and ballet. \n- Munich’s royal square, created in the early 19th century, and home to the Munich Residence—the seat of Bavarian power for over 400 years.",
    "photoIds": [
      "18130",
      "16636",
      "49203",
      "18125",
      "18155",
      "18150",
      "49205",
      "30780"
    ]
  },
  {
    "city": "Munich",
    "name": "Munich Private Custom Tour",
    "short": "A private, fully tailored tour of Munich’s history and cityscape. We plan the route with you—typically the Altstadt and nearby sights such as Marienplatz and the Neues Rathaus, Frauenkirche, Viktualienmarkt and the Residenz—scope and theme can be adapted to your interests and needs.",
    "long": "<p>A private tour is a great opportunity for people who have limited time and cannot join our regular FREE walking TOURs or simply prefer staying in a small group of friends.</p>\n<p>It is you who chooses when the tour should start and what should be its topic. If you are not sure what do you want to visit during the tour, let us know and we will help you plan the tour that fits best your needs and interests.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including <a href=\"https://freewalkingtour.com/private-offer/\"> <strong>prices</strong> </a>, dates and booking rules.</p>\n<p>What is more, you do not have to worry about finding the guide at the meeting point – they can meet you in any place in the city or pick you up from your hotel. You don’t have to follow our strict schedule of regular tours, we can make a tour according to your needs.</p>\n<p>Let us know what kind of group you are (students, school group, seniors, group of friends, group of colleagues on a business trip, etc.) and what are your interests and we will do our best to prepare for you a tour that fits your needs and expectations.</p>\n<p><strong>LANGUAGES:</strong></p>\n<p>We can arrange private tours for you in different languages:</p>\n<p>English</p>\n<p>Spanish</p>\n<p><strong>PRICES & BOOKING RULES</strong></p>\n<p>Every group or visitor that comes to us has different needs, interests, and expectations. Because of that, we treat every one of them individually to make sure that our services will meet their expectations. If your time is limited and you would like to try more than one tour or you would like to see something else, let us know and we will prepare a tailor-made tour for you. The final price can be varied. It will depend on the language and duration of your tour.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including prices, dates and booking rules.</p>\n<p>We kindly ask you to book private or group tours in advance, otherwise, we cannot guarantee that a guide will be available.</p>",
    "highlightsTitle": "- Private Guide\n- Custom Itinerary\n- Flexible Start Time\n- Hotel Pickup\n- Tailor-Made Tour\n- Multilingual Options",
    "highlightsDescription": "- An expert guide dedicated solely to your group for a personal experience.\n- Plan a tour that perfectly fits your group's specific needs and interests.\n- Decide on the most convenient time for your private tour to begin.\n- Your guide can meet you at your hotel or any other designated place.\n- A tour adapted to the profile of your group for the best experience.\n- Enjoy your private tour experience in either the English or Spanish language.",
    "photoIds": [
      "18125",
      "33232",
      "38603",
      "38571",
      "16636",
      "46524"
    ]
  },
  {
    "city": "Nice",
    "name": "Nice Private Custom Tour",
    "short": "Private tour of Nice’s history and culture. We explore the Old Town (Vieux Nice) and the Promenade des Anglais, with highlights such as the Cours Saleya market, Nice Cathedral, Place Masséna, Castle Hill, and the Russian Orthodox Cathedral. The route can also include themes like art and artists of the Riviera, local food culture with tastings of socca and Provençal specialties, or the city’s Italian–French heritage — fully tailored to your pace and interests.",
    "long": "<p>Private tour is a great opportunity for people who have limited time and cannot join our regular FREE walking TOURs or simply prefer staying in a small group of friends.</p>\n<p>It is you who chooses when the tour should start and what should be its topic. If you are not sure what you want to do during the tour, let us know and we will help you plan the itinerary that fits best your needs and interests.</p>\n<p>What is more, you do not have to worry about finding the guide at the meeting point – they can meet you in any place in the city or pick you up from your hotel. You don’t have to follow our strict schedule of regular tours; we customize the experience according to your preferences.</p>\n<p>For more information please <strong><a href=\"https://freewalkingtour.com/contact/\">contact us</a></strong>.</p>",
    "highlightsTitle": "- Private Group Experience\n- Custom Itinerary\n- Flexible Start Time\n- Convenient Hotel Pickup\n- Personalized Tour Planning",
    "highlightsDescription": "- Enjoy an exclusive tour with your own small group of friends or family, away from crowds.\n- Choose your own tour topic or let us help you plan one based on your personal interests.\n- You decide when your tour begins, fitting it perfectly into your own travel schedule and plans.\n- Your guide can meet you anywhere in the city, including a convenient pickup from your hotel.\n- Receive expert assistance in creating a tour that is perfectly tailored to your needs and preferences.",
    "photoIds": [
      "30459",
      "30941",
      "30441",
      "30453",
      "30489",
      "48554",
      "30951",
      "30435"
    ]
  },
  {
    "city": "Nice",
    "name": "Golden Hour of Nice - Sunset Tour",
    "short": "Experience Nice at its most magical time – the golden hour. Explore the Old Town, Promenade des Anglais and hidden corners with stories of history, legends and local life, ending with the best sunset views.",
    "long": "<p>Our Golden Hour of Nice tour will start at Place Massena, the heart of the city where we will learn about Henri Massena, the convergence of the old and new town and the controversy of the Fountain du Soleil.  \n<p>We will then move to the Promenade and visit the miniature Statue of Liberty, learn about the history of the Promenade des Anglais, the story of the Castle Hill and more….  </p>\n<p>Next we explore the Cours Saleya, Nice’s food and flower market and explore the history of the majestic Palais of the Prefecture and the Legend of Adam and Eve in Nice.  </p>\n<p>We will then explore the Ancient Senate building and medieval prison, as well as the first paved street in Nice, rue du Malonat, where the full time executioner of Nice once lived and talk about legends of Templar Knights from the 14th century.  </p>\n<p>Making our way through Old Nice, we shall see the equally impressive Palace of Justice and hear about the infamous and fascinating “bank heist of the century” perpetrated by the criminally clever Albert Spaggiare and immortalised through the film “The Easy Way”. </p>\n<p>From there we visit the Porte Fausse and former medieval slaughterhouse district of the old town and then move to place Rossetti and its baroque Cathedral of Sainte Reparate. </p>\n<p>Making our way to past the medieval Jewish Ghetto to Rue Droite, once the high street of medieval Nice, we will pass by the incredible Genovese Baroque Palais Lascaris.  </p>\n<p>Next we will view an original cannonball from the 1543 Turkish/Franco siege of Nice and learn about Catherine Segurane, the heroine of Nice in this battle.   We will then continue through the old town to the impressive Place Garibaldi and discover the importance of this location during the time when Nice was a walled fortress of a city and discuss the role Garibaldi played as a military leader in Nice as it became part of France in 1860.  </p>\n<p>From there you will have access to the best locations in Nice for happy hour drinks and or dinner and the tour will conclude, just minutes from the old town, port, lively rue Bonaparte and rue Catherine Segurane. </p>",
    "highlightsTitle": "- Promenade des Anglais & Statue of Liberty\n- Cours Saleya Market\n- Palais of the Prefecture\n- Adam and Eve House\n- Ancient Senate & Prison\n- Executioner’s House\n- Rue du Malonat\n- Palais de Justice\n- Porte Fausse\n- Place Rossetti & Cathedral\n- Palais Lascaris\n- Catherine Ségurane’s Cannonball\n- Place Garibaldi & Rue Bonaparte",
    "highlightsDescription": "– stroll the iconic seaside boulevard and discover Nice’s miniature Statue of Liberty.\n– explore the city’s vibrant food and flower market, full of colors and scents.\n– learn about the majestic palace and its role in Nice’s history.\n– uncover the local legend of Adam and Eve hidden in the heart of Nice.\n– see the remains of Nice’s medieval governance and justice system.\n– discover where the city’s official executioner once lived.\n– walk along the first paved street in Nice, rich in medieval charm.\n– admire the grand Palace of Justice and hear stories of infamous trials.\n– pass through the historic gate and former slaughterhouse district.\n– enjoy the lively square and baroque Cathedral of Sainte Réparate.\n– visit the stunning Genovese baroque palace with incredible interiors.\n– see a relic of the 1543 siege and hear the story of Nice’s heroine.\n– discover the impressive square and its bustling bars and restaurants.",
    "photoIds": [
      "42550",
      "30471",
      "30465",
      "30951"
    ]
  },
  {
    "city": "Nice",
    "name": "Welcome to Nice the Beautiful! Old Town & Promenade Tour",
    "short": "Introduction to Nice—its history, architecture, and seaside charm—from the city centre through Vieux Nice (Old Town) to Castle Hill. We start at Place Masséna and the Fontaine du Soleil, stroll the Promenade des Anglais past the Negresco, explore Cours Saleya in the Old Town, and finish with sweeping views of the bay from Castle Hill.",
    "long": "<p>Mighty mountains, sparkling sea, elegant promenade, fabulous beaches, delicious food, stunning architecture, history and art. If you search for such a gem, look no further – Nice has it all! Starting from baroque chapels, elegant Belle Époque palaces and Mediterranean-blue chairs lining the promenade, the queen of the French Riviera emanates glamour and style. Come and visit this legendary seaside town with us!</p>\n<p>Nice’s history is as captivating as its dramatic scenery, with sea on one side and mighty mountains on the other. Established around 350 BC by the Greek settlers, originally named Nikaia in honour of the goddess of victory, Nike, attracted various powers, including the Romans, who left behind remnants of their civilization. French and Italians fought to control it over and over again, but despite the turbulence, Nice flourished, capitalising on its prime location. Its true transformation however took place in the 19th century. As the upper class of Europe discovered the therapeutic benefits of the Riviera’s climate, it became a winter haven for royalty and aristocracy. Soon the iconic Promenade des Anglais was built, and magnificent Belle Époque buildings sprung up, catering to the elite tourists and Nice started to emerge as a centre of art and culture, attracting artists like Henri Matisse and Marc Chagall, whose works were inspired by the beautiful landscape and unique soft light of the Côte d’Azur. It also became the favourite place of the artists and writers of the Lost Generation, including F.S. Fitzgerald, known for organising their wild parties here. That is when jazz arrived in Nice. You can still hear it today oozing from many bars when you stroll the streets of the city on warm summer evenings.</p>\n<p>Our Welcome to Nice tour will start on Place Massena, the heart of the city, at the somewhat controversial Fontaine du Soleil depicting the Greek god Apollo. Walking through Esplanade Georges Pompidou towards the most iconic part of Nice, the famous Promenade des Anglais, we will pass the hyperrealistic facade paintings – Trompe L’Oeils (meaning “deceiving the eye”) as well as the “Neuf Lignes Obliques” (“Nine Diagonal Lines”) an artwork celebrating 150 years of Nice rejoining France. Reaching the promenade, we will be able to see what truly makes Nice. The palm trees, les galettes de la plage (flat stones on the beach), and of course, the famous “Azur Blue” chairs. Along the way, we will see the two architectural masterpieces: the legendary Negresco hotel as well as the Opera House. We will step into Vieux Nice, the old town, to discover among others the lively Cours Saleya, food and flower market, and learn about Nicoise cuisine and food culture, with a short break to discover some of the temptations it offers. At the majestic Palace of the Prefecture we will learn how this stunning edifice was first built in the 16th century as the winter palace for the ruling House of Savoy, a trend still strong among the rich, powerful and famous 5 centuries later. Making our way through Old Nice, we shall see the equally impressive Palace of Justice and hear about the infamous and fascinating “bank heist of the century” perpetrated by the criminally clever Albert Spaggiare and immortalised through the film “The Easy Way”. We will visit the historic centre of old Nice – place Rossetti and its nearly 1000-year-old Cathedral of Sainte Reparate. Making our way to Rue Droite, once the high street of mediaeval Nice, we will delve into the fascinating history of Nicois culture and local dialect as well as its transformation from slum to tourist icon. Passing the former apartment of the renowned painter Henri Matisse, we will reach Castle Hill to see one of the most breathtaking views on earth: a stunning combination of blue water beaches, luxurious yachts, palm trees, colourful Italian facades and snow covered Alps… and learn why there is no longer a castle on castle hill.</p>\n<p>Book our tour and let yourself be enchanted by the beauty of Nice. Discover why this French town has a Greek name and feels very Italian and why people ranging from Queen Victoria, Fredrich Nietzsche, Henri Matisse, Sean Connery and even Elton John have decided to call it their home. After all, Nizza La Bella (Nice the Beautiful) is more than just the city’s motto. Come and experience it first-hand!</p>",
    "highlightsTitle": "- Place Masséna\n- Promenade des Anglais\n- Hotel Negresco\n- Old Town (Vieux Nice)\n- Cours Saleya Market\n- Sainte Reparate Cathedral\n- Castle Hill",
    "highlightsDescription": "- The city's main square, featuring the Fountain of the Sun and distinctive red ochre buildings.\n- Iconic seaside walkway lined with palm trees, blue chairs, and elegant Belle Époque architecture.\n- A legendary Belle Époque palace on the Promenade des Anglais, a symbol of Riviera luxury.\n- A charming maze of narrow streets, colourful Italian-style buildings, lively squares, and historic churches.\n- A vibrant open-air market in the Old Town, famous for its flowers and local produce.\n- The city’s main cathedral, a baroque masterpiece dedicated to the patron saint of Nice.\n- The highest point of Old Nice offering breathtaking panoramic views of the city and the sea.",
    "photoIds": [
      "30435",
      "30465",
      "30477",
      "30941",
      "30951",
      "30441",
      "30453",
      "30489",
      "30471",
      "30459"
    ]
  },
  {
    "city": "Paris",
    "name": "Paris Latin Quarter: Sorbonne, Pantheon & Bohemian Spirit",
    "short": "Tour of the Latin Quarter on the Left Bank where intellectuals, students, and artists have long shaped Parisian identity. We trace its medieval lanes, university heritage and bohemian energy near Notre-Dame, seeing the Pantheon, La Sorbonne, Saint Severin, Shakespeare and Company, and the Luxembourg Gardens. ",
    "long": "<p>Paris Latin Quarter, located on the left bank of the Seine just two steps from the Notre Dame Cathedral, is undoubtedly one of the most fascinating districts of the city, offering a unique blend of history, culture, and charm that is sure to captivate any visitor. Its narrow, winding streets lined with charming restaurants, cafes, bookstores and quirky boutiques selling everything from antiques to vintage clothing will get you enchanted within seconds. Join us and discover both the hidden gems as well as the most notable landmarks of this district, much-loved by visitors and Parisians alike!</p>\n<p>Paris Latin Quarter has forever been the intellectual, religious and cultural heart of Paris and has inspired countless writers, musicians and artists over the years (including Hemingway, F. Scott Fitzgerald, Pablo Picasso and Modigliani among others). Its history can be traced back to the Middle Ages when it became a home to the University of Paris – La Sorbonne, one of the world’s oldest and most prestigious universities. With its founding, the Latin Quarter became one of the most important intellectual centres of Europe. The district’s name is derived from Latin, which was once the language spoken by scholars and students. Among La Sorbonne students were such personalities as Thomas Aquinas, Dante Alighieri, Pierre and Marie Curie, Jean-Paul Sartre, Simone de Beauvoir, René Descartes… The list is countless.</p>\n<p>In the 18th century the Latin Quarter became a hotbed for the writers, philosophers and thinkers following the ideas of Enlightenment such as Voltaire and Diderot who began to develop a more rational thinking based on the search for the rights of human beings. Their disputes and way of thinking influenced the outbreak of the French Revolution during which the neighbourhood played a significant role and was a place where many revolutionary leaders and activists met.</p>\n<p>From the 19th century, the Latin Quarter underwent significant changes as the city expanded and modernised, eventually becoming the bohemian centre of Paris in the 20th century. Today, the Latin Quarter is a vibrant and diverse district that continues to attract scholars, artists, and visitors from all corners of the world. Its rich history, unique architecture, and vibrant cultural scene make it one of the most fascinating and beloved neighbourhoods in all of Paris.</p>\n<p>Join us on a journey through the district’s rich history, from its mediaeval roots as a centre of learning to its role in the French Revolution and beyond. Whether you’re interested in history, art and culture or simply soaking up the unique atmosphere of Paris, our tour of the Latin Quarter is sure to be a highlight of your trip!</p>",
    "highlightsTitle": "- Shakespeare and Co\n- Saint Severin Church\n- Ancient Roman Ruins\n- La Sorbonne University\n- Saint-Étienne du Mont\n- The Panthéon\n- Luxembourg Gardens",
    "highlightsDescription": "- Legendary bookstore that served as a gathering place for famous writers like Hemingway and F. Scott Fitzgerald.\n- One of the oldest churches in Paris, showcasing the district's rich medieval history and unique character.\n- Remains of Roman thermal baths located at the Musée de Cluny, the National Museum of the Middle Ages.\n- One of the oldest and most prestigious universities in the world, the historic intellectual heart of Paris.\n- A historic church containing the shrine of Saint Genevieve, the beloved patron saint of the city of Paris.\n- A neoclassical mausoleum serving as the final resting place for distinguished French citizens like Voltaire and Marie Curie.\n- The most beautiful and largest garden in Paris, perfect for a relaxing stroll or an afternoon picnic.",
    "photoIds": [
      "39108",
      "39174",
      "24342",
      "47284",
      "39096",
      "47169",
      "24336",
      "39186",
      "24330",
      "21737"
    ]
  },
  {
    "city": "Paris",
    "name": "Le Marais: Jewish Quarter & Parisian Chic Tour",
    "short": "We trace the story of Le Marais from its medieval walls to grand aristocratic hôtels particuliers, through the vibrant Jewish Quarter and today’s chic boutiques and galleries. Highlights include the Hôtel de Sens, Hôtel de Sully, Place des Vosges, the Musée Carnavalet, and Rue des Rosiers in the historic Pletzl — woven into the charm and elegance that make the district uniquely Parisian.",
    "long": "<p>Tucked away behind the famous Notre Dame is a small gem of a neighbourhood where amongst mediaeval architecture, nowhere to be found in the rest of Paris, you can discover the trendiest boutiques and galleries, chic spots for brunch and the best night bars. The area is a home to two distinctive communities: Jewish and LGBT+ and a favourite meeting place for Parisians. Join us to discover Le Marais, a local treasure with tons of stories to tell and flavours to discover.</p>\n<p>Its story begins in the 13th century when it was primarily marshland (hence the name “Marais,” meaning “marsh” in French) before being transformed into a district favoured by the nobility in the 16th and 17th centuries. This era saw the construction of opulent mansions and private hotels, such as the Hôtel de Sens and Hôtel de Sully, which exemplify the architectural elegance of the period. Le Marais was spared from Haussmann’s urban renewal, preserving remnants of its illustrious past, mediaeval and renaissance. Over the centuries, Le Marais has been a melting pot of cultural influences, notably becoming a prominent Jewish community hub in the 19th and 20th centuries. Despite facing challenges such as neglect and proposed demolition in the 20th century, preservation efforts have since protected and revitalised the area. Today, Le Marais stands as a cherished emblem of Parisian history, art, and diversity, attracting visitors and locals alike to its picturesque streets, historic buildings, and vibrant cultural scene.</p>\n<p>Join our tour to marvel at the architectural masterpieces and explore this unique Parisian neighbourhood. Let us guide you through Le Marais, offering local insider tips on the best eateries, patisseries, museums, and galleries and immerse yourself in the unique vibe of this iconic Parisian neighbourhood.</p>",
    "highlightsTitle": "- Hôtel de Sens\n- Wall of Philippe Auguste\n- Hôtel de Sully\n- Place des Vosges\n- Musée Carnavalet\n- The Pletzl\n- Rue des Rosiers",
    "highlightsDescription": "- An opulent mansion exemplifying the architectural elegance of Le Marais's aristocratic past.\n- The oldest city wall of Paris, a remnant of the city’s 12th-century medieval fortifications.\n- A magnificent private mansion offering a glimpse into the district’s opulent 17th-century history.\n- An iconic royal square, a favourite Parisian meeting place and once home to Victor Hugo.\n- The Museum of the History of Paris, deeply intertwined with the district's rich heritage.\n- The historic Jewish quarter, a vibrant cultural hub for Paris's Jewish community since the 13th century.\n- The heart of the Jewish quarter, renowned for traditional delicacies and the city's best falafel.",
    "photoIds": [
      "39180",
      "47204",
      "33197",
      "39010",
      "47125",
      "33203",
      "39045",
      "39028",
      "39022",
      "33191",
      "47237"
    ]
  },
  {
    "city": "Paris",
    "name": "Louvre Masterpieces Private Tour",
    "short": "Highlights tour of the Louvre Museum: we move through key wings from ancient sculpture to French painting, focusing on masterpieces—Mona Lisa, Winged Victory of Samothrace, Venus de Milo, The Coronation of Napoleon, and Liberty Leading the People.",
    "long": "<p>Home to over 35,000 masterpieces, spanning centuries of history and human creativity, the <strong>Louvre Museum</strong> is a must-visit in Paris. But let’s be honest—it can be <strong>overwhelming!</strong> With endless halls, countless masterpieces, and a labyrinth of galleries, it’s easy to get lost (literally and figuratively!).</p>\n<p>That’s where we come in.</p>\n<p>On this <strong>private tour of the Louvre’s highlights</strong>, you’ll skip the stress and go straight to the most iconic works, guided by an expert who brings the art to life with fascinating stories, hidden details, and fun facts. This experience is carefully curated to give you the best of the Louvre—without the crowds, confusion, or exhaustion.</p>\n<p>Whether you’re a seasoned art lover, a first-time visitor, or simply want to <strong>experience the Louvre in an engaging and memorable way</strong>, this tour is designed for you!</p>\n<h3 id=\"whychooseaprivatetour\"><strong>Why Choose a Private Tour?</strong></h3>\n<p>✔️ <strong>Stress-Free & Personalized</strong> – No rushing, no crowds—just you, your guide, and the masterpieces, at your own pace.</p>\n<p>✔️ <strong>Expert Storytelling</strong> – The Louvre’s masterpieces are more than just paintings and sculptures—they hold incredible stories. Your licensed guide will reveal hidden details and fascinating anecdotes you won’t find in guidebooks.</p>\n<p>✔️ <strong>See the Best Without Getting Lost</strong> – The Louvre is <strong>HUGE</strong> (seriously, it has <strong>14.5 km of galleries!</strong>). We take you straight to the highlights, so you get the most out of your visit.</p>\n<p>✔️ <strong>Perfect for Families, Couples & Art Lovers</strong> – Whether you’re visiting with family, on a romantic getaway, or diving into art history, this tour makes the Louvre experience fun, immersive, and engaging for everyone.</p>\n<h3 id=\"readytodiscoverthelouvreshighlights\"><strong>Ready to Discover the Louvre’s Highlights?</strong></h3>\n<p>Experience the Louvre <strong>the Walkative way</strong>—stress-free, engaging, and full of fascinating stories!</p>\n<p>🔸 <strong>Book your private tour today!</strong></p>\n<p>⏳ <strong>Important Reminder:</strong> 💡 We <strong>strongly</strong> recommend booking in advance, as private tours are subject to guide availability.</p>",
    "highlightsTitle": "- Mona Lisa\n- Winged Victory\n- Venus de Milo\n- Liberty Leading the People\n- Raft of the Medusa\n- Coronation of Napoleon\n- The Great Sphinx\n- Medieval Louvre",
    "highlightsDescription": "- Leonardo da Vinci's iconic portrait, famous for its enigmatic smile and enduring mystery.\n- A stunning Hellenistic sculpture of the Greek goddess Nike, capturing the moment of triumphant victory.\n- An iconic ancient Greek statue celebrated throughout history as a masterpiece of female beauty.\n- Delacroix's powerful revolutionary painting that has become a universal symbol of freedom and liberty.\n- A haunting masterpiece depicting a real-life shipwreck that shocked 19th-century France.\n- A monumental painting capturing the political drama of Napoleon crowning himself emperor.\n- A mysterious and monumental relic from Ancient Egypt, guarding the museum's antiquities collection.\n- The hidden underground remains of the original fortress before the Louvre became a royal palace.",
    "photoIds": [
      "43507",
      "43531",
      "43513",
      "43501",
      "43525",
      "43495",
      "43489",
      "43519",
      "47128"
    ]
  },
  {
    "city": "Paris",
    "name": "Artistic Paris – Montmartre Guided Walking Tour",
    "short": "Montmartre’s art and cabaret history: we explore the neighborhood from the grand boulevards up to the Sacré-Cœur Basilica on the hill—Moulin Rouge, Café des Deux Moulins (the Amélie café), Van Gogh’s house, Moulin de la Galette, and the Montmartre vineyard.",
    "long": "<p>The name of the neighbourhood comes from Latin <em>Mons Martyrum</em> and means “Hill of Martyrs.” It is associated with the quite creepy story of the first bishop of Paris, Saint Denis. He was beheaded by the Romans for not renouncing his faith. Afterwards, he collected his severed head and walked with it down the hill, where he finally dropped dead. So much the legend, but before it got world-famous, Montmartre was a simple, sleepy village set on the hill surrounded by vineyards, gardens, and orchards. As many as 13 mills were built on its slopes to grind wheat, barley, and rye. Of those only two survived and now people around the world recognize the mill as a symbol of this fascinating neighbourhood.</p>\n<p>But finally the time has come when this sleepy village changed forever. Because of its many drinking establishments, cheap wine, low rents and specific, relaxed and friendly atmosphere, 19th century Montmartre became the hotbed where many artists from all corners of the world were flocking in. Who can tell what was first? The dancing halls, cafés, and cabarets like Le Chat Noir or Moulin Rouge where girls dancing the cancan were throwing their legs up indecently high or the artists settling down there and allowing for all that to happen. One is certain, Montmartre became the most interesting neighbourhood in Paris (and perhaps in the entire world) at the turn of the 19th and 20th century. Who has not lived, worked (drank, took drugs, had sex…) there? Monet, Renoir, Van Gogh, Picasso, Modigliani, Matisse, Degas, Toulouse-Lautrec to name just a few.</p>\n<p>Today Montmartre lures everyone with its colourful history, anecdotes, and scandals associated with the artistic community once living here, but it does not only dwell on the past! It is still one of the most intriguing Parisian quarters. A place looking as if it were taken straight from a fairy tale, with its steep, winding streets and crooked buildings overgrown with ivy. At almost every corner there is a café, restaurant, or drinking parlour you want to stop at. No wonder that until the present day it is loved both by artists, photographers, film directors as well as Parisians and tourists who are combing the streets in search of places famous from hit movies filmed here.</p>\n<p>Join our tour to discover our favourite district of Paris and let yourself be enchanted by one and only Montmartre!</p>",
    "highlightsTitle": "- Moulin Rouge\n- Amelie's Café\n- Van Gogh's House\n- Moulin de la Galette\n- Place des Abbesses\n- Artists' Studios\n- Montmartre Vineyard\n- Sacré-Cœur Basilica",
    "highlightsDescription": "- World-famous cabaret, birthplace of the can-can dance, known for its iconic red windmill.\n- The charming Parisian café made famous worldwide by the 2001 film \"Amélie\".\n- The former residence where the famous Dutch painter lived with his brother Theo from 1886 to 1888.\n- One of the last two surviving windmills in Montmartre, immortalized in paintings by Renoir.\n- A picturesque square featuring an Art Nouveau metro station and the famous \"I Love You\" wall.\n- See where artists like Picasso and Modigliani lived, worked, and changed the course of modern art.\n- The last working vineyard in Paris, a charming reminder of Montmartre’s rustic, village-like past.\n- The stunning white-domed basilica at the summit of Montmartre, offering panoramic views of the city.",
    "photoIds": [
      "36632",
      "39198",
      "39126",
      "47160",
      "39144",
      "47131",
      "19404",
      "39114",
      "39138",
      "47184",
      "21737"
    ]
  },
  {
    "city": "Paris",
    "name": "Paris: Mysteries and Legends Tour",
    "short": "Dark history and legends of medieval Paris, with esoteric and occult themes, in the historic center—Île de la Cité and the Hôtel de Ville area: Notre-Dame Cathedral, La Conciergerie, Town Hall Square and executions, Tour Saint‑Jacques, plus tales of alchemists, Templars and the Bloody Barber.",
    "long": "<p>They say that Paris is the city of light. That may be very true today, but the light was introduced to Paris quite late and in order to prevent its rebellious spirit from taking action. Before it all happened, the streets of Paris were shady and certainly not a place you would want to be alone after dark. Until today, in the bright and wide Parisian boulevards lurk old mysteries and dark secrets that are reluctant to come to the surface. Their world, a world of musty streets and crumbling hovels, has disappeared from the face of the earth, but it lives on in stories and tales. And those are the ones we want to evoke during this walk. Ghosts of the past will once again walk with us along the seemingly peaceful streets of the city. </p>\n<p>Are you ready to discover the dark, medieval face of Paris? Our walk will have two main themes. We will dive deep into the sphere of esoteric, magic and occult and tell you tales and legends too creepy and bloody to include them on the main free tour. You will learn stories of alchemists, mysterious characters associated with Paris like the man in the iron mask and the Templars, catacombs, the secrets of Notre Dame, murders, tortures, and executions. </p>\n<p>Join us and dare to step into the dark side of Paris, allegedly the city of lights.</p>",
    "highlightsTitle": "- Notre-Dame Cathedral\n- The Bloody Barber\n- Public Executions\n- La Conciergerie\n- Saint-Jacques Tower\n- Parisian Alchemists\n- The Knights Templar\n- Place Saint Innocents",
    "highlightsDescription": "- Uncover the dark secrets, hidden symbols, and mysterious legends of the famous gothic cathedral.\n- Hear the gruesome local legend of a murderous barber on the Île de la Cité.\n- Visit the former site of gruesome public executions at the historic Town Hall Square.\n- A former royal palace and revolutionary prison, the last stop for many before the guillotine.\n- A gothic tower linked to the occult and the legendary alchemist Nicolas Flamel.\n- Discover stories of mystics who sought to turn metal into gold in the city's laboratories.\n- Learn about the powerful military order, their dramatic downfall, and their lingering curses in Paris.",
    "photoIds": [
      "19384",
      "21737"
    ]
  },
  {
    "city": "Paris",
    "name": "Monumental Paris: An Evening Walk",
    "short": "Tour of 19th-century monumental Paris. We follow the Right Bank axis from La Madeleine and Rue Royale, through Place de la Concorde and the Champs-Élysées, then cross to the Left Bank at Les Invalides, finishing at the Pont d’Alma with a view of the Eiffel Tower.",
    "long": "<p>Join us on a journey through the elegance of Paris, where you’ll have the chance to witness some of the most iconic and breathtaking locations in the City of Light. Paris’s beauty and monumentality are truly impressive, and we’ll delve into its past during the 19th century, a time of great transformation both socially and architecturally.</p>\n<p>On this tour, we will explore the rich history and architectural grandeur that defines Paris, discovering how the city evolved during a pivotal era. You’ll gain insight into the cultural and historical significance that shapes Paris today.</p>\n<p>The experience will conclude with a memorable view of one of the city’s most celebrated monuments, offering a perfect end to your immersive journey. This tour also prepares you for an optional Seine River cruise, enhancing your connection with the City of Light.</p>",
    "highlightsTitle": "- Madeleine Church\n- Place de la Concorde\n- Luxor Obelisk\n- Champs-Élysées Avenue\n- Grand and Petit Palais\n- Les Invalides\n- Eiffel Tower View",
    "highlightsDescription": "- A stunning church originally designed as a temple to honor Napoleon and his army.\n- Paris's largest square, a key site of the French Revolution, now symbolizing peace and harmony.\n- The oldest monument in Paris, an ancient Egyptian obelisk standing in Place de la Concorde.\n- Walk along one of the world's most famous avenues, known for luxury and military parades.\n- Architectural jewels built for the 1900 Universal Exhibition, now serving as museums and exhibition halls.\n- A historic military complex, famed for its golden dome and as Napoleon's final resting place.\n- An iconic, illuminated view of Paris's most famous landmark from the Pont de l'Alma bridge.",
    "photoIds": [
      "26782",
      "26800",
      "26794",
      "26788",
      "26776",
      "21737"
    ]
  },
  {
    "city": "Paris",
    "name": "Welcome to Paris! Historic Centre Guided Walking Tour",
    "short": "Introduction to Paris—its history and culture along the Seine: we walk from Île de la Cité to the Louvre and Tuileries, tracing events from the medieval era to modern times. Highlights include Notre-Dame, Sainte-Chapelle, the Conciergerie, Pont Neuf, and the Louvre, ending with a Tuileries view toward the Eiffel Tower.",
    "long": "<p>Elegant and monumental 19th century boulevards, medieval churches, the world’s best art museums, unbeatable spirit of its inhabitants and a delicate (or perhaps quite pronounced!) sense of superiority, that’s Paris! Welcome to the world capital of class, elegance, fashion, love, art and amazing cuisine! Occupying this spot continuously since the 17th century!</p>\n<p>But Paris wouldn’t be all that without its history. Established on a marshy land surrounded by the river Seine by the brave Gallic tribe of Parisii, taken in a bloody battle by the mighty Roman Empire. It became a capital of the Franks in the 6th century and soon grew to be the political, economic, religious, and cultural (with the second-oldest university in Europe, la Sorbonne) centre of France. With a population of 200 thousand people, Paris was the most populous city in Europe in the medieval ages. Torn by wars with external enemies and internal religious massacres, with time it experienced a true explosion in the field of science and philosophy, becoming the very centre of the Enlightenment movement. Fed on new ideas, but most of all on extreme poverty and inequality, its people found in them the power to overthrow the royal regime, which ended up in the monarchs being finally guillotined. This in turn opened the way for Napoleon seizing power in the country and way, way beyond! People of Paris were (and are!) known for revolting so often that in the 19th century in order to prevent them from doing so a new city was built with wide boulevards, aqueducts, sewers and parks to both appease them and… make it harder to build street barricades. The symbol of its modernization became the Eiffel Tower constructed for the 1889 Universal Exposition, which Parisians hated and protested for decades, only to love it in the end.</p>\n<p>On top of all the architectural, cultural and spiritual marvels of the city there is something you simply cannot miss – the wonderful food and wine which can be the sole reason for visiting Paris and France! So, before you go and have a picnic in one of the splendid city gardens, indulge in all the fromage, baguette and wine you can have, join our tour to get the perfect introduction to the incomparable Paris! Hear the stories of Quasimodo, Napoleon and Hitler and learn about their connections to the city of love and light. Hear stories about the most daring art theft in history (yes, we are talking about the Mona Lisa), love, desire, and revenge. Get to know Paris at its finest!</p>",
    "highlightsTitle": "- ︎Hôtel de Ville (Paris City Hall)\n- Notre-Dame Cathedral\n- Sainte-Chapelle\n- Conciergerie\n- Pont Neuf\n- The Louvre\n- Tuileries Gardens",
    "highlightsDescription": "- The iconic medieval Catholic cathedral, a masterpiece of French Gothic architecture.\n- A stunning royal chapel renowned for its extensive 13th-century stained-glass windows.\n- Former royal palace and notorious prison during the French Revolution.\n- The oldest standing bridge across the river Seine, dating back to the 16th century.\n- The world's largest art museum and a historic monument, home to the Mona Lisa.\n- A beautiful public garden located between the Louvre and the Place de la Concorde.\n- Paris's magnificent city hall, the seat of the city's administration since 1357.\n- Hear stories of the pivotal event that overthrew the monarchy and shaped modern France.",
    "photoIds": [
      "19399",
      "47285",
      "47291",
      "47286",
      "47166",
      "47115",
      "47206",
      "47106",
      "47143",
      "21737"
    ]
  },
  {
    "city": "Paris",
    "name": "Paris Private Custom Tour",
    "short": "Private tour of Paris, tailored to your interests. The route can include the historic centre and districts such as Montmartre, the Latin Quarter, and Le Marais, with highlights like Notre-Dame, Île de la Cité, the Louvre, Place des Vosges, and Sacré-Cœur. The itinerary is fully customizable to your pace and passions — whether focused on art, history, food, or hidden corners of the city.",
    "long": "<p>A private tour is a great opportunity for people who have limited time and cannot join our regular FREE walking TOURs or simply prefer staying in a small group of friends.</p>\n<p>It is you who chooses when the tour should start and what should be its topic. If you are not sure what do you want to visit during the tour, let us know and we will help you plan the tour that fits best your needs and interests.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"><strong>Contact us</strong></a> in order to get more information about our private offer including <a href=\"https://freewalkingtour.com/private-offer/\"><strong>prices</strong></a>, dates and booking rules.</p>\n<p>What is more, you do not have to worry about finding the guide at the meeting point – they can meet you in any place in the city or pick you up from your hotel. You don’t have to follow our strict schedule of regular tours, we can make a tour according to your needs.</p>\n<p>Let us know what kind of group are you (students, school group, seniors, group of friends, group of colleagues on a business trip, etc.) and what are your interests and we will do our best to prepare for you a tour that fits your needs and expectations.</p>\n<p><strong>LANGUAGES:</strong></p>\n<p>We can arrange private tours for you in different languages:</p>\n<p>English<br />\nFrench<br />\nSpanish</p>\n<p><strong>PRICES & BOOKING RULES</strong></p>\n<p>Every group or visitor that comes to us has different needs, interests, and expectations. Because of that, we treat every one of them individually to make sure that our services will meet their expectations. If your time is limited and you would like to try more than one tour or you would like to see something else, let us know and we will prepare a tailor-made tour for you. The final price can be varied. It will depend on the language and duration of your tour.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"><strong>Contact us</strong></a> in order to get more information about our private offer including prices, dates and booking rules.</p>\n<p>We kindly ask you to book private or group tours in advance, otherwise, we cannot guarantee that a guide will be available.</p>\n<hr />\n<p>Jeśli chcesz, mogę dodatkowo pomóc w edycji lub dalszym dostosowaniu tekstu.</p>",
    "highlightsTitle": "- Historic Paris\n- Montmartre District\n- Parisian Legends\n- Latin Quarter\n- City of Lights\n- Le Marais District",
    "highlightsDescription": "- Explore the city's most significant historical landmarks and stories from its rich past.\n- Discover the bohemian heart of Paris, famous for its artists, cabarets, and cobblestone streets.\n- Uncover dark secrets, mysteries, and spooky legends hidden within the city's ancient streets.\n- Walk through the intellectual and artistic hub of Paris, home to the Sorbonne and student life.\n- Experience the magic of Paris at night as its iconic monuments are beautifully illuminated.\n- Explore a charming historic district with hidden gems and the rich heritage of the Jewish Quarter.",
    "photoIds": [
      "19389",
      "47115",
      "47106",
      "43835",
      "36638",
      "26800",
      "47289",
      "47219",
      "47112"
    ]
  },
  {
    "city": "Paris",
    "name": "Paris in Revolt! The French Revolution Tour",
    "short": "We trace the French Revolution and its legacy in central Paris, from the Palais Royal and Tuileries Gardens through Place Vendôme to Place de la Concorde and the Assemblée Nationale, addressing Napoleon, Haussmann and the Paris Commune along the way.",
    "long": "<p><strong>What would Paris be without the Revolution?</strong></p>\n<p>Think of Bastille Day, France’s most important holiday. Hear the stirring sound of <em>La Marseillaise</em> echoing through the boulevards. Picture the words <em>Liberté, Égalité, Fraternité</em> carved into stone on public buildings. These aren’t just slogans—they’re the heartbeat of a city forged in fire, blood, and bold ideas. Paris stands apart among the greatest cities – not just as a symbol of beauty and power, but as the birthplace of revolution. A place where the impossible became inevitable, where ordinary people toppled monarchs, and where ideals became weapons. This spirit of resistance became part of the city’s identity. </p>\n<p><strong>The French Revolution didn’t just change France—it changed the world.</strong> What began on July 14, 1789, with the storming of the Bastille, erupted into a decade of upheaval. Kings were overthrown, heads rolled, and a Republic emerged from the rubble of the Ancien Régime. The Revolution tore through every corner of society—destroying old hierarchies, redefining justice, and challenging the very notion of divine rule.</p>\n<p>But it didn’t stop when the guillotine fell silent. In 1799, Napoleon Bonaparte seized power, exporting revolutionary ideals across Europe at the tip of a bayonet—only to crown himself Emperor in the very capital that had dethroned a king. In 1871, the Paris Commune rose up in defiance of a crushing defeat in the Franco-Prussian War. For 70 days, workers, artists, and radicals took control of the city, aiming to build a more equal world. Though it was violently suppressed, the Commune ignited imaginations across the globe—from Karl Marx to modern-day revolutionaries.</p>\n<p>The legacy of these events reshaped not only France, but the very foundations of modern democracy, citizenship, and human rights. What began as a cry for bread became a battle for dignity. The French Revolution was not just a historical event—it became a force. And that force still pulses through the veins of Paris today.</p>\n<p>As Victor Hugo once wrote: <em>“Rome may be more majestic, Venice more beautiful, London richer – but Paris has the Revolution.”</em></p>\n<p><strong>Join us and walk the streets where empires crumbled and a new world was born.</strong> Hear stories of courage, betrayal, and transformation. Witness the turbulent century that reshaped France and reverberated across the globe—from the Bastille to the barricades, from guillotines to the birth of human rights. On this 2-hour journey, we’ll uncover the truths behind the symbols, the people behind the ideals, and the city that continues to live and breathe its revolutionary past.</p>\n<hr/>",
    "highlightsTitle": "- Palais Royal\n- Tuileries Gardens\n- Place Vendôme\n- Robespierre's House\n- Madeleine Church\n- Place de la Concorde\n- Assemblée Nationale",
    "highlightsDescription": "- Where Camille Desmoulins's speech ignited the storming of the Bastille.\n- Site of the former royal palace, stormed by insurgents and burned to the ground.\n- Square where the Paris Commune toppled Napoleon's column, a symbolic act of defiance.\n- The former residence of Maximilien Robespierre, infamous architect of the Reign of Terror.\n- A temple Napoleon built to glorify his army, now a consecrated Catholic church.\n- The Revolution's execution square where the guillotine claimed King Louis XVI and Marie Antoinette.\n- The seat of French democracy, a symbol of the Republic born from revolution.",
    "photoIds": [
      "43865",
      "43835",
      "33191",
      "43841",
      "43823",
      "43859",
      "43853"
    ]
  },
  {
    "city": "Porto",
    "name": "Porto: Historic Old Town Tour in Spanish",
    "short": "Introduction to Porto, its history and culture. We walk through the UNESCO-listed historic centre, covering the core around Cordoaria, Clérigos, and the Sé. Highlights include the Clérigos Tower, São Bento Station, the Lello & Irmão Bookstore, Porto Cathedral (Sé), and Aliados Avenue, all set within the context of the city’s rich past.",
    "long": "<p>Porto´s impressive historic center is home to many of the city’s top sights and has been declared a UNESCO World Heritage Site.</p>\n<p>Their tour will start in front of the old prison of Porto, a big yellow building which is today the Portuguese Centre of Photography.</p>\n<p>Needless to say, tips and recommendations on what to do, see and eat will be given to you throughout this 2.5-hour guided tour.</p>",
    "highlightsTitle": "- Clérigos Tower\n- São Bento Station\n- Porto Cathedral\n- Lello Bookstore\n- Aliados Avenue\n- Rua das Flores\n- Vitoria Viewpoint",
    "highlightsDescription": "- An iconic baroque bell tower offering some of the best panoramic views of the city.\n- A historic train station renowned for its magnificent blue and white azulejo tile panels.\n- One of the city's oldest monuments, showcasing Romanesque, Gothic, and Baroque architectural styles.\n- A world-famous bookshop with a stunning Art Nouveau interior that inspired Harry Potter.\n- Porto's grand central avenue, lined with impressive early 20th-century buildings and the City Council.\n- A charming pedestrian street known for its historic houses, traditional shops, and lively atmosphere.\n- A scenic overlook providing breathtaking views of the Dom Luís I Bridge and the Douro River.",
    "photoIds": [
      "39588",
      "22444",
      "22418",
      "22424"
    ]
  },
  {
    "city": "Porto",
    "name": "Porto: Old Town & Ribeira",
    "short": "Historical tour of Porto’s riverside Old Town along the Douro: we cover the XIV-century city walls, Virtudes Viewpoint, St Francis Church, Ribeira and Barredo neighborhoods, and the Luis I Bridge—tracing the city from hilltop streets to the waterfront.",
    "long": "<p>Experience the essence of Porto like never before with our free walking tour along the picturesque banks of the Douro River. Join us on a journey through time as you dive into the heart of the city’s rich history, all under the guidance of our knowledgeable local experts.</p>\n<p>As you walk through Porto’s charming cobblestone streets, you’ll be transported back to the XIV century, where mighty city walls stood as silent sentinels, guarding the secrets of a bygone era. Get amazed by the breathtaking vistas from Virtudes Viewpoint, where the panoramic views of the city below will leave you speechless.</p>\n<p>Discover hidden gems like the Old English Club and the magnificent St. Francis Church, a testament to Porto’s enduring faith and architectural splendor.</p>\n<p>Wander through the vibrant Ribeira neighborhood, a labyrinth of colorful facades and bustling filled with the melodies of local life. Feel the pulse of the city along the Porto riverside, where the rhythm of the Douro sets the pace for daily existence.</p>\n<p>Step into the Barredo neighborhood, frozen in time with its ancient buildings and artisan workshops, each telling a story of resilience and craftsmanship. Finally, see the iconic Luis I Bridge, a symbol of Porto’s engineering prowess and unbreakable spirit.</p>\n<p>Join us for a memorable journey through Porto’s most authentic neighborhoods, where every step is a revelation and every corner holds a treasure of history and culture. Let us guide you through the soul of the city, as you uncover the timeless beauty and charm of Porto, one step at a time.</p>",
    "highlightsTitle": "- City Walls\n- Virtudes Viewpoint\n- St. Francis Church\n- Ribeira Neighborhood\n- Douro Riverside\n- Barredo Neighborhood\n- Dom Luís I Bridge\n- Old English Club",
    "highlightsDescription": "- Medieval fortifications that once stood as silent sentinels guarding the city's secrets.\n- A scenic lookout point offering breathtaking panoramic views of the city and river.\n- A magnificent church, a testament to Porto’s enduring faith and architectural splendor.\n- A vibrant labyrinth of colorful facades and bustling streets filled with local life.\n- The lively area along the river where the rhythm of the Douro sets the city's pace.\n- A neighborhood frozen in time with ancient buildings and traditional artisan workshops.\n- An iconic double-deck metal arch bridge, a symbol of Porto’s engineering prowess.\n- A historic social club reflecting the long-standing British influence in Porto.",
    "photoIds": [
      "32957",
      "39588",
      "32963"
    ]
  },
  {
    "city": "Porto",
    "name": "Welcome to Porto! Historic Centre Guided Walking Tour",
    "short": "Introduction to Porto’s history in the historic centre: from Avenida dos Aliados and Cordoaria down to Ribeira and the Douro River. We focus on azulejo-clad highlights and sweeping river views—São Bento Station, Livraria Lello, Torre dos Clérigos, the Sé (Porto Cathedral), the Luís I Bridge, and the Vitória viewpoint.",
    "long": "<p>The colourful city of Porto settled beautifully on a steep banks of the river Douro, right at the Atlantic coast, enchants everyone with its marvellous views, pastel painted houses with terracotta roofs, facades covered with azulejos, unique character of its people, the taste of port wine and exceptional cuisine. All that topped with a young and bohemian spirit creates the most charming atmosphere that will make your stay here unforgettable!</p>\n<p>Porto’s life has always been linked to the sea. It were the Romans who called it <em>Portus Cale</em> (and that is where the name of the country, Portugal, originates), till the present day the locals call it Oporto, meaning “the port”. For centuries, it was known as a city of shipbuilders and a place from where many Portuguese sea expeditions would depart. It was from the port of Porto, his birthplace, that prince Henry the Navigator set out to conquer Northern Africa at the beginning of the 15th century, thus launching the Portuguese Age of Discoveries. Because of the high demand of meat for the sailors, all that remained for the people of Porto were leftovers. And so they started to be called “tripe eaters”. Although those days are long gone, tripe is to this day a traditional dish here. The city of Porto is inhabited by specific people – friendly but very straight. In Portugal, they even say that the people of Porto are a separate nation. For centuries, it was a working class that mostly prevailed here. The untamed city’s character pierces through its history – it was here that the liberal revolution against the monarchy started, and when the monarchy set out to punish it, its people stood bravely and resisted an 18-month siege. That is why Porto is often called an “unvanquished city”. The revolution that started here changed not only the city but the entire Portugal and eventually led to the overthrow of the monarchy at the beginning of the 20th century. That’s a piece of history you shouldn’t miss!</p>\n<p>Take a walk with us through the steep streets of Porto to learn about pivotal moments in both the city’s and the country’s history, and to see its most iconic sights. Starting from the Fonte dos Leões and the University we will show you many facades and interiors covered with azulejos, hand-painted tiles, including those in the incredible São Bento train station, where they cover entire walls and show scenes from Portugal’s history. We will lead the way to one of the most magical bookshops in the world – Livraria Lello, one that inspired JK Rowling to write her Harry Potter books. Walking down towards the banks of Douro river we will see the city’s landmarks, among them the Torre dos Clérigos and the Porto Cathedral. We will delight in the beautiful views from the Vitoria viewpoint, from where you will be able to see the city, the river and the bridges not only connecting its banks, but also (surprisingly) connecting Porto with France. We will introduce you to the many local customs and traditions, especially food and wine related. Our tour will give you a chance to soak in the vibe of Porto which, despite being 2 thousand years old, feels young and energetic, in many places covered with amazing street art and famous for its great night-life. Come and join us in the exploration of the fascinating city of Porto!</p>",
    "highlightsTitle": "- Fonte dos Leões\n- Clérigos Tower\n- São Bento Station\n- Livraria Lello\n- Porto Cathedral\n- Dom Luís I Bridge\n- Vitoria Viewpoint\n- Liberal Revolution",
    "highlightsDescription": "- A famous fountain with lions\n- An iconic baroque bell tower offering panoramic views of the city's historic centre.\n- A train station famous for its walls covered in historical scenes on blue azulejo tiles.\n- One of the world’s most beautiful bookshops which famously inspired J.K. Rowling's Harry Potter series.\n- A historic Romanesque fortress-church, one of the city’s oldest and most important monuments.\n- A double-deck metal arch bridge that spans the Douro River, an iconic symbol of Porto.\n- A scenic spot offering spectacular views over the city, the Douro river, and its bridges.\n- The 19th-century uprising that started in Porto and changed the course of Portugal’s history.",
    "photoIds": [
      "22424",
      "22436",
      "22444",
      "22418",
      "22430",
      "157"
    ]
  },
  {
    "city": "Porto",
    "name": "Porto: Villa Nova de Gaia Walking Tour",
    "short": "Porot's Gaia district walking tour focused on views, wine heritage and riverside life. We cross the Luis I Bridge from Porto to Jardim do Morro and Serra do Pilar Monastery, walk the Gaia riverbank past the Port wine cellars, and finish at the WOW Cultural District.",
    "long": "<p>Experience the unique blend of history, culture, and panoramic vistas on our unforgettable walking tour of Gaia, the vibrant counterpart to Porto across the Douro River. Led by our expert local guide, join us on a 2.5-hour exploration that will show you hidden gems of the Gaia district.</p>\n<p>Begin your journey by crossing the iconic Luis I Bridge, a masterpiece of engineering that connects Porto and Gaia. From this vantage point, enjoy the breathtaking panoramic views of Porto’s skyline.</p>\n<p>Get the grip of Gaia’s cultural heritage as you pass the Porto wine cellars, where the secrets of Portugal’s famous Port wine await discovery. Along the riverbank of Gaia, feel the vibe of the lively atmosphere, where local flavors and traditions blend with the sights and sounds.</p>\n<p>Conclude your tour in the WOW Cultural District, where innovation and creativity converge to redefine the cultural landscape of Gaia.</p>\n<p>Throughout your exploration, our knowledgeable guide will regale you with fascinating tales of Gaia’s history, the wine industry, and insider recommendations to get the most of your time in this charming city. Join us for an unforgettable journey across the riverbank, where every step reveals a new facet of Gaia’s timeless charm.</p>",
    "highlightsTitle": "- Luis I Bridge\n- Jardim do Morro\n- Serra do Pilar Monastery\n- Port Wine Cellars\n- Bordalo II Half Rabbit\n- Santa Marinha Church\n- WOW Cultural District",
    "highlightsDescription": "- Iconic double-deck metal arch bridge connecting Porto and Gaia, offering breathtaking views of the historic city.\n- A beautiful hilltop garden providing one of the most picturesque panoramic views over Porto's skyline.\n- A UNESCO World Heritage site renowned for its unique circular church and stunning vistas over the Douro.\n- The historic district famous for housing the cellars where world-renowned Port wine is aged and stored.\n- A famous street art installation made from recycled materials, symbolizing creativity and environmental awareness.\n- A historic church where centuries of local history and religious devotion are etched into every stone.\n- A modern cultural hub with museums and exhibitions dedicated to Portuguese culture, wine, and industry.",
    "photoIds": [
      "32963",
      "32976",
      "32969"
    ]
  },
  {
    "city": "Poznan",
    "name": "Welcome to Poznań! Old Town Guided Walking Tour",
    "short": "Introduction to Poznań’s Old Town and its role in Polish statehood and trade. We trace the historic center from Liberty Square (Plac Wolnosci) to the Old Market Square and its Pranger, stopping at the Royal Castle, Old City Hall and the Parish Church.",
    "long": "<p>The cradle of Polish statehood. A fascinating testimony to a millennium of history, culture and a spirit of entrepreneurship.</p>\n<p>Taking advantage of its location at the crossroad of many trade routes, Poznań developed greatly over several centuries. The wealth of the historic city and its trading character is still visible through its magnificent architecture and uniquely colourful Main Square. At the end of the 18th century, the city became part of Prussia. During the partitions, Poles became a target of brutal persecutions and Germanization. Unlike in other parts of the former Poland, their response was not only in armed resistance. Over the next decades, they are rather focused on development in all kinds of fields – educational, social and economic. That is why you will still feel here more… grounded than in the other parts of Poland 🙃</p>\n<p>As one of the economic and cultural centres of Poland, known for organizing international fairs, present-day Poznań is bustling with life. It is also one of the biggest university hubs. Some even say it’s the friendliest city in the country. Join our Old Town Free Walkative! Tour to feel the inspiring energy of the capital of Wielkopolska!</p>\n<p>After visiting the Old Town we recommend taking the <a href=\"https://freewalkingtour.com/tours/poznan-imperial-district/\">Poznań Imperial District Tour</a> to get the sense of how Poznań transformed at the beginning of the 20th century.</p>",
    "highlightsTitle": "- Liberty Square\n- Royal Castle\n- Old Market Square (Stary Rynek)\n- Old City Hall\n- Parish Church\n- Jesuits College",
    "highlightsDescription": "- A central square representing the city's history under Prussian rule and its fight for independence.\n- The rebuilt residence of Polish kings, offering panoramic views over the historic Old Town.\n- The heart of the city, known for its historic Pranger and uniquely colourful merchant houses.\n- A stunning Renaissance masterpiece famous for its clock with two mechanical fighting goats.\n- A breathtaking example of Baroque architecture with an exceptionally ornate and magnificent interior.\n- A grand historic complex that once housed one of Poland's most important educational institutions.",
    "photoIds": [
      "14609",
      "21785",
      "3389",
      "36510",
      "33385",
      "48839",
      "48802",
      "48784",
      "48796"
    ]
  },
  {
    "city": "Poznan",
    "name": "Poznań: Imperial District Guided Walking Tour",
    "short": "History tour of Poznań’s Imperial District: we trace the Prussian-built quarter and 20th‑century power, identity and resistance, walking past the Imperial Castle, Opera, New Theater, the Monument to the cryptologists and the Monument to the Victims of June 1956.",
    "long": "<p>As a result of the fall and partitions of the First Republic of Poland in the 18th century, Poznań became a border city of German Prussia. Transformed into a Fortress City and surrounded by mighty walls around which no new buildings were allowed to be erected, it could not develop. There was only one purpose of the city’s existence back then – to stop the Russian Empire. Only the liquidation of Festung Posen and the liberation of the areas occupied before by the forts allowed the city to bloom like a flower or… explode like a powder keg!</p>\n<p>The monumental Imperial District, built in a post-fortified area at the beginning of the 20th century, is a phenomenon on a Polish scale. It was designed to raise the prestige of the city and make it one of the seats of the Prussian emperor. Wide and modern for those times, the streets are full of sumptuous public buildings, operas and theaters. The newly created district was to introduce Poznań to the 20th century as a modern city and be an impulse for further development. It also had its own political task – to overshadow the Polish Old Town with historicising and monumental German architecture. Therefore, in the heart of the District, there is a gigantic Imperial Castle, which is perhaps the most modern castle in Europe.</p>\n<p>During the tour we will focus not only on monumental buildings, but we will also wander into charming, hidden courtyards. We will talk about Poznań’s struggle to keep its Polish identity at a time when Poland did not exist. We will also see the place where brilliant pre-war Polish cryptologists who decoded Enigma – the legendary German coding machine – worked, an achievement that significantly helped the Allies win the war. We will also talk about the tragic history of Poznań June 1956, when the whole city fought against the communist government for decent jobs and a better life. Of course, there will also be the central point of the district, i.e. the Imperial Castle itself, which is now an enormous cultural center. After all, we all know that being in Poznań and not seeing the Castle is like visiting Paris without seeing the Eiffel Tower. Or visit Poznań without watching the billy goats… 😊</p>",
    "highlightsTitle": "- Imperial District\n- Imperial Castle\n- Enigma Codebreakers\n- June 1956 Uprising\n- Festung Posen\n- Opera House\n- Bałtyk Building",
    "highlightsDescription": "- A monumental district built in the early 20th century to showcase German prestige in Poznań.\n- Europe's youngest imperial residence, built for German Emperor Wilhelm II, now a massive cultural centre.\n- A monument honouring Polish cryptologists who broke the legendary German Enigma machine cipher before WWII.\n- Learn about the city's tragic fight against the communist government for decent jobs and a better life.\n- The former Prussian fortress whose demolition allowed for the development and expansion of modern Poznań.\n- One of the sumptuous public buildings designed to elevate the prestige of the Germanised city.\n- A distinctive contemporary skyscraper that serves as a showcase of Poznań's modern architecture.",
    "photoIds": [
      "15467",
      "15431",
      "15449",
      "21785",
      "48789",
      "15443",
      "15473",
      "48778"
    ]
  },
  {
    "city": "Poznan",
    "name": "Poznań Private Custom Tour",
    "short": "A private, tailored tour of Poznań focused on its main districts: the Old Town and the Imperial District and beyond. We can cover key sights along a compact route – Old Market Square, the Town Hall and Fara Church, then the Imperial Castle and Adam Mickiewicz Square or less known places – all adjusted to your interests.",
    "long": "<p>A private tour is a great opportunity for people who have limited time and cannot join our regular FREE walking TOURs or simply prefer staying in a small group of friends.</p>\n<p>It is you who chooses when the tour should start and what should be its topic. If you are not sure what do you want to visit during the tour, let us know and we will help you plan the tour that fits best your needs and interests.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including <a href=\"https://freewalkingtour.com/private-offer/\"> <strong>prices</strong> </a>, dates and booking rules.</p>\n<p>What is more, you do not have to worry about finding the guide at the meeting point – they can meet you in any place in the city or pick you up from your hotel. You don’t have to follow our strict schedule of regular tours, we can make a tour according to your needs.</p>\n<p>Let us know what kind of group are you (students, school group, seniors, group of friends, group of colleagues on a business trip, etc.) and what are your interests and we will do our best to prepare for you a tour that fits your needs and expectations.</p>\n<p><strong>LANGUAGES:</strong></p>\n<p>We can arrange private tours for you in different languages:</p>\n<p>English</p>\n<p>Polish</p>\n<p><strong>PRICES & BOOKING RULES</strong></p>\n<p>Every group or visitor that comes to us has different needs, interests, and expectations. Because of that, we treat every one of them individually to make sure that our services will meet their expectations. If your time is limited and you would like to try more than one tour or you would like to see something else, let us know and we will prepare a tailor-made tour for you. The final price can be varied. It will depend on the language and duration of your tour.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including prices, dates and booking rules.</p>\n<p>We kindly ask you to book private or group tours in advance, otherwise, we cannot guarantee that a guide will be available.</p>",
    "highlightsTitle": "- Old Town Poznań\n- Old Market Square (Stary Rynek)\n- Town Hall Goats\n- Poznań Parish Church\n- Imperial District\n- Imperial Castle",
    "highlightsDescription": "- The historical heart of the city, with colourful merchant houses and a vibrant atmosphere.\n- One of Europe's most picturesque squares, the city's social and cultural hub.\n- A famous clock automaton featuring mechanical goats that butt heads daily at noon.\n- A stunning example of Baroque architecture, known for its ornate pink interior and grand organ.\n- A monumental district built for the German Emperor Wilhelm II in the early 20th century.\n- The last imperial residence built in Europe, a neo-Romanesque structure with a dramatic history.",
    "photoIds": [
      "48784",
      "15431",
      "48802",
      "33145",
      "15467",
      "15443",
      "48796",
      "48794",
      "48788"
    ]
  },
  {
    "city": "Poznan",
    "name": "Poznan Pub Crawl",
    "short": "Nightlife tour of Poznań’s Old Town. We explore the bars and clubs around Stary Rynek and Apollo’s Fountain, with welcome shots, drinking games, and special discounts, before finishing with VIP entry to a late-night club.",
    "long": "<p>Pub Crawl Poznan is an amazing nightlife activity where local guides take you on an adventure through the best bars &amp; clubs in Poznan. Starting at 9 PM next to the Fontanna Apolla – at Stary Rynek – you will find your guides holding up our beloved Pub Crawl sign. Enjoy drinks, fun challenges, and a lively atmosphere as you make your way through the night. In the end, you will have a memorable experience and dance your way until late morning. Your night to be a rock star!</p>",
    "highlightsTitle": "- Local Guides\n- Free Drinks\n- Welcome Shots\n- Drinking Games\n- Poznan's Best Bars\n- VIP Club Entry",
    "highlightsDescription": "- Experience Poznan's nightlife with an insider who knows all the best spots for a great party.\n- Kick off your night with two complimentary beers or cocktails at the first bar on the tour.\n- Get a free welcome shot waiting for you at the entrance of each new bar you visit.\n- Break the ice and compete in fun challenges and drinking games led by your local guide.\n- Discover a curated selection of the city’s most popular and exciting bars and pubs.\n- Skip the line with free VIP entry to a top Poznan nightclub to dance until dawn.",
    "photoIds": [
      "4979",
      "4969",
      "16727",
      "4984",
      "4974"
    ]
  },
  {
    "city": "Prague",
    "name": "Prague: Castle Guided Walking Tour",
    "short": "Prague Castle tour in the Hradčany hill complex: we ride a tram up and walk downhill via the castle courtyards to key sites – St. Vitus Cathedral, Old Royal Palace, St. George’s Basilica, Golden Lane and Hradčany Square – and we time it to see the changing of the guard.",
    "long": "<p>Prague Castle is a jewel of Prague – and whole Europe! We will take you there in the most comfortable way – gently walking downhill, after a short tram ride up. Get to know the kings, emperors, dark and light secrets of the medieval complex.</p>",
    "highlightsTitle": "- Prague Castle\n- Czech Kings & Emperors\n- Medieval Castle Complex\n- Changing of the Guard\n- Castle Secrets",
    "highlightsDescription": "- Explore the magnificent ancient castle complex, a jewel of Prague and a UNESCO World Heritage site.\n- Hear stories of the powerful rulers who shaped the history of the castle and the Czech lands.\n- Discover the vast network of palaces, churches, and fortifications that make up the castle grounds.\n- Witness the formal ceremony of the Prague Castle Guard, a captivating display of military tradition.\n- Uncover the intriguing tales and hidden secrets from the castle's long and dramatic thousand-year history.",
    "photoIds": [
      "16235",
      "16229",
      "16223",
      "16117"
    ]
  },
  {
    "city": "Prague",
    "name": "Prague: Ghost & Legends Tour",
    "short": "Legends and the dark side of Prague. In and around Nový Svět by the old city walls, we trace former slums scarred by wars and fires, visit a plague gathering site, and uncover a secret lovers’ meeting place — revealing how everyday stories and shadows of the past shaped the city.",
    "long": "<p>Forget about typical sightseeing and join us as we delve into the legends and stories that have been passed down for centuries. Experience Prague like never before on our unique tour that explores the city’s untold history.</p>\n<p>We’ll start in Novy Svet, the former slums located at the city walls, an area marked by destruction from wars and fires, now holding secrets and captivating legends.</p>\n<p>We’ll also visit places connected to the plague epidemics, a grim reminder of the horrible disease that killed one-third of Prague’s population in the 18th century. Nearby, a secret meeting place for two lovers holds its own mysterious story.</p>\n<p>These are the stories of ordinary people that shape the city and make it what it is today. Join us to discover the legendary and dark side of Prague and truly get to know the city.</p>\n<p>Join our tour to discover the atmosphere of Prague, learn its history and secrets with local, licensed tour guides from 100 Spires City Tour.</p>",
    "highlightsTitle": "- Novy Svet\n- Plague History\n- A Tragic Love Story\n- Prague's Legends\n- Dark Side of Prague\n- Untold History",
    "highlightsDescription": "- Explore the former slums near the city walls, a district filled with captivating legends and secrets.\n- Visit a site connected to the devastating 18th-century plague which killed a third of Prague's population.\n- Hear the mysterious tale of two secret lovers who met near the city’s historic plague grounds.\n- Delve into the fascinating stories of ordinary people that have been passed down through the centuries.\n- Discover the city’s grim past, exploring darker stories of war, fire, disease, and untold tragedies.\n- Go beyond typical sightseeing to explore the lesser-known tales and secrets that shaped the city of Prague.",
    "photoIds": [
      "39603",
      "39597",
      "20160",
      "39609",
      "16117"
    ]
  },
  {
    "city": "Prague",
    "name": "Welcome to Prague! Old Town & Jewish Quarter Guided Walking Tour",
    "short": "Introduction to Prague—its history and culture in the Old Town and Jewish Quarter: we trace the city’s past at Old Town Square with the Astronomical Clock, the Church of Our Lady before Týn, and Charles Bridge, and in Josefov at the Old-New Synagogue.",
    "long": "<p>“I see a great city whose glory will touch the stars” said once a princess standing on a rock and thus Prague was born. The prophecy came true and the city today is not only reaching for the stars with the many church towers (hence it is known as the “city of hundred spires”) but it is one of the brightest stars of Europe. A place you simply cannot miss.</p>\n<p>Geographically and politically Prague sits in the very heart of the old continent. Built on the riverside it was developing as a seat of dukes and gaining its fame as a bustling trading city which attracted many merchants, traders and bankers from all over Europe. All this gave it it’s multi-ethnic character with important Czech and German population, being also known for one of the oldest Jewish settlements in Europe. In the 14th century Prague became the seat of the Emperor of the Holy Roman Empire of the German Nation and grew to be the third biggest and most important city in Europe giving its way only to Rome and Constantinople. Once the city of alchemists and scientists, revolutionists, musicians and writers, is still inspiring many.</p>\n<p>Set on the winding banks of Vltava river Prague boasts some of the most splendid bridges you can imagine, including the elegant Charles Bridge that has been used continuously for the past 600 years. It is a place where you can witness almost 1000 years of architectural and urban changes with wonderful examples of romanesque, gothic, baroque, art nouveau and cubist buildings. With its old gates and bridges, narrow cobbled streets, the cathedral whose creation spanned over almost 600 years, the oldest astronomical clock that is still working and many other wonders, visit to the Czechs capital makes it totally unforgettable.</p>\n<p>And did we mention beer? Not yet? Well, there is beer… and there is beer in Prague, a completely different level of experience. After all, it was the Czechs who invented lager.</p>\n<p>Join our tour to discover the atmosphere of Prague, learn its history and secrets with local, licensed tour guides from 100 Spires City Tour.</p>",
    "highlightsTitle": "- Old Town\n- Jewish Quarter\n- Charles Bridge\n- Astronomical Clock\n- \"Hundred Spires\" Skyline\n- Czech Beer Culture\n- Architectural History",
    "highlightsDescription": "- Explore the historic heart of Prague with its cobbled streets and ancient gates.\n- Discover one of Europe's oldest Jewish settlements, renowned for its rich history and culture.\n- Walk across the elegant, 600-year-old stone bridge that spans the Vltava river.\n- Witness the world's oldest working astronomical clock, a marvel of medieval engineering.\n- Admire the famous skyline that gives Prague its nickname, “the city of a hundred spires.”\n- Learn about the country's unique beer tradition, including the Czech invention of lager.\n- See 1000 years of styles, from Romanesque and Gothic to Art Nouveau and Cubism.",
    "photoIds": [
      "48870",
      "15995",
      "15826",
      "15832",
      "15736",
      "20160",
      "48869",
      "48875",
      "48874",
      "16117"
    ]
  },
  {
    "city": "Prague",
    "name": "Prague: WWII & Communist Era Tour",
    "short": "WWII, the Holocaust and the communist period in Prague: we follow the Protectorate, resistance, the Prague Uprising, 1968 and 1989 across the centre – Prague Castle, the Jewish Quarter (Josefov), Old Town Square, Wenceslas Square and the Church of St. Cyril and Methodius (Operation Anthropoid).",
    "long": "<p>Join us for the tour to hear a story of Prague’s darkest hour – the time of World War II and the Holocaust, to listen about both, terror and fear as well as of courage and hope.</p>\n<p>Czechoslovakia, the state born as a result of the collapsing empires after WWI, ceased to exist even before the outbreak of WWII. Hitler, making his territorial demands with the consent of western European powers, took over the country. Facing threats of German bombing of Prague and Nazi forces invading his country, the Czechoslovak president went down having a heart attack.</p>\n<p>In March 1939, standing on Prague Castle, Hitler proclaimed the creation of the German Protectorate of Bohemia and Moravia. The German Nazi forces began to change the multi-ethnic city that for centuries was Prague. As a result, one of the oldest Jewish communities in Europe was almost entirely murdered by the Germans. Immediately, the Czech people started to form resistance. Its most spectacular action was Operation Anthropoid – the assassination of Reinhard Heydrich, German protector of Bohemia and Moravia and one of the architects of the “Final Solution of the Jewish Question” – the killings of millions of European Jews during the Holocaust. In response, the Germans started bloody repercussions and mass killings of many civilians, including massacres of entire nearby villages.</p>\n<p>This, however, was not the end of the city’s tragedy. Towards the end of the war it was bombed by the Allied forces and in the final days of the war people of Prague started a National Uprising against the Germans. The streets of the city ended up in bloodbath, hours before its liberation. On May 9th, 1945 Prague fell into the hands of the Soviets, and was under their influence for the next 44 years until the so-called Velvet Revolution in 1989, resulting in the Czech Republic and Slovakia emerging as democratic states. That story encompasses the bloody Warsaw Pact intervention of 1968 and the famed Velvet Revolution spearheaded by Václav Havel and Czechs winning their freedom back. Might seem like a fairy tale story in a fairy tale city, but was it really so? Let us tell you all about it!</p>\n<p>Join us to learn about all those events during a tour which we have created to honour our great-grandparents who lived at the time of the Nazi occupation of Czechoslovakia and our parents, who lived through the strange times of communism. A tour that gives us the opportunity to make their memories and voices being heard and remembered.</p>",
    "highlightsTitle": "- WWII in Prague\n- Prague's Jewish Story\n- Operation Anthropoid\n- Prague Uprising\n- The Communist Era\n- Prague Spring 1968\n- The Velvet Revolution",
    "highlightsDescription": "- Hear about the Nazi occupation and the creation of the Protectorate of Bohemia and Moravia.\n- Discover the tragic fate of one of Europe's oldest Jewish communities during the Holocaust.\n- Learn about the daring assassination of high-ranking Nazi official Reinhard Heydrich by Czech resistance.\n- Relive the city’s final, bloody days of WWII as its people rose up against the Germans.\n- Understand life in Prague during four decades of Soviet influence behind the Iron Curtain.\n- Uncover the story of the 1968 Warsaw Pact invasion that crushed Czechoslovakia's liberalization reforms.\n- Find out how Václav Havel led peaceful protests to end 44 years of communist rule.",
    "photoIds": [
      "48860",
      "15906",
      "15894",
      "15900",
      "48865",
      "15736",
      "48864",
      "16117"
    ]
  },
  {
    "city": "Pula",
    "name": "Welcome to Pula! Old Town Guided Walking Tour",
    "short": "Introduction to Pula, its history and culture. A walk through the historic centre, tracing the city’s Roman past and its role in today’s life. Highlights include Forum Square, the Temple of Augustus, the Arch of Sergii, the Gates of Hercules, and the Arena (amphitheatre).",
    "long": "<p>Join us for a great introduction to the city of Pula, one of the oldest cities in Croatia whose origins date back to the ancient Roman ages. The rich heritage of Roman architecture makes Pula an outstanding exception among Croatia’s major cities. Its main attraction is the well-preserved Roman amphitheatre, which dominates the centre and hosts concerts and other cultural events especially in summer.</p>\n<p>Our tour focuses both on <strong>history and culture</strong> and on the modern everyday life of Pula. At a moderate pace, you will also glimpse how it was to live in the ancient Roman colony of Pula.</p>\n<p>During this 2-hour tour, you will get the chance to explore the unique charm and atmosphere of Pula, experiencing its vibrant blend of past and present.</p>",
    "highlightsTitle": "- Roman Forum\n- Pula Arena\n- Temple of Augustus\n- Arch of the Sergii\n- Gate of Hercules\n- Twin Gates\n- Pula City Hall",
    "highlightsDescription": "- A triumphal Roman arch built to honour members of the powerful Sergii family.\n- The main square in the heart of the old city, dating back to the Roman Empire.\n- A remarkably preserved Roman amphitheatre and the city's most famous landmark and event venue.\n- An ancient Roman temple dedicated to the first Roman emperor, located on the main square.\n- The oldest Roman monument in Pula, marking the entrance to the once-fortified city.\n- Impressive double-arched Roman gates that once led into the ancient city and its theatre.\n- The historic administrative center of the city, located on the ancient Roman Forum square.",
    "photoIds": [
      "31200",
      "31963",
      "31957",
      "31975",
      "31969",
      "31981"
    ]
  },
  {
    "city": "Riga",
    "name": "Alternative Riga: Markes, Moscow District & More",
    "short": "Riga's life beyond Old Town. Tour focusing on districts by the Daugava and the former workers’ quarter. We cover Central Market (in WWI Zeppelin hangars), the Warehouse District, the former ghetto in the Moscow District, the Latvian Academy of Sciences (Stalin’s birthday cake) and the Freedom Monument.",
    "long": "<p>Join us to explore what lies beyond the old city and the touristic centre of Riga with its famous art nouveau buildings. Head towards the areas occupied mostly by the locals to discover how they live and carry on with their daily lives.</p>\n<p>The centerpoint of this tour will be the massive Central Market – a paradise for all the foodies out there, a place to buy all kinds of local delicacies from smoked fish, cheeses, fruit (berries!) and other snacks. But it is not just that! The market is oddly located in the five old WWI Zeppelin hangars. Right next to it lies the Warehouse district with its revitalized brick, functional architecture which today is full of hip cafés, shops and galleries. With nice green areas, open air cinemas and a pleasant promenade along the Daugava river, it makes it Riga’s most favourite relaxing zone. If once there were workshops here there must also be an area where the working class lived. And that’s where we will head next. The so-called Moscow district is a strange mix of 19th century wooden houses, neglected 20th century Art Nouveau buildings and soviet style housing projects. If this wasn’t enough you can also find there churches and temples of all the people who once lived there: from Russians, Latvians and Jews up to Old Believers, a sect of Russian Orthodox Church. A great testimony to how cosmopolitan Riga once was!</p>\n<p>Join us on this legendary tour to discover Riga’s past, present and perhaps future as well!</p>",
    "highlightsTitle": "- Central Market\n- Warehouse District\n- Moscow District\n- Stalin's Birthday Cake\n- Former Ghetto Area\n- Freedom Monument\n- Local Delicacies",
    "highlightsDescription": "- Europe’s largest market, housed in five massive former German Zeppelin hangars from World War I.\n- Revitalized 19th-century warehouses, now a hip area with galleries, cafés, and a riverside promenade.\n- A diverse neighborhood with old wooden houses, Soviet buildings, and churches of various faiths.\n- Nickname for the Academy of Sciences, a prominent example of Stalinist architecture in Riga.\n- The historical area that served as the Jewish ghetto during WWII, located in the Moscow District.\n- A memorial honoring soldiers from the Latvian War of Independence, a powerful symbol of Latvia's freedom.\n- Opportunity to try local products like smoked fish and traditional cheeses at the bustling market.",
    "photoIds": [
      "16623",
      "16715",
      "16709",
      "16697",
      "16661",
      "16579"
    ]
  },
  {
    "city": "Riga",
    "name": "Riga Art Nouveau District Tour",
    "short": "Art Nouveau architecture beyond Riga’s Old Town. We trace the late-19th and early-20th-century boulevards and parks leading to the Art Nouveau quarter, with highlights including the National Opera House, Alberta Street, Elizabetes Street, and striking façades by Mikhail Eisenstein.",
    "long": "<p>Beyond the old Riga, there lies a new city which rose in the late 19th and early 20th century in splendid and flamboyant Art Nouveau style. These were the days of spectacular economic, industrial and demographic development of the city. A time when the walls and gates of the old town began to suffocate the growing metropolis. So, it got rid of them and gave space to wide boulevards, lush green parks and gardens. But first and foremost to magnificent houses and palaces built for the Riga’s rising middle class, bourgeoisie and architects themselves.</p>\n<p>There is so much to look at (or rather up) and admire. From the beginning of the 20th century up to the First World War more than 750 buildings (more than in any other city in the world) were designed in this fascinating style. What is not there: starting from floral ornaments, mythical beasts, Greek gods, strange creatures typical for Latvian folklore up to screaming masks and even… robots! Iron work of balconies and fences, the mastery of tiles, lamps and stained-glass windows will leave you enchanted and dreaming of spending a day or two in those beauties.</p>\n<p>Let us walk you through the Riga’s Art Nouveau patch to show you the most beautiful and iconic places, as well as those hidden from most tourists’ eyes.</p>",
    "highlightsTitle": "- Art Nouveau District\n- National Opera House\n- Mikhail Eisenstein's Works\n- Alberta Street\n- Elizabetes Street\n- Symbolic Facade Details",
    "highlightsDescription": "- Explore the world's largest collection of Art Nouveau architecture, boasting over 750 unique buildings.\n- See the magnificent building that stands as the gateway to Riga's impressive Art Nouveau quarter.\n- Discover masterpieces by the most famous Art Nouveau architect, known for highly decorative and symbolic facades.\n- Walk down a true street-museum of Art Nouveau, showcasing some of Riga's most iconic buildings.\n- Stroll along one of Riga's grandest streets, featuring a stunning collection of eclectic Art Nouveau architecture.\n- Spot mythical beasts, screaming masks, and folklore creatures adorning the magnificent Art Nouveau facades.",
    "photoIds": [
      "16617",
      "16703",
      "16655",
      "16667",
      "16691",
      "16673",
      "16679",
      "16685",
      "16579"
    ]
  },
  {
    "city": "Riga",
    "name": "Welcome to Riga! Old Town Guided Walking Tour",
    "short": "Introduction to Riga—its history and culture in the Old Town: we trace the city’s story from Hanseatic trade through Swedish and Russian rule, World War II, Soviet time, and independence, while visiting St. Peter’s Church, Town Hall Square, the House of the Blackheads, Dome Square and Cathedral, and the Three Brothers.",
    "long": "<p>It may seem small compared to other European capitals, but it was desired by many over the centuries and so walking down the streets of Riga you still feel the city’s cosmopolitan vibe.</p>\n<p>First there was the river, Daugava, known and used by the mighty Vikings and the sheltered, natural harbor that became an ideal setting for a bustling trading center. Thus, Riga was founded. Growing in time, it became a desired loot for the Christian Church and finally was taken by force and christianized. Joining the powerful Hanseatic League gave the city a boost to develop. And now many more wanted to lay their hands on the city. The Germans, the Poles, the Swedes and the Russians. There was a time when Riga was more important for Sweden than Stockholm and has become the largest Swedish stronghold. In Russian hands it grew, industrialized and became the largest timber export port in the entire world!</p>\n<p>But finally the time was ripe for changes. Intellectual ferment and new ideas took over the old city of Riga. In cafés and salons, the forward-thinking intelligentsia discussed the future of the city and the country. Finally, after World War I, the new Riga came into being – the capital of the independent Latvian state.</p>\n<p>World War II left Riga broken and destroyed, but the effort to rebuild it has led to the city’s inclusion in the prestigious UNESCO Heritage List. Coming off the decades of Soviet domination in 1991, the capital of once again independent Latvia became one of the progressive hubs of culture and economic growth, with its IT sector flourishing.</p>\n<p>Walk with us through the curvy, cobbled streets, pass the Gothic red-brick houses and churches of the old city. Get to know the origins of the Christmas tree (yes, its roots are here and strangely enough they involve a group of intoxicated young guys) and many more curiosities hiding out there. Our tour will take you through time and the complicated history of Riga and make you understand and know the city, its culture and its people.</p>\n<p>After visiting Riga’s Old Town we recommend taking <a href=\"https://freewalkingtour.com/tours/riga-art-nouveau-free-tour/\">Riga Art Nouveau</a> and <a href=\"https://freewalkingtour.com/tours/alternative-riga/\">Alternative Riga</a> free tours to understand Riga better!</p>",
    "highlightsTitle": "- St. Peter's Church\n- Town Hall Square\n- House of Blackheads\n- Riga Cathedral\n- Christmas Tree Legend\n- The Three Brothers",
    "highlightsDescription": "- A historic Gothic church that has been a defining landmark of Riga's skyline for centuries.\n- The historic heart of Riga, meticulously rebuilt after its destruction during World War II.\n- Stunning reconstruction of a medieval guild house for unmarried merchants, a key symbol of the city.\n- The largest medieval church in the Baltics, located in the spacious and central Dome Square.\n- Discover Riga's claim as the home of the world's first decorated public Christmas tree.\n- A complex of the city's three oldest residential houses, dating back to the 15th century.",
    "photoIds": [
      "16649",
      "16611",
      "16643",
      "16721",
      "48857",
      "16579"
    ]
  },
  {
    "city": "Rome",
    "name": "Rome: The Ultimate Julius Caesar Guided Tour",
    "short": "Historical tour of Julius Caesar’s Rome. We follow his rise, politics, and assassination across the historic centre to the Forum — from Tiber Island and Largo di Torre Argentina (Pompey’s Theatre) to Piazza del Campidoglio overlooking the Roman Forum, and the Temple of Venus Genetrix.",
    "long": "<p><strong>Walk in the Footsteps of a Legend: The Ultimate Julius Caesar Tour</strong></p>\n<p>Rome, the Eternal City, is a living museum where ancient history and modern life intertwine in the most striking of ways. Its cobblestone streets, majestic ruins, and timeless art tell tales of emperors, gladiators, and philosophers. Among these grand figures, one name resonates profoundly—Julius Caesar. His legacy is etched into the very fabric of Rome, inviting you to explore the saga of a man who forever altered the course of history.</p>\n<p><strong>A Glimpse into Caesar’s Rome</strong></p>\n<p>Gaius Julius Caesar, a military genius and master tactician with unparalleled ambition, rose quickly through the ranks of the Roman Republic. His conquests expanded Rome’s territories, and his reforms reshaped its governance. Yet, his ascent was fraught with political intrigue, alliances, and betrayals, culminating in a dramatic assassination that has been immortalized in art and literature. Walking in Caesar’s footsteps means reliving the defining moments of an era—moments that ultimately shaped the course of world history.</p>\n<p><strong>Tour Highlights</strong></p>\n<p>Our adventure begins at Tiber Island, offering a panoramic view of Trastevere, once home to Caesar’s gardens, the Horti Caesaris. As the Tiber’s waters flow beside us, we’ll delve into tales of young Caesar’s audacious encounters with pirates, setting the stage for his legendary path. Moving to Largo di Torre Argentina, we’ll show you the remnants of Pompey’s Theatre, the fateful site of Caesar’s assassination. We will tell you all about Caesar’s military triumphs in Gaul and, ultimately, the political intrigue that led to his shocking assassination, bringing to life the fateful Ides of March. We will then take you to the picturesque Piazza del Campidoglio, designed by Michelangelo, offering a breathtaking view over the Roman Forum. Here, amidst temples and basilicas, we’ll discuss Caesar’s public life, his oratory prowess, and the enduring impact of his policies. We will also explore how his linguistic legacy continues to influence the world today. Concluding our tour at the Temple of Venus Genetrix, commissioned by Caesar to honor his divine ancestry, we’ll reflect on his efforts to secure his legacy and the lasting imprint he left on Rome’s architectural and cultural landscape.</p>\n<p>Join us to understand how one man reshaped Rome and defined an era—an era that still influences our world today. Walk the streets Caesar once ruled, stand where he met his fate, and explore the legacy that keeps his name alive over 2,000 years later. Beyond history, we’ll unravel the myths and intrigue that made him a legend and gain a deeper understanding of Roman traditions, politics, and society during Caesar’s era. This isn’t just a tour—it’s a journey through power, ambition, and destiny. Don’t just learn about history—experience it with Walkative guides! Book now and walk in the footsteps of Julius Caesar!</p>\n<p><em>Note: This tour involves walking through historic sites with uneven surfaces; comfortable footwear is recommended.</em></p>",
    "highlightsTitle": "- Tiber Island\n- Largo di Torre Argentina\n- Ides of March\n- Piazza del Campidoglio\n- Roman Forum\n- Temple of Venus Genetrix",
    "highlightsDescription": "- An island offering views of Caesar's gardens and tales of his youth.\n- The archaeological site where the fateful assassination of Julius Caesar took place.\n- The story of the political conspiracy that led to Caesar's dramatic assassination.\n- A Renaissance square by Michelangelo with stunning views over the Roman Forum.\n- The heart of ancient Rome, where Caesar's political and public life unfolded.\n- A temple Caesar built to honor his divine ancestry and solidify his legacy.",
    "photoIds": [
      "42396",
      "42420",
      "42408",
      "42426",
      "42402",
      "42432",
      "29854"
    ]
  },
  {
    "city": "Rome",
    "name": "Rome Private Custom Tour",
    "short": "Private, customizable tour of Rome. We tailor the route to your interests, exploring the Centro Storico and the ancient core with highlights like the Colosseum, Roman Forum, Pantheon, Trevi Fountain, and Piazza Navona. The itinerary can also include the Vatican, Trastevere, Testaccio, the Aventine Hill, or other neighbourhoods — designed entirely around your pace and passions.",
    "long": "<p>A private tour is a great opportunity for people who have limited time and cannot join our regular FREE walking TOURs or simply prefer staying in a small group of friends.</p>\n<p>It is you who chooses when the tour should start and what should be its topic. If you are not sure what you want to visit during the tour, let us know and we will help you plan the tour that fits best your needs and interests.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including <a href=\"https://freewalkingtour.com/private-offer/\"> <strong>prices</strong> </a>, dates and booking rules.</p>\n<p>What is more, you do not have to worry about finding the guide at the meeting point – they can meet you in any place in the city or pick you up from your hotel. You don’t have to follow our strict schedule of regular tours, we can make a tour according to your needs.</p>\n<p>Let us know what kind of group you are (students, school group, seniors, group of friends, group of colleagues on a business trip, etc.) and what are your interests and we will do our best to prepare for you a tour that fits your needs and expectations.</p>\n<p><strong>PRICES & BOOKING RULES</strong></p>\n<p>Every group or visitor that comes to us has different needs, interests, and expectations. Because of that, we treat every one of them individually to make sure that our services will meet their expectations. If your time is limited and you would like to try more than one tour or you would like to see something else, let us know and we will prepare a tailor-made tour for you. The final price can be varied. It will depend on the language and duration of your tour.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including prices, dates and booking rules.</p>\n<p>We kindly ask you to book private or group tours in advance, otherwise, we cannot guarantee that a guide will be available.</p>",
    "highlightsTitle": "- Private Group Tour\n- Custom Itinerary\n- Flexible Start Time\n- Convenient Hotel Pickup\n- Tailor-Made Experience",
    "highlightsDescription": "- An exclusive tour experience just for you and your group of friends or family.\n- You choose the topic and sights to create a tour that fits your personal interests.\n- Decide when the tour starts, creating a schedule that is convenient for you.\n- Your guide can meet you at your hotel or any other chosen location in the city.\n- A tour designed specifically for your group, whether students, seniors, or business colleagues.",
    "photoIds": [
      "33246",
      "42396",
      "34845",
      "34266",
      "34260",
      "35333",
      "43014",
      "34092",
      "34098"
    ]
  },
  {
    "city": "Rome",
    "name": "Sunset in Rome: Pincio Hill, Borghese & Spanish Steps",
    "short": "Most picturesque, evening tour of Rome’s northern historic centre. We begin at Piazza del Popolo, ascend to the Pincio Terrace for sweeping views, cross the Villa Borghese Gardens (including the water clock), pass by the Villa Medici, and conclude at the Spanish Steps / Piazza di Spagna — tracing the city’s 18th–19th-century urban transformations as day fades.",
    "long": "<p>Welcome to one of the Eternal City’s most picturesque tours! Perfectly capturing the artistry and tranquillity of Rome’s beloved park as well as the elegance and sophistication of its most iconic palaces and squares, spiced up with some unparalleled views. Experience a serene evening stroll through a city bathed in the fading glow of the sunset and let the magic of Rome speak for itself!</p>\n<p>Our walk begins at Piazza del Popolo, historically the northern gateway to the city and a portal to modern Rome. From this square three main arteries—Via del Corso, Via del Babuino, and Via di Ripetta—radiate. From the Piazza we will climb up to Pincio Hill. Get ready for some effort, but expect a magnificent reward! The views from Pincio Terrace are simply unparalleled, offering a spectacular panorama of Rome’s famous landmarks, especially beautiful when illuminated by the setting sun’s amber hues. Next we will wander into the Villa Borghese Gardens, Rome’s most cherished park and an open-air art gallery rich with sculptures, fountains, temples, and even an artificial lake! We will see, among other, the still-functioning water clock, first presented at the Paris Exposition in the late 19th century and installed in the Villa Borghese a few years later. Strolling through these lush gardens, surrounded by Mediterranean flora, we will reach a second vantage point offering yet another sweeping view of the city. Our tour will then lead us past Villa Medici, the elegant Renaissance palace that once confined the famous astronomer Galileo, to the top of the Spanish Steps, thus marking our return to the vibrant, elegant heart of Rome. We will end our tour on one of the main streets of Rome, Via del Corso once known for an annual carneval tradition and today an active shopping street.</p>\n<p>This route, besides the magnificent views, will be a perfect setting for discussing 18th century Rome’s evolution into a modern metropolis, known for its vibrant public spaces, parks, and museums. It will also be a tale of the many influential families whose legacies shaped the city and inspired the world at large.</p>\n<p>Join us and experience the tranquil yet vibrant atmosphere of Rome as the sun sets, painting the city in glorious colours and bringing its rich history to life. After all, as Pier Paolo Pasolini, famous Italian writer and film director once said, looking at the sunset in Rome is like gazing at eternity.</p>",
    "highlightsTitle": "- Piazza del Popolo\n- Pincio Terrace\n- Villa Borghese Gardens\n- Borghese Water Clock\n- Villa Medici\n- Spanish Steps\n- Via del Corso",
    "highlightsDescription": "- The historic northern gateway to the city, serving as a portal to modern Rome.\n- A hilltop viewpoint offering spectacular panoramic views of Rome's landmarks, especially at sunset.\n- Rome's most cherished park, functioning as an open-air gallery with sculptures and fountains.\n- A unique 19th-century hydrochronometer, a functioning water clock presented at the Paris Exposition.\n- An elegant Renaissance palace that once served as a place of confinement for Galileo.\n- The iconic monumental stairway connecting Piazza di Spagna with the Trinità dei Monti church.\n- A major street known for its past carnival traditions and today a vibrant shopping hub.",
    "photoIds": [
      "34821",
      "43100",
      "35309",
      "34827",
      "34833",
      "35315",
      "34863",
      "34851",
      "34845",
      "29854"
    ]
  },
  {
    "city": "Rome",
    "name": "From Jewish Ghetto to Trastevere – Rome Guided Walking Tour",
    "short": "We begin at the Teatro di Marcello and the Portico d’Ottavia, exploring the history of the Jewish Ghetto, the Holocaust Stolpersteine, and the Great Synagogue of Rome. Crossing the Tiber Island, we continue into Trastevere, with its bohemian streets and piazzas, and finish by the Santa Maria in Trastevere. Along the way, we share stories of resilience, and local traditions — enriched by the spirit and flavours of these two unique neighbourhoods.",
    "long": "<p>Discover with us two enchanting neighbourhoods of Rome: Jewish Ghetto and Trastevere, each brimming with unique history, stunning architecture, excellent cuisine and unparalleled atmosphere. From the ancient charm of the Jewish Ghetto to the bohemian vibes of Trastevere, this tour uncovers the local secrets, stories, and flavours that make these areas so captivating!</p>\n<p>Rome is a home of the oldest Jewish community in Europe. Starting in 1555 Jewish citizens of the city were forced to live in the ghetto, controlled by the popes. Struck by poverty, floods and diseases, it was the longest existing ghetto in Western Europe, functioning for more than 300 years! Despite harsh conditions, the community preserved its unique traditions and dialect. Today, the area of the historical Ghetto thrives with Jewish life, synagogues, schools, and renowned eateries offering unique specialities like deep-fried artichoke and stuffed zucchini flowers. Between the Jewish Ghetto and Trastevere lies Isola Tiberina. Connected by the city’s oldest bridges, this boat-shaped island teems with legends, including tales of Romulus and Remus. On the other side of the river lies a place where from the times of the Roman Republic many immigrants, among them Jews, settled and where the oldest Roman synagogue is still standing. Shaped by centuries of isolation, Trastevere developed a culture of its own, still felt when walking around. Those who live here for generations, the Trasteverini, are very proud of their roots and traditions. The true charm of the neighbourhood lies in its authenticity: locals doing their shopping in the market, playing cards or taking a walk. It also lies in its quaint alleys, houses painted in ochre and the scent of jasmine in summer. Today, just like ages ago, it attracts many foreigners, students, artists, and musicians. Known for its vibrant atmosphere, amazing trattorias and vibrant nightlife, Trastevere remains a favourite for both locals and visitors.</p>\n<p>Our tour will begin at the Theatre of Marcellus, the only theatre of ancient Rome that survived till the present day. Then via the Portico of Octavia we will enter the Jewish Ghetto. These ancient ruins are what remained of an enormous porticoed square, dedicated by Augustus, the first Emperor, to his sister Octavia. Walking through the narrow streets of the Roman Ghetto we will talk about the Jewish history, see the Great Synagogue, arguably the cutest fountain in the city and the poignant Stolpersteine – stones, remembering Holocaust victims. We will also stop at the plaque commemorating 16 October 1943, the day of the round-ups and deportations. Getting to Trastevere, we will cross the oldest bridge in Rome and on the Isola Tiberina we will hear all the myths and stories connected to it. Entering the district across the Tiber (tras Tevere) and walking through the maze of its mediaeval streets dotted with antique elements, we will experience the vibrant heart of the neighbourhood, rich with history and tradition. The tour will conclude at a popular local gathering spot and the starting point of every Trastevere evening. Ending by the river, you’ll be treated to a stunning panorama of the Tiber River and St. Peter’s Basilica in the distance. This perfect endpoint sets the stage for an evening of exploration, allowing you to enjoy the best of Roman and Jewish cuisines as recommended by our guides.</p>\n<p>Book your tour and join us for a walk through two neighbourhoods connected by the river, history, charm and great food. Experience first-hand the vibrant local culture and rich history that link the Jewish Ghetto and Trastevere and create unforgettable memories from your visit in Rome!</p>",
    "highlightsTitle": "- Jewish Ghetto\n- Trastevere\n- Theatre of Marcellus\n- Great Synagogue\n- Tiber Island\n- Santa Maria in Trastevere\n- Piazza Trilussa",
    "highlightsDescription": "- Europe’s oldest Jewish community, a vibrant area with a poignant history and unique cuisine.\n- A bohemian district across the Tiber known for its authentic atmosphere and vibrant nightlife.\n- The only surviving ancient Roman open-air theatre, a precursor to the Colosseum.\n- The impressive main synagogue of Rome, an iconic landmark of the city's Jewish community.\n- The world's smallest inhabited island, connecting two neighborhoods with Rome's oldest bridges.\n- One of Rome's oldest churches, the heart of its neighborhood, famed for stunning mosaics.\n- A popular local gathering spot and the bustling starting point for every Trastevere evening.",
    "photoIds": [
      "34146",
      "34179",
      "34254",
      "34171",
      "34242",
      "34185",
      "34266",
      "34260",
      "34159",
      "29854"
    ]
  },
  {
    "city": "Rome",
    "name": "True Rome: Aventine & Testaccio Tour",
    "short": "True Rome: everyday life beyond the center. From ancient to modern, we explore Aventine Hill and Testaccio: Circo Massimo (with views of Palatine Hill), Basilica di Santa Sabina and the Orange Garden keyhole, Monte Testaccio, and Testaccio Market. Along the way, we weave in Rome’s food culture and its soccer passion.",
    "long": "<p>Are you a little weary of the crowds and want to spend a perfect morning discovering some of the lesser known places? We have your back! Join our True Rome Tour to learn how the Romans lived and how the city changed over the centuries, but most of all to discover the essence of Italian dolce vita – a life ruled by good food, aromatic coffee and passionate love for football. And don’t worry – even though we will wander off the city centre, there will be no shortage of wonderful historical sights and stunning views!</p>\n<p>We will meet at the monument to Giuseppe Mazzini and start the tour with stories about life in ancient Rome. We will then explore a peaceful, residential area nestled on the Aventine Hill, where wealthy Romans live, to admire the elegance of their villas and gardens. Passing beautiful gardens and charming parks known from cinema, we will experience places offering magnificent views of Rome and hidden treasures. The scenery will later change as we head to a former working-class district shaped by its industrial and food heritage, which has evolved into a vibrant area full of local culture, artistic spirit, and traditional Roman life. Our walk will finish just in time for an excellent lunch in a lively and colourful food market, right in the heart of this authentic neighbourhood—the very place where Romans come to eat honest, local food!</p>\n<p>So join us on a tour off the beaten track, through both quiet and trendy neighbourhoods, to discover the Roman way of life, driven equally by love of elegance, simple yet delicious food, excellent wine and, of course, football!</p>",
    "highlightsTitle": "- Circo Massimo\n- Aventine Hill\n- Orange Garden\n- Aventine keyhole\n- Testaccio District\n- Monte Testaccio\n- Testaccio Market",
    "highlightsDescription": "- Ancient stadium for chariot races that could hold 150,000 spectators and offers views of Palatine Hill.\n- A peaceful, residential area with elegant villas, home to wealthy Romans and beautiful gardens.\n- A charming park from the film \"The Great Beauty,\" offering a magnificent view of Rome.\n- A famous keyhole on the Aventine Hill through which you can see three countries at once.\n- A former working-class neighbourhood, now a hip area full of artists and traditional Roman families.\n- An artificial hill made from the fragments of an estimated 25 million ancient Roman amphorae.\n- A vibrant, colourful food market where locals come to eat authentic and honest Roman food.",
    "photoIds": [
      "35415",
      "35333",
      "35327",
      "35339",
      "35321",
      "35427",
      "35439",
      "35357",
      "49176",
      "49137",
      "29854"
    ]
  },
  {
    "city": "Rome",
    "name": "Secrets of the Vatican – Stories of Religion and Power",
    "short": "History of Christianity and papal power in Rome and the Vatican: we walk from San Giovanni dei Fiorentini across Ponte Sant’Angelo and past Castel Sant’Angelo, then along Via della Conciliazione to St. Peter’s Square, tracing the story of early Christians, the papacy, and Church–state politics. Note: the tour does not enter St. Peter’s Basilica.",
    "long": "<p>Rome is a city where <strong>history, religion, and power</strong> have been intertwined for centuries. Nowhere is this more evident than in the <strong>Vatican</strong>, the heart of Catholicism and one of the most influential places in the world. A place of deep <strong>spiritual significance, breathtaking architecture, and centuries of history</strong>. But beyond the grandeur of <strong>St. Peter’s Basilica</strong> and the lavish ceremonies that took place there for centuries, lies a hidden world of <strong>ambition, intrigue, and power struggles</strong> that shaped not only Rome but the entire world. This tour will take you through the <strong>fascinating history of Christianity, the rise of the papacy, and the secrets that have surrounded it for centuries</strong>. Join us as we walk the streets where <strong>saints, emperors, and popes made history!</strong></p>\n<h3 id=\"romethechurchandthemakingofhistory\"><strong>Rome, the Church, and the Making of History</strong></h3>\n<p>What is now the most powerful religion began in Rome in complete <strong>secrecy</strong>, with early followers meeting in underground catacombs to avoid persecution. That changed dramatically with <strong>Emperor Constantine</strong>, who, after a legendary battle at the <strong>Milvian Bridge</strong>, became the first Roman emperor to <strong>convert to Christianity</strong>. He allowed Christians to worship freely, which led to the construction of grand churches and the growing influence of the <strong>the clergy of Rome</strong>.</p>\n<p>Over time, the <strong>papacy</strong> became not just a religious authority but a <strong>political powerhouse</strong>, shaping the course of European history. <strong>Popes ruled Rome like kings</strong>, waged wars, commissioned masterpieces, and, at times, found themselves caught in scandal. The Vatican transformed from a place of worship into <strong>a center of global power</strong>, influencing emperors, nations, and diplomacy.</p>\n<h3 id=\"whatwillyouseeonthistour\"><strong>What Will You See on This Tour?</strong></h3>\n<p>We will begin our tour at <strong>San Giovanni dei Fiorentini</strong> church, a hidden gem with deep ties to the powerful Medici family and an important stop for pilgrims on their way to the Vatican. Here, we will set the stage for the rise of Christianity and the figures who shaped it, including <strong>St. Peter and St. Paul</strong>, Rome’s new “Romulus and Remus.” </p>\n<p>We will then follow in the footsteps of early Christians and pilgrims, making our way toward <strong>Ponte Sant’Angelo</strong>, the iconic bridge lined with angelic sculptures, leading to <strong>Castel Sant’Angelo</strong>. Originally built as <strong>Emperor Hadrian’s mausoleum</strong>, this imposing fortress later became a <strong>papal refuge during times of war and crisis</strong>. Shrouded in <strong>legends</strong>, it has witnessed dramatic events, from sieges to assassinations.</p>\n<p>Continuing along <strong>Via della Conciliazione</strong>, we will approach the Vatican’s grand entrance. This boulevard, commissioned by <strong>Mussolini</strong> as part of the agreement between the Vatican and Italy, symbolizes the delicate balance of power between <strong>Church and state</strong>. As we walk, we will discuss how the Vatican became the <strong>smallest country in the world</strong> and the impact of this status on global politics today.</p>\n<p>Our final destination will be <strong>St. Peter’s Square</strong>, one of the most famous landmarks in the world, the heart of Vatican City, where the magnificent <strong>St. Peter’s Basilica</strong> dominates the skyline. Designed by Gian Lorenzo Bernini, this vast piazza welcomes millions of visitors each year. Here, we will explain the deeper meaning behind its architectural features, from the colonnades symbolizing the embrace of the Church to the obelisk that witnessed some of the darkest moments of Rome’s history. Although we won’t enter <strong>St. Peter’s Basilica</strong> during the tour, we will provide <strong>useful tips</strong> on how to visit on your own, including information about <strong>entry rules and what to expect inside</strong>.</p>\n<p>As we move through <strong>Rome and Vatican neighborhoods</strong>, we will see much more than the world famous landmarks! We will show you <strong>small, easily missed details</strong>—from centuries-old inscriptions, hidden passages and symbols of papal power. All to give you a deeper understanding of the city of Rome beyond the tourist crowds.</p>\n<h3 id=\"whytakethistour\"><strong>Why Take This Tour?</strong></h3>\n<p>Join us and discover the medieval neighborhoods that once housed merchants and pilgrims, admire grand structures as well as hidden passages, see the ancient fortress that protected popes from invaders, and the road built to symbolize peace between the Vatican and Italy. Hear the stories of the papal state—where faith, ambition, and power intersect. Whether you are fascinated by history, religion, or the complexities of human ambition, this tour will offer a new perspective on one of the world’s most influential places. Join us and see Rome through the eyes of those who shaped it!</p>\n<hr />",
    "highlightsTitle": "- San Giovanni dei Fiorentini\n- Ponte Sant'Angelo\n- Castel Sant'Angelo\n- Via della Conciliazione\n- St. Peter's Square",
    "highlightsDescription": "- A hidden gem church with deep Medici family ties, once a key stop for pilgrims.\n- The iconic \"Angel's Bridge\", an ancient crossing leading pilgrims and visitors to the Vatican.\n- An imperial mausoleum transformed into an imposing papal fortress and a refuge during times of crisis.\n- Stories of how popes evolved from religious leaders into powerful kings who shaped European history.\n- A grand boulevard symbolizing the complex relationship between the Vatican and the Italian state.\n- The magnificent heart of Vatican City, designed to feel like the embracing arms of the Church.\n- Learn how this spiritual center became the world's smallest independent state and a global political powerhouse.",
    "photoIds": [
      "43056",
      "42990",
      "43014",
      "43020",
      "43038",
      "49111",
      "43062",
      "49067",
      "29854"
    ]
  },
  {
    "city": "Rome",
    "name": "Welcome to Rome! Historic Centre Guided Walking Tour",
    "short": "An introduction to Rome’s history and culture in the historic centre: we walk from the Pantheon, and the Trevi Fountain to Piazza Venezia with the Altar of the Fatherland, continue through the Roman Forum, and finish by the Colosseum.",
    "long": "<p>If you were to name one city that over its history had the biggest impact on the world, it would be precisely this one, Rome. The cradle of western civilization, that witnessed the zeniths of human achievement and the depths of chaos and downfall. With its unparalleled historical and artistic heritage, it is one of the world’s most visited, famous and beautiful cities. No wonder they say all roads lead here – once you arrive, Rome will steal your heart forever. Come and get ready for an endless discovery of art, history, culture, elegance and passion – get ready for Rome!</p>\n<p>The story of Rome begins with the myth of Romulus and Remus, twin brothers raised by a she-wolf, and Romulus’ founding the city in 753 BC. Despite these humble beginnings, its destiny was to become the heart of one of history’s greatest empires. Rome saw the rise of iconic leaders like Julius Caesar and Augustus, as well as architectural marvels like the Colosseum and the Pantheon. Its roads, aqueducts, and legal systems became the backbone of the empire, influencing civilizations to come. Finally ravaged by internal struggles and external invasions, Rome fell in 476 AD, marking the end of the ancient world and the beginning of the Middle Ages. Despite this, the city remained the centre of a new dominant religion, Christianity, shaping the course of European and world’s history. The Popes were commissioning works that eventually led to the Renaissance – a rebirth of art and learning. Artists like Michelangelo and Raphael, turned Rome into a gemstone, creating masterpieces like the Sistine Chapel and St. Peter’s Basilica. This process continued in the Baroque era with genius artists like Bernini and Borromini, creating swirling sculptures and dramatic fountains all over the city. The 18th century Age of Enlightenment, brought a new wave of rationalism and fascination in classicism, attracting intellectuals and artists from across Europe, who wandered the ancient streets of Rome in search of inspiration. Rome, soaked in history and art, became a pivotal stop on the Grand Tour, a rite of passage for Europe’s elite. Then came the tumultuous 19th century, a time of upheaval and rebirth. The Eternal City, witnessed the rise and fall of Napoleon, endured conflicts and uprisings, and finally emerged as the proud capital of a unified Italy. It evolved into the bustling metropolis we see today, seamlessly blending its rich past with the vibrancy of the present.</p>\n<p>During our “Welcome to Rome” tour, you will have the chance to discover Rome’s spirit and essence, wandering around its historic streets and soaking in its unique atmosphere. Apart from all the historical, architectural and cultural aspects of the city, there is something else we simply cannot miss showing you. The food! Rest assured that our guides will reveal their secret places to have a carbonara, amatriciana or a local favourite – cacio e pepe! And of course where to get the best Italian coffee and gelato afterwards!</p>\n<p>Join our tour to experience the enchanting beauty of Rome and discover why this city is much more than a destination – it’s a timeless experience that captures your heart and imagination. Book your tour today and prepare to fall in love with Rome!</p>",
    "highlightsTitle": "- The Pantheon\n- Trevi Fountain\n- Church of St. Ignatius of Loyola\n- Altar of the Fatherland\n- The Roman Forum\n- The Colosseum",
    "highlightsDescription": "- A former Roman temple turned into a church, where many influential Italians are buried.\n- An iconic fountain where you can participate in the famous ritual of throwing a coin into its waters.\n- The \"mirror church\" that gives a perfect example of how Baroque was made to impress\n- A magnificent marble monument located in Piazza Venezia, a testament to Italy’s unification.\n- The heart of ancient Rome, with remnants of temples and important government buildings.\n- The largest ancient amphitheatre ever built, once home to epic gladiatorial contests and spectacles.",
    "photoIds": [
      "34098",
      "34110",
      "34104",
      "49041",
      "34116",
      "34092",
      "29854"
    ]
  },
  {
    "city": "Sarajevo",
    "name": "Sarajevo at War: Siege, Yugoslavia & Tunnel of Hope",
    "short": "Historical tour of Sarajevo focusing on the Fall of Yugoslavia and the Siege across the city centre, Vratnik Hill and Mount Trebević: we visit the Yellow Fortress, Markale Market, Sniper Alley, the Tunnel of Hope Museum and the Trebević bobsleigh track, tracing war sites and the 1984 Olympics legacy.",
    "long": "<p>Sarajevo, located in the very centre of Bosnia and Herzegovina, has witnessed many important historical events. It first entered the pages of great history with the attack on the Austrian heir to the throne, Archduke Franz Ferdinand, in 1914. The assassination of Franz Ferdinand and his wife was the immediate cause of the outbreak of the First World War. More than half a century later, Sarajevo was again in the headlines around the world. The first time was in 1984 when the city, then ruled by the communist government of Yugoslavia, became the host of the 14th Winter Olympics. The event, which became known as the first Winter Olympics held in a socialist country, attracted 1,273 athletes from 49 different countries. The second time was eight years later, in 1992 during the longest and bloodiest siege in European history after the Second World War – the siege of Sarajevo. A city with a standard of living similar to that of western European countries became a war zone for 44 months. Besieged and constantly bombarded by Bosnian Serb troops who had taken up strategic positions in the hills around it, Sarajevo was almost completely cut off from the world. Its inhabitants were deprived of almost everything starting with electricity, food and water. The only escape route from the besieged city became a tunnel that its defenders dug underneath Sarajevo. It was named the Tunnel of Hope.</p>\n<p>Our 4-hour tour recounting these events starts in the very centre of Sarajevo. Together with a local guide, you will go to the so-called Yellow Fortress, the remains of the fortifications on Vratnik Hill above Sarajevo. You will visit the Kovači Cemetery, where many of the city’s defenders were buried, and the Markale Market, the site of multiple massacres that took place during the siege of Sarajevo. You will also see the destroyed hospitals from the war and other monuments and memorials that remember the siege of the city. Your guide will lead you down the street that was once known as Sniper Alley, you will also enter the Tunnel of Hope Museum and watch original films shot during the war.</p>\n<p>Participants of the Sarajevo tour will also travel back in time to the famous 1984 Winter Olympics. Among other things, they will visit the famous bobsleigh track on Mount Trebević from where the city was later shelled during the siege.</p>\n<p>The Fall of Yugoslavia, the Siege of Sarajevo tour will give you an insight into the history of the city that more than once impacted the fate of the whole world and will provide a lesson on the tragic events that happened here during the war of 1992-95.</p>",
    "highlightsTitle": "- Tunnel of Hope\n- Sniper Alley\n- Yellow Fortress\n- 1984 Winter Olympics\n- Markale Market\n- Kovači Cemetery\n- Siege of Sarajevo",
    "highlightsDescription": "- A museum dedicated to the tunnel that was the city's only lifeline during the 1992-95 siege.\n- The infamous boulevard where civilians were targeted by snipers during the longest siege in modern history.\n- Part of the old city walls, offering panoramic views and a history of Sarajevo's defence.\n- Explore abandoned Olympic venues like the bobsleigh track, a symbol of the city's pre-war glory.\n- The central city market, infamous as the site of two deadly massacres during the Sarajevo siege.\n- A memorial cemetery dedicated to the soldiers who lost their lives defending the city during the war.\n- An in-depth look at the tragic 44-month siege that shaped the city and its inhabitants.",
    "photoIds": [
      "32253",
      "32265",
      "20702"
    ]
  },
  {
    "city": "Sarajevo",
    "name": "Welcome to Sarajevo! Old Town & Baščaršija Guided Tour",
    "short": "Introduction to Sarajevo, its history and culture. We trace the city’s story from the Ottoman era and Austro-Hungarian rule to the 1990s siege, walking through Baščaršija and the Austro-Hungarian centre along the Miljacka River. Highlights include Baščaršija Square with the Sebilj Fountain, Sarajevo’s oriental town hall, the Latin Bridge, Gazi Husrev-beg Mosque, and the Cathedral of the Sacred Heart.",
    "long": "<p>Sarajevo was established by the Ottoman Empire, whose borders slowly expanded in the 16th century, occupying more and more European territories – starting with the Balkans. The result was unusual – a city inhabited by Slavs who were not Christians, but Muslims. For centuries, the influences of all religions mixed here: Croatian Catholicism with Serbian Orthodoxy, Islam, however, was dominant. To this day, the city’s skyline is dotted with dozens of minarets, and the imam calls to prayer five times a day. It is said that it is here in Sarajevo that the East meets the West.</p>\n<p>Although it is not of impressive size, Great History has left its mark in Sarajevo a number of times. Almost as many times as Sarajevo has changed its nationality. It was here in 1914 – back then Sarajevo was part of the Austro-Hungarian Empire – that Serbian nationalist Gavrilo Princip shot Archduke Franz Ferdinand which led to the Great World War. Much later in 1984 – when Sarajevo was part of federated Yugoslavia – the Winter Olympics were held here which served as a demonstration of the power and success of the southern Slavic state. Less than 10 years later, already as the capital of an independent Bosnia and Herzegovina, Sarajevo found itself in the midst of a fratricidal conflict and Europe’s largest war since the fall of Nazi Germany. For 47 brutal months, besieged by Bosnian Serbs and cut off from the world, the city showed courage and an unbreakable will to fight. It refused to surrender, despite daily bombings, lack of food, water, electricity… Today, many years after the war, it still proudly stands, rebuilt, home to all its inhabitants – Bosniaks, Serbs and Croats.</p>\n<p>During our walk we will visit Baščaršija, the old Ottoman centre of Sarajevo. We’ll see the bazaar, caravanserai (traditional Ottoman resting places for travelling merchants), mosques, tea rooms and Bosnian coffee rooms… Right next to them stand townhouses from the Austro-Hungarian era, Catholic churches and trendy modern cafes. Above all, however, we will get to know the local people, who, despite having suffered more than most of us, are still known for their warmth and great hospitality.</p>",
    "highlightsTitle": "- Baščaršija Square\n- Sarajevo City Hall\n- Latin Bridge\n- Ottoman Caravanserai\n- Gazi Husrev-beg Mosque\n- Sacred Heart Cathedral\n- Meeting of Cultures\n- Sarajevo Roses",
    "highlightsDescription": "- The heart of Sarajevo's old Ottoman bazaar with the iconic wooden Sebilj fountain.\n- An iconic pseudo-Moorish landmark, a symbol of the city beautifully restored after the war.\n- The historic site where the assassination of Archduke Franz Ferdinand triggered World War I.\n- A traditional Ottoman-era inn that provided a resting place for travelling merchant caravans.\n- The most important Islamic building in the country and a masterpiece of Ottoman architecture.\n- The largest cathedral in Bosnia and Herzegovina, representing the city’s Catholic heritage.\n- A unique line on the street where Ottoman and Austro-Hungarian architectural styles meet.\n- Concrete scars from mortar explosions, filled with red resin to commemorate siege victims.",
    "photoIds": [
      "20659",
      "20665",
      "20671",
      "20653",
      "20677",
      "20702"
    ]
  },
  {
    "city": "Sarajevo",
    "name": "Srebrenica Genocide Memorial Tour",
    "short": "A historical tour focused on the Srebrenica genocide in the 1992–1995 war; we travel from Sarajevo to Srebrenica and Potočari to visit the Potočari Memorial Centre, the memorial cemetery, the former Dutch battalion base with exhibitions, meet survivors, and see the town’s mineral springs and present-day life.",
    "long": "<p>Srebrenica, a town of mediaeval origin, whose name refers to silver mining, has become a symbol of the memory of the war in Bosnia and Herzegovina and the massacre that took place here. The Srebrenica tour is a unique route aimed at raising awareness of the genocide that took place here between 1992 and 1995, during the war in Bosnia and Herzegovina. </p>\n<p>The operation, code-named Krivaja 95, began on 6 July 1995, at around 3 a.m. On 11 July 1995, in the afternoon, the Armed Forces of Republika Srpska, operating under the orders of Radovan Karadžić, entered Srebrenica and took over the town. At the time, it was one of six security zones in the war-torn region, controlled by UN troops, to which Bosnian Muslims fled seeking safety and protection. The town, back then protected by a Dutch battalion, was surrendered to the Serbs and its defenders fled. In the following days, Serbian troops separated the men and boys from the women and children and set fire to their personal belongings. Then, prisoners were held in several different locations under extremely inhumane conditions. Finally, on 13 July 1995, in the afternoon, the mass executions began. On 13 July at least 1,000 people were killed. Shootings continued in the following days, with a total of more than 8,000 men and boys killed. When the truth about crimes committed in Srebrenica came to light, the commander of the Republika Srpska Armed Forces, Ratko Mladić, and the leader of the Bosnian Serbs, Radovan Karadžić, were sentenced to life imprisonment. </p>\n<p>Our day-long study tour to the site of the greatest crime in Europe since the end of the Second World War will begin in Sarajevo. From there, we will travel with a local guide through the strikingly beautiful mountain region to Srebrenica. Although you can still sense the tragic past while walking around the city, Srebrenica tries to build its future, the city lives, there are numerous mines and spas operating here.</p>\n<p>The Srebrenica massacre is considered the largest genocide in Europe since the Second World War. In July 1995, more than 8,000 Bosnian Muslims were killed at the hands of the Republika Srpska Armed Forces. Being here is the only way to pay respect to the victims and learn more about one of the most tragic periods in the Balkan history.</p>",
    "highlightsTitle": "- Srebrenica Genocide\n- Potočari Memorial Centre\n- Former UN Dutch Base\n- Meeting with Survivors\n- Modern Srebrenica\n- Bosnian War History",
    "highlightsDescription": "- Learn about the 1995 massacre, the largest genocide in Europe since World War II.\n- Visit the memorial and cemetery dedicated to the more than 8,000 victims of the genocide.\n- See exhibitions with original photos and footage documenting the tragic events that took place here.\n- Hear powerful firsthand accounts and personal stories from survivors of the 1995 massacre.\n- Witness how the town is rebuilding its future while coping with its tragic past.\n- Understand the broader context of the 1992-1995 war in Bosnia and Herzegovina.",
    "photoIds": [
      "32241",
      "32235",
      "32247",
      "20702"
    ]
  },
  {
    "city": "Seville",
    "name": "Welcome to Seville! Old Town Guided Walking Tour",
    "short": "We trace Seville’s multicultural and colonial history through the historic centre, riverfront, and Parque de María Luisa—visiting the Alcázar, Cathedral and Giralda, General Archive of the Indies, Torre del Oro, and Plaza de España—explaining how the city became Spain’s gateway to the Americas.",
    "long": "<p>Legend has it that Seville was founded by Heracles himself. While performing one of his twelve labours, he was to reach present-day Andalusia and erect columns there with the maxim “Non plus ultra” – there is nothing further… During the nearly three thousand years of its existence, the city was under the influence of many different civilizations: the Phoenicians, the Romans, the different Arab caliphates to be finally captured in the thirteenth century by the Castilians as part of the Reconquista. It became a true cultural melting pot, where Moorish architecture and Arab culture seamlessly blended with Christianity. To this day, the city impresses with its explosive mix of influences from around the world. But Seville’s true golden age began with the discovery of America by Christopher Columbus. He proved the mythical Heracles wrong! From the 16th century, the phrase “Non plus ultra” was replaced by another – “Plus Ultra”. – “Further beyond!” which had been on the Spanish flag since then. The city became literally the window to the world for the Spanish Empire and its main port – everyone and everything that sailed to the New World or came back from there had to pass through the Seville port. This meant only one thing – unimaginable wealth of the orange-scented capital of Andalusia, which then became one of the most powerful cities of Western Europe!</p>\n<p>Join us on a walking tour of Spain’s most important colonial city. Seville’s 16th-century wealth can be seen at every turn. Our walk will make you understand the decision of the creators of the TV series Game of Thrones, who chose this city as the setting for many episodes. With us, you’ll get to know this intoxicating city where ancient splendor, opulence of palaces and churches mixes with modern joie de vivre, flamenco, tapas and festivals famous throughout Spain!</p>",
    "highlightsTitle": "- Royal Alcázar\n- Seville Cathedral\n- Plaza de España\n- Royal Tobacco Factory\n- Torre del Oro\n- Archive of the Indies",
    "highlightsDescription": "- A stunning royal palace still in use and a famous filming location for “Game of Thrones”.\n- The largest Gothic cathedral in the world, which holds the tomb of Christopher Columbus.\n- A monumental square built for the 1929 Expo, offering a picture-perfect postcard view of the city.\n- One of Europe's oldest industrial buildings, the former tobacco factory now houses the city's university.\n- The “Golden Tower,” a historic military watchtower that guarded Seville's port during its Golden Age.\n- A UNESCO site holding priceless documents about the history of the Spanish Empire in the Americas.",
    "photoIds": [
      "17937",
      "17917",
      "17922",
      "17962",
      "17927",
      "17957",
      "17932",
      "17942"
    ]
  },
  {
    "city": "Sintra",
    "name": "Welcome to Sintra! Historic Centre Guided Walking Tour",
    "short": "Historical tour of Sintra’s UNESCO World Heritage palaces, castles, and gardens: we walk the historic centre and climb the surrounding hills—Jardim da Correnteza, Sintra National Palace, the Moorish Castle, Quinta da Regaleira, and the hilltop Palácio da Pena—tracing the city’s story from Moorish rule to its 19th-century Romantic makeover.",
    "long": "<p>Nestled atop rolling hills, along a beautiful coastline, the magical town of Sintra filled with ancient castles, elegant palaces and lush gardens promises breathtaking views and unforgettable memories. Perfectly located just outside the hustle and bustle of Lisbon, it was forever the retreat of kings, gentry, and artists. Visit with us the place where the beauty of nature and architecture act together to leave you enchanted and inspired. Come to visit Sintra and touch a wonder!</p>\n<p>This charming town, now a UNESCO World Heritage Site, has seen the footprints of various cultures and civilizations. From the early Celtic tribes and Romans who recognized the land’s mystical aura, Sintra‘s history took a defining turn during the 8th century with the Moorish conquest. They saw its strategic value and built a mighty castle here, remnants of which stand until today. The 15th and 16th centuries marked Sintra’s golden age, as Portuguese nobility, lured by its mesmerising beauty and cool climate, made it their sanctuary, away from the court’s intrigues. The Sintra National Palace rebuilt during this era reflects the time of prosperity with Portugal’s Age of Discoveries. However, Sintra‘s true transformation came in the Romantic era, in the 19th century – it sealed the town’s destiny as an everlasting muse for poets, artists, and dreamers, a legacy that remains relevant to this day.</p>\n<p>Join us on our journey through the heart of Sintra, starting with the Jardim da Correnteza, a true gem of gardening art. From there, we’ll walk around the historic town centre, pausing to marvel at the Sintra National Palace, a stunning architectural monument, known for its iconic chimneys and rich tapestry of Moorish tiles. We will admire the ancient Moorish Castle and its medieval ramparts. We will also stop at the mystique Quinta da Regaleira, a palace teeming with symbolic motifs, intriguing grottoes, and the famed Initiation Well. Our walk culminates at the crown jewel of Sintra, the Palácio da Pena, a Romanticist masterpiece perched high above the countryside, blending Gothic, Egyptian, Moorish, and Renaissance features into a spectacular fusion of imagination and grandeur.</p>\n<p>Don’t just dream of magic, come, witness it with your own eyes! Secure your spot on our next walking tour of Sintra and join us on an unforgettable journey through time and beauty!</p>",
    "highlightsTitle": "- Jardim da Correnteza\n- Historic Town Centre\n- Sintra National Palace\n- Moorish Castle\n- Quinta da Regaleira\n- Pena Palace",
    "highlightsDescription": "- A beautiful gem of gardening art and the starting point for the tour.\n- The charming heart of Sintra, a UNESCO World Heritage Site with ancient streets.\n- A stunning architectural monument known for its iconic twin chimneys and rich Moorish tiles.\n- A mighty medieval fortress with ancient ramparts, built during the Moorish conquest of the 8th century.\n- A mysterious palace filled with symbolic motifs, intriguing grottoes, and the famous Initiation Well.\n- A colourful Romanticist masterpiece blending Gothic, Moorish, and Renaissance styles on a hilltop.",
    "photoIds": [
      "29668",
      "29674",
      "29642",
      "29624",
      "29618",
      "29636",
      "21607"
    ]
  },
  {
    "city": "Split",
    "name": "Welcome to Split! Diocletian’s Palace & Old Town Guided Tour",
    "short": "Historical tour of Split’s Old Town focused on Diocletian’s Palace: we trace the city’s evolution from Roman imperial residence to Venetian-era streets and today’s lively waterfront. Highlights include the Golden Gate, Peristyle, Temple of Jupiter, Cathedral of St. Domnius, Pjaca (People’s Square), the Riva promenade, and selected Game of Thrones filming spots.",
    "long": "<p>There was once a ruler of the extremely powerful empire, covering almost the entire Europe, who got tired with the world, ruling and politics. He wanted to retire and enjoy the rest of his life in some beautiful, sunny place far away from the conflicts and court intrigues. And as an emperor he had all the money in the world to do that.</p>\n<p>It is not a fairy tale, it is the story of Roman emperor Diocletian, the first emperor who voluntarily abdicated. He used his fortune to build a magnificent palace and fortress on Dalmatian coast with windows of his imperial rooms overlooking the turquoise sea of Adriatic whose waters were reaching as far as the base of the palace walls. Such were the beginnings of the city of Split. Diocletian spared no money to adorn his palace with marble and gold and even columns and sphinxes imported from Egypt, creating one of the most impressive ancient Roman structures existing till the present day!</p>\n<p>It is somewhat bizarre to realise that the old town of Split is located inside that very palace and walking down its narrow streets and passages, sitting in cafes and restaurants, watching inhabitants living their lives, washing hanging from the windows, kids playing, we are still within the palace limits.</p>\n<p>Walking through Split we will get to know the palace and structures that were built for it, sometimes hard to see at first glance, with all the houses that were constructed later within the walls and buildings of the palace. Walk with us to see the preserved gates of the palace, named after precious metals: gold, silver, bronze and iron, stand on the monumental Peristyle where the emperor would address the public and where the Jupiter Temple, once the Diocletian mausoleum stands. Diocletian was a fierce persecutor of Christians and now they laugh last as the temple was converted into a church devoted to one of the emperor’s victims and instead of the Jupiter statue, the statue of St John the Baptist stands under the dome. Get to the Vestibule that once led to the emperor’s private apartments and try to imagine what life in his palace was like.</p>\n<p>After the glorious days of the palace came the inevitable destruction and sacking of the region by the Avars and the Slavs. Split entered the sphere of interest of the Byzantine Empire and then the Republic of Venice and the Kingdom of Croatia. Being surrounded by the Ottoman Empire its influences are visible here as well. The modern city of Split that reaches far beyond the old palace is the second-largest city of Croatia and one of the centres of Croatian culture.</p>\n<p>Come and visit with us this outstanding place, one of its kind in the world, listed on the UNESCO Heritage List and get amazed!</p>\n<p>Since the tour operates in the city’s historical center, please keep in mind it’s forbidden to walk in a bikini or shirtless.</p>\n<p>During the tour, alcohol consumption is not permitted. Make sure that your behavior does not affect other guests on the tour.</p>",
    "highlightsTitle": "- Diocletian's Palace\n- Golden Gate\n- Cathedral of St Domnius\n- Jupiter's Temple\n- Pjaca Square\n- Riva Promenade\n- Venetian Tower\n- Game of Thrones Sites",
    "highlightsDescription": "- A massive ancient Roman palace that forms the historic core of Split, a UNESCO World Heritage Site.\n- The main and most ornate entrance to Diocletian's Palace, reserved for the emperor and his family.\n- Originally Diocletian's mausoleum, now one of the world's best-preserved ancient Roman buildings and a Catholic cathedral.\n- An ancient Roman temple dedicated to Jupiter, later converted into a baptistery with a statue of St John.\n- The People's Square, the central hub of Split's city life, featuring a beautiful historic clocktower.\n- A vibrant waterfront promenade perfect for strolling, enjoying coffee, and soaking up the Adriatic atmosphere.\n- A remnant of Split's medieval fortifications, built during the era of Venetian rule to defend the city.\n- Discover filming locations from the hit TV series, including the cellars of Diocletian's Palace used as Meereen.",
    "photoIds": [
      "20492",
      "20480",
      "20474",
      "20498",
      "20486",
      "20468"
    ]
  },
  {
    "city": "Tel-Aviv",
    "name": "Welcome to Jaffa! Historic Centre Guided Walking Tour",
    "short": "Biblical and port history in Old Jaffa’s Old City and harbour: we start at Clock Tower Square, climb to the Hapisga Garden viewpoint, pass St. Peter’s Church and the 19th-century kurkar-stone alleys, descend to Jaffa’s historic harbour, and finish at the lively Flea Market.",
    "long": "<p>Join us to a guided tour in a town and a harbour that are thousands of years old, that are mentioned both in the Old and New Testament, where St. Peter, prophet Jonah and Napoleon Bonaparte spent days and nights. We will explore the rich history and vibrant culture of this ancient place, experiencing its unique atmosphere and significant landmarks.</p>",
    "highlightsTitle": "- Clock Tower Square\n- Jaffa's Harbour\n- Old City Alleys\n- St. Peter's Church\n- Hapisga Garden Viewpoint\n- Jaffa Flea Market",
    "highlightsDescription": "- The tour's starting point and a central landmark in the heart of historic Jaffa.\n- An ancient natural port that served as the historic gateway to Jerusalem for pilgrims.\n- Charming 19th-century narrow passages built from traditional Kurkar stone, perfect for a historic stroll.\n- A prominent Franciscan church commemorating the biblical visit of Saint Peter to the city of Jaffa.\n- A scenic spot offering panoramic views of the Tel Aviv coastline and the ancient port.\n- A vibrant and trendy market filled with colourful stalls, unique finds, and popular local restaurants.",
    "photoIds": [
      "28853",
      "47859",
      "47864",
      "24555"
    ]
  },
  {
    "city": "Tel-Aviv",
    "name": "Welcome to Tel Aviv! White City & Bauhaus Guided Tour",
    "short": "Architecture and origins of Tel Aviv’s UNESCO-listed White City: we trace the first neighborhoods along Rothschild Boulevard and the Railroad Park to Neve Tzedek by Yafo (Jaffa), and see Mayor Dizengoff’s House (site of Israel’s Declaration of Independence), the Great Synagogue, and Bauhaus architecture.",
    "long": "<p>A tour in the UNESCO proclaimed world heritage “white city” Tel Aviv – will take us through the landmarks that made it the first architecturally planned modern Hebrew city. From Tel Aviv’s first neighbourhood through Rothschild Blvd, the railroad park, and Neve Tzedek – the first Jewish neighbourhood outside Yafo (Jaffa), we will see the mayor’s house – the declaration of Israel’s independence site, the Great synagogue, International (Bauhaus) architecture and dreamhouse style architecture, as well as romantic alleys of Neve Tzedek.</p>",
    "highlightsTitle": "- The White City\n- Rothschild Boulevard\n- Independence Hall\n- The Great Synagogue\n- Neve Tzedek\n- The Railroad Park",
    "highlightsDescription": "- A UNESCO site known for its stunning collection of Bauhaus-style architecture.\n- The Champs-Élysées of Tel Aviv, showcasing the city's modern beginnings and first kiosk.\n- The former mayor's house where Israel's Declaration of Independence was signed in 1948.\n- An impressive and historic landmark that has served Tel Aviv's community for decades.\n- The first Jewish neighborhood built outside Jaffa, now a romantic and fashionable district.\n- A vibrant urban park built along the route of the historic Ottoman railway line.",
    "photoIds": [
      "28859",
      "47860",
      "28896",
      "28920",
      "28926",
      "28902",
      "28884",
      "28890",
      "28878"
    ]
  },
  {
    "city": "Tirana",
    "name": "Albanian Night: Culture & Dance Show",
    "short": "Nighttime cultural show in Tirana focused on Albanian traditions: we wear traditional clothes, learn their meaning and the Kanun, hear live UNESCO‑recognized Iso Polyphonia and join Valle circle dances with our dancers and cultural experts.",
    "long": "<p>Albanian Night is Tirana’s first-ever nightly show teaching visitors about Albanian culture with an all-encompassing traditional dance and music experience. </p>\n<p>The night unfolds with participants putting on traditional Albanian clothes and learning all about their significance in Albanian traditional life. As you dress up as an Albanian, you will find yourself entering the ancient world of the Kanun, Northern Albania’s time-honored code of conduct which dictated social hierarchies, familial relations and the rule of law.</p>\n<p>Guests will participate in and enjoy a range of performances and experiences showcasing local culture, all while interacting with each other and our experienced and knowledgeable staff, dancers and cultural experts. This experience is full of surprises and will immerse you in local culture and traditions as you soak up Albania’s intangible cultural heritage.</p>",
    "highlightsTitle": "- Traditional Albanian Clothes\n- Albanian Dance & Music\n- Iso Polyphonia\n- Valle Circle Dances\n- The Kanun\n- Village Life Immersion",
    "highlightsDescription": "- Wear authentic, traditional attire and learn about its cultural significance in Albanian life.\n- Experience a live show of traditional Albanian dances and music in the heart of Tirana.\n- Listen to a live performance of this unique, UNESCO-recognized Albanian folk singing tradition.\n- Participate in and enjoy energetic, traditional circle dances alongside performers and other guests.\n- Discover Northern Albania’s time-honored code of conduct that dictated social hierarchies and law.\n- Step into the role of an Albanian village resident for a night of cultural immersion.",
    "photoIds": [
      "41544",
      "41562",
      "41550",
      "41556",
      "26160"
    ]
  },
  {
    "city": "Tirana",
    "name": "Communist Tirana: Hoxha's Legacy",
    "short": "We cover Albania’s communist history in Tirana: we trace Hoxha’s regime through the city and enter BUNK’ART 2, a former nuclear bunker. We focus on Blloku and key state sites – the former Communist Party HQ, Ministry of Defense and National Museum of History.",
    "long": "<p>Discover a country that experienced an extreme form of communism, similar to North Korea, with an omnipresent secret police, travel bans, total state control over individuals, and a brutal policy of state-enforced atheism that left Albania as an atheist country today. Our knowledgeable guides will introduce you to the realities of life under the iron grip of Enver Hoxha, the infamous communist dictator who led Albania into isolation and left an indelible mark on the nation’s identity.</p>\n<p>The tour takes you through the streets of Tirana, providing insights into the country’s turbulent past and unveiling the remnants of the regime that shaped Albania for nearly five decades. You’ll enter BUNK’ART 2, a once-secret nuclear bunker that served as the Ministry of Foreign Affairs during Hoxha’s rule, now transformed into a museum recounting the terror and omnipresent control of the secret police as well as a contemporary art gallery. Learn about the dictator’s obsession with constructing thousands of bunkers across the country, an enduring testament to the paranoia that defined his rule.</p>\n<p>As you traverse the city, the Tirana Communist Tour will help you understand what made Albania’s communist experience unique and distinct from other Eastern European countries, such as Poland or Yugoslavia. Through captivating stories and immersive experiences, you’ll gain a new appreciation for the resilience and spirit of the Albanian people who lived through this dark chapter in their history.</p>\n<p>Only by comprehending Albania’s communist past can we truly understand its present-day capitalist society and the challenges the country faces as it continues to evolve. Join us on this unforgettable 3 hours journey as we explore Albania’s complex history and cultural legacy.</p>",
    "highlightsTitle": "- Blloku District\n- BUNK’ART 2 Museum\n- Enver Hoxha's Dictatorship\n- Communist Party Headquarters\n- The Bunker Phenomenon\n- National Palace of Culture\n- National Museum of History",
    "highlightsDescription": "- The formerly exclusive residential area for communist leaders, now a chic and vibrant entertainment hub.\n- A secret nuclear bunker turned museum detailing the terror of the communist secret police.\n- Learn about the infamous dictator who led Albania into decades of extreme communist isolation.\n- The former center of political power in Albania, symbolizing the ruling party's absolute control.\n- Discover the dictator's obsession with constructing thousands of bunkers as a testament to his paranoia.\n- A major cultural venue and monument built on the site of Tirana's old bazaar.\n- Albania’s largest museum, offering insights into the country's turbulent past and national identity.",
    "photoIds": [
      "25817",
      "25811",
      "25835",
      "25823",
      "26160",
      "25829",
      "25853",
      "25841",
      "25847"
    ]
  },
  {
    "city": "Tirana",
    "name": "Welcome to Tirana! Historic Centre Guided Walking Tour",
    "short": "Introduction to Tirana—its history and culture in the city centre: we trace the city’s story from Ottoman roots through communist rule to modern Albania. The walk begins at Skanderbeg Square with the Et’hem Bey Mosque and National History Museum, continues past BUNK’ART 2 and the Pyramid of Tirana, and ends in the lively Blloku district, once the exclusive quarter of the communist elite.",
    "long": "<p>Embark on a fascinating journey through the heart of Albania’s colourful capital, Tirana. From the remnants of its communist era to its rapid transformation into a bustling modern city, Tirana’s unique blend of history, art, and culture will leave you captivated.</p>\n<p>The tour begins at Skanderbeg Square, named after the national hero who fought against the Ottomans for Albania’s freedom. As the city’s central hub, the square is surrounded by a mix of modern and historic architecture like Et’hem Bey Mosque, Opera House or the Clock Tower and the impressive National Historical Museum. Among the others, the Museum hosts the exhibit dedicated to the most famous Albanian, Mother Teresa – born in Skopje, today’s North Macedonia, a Nobel Peace Prize laureate known for her humanitarian work as a catholic nun. She remains a symbol of compassion and national pride.</p>\n<p>Continuing we’ll explore the area around BUNK’ART 2, a former communist-era bunker transformed into a contemporary art space. It is the best place to learn about Albania’s dark past as one of the most isolated and repressive regimes in Europe often compared to North Korea, and its transformation into a creative hub. The topic of Albanian communism is long and complicated, so in order to understand it, we recommend joining the <a href=\"https://freewalkingtour.com/tirana/communist-tirana-tour/\">Tirana Communist Tour</a> after this tour. Our next stop will be the Pyramid of Tirana, an architectural marvel that serves as a testament to the city’s tumultuous past. Originally intended as a museum dedicated to the former communist dictator Enver Hoxha, the Pyramid now stands as a symbol of Tirana’s resilience and transformation. Finally, we’ll stroll through the lively Block district, once an exclusive enclave for communist elites, now a bustling area filled with bars, cafes, and restaurants. Our guides will introduce you to the vibrant atmosphere of this unique place, where you can feel the pulse of modern Tirana and dive into its nightlife. You might even hear the sounds of Dua Lipa, an Albanian-British singer and songwriter who has taken the international music scene by storm.</p>",
    "highlightsTitle": "- Skanderbeg Square\n- Et’hem Bey Mosque\n- National History Museum\n- BUNK'ART 2\n- Pyramid of Tirana\n- Blloku District\n- Mother Teresa",
    "highlightsDescription": "- Tirana's central hub, named after the national hero who fought the Ottomans for Albanian freedom.\n- A historic mosque and a key architectural landmark located on the city’s central Skanderbeg Square.\n- An impressive museum on Skanderbeg Square, featuring an exhibit dedicated to the beloved Albanian, Mother Teresa.\n- A former communist bunker, now an art space telling the story of Albania's isolated and repressive regime.\n- Originally a museum for dictator Enver Hoxha, now a symbol of Tirana’s resilience and transformation.\n- A former exclusive enclave for communist elites, now a bustling area with bars, cafes, and nightlife.\n- The most famous Albanian, Nobel Peace laureate known for her humanitarian work and symbol of national pride.",
    "photoIds": [
      "25889",
      "26167",
      "25895",
      "25871",
      "25859",
      "25790",
      "25883",
      "25877",
      "25901",
      "26160"
    ]
  },
  {
    "city": "Tirana",
    "name": "Tirana: Street Art & Modern Architecture",
    "short": "Street art and contemporary architecture of central Tirana – we trace the city’s recent history around Skanderbeg Square and nearby streets, seeing key works and buildings: The Cloud, the National Gallery of Arts graffiti wall, Maritim Plaza, Murat Toptani Street and the Opera House.",
    "long": "<p>This unique experience explores Tirana’s vibrant street art scene and modern architectural landmarks, offering a captivating perspective on the city’s evolving identity. Following the architecture of this developing city you will be able to follow the history of it as well.</p>",
    "highlightsTitle": "- Skanderbeg Square\n- Opera House\n- National Gallery Graffiti\n- The Cloud Installation\n- Murat Toptani Street\n- Alban Tower\n- Mount Tirana",
    "highlightsDescription": "- Tirana’s main plaza, a central hub featuring the city's most important buildings.\n- The National Theatre of Opera and Ballet, a key example of socialist-era architecture.\n- The exterior wall of the National Gallery of Arts, showcasing vibrant street art.\n- A unique, climbable art installation symbolising Tirana's modern and creative spirit.\n- A charming pedestrian promenade connecting key landmarks, lined with trees and cafes.\n- One of Tirana's tallest and most distinctive modern skyscrapers, altering the city skyline.\n- A striking new skyscraper development symbolising the city’s rapid architectural growth.",
    "photoIds": [
      "39468",
      "26160",
      "39432",
      "39456",
      "39444",
      "39462",
      "39426",
      "39450",
      "39438"
    ]
  },
  {
    "city": "Torun",
    "name": "Welcome to Toruń! Old Town Guided Walking Tour",
    "short": "Introduction to Toruń—its history and culture in the UNESCO-listed medieval Old Town: we trace the city’s story of the Teutonic Knights, the Hanseatic merchant republic, and the birthplace of Copernicus, along the Vistula harbour, while visiting key sites such as the Old Town Hall, ruins of the Teutonic Castle, the Leaning Tower, and the city’s Gothic churches—and learn about Toruń’s centuries-old gingerbread tradition.",
    "long": "<p>Have you heard about a crusader state funded in the North of Europe? It was established by the Teutonic knights, German crusaders when they still were active in the Middle East…. One of the first two towns in the newly conquered lands they founded was Torun. The town was growing quickly and becoming filled with many great buildings, such as big town hall, castle, churches and houses of wealthy merchants.</p>\n<p>Polish famous composer Fryderyk Chopin wrote to his friend after visiting Toruń in the summer 1825:</p>\n<p>“I have seen all the fortifications from all sides of the city, […] churches of gothic construction, founded by the Teutonic Knights […]. I saw the leaning tower, the famous town hall […] yet all of this does not surpass the gingerbread, oh that gingerbread!”</p>\n<p>Do you want to walk and listen to these and other stories? It’s simple, just come and set off for a stroll together! A journey through many centuries and stories!</p>",
    "highlightsTitle": "- Teutonic Knights\n- Hanseatic League\n- Nicolaus Copernicus\n- Toruń Gingerbread\n- Old Town Hall\n- Leaning Tower\n- Vistula River Port",
    "highlightsDescription": "- The German crusading order that founded Toruń and ruled the region during the Middle Ages.\n- Toruń’s role as a powerful member of the medieval alliance of Northern European merchant cities.\n- The revolutionary astronomer born in Toruń, who is considered to be the first modern scientist.\n- The city’s famous traditional spiced biscuit, a local specialty beloved for centuries.\n- A magnificent Gothic building at the heart of Toruń’s prosperous medieval merchant republic.\n- A famous and distinctive part of the medieval town walls that has tilted over time.\n- The historic river highway that made Toruń a crucial hub for medieval trade and transport.",
    "photoIds": [
      "14553",
      "48594",
      "48587",
      "48670",
      "48677",
      "48616",
      "48615",
      "48669",
      "48607",
      "48692",
      "21808"
    ]
  },
  {
    "city": "Torun",
    "name": "Toruń Private Custom Tour",
    "short": "We cover Toruń’s medieval and scientific heritage in the Old Town and along the Vistula riverfront—Old Town Market Square, Town Hall, House of Nicolaus Copernicus, the Leaning Tower, and the Teutonic Castle ruins.",
    "long": "<p>A private tour is a great opportunity for people who have limited time and cannot join our regular FREE walking TOURs or simply prefer staying in a small group of friends.</p>\n<p>It is you who chooses when the tour should start and what should be its topic. If you are not sure what do you want to visit during the tour, let us know and we will help you plan the tour that fits best your needs and interests.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including <a href=\"https://freewalkingtour.com/private-offer/\"> <strong>prices</strong> </a>, dates and booking rules.</p>\n<p>What is more, you do not have to worry about finding the guide at the meeting point – they can meet you in any place in the city or pick you up from your hotel. You don’t have to follow our strict schedule of regular tours, we can make a tour according to your needs.</p>\n<p>Let us know what kind of group are you (students, school group, seniors, group of friends, group of colleagues on a business trip, etc.) and what are your interests and we will do our best to prepare for you a tour that fits your needs and expectations.</p>\n<p><strong>LANGUAGES:</strong></p>\n<p>We can arrange private tours for you in different languages:</p>\n<p>English</p>\n<p>Polish</p>\n<p><strong>PRICES & BOOKING RULES</strong></p>\n<p>Every group or visitor that comes to us has different needs, interests, and expectations. Because of that, we treat every one of them individually to make sure that our services will meet their expectations. If your time is limited and you would like to try more than one tour or you would like to see something else, let us know and we will prepare a tailor-made tour for you. The final price can be varied. It will depend on the language and duration of your tour.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including prices, dates and booking rules.</p>\n<p>We kindly ask you to book private or group tours in advance, otherwise, we cannot guarantee that a guide will be available.</p>",
    "highlightsTitle": "- Old Town Toruń\n- Scientific Toruń\n- Private Group Tour\n- Custom Itinerary\n- Flexible Start Time\n- Convenient Pickup",
    "highlightsDescription": "- A guided walk through the city's historic medieval quarter, one of its standard tour options.\n- A tour focused on the rich scientific history of the city, the birthplace of Copernicus.\n- Enjoy an exclusive experience tailored for your friends, family, or colleagues away from large crowds.\n- A personalized tour route designed to match your group's unique interests and must-see sights.\n- You choose the tour's starting time, giving you complete control over your own travel schedule.\n- Your guide can meet you directly at your hotel or any other designated place in the city.",
    "photoIds": [
      "48662",
      "48583",
      "48698",
      "48676",
      "48650",
      "48618",
      "48659",
      "48696",
      "48665"
    ]
  },
  {
    "city": "Warsaw",
    "name": "Alternative Warsaw: Praga District Tour",
    "short": "Multicultural, alternative Praga on Warsaw’s right bank — one of the few districts largely intact after WWII. We explore the heart of Old Praga with its courtyards and street shrines, visit Catholic, Orthodox, and Jewish places of worship, learn about the so-called “Hollywood ghetto”, and see street art and street trade. The walk also takes us to the Warsaw Zoo’s bear enclosure, a quirky local landmark.",
    "long": "<p>There is Warsaw you know. The Old Town, the modern centre, rich shops, and restaurants. But there is also another side. Neglected, dark, and forbidden. Are you ready to play Alice in Wonderland and adventure into the unknown? Let us take you to Praga, the thrilling right bank district of Warsaw.</p>\n<p>For many years, the other side of the river was a separate city. Some would say the two sides of Warsaw are still completely different worlds. The architecture of Praga stands out from the rest of the city as it was mostly unharmed during the Second World War. For decades it was considered a no-go zone in Warsaw. Today, things have changed.</p>\n<p>With our guides, you will see the multicultural and alternative Praga. Catholic, Orthodox, and Jewish places of worship standing next to each other, dilapidated buildings and backyards, street art, and street trade. The so-called “Hollywood ghetto”, an area so run down that it could be used as a set in a Holocaust movie almost with no scenography.</p>\n<p>If you are interested in discovering the alternative face of Warsaw check out also our <a href=\"https://freewalkingtour.com/tours/warsaw-street-art/\">Warsaw Street Art</a> free tour!</p>",
    "highlightsTitle": "- Praga District\n- Pre-War Architecture\n- Courtyard Shrines\n- \"Hollywood Ghetto\"\n- Street Art",
    "highlightsDescription": "- Warsaw's thrilling right-bank district, unharmed during WWII and considered a forbidden zone for decades.\n- See original buildings that survived the war, offering a glimpse into Warsaw's past.\n- Discover unique, hidden religious shrines located in the backyards of old tenement houses.\n- An area so run down it was used as a film set for Holocaust movies.\n- Explore the vibrant murals and graffiti that define the alternative character of the district.",
    "photoIds": [
      "48179",
      "48177",
      "48174",
      "48172",
      "48168",
      "21761",
      "48173",
      "48169",
      "7962",
      "47879"
    ]
  },
  {
    "city": "Warsaw",
    "name": "Chopin's Warsaw: Live Piano Concert",
    "short": "A Chopin concert in Warsaw that highlights the composer’s early years in the city. At Chopin Point Warsaw, we enjoy a live piano recital, introduced with a short talk about Chopin and the performers, and accompanied by a welcome drink of mead or natural apple juice.",
    "long": "<p>Did you know that Fryderyk Chopin spent the first 20 years of his life in Warsaw?</p>\n<p>Visit our venue and experience unique moments with Chopin in Warsaw. At Chopin Point Warsaw you can listen to Chopin concerts performed by talented and esteemed pianists. We are in the city where the great composer took his first steps as a pianist and began to develop his talent. We present a unique experience where the extraordinary interpretations of Chopin’s masterpieces will take you on an exciting musical journey.</p>\n<p>At the beginning of the event, you will be welcomed with a glass of mead – a traditional Polish drink – or natural apple juice. Our host will introduce you to some interesting facts about Fryderyk Chopin’s life in Warsaw and the performing artists. The music lasts 45-50 minutes and the whole event lasts up to an hour.</p>",
    "highlightsTitle": "- Live Chopin Concert\n- Chopin's Warsaw Story\n- Traditional Welcome Drink\n- Acclaimed Pianists\n- Chopin Point Venue",
    "highlightsDescription": "- An intimate performance of Chopin’s famous masterpieces by highly talented and esteemed pianists.\n- Learn facts about the composer’s early life and musical journey in the Polish capital.\n- Enjoy a complimentary glass of Polish mead, a traditional honey beverage, or apple juice.\n- Listen to extraordinary interpretations of Chopin's works performed by highly talented artists.\n- Experience a unique concert in a special venue in Warsaw dedicated to Chopin's music.",
    "photoIds": [
      "24766",
      "31082",
      "31077",
      "18220",
      "31072",
      "18225",
      "17973"
    ]
  },
  {
    "city": "Warsaw",
    "name": "Communist Warsaw: Architecture & Daily Life",
    "short": "We trace Warsaw’s communist era (1945–1989) through the city center – Palace of Culture and Science, Grzybowski Square, Ministry of Agriculture, a milk bar – and talk about architecture, propaganda, daily life and opposition.",
    "long": "<p>The thing you simply cannot help not to notice when arriving in Warsaw is the Palace of Culture and Science. Despite the new development and skyscrapers built in the last two decades, the 46-floor Gotham-like colossus still remains the city’s icon. Let us tell you the story behind it: the story of Warsaw between 1945 and 1989. Rebuilt from a sea of ruins and transformed into the grey capital of the communist paradise: the People’s Republic of Poland.</p>\n<p>Communism left its marks all over the city; it was meant to overshadow everything that was before and that was to come in the future. Let us show you some of the iconic post-war architectural landmarks and learn about their role in shaping a new kind of person – Homo Sovieticus. Hear a story of control, terror, and propaganda, but also of the absurdities of daily life under communism. Understand the everyday struggle to have a normal life in a situation that, from today’s point of view, was very abnormal.</p>\n<p>We will talk about:</p>\n<p>· everyday life in the People’s Republic of Poland  </p>\n<p>· the inner workings of communist propaganda  </p>\n<p>· examples of monumental architecture  </p>\n<p>· anti-communist movement</p>",
    "highlightsTitle": "- Palace of Culture\n- Grzybowski Square\n- Ministry of Agriculture\n- Milk Bar\n- Communist Propaganda\n- Daily Life Under Communism",
    "highlightsDescription": "- An iconic skyscraper, a controversial \"gift\" from Stalin that still dominates the Warsaw skyline.\n- A historic square showing the contrast between pre-war architecture and post-war communist reconstruction.\n- A monumental building and a prime example of the imposing Socialist Realist architectural style.\n- A traditional Polish cafeteria, a culinary remnant of the communist era offering affordable meals.\n- Understand the mechanisms of control used by the state to shape public opinion.\n- Discover the absurdities and struggles of daily existence in the People's Republic of Poland.",
    "photoIds": [
      "14310",
      "23770",
      "47929",
      "47940",
      "47939",
      "47930",
      "47936",
      "47933",
      "47935"
    ]
  },
  {
    "city": "Warsaw",
    "name": "Jewish Warsaw – Guided Walking Tour",
    "short": "Jewish Warsaw history and heritage. We trace pre-war Jewish life, the WWII ghetto, and its aftermath across the former ghetto area and Muranów. Highlights include Grzybowski Square and Próżna Street, the Nożyk Synagogue, the Ghetto Heroes Monument, and finishing at the POLIN Museum of the History of Polish Jews.",
    "long": "<p>Before the Second World War, Warsaw was the second-largest Jewish city in the world. The only place with a larger Jewish community was… New York! </p>\n<p>For centuries, Jews played an active role in the city’s life during good times and bad. In the 19th century, Jews joined other Varsovians in their struggles against occupying powers and participated in Polish uprisings. During the Interwar Period, Jewish Warsaw flourished. Hundreds of artists, actors, writers, and journalists called the city home. Its cultural life was incomparable to any other time and place in history.</p>\n<p>Learning about the pre-war diversity and richness of Jewish Warsaw helps us understand the scale of the destruction that took place during the Holocaust. But, alongside stories of persecution and death, there are stories of the resilience and unimaginable bravery of those who fought without hope. </p>\n<p>The wounds and scars of the Second World War and Holocaust will never heal. But the story of Jewish Warsaw is not only the story of the past, but also the story of today: the young, diverse and energetic Jewish community that optimistically looks to the future. </p>\n<p>To discover all of this, just come and join us and be ready for an emotional journey through history!</p>\n<p><strong>The last stop is near the POLIN Museum.</strong></p>",
    "highlightsTitle": "- Grzybowski Square\n- Nożyk Synagogue\n- Ghetto Wall Remnants\n- Ghetto Footbridge\n- Leszno Street Courts\n- Ghetto Heroes Monument\n- POLIN Museum",
    "highlightsDescription": "- A rare surviving area of pre-war Jewish Warsaw next to the former ghetto.\n- Warsaw's only pre-war synagogue that survived WWII and is still in use today.\n- See original buildings and wall fragments that once formed the ghetto border on Waliców street.\n- Monument commemorating the wooden bridge that connected the small and large ghettos over Chłodna Street.\n- A former contact point between the ghetto and the “Aryan side,” used for smuggling and escapes.\n- A powerful memorial to the fighters of the 1943 Warsaw Ghetto Uprising.\n- Modern museum covering 1000 years of Polish Jewish history, where the tour concludes.",
    "photoIds": [
      "3827",
      "48113",
      "48092",
      "48116",
      "48090",
      "48096",
      "48101",
      "48104",
      "48105",
      "47950"
    ]
  },
  {
    "city": "Warsaw",
    "name": "Warsaw Pub Crawl",
    "short": "Nightlife pub crawl in Warsaw’s city center: we start at a bar with a 1-hour open bar, play drinking games, then visit three more bars and finish at a club—entry included at each stop and a shot in every venue.",
    "long": "<p>Our nightlife experience is not only about cool places we visit but also about our lovely guides that make your time in Warsaw outstanding! Trust the locals and enjoy the best nightlife spots in the city with our Pub Crawl, whether it’s a weekend or a weekday! We have been running those amazing tours since 2011.</p>\n<p>Throughout the night, our guides will encourage you to take part in the crazy challenges which will let you get outside your comfort zone and give space in your head for unforgettable experiences. The night ends at a cool club in the city center with free VIP entry.</p>",
    "highlightsTitle": "- Open Bar\n- Drinking Games\n- Local Bars & Club\n- Free Welcome Shots\n- Fun Challenges\n- VIP Club Entry",
    "highlightsDescription": "- Kick off the night with one hour of unlimited beer, wine, and mixed drinks.\n- Break the ice and bond with fellow crawlers over fun, guide-led drinking games.\n- Visit a curated selection of three of the city’s best local bars and a club.\n- Receive a complimentary shot at every single venue you visit on the tour.\n- Step outside your comfort zone with exciting challenges for an unforgettable night.\n- End the night by skipping the line with free VIP entry to a cool downtown club.",
    "photoIds": [
      "5005",
      "5010",
      "4995",
      "16727"
    ]
  },
  {
    "city": "Warsaw",
    "name": "Sins of Warsaw: Crime & Scandal Tour (18+)",
    "short": "Warsaw’s 20th-century criminal underworld. In the city centre, we trace gangs, prostitution, hangovers, and even an assassination at real sites — from Zachęta (President Narutowicz), Krakowskie Przedmieście, to Hala Mirowska — uncovering the people, rackets, and places behind the headlines.",
    "long": "<p>Most tour guides will show you representative buildings of the city, its beautiful palaces, and will tell you all the interesting stories about the national heroes. However, that’s not a full view of the city. Every city needs a balance: yin and yang, elegant churches and shady places, brave heroes and bad criminals.</p>\n<p>During this tour, our tour guide won’t avoid difficult topics. They will focus on them.</p>\n<p>This tour will be all about the flavours of the criminal underworld of Warsaw of the XX century. You will hear the stories of murderers, gangs, prostitutes, and vodka.</p>",
    "highlightsTitle": "- Warsaw's Underworld\n- The Gang of Porters\n- Presidential Assassination\n- Warsaw's Red Light\n- Vodka and Hangovers\n- Criminal Hierarchy",
    "highlightsDescription": "- Explore the dark side of 20th-century Warsaw, focusing on its infamous criminals, gangs, and shady places.\n- Learn about the notorious criminal organization that operated in pre-war Warsaw and controlled parts of the city.\n- Uncover the story behind the shocking murder of Gabriel Narutowicz, Poland's first president after WWI.\n- Delve into the lives of prostitutes in the old city and discover the contents of their working kits.\n- Learn about vodka's role in the criminal world and discover traditional Polish ways to cure a hangover.\n- Understand the different types of criminals that operated in the city and how their underworld was structured.",
    "photoIds": [
      "20434",
      "21761"
    ]
  },
  {
    "city": "Warsaw",
    "name": "Warsaw at War: WWII & the Uprisings",
    "short": "We trace Warsaw’s WWII history—occupation, the Ghetto, and the 1944 Uprising—across the Old Town and city centre: Zygmunt’s Column, Monument of the Little Insurgent, Warsaw Uprising Monument, Ghetto boundary markers, and the Tomb of the Unknown Soldier.",
    "long": "<p>Imagine a city that had almost 1.4 million people before World War II. Six years later, its ruins were inhabited by only several thousand survivors. Imagine a city that fought against the occupiers from the very first till the very last day. Imagine a city where every street, every corner, every courtyard has a wartime story to tell.</p>\n<p>First, there was 1939 and the German and Soviet invasions. Then, years of occupation. In 1940, the Germans created the largest ghetto in occupied Europe here, which was razed to the ground in 1943 after the crushing of the Jewish uprising. A year later, the city was again in flames – this time because of the Polish national uprising of 1944. After 63 days of heavy urban fighting, it was crushed while the Red Army stood idle on the other side of the Vistula River. When they finally crossed over, the city and its people were no more.</p>\n<p>Enter a world of unimaginable terror and brutality. Understand people’s eagerness to fight back. Feel the grave meaning of the decisions they had to make. Listen to stories of bravery and cowardice, loyalty and betrayal, but also of daily life under the occupation. Enter a different world – the world of Warsaw at war.</p>\n<p>The exact tour route can vary depending on the guide.</p>",
    "highlightsTitle": "- Zygmunt's Column\n- Little Insurgent Monument\n- Warsaw Ghetto\n- Warsaw Uprising 1944\n- Warsaw Uprising Monument\n- Tomb of the Unknown Soldier",
    "highlightsDescription": "- Iconic city landmark that was toppled during the 1944 Uprising and later rebuilt.\n- A moving tribute to the child soldiers who fought and died during the Warsaw Uprising.\n- Site of the largest Jewish ghetto in occupied Europe, destroyed after the 1943 uprising.\n- The heroic 63-day struggle by the Polish resistance to liberate Warsaw from German occupation.\n- A dramatic monument dedicated to the heroes and victims of the city-wide 1944 rebellion.\n- A national monument honoring the unidentified soldiers who have died fighting for Poland's freedom.",
    "photoIds": [
      "48152",
      "3821",
      "48128",
      "48164",
      "48158",
      "21761",
      "48035",
      "48023",
      "48157",
      "48154",
      "48156"
    ]
  },
  {
    "city": "Warsaw",
    "name": "Welcome to Warsaw! Historic Centre Guided Walking Tour",
    "short": "Introduction to Warsaw—its history and culture, destruction and rebirth: we walk the Royal Route along Krakowskie Przedmieście to the UNESCO-listed Old Town, starting by the Copernicus Monument and covering the University of Warsaw, Presidential Palace, Royal Castle, and the Old Town Market Square, all rebuilt after near-total destruction in WWII.",
    "long": "<p>A city that suffered tremendous losses over the last 100 years. Come and see how it rose like a phoenix from the ashes: experience the invincible spirit of Warsaw and learn about the heroism of its people.</p>\n<p>Today’s Warsaw is like a patchwork quilt. A few original, grand pre-war buildings; the fully reconstructed and colourful Old Town, a UNESCO World Heritage Site; hulking communist architecture and modern skyscrapers. It is different than any other place you’ve seen. The architectural fabric of the city reflects its unique, and often tumultuous, history. Over the centuries, Warsaw has been the setting for many extraordinary events and people: the adoption of the world’s second-oldest democratic constitution in 1791, one of the most decisive battles in history, the music and life of Chopin, and the birth of Marie Skłodowska-Curie, the only person to receive the Nobel Prize in two different scientific fields. The wartime deeds of Hitler and Stalin left an indelible mark on the city.</p>\n<p>During our tour we’ll discover both the past and the present. We’ll start at Krakowskie Przedmieście at the monument of Nicolaus Copernicus to see one of the most beautiful and lively streets of the city with its astonishing buildings, wide pedestrian areas, restaurants, shops, and greenery, and we’ll finish in the Old Town – the historical heart of Warsaw.</p>\n<p>But Warsaw is not only about the past. The thriving cultural scene, theater, music, fascinating museums, world-class restaurants and shops make visit to this city a stimulating experience.</p>\n<p>Come and join our tour to understand Warsaw, Poles and Poland’s role in world history.</p>\n<p>After visiting the historic centre we recommend taking <a href=\"https://freewalkingtour.com/tours/jewish-warsaw/\">Jewish Warsaw</a>, <a href=\"https://freewalkingtour.com/tours/warsaw-at-war/\">Warsaw at War</a> and <a href=\"https://freewalkingtour.com/tours/communist-warsaw/\">Communist Warsaw</a> free tours to understand Warsaw’s complicated history better!</p>",
    "highlightsTitle": "- Copernicus Monument\n- University of Warsaw\n- Presidential Palace\n- Royal Castle\n- Zygmunt's Column\n- St. John's Cathedral\n- Old Town Market Square",
    "highlightsDescription": "- Monument to the famous Polish astronomer who stopped the sun and moved the Earth.\n- The largest and one of the most prestigious universities in Poland, founded in 1816.\n- The official residence of the Polish head of state on Krakowskie Przedmieście street.\n- Reconstructed former residence of Polish monarchs located at the entrance to the Old Town.\n- A monument commemorating King Sigismund III Vasa, who moved Poland's capital to Warsaw.\n- One of Warsaw's oldest churches and the mother church of the Archdiocese of Warsaw.\n- The historic heart of Warsaw, completely rebuilt after WWII and now a vibrant city centre and a UNESCO site.",
    "photoIds": [
      "48025",
      "48055",
      "16900",
      "48028",
      "48049",
      "15389",
      "48041",
      "47888",
      "48051",
      "21761",
      "48074"
    ]
  },
  {
    "city": "Warsaw",
    "name": "Warsaw Private Custom Tour",
    "short": "Enjoy a tailor-made walk focused on the themes that interest you—Old Town, Jewish Warsaw, the communist era, alternative Warsaw, or World War II. Depending on your chosen focus, the route can include the Old Town, City Centre, the former ghetto, and Praga, with highlights such as the Royal Castle, Old Town Market Square, Ghetto Heroes Monument, Palace of Culture and Science, and the Warsaw Uprising Monument.",
    "long": "<p>A private tour is a great opportunity for people who have limited time and cannot join our regular FREE walking TOURs or simply prefer staying in a small group of friends.</p>\n<p>It is you who chooses when the tour should start and what should be its topic. If you are not sure what do you want to visit during the tour, let us know and we will help you plan the tour that fits best your needs and interests.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including <a href=\"https://freewalkingtour.com/private-offer/\"> <strong>prices</strong> </a>, dates and booking rules.</p>\n<p>What is more, you do not have to worry about finding the guide at the meeting point – they can meet you in any place in the city or pick you up from your hotel. You don’t have to follow our strict schedule of regular tours, we can make a tour according to your needs.</p>\n<p>Let us know what kind of group are you (students, school group, seniors, group of friends, group of colleagues on a business trip, etc.) and what are your interests and we will do our best to prepare for you a tour that fits your needs and expectations.</p>\n<p><strong>LANGUAGES:</strong></p>\n<p>We can arrange private tours for you in different languages:</p>\n<p>English</p>\n<p>Polish</p>\n<p>Spanish</p>\n<p>German</p>\n<p>French</p>\n<p><strong>PRICES & BOOKING RULES</strong></p>\n<p>Every group or visitor that comes to us has different needs, interests, and expectations. Because of that, we treat every one of them individually to make sure that our services will meet their expectations. If your time is limited and you would like to try more than one tour or you would like to see something else, let us know and we will prepare a tailor-made tour for you. The final price can be varied. It will depend on the language and duration of your tour.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including prices, dates and booking rules.</p>\n<p>We kindly ask you to book private or group tours in advance, otherwise, we cannot guarantee that a guide will be available.</p>",
    "highlightsTitle": "- Old Town Warsaw\n- Jewish Warsaw\n- Communist Warsaw\n- Alternative Warsaw\n- Warsaw at War",
    "highlightsDescription": "- Explore the city's heart, beautifully rebuilt after its destruction in World War II.\n- Discover the rich history and heritage of Warsaw’s once-thriving Jewish community.\n- Uncover the legacy of the People's Republic, its ideology, and imposing socialist-realist architecture.\n- Experience the city's bohemian side, exploring street art, trendy spots, and off-the-beaten-path districts.\n- Learn about Warsaw's heroic WWII story, including the 1944 Uprising and its near-total destruction.",
    "photoIds": [
      "47888",
      "16900",
      "13068",
      "3821",
      "48164",
      "48023",
      "1899",
      "20221",
      "47880",
      "48111"
    ]
  },
  {
    "city": "Wroclaw",
    "name": "Wrocław City Game: Old Town Riddles",
    "short": "Interactive City Game in Wrocław’s Old Town: explore the Main Square area while completing fun challenges at key sites including the Town Hall, Plac Solny, Ulica Więzienna, the University of Wrocław, and the Ossolineum—all under the guidance of an engaging game master.",
    "long": "<p>What is the best way to learn? By having fun, of course! And what is the best way to learn about a city? Of course, fun and active participation in our city game! So let’s discuss the plan! First, gather a team: it can be your family or friends, or you can try it alone. Second, sharpen your senses: an urban game is an activity in which perceptiveness can be a great asset, and a constant desire to learn will inevitably lead to victory in the game! Thirdly, whether you know the city or not is not important, everyone has a chance to fight for victory. Like a string, a simple map, which will be attached to the tasks, will lead the participants everywhere. Fourth and last, just come and try to face the questions that we have prepared.</p>\n<p>The reward will be fun and knowledge about the city, which you will gain during the walk! The master of the game will be our guide, <strong>Maciej Maliński</strong>: a historian, musician, and storyteller, whose sense of humour is hard to forget. Let yourself be charmed by his positive energy!</p>\n<p>Game rules:</p>\n<ul>\n<li>time to walk the route: 1 h 45 min – 2 h  </li>\n<li>equipment needed: pen/pencil  </li>\n<li>minors can only play with a guardian  </li>\n<li>cost: 50 PLN adults; 30 PLN children and youth up to 18 years old; children under 6 years of age – free  </li>\n</ul>\n<p>Payment by cash or card on the spot.</p>\n<p>See you there!</p>",
    "highlightsTitle": "- Wrocław City Game\n- Town Hall\n- Salt Square\n- Prison Street\n- University of Wrocław\n- The Ossolineum\n- Main Square Area",
    "highlightsDescription": "- An interactive team challenge exploring the city by solving puzzles and answering questions.\n- A historic administrative building located in the centre of Wrocław's Main Market Square.\n- A picturesque square adjacent to the Main Market, traditionally known for its flower market.\n- A historic street named after the old city prison that was once located here.\n- One of Poland’s oldest universities, known for its stunning Baroque architecture.\n- A significant Polish cultural foundation, publishing house, and national research centre.\n- The medieval heart of Wrocław, where you will navigate and discover hidden details.",
    "photoIds": [
      "18060",
      "49239",
      "21791",
      "49240",
      "49268"
    ]
  },
  {
    "city": "Wroclaw",
    "name": "Beers of Wrocław: A Craft Tasting Walk",
    "short": "Introduction to Polish beer culture and tasting: learn how beer is brewed, discover its key ingredients, and compare styles such as pilsner, wheat beer, IPA, and Baltic porter with expert guidance on flavour profiles and tasting tips. The tour includes visits to local craft breweries and pubs, and is suitable for vegetarians and vegans, but not recommended for gluten-free diets.",
    "long": "<p>You probably tried some beers in your life. Classic – as lagers or wheat beer are great but maybe there is something more. There are so many different beer styles that you can get easily confused. Let us be your guide to the world of beer. Ever wonder how it is made actually? What is the main ingredient? How to recognize them easily? Come with us! It is like a starter pack into the Polish world of beer. If you are already an experienced beer drinker, try us! We can arrange a tour for all levels of beer initiation! Start a new adventure that can change your life!</p>\n<p>Please inform the tour guide about your allergies before starting the tour. The tour is suitable for vegetarians and vegans. But is not recommended for person on a gluten-free diet. Beer is at customers own expense.</p>\n<p>This tour is also available as a private tour on request – <a href=\"https://freewalkingtour.com/contact/\"> <strong>book by email</strong> </a>.</p>",
    "highlightsTitle": "- Polish Beer Scene\n- Different Beer Styles\n- The Brewing Process\n- Beer Ingredients\n- Professional Beer Tasting\n- Expert Beer Guide",
    "highlightsDescription": "- Discover the rich and diverse world of traditional and modern beers from local Polish breweries.\n- Learn how to distinguish between various types of beer, from classic lagers to unique craft ales.\n- Uncover the secrets of how beer is made, from selecting grains to the fermentation process.\n- Learn about the key components of beer—malt, hops, water, and yeast—and their impact on flavor.\n- Develop your palate and learn professional techniques to properly taste and evaluate different beers.\n- Let a passionate guide introduce you to the fascinating stories behind your favorite drink.",
    "photoIds": [
      "3341",
      "21791",
      "3344"
    ]
  },
  {
    "city": "Wroclaw",
    "name": "Wrocław’s Dwarfs & Communism: Laughter vs. Dictatorship",
    "short": "Communist-era Wrocław through the dwarf movement: discover how activists used humour to defy censorship and control during the 1980–1990 decade. We trace their story across the Old Town—from the Main Market Square, Fredro Statue, and Salt Square to St. Elizabeth’s Church, ending on Świdnicka Street, where the first dwarf symbol appeared—and see how today’s hundreds of dwarf statues keep this spirit alive.",
    "long": "<p>What can you do when a regime you live under oppresses and controls every area of ​​your life? What can you do when censorship does not allow you to express your beliefs and feelings? How do you fight when the power fight against is simply too great to give you any chance of winning? Here in Wrocław … dwarfs became the answer.</p>\n<p>Do you know that dwarfs are one of the symbols of the city? Did you know that it all started under communism? These were the days when first dwarfs started to appear in the streets of Wrocław – then drawn on the walls, today as small statues. What did and do they mean? Why dwarfs? Join our Dwarfs and Communism tour to fully understand how Communism shaped us Poles, but also how we managed to fight it back with laughter. Absurd and surreal thinking became powerful weapons in the struggle through the tough post-war days.</p>\n<p>During Dwarfs and Communism tour, you will have a chance to learn about Wrocław between 1980 and 1990. Discover the story of the struggle against Communism, hope, and fun despite all odds. Be ready for an exceptional dwarf hunt. You simply can not miss it!</p>\n<p>The tour is also available on request as a private tour – <a href=\"https://freewalkingtour.com/contact/\"> <strong>book by email</strong> </a> <strong>.</strong></p>",
    "highlightsTitle": "- Wrocław Dwarfs\n- Communism in Wrocław\n- Orange Alternative\n- Main Market Square\n- First Dwarf Papa Krasnal",
    "highlightsDescription": "- Small bronze statues scattered around the city, a symbol of anti-communist resistance and local identity.\n- Learn about life under the oppressive regime in Poland during the 1980s and the fight for freedom.\n- An underground protest movement that used absurdity and humor to oppose the communist government.\n- The medieval heart of the city, a vibrant square surrounded by colourful tenement houses.\n- The original monument commemorating the Orange Alternative movement, located on Świdnicka Street.",
    "photoIds": [
      "49218",
      "49228",
      "6553",
      "21791",
      "6556",
      "49358",
      "49362",
      "6550",
      "49360"
    ]
  },
  {
    "city": "Wroclaw",
    "name": "Wrocław Four Denominations District Tour",
    "short": "Four Denominations District walking tour of Wrocław: discover the former Jewish quarter, Orthodox Cathedral, Solny Square, and St. Anthony Street. The route includes Pokoyhof and Niepolda passages, street art spots, and Freedom Square.",
    "long": "<p>The Wroclaw quarter of the Four Faiths is an extraordinary place. Like a lens, it brings together the fates of many people and groups that once lived in the city. The district is a testimony to the times when people of various faiths: Jews, Protestants, Catholics and Orthodox created the prosperity of Wrocław, once one of the richest cities in the German Empire. That Breslau and that district perished irretrievably during the Second World War. </p>\\n<p>The Quarter of Four Confessions, however, is not only a place that fascinates with its history. Today, it is here that the cultural pulse of the city pulsates. Over the past decades, the district has become one of the most recognisable places in Wrocław. It is here that the most interesting examples of street art, the best clubs, concerts, exhibitions and artistic activities can be found. </p>\\n<p>We invite you to take a walk through the streets of the former Jewish quarter of Wrocław, now known as the Quarter of Mutual Respect, to learn about its extraordinary history, see how much it has changed over the past decades and experience its cultural revival first-hand. </p>\\n<p>The tour is also available as a private walk on request - <a href=\"https://freewalkingtour.com/pl/kontakt/\"> <strong>reserve</strong> </a>.</p>",
    "highlightsTitle": "- Old Town Square\n- Royal Castle\n- Gothic Cathedral\n- Jewish Quarter\n- Famous Bridge\n- Local Cuisine\n- Communist History",
    "highlightsDescription": "- The city's historic heart, bustling with life and surrounded by stunning architecture.\n- A magnificent complex that served as the home of kings for centuries.\n- An awe-inspiring example of medieval architecture with breathtaking stained-glass windows.\n- A historic neighborhood with synagogues, museums, and a unique, poignant atmosphere.\n- A stone bridge adorned with statues, offering picturesque views of the city skyline.\n- A taste of traditional food, including beloved national dishes you must try.\n- Learn about life behind the Iron Curtain and the city's more recent past.",
    "photoIds": [
      "3354",
      "49278",
      "49281",
      "18065",
      "49238",
      "21791"
    ]
  },
  {
    "city": "Wroclaw",
    "name": "Wrocław's Islands & Bridges Evening Tour",
    "short": "Evening tour of Wrocław’s riverfront: we follow the Oder River through the city centre, exploring its islands and bridges, watch the lamplighter ignite the gas lamps on Cathedral Island, and hear how historic floods shaped the city. Stops include Odrzańska/Kuźnicza Str., the University/Pomorski Bridge, and Słodowa and Piasek Islands.",
    "long": "<p>Called by some the “Venice of the North”, settled on Odra River, Wrocław is a city of more than 100 bridges and 21 islands. Take an evening stroll with us past amazingly illuminated architecture along the river banks. Walk through the most picturesque areas in the city center and witness the unique ritual of lighting vintage lamps, just as it was done in the old days.</p>\n<p>Enjoy the enchanting atmosphere, relax and listen to stories and such of how nature can shape the fate of the city, learn about the biggest flood in modern history that happened just over two decades ago. Admire the bravery of the Wroclavians who had to stand up for the city and by accident have learned how to … love it for the first time since World War II. What story is hiding behind this statement? Come check it out! According to our guests it might just be the most beautiful and romantic tour in Europe.</p>\n<p>The tour is also available on request as a private tour – <a href=\"https://freewalkingtour.com/contact/\"> <strong>book by email</strong> </a>.</p>",
    "highlightsTitle": "- Venice of the North\n- Illuminated Riverfront\n- Cathedral Island\n- Gas Lamp Lighter\n- Wrocław's Islands\n- The Great Flood",
    "highlightsDescription": "- Discover why Wrocław, with its 100+ bridges and many islands, is called the \"Venice of the North\".\n- Enjoy an evening stroll along the Odra River, admiring the city's beautifully illuminated architecture.\n- Visit Ostrów Tumski, the oldest and most spiritual part of the city, filled with historic churches.\n- Witness the unique daily ritual of a lamplighter manually lighting the historic gas lamps.\n- Explore some of the city's most picturesque islands, including Słodowa Island and Piasek Island.\n- Hear the dramatic story of the 1997 flood and how it shaped the city's modern identity.",
    "photoIds": [
      "3801",
      "49323",
      "21791",
      "49236",
      "6516",
      "49318",
      "49317"
    ]
  },
  {
    "city": "Wroclaw",
    "name": "Wrocław Macabre: Dark History & Legends",
    "short": "Dark history tour of Wrocław: we uncover murders, legends, and macabre tales across the Old Town and along the Oder River, reading hidden secrets in its buildings. The route includes the Rynek (Market Square) and Old Town Hall, St. Elizabeth’s Church, the University of Wrocław, and Ostrów Tumski, all accompanied by ghost stories and unsolved mysteries.",
    "long": "<p>Ladies and Gentlemen!  </p>\n<p>We invite you on a bloody journey into the past of Wrocław and its surroundings. Not only do the buildings of Wrocław bear witness to interesting facts about the city’s history, but they also hide dark secrets about their inhabitants. Discover the dark side of Wrocław and learn stories you won’t hear on other tours.</p>\n<p>Afterwards, nothing will be the same.  </p>\n<p>Even the sun will shine a little cooler….</p>\n<p>If you are not intimidated by stories full of blood and black humour, you are most welcome! We will traditionally meet at the Aleksander Fredro monument.</p>",
    "highlightsTitle": "- Dark City Secrets\n- Bloody History\n- Wrocław's Black Humour\n- Macabre Local Legends\n- Historic Crime Scenes\n- Medieval Punishments",
    "highlightsDescription": "- Uncover the sinister stories and hidden histories behind Wrocław's seemingly innocent landmarks.\n- Journey through the city's most violent and gruesome events from its turbulent past.\n- Experience the tour's unique storytelling style, blending dark history with grim, witty humour.\n- Hear chilling myths and urban legends passed down through generations of city inhabitants.\n- Visit locations of infamous historical crimes and learn about the chilling events that unfolded.\n- Discover the brutal and inventive methods of justice and punishment used in old Wrocław.",
    "photoIds": [
      "49292",
      "21791",
      "49298",
      "6745"
    ]
  },
  {
    "city": "Wroclaw",
    "name": "Welcome to Wrocław! Old Town & Ostrów Tumski Tour",
    "short": "Introduction to Wrocław—its history and culture: we explore the Old Town and Ostrów Tumski, tracing centuries of Czech, Polish, Austrian, and Prussian–German rule. Highlights include the Main Square with the Town Hall, Wrocław University, the Ossolineum, and the Cathedral of St. John the Baptist, noting the city’s post-WWII reconstruction and its network of river islands.",
    "long": "<p>A city with a coat of arms composed of 5 different ones, reflecting 5 different historical periods. Over its history, Wrocław has changed hands countless times: its founder was Czech, then it was conquered by the Poles. Later, it was taken back by the Czechs, who were then annexed to Austria. Then, Prussia took it from Austria, and then Prussia became Germany. And this is when World War II started… Sounds like a mess, right?</p>\n<p>Because of all those processes and their location in the heart of Europe, British historian Norman Davies once described Wrocław as Europe’s microcosm. He said that everything that happened on the old continent at some point happened here.</p>\n<p>Walk with us through this charming city full of buildings that are silent witnesses to its long and complicated history. Wrocław is the key to understanding the complexity of Europe’s history. So, let us puzzle it all out together during the Old Town Wrocław FREE Walkative! TOUR.</p>\n<p>After walking around the Old Town we recommend taking <a href=\"https://freewalkingtour.com/tours/world-war-ii-jewish-wroclaw/\">World War II & Jewish Wrocław</a> tour and <a href=\"https://freewalkingtour.com/tours/dwarfs-communist-wroclaw/\">Dwarfs & Communist Wrocław</a> to understand the history of Wrocław better!</p>",
    "highlightsTitle": "- Main Market Square\n- Old Town Hall\n- Solny Square\n- Jatki Shambles\n- Wrocław University\n- Market Hall\n- Ostrów Tumski",
    "highlightsDescription": "- One of Europe's largest medieval market squares, teeming with life and colourful tenement houses.\n- An outstanding example of Gothic architecture and a symbol of the city's historical wealth.\n- The city's historic auxiliary market, once the centre of the salt trade, now a flower market.\n- A picturesque medieval street that was once home to the city’s butchers.\n- A stunning university building, famous for its magnificent Baroque assembly hall, the Aula Leopoldina.\n- A historic early 20th-century food hall with unique architecture, bustling with local vendors.\n- The oldest, most tranquil part of the city, also known as Cathedral Island.",
    "photoIds": [
      "49296",
      "49316",
      "21791",
      "49221",
      "49297",
      "49313",
      "49232",
      "49305",
      "49220",
      "49291",
      "49294"
    ]
  },
  {
    "city": "Wroclaw",
    "name": "Wrocław Pub Crawl",
    "short": "Nightlife pub crawl in Wrocław’s Old Town: visit 4–5 bars and clubs around Ruska Street and the Old Town Square, starting near the square with drink vouchers and welcome shots. Enjoy drinking games along the way and finish at two late-night venues—one with R’n’B/Hip-Hop and one with pop hits.",
    "long": "<p>Pub Crawl Wroclaw is a nightlife experience where local guides take you on a journey through the best bars and clubs the city has to offer! Join our party tour, explore the most vibrant spots while meeting people from all over the world, having fun together and partying until the end of the night.</p>\n<p>Curious how the experience will look like? Our experienced local guides will be waiting for you in our first bar Pewexx located at Ruska 8 Street, just a few meters away from the Old Town square.</p>\n<p>From there the group will start the tour together, enjoying the lively atmosphere and the company of fellow partygoers. Throughout the night, you will have the chance to play drinking games, take on fun challenges, and immerse yourself in the vibrant nightlife without a worry. Don’t think twice, Xperience the best party tour in Wroclaw!</p>",
    "highlightsTitle": "- Local Party Guides\n- Bar & Club Hopping\n- Free Drinks & Shots\n- International Party Crowd\n- Fun Drinking Games\n- VIP Club Entry",
    "highlightsDescription": "- Experience Wroclaw’s best party spots with our expert local guides who know the city's vibrant nightlife scene.\n- Visit a curated selection of 4 to 5 of the most vibrant and popular pubs and clubs in Wroclaw.\n- Kickstart your night with three free drinks and get a complimentary welcome shot at every bar you visit.\n- Meet and party with a fun group of fellow travelers from all over the world and make new friends.\n- Break the ice with hilarious drinking games and exciting challenges led by your guide to get the party started.\n- Skip the lines and enjoy free entry to two of the city's best clubs to dance until dawn.",
    "photoIds": [
      "4958",
      "4953",
      "16727",
      "4963"
    ]
  },
  {
    "city": "Wroclaw",
    "name": "Jewish Wrocław & WWII History",
    "short": "A historical tour focused on Wrocław’s Jewish heritage and WWII: we trace the Haskalah legacy, Nazi persecution, and postwar revival beginning at the Fredro Statue, then continue through Pokoyhof Passage, Freedom Square, Salt Square, as well as the Four Denominations District, and the White Stork Synagogue.",
    "long": "<p>Wrocław lies in the very heart of Europe. For centuries, it was one of the main centers of Jewish life in Central Europe. Jews alongside Protestants, Catholics and Orthodox Christians were shaping the prosperity of what was one of the richest cities in the German Empire. Though expelled in the Middle Ages, they returned and 19th-century Wrocław became a major center of Haskalah, the Jewish enlightenment, a movement that changed Judaism forever. Without the generations of rabbis from Wrocław it would be simply impossible to describe modern Judaism.</p>\n<p>This diverse and rich world came to a sudden end in the 1930s when the Nazis took over. Humiliated and persecuted, the Jews of Wrocław soon shared the fate of other European Jews murdered by the Germans and their accomplices during the Holocaust. But the tides of war changed and in 1945 the Third Reich crumbled in the face of the ferocious and bloodthirsty Red Army. Adolf Hitler ordered Wrocław to be turned into a Festung – a fortress to guard the dream of the thousand-year Reich till the last drop of blood and the last bullet. As a result, the city has become the scene of one of the most fierce urban battles of World War II, eventually falling to the Allies even later than Berlin itself.</p>\n<p>Join us to learn about Wrocław’s Jewish past and present and the destruction of the city at the end of WWII. Walk through the most interesting area in the city center – the four denominations district. Discover a place where you can not only learn about Wrocław’s long and fascinating history, but also witness the cultural revival and changes that happened here in the last 20 years.</p>",
    "highlightsTitle": "- Jewish Heritage\n- Four Denominations District\n- Festung Breslau\n- White Stork Synagogue\n- Salt Square\n- Historic Passages\n- Franckel Foundation",
    "highlightsDescription": "- Discover the history of one of Central Europe's most important centers of Jewish life and culture.\n- Walk through a unique area where four different religions have their temples in close proximity.\n- Learn about the fierce WWII siege that left the city in ruins at the end of the war.\n- Visit the city's main synagogue, a symbol of the revival of Jewish life in Wrocław.\n- Stroll through a historic market square adjacent to the Rynek, known for its 24-hour flower market.\n- Explore hidden courtyards like Pokoyhof and Niepold, revealing the city's unique urban fabric and secrets.\n- See the site of the former Jewish Theological Seminary, a key center for the Jewish enlightenment.",
    "photoIds": [
      "49260",
      "49273",
      "18080",
      "18085",
      "49242",
      "49284",
      "18095",
      "49281",
      "49285",
      "21791"
    ]
  },
  {
    "city": "Wroclaw",
    "name": "Wrocław Private Custom Tour",
    "short": "Private Wrocław tour tailored to your interests: choose the themes that inspire you—Old Town, World War II and Jewish heritage, dwarfs and communism, islands and bridges, or macabre stories—and we’ll design the route around them. Key sights can include the Market Square, Town Hall, University, Ostrów Tumski with the Tumski Bridge, and the Cathedral, along with other stops that match your preferences.",
    "long": "<p>A private tour is a great opportunity for people who have limited time and cannot join our regular FREE walking TOURs or simply prefer staying in a small group of friends.</p>\n<p>It is you who chooses when the tour should start and what should be its topic. If you are not sure what do you want to visit during the tour, let us know and we will help you plan the tour that fits best your needs and interests.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including <a href=\"https://freewalkingtour.com/private-offer/\"> <strong>prices</strong> </a>, dates and booking rules.</p>\n<p>What is more, you do not have to worry about finding the guide at the meeting point – they can meet you in any place in the city or pick you up from your hotel. You don’t have to follow our strict schedule of regular tours, we can make a tour according to your needs.</p>\n<p>Let us know what kind of group are you (students, school group, seniors, group of friends, group of colleagues on a business trip, etc.) and what are your interests and we will do our best to prepare for you a tour that fits your needs and expectations.</p>\n<p><strong>LANGUAGES:</strong></p>\n<p>We can arrange private tours for you in different languages:</p>\n<p>English</p>\n<p>Polish</p>\n<p>Spanish</p>\n<p>German</p>\n<p><strong>PRICES & BOOKING RULES</strong></p>\n<p>Every group or visitor that comes to us has different needs, interests, and expectations. Because of that, we treat every one of them individually to make sure that our services will meet their expectations. If your time is limited and you would like to try more than one tour or you would like to see something else, let us know and we will prepare a tailor-made tour for you. The final price can be varied. It will depend on the language and duration of your tour.</p>\n<p><a href=\"https://freewalkingtour.com/contact/\"> <strong>Contact us</strong> </a> in order to get more information about our private offer including prices, dates and booking rules.</p>\n<p>We kindly ask you to book private or group tours in advance, otherwise, we cannot guarantee that a guide will be available.</p>",
    "highlightsTitle": "- Old Town\n- Cathedral Island\n- Wrocław's Dwarfs\n- WWII & Jewish History\n- Communist-Era Wrocław\n- Dark Legends",
    "highlightsDescription": "- Discover the heart of the city with its charming Market Square and colourful tenement houses.\n- Explore Ostrów Tumski, the oldest part of Wrocław, home to stunning Gothic cathedrals.\n- Hunt for the famous bronze dwarfs scattered around the city, each with a unique story.\n- Uncover the city's wartime past and the history of its once-thriving Jewish community.\n- Learn about life behind the Iron Curtain and the anti-communist Orange Alternative movement.\n- Hear chilling tales of medieval justice, ghost stories, and the city's macabre secrets.",
    "photoIds": [
      "2031",
      "49251",
      "49318",
      "13168",
      "6550",
      "49238",
      "18085",
      "18035",
      "49264",
      "49304",
      "21791"
    ]
  },
  {
    "city": "Wroclaw",
    "name": "Wrocław Step by Step Thematic Tours",
    "short": "Topic-led in-depth tours of Wrocław: occasional, specially organized walks for local residents, each exploring a different theme—such as World War II (Festung Breslau), the communist era, modernism, or social history. Routes vary with each event and may include landmarks like the Centennial Hall, Four Denominations District, Plac Grunwaldzki, the University Quarter, and the Main Railway Station, along with other sites chosen to suit each topic.",
    "long": "<p>We believe that only through self-development can we strive for perfection. We also want to share with you the love and passion we have for our cities. Each of our guides also has their own interests and we want to give them the opportunity to deepen and present them to the world. For these (among other) reasons a special tours project has been created, called “Wrocław step by step.”</p>\n<p>Our guides prepare routes according to their interests, hobbies, subjects they studied, things in which they specialize. Thanks to this, unusual tours are created. Tours during which we visit places that usually nobody goes to, tell stories that would otherwise have no chance to be told. Real treasures are forged!</p>\n<p>Tours are made especially for enjoyment of permanent residents and visitors who are already familiar with the basic city history. To all those who want to learn something more, deepen the knowledge they have already gained. For all interested in history and processes that influenced the development of cities and shaped their today’s image.</p>\n<p>Wrocław step by step is also a constantly developing project – we hope that you will be an inspiration for us to take up new topics, stories and matters that interest you and about which you would like to hear on the next tours! Come on! Be our inspiration!</p>\n<p>All these tours you can book as a private tour on request. <a href=\"https://freewalkingtour.com/contact/\"> <strong>Book by email</strong> </a>.</p>",
    "highlightsTitle": "- Festung Breslau\n- Communist-era Wrocław\n- Centennial Hall\n- Four Denominations District\n- Women of Wrocław\n- University Quarter\n- Wrocław's Nobel Laureates",
    "highlightsDescription": "- Discover the history of the city during the dramatic WWII siege and its transformation into a fortress.\n- Journey back in time to explore daily life and key events in the city under communist rule.\n- Admire a UNESCO-listed masterpiece of modernist architecture and an icon of early 20th-century engineering.\n- A unique district where Catholic, Protestant, Orthodox, and Jewish temples coexist in a symbol of tolerance.\n- Hear the untold stories of the influential women who have shaped the city's vibrant history and culture.\n- Explore the academic heart of the city, centered around the magnificent Baroque University of Wrocław building.\n- Learn about the remarkable scientists and writers connected to the city who achieved the prestigious Nobel Prize.",
    "photoIds": [
      "18095",
      "11407",
      "49349",
      "49357",
      "49277",
      "49263",
      "49306",
      "21791"
    ]
  },
  {
    "city": "Zadar",
    "name": "Welcome to Zadar! Old Town Guided Walking Tour",
    "short": "Introduction to Zadar—its history and culture in the Old Town and seafront: we explore the city’s Roman, Venetian, and Austrian layers as we move from the Roman Forum and UNESCO-listed city walls to St. Anastasia Cathedral, the Sea Organ, and the Greeting to the Sun installations, all set against Zadar’s spectacular Adriatic sunsets.",
    "long": "<p>Dramatic mountains on one side, tranquil sea dotted with little islands on the other and in the middle a small gem of a city that is Zadar. A perfect compact combination of Roman, Venetian and Austrian influences, byzantine and romanesque churches, renaissance city walls, a modern vibe and an amazing cuisine and nightlife. Zadar is just the place to be and enjoy life!</p>\n<p>Alfred Hitchcock once said that “the sunset of Zadar is the world’s most beautiful and incomparably better than in Key West, Florida”. And honestly it is hard to disagree! Zadar has one of the world’s most ingenious creations that allow you to marvel at the beauty of the sun setting down on the sea. On the edge of the old town there are two amazing works by Nicola Basić, local architect. First there is the Sea Organ – white stone steps descending straight into the Adriatic. Below them there is a system of pipes and whistles. The sea waves pushing the air through it play the most enchanting and mesmerising music in the world. Just lay down on the steps at sunset and get yourself hypnotised by it. The second installation is the Greeting to the Sun monument – multi-layered glass plates that absorb sunlight during the day to produce a magical show of light after the sunset. Both installations form a tribute to the power of nature and create a unique and spectacular effect.</p>\n<p>We will start our tour of Zadar at the 2 thousand year old city square, Roman Forum, and see the only one intact Roman column, which during the Middle Ages served as a shame post. Walking through the white cobblestone streets of the Old Town we will see the city walls, a UNESCO Heritage List site and most important city landmarks, including the St. Anastasia Cathedral, beautiful and impressive romanesque temple, the biggest church on Dalmatian coast. We will marvel at the Sea Organs and Greeting to the Sun installation, visit the old execution site which today celebrates the most important figures of the city and last but not least we will introduce you to the places buzzing with life after dark. Join us to discover the amazing Zadar!</p>\n<p>During the tour, alcohol consumption is not permitted. Make sure that your behavior does not affect other guests on the tour.</p>",
    "highlightsTitle": "- Roman Forum\n- Sea Organ\n- Greeting to the Sun\n- St. Anastasia's Cathedral\n- The Land Gate\n- People's Square\n- Pillar of Shame",
    "highlightsDescription": "- The ancient heart of the city, a 2000-year-old square with fascinating Roman ruins and history.\n- An architectural installation where sea waves create mesmerising music through a system of pipes and whistles.\n- A stunning installation that creates a magical light show after absorbing sunlight during the day.\n- An impressive Romanesque temple, the largest and most significant church on the entire Dalmatian coast.\n- The main historical entrance to Zadar's Old Town, a masterpiece of Renaissance art from Venetian times.\n- The center of Zadar's public life since the Middle Ages, surrounded by historic buildings and cafes.\n- An intact Roman column in the Forum used for public punishment during the Middle Ages.",
    "photoIds": [
      "20712",
      "20730",
      "20718",
      "20724",
      "20468"
    ]
  },
  {
    "city": "Zagreb",
    "name": "Welcome to Zagreb! Old Town Guided Walking Tour",
    "short": "Introduction to Zagreb—its history and culture through its two medieval towns: we start at Ban Jelačić Square and climb the hills of Kaptol and Grič (Gradec), tracing their old rivalry at Bloody Bridge and visiting key sights such as the Stone Gate, St. Mark’s Church, Lotrščak Tower, Dolac Market, and the Cathedral.",
    "long": "<p>Zagreb is everything that … one does not associate with Croatia. Instead of a typical Dalmatian town with white stone houses set against an azure sea and Mediterranean climate, we get a large European city vibrating with culture. 1,000 years of history, two mediaeval old towns, city walls built in fear of Turkish invasion, Baroque villas of the local socialite and a modernly designed 19th century centre. And to top it all off, museums that other metropolises can only envy. For where else will you find such unusual museums as the Hangover Museum, the Mushroom Museum or the now legendary Museum of Broken Relationships? All this would be enough to visit Zagreb, but it doesn’t end there! Croatia’s capital is also home to a great food scene and restaurants, locally loved cafes and fascinating nightlife. Zagreb is definitely a place worth visiting all year round, not just in summer!</p>\n<p>Our tour will start at Ban Jelacic Square, from where we will start climbing the two historic hills of Kaptol and Grič. They were once occupied by rival cities, one secular, the other ruled by the clergy of the local cathedral. At the Bloody Bridge, we’ll talk about the conflict between the two and their eventual merger into one Croatian capital. We’ll see the most popular (especially at night!) street, the local market – one of the most photogenic places in the city, and the most important temples, including Zagreb’s icon, the charming 14th century St. Mark’s Church with its colourful roof. A decent dose of historical knowledge awaits you as well, starting from the time when the Slavs arrived in the area, through the period when these lands were ruled by Emperor Franz Joseph until the moment Croatia became part of federated Yugoslavia. Ready for a walk? Great, Zagreb is a city just made to be discovered on foot!</p>",
    "highlightsTitle": "- Ban Jelačić Square\n- Kaptol and Grič\n- St. Mark's Church\n- Bloody Bridge\n- Tkalčićeva Street\n- Dolac Market\n- Zagreb Cathedral",
    "highlightsDescription": "- Zagreb's central square and the main meeting point, where the tour of the city begins.\n- The two rival medieval hills that eventually merged to become the Croatian capital.\n- A 14th-century church famous for its unique, colourful tiled roof depicting coats of arms.\n- A historic street named after the conflict between the rival towns of Kaptol and Grič.\n- A vibrant and charming street in the city centre, lined with popular cafes and bars.\n- A photogenic farmer's market, famously known as the \"Belly of Zagreb\" for its fresh produce.\n- The city's monumental Gothic cathedral, a key symbol of Zagreb and the tallest building in Croatia.",
    "photoIds": [
      "49194",
      "20690",
      "20696",
      "49195",
      "20468"
    ]
  },
  {
    "city": "Marseille",
    "name": "Welcome to Marseille! Old Port & Le Panier Guided Tour",
    "short": "A walk from the Old Port and ancient ruins to Le Panier’s colourful alleys, La Major Cathedral, MUCEM, and Fort Saint-Jean. This journey spans 2,600 years of history, from Greek foundations and French revolutionaries to the vibrant mix of diverse communities that shape France’s oldest Mediterranean city today.",
    "long": "<p>Marseille is not only France’s oldest city but also one of its most vibrant and diverse. Perched on the Mediterranean coast, it has always been a place of encounters: of traders, sailors, migrants, and dreamers. All this gave Marseille its unmistakable character — energetic, sometimes chaotic, but always full of life. Today, it’s a city where ancient history, maritime tradition, and modern architecture stand side by side. Join us to discover this fascinating mix!</p>\n<p>The story of Marseille begins over 2,600 years ago, when Greek settlers from Phocaea arrived and founded Massalia. Ever since, the city has been shaped by people coming and going: Romans, medieval merchants, crusaders, and more recently newcomers from across the Mediterranean. It became a vital port for France’s empire, a gateway to Africa, and later a symbol of resistance during World War II. This long history left behind layers of architecture and stories that you can still see and feel as you walk through its streets.</p>\n<p>Our walk starts right in the heart of the city at Place du Général-de-Gaulle, just by the famous Old Port — the natural harbor that has been the beating heart of Marseille since antiquity. From there, we step into the Jardin des Vestiges, an archeological site where ancient remains whisper about the city’s distant beginnings. Passing along Rue de la République, we will pause by the Hôtel de Cabre, one of the oldest houses in Marseille, and the elegant Hôtel Dieu, today transformed into a luxury hotel but with centuries of stories to tell.</p>\n<p>We continue into Le Panier, the oldest district of Marseille, with its narrow alleys, colorful facades, and street art. Once home to sailors and immigrants, it is now the city’s most picturesque neighborhood. Rising nearby is the striking Cathédrale La Major, a 19th-century landmark that dominates the waterfront with its Byzantine-inspired domes. Just a short walk away, modernity takes center stage at the MUCEM – Museum of European and Mediterranean Civilizations, and the bold Villa Méditerranée. Finally, we cross to Fort Saint-Jean, where the old fortifications guard the entrance to the harbor, offering unforgettable views over sea and city.</p>\n<p>This walk through Marseille is not just about monuments — it’s about understanding how this unique city has always stood at the crossroads of cultures. Whether it’s Greek traders, French revolutionaries, or today’s mix of communities, all left their mark here.</p>\n<p>Join us to discover Marseille’s history, character, and energy. From ancient ruins to modern icons, from narrow alleys to the wide blue of the Mediterranean, this tour will help you see why Marseille is a city like no other.</p>",
    "highlightsTitle": "- Old Port of Marseille\n- Jardin des Vestiges\n- Rue de la République\n- Hôtel de Cabre\n- Hôtel Dieu Intercontinental Marseille\n- Le Panier\n- Cathédrale La Major\n- MUCEM\n- Villa Méditerranée\n- Fort Saint-Jean",
    "highlightsDescription": "- Historic harbor and heart of the city since antiquity.\n- Archeological site with ruins from ancient Massalia.\n- 19th-century boulevard connecting Old Port with modern Marseille.\n- One of the city’s oldest surviving houses.\n- Former hospital, now a luxury hotel with centuries of history.\n- Oldest district with narrow alleys, colorful facades, and street art.\n- 19th-century cathedral with Byzantine-inspired domes on the waterfront.\n- Modern museum showcasing European and Mediterranean civilizations.\n- Bold cultural center symbolizing Marseille’s contemporary architecture.\n- Historic fort guarding the harbor entrance with panoramic views.",
    "photoIds": [
      "47312",
      "47309",
      "47311",
      "50002",
      "50003",
      "50004",
      "50008",
      "47310",
      "50009"
    ]
  },
  {
    "city": "Munich",
    "name": "Hitler’s Third Reich: Exploring the “Capital of the Movement”",
    "short": "",
    "long": "",
    "highlightsTitle": "- Marienplatz with its New and Old Town Hall\n- Hofbräuhaus\n- Odeonsplatz\n- Square for the Victims of National Socialism\n- Königsplatz (King’s Square)\n",
    "highlightsDescription": "",
    "photoIds": []
  }
];

const MOCK_PHOTOS: Photo[] = [
  {
    "id": "11059",
    "url": "https://drive.google.com/file/d/1JnR9iZDNkBpd4DzOztrDG8H0genO95IG/view?usp=drivesdk",
    "name": "berlin-shutterstock_1174014040_11059.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "11091",
    "url": "https://drive.google.com/file/d/1WBQhxn2sTagVsrik8IEJQl_HMGUemiqU/view?usp=drivesdk",
    "name": "Krakow_watchtower_brick building_11091.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "11357",
    "url": "https://drive.google.com/file/d/1_8XiDWfHcnq7LAIbVoXCoH5DK-WjFJ3f/view?usp=drivesdk",
    "name": "Berlin_Berlin Televisi_Berliner Dom_11357.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "11407",
    "url": "https://drive.google.com/file/d/13yyLxm7psXLfHrwkgDuUcoDoghQtR5tV/view?usp=drivesdk",
    "name": "f1be8214-6623-4a4f-8dce-4c6bb85fc709-1-992x666_11407.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "12207",
    "url": "https://drive.google.com/file/d/1A4PB3a9TisNdLvhzWQse9vQL0xT8Yk9Q/view?usp=drivesdk",
    "name": "Bydgoszcz_canal_bridge_12207.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "12220",
    "url": "https://drive.google.com/file/d/1guREzZrhjWrMN0yL_UV1dgQoIWW99yhv/view?usp=drivesdk",
    "name": "Krakow_St Marys Basili_archway_12220.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "12261",
    "url": "https://drive.google.com/file/d/1sxvjGUCRB-EZhNwXeRoTy-xAgx2ilr56/view?usp=drivesdk",
    "name": "Lviv_tour guide_tourists_12261.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "12272",
    "url": "https://drive.google.com/file/d/1QXynTO8qS6c6ZO5F7uz3Xx4SRCWLd1lU/view?usp=drivesdk",
    "name": "Berlin_Soviet soldier_Red flag_12272.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "12362",
    "url": "https://drive.google.com/file/d/1Lg6dAMRloSEoU8DREL3RdRo3s7X1ckt3/view?usp=drivesdk",
    "name": "Krakow_tour group_guide_12362.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "12458",
    "url": "https://drive.google.com/file/d/18HfR3W7JLKBa4RamNrhQphsoTVLYqcEA/view?usp=drivesdk",
    "name": "7d4019bb-1a4e-4c21-b3f6-2cc5b6d4c708-1-1536x1024_12458.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "12470",
    "url": "https://drive.google.com/file/d/180ySQq6u-C7Rw6F22Ue8xRXsSCwKJMXg/view?usp=drivesdk",
    "name": "8de89150-bad3-4dc0-93c5-7605ddcd2210-1-375x228_12470.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "12476",
    "url": "https://drive.google.com/file/d/1_c0zM1nhxzNQZK9MJIe748VFOUg4Ek4H/view?usp=drivesdk",
    "name": "c85cc076-641f-41c4-a4e8-49a0b40e9519-1-375x228_12476.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "12495",
    "url": "https://drive.google.com/file/d/1NaL8tj_lkJ32gFbgN_rDI8bAZRmkNoGe/view?usp=drivesdk",
    "name": "Valletta_bridge_couple_12495.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "12507",
    "url": "https://drive.google.com/file/d/1SyqLIQU01Yecr4nrH9qu-6B9ml0CpiUa/view?usp=drivesdk",
    "name": "Valletta_fortifications_historic buildi_12507.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "12516",
    "url": "https://drive.google.com/file/d/1kEetBN0QBjeFMNF0Y3F6pS64oCJfVVfT/view?usp=drivesdk",
    "name": "c3f58b80-9c9e-4ad4-a8c4-538369140a15-2-1536x1018_12516.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "12535",
    "url": "https://drive.google.com/file/d/1T2A6Zs-PYs_dsVcS-ZCsRKrnJq2S7xQ6/view?usp=drivesdk",
    "name": "Victoria_Citadel_City Walls_12535.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "12541",
    "url": "https://drive.google.com/file/d/1hrrU2AshAovprYG5ZTudDiGMVQEPnKg8/view?usp=drivesdk",
    "name": "72c509ca-86ec-462d-8926-4ab8e7d0b2a4-992x661_12541.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "12562",
    "url": "https://drive.google.com/file/d/1Gks0Txd_bQLUmvtopZYuw90EUlkgLnc4/view?usp=drivesdk",
    "name": "f5740943-dc11-4743-b52e-614d74ddb5da-768x509_12562.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "12804",
    "url": "https://drive.google.com/file/d/1cUimMgxMG6205vDKMk4nAt5GkvXRMjRa/view?usp=drivesdk",
    "name": "Gdańsk_Main Town Hall_Długi Targ Long_12804.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "1306",
    "url": "https://drive.google.com/file/d/18bNeTr_5CsyQiabLpQfDmdHt_I8lov1Z/view?usp=drivesdk",
    "name": "080490f9-f7cf-4aac-a63b-8b033fccae4b-8_1306.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "13068",
    "url": "https://drive.google.com/file/d/19csBTU-NopZfqbFuy3CDhs6rg5R0_hTW/view?usp=drivesdk",
    "name": "Warsaw_Old Town Square_Royal Castle_13068.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "13168",
    "url": "https://drive.google.com/file/d/1-C0K4s-czSY1IEB0QL5VIT3kbIoqfqng/view?usp=drivesdk",
    "name": "Brno_Brno Exhibition_park_13168.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "13197",
    "url": "https://drive.google.com/file/d/1MPiKTDuT4mGRWZv1rUa0lEXDu3qlvaMq/view?usp=drivesdk",
    "name": "Oświęcim_railway tracks_main gate_13197.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "13219",
    "url": "https://drive.google.com/file/d/1EcDQbz7qtRUSN3z1LYpQq5Ejk8qAPDH8/view?usp=drivesdk",
    "name": "Krakow_horse-powered h_wooden mechanis_13219.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "13285",
    "url": "https://drive.google.com/file/d/1LUoSUswAp5bXMR80H4cF1nOwxD6nM5T3/view?usp=drivesdk",
    "name": "Gdansk_amber necklaces_amber bracelets_13285.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "13573",
    "url": "https://drive.google.com/file/d/1rMlZcKxr9KtP_W1QSxgxddsRxEgtX6SW/view?usp=drivesdk",
    "name": "Berlin_Memorial to the_concrete slabs_13573.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "14169",
    "url": "https://drive.google.com/file/d/1YNJ0sJYNmqTR1KYe87BZpolsmd-jdePv/view?usp=drivesdk",
    "name": "Krakow_soldiers_flag_14169.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "14310",
    "url": "https://drive.google.com/file/d/1cRAQhTMDaGK07C_Eo4CYEVEM-D5G6UY8/view?usp=drivesdk",
    "name": "Warsaw_Palace of Cultu_clouds_14310.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "14444",
    "url": "https://drive.google.com/file/d/1V2MhEPckYnEZTBykZ-tpvArxoNzCMOMC/view?usp=drivesdk",
    "name": "Berlin_Brandenburg Gat_tourists_14444.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "14535",
    "url": "https://drive.google.com/file/d/1ARixSeRL6W-f9m0nnI_vlUm9L7lLYcqG/view?usp=drivesdk",
    "name": "Krakow_German soldiers_Nazi eagle bann_14535.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "14547",
    "url": "https://drive.google.com/file/d/15mJczMdIXaAguJO40A3N-0tZ2ksZHPNP/view?usp=drivesdk",
    "name": "Gdansk_bridge_canal_14547.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "14553",
    "url": "https://drive.google.com/file/d/1ZkYrFfEeAEy04RU5ple6IH5wEbedGbf_/view?usp=drivesdk",
    "name": "Toruń_Nicolaus Copern_armillary spher_14553.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "14577",
    "url": "https://drive.google.com/file/d/1xRN-Y5VvnNFMKef6xAt-e-8TcMLLW_Yl/view?usp=drivesdk",
    "name": "Gdansk_Neptune Fountai_buildings_14577.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "14583",
    "url": "https://drive.google.com/file/d/1pVqNkceFfTcH_0PuvjiM0i3k08FFMl-Y/view?usp=drivesdk",
    "name": "Gdansk_St Marys Church_Town Hall_14583.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "14609",
    "url": "https://drive.google.com/file/d/1aWyEAn9D_KtrHTm8MGO0ar8GuGBL-COM/view?usp=drivesdk",
    "name": "Poznan_buildings_arches_14609.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "148",
    "url": "https://drive.google.com/file/d/1y-NkCthVYF5N0oYzVM7Wlwi_y_HX2OQ5/view?usp=drivesdk",
    "name": "walkative_unknown_148.svg",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "1487",
    "url": "https://drive.google.com/file/d/15zozz0IPaF5yJvtAa-SzfBWdKH1DRT89/view?usp=drivesdk",
    "name": "Krakow_horse-drawn car_horses_1487.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15389",
    "url": "https://drive.google.com/file/d/1euav0nsBJncFfg4ujbNjDoUtEb7xveuD/view?usp=drivesdk",
    "name": "Krakow_tourists_buildings_15389.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15431",
    "url": "https://drive.google.com/file/d/1Ulw9uUci7alAM8DybzSUN8rQ_-bfQEpW/view?usp=drivesdk",
    "name": "Poznań_Poznań Grand Th_park_15431.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15443",
    "url": "https://drive.google.com/file/d/1HDU2pNspO74DaxVtto14XnccfzDQtYqx/view?usp=drivesdk",
    "name": "Poznan_monument_Centrum Kultury_15443.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15449",
    "url": "https://drive.google.com/file/d/13RINeG_fb67aJA6fB3SvWH9tQkE6J86o/view?usp=drivesdk",
    "name": "Wrocław_Wrocław Univers_tourists_15449.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15467",
    "url": "https://drive.google.com/file/d/1cyOiJO_E9wNNn5uo-MqHtAWw37X4ZuA3/view?usp=drivesdk",
    "name": "Wrocław_Wrocław Univers_Clock Tower_15467.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15473",
    "url": "https://drive.google.com/file/d/1GlLVchPEMDKkWMBXLntqYDiOsm0vXAml/view?usp=drivesdk",
    "name": "Wrocław_street_pedestrian cros_15473.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15540",
    "url": "https://drive.google.com/file/d/1NNN-sfjxogIyNvTjQHr6yvCxkjIU5RMy/view?usp=drivesdk",
    "name": "logo-berlin_15540.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15564",
    "url": "https://drive.google.com/file/d/17hbaM2gneK3Of38baJRT93NpBBjteaC0/view?usp=drivesdk",
    "name": "Berlin_Trabant 601 car_East Side Galle_15564.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15603",
    "url": "https://drive.google.com/file/d/1QsZnM0sqOs3lA2gzGpi40CcQlh-wMB_Y/view?usp=drivesdk",
    "name": "Berlin_building_wall_15603.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15609",
    "url": "https://drive.google.com/file/d/1MJmqEPE83TEgI_ahtHcDVR4TUx818gki/view?usp=drivesdk",
    "name": "Berlin_street art_flags_15609.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15645",
    "url": "https://drive.google.com/file/d/13Kxv6_6pRHHbpaPiDQzklLuMllQSG8eq/view?usp=drivesdk",
    "name": "gate_building_15645.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15651",
    "url": "https://drive.google.com/file/d/19jrOLwX9Xf3KbenUn9EOssIqITZ8jkvv/view?usp=drivesdk",
    "name": "Berlin_sign_barbed wire_15651.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15657",
    "url": "https://drive.google.com/file/d/1jzBoxqtyLO44shn6nChEivuoRd3Kcykq/view?usp=drivesdk",
    "name": "Berlin_gate_inscription_15657.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "157",
    "url": "https://drive.google.com/file/d/1Nw3DKYtwFbBVkDYPzUND3y3EL4sUdsFx/view?usp=drivesdk",
    "name": "walkative_unknown_157.svg",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15736",
    "url": "https://drive.google.com/file/d/1gn6trg-a75EP5rZ4jqdv6vsdUDprpBw2/view?usp=drivesdk",
    "name": "Prague_Church of Our L_Old Town Square_15736.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15826",
    "url": "https://drive.google.com/file/d/19Ab5ndq2oxupW2XXelTglDo2jmPVvubW/view?usp=drivesdk",
    "name": "Prague_tour group_guide_15826.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15832",
    "url": "https://drive.google.com/file/d/1IfE_aZyoiHvPc6JodcBur95zMlbpuzHl/view?usp=drivesdk",
    "name": "Prague_Old-New Synagog_pedestrian_15832.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15894",
    "url": "https://drive.google.com/file/d/1ZmYmmjVOlEMctudPmrQcHJyI2tSWIrD9/view?usp=drivesdk",
    "name": "Prague_bronze sculptur_dates 1938-1945_15894.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15900",
    "url": "https://drive.google.com/file/d/1xMEgWlJ4EQAR_VQ3clLJ1RwVL7NRGE3E/view?usp=drivesdk",
    "name": "Prague_Pinkas Synagogu_Building_15900.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15906",
    "url": "https://drive.google.com/file/d/1Ozqk0IZgt_xZSRSocqKdlKPrgVqjR0Bx/view?usp=drivesdk",
    "name": "Prague_Star of David_metal fence_15906.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "15995",
    "url": "https://drive.google.com/file/d/1A772_T8zoRNxNPAatlqnJjRIZBDMyoxY/view?usp=drivesdk",
    "name": "Prague_Charles Bridge_Prague Castle_15995.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16117",
    "url": "https://drive.google.com/file/d/1csfuRcH5F6vIjW_E5ZbLciJmmw1GdNBt/view?usp=drivesdk",
    "name": "logo_text_16117.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16223",
    "url": "https://drive.google.com/file/d/1PfkgEEzjzvqywmyCmWnXdBWJIajiQ8Nn/view?usp=drivesdk",
    "name": "Prague_houses_cobblestone str_16223.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16229",
    "url": "https://drive.google.com/file/d/1xDIDF0kdBf3WQL5UC9FcFz5iWDOi0P3G/view?usp=drivesdk",
    "name": "Prague_St Vitus Cathed_Prague Castle_16229.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16235",
    "url": "https://drive.google.com/file/d/1i6gwcnVWniDx1k_gqFZ2O1_do4vGfaYD/view?usp=drivesdk",
    "name": "Prague_St Vitus Cathed_tour group_16235.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "1652",
    "url": "https://drive.google.com/file/d/1YIuVIiWKzMvrdPZEBAhSPq62veoKfaSY/view?usp=drivesdk",
    "name": "8249520a-51d1-4927-a759-8c22f967e815_1652.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16579",
    "url": "https://drive.google.com/file/d/1SvBwqsvr9HsQFYM1oRuzaSMgxJUCigV2/view?usp=drivesdk",
    "name": "Riga_text_logo_16579.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16611",
    "url": "https://drive.google.com/file/d/1V5Ubs4KX7iCp-9dCOAze9U7dDxNrg37k/view?usp=drivesdk",
    "name": "Riga_House of the Bl_St Peters Churc_16611.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16617",
    "url": "https://drive.google.com/file/d/16wdwzoGO7h9QVd4WXGyHHwMCIh1eB6Hr/view?usp=drivesdk",
    "name": "Riga_building_facade_16617.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16623",
    "url": "https://drive.google.com/file/d/12uHVfLiSP4Kz_vFy4sLKeO24nEx4mw-9/view?usp=drivesdk",
    "name": "Riga_Academy of Scie_Central Market_16623.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16636",
    "url": "https://drive.google.com/file/d/1MP8eASYhJF61s6DBy8dVhlQotSltRM35/view?usp=drivesdk",
    "name": "Munich_Frauenkirche_buildings_16636.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16643",
    "url": "https://drive.google.com/file/d/1wOpuhmumcQR07s1EWCL17Os2errS9nGU/view?usp=drivesdk",
    "name": "Riga_suitcase_cobblestone str_16643.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16649",
    "url": "https://drive.google.com/file/d/1lPMgmrlBEMvV5iNYNTqSl_IaslbXT2Bw/view?usp=drivesdk",
    "name": "Gdansk_tour group_guide_16649.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16655",
    "url": "https://drive.google.com/file/d/1IKoLrHYZl-MuH_UrECm_5qUwNFNw_fOO/view?usp=drivesdk",
    "name": "Riga_tour group_guide_16655.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16661",
    "url": "https://drive.google.com/file/d/1RzMOSVnWULom5Z1EdNPllpiD8tfvEn_A/view?usp=drivesdk",
    "name": "tourists_building_16661.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16667",
    "url": "https://drive.google.com/file/d/1CMZP7slaeTptC2R0aHIzaRrz41DUrR-t/view?usp=drivesdk",
    "name": "Riga_buildings_flags_16667.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16673",
    "url": "https://drive.google.com/file/d/180LagHfuIa40tFev4D602AteZYU4j8-L/view?usp=drivesdk",
    "name": "Riga_building_flags_16673.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16679",
    "url": "https://drive.google.com/file/d/1GdIDga33v8ljnefV7OTvF0AmdAK-3dWb/view?usp=drivesdk",
    "name": "Riga_building_trees_16679.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16685",
    "url": "https://drive.google.com/file/d/19iDph65vFeCQkzFP0YVSI0LhAAj3c1LW/view?usp=drivesdk",
    "name": "Lviv_Art Nouveau bui_tourists_16685.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16691",
    "url": "https://drive.google.com/file/d/1MzxHbsVwD1r1jLGA-hdJoPL65Iwv9Ubq/view?usp=drivesdk",
    "name": "Riga_brick buildings_courtyard_16691.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16697",
    "url": "https://drive.google.com/file/d/1D8jDnOu1P9GQ61_E6E55HAW1nTNAa7Lz/view?usp=drivesdk",
    "name": "Riga_posters_advertisement p_16697.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16703",
    "url": "https://drive.google.com/file/d/1_Nf4UbfTBB2rfbg4073Snql1SPFPit_u/view?usp=drivesdk",
    "name": "Riga_Art Nouveau bui_sphinx statues_16703.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16709",
    "url": "https://drive.google.com/file/d/1scLzQ-YkcRbeSdCuzq3MT2HR2wsz3kJD/view?usp=drivesdk",
    "name": "Riga_Riga Central Ma_market halls_16709.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16715",
    "url": "https://drive.google.com/file/d/1D3c7OuJYf0xetKCSPptPcCUbys70dQUI/view?usp=drivesdk",
    "name": "Riga_meat counters_visitors_16715.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16721",
    "url": "https://drive.google.com/file/d/1KsdDIxlvPmM8OZcT7hmmTpNAOpD91ryo/view?usp=drivesdk",
    "name": "Riga_tour guide_tourists_16721.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16727",
    "url": "https://drive.google.com/file/d/1jAOE5I_gvMVnuYAigb9OwA7D3DYS8qAg/view?usp=drivesdk",
    "name": "Poland_logo_text_16727.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "1675",
    "url": "https://drive.google.com/file/d/1OERgEJ6ATpwueU1v_9xZwlnwvHwUvpy2/view?usp=drivesdk",
    "name": "Krakow_tour guide_tourists_1675.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16798",
    "url": "https://drive.google.com/file/d/1YIWTrzEPquE5KBSFZyomNcgd3xEAIbyD/view?usp=drivesdk",
    "name": "Krakow_People_Group of Touris_16798.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16806",
    "url": "https://drive.google.com/file/d/1j4Htev-od0iD1wLafBXT8lbYAonG6JHK/view?usp=drivesdk",
    "name": "Krakow_People_Man_16806.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16814",
    "url": "https://drive.google.com/file/d/1E39jOiHR9zOi59ysiTBp4LwD9uzG1s0v/view?usp=drivesdk",
    "name": "Krakow_Woman_Man_16814.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16818",
    "url": "https://drive.google.com/file/d/1xL7DSlNmDsBErfPzIWq4tFQ25pcKsbYt/view?usp=drivesdk",
    "name": "Krakow_People_Crowd_16818.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16823",
    "url": "https://drive.google.com/file/d/1JmKmqHqCCDqnibFkRZBstsRnmuGurZ2h/view?usp=drivesdk",
    "name": "Krakow_text_logo_16823.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16871",
    "url": "https://drive.google.com/file/d/1Pd06iO7JZVavJpGnL29uccoc3A_cVWA1/view?usp=drivesdk",
    "name": "Oświęcim_sign_skull and cross_16871.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16875",
    "url": "https://drive.google.com/file/d/1iT3QFesb6BwX8ikLH5Nbu4JU_o_B6Cls/view?usp=drivesdk",
    "name": "Oświęcim_Auschwitz gate_Arbeit Macht Fr_16875.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16879",
    "url": "https://drive.google.com/file/d/15d23dOLUYhEaALWnKdCYdHr6a1PBt8vU/view?usp=drivesdk",
    "name": "Oświęcim_barracks_chimneys_16879.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16883",
    "url": "https://drive.google.com/file/d/1-J7kqpgW_3KXmC87cn18sBDRaqexzuPL/view?usp=drivesdk",
    "name": "Oświęcim_gate_watchtower_16883.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16887",
    "url": "https://drive.google.com/file/d/13UtTEjqMp-0vFBLVU7YzZD4nrGf8p-V9/view?usp=drivesdk",
    "name": "Oświęcim_watchtower_brick buildings_16887.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16891",
    "url": "https://drive.google.com/file/d/1lPFKbDxQH71-v1fuqNt8s1J9joeLvU5T/view?usp=drivesdk",
    "name": "Oświęcim_brick buildings_watchtower_16891.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16896",
    "url": "https://drive.google.com/file/d/19wU0Epz8dFiO7PbUV2ps572lE1coUKSZ/view?usp=drivesdk",
    "name": "Krakow_Wawel Cathedral_tourists_16896.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "16900",
    "url": "https://drive.google.com/file/d/1QNZ2JZRZXWNxBiSPwkF01G7dzs7TTEtY/view?usp=drivesdk",
    "name": "Warsaw_Historic Buildi_Outdoor Cafe_16900.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "1741",
    "url": "https://drive.google.com/file/d/1onWe_B3HWEsc2gWzX9NlDLB08pX_6k6t/view?usp=drivesdk",
    "name": "Krakow_Plac Unii Lubel_buildings_1741.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17600",
    "url": "https://drive.google.com/file/d/1ItYmUCSzS2zbpOaMpoS9TIveHyc7fFbw/view?usp=drivesdk",
    "name": "Budapest_Hungarian Parli_Danube River_17600.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17625",
    "url": "https://drive.google.com/file/d/1yUSjpSmAYjEKtXlq33-vAWt67Fni1Wkp/view?usp=drivesdk",
    "name": "Budapest_Budapest skylin_figure with fea_17625.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17630",
    "url": "https://drive.google.com/file/d/18JIegjU6jbtst0ahVbHzcl7_BLXcbXfN/view?usp=drivesdk",
    "name": "Budapest_Hungarian Parli_Danube River_17630.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17638",
    "url": "https://drive.google.com/file/d/1blZH4PcXVIW2OTWJ6wqm9wpq0rI54VYc/view?usp=drivesdk",
    "name": "Budapest_Buda Castle_Castle walls_17638.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17648",
    "url": "https://drive.google.com/file/d/1ba_7Nt-TNH3luiQy-LVFn7Wd3s_GrSc2/view?usp=drivesdk",
    "name": "Budapest_tourists_group of people_17648.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17653",
    "url": "https://drive.google.com/file/d/1UEiyxwBPs0h7T5g0hOZaM3J9nVd-Fu0f/view?usp=drivesdk",
    "name": "Budapest_Tour guide_Free Tour flag_17653.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17658",
    "url": "https://drive.google.com/file/d/1miUi3u7ijOKLY0qLUtJUFFLTyHxqbcvP/view?usp=drivesdk",
    "name": "Budapest_tour group_Hungarian Parli_17658.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17665",
    "url": "https://drive.google.com/file/d/1Xdn6aNNSNrywtIAiDqauK06tYnYzbGg4/view?usp=drivesdk",
    "name": "Lviv_Church of St An_Plague Column_17665.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17675",
    "url": "https://drive.google.com/file/d/1g1Kmt-Mhlk64dsBse7oQ1mnEOcwYD0po/view?usp=drivesdk",
    "name": "Lviv_Lviv Opera Hous_Tourists_17675.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17710",
    "url": "https://drive.google.com/file/d/18yytMRCRiKiLrr-yW2g8uvnornQThMp3/view?usp=drivesdk",
    "name": "Dresden_Frauenkirche_Royal Palace_17710.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17715",
    "url": "https://drive.google.com/file/d/184cPBZyzgtjXI1oCimP9Y6V7hc5830zD/view?usp=drivesdk",
    "name": "Dresden_Fürstenzug mura_Dresden Castle_17715.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17725",
    "url": "https://drive.google.com/file/d/1IOWwkAKX9OfRmkdot1mZuqq0PoWGLtGu/view?usp=drivesdk",
    "name": "Dresden_Frauenkirche_Martin Luther s_17725.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17735",
    "url": "https://drive.google.com/file/d/1emxVo2LlA9fyTwl1tMEx4o6cB74WqojY/view?usp=drivesdk",
    "name": "Dresden_Frauenkirche_Buildings_17735.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17769",
    "url": "https://drive.google.com/file/d/19urhiyauDp4pLHxxKPaHgcx8jsNlE22w/view?usp=drivesdk",
    "name": "Dresden_Frauenkirche_Elbe River_17769.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17780",
    "url": "https://drive.google.com/file/d/16zA45_YYWiGXQI11Dp4h3lkEes-U_eck/view?usp=drivesdk",
    "name": "Madrid_Royal Palace of_Plaza_17780.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17790",
    "url": "https://drive.google.com/file/d/1WlLEQmEa0MjEZxuKrThtXv3O8TQn5e2z/view?usp=drivesdk",
    "name": "Madrid_women_Almudena Cathed_17790.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17805",
    "url": "https://drive.google.com/file/d/1q1d-WPEfSPZmIPK12yv8J8mJLUsO1ebw/view?usp=drivesdk",
    "name": "Madrid_Plaza Mayor_Equestrian stat_17805.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17832",
    "url": "https://drive.google.com/file/d/1Pi-1mT0IJxZo4Fp6d_Rec8sVIxA3LtSq/view?usp=drivesdk",
    "name": "Rome_toasted bread_red sauce_17832.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17837",
    "url": "https://drive.google.com/file/d/177qqvX8yU61dh1zMtHGTBsZgH61v3R-Z/view?usp=drivesdk",
    "name": "Rome_food spread_arugula_17837.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17842",
    "url": "https://drive.google.com/file/d/1_603cfSGrqijd70AkehDyJoiCL0ZN3N2/view?usp=drivesdk",
    "name": "Valletta_tour guide_tourist_17842.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17852",
    "url": "https://drive.google.com/file/d/1cFInDFXHWWemBnwOtq2uMbgb1UTZbr_z/view?usp=drivesdk",
    "name": "Valletta_sandwiches_wine_17852.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17857",
    "url": "https://drive.google.com/file/d/1FD5eaXvqaRKMq3qXiX03ujUW4g_FglRh/view?usp=drivesdk",
    "name": "Valletta_Maltese food_meatballs_17857.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17901",
    "url": "https://drive.google.com/file/d/1wTtfQDopYie66K4q9Ls_Uo49z-8OzDVL/view?usp=drivesdk",
    "name": "Berlin_Church_Colonnade_17901.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17917",
    "url": "https://drive.google.com/file/d/1mosYkDD1CIM5wu8iOQz-nlGmB1An2Nai/view?usp=drivesdk",
    "name": "Seville_Plaza de España_canal_17917.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17922",
    "url": "https://drive.google.com/file/d/1E5v5eNEqbm8cjlzVUUAgSAM5LbQZ4oGo/view?usp=drivesdk",
    "name": "Seville_Plaza de España_buildings_17922.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17927",
    "url": "https://drive.google.com/file/d/1AFz8AOnJ2XVpYnk6QYHMmhDj7N24yt2y/view?usp=drivesdk",
    "name": "Seville_Seville Cathedr_Tourists_17927.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17932",
    "url": "https://drive.google.com/file/d/1HXrqPoUcNo8NcZNn_wH2S2qtQ8YiL92R/view?usp=drivesdk",
    "name": "Seville_Seville Cathedr_Patio de los Na_17932.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17937",
    "url": "https://drive.google.com/file/d/1Dn_5KkOfWkle1UtYiNth6sPTh0c7_zW9/view?usp=drivesdk",
    "name": "Seville_Archway_Seville Cathedr_17937.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17942",
    "url": "https://drive.google.com/file/d/1Wk01pU6BymMMQ2HWNyy862VzUO_R-IEG/view?usp=drivesdk",
    "name": "logo_text_17942.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17947",
    "url": "https://drive.google.com/file/d/1O-xe25mPZkVFauG2TuZdmz4P9M9QdT4_/view?usp=drivesdk",
    "name": "Seville_tour group_equestrian stat_17947.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17952",
    "url": "https://drive.google.com/file/d/1joTCSjZZVyUqku0AmRWYoOble4J8BrRE/view?usp=drivesdk",
    "name": "Spain_tourists_cobblestone str_17952.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17957",
    "url": "https://drive.google.com/file/d/15S1g01AnC8WeT1305hbBxD6klf-zk04q/view?usp=drivesdk",
    "name": "Seville_tour group_archway_17957.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17962",
    "url": "https://drive.google.com/file/d/1vw4gpEW6eIkfHiD03Idds_OU1cSxzWmu/view?usp=drivesdk",
    "name": "Seville_tour group_city walls_17962.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17967",
    "url": "https://drive.google.com/file/d/10_bPC_uk0JgOLb9uzm5bagsQVx5S59vB/view?usp=drivesdk",
    "name": "Cordoba_Roman Bridge_Mezquita-Cathed_17967.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "17973",
    "url": "https://drive.google.com/file/d/1hy400b4WO0D4tQ2BYf5fsZQyhDGrHmwl/view?usp=drivesdk",
    "name": "Warsaw_logo_portrait of Cho_17973.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18009",
    "url": "https://drive.google.com/file/d/1Uup2HzQ9uW7AadxZn-hUL9temkF1sdYl/view?usp=drivesdk",
    "name": "Gdańsk_cranes_shipyard_18009.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18015",
    "url": "https://drive.google.com/file/d/1LVNBtpERQQUuROoNkbgME3q5fc-91MDd/view?usp=drivesdk",
    "name": "Gdansk_gate_banner_18015.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18020",
    "url": "https://drive.google.com/file/d/1o8YWcfhwDrvlxIoTOzq7TBoIS2oAaLxT/view?usp=drivesdk",
    "name": "Gdansk_banner_fence_18020.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18030",
    "url": "https://drive.google.com/file/d/1xvrRD79Jn8thNnjBEozYmTCXSNf-MCjT/view?usp=drivesdk",
    "name": "Gdansk_miniature model_Stocznia Gdańsk_18030.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18035",
    "url": "https://drive.google.com/file/d/1kcZnFJeaV0tcyqSZcjaKkeYNTM17673S/view?usp=drivesdk",
    "name": "Wrocław_Old Town Hall_tourists_18035.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18050",
    "url": "https://drive.google.com/file/d/1QKZ5OsWKkmL-bh85zci6nisv7NZAk9es/view?usp=drivesdk",
    "name": "Krakow_bridge_river_18050.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18060",
    "url": "https://drive.google.com/file/d/1mY_YyYueZva4AG6ZuEyU3GuH7yLlpXXT/view?usp=drivesdk",
    "name": "Wrocław_Old Town Hall_tourist_18060.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18065",
    "url": "https://drive.google.com/file/d/16hxNgJOHJ8fHDGqb5-qsJQz3wZTF9GTJ/view?usp=drivesdk",
    "name": "Wroclaw_Round Window_Star of David_18065.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18080",
    "url": "https://drive.google.com/file/d/1-WQU8z3TCE6mn0uwTERVTlbfleT_B1jV/view?usp=drivesdk",
    "name": "Wrocław_Monument to the_sculpture_18080.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18085",
    "url": "https://drive.google.com/file/d/1g8KslYtJgGrn9sCL0QcfJzkIKVHNsLND/view?usp=drivesdk",
    "name": "Wrocław_White Stork Syn_cobblestone str_18085.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18095",
    "url": "https://drive.google.com/file/d/1uBFqNWLbsftsuDTl8OmuqxSDsYIHC2jY/view?usp=drivesdk",
    "name": "Wrocław_Wrocław Univers_towers_18095.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18125",
    "url": "https://drive.google.com/file/d/1JL1UvuY5xB7zfVzSOY3HWajjffprMr6K/view?usp=drivesdk",
    "name": "Munich_Neues Rathaus_Mariensäule_18125.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18130",
    "url": "https://drive.google.com/file/d/11HzTKUFelZpczYf35q3IwNaq6Xp2U7XR/view?usp=drivesdk",
    "name": "Munich_Neues Rathaus N_tourists_18130.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18150",
    "url": "https://drive.google.com/file/d/1h_g5V-fFNTmQTIwNJs_XrH2wgDBIa8Ph/view?usp=drivesdk",
    "name": "Munich_Karlstor_archway_18150.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18155",
    "url": "https://drive.google.com/file/d/1OkZ5KevssgThVf-wf-m4X79ej4zY0qBm/view?usp=drivesdk",
    "name": "Augsburg_fountain_children_18155.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18178",
    "url": "https://drive.google.com/file/d/1zcAFnryLyyoZnDLF-f2W1lvdJF3SiY_w/view?usp=drivesdk",
    "name": "Sopot_Grand Hotel Sop_beach_18178.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18183",
    "url": "https://drive.google.com/file/d/1IgbLBDuBgXXes5raM3wfUbdJ7F-15hSd/view?usp=drivesdk",
    "name": "Sopot_Krzywy Domek Cr_trees_18183.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18188",
    "url": "https://drive.google.com/file/d/1iwiEYA-nu2GSOD9y-HhTtbEAzBLSOhev/view?usp=drivesdk",
    "name": "Sopot_Sopot Summer Th_plaza_18188.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18193",
    "url": "https://drive.google.com/file/d/1pSm7UmQ6uaI-2BFJ29D8aKj5vU-1BjKo/view?usp=drivesdk",
    "name": "Sopot_historical buil_paved walkway_18193.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18198",
    "url": "https://drive.google.com/file/d/15d_nNgmXZrDL70jNZXd6W8IExwAy9234/view?usp=drivesdk",
    "name": "Sopot_Hotel Zhong Hua_building_18198.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18203",
    "url": "https://drive.google.com/file/d/1zYk93bNrNp0G5oRXLQj6ynImPQyWaSn5/view?usp=drivesdk",
    "name": "Sopot_pier_sea_18203.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18220",
    "url": "https://drive.google.com/file/d/1aGLIJhoobmFq5p6Q9eLGcjtRD4d61WoC/view?usp=drivesdk",
    "name": "Warsaw_pianist_grand piano_18220.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18225",
    "url": "https://drive.google.com/file/d/1qKt8WINwxYCnf3XwfL58K5p9AnPVTNIK/view?usp=drivesdk",
    "name": "Warsaw_piano_hands_18225.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18231",
    "url": "https://drive.google.com/file/d/1F898MLsBKqTcfC2kidydUVhA5ZJl1cEP/view?usp=drivesdk",
    "name": "Budapest_Dohány Street S_towers_18231.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "18236",
    "url": "https://drive.google.com/file/d/1h9EE_lp1OXvdpvq-BEqzb84JZgipfd9I/view?usp=drivesdk",
    "name": "Budapest_Dohány Street S_Tour Group_18236.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "1899",
    "url": "https://drive.google.com/file/d/1uDaksZNmneD9lhmL6dsXN5wYu7RF_Qu3/view?usp=drivesdk",
    "name": "Warsaw_Palace of Cultu_skyscrapers_1899.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "19099",
    "url": "https://drive.google.com/file/d/1q-rPwwUvdEDhkhbUiWJPyWlc8N116V9F/view?usp=drivesdk",
    "name": "Barcelona_logo_text_19099.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "19105",
    "url": "https://drive.google.com/file/d/1xABry82J-6zYAl3XbjZlFf9pfcyl5t8U/view?usp=drivesdk",
    "name": "Barcelona_Barcelona Cathe_tourists_19105.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "19115",
    "url": "https://drive.google.com/file/d/1yC4yODgLbBWdJqX2Qz-ySVuNBdIh2dad/view?usp=drivesdk",
    "name": "Barcelona_Casa de les Pun_street_19115.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "19120",
    "url": "https://drive.google.com/file/d/19bQjlZekFW3QLe6MT5xCgWimDX7d4No9/view?usp=drivesdk",
    "name": "Barcelona_statue_fountain_19120.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "19148",
    "url": "https://drive.google.com/file/d/14YnSQn8kAYiA36c-VLrpSUd84W76jybQ/view?usp=drivesdk",
    "name": "Barcelona_cityscape_skyline_19148.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "19158",
    "url": "https://drive.google.com/file/d/1Gd9krRMRb0CXbIE8CVrPOqajsVvftp-P/view?usp=drivesdk",
    "name": "Barcelona_window_stained glass_19158.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "19168",
    "url": "https://drive.google.com/file/d/1_Rxutp7yZ9XnCKFtgpdEUf0qA5wGurw7/view?usp=drivesdk",
    "name": "Barcelona_Park Güell stru_mosaic_19168.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "19173",
    "url": "https://drive.google.com/file/d/1yqfrkDWolVknKG8u2LKGX5AqBiauyAxO/view?usp=drivesdk",
    "name": "Barcelona_Park Güell_tourists_19173.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "19229",
    "url": "https://drive.google.com/file/d/1NQM0FZBwcw_sFEbIAc2pjspTxtUfFW5t/view?usp=drivesdk",
    "name": "Barcelona_bronze cat scul_city street_19229.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "19234",
    "url": "https://drive.google.com/file/d/1U4ZEqSX7eAylY0k26W2LeICjUVbroPe-/view?usp=drivesdk",
    "name": "Barcelona_bronze cat scul_street_19234.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "1937",
    "url": "https://drive.google.com/file/d/1Bw0pN7HuBc0GaKWtua1O75yhTv9miPyU/view?usp=drivesdk",
    "name": "Lviv_fountain_square_1937.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "19384",
    "url": "https://drive.google.com/file/d/14MrQjioelVK6w-WMYITHDK_NjiZOEwJb/view?usp=drivesdk",
    "name": "Paris_skulls_bones_19384.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "19389",
    "url": "https://drive.google.com/file/d/12Zhe09EZgBy98wvHji7Am-MucAFrABgc/view?usp=drivesdk",
    "name": "Paris_Eiffel Tower_Sky_19389.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "19399",
    "url": "https://drive.google.com/file/d/1iee-W8AOtYtnvjn_j6Hbc06TOUFeGkMN/view?usp=drivesdk",
    "name": "Paris_Notre Dame Cath_Seine River_19399.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "19404",
    "url": "https://drive.google.com/file/d/1sTc75uWma413GB2zCUu9_LEhdHoFAHi-/view?usp=drivesdk",
    "name": "Paris_cobblestone str_buildings_19404.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20088",
    "url": "https://drive.google.com/file/d/1zBYmkr8zZnc0ntWoxy4FrGI_oUftj4GN/view?usp=drivesdk",
    "name": "Berlin_Volkshalle mode_dome_20088.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20133",
    "url": "https://drive.google.com/file/d/108ztF9TtZj2Ld3enSCdJmw5ThCZ1F6ZZ/view?usp=drivesdk",
    "name": "bratislava-gb416b2b16_1280-2_20133.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20160",
    "url": "https://drive.google.com/file/d/1RdfQGbbrhKEpdERCHA4RfwWddvENkVZs/view?usp=drivesdk",
    "name": "Prague_Prague Castle_Charles Bridge_20160.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20181",
    "url": "https://drive.google.com/file/d/1VJJHBv0Z5aro2RNecB49gFaJhwMfvHHe/view?usp=drivesdk",
    "name": "Bratislava_logo_text_20181.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20188",
    "url": "https://drive.google.com/file/d/1_L2P_EEy0mvmbVtNvLRe7mDfEwbMDQbL/view?usp=drivesdk",
    "name": "Bratislava_castle_river_20188.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20221",
    "url": "https://drive.google.com/file/d/1p2NN05XuxPzJu8dvT1vmB8G53ljoo4Tr/view?usp=drivesdk",
    "name": "Warsaw_Łazienki Palace_pond_20221.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20274",
    "url": "https://drive.google.com/file/d/169W8DHftdamruC812IXWera58frAkzg8/view?usp=drivesdk",
    "name": "Brussels_Triumphal Arch_Colonnades_20274.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20280",
    "url": "https://drive.google.com/file/d/1adDfsdLI6c-v9vxYuSV2gLdhpou68GKb/view?usp=drivesdk",
    "name": "Brussels_Grand Place_guildhalls_20280.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20286",
    "url": "https://drive.google.com/file/d/1BQ8R2Hg9gEGVLH4ZpSwjZpsGb4XG-zUp/view?usp=drivesdk",
    "name": "Brussels_Grand Place_guildhalls_20286.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20292",
    "url": "https://drive.google.com/file/d/1Q9KNza2CWoYriWt3BNDC2PpdIM5_gLkr/view?usp=drivesdk",
    "name": "logo_text_20292.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "2031",
    "url": "https://drive.google.com/file/d/1LBFS0Lv8MSlsHaVDnHip6TwkPyeVS5jk/view?usp=drivesdk",
    "name": "Wrocław_buildings_rooftops_2031.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20357",
    "url": "https://drive.google.com/file/d/1eNEz2DiBAQcEn-bt0k9p-Vc_3QAhFWB6/view?usp=drivesdk",
    "name": "Istanbul_Hagia Sophia_minarets_20357.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20373",
    "url": "https://drive.google.com/file/d/1DKVwlr6qJndcOjXIij7478MzgijNIHLj/view?usp=drivesdk",
    "name": "Istanbul_logo_text_20373.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20381",
    "url": "https://drive.google.com/file/d/1-yiUHDD7HnANqmGrhg6eDP6VMRUzx2vS/view?usp=drivesdk",
    "name": "Brussels_park_fountains_20381.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20388",
    "url": "https://drive.google.com/file/d/1L-7bWc7iejVeU4enVjZqYyik2REvfQ_j/view?usp=drivesdk",
    "name": "logo_text_20388.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20394",
    "url": "https://drive.google.com/file/d/1Vsc2k2-ufu9BK0-T6CQFrUy_-2ddVcTi/view?usp=drivesdk",
    "name": "Bruges_cobblestone str_historic buildi_20394.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20400",
    "url": "https://drive.google.com/file/d/1-xjS-3BBZ3Gw9sKdYOB2NBETYaBNNZji/view?usp=drivesdk",
    "name": "Bruges_canal_boat_20400.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20406",
    "url": "https://drive.google.com/file/d/1I3mrKawNlqWfbakWq4Y0s6J6hFe3xKwe/view?usp=drivesdk",
    "name": "Bruges_canals_medieval buildi_20406.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20412",
    "url": "https://drive.google.com/file/d/1kQaorfH2RlRR8zQtUm-G004gpiGqlLGO/view?usp=drivesdk",
    "name": "Bruges_Jan van Eyck st_Market Square_20412.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20418",
    "url": "https://drive.google.com/file/d/1RZCO8f6R5P023XWKe58yVAXjVyYSq4XK/view?usp=drivesdk",
    "name": "Bruges_canal_Belfry of Bruge_20418.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20434",
    "url": "https://drive.google.com/file/d/1iM1rXKszobWkr8-Kucpmy_8r3vOHXdI6/view?usp=drivesdk",
    "name": "Warsaw_man_tour guide_20434.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20442",
    "url": "https://drive.google.com/file/d/1KckoH3EJXEk6ercGbMQ9a58pLBRYri6R/view?usp=drivesdk",
    "name": "Dubrovnik_city walls_fortress_20442.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20454",
    "url": "https://drive.google.com/file/d/1Hbtv6KAb9wDYgql5Z6_eUn-waFbWBsGT/view?usp=drivesdk",
    "name": "Dubrovnik_terracotta roof_Cathedral_20454.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20460",
    "url": "https://drive.google.com/file/d/1VotlTxCU3gJZcSbnbAAtK8VBNd2qVNom/view?usp=drivesdk",
    "name": "Dubrovnik_stone buildings_cobblestone str_20460.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20468",
    "url": "https://drive.google.com/file/d/1lhPOehyrDg9UWkd6CyuiMnrX_m2259Z3/view?usp=drivesdk",
    "name": "logo_footprint_20468.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20474",
    "url": "https://drive.google.com/file/d/1IOQWqJSyjRFQrvrhFZcXyVk1ZX6d7LA2/view?usp=drivesdk",
    "name": "Split_buildings_boats_20474.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20480",
    "url": "https://drive.google.com/file/d/1lSMXaFAVgB_MXEfkV-_6IT3GGhNLFlEx/view?usp=drivesdk",
    "name": "Split_stone lion stat_column_20480.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20486",
    "url": "https://drive.google.com/file/d/17VdYQfiOFYJGaxz5SCzQmHtfGhZ9aDZN/view?usp=drivesdk",
    "name": "Split_water_buildings_20486.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20492",
    "url": "https://drive.google.com/file/d/1Nr0bUNlhC7lvINqM0hMRgVr9RMe2R6vk/view?usp=drivesdk",
    "name": "Split_historic buildi_restaurants_20492.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20498",
    "url": "https://drive.google.com/file/d/1k6gDDVgKsrmfFzn9P4iEA3fWiDCN2HAi/view?usp=drivesdk",
    "name": "Split_yachts_harbor_20498.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20548",
    "url": "https://drive.google.com/file/d/1zFmYPUdRnUq9ADZ-TaU-53UXPgEBCRNw/view?usp=drivesdk",
    "name": "Bucharest_Palace of the P_trees_20548.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20560",
    "url": "https://drive.google.com/file/d/1sf02lISTYUVpSH590IhP2FM3nqrcunyw/view?usp=drivesdk",
    "name": "Bucharest_logo_footprint_20560.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20612",
    "url": "https://drive.google.com/file/d/1sQPXnZSJZuaG_B3Gm3hYYoUYSvStmPQv/view?usp=drivesdk",
    "name": "Bucharest_tourists_guide_20612.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20618",
    "url": "https://drive.google.com/file/d/1-K_qO5aOkKA6KhPWwqMoMtQGsFBQ_59e/view?usp=drivesdk",
    "name": "tourists_tour guide_20618.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20642",
    "url": "https://drive.google.com/file/d/11UmxRO9m9psDBiuQ0AnnaT-WNQnSpEH0/view?usp=drivesdk",
    "name": "Bucharest_historical buil_modern high-ris_20642.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20653",
    "url": "https://drive.google.com/file/d/1HmcdYD8_PyWWNpx9BLLOdkqT6tB88--o/view?usp=drivesdk",
    "name": "Sarajevo_Latin Bridge_Miljacka River_20653.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20659",
    "url": "https://drive.google.com/file/d/1xwcxEjaKLhlIfOGXMyT8HpeUzrRjqLFr/view?usp=drivesdk",
    "name": "Sarajevo_Roman ruins_Clock Tower_20659.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20665",
    "url": "https://drive.google.com/file/d/1ouUCbYOr9Npj7X-ABeDJ5DwfWUttPt-G/view?usp=drivesdk",
    "name": "Sarajevo_Gazi Husrev-beg_Minaret_20665.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20671",
    "url": "https://drive.google.com/file/d/1jahStU1BNlNII-ySW5JNDPNntb_hOLws/view?usp=drivesdk",
    "name": "Sarajevo_shops_buildings_20671.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20677",
    "url": "https://drive.google.com/file/d/1qlyO-mdIvmhd3QSwhbJ9yhVttccIsDkM/view?usp=drivesdk",
    "name": "Sarajevo_Latin Bridge_Miljacka River_20677.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20690",
    "url": "https://drive.google.com/file/d/1eaMAwm9B5BrTboSoz6q5Tw8ewcoOu2Hs/view?usp=drivesdk",
    "name": "Zagreb_Zagreb Cathedra_city square_20690.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20696",
    "url": "https://drive.google.com/file/d/1nv6fJRtxTd_yXPpf6nBp9GMKU0Dbb7iS/view?usp=drivesdk",
    "name": "Zagreb_Lotrščak Tower_Marian Column_20696.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20702",
    "url": "https://drive.google.com/file/d/1GSOgbNjNTBTMWNn6qt356Qyo0_0rC_12/view?usp=drivesdk",
    "name": "Bosnia and Herz_text_logo_20702.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20712",
    "url": "https://drive.google.com/file/d/1Ijk_dojsVKp5ahzTFPoyEE1_2bEM_4Cm/view?usp=drivesdk",
    "name": "Biograd na Moru_cityscape_buildings_20712.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20718",
    "url": "https://drive.google.com/file/d/1bRPWe_gxXr3bVeB_pAyZIBQfT03aNdN4/view?usp=drivesdk",
    "name": "Zadar_Roman Forum rui_Church of St Do_20718.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20724",
    "url": "https://drive.google.com/file/d/1pKUljdk5eamUGgjXp6WziM6ybaFiahdT/view?usp=drivesdk",
    "name": "Zadar_waterfront_promenade_20724.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20730",
    "url": "https://drive.google.com/file/d/11bPzQkWNseIehJRdBoXbueLn5_FGd1ec/view?usp=drivesdk",
    "name": "Zadar_Sea Organ_Cyclist_20730.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20736",
    "url": "https://drive.google.com/file/d/1NT41ZbnCxfNPpmLFASSCXtS3VdmSILJ4/view?usp=drivesdk",
    "name": "Edinburgh_stone monument_Edinburgh Castl_20736.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20742",
    "url": "https://drive.google.com/file/d/1sXG96SkWTbN2rmm3zfH4ETGPVA2XQZNa/view?usp=drivesdk",
    "name": "Edinburgh_Balmoral Hotel_King George IV _20742.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20748",
    "url": "https://drive.google.com/file/d/1Zz6ctAR19VxSTQBSmJDyxA7WS7MhosI1/view?usp=drivesdk",
    "name": "Edinburgh_Assembly Rooms_historic buildi_20748.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20756",
    "url": "https://drive.google.com/file/d/1W5unXd12nA88fwQCMqQg57kesHV2IQ5u/view?usp=drivesdk",
    "name": "Scotland_logo_text_20756.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20789",
    "url": "https://drive.google.com/file/d/1EI_iajqAgk8olM_6Ax-42L6bm6r4l521/view?usp=drivesdk",
    "name": "Edinburgh_tourists_tour guide_20789.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20825",
    "url": "https://drive.google.com/file/d/1qIirTB1kwiAP0FcrE4yNnqdiPUdktMI-/view?usp=drivesdk",
    "name": "Antwerp_guildhalls_Grote Markt_20825.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20838",
    "url": "https://drive.google.com/file/d/1mR8Y_bs2wv8iwWMW5zKXV4kmKxBLCXSf/view?usp=drivesdk",
    "name": "Bruges_tourists_tour guide_20838.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20844",
    "url": "https://drive.google.com/file/d/1X3DBsmsJUMzfO9IkHuf4yzyzo4kzD9Uo/view?usp=drivesdk",
    "name": "Brussels_tour group_guide_20844.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20890",
    "url": "https://drive.google.com/file/d/14-pzT58Wv8wWrl-JeteodONc0Fw6I_Sq/view?usp=drivesdk",
    "name": "Sighisoara_Hanul cu Noroc_buildings_20890.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20914",
    "url": "https://drive.google.com/file/d/1v-nuGiChZ75tamXhO8nL_pm1phh9_KgH/view?usp=drivesdk",
    "name": "Bucharest_National Museum_wedding couple_20914.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20939",
    "url": "https://drive.google.com/file/d/1NZluLjHj5vNBmHp4S-e8yRFfm3olYuTO/view?usp=drivesdk",
    "name": "Ghent_Gravensteen Cas_moat_20939.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20945",
    "url": "https://drive.google.com/file/d/1-KP9LT1siwJHkkEGjtC9xPVxHIX-lESr/view?usp=drivesdk",
    "name": "Ghent_canal_boats_20945.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20957",
    "url": "https://drive.google.com/file/d/16kwe78TR5i7GNw0g6D7XI8ALe-FOgvpg/view?usp=drivesdk",
    "name": "Ghent_St Nicholas Chu_tourists_20957.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "20965",
    "url": "https://drive.google.com/file/d/14p3KqgF2e_PQnjKrUfIyQmtKgz3KdCyv/view?usp=drivesdk",
    "name": "madrid-bourbon_20965.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21126",
    "url": "https://drive.google.com/file/d/19hc1FhrkQqBHXIm0UXubaaw6bOd7tLFr/view?usp=drivesdk",
    "name": "Gdansk_tourists_tour guide_21126.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21213",
    "url": "https://drive.google.com/file/d/1qfubK9op9RI2who9Lx9jvcnzds8gQsIQ/view?usp=drivesdk",
    "name": "Berlin_falafel_hummus_21213.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21231",
    "url": "https://drive.google.com/file/d/1bAQzFfpP6e9_Pt_ty7IRdYG3hgzgqRMu/view?usp=drivesdk",
    "name": "Berlin_cake_hazelnuts_21231.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21237",
    "url": "https://drive.google.com/file/d/1khs8tT2zC8VNtyDjZTkkG87ANKnM2qrx/view?usp=drivesdk",
    "name": "Berlin_doner kebab_pita bread_21237.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21249",
    "url": "https://drive.google.com/file/d/1s-wcKsZ7ShwnLPAMbYxTEBUBGysVFs3h/view?usp=drivesdk",
    "name": "Berlin_sausages_griddle_21249.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21255",
    "url": "https://drive.google.com/file/d/1PICV5AoM1kVS--yRG4scLWoKz7KxcvDI/view?usp=drivesdk",
    "name": "Berlin_tourists_Flammkuchen_21255.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21261",
    "url": "https://drive.google.com/file/d/1KFJhCAnj3RjPlW-VUh2A3lXvM-PaLNlj/view?usp=drivesdk",
    "name": "Berlin_Currywurst_people_21261.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21400",
    "url": "https://drive.google.com/file/d/1fr6EWeT5dN7omCubkT-mGLj8d-LzC5hQ/view?usp=drivesdk",
    "name": "Krakow_bartender_cocktails_21400.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21406",
    "url": "https://drive.google.com/file/d/1w4BSqN5eUO5OWKL6h18HTGXt9UP5rH1a/view?usp=drivesdk",
    "name": "Krakow_people_drinks_21406.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21412",
    "url": "https://drive.google.com/file/d/1FKhuuTauy_k-rwsQiwLRZYxWeDgk3Gd_/view?usp=drivesdk",
    "name": "Krakow_people_shot glasses_21412.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21418",
    "url": "https://drive.google.com/file/d/1m21Vk0qnhcOD5wK-SmDI4bxszkvUCh4h/view?usp=drivesdk",
    "name": "Krakow_people_bar_21418.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21424",
    "url": "https://drive.google.com/file/d/1VinB-slEsP58agHnl7ZbhLfREaPzJ0cU/view?usp=drivesdk",
    "name": "Krakow_women_drinks_21424.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21442",
    "url": "https://drive.google.com/file/d/1hm0tM_pTokdWCokb-LXvJ_qbRb2lgCQV/view?usp=drivesdk",
    "name": "Krakow_tourists_group_21442.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21570",
    "url": "https://drive.google.com/file/d/14rgFD288OATF693ZppvYeh-PUOPpFVGN/view?usp=drivesdk",
    "name": "Lisbon_buildings_roofs_21570.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21576",
    "url": "https://drive.google.com/file/d/1vXcBMxHlC2I1zmVXqQBcHIQZTCMRhAoo/view?usp=drivesdk",
    "name": "Lisbon_Belém Tower_sunset_21576.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21588",
    "url": "https://drive.google.com/file/d/1MRkz7F9gXWK9bMviLU_hGhx7rSsBTWcZ/view?usp=drivesdk",
    "name": "Lisbon_Belém Tower_water reflectio_21588.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21600",
    "url": "https://drive.google.com/file/d/1XV0goM-Uf-O3r7RJsz-xbOX4cED7ynQq/view?usp=drivesdk",
    "name": "Lisbon_tram_buildings_21600.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21607",
    "url": "https://drive.google.com/file/d/1ibRWbg93t9F4Lnrsopm7s_AAxeRUMl6Y/view?usp=drivesdk",
    "name": "Lisbon_logo_cartoon travele_21607.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21675",
    "url": "https://drive.google.com/file/d/1JRKgiXihRb2jrttkeYSQNZEd_4dlNqG4/view?usp=drivesdk",
    "name": "Lisbon_Equestrian stat_Rua Augusta Arc_21675.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21681",
    "url": "https://drive.google.com/file/d/1ZUfDnpNRVV-G4tok51xEUwPMFMN_-vhk/view?usp=drivesdk",
    "name": "Lisbon_Rua Augusta Arc_yellow building_21681.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21737",
    "url": "https://drive.google.com/file/d/12B7eoRqfMPOkdJB5uOAb8ZBVJ9VqOg4y/view?usp=drivesdk",
    "name": "Paris_logo_Eiffel Tower_21737.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21749",
    "url": "https://drive.google.com/file/d/1MZsSUxfOLgCxfavfBF3_QF7_M6YScZXz/view?usp=drivesdk",
    "name": "logo_building illust_21749.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21755",
    "url": "https://drive.google.com/file/d/1cpdn6Rs1ULjhphWa9iqO22VrmS_NXjZf/view?usp=drivesdk",
    "name": "Gdansk_logo_walking figure_21755.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21761",
    "url": "https://drive.google.com/file/d/1XnSkAUph4trTHhc24ZXsErjs37TX1_1T/view?usp=drivesdk",
    "name": "Warsaw_logo_text_21761.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21767",
    "url": "https://drive.google.com/file/d/1Zt2Mcu5fisfnudGz_9Eb0G5eJ54mf7Y9/view?usp=drivesdk",
    "name": "Krakow_Logo_Text_21767.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21779",
    "url": "https://drive.google.com/file/d/1ND5zhzhFd5GZL6oDgar3nX5rTG60qxOx/view?usp=drivesdk",
    "name": "Japan_Logo_Pixelated Figur_21779.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21785",
    "url": "https://drive.google.com/file/d/1ydoQ4YGiw651IVGv_W6oN4eZrAAYG227/view?usp=drivesdk",
    "name": "Poznan_logo_text_21785.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21791",
    "url": "https://drive.google.com/file/d/1PT4rgE8ltDIfzlT3IrEJLdpYh0gCqP4k/view?usp=drivesdk",
    "name": "Wroclaw_logo_character_21791.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21808",
    "url": "https://drive.google.com/file/d/18iA-UMrDHKHrQ2nQp6-3Uf8fPvBNB74V/view?usp=drivesdk",
    "name": "Bydgoszcz  Toru_logo_text_21808.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21831",
    "url": "https://drive.google.com/file/d/1x82r2pkvB2C600Pw94sTIMP-agcfg8I7/view?usp=drivesdk",
    "name": "Liverpool_Beatles statue_tourists_21831.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21837",
    "url": "https://drive.google.com/file/d/1H-9U5QmaifVlPwrvie-LhTbq7yEtv-I6/view?usp=drivesdk",
    "name": "Liverpool_Royal Liver Bui_Cunard Building_21837.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21847",
    "url": "https://drive.google.com/file/d/1FWfgs4XfvpRPUZGAczcapFzMOCLytwTS/view?usp=drivesdk",
    "name": "Liverpool_logo_text_21847.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21882",
    "url": "https://drive.google.com/file/d/1pDHe1ahNh-wbaKZm4C9hJrAPdaLxS7dx/view?usp=drivesdk",
    "name": "Krakow_St Kingas Chape_salt sculptures_21882.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21888",
    "url": "https://drive.google.com/file/d/1njM4wR8uTaP72YWuNUN3hb3tkTX0fMGZ/view?usp=drivesdk",
    "name": "Krakow_salt pillars_wooden supports_21888.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "21906",
    "url": "https://drive.google.com/file/d/1i1DlI0pFJ8avUVKNYMUCXtwJK7TO7lki/view?usp=drivesdk",
    "name": "Krakow_Wieliczka Salt _Buildings_21906.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "22418",
    "url": "https://drive.google.com/file/d/1CWmNoKKzmnVvp_7iLQL2s9OX9VXP3I89/view?usp=drivesdk",
    "name": "Porto_Rabelo boats_Douro River_22418.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "22424",
    "url": "https://drive.google.com/file/d/1SzPAsOv2JEbCt0Mi3yUdkx5rMAyrt9ys/view?usp=drivesdk",
    "name": "Porto_buildings_houses_22424.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "22430",
    "url": "https://drive.google.com/file/d/1-jQtgaKHAxiQQrhpwEeIsfL4otvsJObJ/view?usp=drivesdk",
    "name": "Porto_buildings_river_22430.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "22436",
    "url": "https://drive.google.com/file/d/1jxf8ecnSmbVSa1i2Xe2gMfhjmMXKcBHz/view?usp=drivesdk",
    "name": "Porto_Dom Luís I Brid_cityscape_22436.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "22444",
    "url": "https://drive.google.com/file/d/1TH20Zcjm3pNEuOdN-qjXmOVrYEVX-NG5/view?usp=drivesdk",
    "name": "Porto_signpost_tourist_22444.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "22458",
    "url": "https://drive.google.com/file/d/1tI3JMsAITEXxb-eBRR5gFJ9pvY5IBMrj/view?usp=drivesdk",
    "name": "Mostar_Stari Most brid_Neretva River_22458.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "22868",
    "url": "https://drive.google.com/file/d/15Kzp8RpAAyCIwjB88hLNvmtxtuhVquEx/view?usp=drivesdk",
    "name": "Malta_text_graphic design_22868.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "22896",
    "url": "https://drive.google.com/file/d/1Y8TwXXAYXWn8ibBAk4hZw8CrrHCl9HJV/view?usp=drivesdk",
    "name": "logo_text_22896.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "22956",
    "url": "https://drive.google.com/file/d/1owdxMBqUYB7rXEmCiCpTjLSOpifOpmmo/view?usp=drivesdk",
    "name": "Dublin_Campanile_Trinity College_22956.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "22962",
    "url": "https://drive.google.com/file/d/1qSTmk_cafPug6OaZH2WrOVxiyq8iMCf2/view?usp=drivesdk",
    "name": "Dublin_Dublin Castle R_Chapel Royal_22962.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "22968",
    "url": "https://drive.google.com/file/d/1p8cvIS2ee_0vigUlNUR8ldbGxiEcvuKl/view?usp=drivesdk",
    "name": "Dublin_pub_building_22968.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23238",
    "url": "https://drive.google.com/file/d/1lrul7P4_vThmXda5TMSXLjTVVDQ6H2-8/view?usp=drivesdk",
    "name": "Dublin_bridge_river_23238.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23244",
    "url": "https://drive.google.com/file/d/1fDvrvSEJKyc8fcOyS4rcQQ6awJdyICFY/view?usp=drivesdk",
    "name": "Dublin_Custom House_River Liffey_23244.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23299",
    "url": "https://drive.google.com/file/d/11DzuRARUnl-8ZL1wuCprO268GoGORAzO/view?usp=drivesdk",
    "name": "London_Household Caval_Horses_23299.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23305",
    "url": "https://drive.google.com/file/d/10jk2D4BzaMu96OSc6jouEjdu0uJ6gAOe/view?usp=drivesdk",
    "name": "London_Red Telephone B_Big Ben_23305.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23361",
    "url": "https://drive.google.com/file/d/1nKA5wwIAS134auVD-SNSFbskZwkwt-BK/view?usp=drivesdk",
    "name": "Granada_Alhambra Palace_mountains_23361.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23374",
    "url": "https://drive.google.com/file/d/1q4pQxe3Z2uYODgC9P2_kKtt7xnlDgR7m/view?usp=drivesdk",
    "name": "London_logo_text_23374.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23402",
    "url": "https://drive.google.com/file/d/1i0cVVgLqAHn2dyyEzRyO7v_Qzy7RAfqX/view?usp=drivesdk",
    "name": "London_Westminster Abb_double-decker b_23402.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23408",
    "url": "https://drive.google.com/file/d/1gpWeoU0tkKSCaQNMjytSJ4yzejDOLFnU/view?usp=drivesdk",
    "name": "London_London Eye_River Thames_23408.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23432",
    "url": "https://drive.google.com/file/d/1F--OuEhpq0_pynPclCIEuxuUdo7Ige9v/view?usp=drivesdk",
    "name": "London_lake_trees_23432.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23664",
    "url": "https://drive.google.com/file/d/1EWY-5nhe1vCwduf2dslgfpRlRBBi2Ega/view?usp=drivesdk",
    "name": "Mostar_logo_text_23664.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23734",
    "url": "https://drive.google.com/file/d/1XSxSppnfxF0JexMoNWABzxE_BR-trKgh/view?usp=drivesdk",
    "name": "krakow-legends_23734.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23740",
    "url": "https://drive.google.com/file/d/1sn6VQk60len_kqDgNO14e-PaRmJrXNeb/view?usp=drivesdk",
    "name": "Krakow_tour group_tour guide_23740.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23746",
    "url": "https://drive.google.com/file/d/11rAbg6egAA_4MLR5hk01nxRcjjtM8xGP/view?usp=drivesdk",
    "name": "Krakow_tourists_guide_23746.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23752",
    "url": "https://drive.google.com/file/d/1-QGK9fkOBJM_rTw6JYl-dllgtddoV953/view?usp=drivesdk",
    "name": "Krakow_tourists_guide_23752.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23758",
    "url": "https://drive.google.com/file/d/1D_ZnygnY57wy33Bf-AV8GrnFUGFiF2na/view?usp=drivesdk",
    "name": "Krakow_flowers_building_23758.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23764",
    "url": "https://drive.google.com/file/d/1xc7aL_zhJA3PSGN6KxBEBiak9SqgNDa-/view?usp=drivesdk",
    "name": "Krakow_Old Synagogue_cobblestone pla_23764.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23770",
    "url": "https://drive.google.com/file/d/1J5I1CR5c4o-SixaZZ77Fa06feM7T0hb_/view?usp=drivesdk",
    "name": "statue_book_23770.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23779",
    "url": "https://drive.google.com/file/d/11mZ36BgavTe92FeoMqVsrUILuTpVTxbF/view?usp=drivesdk",
    "name": "Antwerp_Our Ladys Cathe_historic buildi_23779.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23785",
    "url": "https://drive.google.com/file/d/1OXWWlHeJcw9l91cZtNB8RqDcL0P8lUwR/view?usp=drivesdk",
    "name": "Ghent_Gravensteen Cas_castle walls_23785.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23791",
    "url": "https://drive.google.com/file/d/106vEGVeSJHvOuUGBEpaQcGppE88Va3gH/view?usp=drivesdk",
    "name": "Antwerp_Brabo Fountain_guildhalls_23791.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23797",
    "url": "https://drive.google.com/file/d/14dEbwYKiFhP6RA642IeHRhwfHVhvmMjg/view?usp=drivesdk",
    "name": "Antwerp_cathedral_street_23797.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23809",
    "url": "https://drive.google.com/file/d/149Z-ytqkYszZL9qXhCXw9chyVcHgSp1m/view?usp=drivesdk",
    "name": "Ghent_canal_church_23809.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23815",
    "url": "https://drive.google.com/file/d/1Z_PKvbRucbEah4BJC7NG9ZyRjjh0KXWV/view?usp=drivesdk",
    "name": "Bruges_tour group_guide_23815.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "23842",
    "url": "https://drive.google.com/file/d/1dpkyHyVb3NWBBxkicdz6ey_bB0YbyNwj/view?usp=drivesdk",
    "name": "Ghent_Gravensteen Cas_tourists_23842.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "24330",
    "url": "https://drive.google.com/file/d/1E4idV8B1T--qS8sbwAt8KpNYW_cT48tD/view?usp=drivesdk",
    "name": "Paris_Palais du Luxem_Luxembourg Gard_24330.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "24336",
    "url": "https://drive.google.com/file/d/1ThraOdBEbdQTYVG6yW_MuFnDaK5S1xIU/view?usp=drivesdk",
    "name": "Paris_Église Saint-Ét_church facade_24336.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "24342",
    "url": "https://drive.google.com/file/d/15SsiyJ69plJur1DJJyNI7_YVudYaV3oI/view?usp=drivesdk",
    "name": "Paris_Sorbonne Univer_Columns_24342.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "24470",
    "url": "https://drive.google.com/file/d/16tbEoLMI1zBQm_e7IbWJAVhcSAFtD1NP/view?usp=drivesdk",
    "name": "Jerusalem_Church of St An_stone architect_24470.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "24476",
    "url": "https://drive.google.com/file/d/1WOpsiTTWKCGHHGixvUr60Dd2SDXpnrE4/view?usp=drivesdk",
    "name": "Rhodes Town_stone buildings_narrow street_24476.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "24489",
    "url": "https://drive.google.com/file/d/1bsSzOvmpq45MW4cLtMIEJW7s_p1pjEDP/view?usp=drivesdk",
    "name": "Jerusalem_I  JLM sign_Jerusalem Old C_24489.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "24495",
    "url": "https://drive.google.com/file/d/1JZJG3Kve-bWDQSDmgcRogAM033FIilDv/view?usp=drivesdk",
    "name": "Jerusalem_Church of the H_entrance_24495.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "24507",
    "url": "https://drive.google.com/file/d/1oDIJC46uEBPf7R3mFfoN2AvgY0ZCz6_O/view?usp=drivesdk",
    "name": "Jerusalem_tour group_church interior_24507.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "24513",
    "url": "https://drive.google.com/file/d/19h3bkwile0MoyGYFc24VBZJZ5d8pJWxx/view?usp=drivesdk",
    "name": "Jerusalem_Edicule_Church of the H_24513.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "24519",
    "url": "https://drive.google.com/file/d/1kjjoUB7QByPk_46YIKVJOrYxZ8r7mWiM/view?usp=drivesdk",
    "name": "Jerusalem_Edicule_marble columns_24519.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "24537",
    "url": "https://drive.google.com/file/d/1JcgqwvnuNR55E4xhfqqjMSAJI9Hk7_-p/view?usp=drivesdk",
    "name": "Jerusalem_tourists_Jerusalem city _24537.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "24549",
    "url": "https://drive.google.com/file/d/1BCeVp-AXE2-m-br21HpizClMZZkqo6i6/view?usp=drivesdk",
    "name": "Jerusalem_stone buildings_staircase_24549.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "24555",
    "url": "https://drive.google.com/file/d/1A_KXvpY7Zhxn-VRPxnchYK097g8Ke9u3/view?usp=drivesdk",
    "name": "logo_star of david_24555.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "24722",
    "url": "https://drive.google.com/file/d/1FVj-xB4jnhFWXCvQPZWwfq8g0McUXHgc/view?usp=drivesdk",
    "name": "Jerusalem_Dome of the Roc_Temple Mount_24722.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "24766",
    "url": "https://drive.google.com/file/d/1wyLuIaT5P8RNC6geahMZa2ohuQwgqGYk/view?usp=drivesdk",
    "name": "Warsaw_pianist_grand piano_24766.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "24781",
    "url": "https://drive.google.com/file/d/1KDw3mRzQXaWeV51_DqVPOFcK8yolnPz8/view?usp=drivesdk",
    "name": "Bucharest_apartment build_balconies_24781.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25706",
    "url": "https://drive.google.com/file/d/1Bbq-t6K499vj30j3-iodFdAVFld1FOsi/view?usp=drivesdk",
    "name": "Istanbul_Istanbul Univer_Turkish Flag_25706.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25712",
    "url": "https://drive.google.com/file/d/11pGFeiHuSVUTEoZf0Nv9WQ6gPXJcFTgZ/view?usp=drivesdk",
    "name": "Istanbul_tour guide_tourist group_25712.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25718",
    "url": "https://drive.google.com/file/d/10KxTVe9GUyjbmthUDbrNqLdHnucr8rng/view?usp=drivesdk",
    "name": "Istanbul_cityscape_Bosphorus_25718.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25724",
    "url": "https://drive.google.com/file/d/1WwQfNghX_QulJc0_Fvfj2wYE6DfdvQzj/view?usp=drivesdk",
    "name": "Istanbul_mosque interior_visitors_25724.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25730",
    "url": "https://drive.google.com/file/d/1Q5IuLT6ZmpH0rvzYQJG2wTxIkxTOC_QZ/view?usp=drivesdk",
    "name": "Istanbul_tour group_guide_25730.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25736",
    "url": "https://drive.google.com/file/d/11vc6F6TZvp6f-sNVnk80-VJlS-JoBpuO/view?usp=drivesdk",
    "name": "Istanbul_tour group_guide_25736.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25773",
    "url": "https://drive.google.com/file/d/16EDkxWjYm3_ACWUFVRtFJ5ULH5FDw8gt/view?usp=drivesdk",
    "name": "Edinburgh_St Giles Cathed_cobblestone str_25773.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25790",
    "url": "https://drive.google.com/file/d/15fUzRuPmfsNUhra0Gq4_o-C8C0g4SFbW/view?usp=drivesdk",
    "name": "Tbilisi_tourists_tour guide_25790.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25811",
    "url": "https://drive.google.com/file/d/1RoooHFPGc827CL0IFiy0f0i2zp2_0gi0/view?usp=drivesdk",
    "name": "Tirana_Statues of comm_Park_25811.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25817",
    "url": "https://drive.google.com/file/d/11EsdABpQZCUlrhBAxHHwIaLkUlaoFmMk/view?usp=drivesdk",
    "name": "Naples_WWII Bunker Mus_Museum Entrance_25817.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25823",
    "url": "https://drive.google.com/file/d/1cNINX8m6AxoIrKm8Ebedikq7NiZjesYv/view?usp=drivesdk",
    "name": "Tirana_historical buil_modern high-ris_25823.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25829",
    "url": "https://drive.google.com/file/d/155rKFNBo9ojeic1j9Mam4Cr3ob5_WMp4/view?usp=drivesdk",
    "name": "Berlin_Berlin Wall sec_Bunker_25829.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25835",
    "url": "https://drive.google.com/file/d/1UA0viW63mR6wRvNvlyncOGGXvVlhQff7/view?usp=drivesdk",
    "name": "Tirana_informational p_floor plan_25835.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25841",
    "url": "https://drive.google.com/file/d/18ek_bke7zbemyLP0czE1RaijSFYnJ4Eo/view?usp=drivesdk",
    "name": "bed_wooden walls_25841.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25847",
    "url": "https://drive.google.com/file/d/1ZDXANH6mYFf0m6HE6qyNuNSXRqeXUAHX/view?usp=drivesdk",
    "name": "Belgrade_corridor_police shields_25847.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25853",
    "url": "https://drive.google.com/file/d/11HnG6tmYC-aTUzKpbnQYejImjIu8C7ER/view?usp=drivesdk",
    "name": "sculpture_metal_25853.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25859",
    "url": "https://drive.google.com/file/d/1Jo03mcG4UE9ehdWlQ_4fA0oFTlIHmL3S/view?usp=drivesdk",
    "name": "Tirana_Mother Teresa s_plaque_25859.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25871",
    "url": "https://drive.google.com/file/d/1l1Ly1-r-FA-47MS9T-GQE3J1_pv_ZXq0/view?usp=drivesdk",
    "name": "Rome_WWII bunker_water feature_25871.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25877",
    "url": "https://drive.google.com/file/d/11NadCGqNnfKl-PcVuTfNei5tYkz9-8d4/view?usp=drivesdk",
    "name": "building_pathway_25877.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25883",
    "url": "https://drive.google.com/file/d/1O1jZjniUy-alKtJVQDcDeu8hvXPaXJY5/view?usp=drivesdk",
    "name": "Tirana_Tirana Opera Ho_Opera Poster La_25883.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25889",
    "url": "https://drive.google.com/file/d/104o7zjDySV5wQqCxRTxPjxRARhh4Tt_0/view?usp=drivesdk",
    "name": "Tirana_historical buil_clock tower_25889.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25895",
    "url": "https://drive.google.com/file/d/1jAm_bHkhif7IQM64gHOuLDVA29sE814h/view?usp=drivesdk",
    "name": "Sofia_tour group_monument_25895.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "25901",
    "url": "https://drive.google.com/file/d/1N6JHaKx5YSboUG7CmyhTCZ1odejGaJZN/view?usp=drivesdk",
    "name": "Unknown_pedestrians_restaurants_25901.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "26160",
    "url": "https://drive.google.com/file/d/1CBbl5oSyRoQjDLJv3D1FUaw-I1smHbkh/view?usp=drivesdk",
    "name": "Tirana_text_logo_26160.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "26167",
    "url": "https://drive.google.com/file/d/1pFSSDOahsVRB9Uhiw-bNAWjCH853xXkY/view?usp=drivesdk",
    "name": "Tirana_Clock Tower_Building_26167.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "26353",
    "url": "https://drive.google.com/file/d/1vd9x_RSrgXRzissZvfHeuf0a5O_-puiH/view?usp=drivesdk",
    "name": "Gdansk_gate_sign_26353.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "26359",
    "url": "https://drive.google.com/file/d/1QLqhDXEzHbEvVaEV2G-blGLMA-zo-jff/view?usp=drivesdk",
    "name": "Gdansk_European Solida_Memorial Wall_26359.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "26384",
    "url": "https://drive.google.com/file/d/1ERlyNgOzAfVvOZItMRUcafk67kVjUvY3/view?usp=drivesdk",
    "name": "Gdansk_hydraulic press_industrial buil_26384.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "26410",
    "url": "https://drive.google.com/file/d/1ZK4-slPLYSiwZmmaCoBvtCJ5OnKNOj_V/view?usp=drivesdk",
    "name": "Gdansk_stage_model ship_26410.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "26414",
    "url": "https://drive.google.com/file/d/1kfTzLX79eZj1X33uRMGL0CSfSigVX48e/view?usp=drivesdk",
    "name": "Gdansk_red brick build_port cranes_26414.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "26431",
    "url": "https://drive.google.com/file/d/1YfIYYWHwBPQJxBytKq9AyrtU6rFqc39T/view?usp=drivesdk",
    "name": "Gdansk_harbor crane_Motława River_26431.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "26776",
    "url": "https://drive.google.com/file/d/1KTLQryiPY714hmpNH595PGnvBSWsjSZ9/view?usp=drivesdk",
    "name": "paris-alexander-III-bridge_26776.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "26782",
    "url": "https://drive.google.com/file/d/1ehlqpAjMFmLX8LdB0qccJEB8Goqgfk6m/view?usp=drivesdk",
    "name": "Paris_Arc de Triomphe_light trails_26782.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "26788",
    "url": "https://drive.google.com/file/d/1RGBTQlIC6dfrmi7Zbt98Dmal4YZ_9A0I/view?usp=drivesdk",
    "name": "Paris_Luxor Obelisk_cars_26788.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "26794",
    "url": "https://drive.google.com/file/d/1mlqkXcb7dccoGFNUjxIo-K4iAq-SRtCv/view?usp=drivesdk",
    "name": "Paris_Seine River_Eiffel Tower_26794.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "26800",
    "url": "https://drive.google.com/file/d/1PomTZqVkt2KgLLP7zc4rfQe3dZGKZh2w/view?usp=drivesdk",
    "name": "paris-eiffel-tower_26800.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27508",
    "url": "https://drive.google.com/file/d/1oQ22N1MWBDbLFZ2oERtzUXHHt5QKLh4T/view?usp=drivesdk",
    "name": "Jerusalem_IJERUSALEM sign_city walls_27508.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27515",
    "url": "https://drive.google.com/file/d/1p2qnW6YYPdo6N9DSPorYdK3kqBeSCj32/view?usp=drivesdk",
    "name": "Jerusalem_street_shops_27515.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27521",
    "url": "https://drive.google.com/file/d/1EDkX2X0Zs-3Ee78QIRWBDJ7vcAAtCZCw/view?usp=drivesdk",
    "name": "Jerusalem_olives_metal bins_27521.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27527",
    "url": "https://drive.google.com/file/d/1R1bjCzrbKgms3ssZgURvfL2SS2l7t3YP/view?usp=drivesdk",
    "name": "Lisbon_mural_elderly man por_27527.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27533",
    "url": "https://drive.google.com/file/d/1Wkok3QtfG43qetN5O9GzSGyFS--V8sR7/view?usp=drivesdk",
    "name": "Jerusalem_stone buildings_shops_27533.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27539",
    "url": "https://drive.google.com/file/d/1t4ndc_PBI_JLINI3XXz8e3YGoQmfmaFw/view?usp=drivesdk",
    "name": "Jerusalem_Mahane Yehuda M_stalls_27539.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27563",
    "url": "https://drive.google.com/file/d/12NlgWJyMOG9gMPN84Ml29hf3-K0npxhm/view?usp=drivesdk",
    "name": "Bucharest_Palace of the P_sculptures_27563.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27569",
    "url": "https://drive.google.com/file/d/1Cj4hwHUGAjJAQOEq7gUjjmcGiKayhuix/view?usp=drivesdk",
    "name": "Bucharest_tour group_Palace of the P_27569.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27608",
    "url": "https://drive.google.com/file/d/1HhqdFO8M3ISW4zyKHAgCfT7apHX21sXl/view?usp=drivesdk",
    "name": "Alsace_gate_barbed wire_27608.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27614",
    "url": "https://drive.google.com/file/d/1kYLjvlFmeoDA98PiLHeOH-VIMYsfnOMu/view?usp=drivesdk",
    "name": "Gdansk_guard tower_gate_27614.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27652",
    "url": "https://drive.google.com/file/d/1wZI_18c5J5sHUjw151Db3VHmorvWxNgL/view?usp=drivesdk",
    "name": "Gdansk_Museum of the S_waterway_27652.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27658",
    "url": "https://drive.google.com/file/d/19mtLs7dyQ_dK1ajeau852KHKqLrDD6Bl/view?usp=drivesdk",
    "name": "Gdansk_World War II Mu_Building_27658.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27664",
    "url": "https://drive.google.com/file/d/1BYik6epxEPzBO0GH1rXsKHvVZwW4lY6A/view?usp=drivesdk",
    "name": "Gdansk_propaganda post_bust_27664.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27676",
    "url": "https://drive.google.com/file/d/1OlklaKakI8pINoI0hfqRDfKH8kG4zlCm/view?usp=drivesdk",
    "name": "Gdansk_luggage_clothing_27676.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27683",
    "url": "https://drive.google.com/file/d/1LDt58MB-u2A-fL_nq1dV0q5aaoUOGZp7/view?usp=drivesdk",
    "name": "Gdansk_photographs_glass panels_27683.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27689",
    "url": "https://drive.google.com/file/d/1BzH2GjPaFS1yD5poodLyF2NeDPkw78r1/view?usp=drivesdk",
    "name": "Gdansk_Sherman M4 tank_military unifor_27689.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27695",
    "url": "https://drive.google.com/file/d/1lC45gckyCjrASDrDJ8E3Dhcrz4b3O0r2/view?usp=drivesdk",
    "name": "Gdansk_T-34 tank_ruined building_27695.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27701",
    "url": "https://drive.google.com/file/d/16jOo0hCnzX-e_PYrs2GlhFTh7Xuubx5X/view?usp=drivesdk",
    "name": "Gdansk_street_buildings_27701.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "27722",
    "url": "https://drive.google.com/file/d/1RxhdlmtZRR9fF_SeyoonItnBOloVzMpL/view?usp=drivesdk",
    "name": "Gdansk_European Solida_Walkative umbre_27722.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28457",
    "url": "https://drive.google.com/file/d/1pIxv4y8wbSJUOnIkWcnU4hyV7vSeVQNm/view?usp=drivesdk",
    "name": "Bratislava_cobblestone str_historic buildi_28457.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28463",
    "url": "https://drive.google.com/file/d/1-3SyNLqYLijuO5HPS_qFbyP5ga8wf_3x/view?usp=drivesdk",
    "name": "Bratislava_Floating Bar_Bratislava Cast_28463.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28475",
    "url": "https://drive.google.com/file/d/1EhO6jUKkSro7KUzHoIIICYLJiDmUjI_7/view?usp=drivesdk",
    "name": "Bratislava_St Martins Cath_Danube River_28475.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28509",
    "url": "https://drive.google.com/file/d/1driylFd7UPNjJwC1mg0ofrKeEbs9u0RS/view?usp=drivesdk",
    "name": "Spain_historic buildi_church tower_28509.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28515",
    "url": "https://drive.google.com/file/d/1qXXwQ07cE7uYmo5j5eJfhGaLljuoa0NC/view?usp=drivesdk",
    "name": "Cádiz_beach_buildings_28515.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28527",
    "url": "https://drive.google.com/file/d/1YY5ZQfApS4nOM4yblit51VVt7g87wDSv/view?usp=drivesdk",
    "name": "Cádiz_Cádiz Cathedral_towers_28527.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28533",
    "url": "https://drive.google.com/file/d/14DZ4KJPhY4RP-TIu9vjq_1R7syZnivmA/view?usp=drivesdk",
    "name": "Cádiz_Monument to the_statues_28533.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28542",
    "url": "https://drive.google.com/file/d/19SydjZwI1J7rYfXm7xuYik08RQwjDEjR/view?usp=drivesdk",
    "name": "Cádiz_logo_bridge_28542.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28740",
    "url": "https://drive.google.com/file/d/19uhCa7oMRofHEB6iZZrryaO0Kqxtl9Zc/view?usp=drivesdk",
    "name": "Malaga_Plaza de Toros _buildings_28740.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28746",
    "url": "https://drive.google.com/file/d/141Dg9mcPIajnXvTnvJJe2oyCxsirN9Om/view?usp=drivesdk",
    "name": "Murcia_Murcia Cathedra_palm trees_28746.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28758",
    "url": "https://drive.google.com/file/d/1Ph5HuiCJL-7dojepP7xWE1RRcluCjapJ/view?usp=drivesdk",
    "name": "Malaga_Mediterranean S_Malaga cityscap_28758.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28794",
    "url": "https://drive.google.com/file/d/16AX7dyySiDiS8yGq7eJ7wxDdYyC0FsE4/view?usp=drivesdk",
    "name": "Berlin_Soviet War Memo_archway_28794.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28806",
    "url": "https://drive.google.com/file/d/1T6-XA6GIoegec56eDqqHP1AMmPf6yfvL/view?usp=drivesdk",
    "name": "Berlin_Soviet War Memo_statue_28806.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28824",
    "url": "https://drive.google.com/file/d/1jgeKVjOgoiBzJHTm8KEN78oejFEwJdjh/view?usp=drivesdk",
    "name": "Jerusalem_tourists_tour guide_28824.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28853",
    "url": "https://drive.google.com/file/d/1SipEFXPQH2XBzp0bMOsKNIYebD5LidFg/view?usp=drivesdk",
    "name": "Jaffa_minaret_mosque_28853.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28859",
    "url": "https://drive.google.com/file/d/1tmWCgIRXbPgaqJSh2mL3ASy8PnP1qHqb/view?usp=drivesdk",
    "name": "Tel Aviv_beach_promenade_28859.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28878",
    "url": "https://drive.google.com/file/d/1D1eOpIxPcPuwlyd6Ct2iuQIoC98tldkU/view?usp=drivesdk",
    "name": "Jerusalem_Hurva Synagogue_street_28878.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28884",
    "url": "https://drive.google.com/file/d/1weHcN9z6uyqvqT3fygDn0ThhPUOv_2yZ/view?usp=drivesdk",
    "name": "Tel Aviv_graffiti mural_shop window_28884.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28890",
    "url": "https://drive.google.com/file/d/14kfD3KFpFtAVwB5N-MpY5iiTl8-dsZz4/view?usp=drivesdk",
    "name": "Tel Aviv_modern high-ris_historic buildi_28890.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28896",
    "url": "https://drive.google.com/file/d/1SNnbi6m_x-2wcePXRljF2H64ZRhRCohd/view?usp=drivesdk",
    "name": "Tel Aviv_statue_horse_28896.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28902",
    "url": "https://drive.google.com/file/d/1NA95MHDbx63QHgeqYJHlNZJIhCH-_rii/view?usp=drivesdk",
    "name": "Tel Aviv_Bauhaus buildin_modern skyscrap_28902.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28920",
    "url": "https://drive.google.com/file/d/1IW_9xm5dPtx8ZzePchA-bUqNg5EZI_dv/view?usp=drivesdk",
    "name": "Jerusalem_Hamsa hand deco_Menorahs_28920.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28926",
    "url": "https://drive.google.com/file/d/1eSXygNgeBIsyHl2I9SEyGH7sS-OUDJ1a/view?usp=drivesdk",
    "name": "Tel Aviv_buildings_street_28926.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "28951",
    "url": "https://drive.google.com/file/d/1MtkZvq0qnW8DzUnjIVc9iADDbK9i4FaT/view?usp=drivesdk",
    "name": "Malaga_logo_text_28951.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "29539",
    "url": "https://drive.google.com/file/d/1sUVWZ1fvLr1bmj7OES5RSZ9UwsjDi30W/view?usp=drivesdk",
    "name": "Krakow_woman_obwarzanek krak_29539.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "29618",
    "url": "https://drive.google.com/file/d/1fp4P8izP2O4mEQ7538kh0HDyyYyIRl0n/view?usp=drivesdk",
    "name": "Sintra_Quinta da Regal_gardens_29618.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "29624",
    "url": "https://drive.google.com/file/d/1Eq8VMKhGR5CiCM2R0oWSfrRHy4k-C4eO/view?usp=drivesdk",
    "name": "Sintra_palace_walkway_29624.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "29636",
    "url": "https://drive.google.com/file/d/1VyooPEYGW9K7QmSneSa2GJUBZWzgjqA5/view?usp=drivesdk",
    "name": "Sintra_Pena Palace_castle_29636.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "29642",
    "url": "https://drive.google.com/file/d/14ydsh9H3pEgeVhFp92StkH5vA0YlpyiS/view?usp=drivesdk",
    "name": "Sintra_Initiation Well_spiral staircas_29642.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "29668",
    "url": "https://drive.google.com/file/d/14umTFC2fJcpRi35B-zoG5MhPBCcXwtio/view?usp=drivesdk",
    "name": "Sintra_Pena Palace_tourists_29668.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "29674",
    "url": "https://drive.google.com/file/d/1TfuZSm2vPiE4tlSHEOhHXpLVytG_yqQy/view?usp=drivesdk",
    "name": "Sintra_Pena Palace_tourists_29674.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "29682",
    "url": "https://drive.google.com/file/d/1u8CSldkUxVV5Nt21qqetWd73Pnf33Zb2/view?usp=drivesdk",
    "name": "Krakow_logo_text_29682.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "29694",
    "url": "https://drive.google.com/file/d/1yNdAdnkgmqRHw5Eiv07o8CJ9vsAEGTPZ/view?usp=drivesdk",
    "name": "Krakow_chandelier_salt pillars_29694.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "29700",
    "url": "https://drive.google.com/file/d/1oRjOz09O7EbZuPYeTJ8FHOiBAIcPWQPR/view?usp=drivesdk",
    "name": "Krakow_wooden staircas_salt walls_29700.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "29706",
    "url": "https://drive.google.com/file/d/1VLzgU_Ezu-q3-YWTqbgiVqrp53S_33Rs/view?usp=drivesdk",
    "name": "Krakow_Subterranean La_Wooden Walkway_29706.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "29718",
    "url": "https://drive.google.com/file/d/1u1e_aBLo_bHK2DnPD0xUhmVE3F7lNjkb/view?usp=drivesdk",
    "name": "Krakow_Salt Mine Chape_Tour Group_29718.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "29724",
    "url": "https://drive.google.com/file/d/1KieVI43cOK3YVp65TomJjuhAWsD46SXR/view?usp=drivesdk",
    "name": "Krakow_tourists_wooden beams_29724.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "29854",
    "url": "https://drive.google.com/file/d/1bD4uvR6r_vTSvl1E2a0eZDqNf4Adbpg0/view?usp=drivesdk",
    "name": "Rome_Colosseum_logo_29854.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30329",
    "url": "https://drive.google.com/file/d/1dZrtn8XYRat0_-r8wH0HolMVbWLpcqMC/view?usp=drivesdk",
    "name": "Edinburgh_cobblestone all_stone buildings_30329.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30335",
    "url": "https://drive.google.com/file/d/19KF7hLsM53VPeZwppAXa41HLkdHvXLvD/view?usp=drivesdk",
    "name": "Edinburgh_buildings_church spire_30335.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30341",
    "url": "https://drive.google.com/file/d/1evvIgk7P94IKvKYWI9jFYvcobrtGz7b_/view?usp=drivesdk",
    "name": "Edinburgh_Edinburgh Castl_Building with F_30341.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30353",
    "url": "https://drive.google.com/file/d/1Lj_DZ8EBVst8QHHXn_L1Bl1G9V8HTwpq/view?usp=drivesdk",
    "name": "Edinburgh_Edinburgh Castl_rock_30353.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30355",
    "url": "https://drive.google.com/file/d/1LxcZIZPVj5m3Fz8xWKZfdw_6hxuly5py/view?usp=drivesdk",
    "name": "Edinburgh_Edinburgh Castl_historic buildi_30355.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30367",
    "url": "https://drive.google.com/file/d/1pzkNLwgyxWkGg6UsY1NUOiabX3cRlsQa/view?usp=drivesdk",
    "name": "Edinburgh_Edinburgh Castl_Calton Hill_30367.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30435",
    "url": "https://drive.google.com/file/d/1FPeypoZ-6BSfCqTtlp-PPc83JAeYq-dG/view?usp=drivesdk",
    "name": "Nice_beach umbrellas_beach chairs_30435.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30441",
    "url": "https://drive.google.com/file/d/1owpMjDqZQYP--wa8nIdEiEpPfMQT7XSK/view?usp=drivesdk",
    "name": "Nice_boats_harbor_30441.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30453",
    "url": "https://drive.google.com/file/d/1my8uxVcKM4byGYJdROshJJZbRf0dGsQ1/view?usp=drivesdk",
    "name": "Nice_Chairs_Promenade_30453.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30459",
    "url": "https://drive.google.com/file/d/1LjLCPf09-Uaa1WQnbTPTkj73d7bU2-Rl/view?usp=drivesdk",
    "name": "Nice_Port of Nice_yachts_30459.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30465",
    "url": "https://drive.google.com/file/d/1IMRbaknjMtse3riPh68oEGIHKtv_vrgh/view?usp=drivesdk",
    "name": "Nice_city of Nice_Mediterranean S_30465.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30471",
    "url": "https://drive.google.com/file/d/18sdpqVpKLcB9YSjYy8wnRdAQegGDw0A8/view?usp=drivesdk",
    "name": "Nice_tourists_cityscape_30471.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30477",
    "url": "https://drive.google.com/file/d/13Kpw8aoNMQ34y75DudrM4oVLsvX2b1L_/view?usp=drivesdk",
    "name": "Nice_I Love Nice sig_hashtag_30477.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30489",
    "url": "https://drive.google.com/file/d/1_K9dIEeDBkkH5ws3bHIYhnHjELzpIoxl/view?usp=drivesdk",
    "name": "Nice_Chapelle de la _columns_30489.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30780",
    "url": "https://drive.google.com/file/d/18GyjLwBh7pbtnT4wrjBH8K6MOhKzx-p3/view?usp=drivesdk",
    "name": "stylized person_weights_30780.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30796",
    "url": "https://drive.google.com/file/d/1PdAYqOUacqzxu_A4YhJmAZpg3oyzrd_4/view?usp=drivesdk",
    "name": "Spain_soldiers_armored car_30796.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30802",
    "url": "https://drive.google.com/file/d/1Qg0rYKakmtqQ2PauXKItX1yceHmJLRYe/view?usp=drivesdk",
    "name": "Barcelona_woman_rifle_30802.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30808",
    "url": "https://drive.google.com/file/d/1u8AmwEXImuGnEYX41lFVwUXS7hVvT2BQ/view?usp=drivesdk",
    "name": "Spain_Francisco Franc_military office_30808.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30814",
    "url": "https://drive.google.com/file/d/1YY8d9o3W5co8t3QAir7Iqgid0Dayxp7V/view?usp=drivesdk",
    "name": "Barcelona_tour guide_tourists_30814.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30820",
    "url": "https://drive.google.com/file/d/1_EhUFRuakPV-nhjf6Wf7JdIQ2I_jhYZf/view?usp=drivesdk",
    "name": "Barcelona_tour guide_tourists_30820.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30898",
    "url": "https://drive.google.com/file/d/1fv2f850TlO994z2SIgXkteB-3tEmPPb6/view?usp=drivesdk",
    "name": "Berlin_statue_Karl Marx_30898.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30941",
    "url": "https://drive.google.com/file/d/1OIFfHADYY1d3_e83O8jWdiARHYildLz1/view?usp=drivesdk",
    "name": "Walkative-Welcome-to-Nice-tour_30941.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "30951",
    "url": "https://drive.google.com/file/d/1WQe_DrbWjoU10cJxrpM7viuwYzFPqKXP/view?usp=drivesdk",
    "name": "Maldives_palm tree_beach chairs_30951.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31072",
    "url": "https://drive.google.com/file/d/1wkfp6xwjngsFowi0-SD_NFancljREEeQ/view?usp=drivesdk",
    "name": "pianist_grand piano_31072.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31077",
    "url": "https://drive.google.com/file/d/1h_3Wb95JtKnjWHsdx0ZujbZrfYWqeSqU/view?usp=drivesdk",
    "name": "woman_dress_31077.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31082",
    "url": "https://drive.google.com/file/d/1DgzMtYPzy-PyPbJcMOamag5lNBUAi9ZB/view?usp=drivesdk",
    "name": "Krakow_Building_Street_31082.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31145",
    "url": "https://drive.google.com/file/d/1k7VkBijsDhZPPGrqpgvNHhNTStot33VR/view?usp=drivesdk",
    "name": "Granada_Alhambra Palace_Mountains_31145.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31200",
    "url": "https://drive.google.com/file/d/1yaj4K1pU1lmWCw6Ah_K_BYKDZXQqPF4J/view?usp=drivesdk",
    "name": "croatia-8118943_640-2_31200.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31394",
    "url": "https://drive.google.com/file/d/1Tue0fEMqUdub5nFlVP5bx3pEo4bkkWrJ/view?usp=drivesdk",
    "name": "London_logo_Tower Bridge_31394.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "314",
    "url": "https://drive.google.com/file/d/16zvmrJDQ84Pw2DkcTSghJnvSzYwD_7tN/view?usp=drivesdk",
    "name": "FW_057_2@2x_314.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31633",
    "url": "https://drive.google.com/file/d/1UNDrmWs6n8QScUwIOMFcprDpTHQpcqtx/view?usp=drivesdk",
    "name": "London_buildings_cars_31633.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31639",
    "url": "https://drive.google.com/file/d/1dB1IbXdGTj-jLAMZnLoDDCbgMtLwgUY7/view?usp=drivesdk",
    "name": "London_Regent Street_Union Jack flag_31639.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31645",
    "url": "https://drive.google.com/file/d/1Z2as_97slkLE9pARQ6fEZ1gmvaUM5WhU/view?usp=drivesdk",
    "name": "London_The Lower Third_building exteri_31645.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31651",
    "url": "https://drive.google.com/file/d/1Sqqk0B5RTGt5CAgmlu5qY6nL9dwtJ5PH/view?usp=drivesdk",
    "name": "London_Neon Sign_Ronnie Scotts J_31651.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31657",
    "url": "https://drive.google.com/file/d/1YdUVtrdEAsbtl_4o1FRWfISBdZsENAAs/view?usp=drivesdk",
    "name": "London_buildings_shops_31657.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31759",
    "url": "https://drive.google.com/file/d/11tqCdbMh5ZYSQF_Qm1E0Y0l87iafjTxo/view?usp=drivesdk",
    "name": "Malaga_logo_text_31759.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31771",
    "url": "https://drive.google.com/file/d/11kFoaQk97DNn-9cTSu08gEgmJYCW4ef7/view?usp=drivesdk",
    "name": "Málaga_pathway_citrus trees_31771.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31777",
    "url": "https://drive.google.com/file/d/1yKMVKR4eES3JKGJ_tvfw0D0crutjfY-6/view?usp=drivesdk",
    "name": "Málaga_garden_fountain_31777.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31783",
    "url": "https://drive.google.com/file/d/1TxAQ1a9lEvGbpTOBr8E86NR3_DsWKYxN/view?usp=drivesdk",
    "name": "Seville_courtyard_fountain_31783.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31789",
    "url": "https://drive.google.com/file/d/1Qsksk8PPM5HKOlZ2qsoaAUi0wZ1ZYlZQ/view?usp=drivesdk",
    "name": "Malaga_stone walls_arches_31789.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31801",
    "url": "https://drive.google.com/file/d/1Nw9P5cwyKvtaRC3623hokqfKcQybU_7r/view?usp=drivesdk",
    "name": "Malaga_courtyard_water feature_31801.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31917",
    "url": "https://drive.google.com/file/d/1Qy5Slod21ZNX_cPDpCDqjh0bbSj5YulR/view?usp=drivesdk",
    "name": "Liverpool_ferry boat_Royal Liver Bui_31917.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31923",
    "url": "https://drive.google.com/file/d/1uJUx3d5jN-MhGJZvjUCbGEioRVvbWGjz/view?usp=drivesdk",
    "name": "Liverpool_Royal Liver Bui_other buildings_31923.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31932",
    "url": "https://drive.google.com/file/d/1ZrhEX5cVaOoMCskI6X6UdkLdp11b8Uou/view?usp=drivesdk",
    "name": "Liverpool_Beatles statues_street_31932.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31957",
    "url": "https://drive.google.com/file/d/1KG51XQFzEirPUVa95p9s7cm9nh_gLnM0/view?usp=drivesdk",
    "name": "Pula_Pula Arena_stone arches_31957.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31963",
    "url": "https://drive.google.com/file/d/1GW9D4FHjS8s03aWs4vIT_rwBfj0SRi3C/view?usp=drivesdk",
    "name": "Pula_Temple of Augus_columns_31963.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31969",
    "url": "https://drive.google.com/file/d/12Lcmkc8_ei8Qke_SLlhGV-TeqhhHBbmJ/view?usp=drivesdk",
    "name": "Split_umbrella_person_31969.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31975",
    "url": "https://drive.google.com/file/d/1mAnMLKs4pu1kVF2F5JTp60pClxqVJGP4/view?usp=drivesdk",
    "name": "Pula_tour guide_tourists_31975.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31981",
    "url": "https://drive.google.com/file/d/1oN_tjaW6UcNYJkGXVm6sEJIeWXVnc94w/view?usp=drivesdk",
    "name": "logo_text_31981.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "31995",
    "url": "https://drive.google.com/file/d/1aGbsaEqNoJJmzajRoonhzTubuZm7fRPJ/view?usp=drivesdk",
    "name": "Scotland_logo_mountains_31995.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32034",
    "url": "https://drive.google.com/file/d/1PqEbPSzGoryK2EJQ3Dr6aZB08E6KttDO/view?usp=drivesdk",
    "name": "Bratislava_St Martins Cath_city buildings_32034.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32040",
    "url": "https://drive.google.com/file/d/1g6K5z7lz_6Kd3GMojHM-r5uCz09xHius/view?usp=drivesdk",
    "name": "Bratislava_Blue Church_tower_32040.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32074",
    "url": "https://drive.google.com/file/d/1_UKD6iz9BXEp-pQ8gXFpC7p7XohcljCt/view?usp=drivesdk",
    "name": "Scotland_Saltire_Text_32074.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32086",
    "url": "https://drive.google.com/file/d/1Sdax1cKKmVzjBUC3qBq2uqec2urFf2jh/view?usp=drivesdk",
    "name": "Glasgow_tour group_guide_32086.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32092",
    "url": "https://drive.google.com/file/d/12sUSW_YZc-FRgtyIM3WZm7ej1flTxZcs/view?usp=drivesdk",
    "name": "Belfast_mural_street art_32092.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32098",
    "url": "https://drive.google.com/file/d/1h3ws-CyuEMQDtepmr4qxD0aotPRdZsmH/view?usp=drivesdk",
    "name": "Edinburgh_Georgian buildi_clock tower_32098.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32119",
    "url": "https://drive.google.com/file/d/1TtANVxM2inVVhCCla7rZOA4wudGUdNlc/view?usp=drivesdk",
    "name": "Krakow_borscht soup_tray_32119.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32131",
    "url": "https://drive.google.com/file/d/1NA4JQCdiWQPmfcqYJoSRUdIQ45vVrZXF/view?usp=drivesdk",
    "name": "Krakow_tourists_food_32131.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32137",
    "url": "https://drive.google.com/file/d/1NC04p1i6AfBr4g0u2Y14p3CuHXDe9EK0/view?usp=drivesdk",
    "name": "Krakow_tourists_food_32137.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32149",
    "url": "https://drive.google.com/file/d/1H-bZVSV99_68K0bPTvCOaMM5EO7MuOJr/view?usp=drivesdk",
    "name": "Krakow_pierogi_appetizers_32149.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32155",
    "url": "https://drive.google.com/file/d/1YImTFCTJb0jMv42RRJRVdwv01pyAYRoF/view?usp=drivesdk",
    "name": "Krakow_pierogi_plates_32155.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32161",
    "url": "https://drive.google.com/file/d/1-BfsKkhOlJh7ve-RtSeZDblkgerP1X0P/view?usp=drivesdk",
    "name": "Krakow_table_plates_32161.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32179",
    "url": "https://drive.google.com/file/d/1wXlEVTHDlMNcBgoyQ4XSfIR80UoclOVy/view?usp=drivesdk",
    "name": "Krakow_tour group_guide_32179.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32191",
    "url": "https://drive.google.com/file/d/1nzQZeSIlWbZkRMzwVlseoyQTuKgjtNa1/view?usp=drivesdk",
    "name": "Krakow_grilled cheese_regional beer_32191.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32197",
    "url": "https://drive.google.com/file/d/1hQ-c1-8kxdRwOmdqoL4wg_oIkuCweiP_/view?usp=drivesdk",
    "name": "Krakow_tour guide_tourists_32197.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32203",
    "url": "https://drive.google.com/file/d/19PaN5Id9x_2n-ygU_C_4rGmN-m22WwFc/view?usp=drivesdk",
    "name": "Krakow_tray of zapieka_tour group_32203.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32235",
    "url": "https://drive.google.com/file/d/1Bn4RI0SQqsw454oGSKeUKVCanX2hRFBe/view?usp=drivesdk",
    "name": "Srebrenica_stone monument_inscription_32235.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32241",
    "url": "https://drive.google.com/file/d/1Rndjlule7Sk1soCm6mqgAVqYTGDrpmmW/view?usp=drivesdk",
    "name": "Sarajevo_memorial wall_names_32241.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32247",
    "url": "https://drive.google.com/file/d/14CTQteeDOS0F-r0LwoDlsOJYDOrtoVDw/view?usp=drivesdk",
    "name": "Caldas da Rainh_natural spring_rock formation_32247.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32253",
    "url": "https://drive.google.com/file/d/1wJ_32bvzwXnLBbOmO0UNDgmoBFmp6tHF/view?usp=drivesdk",
    "name": "Sarajevo_Tunnel_Wooden Beams_32253.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32265",
    "url": "https://drive.google.com/file/d/1uF0sSiep0ccpFcmm0GK-alCVeojXgrKF/view?usp=drivesdk",
    "name": "Sarajevo_tour group_Tunnel of Hope _32265.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32319",
    "url": "https://drive.google.com/file/d/1X35yLWfcsZshHw0uqWbl25Yknxcisqtc/view?usp=drivesdk",
    "name": "Glasgow_Duke of Welling_traffic cone_32319.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32335",
    "url": "https://drive.google.com/file/d/1ol9AaaYlHyiSWc-SognVrgCkCSsEAP7_/view?usp=drivesdk",
    "name": "medium_Glasgow_catedral_5341559e28-3_32335.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32875",
    "url": "https://drive.google.com/file/d/14F8BzLvr2dkHlgsW3yTLcG1JCt_mlEv0/view?usp=drivesdk",
    "name": "Dresden_Frauenkirche_Zwinger Palace_32875.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32929",
    "url": "https://drive.google.com/file/d/1Fjmljjh35rCkRcu9xDlGsMlKGw52zvXN/view?usp=drivesdk",
    "name": "Colour-my-travel-logo_32929.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32935",
    "url": "https://drive.google.com/file/d/1YILDcPxCEiA8Ai4Iczl5R-x4O9gy_QkH/view?usp=drivesdk",
    "name": "Vittoriosa_stone buildings_narrow street_32935.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32957",
    "url": "https://drive.google.com/file/d/1JXfC0kGw1-7CRYg99hUKSUrz5HYcYifM/view?usp=drivesdk",
    "name": "Porto_buildings_river_32957.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32963",
    "url": "https://drive.google.com/file/d/1cfeSt2BfHXje5ULpJHYzCx1W-f4haJwI/view?usp=drivesdk",
    "name": "Porto_tourist_yellow umbrella_32963.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32969",
    "url": "https://drive.google.com/file/d/1rI7Llfj-9Gq1D5c1hAujPHh_wehgZeBa/view?usp=drivesdk",
    "name": "logo_yellow circle_32969.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "32976",
    "url": "https://drive.google.com/file/d/1Gr3hulBXrpRycqXURM3yXmqatYuJZL14/view?usp=drivesdk",
    "name": "Porto_rabbit sculptur_recycled materi_32976.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33037",
    "url": "https://drive.google.com/file/d/1_WerGqI20YpQ2Lojo_YEWcQTU04ZB2gb/view?usp=drivesdk",
    "name": "Istanbul_tourists_Hagia Sophia_33037.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33043",
    "url": "https://drive.google.com/file/d/1BvAbh83mEb7h7HpJo_aqUnxHkF1kpI77/view?usp=drivesdk",
    "name": "Istanbul_Tourists_Mosque_33043.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33049",
    "url": "https://drive.google.com/file/d/17nuM1nuSXsmthvyvdz--EZfsVMAicueD/view?usp=drivesdk",
    "name": "Split_kayaks_tourists_33049.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33055",
    "url": "https://drive.google.com/file/d/1MzjZOnxzy1YfkhUYJzrCgnJPr3KoVRzo/view?usp=drivesdk",
    "name": "Istanbul_kayaks_tourists_33055.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33061",
    "url": "https://drive.google.com/file/d/1UhGsioIl9UPRP3fOkYRYNzrWdwXs3eBH/view?usp=drivesdk",
    "name": "Istanbul_tourists_umbrellas_33061.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33067",
    "url": "https://drive.google.com/file/d/1HNVXvtqN8fx6hhERY5HqklaLtQWH9ZQO/view?usp=drivesdk",
    "name": "Istanbul_tourists_food_33067.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33073",
    "url": "https://drive.google.com/file/d/16xMqJE9ul0Yx3uS0CqmJ7-HgQq1fIRWC/view?usp=drivesdk",
    "name": "Istanbul_tea house inter_hanging lamps_33073.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33079",
    "url": "https://drive.google.com/file/d/19x5VTIoHHbnZ0VSbvYYQ5IE5PWKb8ras/view?usp=drivesdk",
    "name": "Istanbul_Turkish breakfa_various dips an_33079.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33085",
    "url": "https://drive.google.com/file/d/1fBWzZNCke-kR7iAKO9bohE8chBxpSgy-/view?usp=drivesdk",
    "name": "Istanbul_couple_table_33085.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33091",
    "url": "https://drive.google.com/file/d/1hGpRplvEH5ybg_V1HUfzNGmB7it-fj4h/view?usp=drivesdk",
    "name": "Istanbul_yacht_Çırağan Palace_33091.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33097",
    "url": "https://drive.google.com/file/d/1TRHZAIIDNBYv7Q3m_MTwyYsjGv5TjNMr/view?usp=drivesdk",
    "name": "Hurghada_woman_horse_33097.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33103",
    "url": "https://drive.google.com/file/d/1IH85uBlPEWLk_6toN4rcuEyFXMI3J8w2/view?usp=drivesdk",
    "name": "Istanbul_tourist_Hagia Sophia_33103.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33145",
    "url": "https://drive.google.com/file/d/18P7gTVkqDU_UkgyB1Z5OKNekxRz8TSHS/view?usp=drivesdk",
    "name": "Poznan_Old Town Hall_colorful buildi_33145.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33166",
    "url": "https://drive.google.com/file/d/1ffc_yO3eU_6powiaAzQR8jlRcZGHDHtg/view?usp=drivesdk",
    "name": "Bratislava_UFO Bridge_observation tow_33166.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33191",
    "url": "https://drive.google.com/file/d/1G6GiDuvG309gbM2eezf0GAbR4zc0TAI1/view?usp=drivesdk",
    "name": "Paris_logo_Eiffel Tower_33191.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33197",
    "url": "https://drive.google.com/file/d/1epidEktkDwWoCz4scAan-3kwwB_jTScb/view?usp=drivesdk",
    "name": "Paris_courtyard_formal garden_33197.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33203",
    "url": "https://drive.google.com/file/d/1-SHX3HafWnxZlJq3xGJMMACSpRkxMi1P/view?usp=drivesdk",
    "name": "Paris_cobblestone str_historic buildi_33203.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33232",
    "url": "https://drive.google.com/file/d/1sVDd801xMEVaakXcnjsr-tdzzuWpORak/view?usp=drivesdk",
    "name": "Munich_New Town Hall_Marienplatz_33232.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33239",
    "url": "https://drive.google.com/file/d/1CzptXdGBQcZU2Ts763f-AbaVIdcGtaY2/view?usp=drivesdk",
    "name": "London_equestrian stat_Big Ben_33239.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33246",
    "url": "https://drive.google.com/file/d/1QxlDNE-qfNGVkAvs_3MTF3rHyIN8HRTA/view?usp=drivesdk",
    "name": "Rome_Altare della Pa_tourists_33246.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33385",
    "url": "https://drive.google.com/file/d/1v1uiuWBX1WHggaXNd1LpZwd9jnFfgJ9q/view?usp=drivesdk",
    "name": "Poznań_castle_brick walls_33385.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3341",
    "url": "https://drive.google.com/file/d/19FjjQpn3vR2sBysxZ0X4f4lgrTgXIaQu/view?usp=drivesdk",
    "name": "Wrocław_beer glasses_table_3341.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3344",
    "url": "https://drive.google.com/file/d/17nHsjf80X6Gov0fAWf_7CFYjn3u_Fh24/view?usp=drivesdk",
    "name": "beer taps_bar_3344.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3354",
    "url": "https://drive.google.com/file/d/17shA-JqGqdeN01sTCmI56qji7I3-qc8P/view?usp=drivesdk",
    "name": "Krakow_bronze plaque_Star of David_3354.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3389",
    "url": "https://drive.google.com/file/d/1BdlDQyj8ii3VVeiyshoyETqKMhWkd7h_/view?usp=drivesdk",
    "name": "Zamość_Town Hall_buildings_3389.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33953",
    "url": "https://drive.google.com/file/d/1Xi10txtT2mPmMdjJD_cwV2cDiUfY_crz/view?usp=drivesdk",
    "name": "Granada_logo_text_33953.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33965",
    "url": "https://drive.google.com/file/d/1VAqVfyC8onsSLtNDDKa2OmPdwmB8bGtZ/view?usp=drivesdk",
    "name": "Madrid_tour guides_red umbrella_33965.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33977",
    "url": "https://drive.google.com/file/d/1OIA7qIFXTC_JPe1DcS5PzE1Yj2rjyt7X/view?usp=drivesdk",
    "name": "Seville_tour group_fountain_33977.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "33984",
    "url": "https://drive.google.com/file/d/1s6MX7-aHP60lYXGqGPu2VFuE4LCmJlbS/view?usp=drivesdk",
    "name": "Granada_ancient wall_street lamps_33984.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34092",
    "url": "https://drive.google.com/file/d/1TP_JkipvYG5zCCLuC9lgEMfigTU41DxB/view?usp=drivesdk",
    "name": "Rome_Colosseum_statues_34092.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34098",
    "url": "https://drive.google.com/file/d/14V37Hif4EmIGhagl-TpsmOLa2nciRFxZ/view?usp=drivesdk",
    "name": "Rome_Trevi Fountain_tourists_34098.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34104",
    "url": "https://drive.google.com/file/d/1cerXF2_9-KD5AHC9vGD19UzXZmcfxYwW/view?usp=drivesdk",
    "name": "Rome_Vittoriano monu_staircase_34104.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34110",
    "url": "https://drive.google.com/file/d/1QrDMZC2sYfQ2L4OgsVbc4pZ79bT4FKSN/view?usp=drivesdk",
    "name": "Rome_Pantheon_tourists_34110.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34116",
    "url": "https://drive.google.com/file/d/16yZ6q2g7BFXVu6JgHKz7nEccbcR89aEG/view?usp=drivesdk",
    "name": "Rome_Trajans Column_Altare della Pa_34116.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34146",
    "url": "https://drive.google.com/file/d/1FgYFfk_0mtZHStISbLjRAA3YWaSAEkrr/view?usp=drivesdk",
    "name": "Rome_tourists_cobblestone str_34146.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34159",
    "url": "https://drive.google.com/file/d/1oGEbCY5D-QolBmnaNklmzOusx5jD_eC9/view?usp=drivesdk",
    "name": "Rome_Synagogue of Ro_Cobblestone Str_34159.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34171",
    "url": "https://drive.google.com/file/d/12fcFgo2190G-ORRH-GEjSekQkHrMrn2C/view?usp=drivesdk",
    "name": "Rome_roman ruins_columns_34171.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34179",
    "url": "https://drive.google.com/file/d/1T8RlvqB5s631SrxxAfjeCg88S_CASsCj/view?usp=drivesdk",
    "name": "Rome_Roman ruins_Temple of Satur_34179.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34185",
    "url": "https://drive.google.com/file/d/1icwyidvW0v9LBlOBT_tA4FORfYpRCRFI/view?usp=drivesdk",
    "name": "Rome_Theatre of Marc_Roman ruins_34185.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34242",
    "url": "https://drive.google.com/file/d/1yVzEd3Nzrc4q30GBzqifR_IE7hcZ3blU/view?usp=drivesdk",
    "name": "Rome_Basilica di San_tourists_34242.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34254",
    "url": "https://drive.google.com/file/d/15Sn0WEc8vGxJzF-3_H0EyrM2VAXkZrvO/view?usp=drivesdk",
    "name": "trastevere_34254.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34260",
    "url": "https://drive.google.com/file/d/1TqRpJxGytWTztlwyhREmWJoPzwmG2i_y/view?usp=drivesdk",
    "name": "Rome_Basilica di San_bell tower_34260.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34266",
    "url": "https://drive.google.com/file/d/1SkFGa-VLfFJuGKrsiyMpulK7SWU9QH0A/view?usp=drivesdk",
    "name": "Rome_cobblestone str_historic buildi_34266.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34327",
    "url": "https://drive.google.com/file/d/1qo4x1dXBB1RTillcXcD9I1JRwNs097mj/view?usp=drivesdk",
    "name": "Walkative-Landscape-2-Any_34327.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34422",
    "url": "https://drive.google.com/file/d/1W1HmGb8sHIdX8FbZHNaXzSxF2irWHIqD/view?usp=drivesdk",
    "name": "Kotor_tour group_stone building_34422.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34434",
    "url": "https://drive.google.com/file/d/1H-Wsv__zHJUDbUpHeL1itOlEvRwEPpSV/view?usp=drivesdk",
    "name": "Mostar_metal plate_desk lamp_34434.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34440",
    "url": "https://drive.google.com/file/d/1LPEOhxvtK39UiPB6qFqXW3dhIBaMJzkE/view?usp=drivesdk",
    "name": "Mostar_tourists_table_34440.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34464",
    "url": "https://drive.google.com/file/d/1PMVvbeeBTIWjfFPP5rgQCEG7CklBfAUj/view?usp=drivesdk",
    "name": "Prizren_stone buildings_patio_34464.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34470",
    "url": "https://drive.google.com/file/d/1PfJRNjaJzdWMnVO3IxMA17bohoN1J0K2/view?usp=drivesdk",
    "name": "Počitelj_stone houses_stone tower_34470.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34476",
    "url": "https://drive.google.com/file/d/14whSbcy4i2wVq-zg59-EwJEwWgd2ezyK/view?usp=drivesdk",
    "name": "Mostar_Mehmed Paša Sok_stone steps_34476.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34482",
    "url": "https://drive.google.com/file/d/1jGlOtx2I1GQw-P2XmihOrQzgTF5njHpa/view?usp=drivesdk",
    "name": "Kotor_stone bridge_hotel_34482.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34488",
    "url": "https://drive.google.com/file/d/1XuoRxo-8KwxY0LWZe3LGaZG0NOqe7nOc/view?usp=drivesdk",
    "name": "Mostar_Stari Most Brid_Neretva River_34488.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34500",
    "url": "https://drive.google.com/file/d/1Vyalp3kPJ4ictZVTIflA7IuErV6exo20/view?usp=drivesdk",
    "name": "Mostar_diver_Stari Most brid_34500.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34506",
    "url": "https://drive.google.com/file/d/1X-cf9xUYommiODLtGJFl_w6kN230gm2S/view?usp=drivesdk",
    "name": "stone rooftops_wooden structur_34506.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34512",
    "url": "https://drive.google.com/file/d/11O82dWz2589yu8kl2aIT2h-Z8vOGF2zs/view?usp=drivesdk",
    "name": "Montenegro_mosque_minaret_34512.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34518",
    "url": "https://drive.google.com/file/d/10YbRgmbKePym5g391crMQaD9i64ecb8A/view?usp=drivesdk",
    "name": "building_door_34518.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34524",
    "url": "https://drive.google.com/file/d/1dHW7BmcDEvOxCK32uBWxGHmfixZLCKLo/view?usp=drivesdk",
    "name": "Istanbul_dome_building_34524.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34536",
    "url": "https://drive.google.com/file/d/1Wwy_2bmpoIN6nzXpqd5j0_9R9tbfzjtP/view?usp=drivesdk",
    "name": "Mostar_tour group_Stari Most brid_34536.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34542",
    "url": "https://drive.google.com/file/d/1ELB1vB-1Kk-fH7zIYZ8XYVEygXKn2UcK/view?usp=drivesdk",
    "name": "Istanbul_tour group_copper coffee p_34542.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34548",
    "url": "https://drive.google.com/file/d/1dz3fAvPQ3p_k87y4FlhW3GkxHWGs7d9N/view?usp=drivesdk",
    "name": "Mostar_tour group_guide_34548.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34554",
    "url": "https://drive.google.com/file/d/1-0meD0vP1OPPNwgMpt7l-CoXB5TuBW4f/view?usp=drivesdk",
    "name": "Berat_tourists_stone building_34554.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34560",
    "url": "https://drive.google.com/file/d/1mY5ezrVcbJTnzZEqvHnXwc-EDK8J7d3V/view?usp=drivesdk",
    "name": "tourists_building_34560.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34566",
    "url": "https://drive.google.com/file/d/1wIkXoOHIP42L69BethDA8kpM_sAmYXV5/view?usp=drivesdk",
    "name": "Kotor_cemetery_headstones_34566.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34584",
    "url": "https://drive.google.com/file/d/13IGYPFR2G6m6lohBPHnYWjcg6UnBYypg/view?usp=drivesdk",
    "name": "Istanbul_tourists_group_34584.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34596",
    "url": "https://drive.google.com/file/d/1QeY6UOFDkquktAO4B41B1R4BKzD7ITCX/view?usp=drivesdk",
    "name": "Mostar_abandoned build_mural_34596.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34602",
    "url": "https://drive.google.com/file/d/1C-PNAT5PM3wf8KHYBiKl3MYaISWZRBse/view?usp=drivesdk",
    "name": "Sarajevo_tourists_group_34602.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34608",
    "url": "https://drive.google.com/file/d/15Nh9POFsCVD2ZtWOLAVXSd0x8khAZ1BZ/view?usp=drivesdk",
    "name": "Copy-of-Walkative-Dont-Forget-ALL_34608.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34614",
    "url": "https://drive.google.com/file/d/1qJ9jcpPZRvHYVgpgoFUquGiB5jcGRCoR/view?usp=drivesdk",
    "name": "Mostar_monument_sculpture_34614.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34620",
    "url": "https://drive.google.com/file/d/1vitY64OzHBDwzTxL8WgZLoQuqF1DRNjY/view?usp=drivesdk",
    "name": "Zagreb_mural_hydrangeas_34620.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34626",
    "url": "https://drive.google.com/file/d/1n1XD_CnE_qxiExohwoxKUGinIoz5XOrP/view?usp=drivesdk",
    "name": "Walkative-Sehitluci-Original-or-Making-of-Modern-Mostar_34626.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34632",
    "url": "https://drive.google.com/file/d/1IsJRnsSRlBTRyrubGdHxUKXsG-h47JAj/view?usp=drivesdk",
    "name": "tour guide_tablet_34632.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34638",
    "url": "https://drive.google.com/file/d/1nIkWFEOYB0IAp7YsFM9g6RkbB6xHgFm1/view?usp=drivesdk",
    "name": "Mostar_park_pergola_34638.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34699",
    "url": "https://drive.google.com/file/d/1eDZrbjMnnw47aNUsXommEVD25Ph1pXAH/view?usp=drivesdk",
    "name": "Dresden_Zwinger Palace_fountain_34699.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34821",
    "url": "https://drive.google.com/file/d/1CYYDOnd6QrWlM2BSNDagmz6diw6M6BpO/view?usp=drivesdk",
    "name": "Rome_St Peters Basil_Vatican City_34821.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34827",
    "url": "https://drive.google.com/file/d/1Q7VlkhHHERx4yA3APBG8Eiwgk2ngsgPN/view?usp=drivesdk",
    "name": "Rome_tourists_churches_34827.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34833",
    "url": "https://drive.google.com/file/d/1Nn2hT43AHO-acArLSZWdgLyp61iLsaNV/view?usp=drivesdk",
    "name": "Rome_Piazza del Popo_obelisk_34833.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34845",
    "url": "https://drive.google.com/file/d/1RcTQ0hNGTU5xO56ToeDfRfldCnOYMvqC/view?usp=drivesdk",
    "name": "Rome_Spanish Steps_Trinità dei Mon_34845.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34851",
    "url": "https://drive.google.com/file/d/1STFQ2Vx3h1_CHzAlGuVRSNj7IBh-9_UV/view?usp=drivesdk",
    "name": "Rome_staircase_garden_34851.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "34863",
    "url": "https://drive.google.com/file/d/1gJujL7F0-JBZ6Q3ThheSlXNZmt_IdgJv/view?usp=drivesdk",
    "name": "Rome_Temple of Aescu_water_34863.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35167",
    "url": "https://drive.google.com/file/d/1qinsPNKx7eVdJ6eefKjhcLiopLROnLqP/view?usp=drivesdk",
    "name": "Madrid_fountain_sculpture_35167.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35173",
    "url": "https://drive.google.com/file/d/17XosfMMp5l6jOiledBmIBm4U07BWAdOE/view?usp=drivesdk",
    "name": "Madrid_Gran Vía_buildings_35173.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35179",
    "url": "https://drive.google.com/file/d/1tpxiyFwD_GXWY_k1XAjNd1q46nPnQ7oq/view?usp=drivesdk",
    "name": "Madrid_Monument to Mig_statues_35179.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35185",
    "url": "https://drive.google.com/file/d/1xOv5Z38HRoKbZDiEUuTun38h3yLhCIXn/view?usp=drivesdk",
    "name": "Madrid_Cervantes statu_Don Quixote sta_35185.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35205",
    "url": "https://drive.google.com/file/d/1YYc6MKinkTXq5gpIxGjOkjv9OOQeb_B3/view?usp=drivesdk",
    "name": "Madrid_archway_buildings_35205.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35211",
    "url": "https://drive.google.com/file/d/1UMawdHl55Y22_gjCYxKG4EEHkWKLWaMi/view?usp=drivesdk",
    "name": "Madrid_Metropolis Buil_dome_35211.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35223",
    "url": "https://drive.google.com/file/d/1x0DZtY5CuL-jyeoOnkiurF5rAuGkwWa-/view?usp=drivesdk",
    "name": "Madrid_buildings_street_35223.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35235",
    "url": "https://drive.google.com/file/d/1O7tBhgoRkfbOoDcrf7lNgv_mJRvj1tNb/view?usp=drivesdk",
    "name": "Madrid_Almudena Cathed_Sky_35235.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35241",
    "url": "https://drive.google.com/file/d/1mrDb5IEKjlY7iUZmIdIUGCH2XtRWHcjP/view?usp=drivesdk",
    "name": "Madrid_Almudena Cathed_Plaza de la Alm_35241.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35253",
    "url": "https://drive.google.com/file/d/1OQ-I1ppIdH4hLOJbOdCvPZHLILDmjKvG/view?usp=drivesdk",
    "name": "Madrid_archway_street artists_35253.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35309",
    "url": "https://drive.google.com/file/d/1XqxKbWXr0GXzk2g669IvoJKXqMFCHbMI/view?usp=drivesdk",
    "name": "Rome_Altare della Pa_Cityscape_35309.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35315",
    "url": "https://drive.google.com/file/d/1oJbuPDCo6Z8EQxx8uUdTp-47_z88Zv8i/view?usp=drivesdk",
    "name": "Rome_pine tree_sun_35315.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35321",
    "url": "https://drive.google.com/file/d/1kHHy4_zIUH-NdFFGd6cvLvB7iJeS1Klq/view?usp=drivesdk",
    "name": "Rome_people_brick wall_35321.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35327",
    "url": "https://drive.google.com/file/d/1YZ1VdwPpQX_CcNA9tVdygHEgzseDIU-f/view?usp=drivesdk",
    "name": "Rome_artist_paintings_35327.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35333",
    "url": "https://drive.google.com/file/d/1jBehiBl6fzJorMNNg2Ne-DHBOwIc10YR/view?usp=drivesdk",
    "name": "Rome_trees_tourists_35333.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35339",
    "url": "https://drive.google.com/file/d/1kXvZSTpYUQvgaMJx4ED3n0T3I9oncKXH/view?usp=drivesdk",
    "name": "Rome_St Peters Basil_hedge_35339.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35357",
    "url": "https://drive.google.com/file/d/1IzalnuIPgfZuiyoums9nuWuXLIfJnS0N/view?usp=drivesdk",
    "name": "Rome_bicycle_fruit stand_35357.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35415",
    "url": "https://drive.google.com/file/d/1oV_5icPwfmyuteMv75VDYTM_2lpcrzou/view?usp=drivesdk",
    "name": "Rome_Fiat 500_Roman wall_35415.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35427",
    "url": "https://drive.google.com/file/d/1PHyblQLV-vKPdvEIaieSRfBjP8IJKtdl/view?usp=drivesdk",
    "name": "Rome_framed photogra_historical docu_35427.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35439",
    "url": "https://drive.google.com/file/d/1SXmVx7B6c-tBwMh7O8x4nByN6lh9u0Nr/view?usp=drivesdk",
    "name": "artichokes_35439.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35457",
    "url": "https://drive.google.com/file/d/1STVDPA1p_7VP56jiVQSyOciwJs6At1AV/view?usp=drivesdk",
    "name": "Madrid_logo_bear_35457.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35534",
    "url": "https://drive.google.com/file/d/1btXjiRL36aF1oqNGtBF56Ulo88AQJrNs/view?usp=drivesdk",
    "name": "London_man_briefcase_35534.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35540",
    "url": "https://drive.google.com/file/d/1OHz7to7Kumb3Nd79TnKiraD5jerzNmKy/view?usp=drivesdk",
    "name": "London_boys_rubble_35540.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35546",
    "url": "https://drive.google.com/file/d/1eFHpSqZuBhABuKS-MbfbD46AU3V-uBVe/view?usp=drivesdk",
    "name": "London_Cenotaph_flags_35546.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35552",
    "url": "https://drive.google.com/file/d/1RmbDV5YbOsMAMcmDdJ1Yxi71MT-W-47v/view?usp=drivesdk",
    "name": "London_Memorial_Sculpture_35552.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35558",
    "url": "https://drive.google.com/file/d/1Ht4ujC7Kvf73sneEMaIiGJnX8DQ17YVY/view?usp=drivesdk",
    "name": "London_Battle of Brita_Bronze Sculptur_35558.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35564",
    "url": "https://drive.google.com/file/d/19wmEy_58suwY9LhXb1Ql1tntmfmFCwdr/view?usp=drivesdk",
    "name": "London_Winston Churchi_Elizabeth Tower_35564.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35584",
    "url": "https://drive.google.com/file/d/1alvy5kqnVR8WfzKg-irLJmqdZ50jaLN8/view?usp=drivesdk",
    "name": "Paris_cheese counter_cheeses_35584.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35590",
    "url": "https://drive.google.com/file/d/15oNhleLHHXxtaRyn2BGoZe7YfC2COLFk/view?usp=drivesdk",
    "name": "Dresden_building_downspouts_35590.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35596",
    "url": "https://drive.google.com/file/d/10J1KtTk_OjZMMv379WIwzcBXcciEslYb/view?usp=drivesdk",
    "name": "mural_graffiti_35596.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35602",
    "url": "https://drive.google.com/file/d/12tblGvrF1jM_bcohCys5jXHdTV-0vcsw/view?usp=drivesdk",
    "name": "Berlin_Bar Holda_patrons_35602.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35614",
    "url": "https://drive.google.com/file/d/16gEn5isDh9D5-sf5r-fJ7JF0vikylX3v/view?usp=drivesdk",
    "name": "Dresden_Golden Horseman_cobblestone squ_35614.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35620",
    "url": "https://drive.google.com/file/d/1si1xXb1LJbK8YAJoe-8RqN6GqSxOBK33/view?usp=drivesdk",
    "name": "Dresden_Golden Horseman_horse_35620.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35632",
    "url": "https://drive.google.com/file/d/1Aq4Yvr9AcHL3eo1Ne27Fjw29eXgYOfh-/view?usp=drivesdk",
    "name": "Dresden_building_graffiti_35632.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "35644",
    "url": "https://drive.google.com/file/d/10942w0hcLihYjY_5Lkz78WKMF1C6ar6m/view?usp=drivesdk",
    "name": "Germany_archway_courtyard_35644.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "36017",
    "url": "https://drive.google.com/file/d/1FLA2md1KEHuzUZXKbx8kYuj4KoMTgYwo/view?usp=drivesdk",
    "name": "Madrid_tourists_Plaza Mayor_36017.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "36510",
    "url": "https://drive.google.com/file/d/1wbs3kEIoRBE-KRQ0GLWQe_S52JIv2NFV/view?usp=drivesdk",
    "name": "ratusz-poznan-1152x1536_36510.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "36632",
    "url": "https://drive.google.com/file/d/1qyMc1KZb7UivTzj-KsVBZ_WHgSXrtikg/view?usp=drivesdk",
    "name": "Paris_Moulin Rouge_windmill_36632.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "36638",
    "url": "https://drive.google.com/file/d/1znKGgGBgHTgQkWgV5vD9uvdB8eHSBNbm/view?usp=drivesdk",
    "name": "Paris_Sacré-Cœur Basi_stone balustrad_36638.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3676",
    "url": "https://drive.google.com/file/d/1MuF1sg6vMTi45b1S1593wVon5uCV2GRF/view?usp=drivesdk",
    "name": "81f3b86f-24fb-41a8-8e6f-d05d20c52f8a_3676.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3687",
    "url": "https://drive.google.com/file/d/1oroNa8qEIzW25vSe7PyhVB5E29liVwMB/view?usp=drivesdk",
    "name": "34416d7a-a8c8-42c8-bf3e-3ca225ed284b_3687.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3801",
    "url": "https://drive.google.com/file/d/1MhZ0n4t4Ra4Lswou4KFcpbiF7LbIe6Am/view?usp=drivesdk",
    "name": "0f8997e8-bfaf-4d55-8e1e-e376b121581c_3801.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "38039",
    "url": "https://drive.google.com/file/d/14iBBpjWBOAUbp6M-ntTa09-a2kxsG9W-/view?usp=drivesdk",
    "name": "London_bar_stools_38039.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "38045",
    "url": "https://drive.google.com/file/d/1cTrXmh7LminH3ag5rjQW0Wz-C01HwdvO/view?usp=drivesdk",
    "name": "image00002_38045.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "38051",
    "url": "https://drive.google.com/file/d/1lzgwLNOwLzeW8sfxmJXsA9MzXs_1shNv/view?usp=drivesdk",
    "name": "Edinburgh_men_bar_38051.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "38057",
    "url": "https://drive.google.com/file/d/1-UbuzUCxpRT5L9n1wEu3yMNnhQNnsFKL/view?usp=drivesdk",
    "name": "Edinburgh_restaurant_patrons_38057.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "38069",
    "url": "https://drive.google.com/file/d/13rVyFYB4KinweaC5HbZD1gVOj94Vro0G/view?usp=drivesdk",
    "name": "Glasgow_whisky_ice_38069.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3821",
    "url": "https://drive.google.com/file/d/1V_waOinzE83xocPm2IMYBGcWCNktqFV2/view?usp=drivesdk",
    "name": "11ae8ee4-e12b-4247-9dde-83ec2779a1fb_3821.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3827",
    "url": "https://drive.google.com/file/d/1y8uIrQpX0yT9ZPFos6BPmFf6UoPRvcIO/view?usp=drivesdk",
    "name": "8b56b643-94d8-425b-90a0-26a601a1dad2_3827.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "38319",
    "url": "https://drive.google.com/file/d/1PMRlQKAVKo8RLnZ2UGTCijUG3jj9T_tf/view?usp=drivesdk",
    "name": "Edinburgh_Edinburgh Castl_castle walls_38319.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3847",
    "url": "https://drive.google.com/file/d/11sCi16IGM_Gt7XLdylHazv6wkWc1I5sg/view?usp=drivesdk",
    "name": "2d3e9b0e-9f46-4a40-9611-c91744dba2f1_3847.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3853",
    "url": "https://drive.google.com/file/d/1xRXO12wO46Eg4a_T9wV6xWLj5uZ_-1IT/view?usp=drivesdk",
    "name": "a8cecbe5-48e8-4341-9273-d8e2450ebb60_3853.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "38571",
    "url": "https://drive.google.com/file/d/175yhnpBxCtm0nz5YmZqZGSW5UV0YgEVi/view?usp=drivesdk",
    "name": "Munich_sausages_pretzels_38571.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3859",
    "url": "https://drive.google.com/file/d/1rJIejg4QbyvaPbaqgXEOU2kKszOsC5hp/view?usp=drivesdk",
    "name": "865c3e8e-9f7a-4f09-9a5c-286f0ca5c5b4_3859.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "38603",
    "url": "https://drive.google.com/file/d/1n2gt9eHou0vYgd5nImqo9BceOLp7dhuv/view?usp=drivesdk",
    "name": "Munich_Pretzel_Hand_38603.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3865",
    "url": "https://drive.google.com/file/d/1vqR0e0Rrq8IzPRiFAWQWQXPVIWjuzJPX/view?usp=drivesdk",
    "name": "385c78e8-8f61-40d3-b658-48ddfdc5d3db_3865.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "38784",
    "url": "https://drive.google.com/file/d/1igJYJCzhatKgwMK54CtYr0rI44CGQrdw/view?usp=drivesdk",
    "name": "Brussels_Town Hall of Br_spire_38784.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "38790",
    "url": "https://drive.google.com/file/d/13PomEwlmSExmQGbJs4hTFTNZDlkrT0Cg/view?usp=drivesdk",
    "name": "Mechelen_Woman_Red Umbrella_38790.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "38796",
    "url": "https://drive.google.com/file/d/1wvRWKiScgSOfk0ZDlIF2ZiKTrt4ub7Oz/view?usp=drivesdk",
    "name": "Brussels_Grand Place_buildings_38796.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "38802",
    "url": "https://drive.google.com/file/d/15ag6_af_3zZqEBkB4JeuecvbSoTgDjUt/view?usp=drivesdk",
    "name": "Brussels_Palace of Justi_scaffolding_38802.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "38812",
    "url": "https://drive.google.com/file/d/1JUTJ8zcEYl_C_VflvrEY3U8hzuesOYVF/view?usp=drivesdk",
    "name": "Bratislava_Danube River_river cruise sh_38812.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "38818",
    "url": "https://drive.google.com/file/d/1z5PfMQTBFy0U-mdMt1mkMdAqPrXZMonl/view?usp=drivesdk",
    "name": "Bratislava_Slovak National_building_38818.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "38824",
    "url": "https://drive.google.com/file/d/17x53mVSPik3Z1ClXzi3o8PWGQVvIAabm/view?usp=drivesdk",
    "name": "Bratislava_cobblestone str_historic buildi_38824.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39010",
    "url": "https://drive.google.com/file/d/1MG8dmwHC1996930OhKq-oMe8RiTNXzzS/view?usp=drivesdk",
    "name": "Paris_antique paintin_plates_39010.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39022",
    "url": "https://drive.google.com/file/d/1N41rbHmGgh9PD4Il7LtdrU8Pmk567ICi/view?usp=drivesdk",
    "name": "Paris_street_crosswalk_39022.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39028",
    "url": "https://drive.google.com/file/d/1xvgVpKFXhxJp7mTqk1k9rZ4FiD1GkNIA/view?usp=drivesdk",
    "name": "Paris_restaurant_Marianne_39028.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39045",
    "url": "https://drive.google.com/file/d/1Ah6WD_MCT9mruFuX-ZJ0Z6o03Hc6QnUv/view?usp=drivesdk",
    "name": "Paris_square_fountain_39045.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3905",
    "url": "https://drive.google.com/file/d/15k1FoMJU_utzIY3kPvrhH8u5pRlsFynD/view?usp=drivesdk",
    "name": "853ee306-07cc-4daa-b7cc-86dd7ccdc22d_3905.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39096",
    "url": "https://drive.google.com/file/d/1o6oBuM5bEevnRDy8fd5RwfCG8NsVXTBA/view?usp=drivesdk",
    "name": "Paris_buildings_church_39096.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39108",
    "url": "https://drive.google.com/file/d/140rqOSyGQXzdm5cEYNZbrELL6XLcfFRI/view?usp=drivesdk",
    "name": "Paris_tour guide_tourists_39108.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39114",
    "url": "https://drive.google.com/file/d/1_XWoOIYJU4SnhA89Okn4MBMVFEMcoGkc/view?usp=drivesdk",
    "name": "Paris_windmill_restaurant_39114.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39126",
    "url": "https://drive.google.com/file/d/1HZc_0FY20Nz248RntenMQkhjH-WXdhAZ/view?usp=drivesdk",
    "name": "Paris_man_Le Bateau Lavoi_39126.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39138",
    "url": "https://drive.google.com/file/d/1ROnFkqhnDGo-S59nUbqrhZjS38C7q4rC/view?usp=drivesdk",
    "name": "Paris_tour guide_bronze sculptur_39138.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39144",
    "url": "https://drive.google.com/file/d/1Ov0uCfQindVW7itB5RjgCbYAnEye8L6N/view?usp=drivesdk",
    "name": "Paris_tour guide_Moulin Rouge_39144.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3915",
    "url": "https://drive.google.com/file/d/1GMO0q1OCuCo6zxRK2VCdz9o4PafVUJKZ/view?usp=drivesdk",
    "name": "61ba5521-ab77-410e-8e31-903750a3af45_3915.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39174",
    "url": "https://drive.google.com/file/d/1NjKTns7caQfOWwxX7apjdrCU6gI0MvWz/view?usp=drivesdk",
    "name": "Paris_Shakespeare and_antique water f_39174.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39180",
    "url": "https://drive.google.com/file/d/1l9U-cYdbYTmO9gLGQXgDjToH0Z505kax/view?usp=drivesdk",
    "name": "Paris_fountain_people_39180.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39186",
    "url": "https://drive.google.com/file/d/1h1qadzFTF6g1Lnt-ktjmVf9gRnb17BT1/view?usp=drivesdk",
    "name": "Paris_garden_people_39186.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39198",
    "url": "https://drive.google.com/file/d/16Bhp8gj9Y0M1gwUvg6y13WnxLF5g1zD7/view?usp=drivesdk",
    "name": "Paris_Sacré-Cœur Basi_tour guide_39198.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39426",
    "url": "https://drive.google.com/file/d/1jOL_u7shZIwEoozGdUCRBmg3TetFPm9W/view?usp=drivesdk",
    "name": "Tirana_skyscrapers_buildings_39426.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39432",
    "url": "https://drive.google.com/file/d/1qSFZk4n8YF7uv8VhAzmA5YKpuePm0Z3k/view?usp=drivesdk",
    "name": "skyscraper_church_39432.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39438",
    "url": "https://drive.google.com/file/d/1xxZBC2I7VB552QEF-HymFTELGIfqvhbC/view?usp=drivesdk",
    "name": "Tirana_Tirana Internat_construction cr_39438.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39444",
    "url": "https://drive.google.com/file/d/1mU13bZKtfUv4tq1_0p6lpSNaNiBTU5Cz/view?usp=drivesdk",
    "name": "Rome_Serpentine Pavi_park_39444.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39450",
    "url": "https://drive.google.com/file/d/1O_bFlhudJ99q7X-yp9k6Fy6Qx924Rq_E/view?usp=drivesdk",
    "name": "Tbilisi_mural_building_39450.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39456",
    "url": "https://drive.google.com/file/d/1mmRl0XNyNminVL1f865ZUFbuye2zvZMf/view?usp=drivesdk",
    "name": "mural_building_39456.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39462",
    "url": "https://drive.google.com/file/d/1uwmF7pU0v_Z5_RTlrciR3E_Wdj5P6xrw/view?usp=drivesdk",
    "name": "Bari_mural_graffiti_39462.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39468",
    "url": "https://drive.google.com/file/d/1QJCB62xLJ-Wl07my-XW9CwCA2yqD0isS/view?usp=drivesdk",
    "name": "mural_building_39468.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3948",
    "url": "https://drive.google.com/file/d/1qDeVH8iaI5VURR57icl1XdIRDFudO4ZO/view?usp=drivesdk",
    "name": "1ee2e266-e701-4f85-b529-30db60dd31d4_3948.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39588",
    "url": "https://drive.google.com/file/d/1uj9a80Y1HZf1bcibZMoFQXzX6Z_Zw3Rf/view?usp=drivesdk",
    "name": "Porto_buildings_river_39588.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39597",
    "url": "https://drive.google.com/file/d/1SPcGAhP7M_6hSUy9vRKL9MPFDPFGT43C/view?usp=drivesdk",
    "name": "Prague_Old Town Bridge_Charles Bridge_39597.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39603",
    "url": "https://drive.google.com/file/d/1eR2cULyXRflAvCKEcrDnWTQQDrecS7ED/view?usp=drivesdk",
    "name": "Prague_Charles Bridge_Prague Castle_39603.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "39609",
    "url": "https://drive.google.com/file/d/1_11iuNFHAsc2fafvBrPoU_Oz__-DOfYL/view?usp=drivesdk",
    "name": "Prague_church spires_towers_39609.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "3983",
    "url": "https://drive.google.com/file/d/1_mwk9l5nKc8s437i_qRSGv4r9qxAQ8Wo/view?usp=drivesdk",
    "name": "2e944aa9-3e13-4d94-9190-a4a0453d8674-1400x933_3983.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "40039",
    "url": "https://drive.google.com/file/d/11ITZU4fZVHhMTg0kVJ28JUE7uGA9Bq7G/view?usp=drivesdk",
    "name": "Athens_Parthenon_columns_40039.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "40052",
    "url": "https://drive.google.com/file/d/1kn6o38yupVW4r-tqh3sI0KpWQ46XnRl2/view?usp=drivesdk",
    "name": "Athens-Photo-4_40052.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "40058",
    "url": "https://drive.google.com/file/d/1EKQMjoB0YHwDRbx8o1GSOOEBCpzoCTzU/view?usp=drivesdk",
    "name": "Photo-3_40058.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "40064",
    "url": "https://drive.google.com/file/d/1WKciRFJVYvQV6pcD6eWCVTHBmDstaPqu/view?usp=drivesdk",
    "name": "Athens_ancient ruins_stone walls_40064.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "40070",
    "url": "https://drive.google.com/file/d/1rT1C46Gull9m2wJD6elQmudDkjqLZ8BV/view?usp=drivesdk",
    "name": "Athens_tourists_staircase_40070.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "40102",
    "url": "https://drive.google.com/file/d/1aKTLzI3fPXCFmX09nG03JVdYdi3Qi6JC/view?usp=drivesdk",
    "name": "Athens_Acropolis_Parthenon_40102.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "40112",
    "url": "https://drive.google.com/file/d/1ps_mDw-T6Xg3spB2eO1lDvUtz2Wp6j0P/view?usp=drivesdk",
    "name": "Athens_street art_graffiti_40112.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "40131",
    "url": "https://drive.google.com/file/d/1mNb15_j7Z0YT_iY_3ejHr4-CkNaRM0ZS/view?usp=drivesdk",
    "name": "Athens_Panathenaic Sta_Greek flags_40131.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "40182",
    "url": "https://drive.google.com/file/d/1xICXsSHB2arInMX-CHoVADFhtAFXAyT_/view?usp=drivesdk",
    "name": "Athens_graffiti_mural_40182.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "40188",
    "url": "https://drive.google.com/file/d/1BTK-UNIYuSWS9qTb34T06ycYmcqWc31W/view?usp=drivesdk",
    "name": "Athens_mural_building_40188.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "40194",
    "url": "https://drive.google.com/file/d/1We7hLJHxiBtp5PTTd7ZvZ63DAoG65MI3/view?usp=drivesdk",
    "name": "Athens_mural_dog_40194.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "40200",
    "url": "https://drive.google.com/file/d/1XbEDLtz498gQt_gTOGyjiQDwBX4Mcgds/view?usp=drivesdk",
    "name": "Photo-2-2_40200.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "40206",
    "url": "https://drive.google.com/file/d/1sGqa1Bf_6YAzq0o9u-bbXGlhiMWnsfHM/view?usp=drivesdk",
    "name": "Photo-1-2_40206.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "40364",
    "url": "https://drive.google.com/file/d/1-qyhU67uq2o96deoCJsjFMEcdN_t-ndF/view?usp=drivesdk",
    "name": "Krakow_tour guide_tourist_40364.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41544",
    "url": "https://drive.google.com/file/d/1QCzIm9ABSOe7pCK59wbvkHXE8zh5eyn5/view?usp=drivesdk",
    "name": "Albania_people_traditional clo_41544.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41550",
    "url": "https://drive.google.com/file/d/1_UzqCFUqiv7Pu5HbTQAI2IBiScDl54Gr/view?usp=drivesdk",
    "name": "Albania_people_traditional clo_41550.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41556",
    "url": "https://drive.google.com/file/d/1xDoMVAfMBhWxRIq_8E9vFs7pKU9gr0WN/view?usp=drivesdk",
    "name": "Bucharest_people_traditional clo_41556.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41562",
    "url": "https://drive.google.com/file/d/1prA3jQszNmplHzXOM23hCKSCLd5kBB4R/view?usp=drivesdk",
    "name": "Bucharest_people_traditional Rom_41562.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41630",
    "url": "https://drive.google.com/file/d/13TUrz1fbEfwgxFXIK5Hu8bWAP2oT_siR/view?usp=drivesdk",
    "name": "London_Giant shoes_Vans logo_41630.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41636",
    "url": "https://drive.google.com/file/d/1R6jsJzrLbFh9Mh0NiN1d3391jO3hNY1p/view?usp=drivesdk",
    "name": "London_Camden Market a_tourists_41636.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41642",
    "url": "https://drive.google.com/file/d/1Q-Egm5FSFgb1avJ_jXNkr_5FLXzmZn03/view?usp=drivesdk",
    "name": "London_Amy Winehouse s_Camden Market_41642.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41648",
    "url": "https://drive.google.com/file/d/1Z26Zkr1t2HZ159grPcGgFY1rqfzIFVvN/view?usp=drivesdk",
    "name": "London_Camden Market_tourists_41648.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41654",
    "url": "https://drive.google.com/file/d/1u4WSB4rJIK0zFEFr6p9K9eawdG7cgd_A/view?usp=drivesdk",
    "name": "London_Camden Lock bri_pedestrians_41654.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41683",
    "url": "https://drive.google.com/file/d/1NbSm6nDGit0Vv46M7_j65IRb1nsGlBwZ/view?usp=drivesdk",
    "name": "Athens_Bougatsa_iced coffee_41683.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41695",
    "url": "https://drive.google.com/file/d/150Vf7B50aXujovtbAAuRKYB0USXkyzXn/view?usp=drivesdk",
    "name": "Athens_Greek salad_fried calamari_41695.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41701",
    "url": "https://drive.google.com/file/d/1NJXbTTA2XpaYbFCmxj1bgsXBx57tLhq4/view?usp=drivesdk",
    "name": "Greece_fish_peppers_41701.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41707",
    "url": "https://drive.google.com/file/d/1sDJ8NrfXGqcf2Ysl0t_VdmelJ0k82sFH/view?usp=drivesdk",
    "name": "Greece_apples_oranges_41707.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41713",
    "url": "https://drive.google.com/file/d/1d5nUfhj38JnYSOoGg2VVKHEdkPhgLCLj/view?usp=drivesdk",
    "name": "Athens_couple_baskets_41713.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41719",
    "url": "https://drive.google.com/file/d/1MVIIci7a7G9is6swfeejTBwYCXlYa9Xw/view?usp=drivesdk",
    "name": "Greece_olives_market stall_41719.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41725",
    "url": "https://drive.google.com/file/d/1vYjSAu8ltwRC6Ci940OQIfDabbFFkZvD/view?usp=drivesdk",
    "name": "Athens_olives_honey_41725.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41731",
    "url": "https://drive.google.com/file/d/1vcMtDJVqfeDjBGR4lo7wtirr6IPp7lSk/view?usp=drivesdk",
    "name": "Athens_cured meats_sausages_41731.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41737",
    "url": "https://drive.google.com/file/d/1vFNpKkz6lWq0R4Sp4Pt6lXpcrqya7ipV/view?usp=drivesdk",
    "name": "Istanbul_dried eggplants_dried peppers_41737.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41749",
    "url": "https://drive.google.com/file/d/1vAJwvLwcvg6z0pD9-g7__J8aSewpUrhU/view?usp=drivesdk",
    "name": "Athens_woman_spice shop_41749.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41755",
    "url": "https://drive.google.com/file/d/1KkA7LAHDIIHMdYRu7IYxtzRlVXCCfdJA/view?usp=drivesdk",
    "name": "Athens_tour guide_tourist group_41755.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41809",
    "url": "https://drive.google.com/file/d/1VVeqBEZ2akojnjmDN8J2_Rl2q5Rs3XZM/view?usp=drivesdk",
    "name": "Bethlehem_West Bank Barri_murals_41809.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41815",
    "url": "https://drive.google.com/file/d/1ml1g8bVcbHtV0s_Z9BtLD1h9GbKxIQiV/view?usp=drivesdk",
    "name": "Bethlehem_tourists_The Walled Off _41815.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41821",
    "url": "https://drive.google.com/file/d/1xM8Dpm2WKR5M4PqLkhi7QAY0RT_-yiFb/view?usp=drivesdk",
    "name": "Rome_tourists_tour guide_41821.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41829",
    "url": "https://drive.google.com/file/d/1BKVrMpJv06sFvCbTSfDmKtt0bd6760qO/view?usp=drivesdk",
    "name": "Bethlehem_church_minaret_41829.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "41936",
    "url": "https://drive.google.com/file/d/1-gZgA_JWIsozqGO0-YP_ywdFxX7UaLmk/view?usp=drivesdk",
    "name": "Athens_Acropolis_Parthenon_41936.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "42172",
    "url": "https://drive.google.com/file/d/1BFIv9SwrCQ_g93FZAJHe_5a_7olGxKP8/view?usp=drivesdk",
    "name": "Berlin_mural_people_42172.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "42396",
    "url": "https://drive.google.com/file/d/1U9vFgNbnz-q-c4E2Rq4hTo0b88jutWRg/view?usp=drivesdk",
    "name": "Rome_Roman Forum rui_tourists_42396.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "42402",
    "url": "https://drive.google.com/file/d/1AMpBNXqL0jv067Ca4-nAaYdxHPcj8lKd/view?usp=drivesdk",
    "name": "WhatsApp-Image-2025-02-17-at-11.24.56-5_42402.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "42408",
    "url": "https://drive.google.com/file/d/1L8yHX1tAS7_PhtQjTryxmzeTA0VGEKFS/view?usp=drivesdk",
    "name": "Rome_statue of Juliu_Roman Forum_42408.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "42420",
    "url": "https://drive.google.com/file/d/1XINUSqzOSj6erq2R2sQO8REQLN_7H9_W/view?usp=drivesdk",
    "name": "Rome_Roman Forum rui_columns_42420.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "42426",
    "url": "https://drive.google.com/file/d/1tMzizdtZPORfG_xHGx4SKne0Mkk23xCu/view?usp=drivesdk",
    "name": "Rome_Roman Forum rui_wooden walkway_42426.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "42432",
    "url": "https://drive.google.com/file/d/1Xt7LjXrzEyTZ-vSpl-PMJgtdb69UcNxn/view?usp=drivesdk",
    "name": "Rome_ancient ruins_walkway_42432.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "42508",
    "url": "https://drive.google.com/file/d/1wzLn80soxbR6HTGxINViUCohMDhXZAC0/view?usp=drivesdk",
    "name": "Gdańsk_hands_grass_42508.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "42522",
    "url": "https://drive.google.com/file/d/1k6_ahejEfPSQuCDY0l2Xm0PgGz8bezSX/view?usp=drivesdk",
    "name": "Gdansk_Crane_Buildings_42522.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "42550",
    "url": "https://drive.google.com/file/d/1kmwx87OdIgovQ9-1jNkLiXoGZfOlR034/view?usp=drivesdk",
    "name": "Nice_I Love Nice sig_sky_42550.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "42611",
    "url": "https://drive.google.com/file/d/1n8XxAos9Y3Eb2na6AULyaFqw2Y8SiVqz/view?usp=drivesdk",
    "name": "Hamburg_Hamburg City Ha_Tourists_42611.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "42637",
    "url": "https://drive.google.com/file/d/1EuVOoRCn4gFl7hLVFNmtZX5rBpjP7R76/view?usp=drivesdk",
    "name": "Hamburg-Tomek-7_42637.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "42681",
    "url": "https://drive.google.com/file/d/1N4HqW9M90N85y4cu2Dcmh8wImSctBQM1/view?usp=drivesdk",
    "name": "Hamburg_buildings_canal_42681.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "42699",
    "url": "https://drive.google.com/file/d/14BQAKjZJ7nT2dx99g3LiDC2sW4rT5Nw6/view?usp=drivesdk",
    "name": "Hamburg_canal_bridge_42699.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "42705",
    "url": "https://drive.google.com/file/d/18QQnIUaXgglZ4Edlpdqr78gZ_IhlNk61/view?usp=drivesdk",
    "name": "Hamburg_mural_roll-up door_42705.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "42990",
    "url": "https://drive.google.com/file/d/1Q_Ih87DdephPiXDBp8BHk6AOA91i731D/view?usp=drivesdk",
    "name": "Rome_St Peters Basil_Ponte SantAngel_42990.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43014",
    "url": "https://drive.google.com/file/d/1Kml0sg9YzwOT2yc0-esJS3DMVGeIJ7ly/view?usp=drivesdk",
    "name": "Rome_St Peters Basil_street_43014.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43020",
    "url": "https://drive.google.com/file/d/1tPrALyv0HZzNh1_rakBS6Yq2t7I7Ir94/view?usp=drivesdk",
    "name": "Rome_St Peters Squar_St Peters Basil_43020.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43038",
    "url": "https://drive.google.com/file/d/120kuS2dpiPgA2Zr2aIgQlDivtAMSTePl/view?usp=drivesdk",
    "name": "Rome_Stone Relief_Papal Tiara_43038.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43056",
    "url": "https://drive.google.com/file/d/1WpkZZX3MHrFM-R4BEMVLcsWKXgBoJyLD/view?usp=drivesdk",
    "name": "Rome_St Peters Basil_colonnade_43056.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43062",
    "url": "https://drive.google.com/file/d/1fSyLUEc7bISHyiZwwkW3n2Hr6agoL7SR/view?usp=drivesdk",
    "name": "Rome_Castel SantAnge_Ponte SantAngel_43062.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43077",
    "url": "https://drive.google.com/file/d/1aCL_bHPSMdJEViUhQjqH3HvCDwPxiPtH/view?usp=drivesdk",
    "name": "Hamburg_tour group_canal_43077.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43089",
    "url": "https://drive.google.com/file/d/1BUXJvzJUGa2Kgp8NWRnUoDc_QTHRn6CY/view?usp=drivesdk",
    "name": "Hamburg_tourists_tour guide_43089.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43100",
    "url": "https://drive.google.com/file/d/1gM6uX8lkGOTZ1zFXzySenwiC2PVXPHg7/view?usp=drivesdk",
    "name": "Rome_cityscape_churches_43100.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43121",
    "url": "https://drive.google.com/file/d/1vl5SPXboM1o6AJ4_jJ0fm_UM8ESw_jwC/view?usp=drivesdk",
    "name": "Hamburg_St Pauli Theate_Police Station_43121.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43127",
    "url": "https://drive.google.com/file/d/1NQVszZ9rWTMLuAjggz7HPKnuFGXe17iW/view?usp=drivesdk",
    "name": "Hamburg_Olivias Showclu_signage_43127.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43133",
    "url": "https://drive.google.com/file/d/1cOQIyAOR-HUta_T1_Ul8qg4W4eDJOJrt/view?usp=drivesdk",
    "name": "Germany_neon signs_street_43133.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43139",
    "url": "https://drive.google.com/file/d/1tsuOwI4O7KDzZLTlh6QxNUi1dq4qYf5o/view?usp=drivesdk",
    "name": "Hamburg_Olivia Jones Ba_building facade_43139.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43145",
    "url": "https://drive.google.com/file/d/1D-IfA8cImh2R7zhXGZNGRrIoQCZqdDWB/view?usp=drivesdk",
    "name": "Hamburg_St Catherines C_brick buildings_43145.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43151",
    "url": "https://drive.google.com/file/d/1figH8YF7yLkZa46IBp-qjZMlh33v79g8/view?usp=drivesdk",
    "name": "Hamburg_Elbphilharmonie_sailing ship_43151.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43157",
    "url": "https://drive.google.com/file/d/16wlMTTEGlmy6R78vpTm6oxF_78vQ01L8/view?usp=drivesdk",
    "name": "Hamburg_neon signs_bars_43157.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43163",
    "url": "https://drive.google.com/file/d/15G-oX9r01K2UWh5WMd6OXtqvdFWftqpK/view?usp=drivesdk",
    "name": "Hamburg_people_street_43163.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43175",
    "url": "https://drive.google.com/file/d/180HXHqQXmAMqgrW0bs_ZX6DxrDYErKNL/view?usp=drivesdk",
    "name": "Hamburg_Elbphilharmonie_Elbe River_43175.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43187",
    "url": "https://drive.google.com/file/d/1Z3P7MC-2vIXktRv6r-xJzkCOQ3OikHeS/view?usp=drivesdk",
    "name": "Hamburg_Elbphilharmonie_Harbor_43187.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43199",
    "url": "https://drive.google.com/file/d/1CUw6lNXJuXRUjKKTZce60_-iBECuuOC3/view?usp=drivesdk",
    "name": "Hamburg_Elbe Philharmon_water_43199.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43208",
    "url": "https://drive.google.com/file/d/1t3KfIRe-boWGbTrm_hlcltw6O5X1dC6u/view?usp=drivesdk",
    "name": "tunnel_path_43208.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43214",
    "url": "https://drive.google.com/file/d/1uChQJZF3IApqyR6NlqFhrqOL7yFOtgVy/view?usp=drivesdk",
    "name": "Hamburg_Clock Tower_Harbor_43214.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43290",
    "url": "https://drive.google.com/file/d/1y9f_nHdFJhDbO7FtrSjVy7RF_XGvQ0rO/view?usp=drivesdk",
    "name": "Valladolid_tour group_brick building_43290.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43296",
    "url": "https://drive.google.com/file/d/1r6_kmxOP2egyEubNQNSdkFXzsm3RSO-9/view?usp=drivesdk",
    "name": "Madrid_Madrid Metro si_buildings_43296.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43302",
    "url": "https://drive.google.com/file/d/176iVxGZBqh6sS4fez54YsyTE6q8vmdCD/view?usp=drivesdk",
    "name": "",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43308",
    "url": "https://drive.google.com/file/d/1uobBmc4MoeEEWJxWGlZIMtMWZkIsOL0u/view?usp=drivesdk",
    "name": "Barcelona_metal structure_letters_43308.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43314",
    "url": "https://drive.google.com/file/d/1E04EQ7AHZhGlonsWVZ0O4FHzB7eTRw_a/view?usp=drivesdk",
    "name": "Barcelona_tapas_pintxos_43314.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43333",
    "url": "https://drive.google.com/file/d/1vQN7AcD7gOK9bZpw4LwuTe7EgwkntlB7/view?usp=drivesdk",
    "name": "Barcelona_tourists_bar_43333.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43363",
    "url": "https://drive.google.com/file/d/1EGbqi6Hv7FoYI7pqRxoa6ExVU6XpcCxP/view?usp=drivesdk",
    "name": "Madrid_tourists_street_43363.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43489",
    "url": "https://drive.google.com/file/d/12HWDrEx_8mgejcJZl6l2_f2x3fWCDjbd/view?usp=drivesdk",
    "name": "Paris_Mona Lisa_painting_43489.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43495",
    "url": "https://drive.google.com/file/d/1MoB3xiHLOuo-obwCJwDOgziNj7YrZlav/view?usp=drivesdk",
    "name": "Paris_paintings_tourists_43495.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43501",
    "url": "https://drive.google.com/file/d/1yQ5tL5gGcv6JCwv3ddncgYbFwaBIeeFA/view?usp=drivesdk",
    "name": "Paris_Winged Victory _pedestal_43501.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43507",
    "url": "https://drive.google.com/file/d/1qimfX6BnQL_FVbRoL8LO-Yw0ZjoCmwZf/view?usp=drivesdk",
    "name": "Paris_Louvre Museum_glass pyramid_43507.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43513",
    "url": "https://drive.google.com/file/d/13oGdX3oi058EWFSDI5Avq-p1PfFOjys7/view?usp=drivesdk",
    "name": "Paris_paintings_tourists_43513.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43519",
    "url": "https://drive.google.com/file/d/1fhFDVifLce0-ixlCUEYXRJ_Re1TH4f1U/view?usp=drivesdk",
    "name": "Paris_Winged Victory _Louvre Museum a_43519.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43525",
    "url": "https://drive.google.com/file/d/1L8GutmnM2RR-vLTxwbOe13yZ99l5bbEW/view?usp=drivesdk",
    "name": "Rome_marble statue_classical sculp_43525.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43531",
    "url": "https://drive.google.com/file/d/1i3eWXEanybE-MKNu6ouvjzuMIMCvhtJs/view?usp=drivesdk",
    "name": "Paris_Venus de Milo s_43531.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43545",
    "url": "https://drive.google.com/file/d/1XWnSbbdKvO1NqM1TTcrBr-WsKPmlVD-E/view?usp=drivesdk",
    "name": "Madrid_statue_fallen angel_43545.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43557",
    "url": "https://drive.google.com/file/d/1ci-NnAMr08Jo_Qlofzhj3PR_I6rZnmxo/view?usp=drivesdk",
    "name": "trees_grass_43557.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43563",
    "url": "https://drive.google.com/file/d/1kqKAYuZw9DKpiK1UwUr91UQh_OZIcjGp/view?usp=drivesdk",
    "name": "Madrid_Monument to Alf_lake_43563.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43569",
    "url": "https://drive.google.com/file/d/14yUTs7Z0rCw7OFNANkUJUc5pycVaYo0_/view?usp=drivesdk",
    "name": "Madrid_Palacio de Cris_trees_43569.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4370",
    "url": "https://drive.google.com/file/d/1G7314kV_q--2ML0MYqHlwdkvtYpRY-Pp/view?usp=drivesdk",
    "name": "Oświęcim_tourists_wooden gate_4370.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43762",
    "url": "https://drive.google.com/file/d/1nJrgxx5hFqJHZCN3rvgI4fg_0CpwHQ3I/view?usp=drivesdk",
    "name": "Madrid_Prado Museum_trees_43762.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43768",
    "url": "https://drive.google.com/file/d/15TEoMSH9IWOypLl3lR7YOzYvXxdKTa9r/view?usp=drivesdk",
    "name": "Madrid_Prado Museum_statue of Veláz_43768.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43774",
    "url": "https://drive.google.com/file/d/1LXJtGdh4K4W4_pbBDj9NrhmZgz2qKLzW/view?usp=drivesdk",
    "name": "Madrid_paintings_gold frames_43774.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43780",
    "url": "https://drive.google.com/file/d/1UCmb3ZqcEWK6kQGmakTeQB9MImR0CpbI/view?usp=drivesdk",
    "name": "Madrid_paintings_hallway_43780.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4380",
    "url": "https://drive.google.com/file/d/1Ajm_8Hw68E8lUFjpiYRnLTaCt4xY_k9r/view?usp=drivesdk",
    "name": "Krakow_tour guide_microphone_4380.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43823",
    "url": "https://drive.google.com/file/d/10XU_M7p8HF38Tw6MOB6Z_h9nLkjt5Aa9/view?usp=drivesdk",
    "name": "Paris_Church of Madel_Colonnade_43823.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43835",
    "url": "https://drive.google.com/file/d/1vh1hFTeEEPnbBY6vPKqzcERXb3Ix2Sfb/view?usp=drivesdk",
    "name": "Paris_Colonne Vendôme_Place Vendôme_43835.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43841",
    "url": "https://drive.google.com/file/d/1X0myHBnhmG18fpC45ru0oDo461J8__ez/view?usp=drivesdk",
    "name": "Paris_Luxor Obelisk_Place de la Con_43841.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4385",
    "url": "https://drive.google.com/file/d/1BfHfDoici0ThyvGNYyM0tDSlKPBx2AN5/view?usp=drivesdk",
    "name": "Krakow_historical phot_maps_4385.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43853",
    "url": "https://drive.google.com/file/d/1I7uFX3ouchJQqepdgfMAZFmB1PlGC2Ob/view?usp=drivesdk",
    "name": "Paris_soldiers_barricade_43853.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43859",
    "url": "https://drive.google.com/file/d/1cVvnmC6Rw3rnyJBFi9dEBtwsMi_A2Aro/view?usp=drivesdk",
    "name": "Paris_Eiffel Tower_Luxor Obelisk_43859.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "43865",
    "url": "https://drive.google.com/file/d/1-1xNdtk8nwRbem6UdMzKCWLJG8DJP82d/view?usp=drivesdk",
    "name": "Paris_woman_French flag_43865.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4390",
    "url": "https://drive.google.com/file/d/1FCKLCdeP4B4TfB9u8sRA9FxCs52h4aZf/view?usp=drivesdk",
    "name": "Krakow_Nazi flag_propaganda post_4390.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44175",
    "url": "https://drive.google.com/file/d/1B-Yqsw5jEv5WqxxNQudutxEsLs1DlQVo/view?usp=drivesdk",
    "name": "Athens_Temple of Hepha_tour group_44175.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44187",
    "url": "https://drive.google.com/file/d/1Zqkzbzo-bkEfp6tZYB8cnd24IM_AGS19/view?usp=drivesdk",
    "name": "Athens_tour guide_tourists_44187.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44193",
    "url": "https://drive.google.com/file/d/1t7XzK3CbyFdMasO8ls2Qsf-UAwKspMXT/view?usp=drivesdk",
    "name": "Greece_tourists_street_44193.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44205",
    "url": "https://drive.google.com/file/d/1mZDH7b5jP_7cKklcbZTxkan26sx6mOc_/view?usp=drivesdk",
    "name": "Athens_building_street_44205.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44217",
    "url": "https://drive.google.com/file/d/12bwFYwk6z3abptFDnMO3jqlQhmLiQmWe/view?usp=drivesdk",
    "name": "Athens_Church_Pink Building_44217.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44229",
    "url": "https://drive.google.com/file/d/1lfDRgfhqak0vGuTQUD-___aljslDB2pp/view?usp=drivesdk",
    "name": "Athens_Temple of Hepha_tour guide_44229.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44235",
    "url": "https://drive.google.com/file/d/1TWzU6NyV_0jOQc24Gt3_tI6JyAmIayv-/view?usp=drivesdk",
    "name": "Athens_tour group_guide_44235.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44241",
    "url": "https://drive.google.com/file/d/1qE3_Is_f-tMYT-m15mskyTjDlp6-H9d8/view?usp=drivesdk",
    "name": "Athens_Temple of Hepha_Trees_44241.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44247",
    "url": "https://drive.google.com/file/d/1ta-yVdtKuABT-ho-ZXw7Vx9hcMBCgVHo/view?usp=drivesdk",
    "name": "Athens_marble bust_statue_44247.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44336",
    "url": "https://drive.google.com/file/d/1w50gzQkOsgWKvnZkTsOCFgiG-ersFYQB/view?usp=drivesdk",
    "name": "Krakow_statue_archeress_44336.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44342",
    "url": "https://drive.google.com/file/d/12moUZRYIJ5fibz0jQkPIUHZ4VKtko2KI/view?usp=drivesdk",
    "name": "Bydgoszcz_statue_canal_44342.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44348",
    "url": "https://drive.google.com/file/d/1C7rT7bWkgKrQfS3sWXvTay5UoSNNc5fU/view?usp=drivesdk",
    "name": "Krakow_mural_buildings_44348.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44354",
    "url": "https://drive.google.com/file/d/1GjD5C640nuU00eOyFv8aIkdow1N7qSTT/view?usp=drivesdk",
    "name": "Bielsko-Biała_Evangelical Chu_trees_44354.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44360",
    "url": "https://drive.google.com/file/d/1IdvKnUxiLFvU3U3PBqT8Cu5vbVxuuYpK/view?usp=drivesdk",
    "name": "Gdańsk_Filharmonia Pom_people_44360.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44366",
    "url": "https://drive.google.com/file/d/1LSU9lwqk_w0nfM5zbmjrs1vae9sKRGpl/view?usp=drivesdk",
    "name": "Dresden_statue_park_44366.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44445",
    "url": "https://drive.google.com/file/d/1JdcMJkIAsJ5w7bmSc938-slubhWFjugz/view?usp=drivesdk",
    "name": "Dresden_cobblestone str_historic buildi_44445.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44451",
    "url": "https://drive.google.com/file/d/1arU-I03a6_GbOgO2AkP-eOG2j-SQXAEc/view?usp=drivesdk",
    "name": "Dresden_Frauenkirche_Zwinger Palace_44451.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44595",
    "url": "",
    "name": "",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44598",
    "url": "https://drive.google.com/file/d/1RddGqet_hGBXOkdnhJsTCBnPBX0rW-8x/view?usp=drivesdk",
    "name": "Bucharest_mausoleum_tomb_44598.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "44604",
    "url": "https://drive.google.com/file/d/12-Re2bdeyMdbq3N1U34ZT43yCPvEo3B_/view?usp=drivesdk",
    "name": "Krakow_bronze sculptur_angel_44604.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "45390",
    "url": "https://drive.google.com/file/d/1FdWO0t212codBV8yKNxDYthvd1R259M8/view?usp=drivesdk",
    "name": "Krakow_information pan_historical phot_45390.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "45396",
    "url": "https://drive.google.com/file/d/1cfih3wht5oubpTh1ziQFwALZxzpvWRvd/view?usp=drivesdk",
    "name": "Krakow_tourist_grave marker_45396.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "45402",
    "url": "https://drive.google.com/file/d/1eLLJaEAm8wQrVACuu2LLF3VYn0RDcgeQ/view?usp=drivesdk",
    "name": "Krakow_gravestone_red candle_45402.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "45408",
    "url": "https://drive.google.com/file/d/1VMDIZEQPDsgz3mIPj1ebA9anJLqzt18n/view?usp=drivesdk",
    "name": "stone structure_grass_45408.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "45414",
    "url": "https://drive.google.com/file/d/1YQ3CCHez29qC7vS0naFdSRTmhTWCZfyF/view?usp=drivesdk",
    "name": "Krakow_memorial_granite stone_45414.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "45426",
    "url": "https://drive.google.com/file/d/1mFP25D6Fy-7koHaA4B6JWph8up3_aV2w/view?usp=drivesdk",
    "name": "Krakow_barracks_fence_45426.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "45484",
    "url": "https://drive.google.com/file/d/1sc0Rb--hV2Qo5wmKwwvPYgtXlIx9Xp9v/view?usp=drivesdk",
    "name": "Bucharest_Palace of the P_landscaping_45484.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "45497",
    "url": "https://drive.google.com/file/d/1c4I3UtW5cHjIL84WUVIoLm5KYh0MYs8Z/view?usp=drivesdk",
    "name": "London_yellow umbrella_double-decker b_45497.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "45506",
    "url": "https://drive.google.com/file/d/12o4JQOOBfR-_Qgvzy7skWhbIb1yoMNPt/view?usp=drivesdk",
    "name": "London_red double-deck_red telephone b_45506.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "45678",
    "url": "https://drive.google.com/file/d/1U6UMwKnh_BbESXrfo4zPXHlrpo-z6Rqx/view?usp=drivesdk",
    "name": "London_person_umbrella_45678.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "45690",
    "url": "https://drive.google.com/file/d/1QQiDYiH-ldm7DGMWPfSD9NJ7lBYkud14/view?usp=drivesdk",
    "name": "London_person_umbrella_45690.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "45696",
    "url": "https://drive.google.com/file/d/14-FVDxc02qNWHzWGVX0TycTCThbZK_Ba/view?usp=drivesdk",
    "name": "London_alleyway_buildings_45696.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "45702",
    "url": "https://drive.google.com/file/d/1pRqXRM63g-_9cxvNYzz_3ECRTZ392YIM/view?usp=drivesdk",
    "name": "London_umbrella_Tower of London_45702.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "45714",
    "url": "https://drive.google.com/file/d/13TGH5FQXAbjZ3-s95WtEEjIXZZIabpVh/view?usp=drivesdk",
    "name": "London_Gherkin 30 St M_Church of St Ma_45714.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "45796",
    "url": "https://drive.google.com/file/d/12oi_Xbt2QSGipiTUowVpTEIozjI07f8B/view?usp=drivesdk",
    "name": "London_Tower of London_towers_45796.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "45808",
    "url": "https://drive.google.com/file/d/11DwdbOrjx3fsi94-ivfvQv07NcvYOhpz/view?usp=drivesdk",
    "name": "London_Tower Bridge_River Thames_45808.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "46297",
    "url": "https://drive.google.com/file/d/1zS0qTmtT5PLUt8HR6YAZNWYCPN252Ghv/view?usp=drivesdk",
    "name": "Nice_pastry_hand_46297.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "46303",
    "url": "https://drive.google.com/file/d/1NnbyLYyv_d3jI0qEaWbAx6LWqWnsJM1y/view?usp=drivesdk",
    "name": "Nice_fireworks_water_46303.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "46375",
    "url": "https://drive.google.com/file/d/1vFzJ1XQ1HtjmzDw1ZhU6cqSsFcrNfd5i/view?usp=drivesdk",
    "name": "Cannes_blue chairs_spices_46375.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "46381",
    "url": "https://drive.google.com/file/d/19qQ8tgmIzto6CJ8JDT7s_zvQG-ghT-7W/view?usp=drivesdk",
    "name": "Amalfi Coast_lemon_lemon tree_46381.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "46387",
    "url": "https://drive.google.com/file/d/1O3K8urOvgEAaVJLrpTjp9D-_DppZbBO7/view?usp=drivesdk",
    "name": "Tanneron_mimosa jelly ja_mimosa flowers_46387.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4647",
    "url": "https://drive.google.com/file/d/1HBDu7rAVsuj6l_1p_FuVBZCy6uQb9nyB/view?usp=drivesdk",
    "name": "Warsaw_tour group_tank monument_4647.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "46524",
    "url": "https://drive.google.com/file/d/1M1Rc9U6kW6wdlA1qjb_nQCcvLXtcvEPm/view?usp=drivesdk",
    "name": "Munich_rotunda_columns_46524.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47003",
    "url": "https://drive.google.com/file/d/1_-jRaIpxRnndZYVwPA5GUPJNRRD32p3g/view?usp=drivesdk",
    "name": "Sopot_Sopot Pier_beach_GD4.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47005",
    "url": "https://drive.google.com/file/d/1rd_AWU1IJKB0gxHTOPTddHttkMksyuM8/view?usp=drivesdk",
    "name": "Gdansk_Main Town Hall_buildings_GD6.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47008",
    "url": "https://drive.google.com/file/d/1hZmEMNxOVSCWGUNfBFxbvwdOmin8gp50/view?usp=drivesdk",
    "name": "Gdansk_Golden Gate_medieval buildi_47008.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47016",
    "url": "https://drive.google.com/file/d/1gq_A7YHJIXMBgzR1AzTNCZ-ulrmQR1Nq/view?usp=drivesdk",
    "name": "Gdańsk_Monument to the_twin masts_47016.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47023",
    "url": "https://drive.google.com/file/d/1ryzDhOOSFqqH9BTS996k8h72El4AZoiq/view?usp=drivesdk",
    "name": "Gdansk_Brick Building_Person_47023.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47033",
    "url": "https://drive.google.com/file/d/1T3qo7NB9-ffe26gisSUCbad15y4lOK90/view?usp=drivesdk",
    "name": "Gdansk_St Marys Church_Gdansk Town Hal_47033.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47034",
    "url": "https://drive.google.com/file/d/11MXWxYxv5HNqw6cO2tCsxdpexrNxU9rL/view?usp=drivesdk",
    "name": "Gdansk_ship_Soldek_47034.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47042",
    "url": "https://drive.google.com/file/d/13qvJMCWZ1GtSGAFlVzA32FdZvnEVKiCp/view?usp=drivesdk",
    "name": "Gdansk_buildings_water_47042.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47078",
    "url": "https://drive.google.com/file/d/1p3dWxCj568VcJpfS5N9edNWQBaMI_3G7/view?usp=drivesdk",
    "name": "Barcelona_Columbus Monume_Torre Agbar_47078.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47106",
    "url": "https://drive.google.com/file/d/19ft7a8pcqInJEPRY6xqSoJnIrzY3griM/view?usp=drivesdk",
    "name": "Paris_Notre Dame Cath_tree_47106.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47112",
    "url": "https://drive.google.com/file/d/1evH54ikFjklAUgh9q7MBv3YQUfnbveSB/view?usp=drivesdk",
    "name": "Paris_Moulin Rouge_windmill_47112.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47115",
    "url": "https://drive.google.com/file/d/14VGruaC36meG60Y_53UHnAwtqCV_dfrs/view?usp=drivesdk",
    "name": "Paris_Notre Dame Cath_Seine River_47115.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47125",
    "url": "https://drive.google.com/file/d/1KW2_aJlTh2-GPQa7bs99rQZzMNr68NsI/view?usp=drivesdk",
    "name": "Paris_tour guide_tourists_47125.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47128",
    "url": "https://drive.google.com/file/d/144zsh78CGQMVlIfoZquzuOrq6sc-Hg-y/view?usp=drivesdk",
    "name": "Paris_Louvre Pyramid_Louvre Museum_47128.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47131",
    "url": "https://drive.google.com/file/d/1glwmtvvu2piGZhCkzYwvATCG6fUhVOrr/view?usp=drivesdk",
    "name": "Paris_building_stone wall_47131.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47143",
    "url": "https://drive.google.com/file/d/1VtTtJFw9xwbic1h5PgqO4yCKh8hJa1v5/view?usp=drivesdk",
    "name": "Paris_paintings_art stall_47143.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47160",
    "url": "https://drive.google.com/file/d/19Uf4VDT7e5JCoKMVVwXoQ2xsJTWVb2CA/view?usp=drivesdk",
    "name": "Paris_man_yellow umbrella_47160.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47166",
    "url": "https://drive.google.com/file/d/12ir5ApLgpLasHderSnOKokBoRdCw-LG2/view?usp=drivesdk",
    "name": "Paris_bridge_river_47166.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47169",
    "url": "https://drive.google.com/file/d/16FyFBaFGELHcoSLBpZC1GtOHmDcUElkZ/view?usp=drivesdk",
    "name": "Paris_tour guide_tourists_47169.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47184",
    "url": "https://drive.google.com/file/d/1XxSPrE5njzrxVHK-1MAgIDyLcgy8RzZw/view?usp=drivesdk",
    "name": "Paris_tour guide_tourists_47184.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47204",
    "url": "https://drive.google.com/file/d/1by5-JmFcDM5Xh6Kg56LE-LcJ_Fy9QnLm/view?usp=drivesdk",
    "name": "Paris_Hôtel de Sens_tour guide_47204.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47206",
    "url": "https://drive.google.com/file/d/1eFCfa5bPqvbXIpC0qyYkPCEOVU6tdjGf/view?usp=drivesdk",
    "name": "Paris_tour guide_tour group_47206.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47219",
    "url": "https://drive.google.com/file/d/1sD21FfiRQEZBvsGPTUYJJM2tcRbrKKCJ/view?usp=drivesdk",
    "name": "Paris_astronomical cl_building_47219.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47237",
    "url": "https://drive.google.com/file/d/1z9i4R03_a1I-NPBHEe8HRHBeuQf2vRYZ/view?usp=drivesdk",
    "name": "Paris_Storefront_Mosaic Tile Wor_47237.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47284",
    "url": "https://drive.google.com/file/d/11Vghcm5u30_sJjx5TbqWShvG37JqLml6/view?usp=drivesdk",
    "name": "Paris_stone arches_courtyard_47284.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47285",
    "url": "https://drive.google.com/file/d/1fzjDUYipUgycb9OykgYlC28MIOKK_c20/view?usp=drivesdk",
    "name": "Paris_Louvre Museum_glass pyramid_47285.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47286",
    "url": "https://drive.google.com/file/d/15yCXyMK7j8KG_Qzg3t5_j1yyIp0uz0Tc/view?usp=drivesdk",
    "name": "Paris_tourists_guide_47286.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47289",
    "url": "https://drive.google.com/file/d/191g5li1oxyr5mlsq0n2WvSzcnWwPEBP5/view?usp=drivesdk",
    "name": "Paris_Louvre Museum_Glass Pyramid_47289.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47291",
    "url": "https://drive.google.com/file/d/1Pc7sMvKVt7kdFuxA40s8bo5fFfzWcA7Q/view?usp=drivesdk",
    "name": "Paris_Louvre Museum_glass pyramid_47291.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47309",
    "url": "https://drive.google.com/file/d/1Yg9EP2o6M4uBeDpJYPnQb07i5F7LzhYF/view?usp=drivesdk",
    "name": "Marseille_Château dIf_courtyard_47309.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47310",
    "url": "https://drive.google.com/file/d/1_FEeaNPFReuzIj0GMDuFNeRt_i-sjosu/view?usp=drivesdk",
    "name": "France_shopfront_wooden doors_47310.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47311",
    "url": "https://drive.google.com/file/d/1aynPdxMAsi8eoauHBPn-HWUd9RcJuj8H/view?usp=drivesdk",
    "name": "Marseille_sailboats_yachts_47311.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47312",
    "url": "https://drive.google.com/file/d/1XkZ444x7KAqrT-rPUEX2evbEmLR2P9t0/view?usp=drivesdk",
    "name": "Marseille_Saint-Jean Cast_Marseille Cathe_47312.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47313",
    "url": "https://drive.google.com/file/d/1x61YsXhmc1avJVimi8oEHXLPmjwFiYAX/view?usp=drivesdk",
    "name": "Germany_memorial_sculpture_47313.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47317",
    "url": "https://drive.google.com/file/d/1VzyI-67w-8xbnPJFaK1IvGqS2Kfoqu_8/view?usp=drivesdk",
    "name": "Krakow_bronze model of_Wawel Cathedral_47317.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47330",
    "url": "https://drive.google.com/file/d/1TWrOD_F6wpCvD_73hyBYlfcXtv40MdFa/view?usp=drivesdk",
    "name": "Germany_swastika flag_photograph of s_47330.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47349",
    "url": "https://drive.google.com/file/d/1EKNgj1bAZx_xnqCob2I_aM_-EOQ07eIM/view?usp=drivesdk",
    "name": "Germany_tour group_staircase_47349.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47353",
    "url": "https://drive.google.com/file/d/1efEwFRpdi99SIoBNRrYJ_DUETLbMxIgx/view?usp=drivesdk",
    "name": "Krakow_Floriańska Gate_cobblestone str_47353.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47448",
    "url": "https://drive.google.com/file/d/1N1A3m3AASCp1uH6Ve0o5Uo9CKEXBZoA1/view?usp=drivesdk",
    "name": "Germany_tour guide_large abstract _47448.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47465",
    "url": "https://drive.google.com/file/d/1Cde9XP2YcASQcTe6DGPjvCF01Itk-Q4H/view?usp=drivesdk",
    "name": "Germany_tourists_art museum_47465.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47476",
    "url": "https://drive.google.com/file/d/17afjBJC4Dt9NrMVRnlZreVabDNSvPHYn/view?usp=drivesdk",
    "name": "Germany_tourists_tour guide_47476.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47478",
    "url": "https://drive.google.com/file/d/1Ol2cO2Ry6N0nAuPF-rK2pHmzyKUcUPmc/view?usp=drivesdk",
    "name": "Germany_mural_tour guide_47478.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47508",
    "url": "https://drive.google.com/file/d/1p4_MP3iSkVOxX4wGg0zu-LKvKERMg8ln/view?usp=drivesdk",
    "name": "Poland_tourist_information boa_47508.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47557",
    "url": "https://drive.google.com/file/d/1tm2MbsA21lBSm1hZhUXy_f7g2TCQqskt/view?usp=drivesdk",
    "name": "Warsaw_yellow umbrella_cobblestone str_47557.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47564",
    "url": "https://drive.google.com/file/d/1ZzQp2LeF18kYffl0zDmpsDGQ4ZRMO0lk/view?usp=drivesdk",
    "name": "Krakow_church_twin-towered bu_47564.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47572",
    "url": "https://drive.google.com/file/d/1puHVDvxBuTVYwG6zZyPtPxwufIDCbXqz/view?usp=drivesdk",
    "name": "Krakow_tour guide_yellow umbrella_47572.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47576",
    "url": "https://drive.google.com/file/d/1PhUxECFXeOngjjtGwzZ8n2Ns5lJ44NxH/view?usp=drivesdk",
    "name": "Krakow_Cloth Hall_Main Market Squ_47576.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47597",
    "url": "https://drive.google.com/file/d/1uzF628ZqIH7KeU141d8Pb6Ok3OuTdMCs/view?usp=drivesdk",
    "name": "Krakow_wrought iron fe_menorah design_47597.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47604",
    "url": "https://drive.google.com/file/d/1N2Z83Yl-e0X2VVLYZsFFbfHrdf_H-iOb/view?usp=drivesdk",
    "name": "Krakow_tour group_guide_47604.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47607",
    "url": "https://drive.google.com/file/d/1-1pk61TTmzdjdi2iwF43h5oVZkxf2Fxg/view?usp=drivesdk",
    "name": "Krakow_tour group_tour guide_47607.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47614",
    "url": "https://drive.google.com/file/d/1sTYmsJ8OimVCpScxtO6Z4lGPUdzKtxYC/view?usp=drivesdk",
    "name": "Krakow_gravestones_snow_47614.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47616",
    "url": "https://drive.google.com/file/d/1L4HiFY3s_mycv7x9-5p_s6fI1mrBZBZA/view?usp=drivesdk",
    "name": "Krakow_Star of David g_metal gate_47616.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47620",
    "url": "https://drive.google.com/file/d/1iUfqHRmCwquSku_6wtUDnoAM9IoqrU5Z/view?usp=drivesdk",
    "name": "Krakow_Old Synagogue_Snow_47620.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47621",
    "url": "https://drive.google.com/file/d/1suq_vvrKoByQBAy5WXSJpUPnt0Cy-Dwo/view?usp=drivesdk",
    "name": "Krakow_tour guide_yellow umbrella_47621.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47640",
    "url": "https://drive.google.com/file/d/16CVtYmfb3E2rGaaB0q0oQtuXIeUg5tmq/view?usp=drivesdk",
    "name": "Krakow_street_buildings_47640.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47643",
    "url": "https://drive.google.com/file/d/1VRMQjpEoWsx0QhYz1G17HMbjKJ2eo8AC/view?usp=drivesdk",
    "name": "Krakow_building_streetlamp_47643.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47646",
    "url": "https://drive.google.com/file/d/1vvreJ-5wfXbcu4hoJBd20YY61xrx6pCs/view?usp=drivesdk",
    "name": "Poland_gravel path_grass_47646.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47656",
    "url": "https://drive.google.com/file/d/14M7KWEDxH4CB22MpgeV4jcU9LhfmGUNF/view?usp=drivesdk",
    "name": "Poland_bronze chairs_cobblestone pla_47656.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47669",
    "url": "https://drive.google.com/file/d/1GkhCVDtQpedfxgL-B2CypDuVRKhKHy0M/view?usp=drivesdk",
    "name": "Krakow_tour group_guide_47669.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47672",
    "url": "https://drive.google.com/file/d/1PTHVNyKXQjAWPsMFAniRlixwwnQ7lk_3/view?usp=drivesdk",
    "name": "Krakow_religious shrin_crucifix_47672.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47674",
    "url": "https://drive.google.com/file/d/1CGzJbgXulj2wNvvSq4qt1_gOZ4jLHolx/view?usp=drivesdk",
    "name": "Krakow_stone carving_sculpture_47674.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47676",
    "url": "https://drive.google.com/file/d/1cL9ujdqvTKjOBCDKD7vLFb-Hr_T4Yyke/view?usp=drivesdk",
    "name": "Krakow_St Marys Basili_St Wojciechs Ch_47676.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47680",
    "url": "https://drive.google.com/file/d/1TMpdasTau-s9_qMdrBSvFadjEZNZjefB/view?usp=drivesdk",
    "name": "Krakow_St Marys Basili_buildings_47680.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47681",
    "url": "https://drive.google.com/file/d/1UstNMMbizoACq3XZTH1w7R1X3ZzteVl-/view?usp=drivesdk",
    "name": "Germany_umbrella_brick wall_47681.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47683",
    "url": "https://drive.google.com/file/d/1UJO1DNoNSkdNE1YZZqLfGfzNGS4IyTij/view?usp=drivesdk",
    "name": "Warsaw_Lenin statue_soldiers_47683.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47722",
    "url": "https://drive.google.com/file/d/1vNqdWpnLdQ0ESefUAXBSnbr6KFECqMD1/view?usp=drivesdk",
    "name": "Germany_tour group_brick building_47722.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47723",
    "url": "https://drive.google.com/file/d/1nCpr6XUJb-kdFHCUJlHXxMv2tQg5Z3Qy/view?usp=drivesdk",
    "name": "Poland_wall_graffiti_47723.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47724",
    "url": "https://drive.google.com/file/d/1VFeXBtVhkhz-w-XHp31XEwF9mZuKlU5f/view?usp=drivesdk",
    "name": "Krakow_tour guide_tourists_47724.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47729",
    "url": "https://drive.google.com/file/d/1PLwCJWYfJrHb-qpgWWG3bzkZXZwJU_aw/view?usp=drivesdk",
    "name": "Germany_tour guide_tourists_47729.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47730",
    "url": "https://drive.google.com/file/d/1cS7WJg5EVZPXBsKE668SP0oUFVYQU5_V/view?usp=drivesdk",
    "name": "Krakow_tourists_guide_47730.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47734",
    "url": "https://drive.google.com/file/d/1CYWtNQm2ezElJMCuuoL2XS0nxyeYb9i5/view?usp=drivesdk",
    "name": "Warsaw_wooden cross_church_47734.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47735",
    "url": "https://drive.google.com/file/d/16UF03x2Qjvt7rn4RLC6yTO_qEqD-gH5M/view?usp=drivesdk",
    "name": "Krakow_tour group_guide_47735.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47737",
    "url": "https://drive.google.com/file/d/1HQ4C1TgvyBix1xaeX3mTLoFrEeB0HYFg/view?usp=drivesdk",
    "name": "Germany_tour guide_tourists_47737.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47741",
    "url": "https://drive.google.com/file/d/1YepEzXR2toz3USKEWUIeegVkQViR7YSA/view?usp=drivesdk",
    "name": "Germany_tour group_guide_47741.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47753",
    "url": "https://drive.google.com/file/d/1yFHYoQbYb-9TLUAf2dSWgdK_CpSngceh/view?usp=drivesdk",
    "name": "Krakow_tour guide_tourists_47753.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47767",
    "url": "https://drive.google.com/file/d/1uzc8KfSLczjVfdAbhkm7poSd_TyPpmOl/view?usp=drivesdk",
    "name": "Sopot_Ludowy Theatre_yellow umbrella_47767.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47775",
    "url": "https://drive.google.com/file/d/17CK-JGGJiVPnMmjN3Sdzs4XyQj1cFvUX/view?usp=drivesdk",
    "name": "Warsaw_yellow umbrella_paved walkway_47775.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47776",
    "url": "https://drive.google.com/file/d/1-61NwR4MtjYoyAOl9rH9oW-bx3FQRO3O/view?usp=drivesdk",
    "name": "Poland_buildings_street_47776.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47794",
    "url": "https://drive.google.com/file/d/1s6J97dI2L8iQm6qRjZdX9N8EvZAxHNqo/view?usp=drivesdk",
    "name": "Jerusalem_tourists_guide_47794.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47797",
    "url": "https://drive.google.com/file/d/1DvM_l4s8hg2mUnzXjTCIRBXKMsO3v8NN/view?usp=drivesdk",
    "name": "Jerusalem_tourists_tour guide_47797.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47798",
    "url": "https://drive.google.com/file/d/1bGGIux-CxprVHNOfK3bPbnzv9LXfR7pG/view?usp=drivesdk",
    "name": "Jerusalem_Dome of the Roc_tourists_47798.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47799",
    "url": "https://drive.google.com/file/d/1uCBkBwxXgg-Ino8ZRa5-2WSYdCoWY8gA/view?usp=drivesdk",
    "name": "Jerusalem_Dome of the Roc_stone arches_47799.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47800",
    "url": "https://drive.google.com/file/d/1ulw9fYJOPA5cl-E2Xp4NWG9aCPdnzGXY/view?usp=drivesdk",
    "name": "Jerusalem_Temple Mount pl_dome structures_47800.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47801",
    "url": "https://drive.google.com/file/d/1Bb06bn1KT0bw3Spnpyp9VBpPaY9eBTa1/view?usp=drivesdk",
    "name": "Jerusalem_courtyard_stone buildings_47801.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47803",
    "url": "https://drive.google.com/file/d/1nJBbDDIebvt7zIoP9HCY66WrdcLhb_Z-/view?usp=drivesdk",
    "name": "Jerusalem_menorah_glass enclosure_47803.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47809",
    "url": "https://drive.google.com/file/d/1cviuDlcrJ2x5hUYIgxIeH8u47LalO-mk/view?usp=drivesdk",
    "name": "Jerusalem_bar_tables_47809.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47816",
    "url": "https://drive.google.com/file/d/1It9ECE-kvDzj9jjwLluWFPVKA9oW3SUE/view?usp=drivesdk",
    "name": "Krakow_tourists_tour guide_47816.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47817",
    "url": "https://drive.google.com/file/d/1ffqfWvjWpduiouj6PezXUo0EtNt8cVmX/view?usp=drivesdk",
    "name": "Krakow_tour group_tour guide_47817.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47818",
    "url": "https://drive.google.com/file/d/1PPufPdE78-LQpcYYnonb-JsAsEyx0j5d/view?usp=drivesdk",
    "name": "Dublin_bronze statue_woman_47818.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47819",
    "url": "https://drive.google.com/file/d/1uEUHCATCR5skS05Xvta-FQgpsHmwxJy8/view?usp=drivesdk",
    "name": "Dublin_Hapenny Bridge_pedestrians_47819.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47859",
    "url": "https://drive.google.com/file/d/18owyDDq7PJoyCN21AmuvcfLnnyl56LM6/view?usp=drivesdk",
    "name": "Acre_gazebo_fountain_47859.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47860",
    "url": "https://drive.google.com/file/d/1bhbX3B6LlzwkagBJaxSfA6M5BjJquX1k/view?usp=drivesdk",
    "name": "Tel Aviv_Shalom Meir Tow_Azrieli Sarona _47860.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47864",
    "url": "https://drive.google.com/file/d/1HAqWvxdSEsNQamcqStm0krD6g48JWxFx/view?usp=drivesdk",
    "name": "fountain_sculptures_47864.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47879",
    "url": "https://drive.google.com/file/d/1N4HpBeQsJAeCS1jI9PXfLV9gmCQsI-F8/view?usp=drivesdk",
    "name": "Warsaw_tour guide_tour group_47879.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47880",
    "url": "https://drive.google.com/file/d/1XkatJ9a23ULWqdlYkpR5qgoT1M4tI_JT/view?usp=drivesdk",
    "name": "Warsaw_Warsaw Grand Th_cars_47880.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47888",
    "url": "https://drive.google.com/file/d/1GjwPIZJRtgN3fioiBoZPCC08nUQxJiVz/view?usp=drivesdk",
    "name": "Warsaw_Warsaw Mermaid _Buildings_47888.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47929",
    "url": "https://drive.google.com/file/d/1RtoKYmZVoMbJm5A_JMVfhoEvthOkXwR2/view?usp=drivesdk",
    "name": "Warsaw_Palace of Cultu_skyscrapers_47929.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47930",
    "url": "https://drive.google.com/file/d/1RRJ8x8puow6Kw9frImOYk5wlU0awBHOs/view?usp=drivesdk",
    "name": "Warsaw_building_KFC restaurant_47930.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47933",
    "url": "https://drive.google.com/file/d/1UcWIPImWJJED3eudu8dTIYr6dZrSPbNb/view?usp=drivesdk",
    "name": "Warsaw_artificial palm_city street_47933.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47935",
    "url": "https://drive.google.com/file/d/1nmphD_sKFg9CZLziWI72V2auiEm0RmMk/view?usp=drivesdk",
    "name": "Warsaw_Church of St Al_fountain_47935.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47936",
    "url": "https://drive.google.com/file/d/10SpviO2ZNb4DQdyUj643UMRTJYMknjAD/view?usp=drivesdk",
    "name": "Warsaw_building_cars_47936.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47939",
    "url": "https://drive.google.com/file/d/143-SCxIqAHLRTTA6LF_bTrn1bZ4K8K-6/view?usp=drivesdk",
    "name": "Warsaw_Solidarnosc scu_flags_47939.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47940",
    "url": "https://drive.google.com/file/d/1kAon8k3K5vmAeUVsQUibi03nutvLBrtk/view?usp=drivesdk",
    "name": "Warsaw_vintage bus_tour bus_47940.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "47950",
    "url": "https://drive.google.com/file/d/18lVo_DS3Hzgwo86Ioh-9_xSLdNW_1B8x/view?usp=drivesdk",
    "name": "Warsaw_tour guide_group of touris_47950.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48023",
    "url": "https://drive.google.com/file/d/10nyi7_LpMDSq82T0nS2Gup0UqR9YAxFG/view?usp=drivesdk",
    "name": "Warsaw_statue_sculpture_48023.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48025",
    "url": "https://drive.google.com/file/d/1npF8bRZH79vJp1g9ETzuAkI1p-EE7lvW/view?usp=drivesdk",
    "name": "Warsaw_tour group_guide_48025.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48028",
    "url": "https://drive.google.com/file/d/1-ip_Eo_eYvaTecZV1NlAIYx49vR0qIMd/view?usp=drivesdk",
    "name": "Warsaw_Barbican_Tourists_48028.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48035",
    "url": "https://drive.google.com/file/d/1EdepLTPt0RkRJ1FrSPfbfzktmelKMbss/view?usp=drivesdk",
    "name": "Warsaw_Monument to the_Palace of Justi_48035.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48041",
    "url": "https://drive.google.com/file/d/1ztYENdNBRb5yZiYOadhI8InYF-pgbr7x/view?usp=drivesdk",
    "name": "Warsaw_Royal Castle Cl_Historic Buildi_48041.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48049",
    "url": "https://drive.google.com/file/d/1VIyJx7Mh0BfmmPjlHHIQPKGVsRgjTu8x/view?usp=drivesdk",
    "name": "Warsaw_tour group_guide_48049.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48051",
    "url": "https://drive.google.com/file/d/1OhIUldpcgcrYSuZtd-uF9LAGP6lLuKK9/view?usp=drivesdk",
    "name": "Warsaw_tour group_tour guide_48051.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48055",
    "url": "https://drive.google.com/file/d/1pmdL3qSHjmLaDPQwRFVM9kVGVNoQ_HJo/view?usp=drivesdk",
    "name": "Warsaw_Copernicus Monu_historical buil_48055.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48074",
    "url": "https://drive.google.com/file/d/1KCK1rPjoOjdoZo5fCe4RILqGFAJe6qa2/view?usp=drivesdk",
    "name": "Warsaw_Church of the V_historical pain_48074.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48090",
    "url": "https://drive.google.com/file/d/1TXEx5JiXBA-1djqPP3onXd2MNX4Qn8XV/view?usp=drivesdk",
    "name": "Warsaw_street signs_building facade_48090.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48092",
    "url": "https://drive.google.com/file/d/1fSuqx-xaolqiHfbzPHr4RQZFH63ebEab/view?usp=drivesdk",
    "name": "Warsaw_Pavement_Metal Inlay_48092.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48096",
    "url": "https://drive.google.com/file/d/1Dj2qMEgUR4cwF_Hx_VedZF9uBGJc8dtH/view?usp=drivesdk",
    "name": "Warsaw_memorial_plaque_48096.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48101",
    "url": "https://drive.google.com/file/d/1qXCHD9xcSTcqBMIhQgcaF8tVX0Mk1k8D/view?usp=drivesdk",
    "name": "Warsaw_memorial_marble_48101.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48104",
    "url": "https://drive.google.com/file/d/1uVqNq51UB7Y1AjBD4WlZf0eEopXmxB1n/view?usp=drivesdk",
    "name": "Warsaw_staircase_mural_48104.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48105",
    "url": "https://drive.google.com/file/d/1vLPBlOIs7LzRqgFbZg_3cwSTowI4oqze/view?usp=drivesdk",
    "name": "Warsaw_cobblestone str_historical buil_48105.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48111",
    "url": "https://drive.google.com/file/d/1eiP1xaZxCcoAMeZRw03dYHRIt7TCl1EC/view?usp=drivesdk",
    "name": "Warsaw_Museum_Tree_48111.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48113",
    "url": "https://drive.google.com/file/d/1qS8O1Oo1_OsHGUShgRi3xZe_rqGewF5U/view?usp=drivesdk",
    "name": "Warsaw_Nożyk Synagogue_Yellow Umbrella_48113.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48116",
    "url": "https://drive.google.com/file/d/18X_fyxWouPKRP3YR86FvfsoqjBmCBvK6/view?usp=drivesdk",
    "name": "Warsaw_POLIN Museum of_yellow umbrella_48116.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48128",
    "url": "https://drive.google.com/file/d/1d3lTAuBbNVPih0QOszJ_Z5If4IzedmXf/view?usp=drivesdk",
    "name": "Warsaw_rubble_destroyed build_48128.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48152",
    "url": "https://drive.google.com/file/d/1FmLd8063OBfj0UUenIscEYQaLl-INU3e/view?usp=drivesdk",
    "name": "Warsaw_bronze monument_soldiers_48152.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48154",
    "url": "https://drive.google.com/file/d/1m9f4FSUgzFDxdqZMwwI6DMebVMc3fu8_/view?usp=drivesdk",
    "name": "Warsaw_sculpture_brick wall_48154.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48156",
    "url": "https://drive.google.com/file/d/1lXl6k_-nlDsMTUMnKWZm5DMPj0FrnHBu/view?usp=drivesdk",
    "name": "Warsaw_Monte Cassino M_Trees_48156.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48157",
    "url": "https://drive.google.com/file/d/1igBYLxm6TOhsjcObQETEJv2yPmdpp14q/view?usp=drivesdk",
    "name": "Warsaw_Monument to the_Engraved Stones_48157.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48158",
    "url": "https://drive.google.com/file/d/14Pl0bBSyTrtOGPIaRJJESqVKnFBkX9XR/view?usp=drivesdk",
    "name": "Warsaw_bronze plaque_wall_48158.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48164",
    "url": "https://drive.google.com/file/d/1jzv1PdxFV5-DW5EUkVatm1BvK9fDXoyn/view?usp=drivesdk",
    "name": "Warsaw_Tomb of the Unk_guards_48164.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48168",
    "url": "https://drive.google.com/file/d/1o_ERzIiEzB6I9bZy2B3KeTNPSXjgj7-d/view?usp=drivesdk",
    "name": "Warsaw_bronze statue_musicians_48168.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48169",
    "url": "https://drive.google.com/file/d/1sD-JNCSsKw0XVzH781SgQrPHoSpwgmN_/view?usp=drivesdk",
    "name": "Warsaw_buildings_balconies_48169.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48172",
    "url": "https://drive.google.com/file/d/1NvuJEmcrkD2j9AqjWljYBnq8261b0MmA/view?usp=drivesdk",
    "name": "Warsaw_Ogród Żabkowski_bar_48172.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48173",
    "url": "https://drive.google.com/file/d/1qEbGr54wslnxlyLFzBfAZ1ror-zPxzxA/view?usp=drivesdk",
    "name": "Warsaw_Sacred Heart Ca_Sky_48173.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48174",
    "url": "https://drive.google.com/file/d/144FEtdQl-Fi8lvihLfI_4ULZmDPGGwQG/view?usp=drivesdk",
    "name": "Warsaw_mural_brick building_48174.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48177",
    "url": "https://drive.google.com/file/d/1p4dmSGxb8Lw-RKsbvpI2g8rPCTYV8Bkk/view?usp=drivesdk",
    "name": "Warsaw_umbrella_street_48177.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48179",
    "url": "https://drive.google.com/file/d/1ytRC_yv1dblJa_7w3AlpKCrqC5Febsev/view?usp=drivesdk",
    "name": "Warsaw_brick buildings_street art_48179.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48183",
    "url": "https://drive.google.com/file/d/1rRN5CWhbmLlLd0hgjH3IndMwXBmLwTm7/view?usp=drivesdk",
    "name": "Bethlehem_women_red heart_48183.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48187",
    "url": "https://drive.google.com/file/d/1r59LoUcsxA4NpU1L5qpPqzrWfRPPih0S/view?usp=drivesdk",
    "name": "Jerusalem_tourists_guide_48187.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48194",
    "url": "https://drive.google.com/file/d/1ii8BAqdqSdKkpzd1MdhaeAhsr7plfQkW/view?usp=drivesdk",
    "name": "Nazareth_tour group_Basilica of the_48194.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48200",
    "url": "https://drive.google.com/file/d/1hpgbj4lxnPVV2YykVi9pRIXAnbOxgouo/view?usp=drivesdk",
    "name": "Bethlehem_logo_tourist icon_48200.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48202",
    "url": "https://drive.google.com/file/d/151cy1hslccVRjnPnflyzfZVhae4k0kI2/view?usp=drivesdk",
    "name": "Jerusalem_church interior_wooden ceiling_48202.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48217",
    "url": "https://drive.google.com/file/d/1r1fijTCx3cX6CDF9Krggh2_kKWWlduwy/view?usp=drivesdk",
    "name": "Germany_tour group_guide_48217.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48224",
    "url": "https://drive.google.com/file/d/17pqf0q8cqdpy4OTlCTq0Y2lUsA0ESEwg/view?usp=drivesdk",
    "name": "Berlin_tourists_Brandenburg Gat_48224.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48225",
    "url": "https://drive.google.com/file/d/1YK1CWkJdkvE5yjSFBKEx7NI2xakXrepB/view?usp=drivesdk",
    "name": "Berlin_Brandenburg Gat_square_48225.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48228",
    "url": "https://drive.google.com/file/d/1UAYw9hLSLCMhjKlt571Z8oJDPhZ23GP_/view?usp=drivesdk",
    "name": "Madrid_wine glasses_olives_48228.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48229",
    "url": "https://drive.google.com/file/d/182hLs-dWiEllI-pa6g2FyZVHWwZOY-X6/view?usp=drivesdk",
    "name": "Madrid_Spanish tortill_plates_48229.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48240",
    "url": "https://drive.google.com/file/d/1AkR0m5uc_Uf_NTosNv7M3GISy_zSeMrZ/view?usp=drivesdk",
    "name": "Madrid_chocolate-dippe_dark liquid_48240.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48260",
    "url": "https://drive.google.com/file/d/1-H9-PPr7r8gxjkMkZdDIkz1s7FpCpePy/view?usp=drivesdk",
    "name": "Madrid_equestrian stat_King Philip III_48260.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48264",
    "url": "https://drive.google.com/file/d/1-wOqIjJImTgZ-BujYi8RuI3pKfWFae50/view?usp=drivesdk",
    "name": "Madrid_Bear and Madroñ_Buildings_48264.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48312",
    "url": "https://drive.google.com/file/d/1rwlBkFLeq2XoZFKVmx1J36RyGUp2NRD2/view?usp=drivesdk",
    "name": "Hamburg_cobblestone str_bridge_48312.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48477",
    "url": "https://drive.google.com/file/d/1cKitcE_KIVoDzL0w3pNog-nC4Lra2h3x/view?usp=drivesdk",
    "name": "Berlin_Equestrian stat_Cobblestone pav_48477.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48478",
    "url": "https://drive.google.com/file/d/143fcCC6cD4t_bu8Do25rgBgxx6nGU5Wa/view?usp=drivesdk",
    "name": "Dresden_equestrian stat_pedestal_48478.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48479",
    "url": "https://drive.google.com/file/d/1920k8dXD3ekZPR5JCAL6SfnbOptMMQe1/view?usp=drivesdk",
    "name": "Cádiz_Cádiz Cathedral_buildings_48479.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4848",
    "url": "https://drive.google.com/file/d/1GLWns4B1ZUK9U0_SzrHSOShDndamXp96/view?usp=drivesdk",
    "name": "Krakow_Tour Guide_Tourist_4848.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48480",
    "url": "https://drive.google.com/file/d/1rhp_UQZjiCb4sLX5u8Hbc6MzLOXGT82f/view?usp=drivesdk",
    "name": "Lviv_tourists_tour guide_48480.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48514",
    "url": "https://drive.google.com/file/d/1b8ry-sE4xPQ53rrOAZNAqn884t9_YC7G/view?usp=drivesdk",
    "name": "Budapest_Chain Bridge_St Stephens Bas_48514.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48515",
    "url": "https://drive.google.com/file/d/1dHsRB18JShjFoQ41Ivgl7j3A5fhFyvaD/view?usp=drivesdk",
    "name": "Budapest_St Stephens Bas_cobblestone str_48515.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48554",
    "url": "https://drive.google.com/file/d/1J75MAKMWEmfG78h9xYbZ-QNc2UzGhbYn/view?usp=drivesdk",
    "name": "Nice_Fontaine du Sol_statue of Apoll_48554.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48561",
    "url": "https://drive.google.com/file/d/1PIiyYddKBE0B-Q9PNzGM4Iy4DofxJMdf/view?usp=drivesdk",
    "name": "Bydgoszcz_scale model of _yellow umbrella_48561.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48563",
    "url": "https://drive.google.com/file/d/1TE5yNUQU2M4GigmDpv0zjZBisjYXTdme/view?usp=drivesdk",
    "name": "Poland_cobblestone str_historic buildi_48563.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48565",
    "url": "https://drive.google.com/file/d/1NzD-W1O4zyBrJF0KhzWHY0XS5r2YySPQ/view?usp=drivesdk",
    "name": "Ostróda_buildings_river_48565.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48571",
    "url": "https://drive.google.com/file/d/169oImNbToNZuxgAfF_9qUwrCStdVv1oZ/view?usp=drivesdk",
    "name": "Bydgoszcz_person_clock_48571.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48572",
    "url": "https://drive.google.com/file/d/1csRSjKyiGth-OUqLdKkzM-hmWZxIJ4AY/view?usp=drivesdk",
    "name": "Legnica_town square_historical buil_48572.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48573",
    "url": "https://drive.google.com/file/d/1UzL3vMJXMNQUBjT0uJ8GNBJDrzdRoQlG/view?usp=drivesdk",
    "name": "Poland_river_buildings_48573.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48578",
    "url": "https://drive.google.com/file/d/1Kejr-gb6Tds9oZqRWBbPgYntjPdmYjcV/view?usp=drivesdk",
    "name": "Bydgoszcz_Filharmonia Pom_building_48578.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48583",
    "url": "https://drive.google.com/file/d/1xCei4F8PGnqu_k6eRML7u0KBOWHf-5vk/view?usp=drivesdk",
    "name": "Germany_sculpture_window_48583.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48587",
    "url": "https://drive.google.com/file/d/17ABVukC3sG-wNlxuo8-NMfD0BcGzGFsp/view?usp=drivesdk",
    "name": "Toruń_Old Town Toruń_Vistula River_48587.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48594",
    "url": "https://drive.google.com/file/d/1YoOdgfw9XkaMuVMxdOeRlnCnYjOlnqDd/view?usp=drivesdk",
    "name": "Toruń_Town Hall Tower_Nicolaus Copern_48594.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48604",
    "url": "https://drive.google.com/file/d/1bng8rScdR1_fc9YLweuyJ_Z4ifLhRog7/view?usp=drivesdk",
    "name": "Bremen_statue_musician_48604.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48607",
    "url": "https://drive.google.com/file/d/1npaFxxgADOlDn0zjizD8TKAZU6NkFaIh/view?usp=drivesdk",
    "name": "Gdansk_wooden door_brick building_48607.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48615",
    "url": "https://drive.google.com/file/d/1r5fxFSCs1fpC7OULHrIhFqQYIdXKbbPE/view?usp=drivesdk",
    "name": "Germany_statue_brick wall_48615.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48616",
    "url": "https://drive.google.com/file/d/1isf4z1IcAWav7Rc8q4x23V75FFmvJISN/view?usp=drivesdk",
    "name": "Germany_building_cafe_48616.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48618",
    "url": "https://drive.google.com/file/d/1zFLCdTyRKGvnzQBzaCUqGWW4YlzlyYiy/view?usp=drivesdk",
    "name": "Toruń_Old Town Hall_Nicolaus Copern_48618.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48650",
    "url": "https://drive.google.com/file/d/1OGqwPaiurTJ_Fsh1ionOVSmewJYBX6Dt/view?usp=drivesdk",
    "name": "Toruń_Old Town buildi_Church_48650.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48659",
    "url": "https://drive.google.com/file/d/1SNpsqKM8JSOZAUaZ_RixuuGsu2EsRYO7/view?usp=drivesdk",
    "name": "Malbork_Malbork Castle_brick walls_48659.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48662",
    "url": "https://drive.google.com/file/d/1GAABggdtNk92_OmicdAYmSfdcr3xdoSW/view?usp=drivesdk",
    "name": "Toruń_buildings_church_48662.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48665",
    "url": "https://drive.google.com/file/d/1MnfrWUBRN2NSSv961b2yMKflM1K6Y72l/view?usp=drivesdk",
    "name": "Germany_statue_copernicus_48665.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48669",
    "url": "https://drive.google.com/file/d/16jn4YFyOy_VF36-u_lfrMQsg1bKIXW5f/view?usp=drivesdk",
    "name": "Germany_hotel_gate_48669.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48670",
    "url": "https://drive.google.com/file/d/12_iBiPKouQDWEcQQWyGZB_bw3WLMnA01/view?usp=drivesdk",
    "name": "Toruń_bridge_St Johns Cathed_48670.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48676",
    "url": "https://drive.google.com/file/d/1K6ylBIoIf4Ze5yQg6ZiMGj4nnVP5vInv/view?usp=drivesdk",
    "name": "Toruń_Nicolaus Copern_brick building_48676.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48677",
    "url": "https://drive.google.com/file/d/127WmIpBYR2B0SLxDTcziCu9OcpO1rjmR/view?usp=drivesdk",
    "name": "Malbork_Malbork Castle_cobblestone str_48677.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48692",
    "url": "https://drive.google.com/file/d/1_Uka1j2s3ZiXHvJmnuwzZEIa7TP3WfFa/view?usp=drivesdk",
    "name": "Gdansk_statue_fountain_48692.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48696",
    "url": "https://drive.google.com/file/d/1s93GKLUwPgrFYMs2TqsCsJ6Ryj5ONMJn/view?usp=drivesdk",
    "name": "Germany_cobblestone str_historic buildi_48696.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48698",
    "url": "https://drive.google.com/file/d/1xLqYg9db22d65VOTNFVgTKqnAP83RPuT/view?usp=drivesdk",
    "name": "Toruń_Old Town Hall_Tourists_48698.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48717",
    "url": "https://drive.google.com/file/d/1xHmC1kpUkBUw47POcvA6CxwaSpyL3jRK/view?usp=drivesdk",
    "name": "London_umbrella_Palace of Westm_48717.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48723",
    "url": "https://drive.google.com/file/d/1vJPWDjiBht3A_z6XMznryaWzGkTGNACJ/view?usp=drivesdk",
    "name": "London_Buckingham Pala_Victoria Memori_48723.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48724",
    "url": "https://drive.google.com/file/d/1duMh_yXfpSGAljUPPlTv7sT-rfaK_eI1/view?usp=drivesdk",
    "name": "London_Jubilee Market _market stalls_48724.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48725",
    "url": "https://drive.google.com/file/d/1tVI4HK6kzBvwXb2_xEzJjFnGf4SmMClS/view?usp=drivesdk",
    "name": "London_Mr Foggs Tavern_floral decorati_48725.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48729",
    "url": "https://drive.google.com/file/d/18y8lurfbCVJWcXAojTGA84kogXXuQz8H/view?usp=drivesdk",
    "name": "London_Bank of England_Wellington stat_48729.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48778",
    "url": "https://drive.google.com/file/d/163SaTjBraVTRX9QmZXKYw4fhIFwMJLOS/view?usp=drivesdk",
    "name": "Germany_building_street_48778.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48784",
    "url": "https://drive.google.com/file/d/1i_eNpZ-QmOVkvagrwt8Pb1IIfUI-bhOw/view?usp=drivesdk",
    "name": "Poznan_Bridge_Cathedral_48784.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48788",
    "url": "https://drive.google.com/file/d/1MUGNnNi7L-bTFYs3428pHHNot2O3P-2J/view?usp=drivesdk",
    "name": "Wrocław_bronze model of_University of W_48788.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48789",
    "url": "https://drive.google.com/file/d/1vIi11X6K4t87vKgYI3iusS12hznTK1cx/view?usp=drivesdk",
    "name": "Germany_fountain_city buildings_48789.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48794",
    "url": "https://drive.google.com/file/d/1r284-jmfZ2iEzSpQ9VGnSp9zQvG9e47F/view?usp=drivesdk",
    "name": "Wrocław_fountain_statue_48794.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48796",
    "url": "https://drive.google.com/file/d/1xDfwZy86TpVtqEeMAA22nPCDRW5xsJAR/view?usp=drivesdk",
    "name": "Germany_tulips_garden_48796.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48802",
    "url": "https://drive.google.com/file/d/1hiSESXm3TLJ_kyh5M2CpR5XHmCls6sW0/view?usp=drivesdk",
    "name": "Frombork_Frombork Cathed_historical buil_48802.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48839",
    "url": "https://drive.google.com/file/d/1R8RVw-53KvCXwLNQxqH8u5OKHBgPsUl-/view?usp=drivesdk",
    "name": "Krakow_cobblestone str_historic buildi_48839.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48857",
    "url": "https://drive.google.com/file/d/1KgIw6EO9cjIgWhF3yFYbIGURUV6xMEeq/view?usp=drivesdk",
    "name": "Riga_buildings_rooftops_48857.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48860",
    "url": "https://drive.google.com/file/d/1K3BaVJcKy8ZiTs-rvE6GoO5_KUNErb9-/view?usp=drivesdk",
    "name": "Prague_Charles Bridge_Vltava River_48860.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48864",
    "url": "https://drive.google.com/file/d/1wMfch5mItygYFl8VxYn4RLLpHjAYdBip/view?usp=drivesdk",
    "name": "Prague_Charles Bridge_Prague Castle_48864.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48865",
    "url": "https://drive.google.com/file/d/13IWpImJDxUqtqkHbbk-xW-KCG1gUD6yE/view?usp=drivesdk",
    "name": "Prague_church_building_48865.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48869",
    "url": "https://drive.google.com/file/d/1yeMJb6WaMXz6C1PHUPdpv4apkBZvNC3W/view?usp=drivesdk",
    "name": "Prague_Charles Bridge_Prague Castle_48869.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48870",
    "url": "https://drive.google.com/file/d/1em_PauAFVmf68cLhXB364LdOMKZoh70e/view?usp=drivesdk",
    "name": "Prague_Charles Bridge_statues_48870.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48874",
    "url": "https://drive.google.com/file/d/13_CLcAqwkmtnxKYBrCA3bYPSrD4IPsnk/view?usp=drivesdk",
    "name": "Prague_Lennon Wall_tourist_48874.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48875",
    "url": "https://drive.google.com/file/d/14bRfjv312egOmWAailjfmsjDIEulJ4b_/view?usp=drivesdk",
    "name": "Prague_Lesser Town Bri_Charles Bridge_48875.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48879",
    "url": "https://drive.google.com/file/d/15-Zgm64QD7_Fc8OGp8_eBYX8ZXvCk2bN/view?usp=drivesdk",
    "name": "Berlin_tour guide_photo album_48879.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48886",
    "url": "https://drive.google.com/file/d/13R575PG-4kUoKwFxZggSPxO4yGBsoypF/view?usp=drivesdk",
    "name": "Berlin_concrete stelae_Memorial to the_48886.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48889",
    "url": "https://drive.google.com/file/d/16urAQZwRAsUPrNLo1KKwCN1G08U0bE5B/view?usp=drivesdk",
    "name": "Berlin_tour group_guide_48889.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48897",
    "url": "https://drive.google.com/file/d/1oQUIXbV-rw1bhvrpugW5vnIcGzQQP8a1/view?usp=drivesdk",
    "name": "Berlin_tour guide_photograph_48897.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48907",
    "url": "https://drive.google.com/file/d/1sMnp_xSWzL69aon7vM0_ZdjQZpfddLNT/view?usp=drivesdk",
    "name": "Berlin_artwork_wall_48907.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48908",
    "url": "https://drive.google.com/file/d/1nknOYdYosIaZMp8AYBw0C6VGRCZuIXog/view?usp=drivesdk",
    "name": "Berlin_tourists_street art_48908.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48916",
    "url": "https://drive.google.com/file/d/12L4cwmpFiLme3Qgvo_D3v-Fh2MaFMois/view?usp=drivesdk",
    "name": "Berlin_mural_graffiti art_48916.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48923",
    "url": "https://drive.google.com/file/d/1kua8ALTQTMSfKTjo4Dbvfa4ko9xqBXgo/view?usp=drivesdk",
    "name": "Berlin_Fernsehturm TV _road_48923.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48928",
    "url": "https://drive.google.com/file/d/1q8bmRUmKh0AtERlIEpY9IjUA5F0-5N0x/view?usp=drivesdk",
    "name": "Berlin_sculpture_cosmonauts_48928.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48937",
    "url": "https://drive.google.com/file/d/1l8hbX0dCurDlUNgOxdGNlS0fdLpPYcD-/view?usp=drivesdk",
    "name": "Berlin_apartment build_street_48937.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48938",
    "url": "https://drive.google.com/file/d/10FaPUdI84Z14N-QfnJDF8LVlnisTDqav/view?usp=drivesdk",
    "name": "Berlin_tourists_tour guide_48938.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48940",
    "url": "https://drive.google.com/file/d/1u8AuGPMheXNV8qDd96SyHGCSe_XVcfsQ/view?usp=drivesdk",
    "name": "Berlin_tourists_guide_48940.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48941",
    "url": "https://drive.google.com/file/d/1ELntv8nh10ohq37otCKMIAyBFRzRkN-m/view?usp=drivesdk",
    "name": "Berlin_tourists_trees_48941.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48953",
    "url": "https://drive.google.com/file/d/1IqMS3ni3T5XTj_kaMC6hC5ecoyRlXddE/view?usp=drivesdk",
    "name": "Berlin_tour guide_historical phot_48953.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48964",
    "url": "https://drive.google.com/file/d/1NtEYX7YAQgRisYqGwvC8Igdv00ULYNuY/view?usp=drivesdk",
    "name": "Berlin_Reichstag Build_German flags_48964.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48965",
    "url": "https://drive.google.com/file/d/1VkJlDsR-IrgOmPHasaU7lbMA56nQhSXF/view?usp=drivesdk",
    "name": "Berlin_New Synagogue_pedestrians_48965.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48968",
    "url": "https://drive.google.com/file/d/1YH7BnwNB6gqWFpgORIJdDwqviiD9idci/view?usp=drivesdk",
    "name": "Berlin_statue_building_48968.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48971",
    "url": "https://drive.google.com/file/d/1njLxnX3EKs2GIRCauYXhBRicsD-8xjiB/view?usp=drivesdk",
    "name": "Berlin_Berlin Wall rem_sandbags_48971.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48977",
    "url": "https://drive.google.com/file/d/1dU1qdoVFKoN7uHjSGREiHqr3HafUk3uJ/view?usp=drivesdk",
    "name": "Berlin_Konzerthaus Ber_Deutscher Dom_48977.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48978",
    "url": "https://drive.google.com/file/d/1euaNfjweiBKaarnFx6qh2TmbV8CQ1yU-/view?usp=drivesdk",
    "name": "Berlin_man_fountain_48978.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48981",
    "url": "https://drive.google.com/file/d/1DnUDLffgNsEyznYHJg6I2QF5jt3va5Yi/view?usp=drivesdk",
    "name": "Berlin_wooden bunk bed_barrack interio_48981.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "48983",
    "url": "https://drive.google.com/file/d/1FP-GtVUINDu8A8YzjXVm2sYwHZFhixrF/view?usp=drivesdk",
    "name": "Berlin_memorial monume_visitors_48983.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49041",
    "url": "https://drive.google.com/file/d/1vik4mQvKYJ0l6l_JxMP3TNt-AchddUmT/view?usp=drivesdk",
    "name": "Rome_columns_temple_49041.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49067",
    "url": "https://drive.google.com/file/d/1Ds7j_ciEq0j6eQi-KjodjMyXeRwxrH7X/view?usp=drivesdk",
    "name": "Rome_St Peters Basil_St Peters Squar_49067.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49111",
    "url": "https://drive.google.com/file/d/1HMwhK5tTrKCb8ilib8EbMvxu91f5ySdh/view?usp=drivesdk",
    "name": "Rome_archway_stone wall_49111.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49137",
    "url": "https://drive.google.com/file/d/1bI4yKhjje5HMDn_jUp8xpJrVkqkBXwSg/view?usp=drivesdk",
    "name": "Rome_Pyramid of Cest_tourists_49137.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49176",
    "url": "https://drive.google.com/file/d/1SOzhLToky7XLCrVCcE3RLz3S5pef_KBU/view?usp=drivesdk",
    "name": "Rome_elderly man_cherries_49176.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49194",
    "url": "https://drive.google.com/file/d/1EigGNepHHQ3yBo7a6szci_38s4OQE1e1/view?usp=drivesdk",
    "name": "Maribor_Clock Tower_Cityscape_49194.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49195",
    "url": "https://drive.google.com/file/d/1SzGgMjW9zwqZrB4soY6G4GnNB9e-KXHn/view?usp=drivesdk",
    "name": "Zagreb_Croatian Art Pa_gardens_49195.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49203",
    "url": "https://drive.google.com/file/d/19sXsfjT7yhMLjcZYytdl5K0nBXqEiMft/view?usp=drivesdk",
    "name": "Regensburg_Our Ladys Cathe_pedestrian stre_49203.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49205",
    "url": "https://drive.google.com/file/d/12wkn3bNu2ZfJVNc0GnND8lm2M_t_8Agl/view?usp=drivesdk",
    "name": "Munich_New Town Hall_German flag_49205.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49209",
    "url": "https://drive.google.com/file/d/1TrgW0M2np5lGP8tQ_6HxeuzVqKgbIXAa/view?usp=drivesdk",
    "name": "Bucharest_Palace of the C_person_49209.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49211",
    "url": "https://drive.google.com/file/d/1jr5x6VeyoH0Lh6rwKwtdnBiPrBrsZXDH/view?usp=drivesdk",
    "name": "Bucharest_tourists_building_49211.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49213",
    "url": "https://drive.google.com/file/d/1QSQlJ3SI1cF8MeUQgiAhiERcFAEtSAEC/view?usp=drivesdk",
    "name": "Bucharest_monastery court_stone sculpture_49213.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49215",
    "url": "https://drive.google.com/file/d/1dpZzFWgxr4Ct6TROrByw2TDqKNLiWIIh/view?usp=drivesdk",
    "name": "Bucharest_Cercul Militar _Fântâna Sărinda_49215.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49218",
    "url": "https://drive.google.com/file/d/1I8sww0lLg7pkLclY2ucRJhAl6TdfJh2o/view?usp=drivesdk",
    "name": "Wroclaw_tour guide_tourists_49218.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49220",
    "url": "https://drive.google.com/file/d/1FZamozPETQ18xdlTBKk1BYcEv3jIWG2q/view?usp=drivesdk",
    "name": "Wrocław_tourists_cobblestone str_49220.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49221",
    "url": "https://drive.google.com/file/d/18VwwPf-CGIZBj6__ZZtI5vwypCRqdRjL/view?usp=drivesdk",
    "name": "Wroclaw_building_sky_49221.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49228",
    "url": "https://drive.google.com/file/d/1fMUCt4uZN-HzLJsdYonAE2AE7VeOnxlW/view?usp=drivesdk",
    "name": "Wrocław_Wrocław Dwarves_bronze sculptur_49228.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49232",
    "url": "https://drive.google.com/file/d/1o9CJXHis5-3GhRPbn067guW9hM2XK8kh/view?usp=drivesdk",
    "name": "Wroclaw_tour guide_yellow umbrella_49232.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49236",
    "url": "https://drive.google.com/file/d/1XLUdST5eHwDo5cdX-8_2-7mF7N_zo2kt/view?usp=drivesdk",
    "name": "Wrocław_University of W_Odra River_49236.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49238",
    "url": "https://drive.google.com/file/d/1CeyIjYEUsu7pwYKvqIFZz0QK5yywthPK/view?usp=drivesdk",
    "name": "Wrocław_street art_buildings_49238.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49239",
    "url": "https://drive.google.com/file/d/1x3LDQN87sdzT4VjbklJaOe2Ah8RHtZbW/view?usp=drivesdk",
    "name": "Wrocław_Old Town Hall_tour group_49239.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49240",
    "url": "https://drive.google.com/file/d/1eJ5kUBNZDoykpmyhsaR5euNPJtXcJQUe/view?usp=drivesdk",
    "name": "Wrocław_tour guide_tourists_49240.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49242",
    "url": "https://drive.google.com/file/d/1z12b2cGTX865VA7376TzNVICAYlwLBxs/view?usp=drivesdk",
    "name": "Wrocław_historic buildi_cobblestone all_49242.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49251",
    "url": "https://drive.google.com/file/d/1RoEmyDW_Pxs8h19nt9NW46egdR82JPa2/view?usp=drivesdk",
    "name": "Wrocław_tourist guide_information boa_49251.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49260",
    "url": "https://drive.google.com/file/d/10UBFv178YqckU3xJvEvAA8IsTq6H4UCg/view?usp=drivesdk",
    "name": "Wrocław_circular window_stained glass S_49260.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49263",
    "url": "https://drive.google.com/file/d/1IK4547x4tfebilVM0MZCRUt26PnLfCBk/view?usp=drivesdk",
    "name": "Wrocław_pathway_trees_49263.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49264",
    "url": "https://drive.google.com/file/d/1lvBH6j1MzRZq5J5ona-ARZcUGpAQGTNj/view?usp=drivesdk",
    "name": "Wroclaw_mausoleum_columns_49264.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49268",
    "url": "https://drive.google.com/file/d/1BwRbcGJE2E_ZEYt-3jwgO3_AEa8r7nuL/view?usp=drivesdk",
    "name": "Wrocław_guided tour gro_cobblestone str_49268.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4927",
    "url": "https://drive.google.com/file/d/1wy1cnWv_5HvuZausfsSgbnOSNlpI47dz/view?usp=drivesdk",
    "name": "Gdańsk_tourists_guide_4927.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49273",
    "url": "https://drive.google.com/file/d/1lfcYcpbF2EJAGzvd6ZN_8DZp3U_wVgHC/view?usp=drivesdk",
    "name": "Wrocław_courtyard_buildings_49273.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49277",
    "url": "https://drive.google.com/file/d/1r3cOYrx14LokYhRS4y3M-INnT_Gj1xU1/view?usp=drivesdk",
    "name": "Wrocław_street art_graffiti_49277.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49278",
    "url": "https://drive.google.com/file/d/1HYlRG7--LKX9wSvcMkzrP8Q_9d5fX7mE/view?usp=drivesdk",
    "name": "Wroclaw_statue_benches_49278.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49281",
    "url": "https://drive.google.com/file/d/1nkrrgNjECaMZ-ax4IiojTiq6ik_cBJli/view?usp=drivesdk",
    "name": "Wroclaw_Church of St El_buildings_49281.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49284",
    "url": "https://drive.google.com/file/d/1yTCces1ePhX1N7saRPV8A_6JhUE9u49N/view?usp=drivesdk",
    "name": "Wrocław_tour guide_tour group_49284.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49285",
    "url": "https://drive.google.com/file/d/12EtAuPDjklphbK1kUhXE1izNT7Tf15N7/view?usp=drivesdk",
    "name": "Wroclaw_miniature city _metal buildings_49285.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49291",
    "url": "https://drive.google.com/file/d/1dTmY08XvI9vEEuIDXWHqpVLIRJMJy8uN/view?usp=drivesdk",
    "name": "Wrocław_courtyard_restaurant_49291.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49292",
    "url": "https://drive.google.com/file/d/1oh4nvF_A83_VTS3ayDj2ZJvNByQXZqyI/view?usp=drivesdk",
    "name": "Wrocław_Old Town Hall_tourists_49292.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49294",
    "url": "https://drive.google.com/file/d/1tUtRROlAWmDXaNv9c8KHRQDN5eb3ymiE/view?usp=drivesdk",
    "name": "Wrocław_building_leaves_49294.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49296",
    "url": "https://drive.google.com/file/d/1jqs0JzyO1IXhZU05B838nYsX_ypz2rkC/view?usp=drivesdk",
    "name": "Wrocław_guided tour gro_tour guide_49296.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49297",
    "url": "https://drive.google.com/file/d/1m84IgB70N-aZRf7PVaIxyv9DcGz8zLYo/view?usp=drivesdk",
    "name": "Wrocław_Wrocław Cathedr_cobblestone squ_49297.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49298",
    "url": "https://drive.google.com/file/d/1TiVbuEJwLdgDREqk8YP6A63LERp-kmlQ/view?usp=drivesdk",
    "name": "Wrocław_stone pillar_Old Town Hall_49298.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49304",
    "url": "https://drive.google.com/file/d/1BM471OQ7isUgW5NiX740fxwTtfmgTa65/view?usp=drivesdk",
    "name": "Wroclaw_bronze pig scul_bronze rabbit s_49304.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49305",
    "url": "https://drive.google.com/file/d/1MdWMgSLvAVrwJq7Hztl6pM_60D5xyHlx/view?usp=drivesdk",
    "name": "Wrocław_Market Hall_Hala Targowa_49305.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49306",
    "url": "https://drive.google.com/file/d/13BGQMITtQAMzPM9q1ekC44J9fq9VTx2K/view?usp=drivesdk",
    "name": "Wroclaw_yellow umbrella_cobblestone str_49306.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49313",
    "url": "https://drive.google.com/file/d/13AdXyUUz077bUIsfjAiQclARoCEPCvLl/view?usp=drivesdk",
    "name": "Wrocław_tour group_historical buil_49313.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49316",
    "url": "https://drive.google.com/file/d/1YekvmN2q_PsPmOJxw16UhfSZdO29mgBz/view?usp=drivesdk",
    "name": "Wrocław_Old Town Hall_tourists_49316.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49317",
    "url": "https://drive.google.com/file/d/17JjMXKHlJe3SHQMCROWFzgkB0mloPcLD/view?usp=drivesdk",
    "name": "Wrocław_tourist guide_information boa_49317.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49318",
    "url": "https://drive.google.com/file/d/1aRjEII25DBQ-0Bz-Can1AE1FQufqGq6U/view?usp=drivesdk",
    "name": "Wroclaw_tour guide_tour group_49318.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4932",
    "url": "https://drive.google.com/file/d/1EcGc_NViDNLqMHfvZGPYuw__KZErAsJb/view?usp=drivesdk",
    "name": "Gdańsk_women_sign_4932.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49323",
    "url": "https://drive.google.com/file/d/1M-lvkjyCsb34UqPj2f8A6mVquiWRHP37/view?usp=drivesdk",
    "name": "Wroclaw_Wrocław Cathedr_Church of St Ba_49323.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49349",
    "url": "https://drive.google.com/file/d/1T0H0eMA4LdoSYboWbGyF16Q88IJ-UsQG/view?usp=drivesdk",
    "name": "Wroclaw_buildings_bridge_49349.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49357",
    "url": "https://drive.google.com/file/d/10tNIhmPqhNdhbaXme4RBiQZShoLgQ2c_/view?usp=drivesdk",
    "name": "Wrocław_Collegiate Chur_city street_49357.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49358",
    "url": "https://drive.google.com/file/d/1wU5HsQ8chSQXeyFBcCrSzRbz4woJShxC/view?usp=drivesdk",
    "name": "Wrocław_gnomes_bronze sculptur_49358.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49360",
    "url": "https://drive.google.com/file/d/1CYgYSyIYrnlFN4ko_GuSYLj2NmZ_yqLM/view?usp=drivesdk",
    "name": "Wrocław_bronze dwarves_firefighter_49360.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49362",
    "url": "https://drive.google.com/file/d/1tx4qxLYAck4DK_-dwW48QfpykRqWy10s/view?usp=drivesdk",
    "name": "Wroclaw_dwarf statue_scooter_49362.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49365",
    "url": "https://drive.google.com/file/d/1KOGj-Vbm2O9pNxVuP6wJK4KoSjsFMZOx/view?usp=drivesdk",
    "name": "Spain_street_buildings_49365.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49366",
    "url": "https://drive.google.com/file/d/1FVmYTzPDRWaklhQI5vmQjA4jPB4BALMn/view?usp=drivesdk",
    "name": "Seville_tour guide_tourists_49366.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49367",
    "url": "https://drive.google.com/file/d/1NsTGthnQr160j36_XjVxbNDfADdApN4C/view?usp=drivesdk",
    "name": "Valencia_fountain_building_49367.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49368",
    "url": "https://drive.google.com/file/d/1irftOuZhjVVHbOYHS_vV9-UnQMx73LF4/view?usp=drivesdk",
    "name": "Granada_houses_trees_49368.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4937",
    "url": "https://drive.google.com/file/d/1k0TnKO67rcg_E7vZGCk6_YVdkM7Rr2oD/view?usp=drivesdk",
    "name": "Gdansk_tourists_building_4937.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49370",
    "url": "https://drive.google.com/file/d/1NcX1cEtkx8ey07fr4IeTN9q2qinW_BRO/view?usp=drivesdk",
    "name": "Seville_Giralda_Seville Cathedr_49370.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49371",
    "url": "https://drive.google.com/file/d/1U13Co-OheSZqEY-UgOpWKdIUzf0xzZ08/view?usp=drivesdk",
    "name": "Spain_whitewashed hou_cobblestone str_49371.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49372",
    "url": "https://drive.google.com/file/d/1jux_R-5YiySe5loiJW_XR6HvM8jdVjVj/view?usp=drivesdk",
    "name": "Spain_houses_hills_49372.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49373",
    "url": "https://drive.google.com/file/d/1Zhz2Orw_Z1V6mWIut92h2vmu2z0W8zD4/view?usp=drivesdk",
    "name": "Granada_Royal Chapel of_adjacent buildi_49373.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "49374",
    "url": "https://drive.google.com/file/d/1TIAWFYqlIja4fnADGvKaL9caJoQ1T-yG/view?usp=drivesdk",
    "name": "Spain_market stalls_textiles_49374.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4942",
    "url": "https://drive.google.com/file/d/1Qpc1JqSMY716x_AcznRlYGScSU4Ki--y/view?usp=drivesdk",
    "name": "Gdańsk_tourists_sign_4942.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4947",
    "url": "https://drive.google.com/file/d/1qV4p1Ontqp2_3L2sz_KtaZAbiR3_HiAH/view?usp=drivesdk",
    "name": "Gdansk_tourists_pub crawl sign_4947.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4953",
    "url": "https://drive.google.com/file/d/1T0l9-KGvx-7XO9_L-0uGneQ_0Q7nXobC/view?usp=drivesdk",
    "name": "Wroclaw_people_bar_4953.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4958",
    "url": "https://drive.google.com/file/d/1gTeKwXOzN3a59zBxk2yAE4nexTQtFOwL/view?usp=drivesdk",
    "name": "Wrocław_tourists_pub crawl sign_4958.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4963",
    "url": "https://drive.google.com/file/d/1PPW4OaXKokBrnW7Eg707vpyK6s4W4t7u/view?usp=drivesdk",
    "name": "Wrocław_tourists_table_4963.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4969",
    "url": "https://drive.google.com/file/d/1oAeK39E7Mfo1UaIW3OSSHhoSeVGEcPzL/view?usp=drivesdk",
    "name": "Poznan_tourists_pub_4969.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4974",
    "url": "https://drive.google.com/file/d/1GJsBTyZO7Ox7GRdbGr4X5ElF1ZizUJOu/view?usp=drivesdk",
    "name": "Poznan_tourists_guide_4974.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4979",
    "url": "https://drive.google.com/file/d/14TttwVbaw91T103Y59oq1fAc1TOH3ffU/view?usp=drivesdk",
    "name": "Poznan_tourists_tour guide_4979.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4984",
    "url": "https://drive.google.com/file/d/15mkdge7YY5vjzqIIK7vTWGRDMDIw1kM1/view?usp=drivesdk",
    "name": "Poznan_people_sign_4984.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "4995",
    "url": "https://drive.google.com/file/d/1ewX1ovi5Ok7StWdbhGNpxi0Vj5BrCHwk/view?usp=drivesdk",
    "name": "Krakow_people_group_4995.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "50002",
    "url": "https://drive.google.com/file/d/1vWCqp_XoZ4SU1xNUHmgTi8WC6XUS2jOo/view?usp=drivesdk",
    "name": "city_tour_architecture_marseille_city_tour_architecture_marseille.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "50003",
    "url": "https://drive.google.com/file/d/1oZgHGwFjQrWTmOe1rVIrtfWAu47Qfxzd/view?usp=drivesdk",
    "name": "mucem_architecture_museum_marseille_mucem_architecture_museum_marseille.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "50004",
    "url": "https://drive.google.com/file/d/19uE3HgGhE0BeFSkxYPQ8V7KstKMTPKjr/view?usp=drivesdk",
    "name": "street_architecture_marseille_street_architecture_marseille.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "50008",
    "url": "https://drive.google.com/file/d/1WfnSt0xgy0J6Wg6cO6qsV-VP8lI9B_GV/view?usp=drivesdk",
    "name": "street_scene_alleyway_marseille_street_scene_alleyway_marseille.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "50009",
    "url": "https://drive.google.com/file/d/1Osjk5bnuemCid6KVMnUCwJ19Ub1UysSI/view?usp=drivesdk",
    "name": "fort_saint_jean_harbor_marseille_fort_saint_jean_harbor_marseille.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "5005",
    "url": "https://drive.google.com/file/d/1PITcXXh8EK_4boE6QhLFBhNla6WD628s/view?usp=drivesdk",
    "name": "Warsaw_tourists_signs_5005.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "5010",
    "url": "https://drive.google.com/file/d/1DoERs-i6ysK3KQEUpzI7sPD_0Pf1eYai/view?usp=drivesdk",
    "name": "Warsaw_people_shot glasses_5010.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "6281",
    "url": "https://drive.google.com/file/d/1fUN0fIJJME6LY2_dmFM9Tc-8B7eEahuB/view?usp=drivesdk",
    "name": "Krakow_tour group_cobblestone str_6281.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "6286",
    "url": "https://drive.google.com/file/d/178nXYC6Bm8uS82fMmRmaxM0rvQCyE9pD/view?usp=drivesdk",
    "name": "bd7c7b2a-63bc-48a5-ad17-6a04c69fa94b_6286.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "6291",
    "url": "https://drive.google.com/file/d/1fSmAzOF3sn2vkOKtJPMjPGcltWDEsew7/view?usp=drivesdk",
    "name": "b1985e31-6c3f-474e-8ede-f2dbadee5975_6291.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "6516",
    "url": "https://drive.google.com/file/d/1k2CgRPFW339NAvPQwvYHPQ_QhAydLeZe/view?usp=drivesdk",
    "name": "a0615f43-01b0-415e-aa2c-b29f0cf95d11-768x516_6516.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "6550",
    "url": "https://drive.google.com/file/d/17-xeLu-89JfiZM_mMZp-mUyCsZUhUzD6/view?usp=drivesdk",
    "name": "Wrocław_dwarf statue_printing press_6550.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "6553",
    "url": "https://drive.google.com/file/d/1n_zgZv1EXe0d-HCrrCkj2aFtI9RTbSOs/view?usp=drivesdk",
    "name": "Wrocław_gnome statue_cobblestone str_6553.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "6556",
    "url": "https://drive.google.com/file/d/1tyDTVhofZ00CvOYEW9KhReVjC0S9A8Tg/view?usp=drivesdk",
    "name": "Wrocław_gnome statue_building_6556.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "6745",
    "url": "https://drive.google.com/file/d/1m9Ru_f3lT1W2_G9_9dqReWPaUIQMTsdc/view?usp=drivesdk",
    "name": "Wroclaw_tour guides_yellow umbrella_6745.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "6890",
    "url": "https://drive.google.com/file/d/1m6e32LC6SJutD0ngNRSo5h92qtNbJSsB/view?usp=drivesdk",
    "name": "Krakow_Barbican_bridge_6890.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "7962",
    "url": "https://drive.google.com/file/d/1rM73ZY0s-K9Mr2FJ2-M9G_qew1ckH1wz/view?usp=drivesdk",
    "name": "Warsaw_Holy Trinity Ca_trees_7962.webp",
    "city": "",
    "country": "",
    "metadata": {}
  },
  {
    "id": "9158",
    "url": "https://drive.google.com/file/d/10d1r_K4ipoUQa4-cm864wZhCifPbpALB/view?usp=drivesdk",
    "name": "Krakow_tour group_guide_9158.webp",
    "city": "",
    "country": "",
    "metadata": {}
  }
];


// In-memory store for accepted canonical EN data - starts empty
const MOCK_ACCEPTED_CANONICAL_EN: { [key: string]: ProcessedTourData } = {};

// In-memory store for accepted localizations
const MOCK_ACCEPTED_LOCALIZATIONS: { [key: string]: ProcessedTourData } = {};

// In-memory store for completion statuses
let MOCK_STATUSES: { [key: string]: { plDesc: boolean, deDesc: boolean, esDesc: boolean } } = {};

// Initialize statuses for all tours
MOCK_TOURS.forEach(tour => {
  MOCK_STATUSES[tour.name] = { plDesc: false, deDesc: false, esDesc: false };
});

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
                const fileIdMatch = originalPhoto.url.match(/\/d\/([^\/]+)/);
                const fileId = fileIdMatch ? fileIdMatch[1] : 'unknown-file-id';
                console.log(`  - Renaming file '${originalPhoto.name}' (ID: ${fileId}) to '${p.newName}'`);
            }
        });
    }

    console.log('--- ACCEPTANCE COMPLETE ---');
  },
};
// Build timestamp: 1762334650
