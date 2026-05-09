import { motion } from 'framer-motion';

const rows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

interface OnScreenKeyboardProps {
  allowedLetters: Set<string> | null;
  lockedLetters: Set<string>;
  onLetter: (letter: string) => void;
  onBackspace: () => void;
  onSubmit: () => void;
  canSubmit: boolean;
  disabled?: boolean;
}

export default function OnScreenKeyboard({
  allowedLetters,
  lockedLetters,
  onLetter,
  onBackspace,
  onSubmit,
  canSubmit,
  disabled = false
}: OnScreenKeyboardProps) {
  const isDimmed = (letter: string) => allowedLetters !== null && !allowedLetters.has(letter);

  return (
    <div className="mx-auto w-full max-w-4xl select-none space-y-2 pt-2" aria-label="On screen keyboard">
      {rows.map((row, rowIndex) => (
        <div key={row} className="flex justify-center gap-1.5 sm:gap-2">
          {rowIndex === 2 && (
            <KeyboardButton label="⌫" wide onClick={onBackspace} disabled={disabled} ariaLabel="Backspace" />
          )}
          {row.split('').map((letter) => {
            const dimmed = isDimmed(letter);
            const locked = lockedLetters.has(letter);
            return (
              <KeyboardButton
                key={letter}
                label={letter}
                onClick={() => onLetter(letter)}
                disabled={disabled || dimmed}
                dimmed={dimmed}
                locked={locked}
              />
            );
          })}
          {rowIndex === 2 && (
            <KeyboardButton label="Enter" wide onClick={onSubmit} disabled={disabled || !canSubmit} ariaLabel="Submit answer" />
          )}
        </div>
      ))}
    </div>
  );
}

interface KeyboardButtonProps {
  label: string;
  onClick: () => void;
  wide?: boolean;
  dimmed?: boolean;
  locked?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}

function KeyboardButton({ label, onClick, wide, dimmed, locked, disabled, ariaLabel }: KeyboardButtonProps) {
  return (
    <motion.button
      type="button"
      whileTap={!disabled ? { scale: 0.93 } : undefined}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel ?? label}
      className={`min-h-[44px] rounded-2xl border px-2 text-base font-extrabold shadow-sm transition sm:min-h-[54px] sm:text-xl ${
        wide ? 'min-w-[64px] sm:min-w-[92px]' : 'min-w-[32px] flex-1 sm:min-w-[48px] sm:flex-none'
      } ${
        locked
          ? 'border-locked bg-locked text-white'
          : dimmed
            ? 'border-slate-300 bg-slate-200/70 text-slate-400'
            : 'border-leaf/25 bg-white/80 text-canopy active:bg-gold/35'
      } disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {label}
    </motion.button>
  );
}
