import { motion } from 'framer-motion';
import StarDisplay from '../components/StarDisplay';
import { useProfileStore } from '../state/profileStore';

export default function RoundSummary() {
  const results = useProfileStore((state) => state.roundResults);
  const playAgain = useProfileStore((state) => state.playAgain);
  const backToProfiles = useProfileStore((state) => state.backToProfiles);
  const activeProfileId = useProfileStore((state) => state.activeProfileId);
  const profilesById = useProfileStore((state) => state.profilesById);

  const roundStars = results.reduce((sum, result) => sum + result.stars, 0);
  const solvedWords = results.filter((result) => result.solved).length;
  const lifetimeStars = activeProfileId ? profilesById[activeProfileId]?.lifetimeStars ?? 0 : 0;

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center gap-6 py-6">
      <motion.section
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="rounded-[2.25rem] border border-white/50 bg-cream/90 p-6 text-center shadow-jungle backdrop-blur sm:p-9"
      >
        <div className="text-6xl">🌴</div>
        <p className="mt-2 text-sm font-extrabold uppercase tracking-[0.22em] text-leaf">Round complete</p>
        <h1 className="mt-1 font-heading text-5xl text-canopy sm:text-6xl">Safari score</h1>

        <div className="mt-7 flex justify-center">
          <StarDisplay stars={roundStars} max={15} size="lg" animate />
        </div>

        <div className="mx-auto mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
          <SummaryStat label="Stars earned" value={`${roundStars}/15`} />
          <SummaryStat label="Words solved" value={`${solvedWords}/5`} />
          <SummaryStat label="Lifetime stars" value={String(lifetimeStars)} />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={playAgain} className="rounded-2xl bg-canopy px-6 py-3 font-extrabold text-white shadow-sm">
            Play again
          </button>
          <button type="button" onClick={backToProfiles} className="rounded-2xl bg-white/80 px-6 py-3 font-extrabold text-canopy shadow-sm">
            Change profile
          </button>
        </div>
      </motion.section>

      <section className="grid gap-3 sm:grid-cols-5">
        {results.map((result) => (
          <article key={result.puzzleId} className="rounded-3xl border border-white/45 bg-cream/85 p-4 text-center shadow-sm backdrop-blur">
            <div className="font-heading text-xl text-canopy">{result.answer}</div>
            <div className="mt-1 text-sm text-bark/70">{result.solved ? `${result.attemptsUsed} attempt${result.attemptsUsed === 1 ? '' : 's'}` : 'revealed'}</div>
            <div className="mt-2 flex justify-center">
              <StarDisplay stars={result.stars} max={3} size="sm" />
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-leaf/15 bg-white/55 p-4">
      <div className="font-heading text-3xl text-canopy">{value}</div>
      <div className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-bark/60">{label}</div>
    </div>
  );
}
