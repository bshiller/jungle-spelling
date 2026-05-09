import { Puzzle } from './schema';

export const artsPuzzles: Puzzle[] = [
  // INSTRUMENTS (hard)
  { id: 'instr-001', items: ['piano', 'guitar', 'drums', 'violin'], answer: 'INSTRUMENTS', difficulty: 'hard' },
  { id: 'instr-002', items: ['flute', 'clarinet', 'oboe', 'bassoon'], answer: 'INSTRUMENTS', difficulty: 'hard' },
  { id: 'instr-003', items: ['trumpet', 'trombone', 'tuba', 'french horn'], answer: 'INSTRUMENTS', difficulty: 'hard' },
  { id: 'instr-004', items: ['cello', 'viola', 'double bass', 'harp'], answer: 'INSTRUMENTS', difficulty: 'hard' },
  { id: 'instr-005', items: ['saxophone', 'clarinet', 'flute', 'oboe'], answer: 'INSTRUMENTS', difficulty: 'hard' },
  { id: 'instr-006', items: ['banjo', 'mandolin', 'ukulele', 'sitar'], answer: 'INSTRUMENTS', difficulty: 'hard' },
  { id: 'instr-007', items: ['xylophone', 'marimba', 'cymbals', 'tambourine'], answer: 'INSTRUMENTS', difficulty: 'hard' },
  { id: 'instr-008', items: ['organ', 'accordion', 'harmonica', 'kazoo'], answer: 'INSTRUMENTS', difficulty: 'hard' },
  { id: 'instr-009', items: ['guitar', 'piano', 'violin', 'flute'], answer: 'INSTRUMENTS', difficulty: 'hard' },
  { id: 'instr-010', items: ['bagpipes', 'didgeridoo', 'pan flute', 'recorder'], answer: 'INSTRUMENTS', difficulty: 'hard' },

  // COLORS (medium)
  { id: 'colors-001', items: ['crimson', 'azure', 'emerald', 'amber'], answer: 'COLORS', difficulty: 'medium' },
  { id: 'colors-002', items: ['red', 'blue', 'green', 'yellow'], answer: 'COLORS', difficulty: 'medium' },
  { id: 'colors-003', items: ['orange', 'purple', 'pink', 'brown'], answer: 'COLORS', difficulty: 'medium' },
  { id: 'colors-004', items: ['black', 'white', 'gray', 'silver'], answer: 'COLORS', difficulty: 'medium' },
  { id: 'colors-005', items: ['turquoise', 'magenta', 'lavender', 'coral'], answer: 'COLORS', difficulty: 'medium' },
  { id: 'colors-006', items: ['scarlet', 'maroon', 'burgundy', 'ruby'], answer: 'COLORS', difficulty: 'medium' },
  { id: 'colors-007', items: ['navy', 'indigo', 'teal', 'cobalt'], answer: 'COLORS', difficulty: 'medium' },
  { id: 'colors-008', items: ['olive', 'sage', 'mint', 'forest'], answer: 'COLORS', difficulty: 'medium' },
  { id: 'colors-009', items: ['gold', 'mustard', 'lemon', 'goldenrod'], answer: 'COLORS', difficulty: 'medium' },
  { id: 'colors-010', items: ['violet', 'lilac', 'plum', 'mauve'], answer: 'COLORS', difficulty: 'medium' },
  { id: 'colors-011', items: ['beige', 'tan', 'khaki', 'cream'], answer: 'COLORS', difficulty: 'medium' },
  { id: 'colors-012', items: ['fuchsia', 'salmon', 'rose', 'peach'], answer: 'COLORS', difficulty: 'medium' },

  // SHAPES (medium)
  { id: 'shapes-001', items: ['circle', 'square', 'triangle', 'oval'], answer: 'SHAPES', difficulty: 'medium' },
  { id: 'shapes-002', items: ['rectangle', 'pentagon', 'hexagon', 'octagon'], answer: 'SHAPES', difficulty: 'medium' },
  { id: 'shapes-003', items: ['diamond', 'rhombus', 'trapezoid', 'parallelogram'], answer: 'SHAPES', difficulty: 'medium' },
  { id: 'shapes-004', items: ['star', 'heart', 'crescent', 'arrow'], answer: 'SHAPES', difficulty: 'medium' },
  { id: 'shapes-005', items: ['sphere', 'cube', 'cylinder', 'pyramid'], answer: 'SHAPES', difficulty: 'medium' },
  { id: 'shapes-006', items: ['cone', 'prism', 'torus', 'tetrahedron'], answer: 'SHAPES', difficulty: 'medium' },
  { id: 'shapes-007', items: ['heptagon', 'nonagon', 'decagon', 'dodecagon'], answer: 'SHAPES', difficulty: 'medium' },
  { id: 'shapes-008', items: ['circle', 'square', 'rectangle', 'triangle'], answer: 'SHAPES', difficulty: 'medium' },

  // NUMBERS (medium)
  { id: 'num-001', items: ['one', 'two', 'three', 'four'], answer: 'NUMBERS', difficulty: 'medium' },
  { id: 'num-002', items: ['five', 'six', 'seven', 'eight'], answer: 'NUMBERS', difficulty: 'medium' },
  { id: 'num-003', items: ['ten', 'twenty', 'thirty', 'forty'], answer: 'NUMBERS', difficulty: 'medium' },
  { id: 'num-004', items: ['hundred', 'thousand', 'million', 'billion'], answer: 'NUMBERS', difficulty: 'medium' },
  { id: 'num-005', items: ['nine', 'eleven', 'twelve', 'thirteen'], answer: 'NUMBERS', difficulty: 'medium' },

  // LETTERS (easy)
  { id: 'lets-001', items: ['A', 'B', 'C', 'D'], answer: 'LETTERS', difficulty: 'easy' },
  { id: 'lets-002', items: ['vowel', 'consonant', 'capital', 'lowercase'], answer: 'LETTERS', difficulty: 'easy' },
  { id: 'lets-003', items: ['alpha', 'beta', 'gamma', 'delta'], answer: 'LETTERS', difficulty: 'easy' },

  // NOTES (easy)
  { id: 'notes-001', items: ['do', 're', 'mi', 'fa'], answer: 'NOTES', difficulty: 'easy' },
  { id: 'notes-002', items: ['C', 'D', 'E', 'F'], answer: 'NOTES', difficulty: 'easy' },
  { id: 'notes-003', items: ['whole', 'half', 'quarter', 'eighth'], answer: 'NOTES', difficulty: 'easy' },

  // GENRES (medium)
  { id: 'genres-001', items: ['rock', 'pop', 'jazz', 'classical'], answer: 'GENRES', difficulty: 'medium' },
  { id: 'genres-002', items: ['country', 'folk', 'blues', 'reggae'], answer: 'GENRES', difficulty: 'medium' },
  { id: 'genres-003', items: ['hip hop', 'rap', 'R&B', 'soul'], answer: 'GENRES', difficulty: 'medium' },
  { id: 'genres-004', items: ['punk', 'metal', 'grunge', 'indie'], answer: 'GENRES', difficulty: 'medium' },

  // MOVIES (easy)
  { id: 'movies-001', items: ['comedy', 'drama', 'action', 'horror'], answer: 'MOVIES', difficulty: 'easy' },
  { id: 'movies-002', items: ['romance', 'thriller', 'mystery', 'sci-fi'], answer: 'MOVIES', difficulty: 'easy' },
  { id: 'movies-003', items: ['Frozen', 'Toy Story', 'Finding Nemo', 'Moana'], answer: 'MOVIES', difficulty: 'easy' }
];
