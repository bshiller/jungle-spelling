import { motion } from 'framer-motion';

interface StarDisplayProps {
  stars: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const sizeClasses = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-4xl'
};

export default function StarDisplay({ stars, max = 3, size = 'md', animate = false }: StarDisplayProps) {
  return (
    <div className={`flex items-center gap-1 ${sizeClasses[size]}`} aria-label={`${stars} of ${max} stars`}>
      {Array.from({ length: max }, (_, index) => {
        const filled = index < stars;
        return (
          <motion.span
            key={index}
            initial={animate ? { scale: 0, rotate: -25 } : false}
            animate={animate ? { scale: 1, rotate: 0 } : undefined}
            transition={{ delay: index * 0.08, type: 'spring', stiffness: 340, damping: 18 }}
            className={filled ? 'drop-shadow-sm' : 'opacity-25 grayscale'}
          >
            ⭐
          </motion.span>
        );
      })}
    </div>
  );
}
