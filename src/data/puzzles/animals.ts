import { Puzzle } from './schema';

export const animalPuzzles: Puzzle[] = [
  // PETS (easy)
  { id: 'pets-001', items: ['poodle', 'tabby', 'goldfish', 'parakeet'], answer: 'PETS', difficulty: 'easy' },
  { id: 'pets-002', items: ['hamster', 'guinea pig', 'rabbit', 'gerbil'], answer: 'PETS', difficulty: 'easy' },
  { id: 'pets-003', items: ['dog', 'cat', 'fish', 'bird'], answer: 'PETS', difficulty: 'easy' },
  { id: 'pets-004', items: ['turtle', 'lizard', 'snake', 'iguana'], answer: 'PETS', difficulty: 'easy' },
  { id: 'pets-005', items: ['ferret', 'chinchilla', 'rat', 'mouse'], answer: 'PETS', difficulty: 'easy' },
  { id: 'pets-006', items: ['canary', 'cockatiel', 'parrot', 'finch'], answer: 'PETS', difficulty: 'easy' },
  { id: 'pets-007', items: ['kitten', 'puppy', 'bunny', 'chick'], answer: 'PETS', difficulty: 'easy' },
  { id: 'pets-008', items: ['hermit crab', 'gecko', 'frog', 'fish'], answer: 'PETS', difficulty: 'easy' },

  // DOGS (easy)
  { id: 'dogs-001', items: ['poodle', 'beagle', 'bulldog', 'labrador'], answer: 'DOGS', difficulty: 'easy' },
  { id: 'dogs-002', items: ['dachshund', 'corgi', 'husky', 'collie'], answer: 'DOGS', difficulty: 'easy' },
  { id: 'dogs-003', items: ['retriever', 'shepherd', 'terrier', 'spaniel'], answer: 'DOGS', difficulty: 'easy' },
  { id: 'dogs-004', items: ['chihuahua', 'pug', 'pomeranian', 'maltese'], answer: 'DOGS', difficulty: 'easy' },
  { id: 'dogs-005', items: ['boxer', 'rottweiler', 'doberman', 'mastiff'], answer: 'DOGS', difficulty: 'easy' },

  // CATS (easy)
  { id: 'cats-001', items: ['Persian', 'Siamese', 'Maine Coon', 'tabby'], answer: 'CATS', difficulty: 'easy' },
  { id: 'cats-002', items: ['Ragdoll', 'Bengal', 'Sphynx', 'Birman'], answer: 'CATS', difficulty: 'easy' },
  { id: 'cats-003', items: ['British Shorthair', 'Russian Blue', 'Burmese', 'Abyssinian'], answer: 'CATS', difficulty: 'easy' },
  { id: 'cats-004', items: ['Munchkin', 'Scottish Fold', 'Manx', 'Calico'], answer: 'CATS', difficulty: 'easy' },

  // BIRDS (medium)
  { id: 'birds-001', items: ['eagle', 'owl', 'sparrow', 'robin'], answer: 'BIRDS', difficulty: 'medium' },
  { id: 'birds-002', items: ['hawk', 'falcon', 'vulture', 'condor'], answer: 'BIRDS', difficulty: 'medium' },
  { id: 'birds-003', items: ['penguin', 'flamingo', 'pelican', 'stork'], answer: 'BIRDS', difficulty: 'medium' },
  { id: 'birds-004', items: ['parrot', 'toucan', 'macaw', 'cockatoo'], answer: 'BIRDS', difficulty: 'medium' },
  { id: 'birds-005', items: ['cardinal', 'bluejay', 'finch', 'wren'], answer: 'BIRDS', difficulty: 'medium' },
  { id: 'birds-006', items: ['ostrich', 'emu', 'kiwi', 'cassowary'], answer: 'BIRDS', difficulty: 'medium' },
  { id: 'birds-007', items: ['hummingbird', 'woodpecker', 'kingfisher', 'swallow'], answer: 'BIRDS', difficulty: 'medium' },
  { id: 'birds-008', items: ['duck', 'goose', 'swan', 'heron'], answer: 'BIRDS', difficulty: 'medium' },
  { id: 'birds-009', items: ['crow', 'raven', 'magpie', 'starling'], answer: 'BIRDS', difficulty: 'medium' },
  { id: 'birds-010', items: ['owl', 'eagle', 'hawk', 'falcon'], answer: 'BIRDS', difficulty: 'medium' },

  // FISH (easy)
  { id: 'fish-001', items: ['salmon', 'tuna', 'trout', 'bass'], answer: 'FISH', difficulty: 'easy' },
  { id: 'fish-002', items: ['goldfish', 'guppy', 'angelfish', 'tetra'], answer: 'FISH', difficulty: 'easy' },
  { id: 'fish-003', items: ['cod', 'haddock', 'snapper', 'mackerel'], answer: 'FISH', difficulty: 'easy' },
  { id: 'fish-004', items: ['catfish', 'pike', 'perch', 'walleye'], answer: 'FISH', difficulty: 'easy' },
  { id: 'fish-005', items: ['betta', 'molly', 'platy', 'tetra'], answer: 'FISH', difficulty: 'easy' },

  // SHARKS (medium)
  { id: 'sharks-001', items: ['great white', 'hammerhead', 'tiger', 'bull'], answer: 'SHARKS', difficulty: 'medium' },
  { id: 'sharks-002', items: ['nurse', 'lemon', 'mako', 'thresher'], answer: 'SHARKS', difficulty: 'medium' },
  { id: 'sharks-003', items: ['whale', 'basking', 'goblin', 'angel'], answer: 'SHARKS', difficulty: 'medium' },
  { id: 'sharks-004', items: ['hammerhead', 'great white', 'tiger', 'mako'], answer: 'SHARKS', difficulty: 'medium' },

  // WHALES (medium)
  { id: 'whales-001', items: ['blue', 'humpback', 'killer', 'sperm'], answer: 'WHALES', difficulty: 'medium' },
  { id: 'whales-002', items: ['beluga', 'narwhal', 'orca', 'minke'], answer: 'WHALES', difficulty: 'medium' },
  { id: 'whales-003', items: ['fin', 'right', 'gray', 'bowhead'], answer: 'WHALES', difficulty: 'medium' },
  { id: 'whales-004', items: ['humpback', 'blue', 'killer', 'beluga'], answer: 'WHALES', difficulty: 'medium' },

  // INSECTS (medium)
  { id: 'insects-001', items: ['bee', 'ant', 'beetle', 'butterfly'], answer: 'INSECTS', difficulty: 'medium' },
  { id: 'insects-002', items: ['fly', 'mosquito', 'dragonfly', 'wasp'], answer: 'INSECTS', difficulty: 'medium' },
  { id: 'insects-003', items: ['ladybug', 'cricket', 'grasshopper', 'cockroach'], answer: 'INSECTS', difficulty: 'medium' },
  { id: 'insects-004', items: ['moth', 'butterfly', 'caterpillar', 'firefly'], answer: 'INSECTS', difficulty: 'medium' },
  { id: 'insects-005', items: ['termite', 'flea', 'aphid', 'gnat'], answer: 'INSECTS', difficulty: 'medium' },
  { id: 'insects-006', items: ['praying mantis', 'walking stick', 'cicada', 'mayfly'], answer: 'INSECTS', difficulty: 'medium' },
  { id: 'insects-007', items: ['bee', 'wasp', 'hornet', 'yellowjacket'], answer: 'INSECTS', difficulty: 'medium' },
  { id: 'insects-008', items: ['ant', 'beetle', 'cricket', 'fly'], answer: 'INSECTS', difficulty: 'medium' },

  // REPTILES (medium)
  { id: 'reptiles-001', items: ['snake', 'lizard', 'turtle', 'crocodile'], answer: 'REPTILES', difficulty: 'medium' },
  { id: 'reptiles-002', items: ['alligator', 'iguana', 'gecko', 'chameleon'], answer: 'REPTILES', difficulty: 'medium' },
  { id: 'reptiles-003', items: ['python', 'cobra', 'rattlesnake', 'viper'], answer: 'REPTILES', difficulty: 'medium' },
  { id: 'reptiles-004', items: ['tortoise', 'gecko', 'skink', 'monitor'], answer: 'REPTILES', difficulty: 'medium' },
  { id: 'reptiles-005', items: ['komodo dragon', 'gila monster', 'bearded dragon', 'tegu'], answer: 'REPTILES', difficulty: 'medium' },
  { id: 'reptiles-006', items: ['boa', 'mamba', 'anaconda', 'kingsnake'], answer: 'REPTILES', difficulty: 'medium' },

  // AMPHIBIANS (hard)
  { id: 'amph-001', items: ['frog', 'toad', 'salamander', 'newt'], answer: 'AMPHIBIANS', difficulty: 'hard' },
  { id: 'amph-002', items: ['bullfrog', 'tree frog', 'leopard frog', 'poison dart frog'], answer: 'AMPHIBIANS', difficulty: 'hard' },
  { id: 'amph-003', items: ['axolotl', 'caecilian', 'mudpuppy', 'salamander'], answer: 'AMPHIBIANS', difficulty: 'hard' },
  { id: 'amph-004', items: ['frog', 'newt', 'toad', 'salamander'], answer: 'AMPHIBIANS', difficulty: 'hard' },

  // MAMMALS (hard)
  { id: 'mamm-001', items: ['lion', 'tiger', 'bear', 'wolf'], answer: 'MAMMALS', difficulty: 'hard' },
  { id: 'mamm-002', items: ['elephant', 'rhino', 'hippo', 'giraffe'], answer: 'MAMMALS', difficulty: 'hard' },
  { id: 'mamm-003', items: ['bat', 'mouse', 'squirrel', 'rabbit'], answer: 'MAMMALS', difficulty: 'hard' },
  { id: 'mamm-004', items: ['kangaroo', 'koala', 'platypus', 'wombat'], answer: 'MAMMALS', difficulty: 'hard' },
  { id: 'mamm-005', items: ['monkey', 'gorilla', 'chimp', 'orangutan'], answer: 'MAMMALS', difficulty: 'hard' },
  { id: 'mamm-006', items: ['deer', 'moose', 'elk', 'caribou'], answer: 'MAMMALS', difficulty: 'hard' },

  // DINOSAURS (hard)
  { id: 'dinos-001', items: ['T-rex', 'velociraptor', 'triceratops', 'stegosaurus'], answer: 'DINOSAURS', difficulty: 'hard' },
  { id: 'dinos-002', items: ['brontosaurus', 'diplodocus', 'brachiosaurus', 'apatosaurus'], answer: 'DINOSAURS', difficulty: 'hard' },
  { id: 'dinos-003', items: ['allosaurus', 'spinosaurus', 'carnotaurus', 'giganotosaurus'], answer: 'DINOSAURS', difficulty: 'hard' },
  { id: 'dinos-004', items: ['ankylosaurus', 'iguanodon', 'parasaurolophus', 'corythosaurus'], answer: 'DINOSAURS', difficulty: 'hard' },
  { id: 'dinos-005', items: ['pterodactyl', 'pteranodon', 'quetzalcoatlus', 'rhamphorhynchus'], answer: 'DINOSAURS', difficulty: 'hard' },
  { id: 'dinos-006', items: ['T-rex', 'stegosaurus', 'triceratops', 'velociraptor'], answer: 'DINOSAURS', difficulty: 'hard' },
  { id: 'dinos-007', items: ['raptor', 'ankylosaur', 'spinosaur', 'allosaur'], answer: 'DINOSAURS', difficulty: 'hard' },
  { id: 'dinos-008', items: ['brachiosaurus', 'diplodocus', 'apatosaurus', 'brontosaurus'], answer: 'DINOSAURS', difficulty: 'hard' },

  // RODENTS (medium)
  { id: 'rodents-001', items: ['mouse', 'rat', 'squirrel', 'beaver'], answer: 'RODENTS', difficulty: 'medium' },
  { id: 'rodents-002', items: ['hamster', 'gerbil', 'guinea pig', 'chinchilla'], answer: 'RODENTS', difficulty: 'medium' },
  { id: 'rodents-003', items: ['chipmunk', 'porcupine', 'capybara', 'groundhog'], answer: 'RODENTS', difficulty: 'medium' },

  // MONKEYS (medium)
  { id: 'monkeys-001', items: ['capuchin', 'spider', 'howler', 'baboon'], answer: 'MONKEYS', difficulty: 'medium' },
  { id: 'monkeys-002', items: ['mandrill', 'macaque', 'tamarin', 'marmoset'], answer: 'MONKEYS', difficulty: 'medium' },

  // FARM ANIMALS / FARM (easy)
  { id: 'farm-001', items: ['cow', 'pig', 'horse', 'sheep'], answer: 'FARM', difficulty: 'easy' },
  { id: 'farm-002', items: ['chicken', 'duck', 'goose', 'turkey'], answer: 'FARM', difficulty: 'easy' },
  { id: 'farm-003', items: ['goat', 'donkey', 'rooster', 'lamb'], answer: 'FARM', difficulty: 'easy' }
];
