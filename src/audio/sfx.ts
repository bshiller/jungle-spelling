let muted = true;
let ctx: AudioContext | null = null;

function getCtx() {
  if (typeof window === 'undefined') return null;
  if (!ctx) {
    ctx = new AudioContext();
  }
  return ctx;
}

async function resume() {
  const audio = getCtx();
  if (!audio) return null;
  if (audio.state === 'suspended') {
    await audio.resume();
  }
  return audio;
}

function scheduleTone(audio: AudioContext, type: OscillatorType, frequency: number, start: number, duration: number, gain = 0.035) {
  const oscillator = audio.createOscillator();
  const volume = audio.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  volume.gain.setValueAtTime(0.0001, start);
  volume.gain.exponentialRampToValueAtTime(gain, start + 0.015);
  volume.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(volume).connect(audio.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

async function playTone(type: OscillatorType, frequency: number, duration: number, gain = 0.035) {
  if (muted) return;
  const audio = await resume();
  if (!audio) return;
  scheduleTone(audio, type, frequency, audio.currentTime, duration, gain);
}

export function setSfxMuted(nextMuted: boolean) {
  muted = nextMuted;
}

export const sfx = {
  tap: () => playTone('sine', 720, 0.05, 0.018),
  wrong: () => playTone('triangle', 180, 0.16, 0.045),
  correct: async () => {
    if (muted) return;
    const audio = await resume();
    if (!audio) return;
    const start = audio.currentTime;
    scheduleTone(audio, 'sine', 523.25, start, 0.42, 0.035);
    scheduleTone(audio, 'sine', 659.25, start + 0.06, 0.42, 0.03);
    scheduleTone(audio, 'sine', 783.99, start + 0.12, 0.38, 0.026);
  },
  star: async () => {
    if (muted) return;
    const audio = await resume();
    if (!audio) return;
    const start = audio.currentTime;
    scheduleTone(audio, 'triangle', 1318.51, start, 0.12, 0.025);
    scheduleTone(audio, 'triangle', 1760, start + 0.1, 0.14, 0.025);
  },
  reveal: async () => {
    if (muted) return;
    const audio = await resume();
    if (!audio) return;
    const start = audio.currentTime;
    scheduleTone(audio, 'sine', 523.25, start, 0.16, 0.03);
    scheduleTone(audio, 'sine', 440, start + 0.13, 0.18, 0.028);
    scheduleTone(audio, 'sine', 349.23, start + 0.27, 0.22, 0.026);
  }
};
