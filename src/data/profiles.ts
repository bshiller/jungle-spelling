export interface ProfileDefinition {
  id: string;
  name: string;
  ageTag: string;
  role?: string;
  avatars: string[];
}

export const profiles: ProfileDefinition[] = [
  { id: 'ethan', name: 'Ethan', ageTag: 'age 7', avatars: ['🐯', '🐵', '🦜', '🦥'] },
  { id: 'everett', name: 'Everett', ageTag: 'age 9', avatars: ['🦁', '🦎', '🐸', '🦋'] },
  { id: 'lukas', name: 'Lukas', ageTag: 'age 11', avatars: ['🐆', '🦅', '🐍', '🦍'] },
  { id: 'ben', name: 'Ben', ageTag: 'dad', avatars: ['🦉', '🐘', '🦧', '🦥'] },
  { id: 'laurie', name: 'Laurie', ageTag: 'mom', avatars: ['🦋', '🌺', '🐦', '🐢'] }
];

export function getProfileDefinition(id: string) {
  return profiles.find((profile) => profile.id === id);
}
