import { AnimatePresence, motion } from 'framer-motion';
import ProfileSelect from './routes/ProfileSelect';
import Game from './routes/Game';
import RoundSummary from './routes/RoundSummary';
import JungleBackground from './components/JungleBackground';
import { useProfileStore } from './state/profileStore';

export default function App() {
  const screen = useProfileStore((state) => state.screen);

  return (
    <main className="relative min-h-screen overflow-hidden bg-cream font-body text-bark">
      <JungleBackground />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="flex min-h-[calc(100vh-3rem)] flex-1"
          >
            {screen === 'profiles' && <ProfileSelect />}
            {screen === 'game' && <Game />}
            {screen === 'summary' && <RoundSummary />}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
