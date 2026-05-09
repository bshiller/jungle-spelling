import { create } from 'zustand';
import { profiles } from '../data/profiles';
import { Puzzle, difficultyMods } from '../data/puzzles';
import { SessionMemory, selectRound } from './puzzleSelection';
import {
  clamp,
  PersistedProfile,
  profileDefaults,
  readMuted,
  readProfile,
  resetProfile,
  writeMuted,
  writeProfile
} from './storage';
import { setSfxMuted } from '../audio/sfx';

export interface PuzzleResult {
  puzzleId: string;
  answer: string;
  solved: boolean;
  attemptsUsed: number;
  stars: number;
  seconds: number;
}

type Screen = 'profiles' | 'game' | 'summary';

interface ProfileStoreState {
  screen: Screen;
  activeProfileId: string | null;
  profilesById: Record<string, PersistedProfile>;
  muted: boolean;
  sessions: Record<string, SessionMemory>;
  round: Puzzle[];
  puzzleIndex: number;
  roundResults: PuzzleResult[];
  selectProfile: (profileId: string) => void;
  backToProfiles: () => void;
  beginRound: () => void;
  completePuzzle: (result: PuzzleResult) => void;
  playAgain: () => void;
  resetProfileProgress: (profileId: string) => void;
  cycleAvatar: (profileId: string) => void;
  setMuted: (muted: boolean) => void;
  getProfileTarget: (profileId: string, puzzle: Puzzle) => number;
}

function buildInitialProfiles() {
  return Object.fromEntries(
    profiles.map((profile) => [profile.id, readProfile(profile.id, profile.avatars[0])])
  ) as Record<string, PersistedProfile>;
}

function getSession(sessions: Record<string, SessionMemory>, profileId: string) {
  if (!sessions[profileId]) {
    sessions[profileId] = { missedPool: [], playedThisSession: new Set<string>() };
  }
  return sessions[profileId];
}

function adaptTimer(profile: PersistedProfile, seconds: number) {
  const recentSolveTimes = [...profile.recentSolveTimes, seconds].slice(-10);
  let timerBaseTarget = profile.timerBaseTarget;

  if (recentSolveTimes.length >= 5) {
    const average = recentSolveTimes.reduce((sum, time) => sum + time, 0) / recentSolveTimes.length;
    if (average < 0.6 * timerBaseTarget) timerBaseTarget = clamp(timerBaseTarget - 10);
    if (average > 1.2 * timerBaseTarget) timerBaseTarget = clamp(timerBaseTarget + 10);
  }

  return { recentSolveTimes, timerBaseTarget };
}

const initialMuted = readMuted();
setSfxMuted(initialMuted);

export const useProfileStore = create<ProfileStoreState>((set, get) => ({
  screen: 'profiles',
  activeProfileId: null,
  profilesById: buildInitialProfiles(),
  muted: initialMuted,
  sessions: {},
  round: [],
  puzzleIndex: 0,
  roundResults: [],

  selectProfile: (profileId) => {
    set({ activeProfileId: profileId, screen: 'game' });
    get().beginRound();
  },

  backToProfiles: () => set({ activeProfileId: null, screen: 'profiles', round: [], puzzleIndex: 0, roundResults: [] }),

  beginRound: () => {
    const { activeProfileId, sessions } = get();
    if (!activeProfileId) return;
    const session = getSession(sessions, activeProfileId);
    const round = selectRound(session);
    set({ sessions: { ...sessions, [activeProfileId]: session }, round, puzzleIndex: 0, roundResults: [], screen: 'game' });
  },

  completePuzzle: (result) => {
    const { activeProfileId, profilesById, sessions, puzzleIndex, round, roundResults } = get();
    if (!activeProfileId) return;

    const profile = profilesById[activeProfileId];
    const session = getSession(sessions, activeProfileId);
    const wasMissed = !result.solved || result.attemptsUsed >= 3;

    if (wasMissed) {
      if (!session.missedPool.includes(result.puzzleId)) session.missedPool.push(result.puzzleId);
    } else {
      session.missedPool = session.missedPool.filter((id) => id !== result.puzzleId);
    }

    const timerUpdate = result.solved ? adaptTimer(profile, result.seconds) : {};
    const nextProfile = {
      ...profile,
      lifetimeStars: profile.lifetimeStars + result.stars,
      ...timerUpdate
    };

    writeProfile(activeProfileId, nextProfile);

    const nextResults = [...roundResults, result];
    const isRoundDone = puzzleIndex >= round.length - 1;

    set({
      profilesById: { ...profilesById, [activeProfileId]: nextProfile },
      sessions: { ...sessions, [activeProfileId]: session },
      roundResults: nextResults,
      puzzleIndex: isRoundDone ? puzzleIndex : puzzleIndex + 1,
      screen: isRoundDone ? 'summary' : 'game'
    });
  },

  playAgain: () => get().beginRound(),

  resetProfileProgress: (profileId) => {
    const profileDefinition = profiles.find((profile) => profile.id === profileId);
    if (!profileDefinition) return;
    const fresh = resetProfile(profileId, profileDefinition.avatars[0]);
    set((state) => ({
      profilesById: { ...state.profilesById, [profileId]: fresh },
      sessions: { ...state.sessions, [profileId]: { missedPool: [], playedThisSession: new Set<string>() } }
    }));
  },

  cycleAvatar: (profileId) => {
    const profileDefinition = profiles.find((profile) => profile.id === profileId);
    if (!profileDefinition) return;

    set((state) => {
      const current = state.profilesById[profileId] ?? profileDefaults(profileDefinition.avatars[0]);
      const currentIndex = profileDefinition.avatars.indexOf(current.avatar);
      const nextAvatar = profileDefinition.avatars[(currentIndex + 1) % profileDefinition.avatars.length];
      const next = { ...current, avatar: nextAvatar };
      writeProfile(profileId, next);
      return { profilesById: { ...state.profilesById, [profileId]: next } };
    });
  },

  setMuted: (muted) => {
    writeMuted(muted);
    setSfxMuted(muted);
    set({ muted });
  },

  getProfileTarget: (profileId, puzzle) => {
    const profile = get().profilesById[profileId];
    return clamp((profile?.timerBaseTarget ?? 90) + difficultyMods[puzzle.difficulty]);
  }
}));
