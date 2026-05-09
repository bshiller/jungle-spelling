import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import StarDisplay from '../components/StarDisplay';
import { profiles } from '../data/profiles';
import { useProfileStore } from '../state/profileStore';

export default function ProfileSelect() {
  const profilesById = useProfileStore((state) => state.profilesById);
  const muted = useProfileStore((state) => state.muted);
  const setMuted = useProfileStore((state) => state.setMuted);
  const selectProfile = useProfileStore((state) => state.selectProfile);
  const cycleAvatar = useProfileStore((state) => state.cycleAvatar);
  const resetProfileProgress = useProfileStore((state) => state.resetProfileProgress);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-7 py-6">
      <header className="text-center">
        <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.22em] text-leaf">Family spelling safari</p>
        <h1 className="font-heading text-5xl text-canopy sm:text-7xl">Jungle Spelling</h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-bark/75">
          Pick your explorer, find the hidden category, and spell it before the jungle hints take over.
        </p>
      </header>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setMuted(!muted)}
          className="rounded-full border border-leaf/25 bg-cream/85 px-5 py-3 font-extrabold text-canopy shadow-sm backdrop-blur"
        >
          {muted ? '🔇 Sound muted' : '🔊 Sound on'}
        </button>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {profiles.map((profile, index) => {
          const saved = profilesById[profile.id];
          return (
            <ProfileTile
              key={profile.id}
              index={index}
              name={profile.name}
              ageTag={profile.ageTag}
              avatar={saved.avatar}
              lifetimeStars={saved.lifetimeStars}
              onOpen={() => selectProfile(profile.id)}
              onAvatar={(event) => {
                event.stopPropagation();
                cycleAvatar(profile.id);
              }}
              onReset={() => resetProfileProgress(profile.id)}
            />
          );
        })}
      </section>

      <p className="text-center text-sm text-bark/60">
        Long-press a profile tile to reset that explorer's progress on this iPad.
      </p>
    </div>
  );
}

interface ProfileTileProps {
  index: number;
  name: string;
  ageTag: string;
  avatar: string;
  lifetimeStars: number;
  onOpen: () => void;
  onAvatar: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onReset: () => void;
}

function ProfileTile({ index, name, ageTag, avatar, lifetimeStars, onOpen, onAvatar, onReset }: ProfileTileProps) {
  const timer = useRef<number | null>(null);
  const [longPressed, setLongPressed] = useState(false);

  function clearLongPress() {
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
  }

  function startLongPress() {
    clearLongPress();
    setLongPressed(false);
    timer.current = window.setTimeout(() => {
      setLongPressed(true);
      if (window.confirm(`Reset ${name}'s progress?`)) {
        onReset();
      }
      window.setTimeout(() => setLongPressed(false), 50);
    }, 700);
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.25 }}
      onPointerDown={startLongPress}
      onPointerUp={clearLongPress}
      onPointerCancel={clearLongPress}
      onPointerLeave={clearLongPress}
      onContextMenu={(event) => event.preventDefault()}
      onClick={() => {
        if (!longPressed) onOpen();
      }}
      className="cursor-pointer rounded-[2rem] border border-white/50 bg-cream/88 p-5 text-center shadow-jungle backdrop-blur transition hover:-translate-y-1 hover:bg-white/85"
    >
      <button
        type="button"
        onClick={onAvatar}
        onPointerDown={(event) => event.stopPropagation()}
        className="mx-auto grid h-20 w-20 place-items-center rounded-[1.75rem] bg-leaf/15 text-5xl shadow-inner"
        aria-label={`Change ${name}'s avatar`}
      >
        {avatar}
      </button>
      <h2 className="mt-4 font-heading text-3xl text-canopy">{name}</h2>
      <div className="mt-1 inline-flex rounded-full bg-gold/25 px-3 py-1 text-sm font-extrabold uppercase tracking-[0.12em] text-bark/80">
        {ageTag}
      </div>
      <div className="mt-4 flex flex-col items-center gap-1">
        <StarDisplay stars={Math.min(3, lifetimeStars)} max={3} size="sm" />
        <p className="text-sm font-bold text-bark/70">{lifetimeStars} lifetime stars</p>
      </div>
    </motion.article>
  );
}
