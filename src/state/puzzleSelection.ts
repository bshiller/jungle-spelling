import { Puzzle, Difficulty, puzzles } from '../data/puzzles';

export interface SessionMemory {
  missedPool: string[];
  playedThisSession: Set<string>;
}

const desiredMix: Difficulty[] = ['easy', 'easy', 'medium', 'medium', 'hard'];

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function drawOne(candidates: Puzzle[]) {
  if (candidates.length === 0) return undefined;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

export function selectRound(session: SessionMemory): Puzzle[] {
  const byId = new Map(puzzles.map((puzzle) => [puzzle.id, puzzle]));
  const round: Puzzle[] = [];

  const missedDraws = session.missedPool.splice(0, 2);
  for (const id of missedDraws) {
    const puzzle = byId.get(id);
    if (puzzle && !round.some((item) => item.id === puzzle.id)) {
      round.push(puzzle);
    }
  }

  const alreadyInRound = new Set(round.map((puzzle) => puzzle.id));
  const unavailable = new Set([...session.playedThisSession, ...alreadyInRound]);
  let freshPool = puzzles.filter((puzzle) => !unavailable.has(puzzle.id));

  if (freshPool.length < 5 - round.length) {
    freshPool = puzzles.filter((puzzle) => !alreadyInRound.has(puzzle.id));
    session.playedThisSession.clear();
  }

  const currentCounts = round.reduce<Record<Difficulty, number>>(
    (counts, puzzle) => ({ ...counts, [puzzle.difficulty]: counts[puzzle.difficulty] + 1 }),
    { easy: 0, medium: 0, hard: 0 }
  );

  for (const difficulty of desiredMix) {
    if (round.length >= 5) break;
    const desiredCount = desiredMix.filter((item) => item === difficulty).length;
    if (currentCounts[difficulty] >= desiredCount) continue;

    const candidate = drawOne(freshPool.filter((puzzle) => puzzle.difficulty === difficulty && !round.some((item) => item.id === puzzle.id)));
    if (candidate) {
      round.push(candidate);
      currentCounts[difficulty] += 1;
      freshPool = freshPool.filter((puzzle) => puzzle.id !== candidate.id);
    }
  }

  while (round.length < 5 && freshPool.length > 0) {
    const candidate = drawOne(freshPool.filter((puzzle) => !round.some((item) => item.id === puzzle.id)));
    if (!candidate) break;
    round.push(candidate);
    freshPool = freshPool.filter((puzzle) => puzzle.id !== candidate.id);
  }

  for (const puzzle of round) {
    session.playedThisSession.add(puzzle.id);
  }

  return shuffle(round).slice(0, 5);
}
