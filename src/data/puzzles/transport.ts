import { Puzzle } from './schema';

export const transportPuzzles: Puzzle[] = [
  // VEHICLES (hard)
  { id: 'vehic-001', items: ['bicycle', 'car', 'train', 'airplane'], answer: 'VEHICLES', difficulty: 'hard' },
  { id: 'vehic-002', items: ['truck', 'bus', 'van', 'taxi'], answer: 'VEHICLES', difficulty: 'hard' },
  { id: 'vehic-003', items: ['motorcycle', 'scooter', 'moped', 'segway'], answer: 'VEHICLES', difficulty: 'hard' },
  { id: 'vehic-004', items: ['ambulance', 'fire truck', 'police car', 'tow truck'], answer: 'VEHICLES', difficulty: 'hard' },
  { id: 'vehic-005', items: ['tractor', 'bulldozer', 'forklift', 'excavator'], answer: 'VEHICLES', difficulty: 'hard' },
  { id: 'vehic-006', items: ['minivan', 'SUV', 'sedan', 'convertible'], answer: 'VEHICLES', difficulty: 'hard' },
  { id: 'vehic-007', items: ['skateboard', 'rollerblade', 'unicycle', 'tricycle'], answer: 'VEHICLES', difficulty: 'hard' },
  { id: 'vehic-008', items: ['car', 'truck', 'bus', 'motorcycle'], answer: 'VEHICLES', difficulty: 'hard' },

  // BOATS (easy)
  { id: 'boats-001', items: ['canoe', 'kayak', 'rowboat', 'raft'], answer: 'BOATS', difficulty: 'easy' },
  { id: 'boats-002', items: ['sailboat', 'yacht', 'speedboat', 'cruise ship'], answer: 'BOATS', difficulty: 'easy' },
  { id: 'boats-003', items: ['ferry', 'tugboat', 'barge', 'houseboat'], answer: 'BOATS', difficulty: 'easy' },
  { id: 'boats-004', items: ['submarine', 'aircraft carrier', 'battleship', 'destroyer'], answer: 'BOATS', difficulty: 'easy' },
  { id: 'boats-005', items: ['gondola', 'dinghy', 'schooner', 'galleon'], answer: 'BOATS', difficulty: 'easy' },
  { id: 'boats-006', items: ['fishing boat', 'pontoon', 'jet ski', 'pirate ship'], answer: 'BOATS', difficulty: 'easy' },

  // AIRCRAFT (hard)
  { id: 'aircraft-001', items: ['airplane', 'helicopter', 'jet', 'glider'], answer: 'AIRCRAFT', difficulty: 'hard' },
  { id: 'aircraft-002', items: ['hot air balloon', 'blimp', 'zeppelin', 'dirigible'], answer: 'AIRCRAFT', difficulty: 'hard' },
  { id: 'aircraft-003', items: ['biplane', 'seaplane', 'fighter jet', 'cargo plane'], answer: 'AIRCRAFT', difficulty: 'hard' },
  { id: 'aircraft-004', items: ['drone', 'glider', 'helicopter', 'jet'], answer: 'AIRCRAFT', difficulty: 'hard' },

  // TRAINS (easy)
  { id: 'trains-001', items: ['subway', 'monorail', 'bullet train', 'freight'], answer: 'TRAINS', difficulty: 'easy' },
  { id: 'trains-002', items: ['locomotive', 'caboose', 'box car', 'tanker'], answer: 'TRAINS', difficulty: 'easy' },
  { id: 'trains-003', items: ['steam', 'diesel', 'electric', 'maglev'], answer: 'TRAINS', difficulty: 'easy' },
  { id: 'trains-004', items: ['Amtrak', 'subway', 'metro', 'commuter rail'], answer: 'TRAINS', difficulty: 'easy' },

  // BIKES (easy)
  { id: 'bikes-001', items: ['mountain', 'road', 'BMX', 'tandem'], answer: 'BIKES', difficulty: 'easy' },
  { id: 'bikes-002', items: ['tricycle', 'unicycle', 'bicycle', 'recumbent'], answer: 'BIKES', difficulty: 'easy' },
  { id: 'bikes-003', items: ['cruiser', 'electric', 'folding', 'fat tire'], answer: 'BIKES', difficulty: 'easy' },

  // CARS (easy)
  { id: 'cars-001', items: ['sedan', 'coupe', 'hatchback', 'wagon'], answer: 'CARS', difficulty: 'easy' },
  { id: 'cars-002', items: ['Toyota', 'Honda', 'Ford', 'BMW'], answer: 'CARS', difficulty: 'easy' },
  { id: 'cars-003', items: ['convertible', 'limousine', 'pickup truck', 'jeep'], answer: 'CARS', difficulty: 'easy' },
  { id: 'cars-004', items: ['Tesla', 'Mercedes', 'Audi', 'Lexus'], answer: 'CARS', difficulty: 'easy' }
];
