export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Puzzle {
  id: string;
  items: [string, string, string, string];
  answer: string;
  difficulty: Difficulty;
}

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
