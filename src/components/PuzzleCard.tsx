import { motion } from 'framer-motion';
import type { Puzzle } from '../data/puzzles';

interface PuzzleCardProps {
  puzzle: Puzzle;
}

export default function PuzzleCard({ puzzle }: PuzzleCardProps) {
  return (
    <section className="rounded-[2rem] border border-white/50 bg-cream/88 p-5 shadow-jungle backdrop-blur sm:p-7">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-canopy/75">What category?</p>
        <span className="rounded-full bg-leaf/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-canopy">
          {puzzle.difficulty}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {puzzle.items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.25 }}
            className="rounded-3xl border border-leaf/15 bg-white/55 px-4 py-5 text-center text-xl font-extrabold text-canopy shadow-sm sm:text-2xl"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
