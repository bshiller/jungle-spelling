import { motion } from 'framer-motion';

export type SlotStatus = 'pre-revealed' | 'locked-correct' | 'current' | 'pending' | 'empty' | 'wrong' | 'revealed';

export interface AnswerSlotView {
  id: string;
  letter: string | null;
  status: SlotStatus;
}

interface AnswerRowProps {
  slots: AnswerSlotView[];
  shaking?: boolean;
}

function slotClass(status: SlotStatus) {
  switch (status) {
    case 'pre-revealed':
    case 'locked-correct':
      return 'border-locked bg-locked text-white shadow-md';
    case 'pending':
      return 'border-canopy bg-white text-canopy shadow-sm';
    case 'current':
      return 'border-gold bg-gold/15 text-canopy shadow-sm';
    case 'wrong':
      return 'border-coral bg-coral/15 text-coral';
    case 'revealed':
      return 'border-gold bg-gold/25 text-canopy shadow-sm';
    default:
      return 'border-leaf/35 bg-white/45 text-canopy';
  }
}

export default function AnswerRow({ slots, shaking = false }: AnswerRowProps) {
  return (
    <motion.div
      animate={shaking ? { x: [0, -9, 8, -7, 5, 0] } : { x: 0 }}
      transition={{ duration: 0.42 }}
      className="flex flex-wrap justify-center gap-2 sm:gap-3"
      aria-label="Answer slots"
    >
      {slots.map((slot) => (
        <motion.div
          key={slot.id}
          initial={false}
          animate={slot.status === 'current' ? { opacity: [1, 0.55, 1] } : { opacity: 1 }}
          transition={slot.status === 'current' ? { duration: 1.1, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.15 }}
          className={`relative grid h-12 w-10 place-items-center rounded-2xl border-2 font-heading text-2xl font-bold sm:h-16 sm:w-14 sm:text-4xl ${slotClass(slot.status)}`}
        >
          <motion.span
            key={`${slot.id}-${slot.letter ?? 'empty'}`}
            initial={slot.letter ? { scale: 0.72 } : false}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 420, damping: 18 }}
          >
            {slot.letter ?? ''}
          </motion.span>
          {slot.status === 'wrong' && (
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              className="absolute h-1 w-4/5 origin-left rotate-[-10deg] rounded-full bg-coral"
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
