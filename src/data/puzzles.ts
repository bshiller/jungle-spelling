export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Puzzle {
  id: string;
  items: [string, string, string, string];
  answer: string;
  difficulty: Difficulty;
}

// Add more puzzles in this same shape. The round selector will pick them up automatically.
// The long-term target is roughly 150 puzzles.
export const puzzles: Puzzle[] = [
  // EASY
  { id: 'days-001', items: ['Monday', 'Tuesday', 'Wednesday', 'Friday'], answer: 'DAYS', difficulty: 'easy' },
  { id: 'pets-001', items: ['poodle', 'tabby', 'goldfish', 'parakeet'], answer: 'PETS', difficulty: 'easy' },
  { id: 'food-001', items: ['apple', 'banana', 'grape', 'orange'], answer: 'FRUIT', difficulty: 'easy' },
  { id: 'tools-001', items: ['hammer', 'screwdriver', 'wrench', 'saw'], answer: 'TOOLS', difficulty: 'easy' },
  { id: 'careers-001', items: ['doctor', 'teacher', 'firefighter', 'chef'], answer: 'CAREERS', difficulty: 'easy' },
  { id: 'shoes-001', items: ['sneakers', 'boots', 'sandals', 'slippers'], answer: 'SHOES', difficulty: 'easy' },
  { id: 'meals-001', items: ['breakfast', 'lunch', 'dinner', 'snack'], answer: 'MEALS', difficulty: 'easy' },
  { id: 'trees-001', items: ['maple', 'oak', 'pine', 'palm'], answer: 'TREES', difficulty: 'easy' },
  { id: 'gems-001', items: ['diamond', 'ruby', 'emerald', 'sapphire'], answer: 'GEMS', difficulty: 'easy' },
  { id: 'dirs-001', items: ['north', 'south', 'east', 'west'], answer: 'DIRECTIONS', difficulty: 'hard' },

  // MEDIUM
  { id: 'colors-001', items: ['crimson', 'azure', 'emerald', 'amber'], answer: 'COLORS', difficulty: 'medium' },
  { id: 'shapes-001', items: ['circle', 'square', 'triangle', 'oval'], answer: 'SHAPES', difficulty: 'medium' },
  { id: 'sports-001', items: ['soccer', 'basketball', 'baseball', 'tennis'], answer: 'SPORTS', difficulty: 'medium' },
  { id: 'months-001', items: ['January', 'March', 'July', 'October'], answer: 'MONTHS', difficulty: 'medium' },
  { id: 'planets-001', items: ['Mercury', 'Venus', 'Mars', 'Jupiter'], answer: 'PLANETS', difficulty: 'medium' },
  { id: 'birds-001', items: ['eagle', 'owl', 'sparrow', 'robin'], answer: 'BIRDS', difficulty: 'medium' },
  { id: 'flowers-001', items: ['rose', 'daisy', 'tulip', 'sunflower'], answer: 'FLOWERS', difficulty: 'medium' },
  { id: 'seasons-001', items: ['spring', 'summer', 'autumn', 'winter'], answer: 'SEASONS', difficulty: 'medium' },
  { id: 'insects-001', items: ['bee', 'ant', 'beetle', 'butterfly'], answer: 'INSECTS', difficulty: 'medium' },
  { id: 'reptiles-001', items: ['snake', 'lizard', 'turtle', 'crocodile'], answer: 'REPTILES', difficulty: 'medium' },

  // HARD
  { id: 'veg-001', items: ['carrot', 'broccoli', 'spinach', 'lettuce'], answer: 'VEGETABLES', difficulty: 'hard' },
  { id: 'instr-001', items: ['piano', 'guitar', 'drums', 'violin'], answer: 'INSTRUMENTS', difficulty: 'hard' },
  { id: 'feels-001', items: ['happy', 'sad', 'angry', 'scared'], answer: 'EMOTIONS', difficulty: 'hard' },
  { id: 'vehic-001', items: ['bicycle', 'car', 'train', 'airplane'], answer: 'VEHICLES', difficulty: 'hard' },
  { id: 'utens-001', items: ['knife', 'fork', 'spoon', 'chopsticks'], answer: 'UTENSILS', difficulty: 'hard' }
];

export function buildSlotReveal(answer: string): (string | null)[] {
  const reveal = answer.split('').map(() => null as string | null);
  reveal[0] = answer[0];
  if (answer.length > 1 && answer[answer.length - 1] === 'S') {
    reveal[answer.length - 1] = 'S';
  }
  return reveal;
}

export const difficultyMods: Record<Difficulty, number> = {
  easy: -15,
  medium: 0,
  hard: 20
};
