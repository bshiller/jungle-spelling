import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AnswerRow, { AnswerSlotView } from '../components/AnswerRow';
import OnScreenKeyboard from '../components/OnScreenKeyboard';
import PuzzleCard from '../components/PuzzleCard';
import StarDisplay from '../components/StarDisplay';
import Timer from '../components/Timer';
import { buildSlotReveal } from '../data/puzzles';
import { getProfileDefinition } from '../data/profiles';
import { useProfileStore } from '../state/profileStore';
import { sfx } from '../audio/sfx';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function buildCandidateSet(answer: string, wrongAttempts: number): Set<string> | null {
  if (wrongAttempts < 2) return null;

  const answerLetters = Array.from(new Set(answer.split('')));
  const distractors = alphabet.filter((letter) => !answerLetters.includes(letter));
  const shuffled = [...distractors].sort(() => Math.random() - 0.5);
  const targetSize = wrongAttempts >= 3 ? answerLetters.length + Math.min(2, shuffled.length) : Math.max(10, answerLetters.length + 3);
  return new Set([...answerLetters, ...shuffled.slice(0, Math.max(0, targetSize - answerLetters.length))]);
}

export default function Game() {
  const activeProfileId = useProfileStore((state) => state.activeProfileId);
  const round = useProfileStore((state) => state.round);
  const puzzleIndex = useProfileStore((state) => state.puzzleIndex);
  const backToProfiles = useProfileStore((state) => state.backToProfiles);
  const getProfileTarget = useProfileStore((state) => state.getProfileTarget);

  const puzzle = round[puzzleIndex];
  const profile = activeProfileId ? getProfileDefinition(activeProfileId) : undefined;

  if (!activeProfileId || !puzzle || !profile) {
    return (
      <div className="grid flex-1 place-items-center">
        <button className="rounded-2xl bg-canopy px-5 py-3 font-bold text-white" onClick={backToProfiles}>
          Back to profiles
        </button>
      </div>
    );
  }

  const target = getProfileTarget(activeProfileId, puzzle);

  return (
    <PuzzlePlay
      key={puzzle.id}
      activeProfileId={activeProfileId}
      profileName={profile.name}
      puzzle={puzzle}
      puzzleIndex={puzzleIndex}
      roundLength={round.length}
      target={target}
      onBack={backToProfiles}
    />
  );
}

interface PuzzlePlayProps {
  activeProfileId: string;
  profileName: string;
  puzzle: NonNullable<ReturnType<typeof useProfileStore.getState>['round'][number]>;
  puzzleIndex: number;
  roundLength: number;
  target: number;
  onBack: () => void;
}

function PuzzlePlay({ profileName, puzzle, puzzleIndex, roundLength, target, onBack }: PuzzlePlayProps) {
  const completePuzzle = useProfileStore((state) => state.completePuzzle);
  const preReveal = useMemo(() => buildSlotReveal(puzzle.answer), [puzzle.answer]);
  const [locked, setLocked] = useState<(string | null)[]>(preReveal);
  const [pending, setPending] = useState<(string | null)[]>(Array.from({ length: puzzle.answer.length }, () => null));
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [wrongIndices, setWrongIndices] = useState<number[]>([]);
  const [flashLetters, setFlashLetters] = useState<(string | null)[]>([]);
  const [shaking, setShaking] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [isResolving, setIsResolving] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const finalizingRef = useRef(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setElapsed((seconds) => seconds + 1);
    }, 1000);
    return () => window.clearInterval(interval);
  }, [puzzle.id]);

  const firstOpenSlot = useMemo(
    () => puzzle.answer.split('').findIndex((_, index) => !locked[index] && !pending[index]),
    [locked, pending, puzzle.answer]
  );

  const canSubmit = useMemo(
    () => puzzle.answer.split('').every((_, index) => locked[index] || pending[index]),
    [locked, pending, puzzle.answer]
  );

  const allowedLetters = useMemo(() => buildCandidateSet(puzzle.answer, wrongAttempts), [puzzle.answer, wrongAttempts]);
  const lockedLetters = useMemo(() => new Set(locked.filter(Boolean) as string[]), [locked]);

  const slots: AnswerSlotView[] = useMemo(() => {
    return puzzle.answer.split('').map((answerLetter, index) => {
      if (revealed) return { id: `${puzzle.id}-${index}`, letter: answerLetter, status: 'revealed' };
      if (wrongIndices.includes(index)) return { id: `${puzzle.id}-${index}`, letter: flashLetters[index], status: 'wrong' };
      if (preReveal[index]) return { id: `${puzzle.id}-${index}`, letter: locked[index], status: 'pre-revealed' };
      if (locked[index]) return { id: `${puzzle.id}-${index}`, letter: locked[index], status: 'locked-correct' };
      if (pending[index]) return { id: `${puzzle.id}-${index}`, letter: pending[index], status: 'pending' };
      if (firstOpenSlot === index) return { id: `${puzzle.id}-${index}`, letter: null, status: 'current' };
      return { id: `${puzzle.id}-${index}`, letter: null, status: 'empty' };
    });
  }, [flashLetters, firstOpenSlot, locked, pending, preReveal, puzzle.answer, puzzle.id, revealed, wrongIndices]);

  function handleLetter(letter: string) {
    if (isResolving || firstOpenSlot < 0 || (allowedLetters && !allowedLetters.has(letter))) return;
    sfx.tap();
    setPending((current) => {
      const next = [...current];
      next[firstOpenSlot] = letter;
      return next;
    });
  }

  function handleBackspace() {
    if (isResolving) return;
    sfx.tap();
    setPending((current) => {
      const next = [...current];
      for (let index = next.length - 1; index >= 0; index -= 1) {
        if (!locked[index] && next[index]) {
          next[index] = null;
          break;
        }
      }
      return next;
    });
  }

  function finishPuzzle(solved: boolean, attemptsUsed: number, stars: number) {
    if (finalizingRef.current) return;
    finalizingRef.current = true;
    window.setTimeout(() => {
      completePuzzle({
        puzzleId: puzzle.id,
        answer: puzzle.answer,
        solved,
        attemptsUsed,
        stars,
        seconds: elapsed
      });
    }, solved ? 950 : 1350);
  }

  function handleSubmit() {
    if (!canSubmit || isResolving) return;
    const attemptsUsed = wrongAttempts + 1;
    const guess = puzzle.answer.split('').map((_, index) => locked[index] ?? pending[index] ?? '').join('');

    if (guess === puzzle.answer) {
      const stars = attemptsUsed === 1 ? 3 : attemptsUsed === 2 ? 2 : attemptsUsed === 3 ? 1 : 0;
      setIsResolving(true);
      setLocked(puzzle.answer.split(''));
      sfx.correct();
      if (stars > 0) window.setTimeout(() => sfx.star(), 280);
      finishPuzzle(true, attemptsUsed, stars);
      return;
    }

    const guessLetters = guess.split('');
    const correctPositions = guessLetters.map((letter, index) => letter === puzzle.answer[index]);
    const nextLocked = locked.map((letter, index) => (letter || correctPositions[index] ? puzzle.answer[index] : null));
    setLocked(nextLocked);

    if (attemptsUsed >= 4) {
      setIsResolving(true);
      setRevealed(true);
      sfx.reveal();
      finishPuzzle(false, attemptsUsed, 0);
      return;
    }

    setWrongAttempts(attemptsUsed);
    setFlashLetters(guessLetters);
    setWrongIndices(correctPositions.map((isCorrect, index) => (isCorrect ? -1 : index)).filter((index) => index >= 0));
    setShaking(true);
    sfx.wrong();

    window.setTimeout(() => {
      setPending(Array.from({ length: puzzle.answer.length }, () => null));
      setWrongIndices([]);
      setFlashLetters([]);
      setShaking(false);
    }, 680);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Enter') handleSubmit();
      if (event.key === 'Backspace') handleBackspace();
      if (/^[a-zA-Z]$/.test(event.key)) handleLetter(event.key.toUpperCase());
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className="flex w-full flex-1 flex-col gap-4 sm:gap-5">
      <header className="flex flex-wrap items-center justify-between gap-3 rounded-[1.75rem] border border-white/45 bg-cream/80 px-4 py-3 shadow-sm backdrop-blur">
        <button type="button" onClick={onBack} className="rounded-2xl bg-white/70 px-4 py-2 font-bold text-canopy shadow-sm">
          Profiles
        </button>
        <div className="text-center">
          <div className="font-heading text-2xl text-canopy">{profileName}'s round</div>
          <div className="text-sm font-bold uppercase tracking-[0.16em] text-bark/65">
            Puzzle {puzzleIndex + 1} of {roundLength}
          </div>
        </div>
        <StarDisplay stars={wrongAttempts === 0 ? 3 : wrongAttempts === 1 ? 2 : wrongAttempts === 2 ? 1 : 0} max={3} size="sm" />
      </header>

      <div className="grid flex-1 items-start gap-4 lg:grid-cols-[1fr_0.72fr]">
        <div className="space-y-4">
          <PuzzleCard puzzle={puzzle} />
          <section className="rounded-[2rem] border border-white/50 bg-cream/90 p-5 shadow-jungle backdrop-blur sm:p-7">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-canopy/75">Spell the category</p>
                <p className="text-sm text-bark/70">Attempt {Math.min(wrongAttempts + 1, 4)} of 4</p>
              </div>
              {allowedLetters && (
                <span className="rounded-full bg-gold/25 px-3 py-1 text-sm font-bold text-bark">Keyboard hint unlocked</span>
              )}
            </div>
            <AnswerRow slots={slots} shaking={shaking} />
          </section>
        </div>

        <aside className="space-y-4">
          <Timer elapsed={elapsed} target={target} />
          <motion.div
            initial={false}
            animate={isResolving ? { scale: [1, 1.02, 1] } : { scale: 1 }}
            className="rounded-[2rem] border border-white/50 bg-cream/88 p-4 shadow-jungle backdrop-blur sm:p-5"
          >
            {isResolving ? (
              <div className="grid min-h-[12rem] place-items-center text-center">
                <div>
                  <div className="text-5xl">{revealed ? '🌿' : '🦜'}</div>
                  <p className="mt-3 font-heading text-3xl text-canopy">{revealed ? puzzle.answer : 'Nice spelling!'}</p>
                </div>
              </div>
            ) : (
              <OnScreenKeyboard
                allowedLetters={allowedLetters}
                lockedLetters={lockedLetters}
                onLetter={handleLetter}
                onBackspace={handleBackspace}
                onSubmit={handleSubmit}
                canSubmit={canSubmit}
              />
            )}
          </motion.div>
        </aside>
      </div>
    </div>
  );
}
