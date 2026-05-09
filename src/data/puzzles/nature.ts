import { Puzzle } from './schema';

export const naturePuzzles: Puzzle[] = [
  // TREES (easy)
  { id: 'trees-001', items: ['maple', 'oak', 'pine', 'palm'], answer: 'TREES', difficulty: 'easy' },
  { id: 'trees-002', items: ['birch', 'willow', 'elm', 'cedar'], answer: 'TREES', difficulty: 'easy' },
  { id: 'trees-003', items: ['redwood', 'sequoia', 'cypress', 'fir'], answer: 'TREES', difficulty: 'easy' },
  { id: 'trees-004', items: ['ash', 'beech', 'walnut', 'chestnut'], answer: 'TREES', difficulty: 'easy' },
  { id: 'trees-005', items: ['apple', 'cherry', 'pear', 'peach'], answer: 'TREES', difficulty: 'easy' },
  { id: 'trees-006', items: ['poplar', 'sycamore', 'magnolia', 'dogwood'], answer: 'TREES', difficulty: 'easy' },
  { id: 'trees-007', items: ['spruce', 'hemlock', 'juniper', 'larch'], answer: 'TREES', difficulty: 'easy' },
  { id: 'trees-008', items: ['oak', 'maple', 'pine', 'birch'], answer: 'TREES', difficulty: 'easy' },

  // FLOWERS (medium)
  { id: 'flowers-001', items: ['rose', 'daisy', 'tulip', 'sunflower'], answer: 'FLOWERS', difficulty: 'medium' },
  { id: 'flowers-002', items: ['lily', 'orchid', 'iris', 'peony'], answer: 'FLOWERS', difficulty: 'medium' },
  { id: 'flowers-003', items: ['daffodil', 'crocus', 'hyacinth', 'snowdrop'], answer: 'FLOWERS', difficulty: 'medium' },
  { id: 'flowers-004', items: ['carnation', 'chrysanthemum', 'marigold', 'zinnia'], answer: 'FLOWERS', difficulty: 'medium' },
  { id: 'flowers-005', items: ['poppy', 'pansy', 'violet', 'petunia'], answer: 'FLOWERS', difficulty: 'medium' },
  { id: 'flowers-006', items: ['lavender', 'geranium', 'begonia', 'fuchsia'], answer: 'FLOWERS', difficulty: 'medium' },
  { id: 'flowers-007', items: ['hibiscus', 'jasmine', 'gardenia', 'magnolia'], answer: 'FLOWERS', difficulty: 'medium' },
  { id: 'flowers-008', items: ['azalea', 'rhododendron', 'camellia', 'lilac'], answer: 'FLOWERS', difficulty: 'medium' },
  { id: 'flowers-009', items: ['rose', 'tulip', 'lily', 'daisy'], answer: 'FLOWERS', difficulty: 'medium' },
  { id: 'flowers-010', items: ['dahlia', 'aster', 'foxglove', 'snapdragon'], answer: 'FLOWERS', difficulty: 'medium' },

  // GEMS (easy)
  { id: 'gems-001', items: ['diamond', 'ruby', 'emerald', 'sapphire'], answer: 'GEMS', difficulty: 'easy' },
  { id: 'gems-002', items: ['pearl', 'opal', 'topaz', 'amethyst'], answer: 'GEMS', difficulty: 'easy' },
  { id: 'gems-003', items: ['garnet', 'jade', 'turquoise', 'onyx'], answer: 'GEMS', difficulty: 'easy' },
  { id: 'gems-004', items: ['aquamarine', 'tourmaline', 'peridot', 'citrine'], answer: 'GEMS', difficulty: 'easy' },
  { id: 'gems-005', items: ['amber', 'coral', 'lapis', 'moonstone'], answer: 'GEMS', difficulty: 'easy' },
  { id: 'gems-006', items: ['diamond', 'pearl', 'ruby', 'opal'], answer: 'GEMS', difficulty: 'easy' },

  // ROCKS (medium)
  { id: 'rocks-001', items: ['granite', 'marble', 'limestone', 'sandstone'], answer: 'ROCKS', difficulty: 'medium' },
  { id: 'rocks-002', items: ['basalt', 'obsidian', 'pumice', 'shale'], answer: 'ROCKS', difficulty: 'medium' },
  { id: 'rocks-003', items: ['slate', 'quartzite', 'gneiss', 'schist'], answer: 'ROCKS', difficulty: 'medium' },
  { id: 'rocks-004', items: ['flint', 'chalk', 'pumice', 'coal'], answer: 'ROCKS', difficulty: 'medium' },

  // METALS (medium)
  { id: 'metals-001', items: ['gold', 'silver', 'copper', 'iron'], answer: 'METALS', difficulty: 'medium' },
  { id: 'metals-002', items: ['platinum', 'titanium', 'aluminum', 'nickel'], answer: 'METALS', difficulty: 'medium' },
  { id: 'metals-003', items: ['steel', 'brass', 'bronze', 'pewter'], answer: 'METALS', difficulty: 'medium' },
  { id: 'metals-004', items: ['lead', 'tin', 'zinc', 'mercury'], answer: 'METALS', difficulty: 'medium' },

  // ELEMENTS (hard)
  { id: 'elem-001', items: ['hydrogen', 'oxygen', 'carbon', 'nitrogen'], answer: 'ELEMENTS', difficulty: 'hard' },
  { id: 'elem-002', items: ['gold', 'silver', 'iron', 'copper'], answer: 'ELEMENTS', difficulty: 'hard' },
  { id: 'elem-003', items: ['helium', 'neon', 'argon', 'krypton'], answer: 'ELEMENTS', difficulty: 'hard' },
  { id: 'elem-004', items: ['sodium', 'potassium', 'calcium', 'magnesium'], answer: 'ELEMENTS', difficulty: 'hard' },
  { id: 'elem-005', items: ['uranium', 'plutonium', 'radium', 'thorium'], answer: 'ELEMENTS', difficulty: 'hard' },

  // PLANETS (medium)
  { id: 'planets-001', items: ['Mercury', 'Venus', 'Mars', 'Jupiter'], answer: 'PLANETS', difficulty: 'medium' },
  { id: 'planets-002', items: ['Saturn', 'Uranus', 'Neptune', 'Earth'], answer: 'PLANETS', difficulty: 'medium' },
  { id: 'planets-003', items: ['Earth', 'Mars', 'Venus', 'Jupiter'], answer: 'PLANETS', difficulty: 'medium' },
  { id: 'planets-004', items: ['Saturn', 'Jupiter', 'Neptune', 'Uranus'], answer: 'PLANETS', difficulty: 'medium' },

  // CONSTELLATIONS (hard)
  { id: 'const-001', items: ['Orion', 'Cassiopeia', 'Big Dipper', 'Ursa Major'], answer: 'CONSTELLATIONS', difficulty: 'hard' },
  { id: 'const-002', items: ['Leo', 'Taurus', 'Gemini', 'Scorpio'], answer: 'CONSTELLATIONS', difficulty: 'hard' },
  { id: 'const-003', items: ['Andromeda', 'Pegasus', 'Hercules', 'Draco'], answer: 'CONSTELLATIONS', difficulty: 'hard' },
  { id: 'const-004', items: ['Cygnus', 'Lyra', 'Aquila', 'Perseus'], answer: 'CONSTELLATIONS', difficulty: 'hard' },

  // WEATHER (medium)
  { id: 'weather-001', items: ['rain', 'snow', 'sun', 'wind'], answer: 'WEATHER', difficulty: 'medium' },
  { id: 'weather-002', items: ['thunder', 'lightning', 'hail', 'fog'], answer: 'WEATHER', difficulty: 'medium' },
  { id: 'weather-003', items: ['storm', 'hurricane', 'tornado', 'blizzard'], answer: 'WEATHER', difficulty: 'medium' },
  { id: 'weather-004', items: ['drizzle', 'sleet', 'mist', 'frost'], answer: 'WEATHER', difficulty: 'medium' },
  { id: 'weather-005', items: ['cloudy', 'sunny', 'rainy', 'snowy'], answer: 'WEATHER', difficulty: 'medium' },
  { id: 'weather-006', items: ['rainbow', 'lightning', 'thunder', 'hail'], answer: 'WEATHER', difficulty: 'medium' },

  // CLOUDS (easy)
  { id: 'clouds-001', items: ['cumulus', 'cirrus', 'stratus', 'nimbus'], answer: 'CLOUDS', difficulty: 'easy' },
  { id: 'clouds-002', items: ['cumulonimbus', 'altostratus', 'cirrocumulus', 'stratocumulus'], answer: 'CLOUDS', difficulty: 'easy' },

  // SEASONS (medium)
  { id: 'seasons-001', items: ['spring', 'summer', 'autumn', 'winter'], answer: 'SEASONS', difficulty: 'medium' },
  { id: 'seasons-002', items: ['summer', 'fall', 'winter', 'spring'], answer: 'SEASONS', difficulty: 'medium' },
  { id: 'seasons-003', items: ['winter', 'autumn', 'summer', 'spring'], answer: 'SEASONS', difficulty: 'medium' },

  // OCEANS (medium)
  { id: 'oceans-001', items: ['Pacific', 'Atlantic', 'Indian', 'Arctic'], answer: 'OCEANS', difficulty: 'medium' },
  { id: 'oceans-002', items: ['Pacific', 'Atlantic', 'Southern', 'Indian'], answer: 'OCEANS', difficulty: 'medium' },

  // RIVERS (easy)
  { id: 'rivers-001', items: ['Nile', 'Amazon', 'Mississippi', 'Yangtze'], answer: 'RIVERS', difficulty: 'easy' },
  { id: 'rivers-002', items: ['Thames', 'Seine', 'Danube', 'Volga'], answer: 'RIVERS', difficulty: 'easy' },
  { id: 'rivers-003', items: ['Hudson', 'Colorado', 'Rio Grande', 'Ohio'], answer: 'RIVERS', difficulty: 'easy' },
  { id: 'rivers-004', items: ['Ganges', 'Mekong', 'Tigris', 'Euphrates'], answer: 'RIVERS', difficulty: 'easy' },

  // MOUNTAINS (hard)
  { id: 'mtns-001', items: ['Everest', 'K2', 'Kilimanjaro', 'Denali'], answer: 'MOUNTAINS', difficulty: 'hard' },
  { id: 'mtns-002', items: ['Rockies', 'Alps', 'Andes', 'Himalayas'], answer: 'MOUNTAINS', difficulty: 'hard' },
  { id: 'mtns-003', items: ['Fuji', 'Olympus', 'Sinai', 'Vesuvius'], answer: 'MOUNTAINS', difficulty: 'hard' },
  { id: 'mtns-004', items: ['Matterhorn', 'Mont Blanc', 'McKinley', 'Aconcagua'], answer: 'MOUNTAINS', difficulty: 'hard' },

  // VOLCANOES (hard)
  { id: 'volc-001', items: ['Vesuvius', 'Krakatoa', 'Etna', 'Mauna Loa'], answer: 'VOLCANOES', difficulty: 'hard' },
  { id: 'volc-002', items: ['Fuji', 'Pinatubo', 'St. Helens', 'Stromboli'], answer: 'VOLCANOES', difficulty: 'hard' },

  // DESERTS (medium)
  { id: 'des-001', items: ['Sahara', 'Gobi', 'Mojave', 'Kalahari'], answer: 'DESERTS', difficulty: 'medium' },
  { id: 'des-002', items: ['Sahara', 'Atacama', 'Sonoran', 'Arabian'], answer: 'DESERTS', difficulty: 'medium' },
  { id: 'des-003', items: ['Gobi', 'Kalahari', 'Patagonian', 'Antarctic'], answer: 'DESERTS', difficulty: 'medium' },

  // FORESTS (medium)
  { id: 'for-001', items: ['Amazon', 'Congo', 'Black Forest', 'Sherwood'], answer: 'FORESTS', difficulty: 'medium' },
  { id: 'for-002', items: ['rainforest', 'pine forest', 'jungle', 'woodland'], answer: 'FORESTS', difficulty: 'medium' }
];
