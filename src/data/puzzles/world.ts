import { Puzzle } from './schema';

export const worldPuzzles: Puzzle[] = [
  // CONTINENTS (hard)
  { id: 'cont-001', items: ['Africa', 'Asia', 'Europe', 'Australia'], answer: 'CONTINENTS', difficulty: 'hard' },
  { id: 'cont-002', items: ['North America', 'South America', 'Antarctica', 'Africa'], answer: 'CONTINENTS', difficulty: 'hard' },
  { id: 'cont-003', items: ['Asia', 'Africa', 'Europe', 'North America'], answer: 'CONTINENTS', difficulty: 'hard' },

  // COUNTRIES (hard)
  { id: 'count-001', items: ['France', 'Germany', 'Italy', 'Spain'], answer: 'COUNTRIES', difficulty: 'hard' },
  { id: 'count-002', items: ['China', 'Japan', 'India', 'Korea'], answer: 'COUNTRIES', difficulty: 'hard' },
  { id: 'count-003', items: ['Brazil', 'Argentina', 'Chile', 'Peru'], answer: 'COUNTRIES', difficulty: 'hard' },
  { id: 'count-004', items: ['Egypt', 'Kenya', 'Morocco', 'Nigeria'], answer: 'COUNTRIES', difficulty: 'hard' },
  { id: 'count-005', items: ['Canada', 'Mexico', 'USA', 'Cuba'], answer: 'COUNTRIES', difficulty: 'hard' },
  { id: 'count-006', items: ['Russia', 'Ukraine', 'Poland', 'Greece'], answer: 'COUNTRIES', difficulty: 'hard' },

  // CITIES (medium)
  { id: 'cities-001', items: ['Paris', 'London', 'Rome', 'Berlin'], answer: 'CITIES', difficulty: 'medium' },
  { id: 'cities-002', items: ['Tokyo', 'Beijing', 'Seoul', 'Bangkok'], answer: 'CITIES', difficulty: 'medium' },
  { id: 'cities-003', items: ['New York', 'Chicago', 'Los Angeles', 'Boston'], answer: 'CITIES', difficulty: 'medium' },
  { id: 'cities-004', items: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'], answer: 'CITIES', difficulty: 'medium' },
  { id: 'cities-005', items: ['Cairo', 'Lagos', 'Nairobi', 'Cape Town'], answer: 'CITIES', difficulty: 'medium' },
  { id: 'cities-006', items: ['Mumbai', 'Delhi', 'Bangalore', 'Kolkata'], answer: 'CITIES', difficulty: 'medium' },

  // STATES (medium)
  { id: 'states-001', items: ['Texas', 'California', 'Florida', 'New York'], answer: 'STATES', difficulty: 'medium' },
  { id: 'states-002', items: ['Massachusetts', 'Vermont', 'Maine', 'New Hampshire'], answer: 'STATES', difficulty: 'medium' },
  { id: 'states-003', items: ['Ohio', 'Michigan', 'Indiana', 'Illinois'], answer: 'STATES', difficulty: 'medium' },
  { id: 'states-004', items: ['Hawaii', 'Alaska', 'Washington', 'Oregon'], answer: 'STATES', difficulty: 'medium' },
  { id: 'states-005', items: ['Georgia', 'Alabama', 'Mississippi', 'Louisiana'], answer: 'STATES', difficulty: 'medium' },

  // CAPITALS (medium)
  { id: 'caps-001', items: ['Paris', 'Madrid', 'Rome', 'Berlin'], answer: 'CAPITALS', difficulty: 'medium' },
  { id: 'caps-002', items: ['Washington DC', 'Ottawa', 'Mexico City', 'Brasilia'], answer: 'CAPITALS', difficulty: 'medium' },
  { id: 'caps-003', items: ['Tokyo', 'Beijing', 'New Delhi', 'Seoul'], answer: 'CAPITALS', difficulty: 'medium' },

  // LANGUAGES (medium)
  { id: 'lang-001', items: ['English', 'Spanish', 'French', 'German'], answer: 'LANGUAGES', difficulty: 'medium' },
  { id: 'lang-002', items: ['Mandarin', 'Japanese', 'Korean', 'Vietnamese'], answer: 'LANGUAGES', difficulty: 'medium' },
  { id: 'lang-003', items: ['Arabic', 'Hebrew', 'Persian', 'Turkish'], answer: 'LANGUAGES', difficulty: 'medium' },
  { id: 'lang-004', items: ['Italian', 'Portuguese', 'Dutch', 'Swedish'], answer: 'LANGUAGES', difficulty: 'medium' },
  { id: 'lang-005', items: ['Hindi', 'Bengali', 'Tamil', 'Urdu'], answer: 'LANGUAGES', difficulty: 'medium' },

  // CURRENCIES (hard)
  { id: 'curr-001', items: ['dollar', 'euro', 'pound', 'yen'], answer: 'CURRENCIES', difficulty: 'hard' },
  { id: 'curr-002', items: ['peso', 'rupee', 'ruble', 'won'], answer: 'CURRENCIES', difficulty: 'hard' },
  { id: 'curr-003', items: ['franc', 'lira', 'krona', 'real'], answer: 'CURRENCIES', difficulty: 'hard' },
  { id: 'curr-004', items: ['dollar', 'pound', 'euro', 'peso'], answer: 'CURRENCIES', difficulty: 'hard' },

  // DAYS (easy)
  { id: 'days-001', items: ['Monday', 'Tuesday', 'Wednesday', 'Friday'], answer: 'DAYS', difficulty: 'easy' },
  { id: 'days-002', items: ['Saturday', 'Sunday', 'Monday', 'Friday'], answer: 'DAYS', difficulty: 'easy' },
  { id: 'days-003', items: ['Thursday', 'Friday', 'Saturday', 'Sunday'], answer: 'DAYS', difficulty: 'easy' },

  // MONTHS (medium)
  { id: 'months-001', items: ['January', 'March', 'July', 'October'], answer: 'MONTHS', difficulty: 'medium' },
  { id: 'months-002', items: ['February', 'April', 'June', 'September'], answer: 'MONTHS', difficulty: 'medium' },
  { id: 'months-003', items: ['May', 'August', 'November', 'December'], answer: 'MONTHS', difficulty: 'medium' },
  { id: 'months-004', items: ['January', 'February', 'March', 'April'], answer: 'MONTHS', difficulty: 'medium' },
  { id: 'months-005', items: ['June', 'July', 'August', 'September'], answer: 'MONTHS', difficulty: 'medium' },

  // HOLIDAYS (medium)
  { id: 'hols-001', items: ['Christmas', 'Easter', 'Thanksgiving', 'Halloween'], answer: 'HOLIDAYS', difficulty: 'medium' },
  { id: 'hols-002', items: ['Hanukkah', 'Passover', 'Yom Kippur', 'Rosh Hashanah'], answer: 'HOLIDAYS', difficulty: 'medium' },
  { id: 'hols-003', items: ['Diwali', 'Holi', 'Eid', 'Ramadan'], answer: 'HOLIDAYS', difficulty: 'medium' },
  { id: 'hols-004', items: ['New Year', 'Valentine\'s Day', 'Mother\'s Day', 'Father\'s Day'], answer: 'HOLIDAYS', difficulty: 'medium' },
  { id: 'hols-005', items: ['Independence Day', 'Memorial Day', 'Labor Day', 'Veterans Day'], answer: 'HOLIDAYS', difficulty: 'medium' },

  // DIRECTIONS (hard)
  { id: 'dirs-001', items: ['north', 'south', 'east', 'west'], answer: 'DIRECTIONS', difficulty: 'hard' },
  { id: 'dirs-002', items: ['up', 'down', 'left', 'right'], answer: 'DIRECTIONS', difficulty: 'hard' },
  { id: 'dirs-003', items: ['northeast', 'northwest', 'southeast', 'southwest'], answer: 'DIRECTIONS', difficulty: 'hard' },
  { id: 'dirs-004', items: ['forward', 'backward', 'sideways', 'diagonal'], answer: 'DIRECTIONS', difficulty: 'hard' },

  // CAREERS (easy)
  { id: 'careers-001', items: ['doctor', 'teacher', 'firefighter', 'chef'], answer: 'CAREERS', difficulty: 'easy' },
  { id: 'careers-002', items: ['lawyer', 'engineer', 'architect', 'accountant'], answer: 'CAREERS', difficulty: 'easy' },
  { id: 'careers-003', items: ['nurse', 'dentist', 'veterinarian', 'pharmacist'], answer: 'CAREERS', difficulty: 'easy' },
  { id: 'careers-004', items: ['artist', 'musician', 'writer', 'actor'], answer: 'CAREERS', difficulty: 'easy' },
  { id: 'careers-005', items: ['pilot', 'astronaut', 'scientist', 'researcher'], answer: 'CAREERS', difficulty: 'easy' },
  { id: 'careers-006', items: ['carpenter', 'plumber', 'electrician', 'mechanic'], answer: 'CAREERS', difficulty: 'easy' },
  { id: 'careers-007', items: ['farmer', 'baker', 'butcher', 'tailor'], answer: 'CAREERS', difficulty: 'easy' },
  { id: 'careers-008', items: ['police officer', 'firefighter', 'paramedic', 'soldier'], answer: 'CAREERS', difficulty: 'easy' },

  // BUILDINGS (hard)
  { id: 'bldgs-001', items: ['house', 'apartment', 'mansion', 'cabin'], answer: 'BUILDINGS', difficulty: 'hard' },
  { id: 'bldgs-002', items: ['skyscraper', 'tower', 'castle', 'palace'], answer: 'BUILDINGS', difficulty: 'hard' },
  { id: 'bldgs-003', items: ['church', 'temple', 'mosque', 'synagogue'], answer: 'BUILDINGS', difficulty: 'hard' },
  { id: 'bldgs-004', items: ['hospital', 'school', 'library', 'museum'], answer: 'BUILDINGS', difficulty: 'hard' },
  { id: 'bldgs-005', items: ['barn', 'shed', 'silo', 'greenhouse'], answer: 'BUILDINGS', difficulty: 'hard' }
];
