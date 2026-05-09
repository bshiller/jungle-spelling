const PROFILE_KEY_PREFIX = 'jungle:profile:';
const MUTED_KEY = 'jungle:muted';

export interface PersistedProfile {
  avatar: string;
  lifetimeStars: number;
  recentSolveTimes: number[];
  timerBaseTarget: number;
}

export const DEFAULT_TIMER_BASE = 90;
export const MIN_TIMER_BASE = 45;
export const MAX_TIMER_BASE = 150;

export function clamp(value: number, min = MIN_TIMER_BASE, max = MAX_TIMER_BASE) {
  return Math.min(max, Math.max(min, value));
}

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function profileDefaults(avatar: string): PersistedProfile {
  return {
    avatar,
    lifetimeStars: 0,
    recentSolveTimes: [],
    timerBaseTarget: DEFAULT_TIMER_BASE
  };
}

export function profileStorageKey(profileId: string) {
  return `${PROFILE_KEY_PREFIX}${profileId}`;
}

export function readProfile(profileId: string, fallbackAvatar: string): PersistedProfile {
  if (!canUseStorage()) return profileDefaults(fallbackAvatar);

  const raw = window.localStorage.getItem(profileStorageKey(profileId));
  if (!raw) return profileDefaults(fallbackAvatar);

  try {
    const parsed = JSON.parse(raw) as Partial<PersistedProfile>;
    return {
      avatar: typeof parsed.avatar === 'string' ? parsed.avatar : fallbackAvatar,
      lifetimeStars: Number.isFinite(parsed.lifetimeStars) ? Number(parsed.lifetimeStars) : 0,
      recentSolveTimes: Array.isArray(parsed.recentSolveTimes)
        ? parsed.recentSolveTimes.filter((time) => Number.isFinite(time)).slice(-10)
        : [],
      timerBaseTarget: Number.isFinite(parsed.timerBaseTarget) ? clamp(Number(parsed.timerBaseTarget)) : DEFAULT_TIMER_BASE
    };
  } catch {
    return profileDefaults(fallbackAvatar);
  }
}

export function writeProfile(profileId: string, profile: PersistedProfile) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(profileStorageKey(profileId), JSON.stringify(profile));
}

export function resetProfile(profileId: string, fallbackAvatar: string) {
  const fresh = profileDefaults(fallbackAvatar);
  writeProfile(profileId, fresh);
  return fresh;
}

export function readMuted() {
  if (!canUseStorage()) return true;
  const raw = window.localStorage.getItem(MUTED_KEY);
  return raw === null ? true : raw === 'true';
}

export function writeMuted(muted: boolean) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(MUTED_KEY, String(muted));
}
