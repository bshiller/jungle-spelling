function format(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remaining = seconds % 60;
  return `${minutes}:${remaining.toString().padStart(2, '0')}`;
}

interface TimerProps {
  elapsed: number;
  target: number;
}

export default function Timer({ elapsed, target }: TimerProps) {
  const status = elapsed <= target ? 'gold' : elapsed <= target + 30 ? 'amber' : 'red';
  const statusClasses = {
    gold: 'border-gold/60 bg-gold/20 text-bark',
    amber: 'border-amber-500/50 bg-amber-200/50 text-amber-950',
    red: 'border-coral/60 bg-coral/20 text-red-950'
  };
  const progress = Math.min(100, (elapsed / Math.max(1, target + 30)) * 100);

  return (
    <div className={`rounded-2xl border px-4 py-3 shadow-sm ${statusClasses[status]}`}>
      <div className="flex items-center justify-between gap-3 text-sm font-bold uppercase tracking-[0.14em] opacity-80">
        <span>Timer</span>
        <span>Target {format(target)}</span>
      </div>
      <div className="mt-1 flex items-end justify-between gap-3">
        <div className="font-heading text-3xl tabular-nums">{format(elapsed)}</div>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/55">
          <div className="h-full rounded-full bg-current transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
