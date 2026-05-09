// Re-export everything the rest of the app needs from this module so existing
// imports like `from '../data/puzzles'` keep working unchanged.
export type { Difficulty, Puzzle } from './schema';
export { buildSlotReveal, difficultyMods } from './schema';

import { Puzzle } from './schema';
import { foodPuzzles } from './food';
import { animalPuzzles } from './animals';
import { naturePuzzles } from './nature';
import { householdPuzzles } from './household';
import { bodyPuzzles } from './body';
import { clothingPuzzles } from './clothing';
import { activityPuzzles } from './activities';
import { transportPuzzles } from './transport';
import { worldPuzzles } from './world';
import { artsPuzzles } from './arts';

export const puzzles: Puzzle[] = [
  ...foodPuzzles,
  ...animalPuzzles,
  ...naturePuzzles,
  ...householdPuzzles,
  ...bodyPuzzles,
  ...clothingPuzzles,
  ...activityPuzzles,
  ...transportPuzzles,
  ...worldPuzzles,
  ...artsPuzzles
];
