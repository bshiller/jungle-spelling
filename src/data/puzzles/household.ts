import { Puzzle } from './schema';

export const householdPuzzles: Puzzle[] = [
  // TOOLS (easy)
  { id: 'tools-001', items: ['hammer', 'screwdriver', 'wrench', 'saw'], answer: 'TOOLS', difficulty: 'easy' },
  { id: 'tools-002', items: ['drill', 'pliers', 'level', 'tape measure'], answer: 'TOOLS', difficulty: 'easy' },
  { id: 'tools-003', items: ['chisel', 'file', 'sander', 'clamp'], answer: 'TOOLS', difficulty: 'easy' },
  { id: 'tools-004', items: ['axe', 'shovel', 'rake', 'hoe'], answer: 'TOOLS', difficulty: 'easy' },
  { id: 'tools-005', items: ['hammer', 'saw', 'drill', 'wrench'], answer: 'TOOLS', difficulty: 'easy' },
  { id: 'tools-006', items: ['ladder', 'crowbar', 'mallet', 'staple gun'], answer: 'TOOLS', difficulty: 'easy' },
  { id: 'tools-007', items: ['screwdriver', 'pliers', 'wrench', 'hammer'], answer: 'TOOLS', difficulty: 'easy' },
  { id: 'tools-008', items: ['allen key', 'hex wrench', 'socket', 'ratchet'], answer: 'TOOLS', difficulty: 'easy' },

  // UTENSILS (hard)
  { id: 'utens-001', items: ['knife', 'fork', 'spoon', 'chopsticks'], answer: 'UTENSILS', difficulty: 'hard' },
  { id: 'utens-002', items: ['ladle', 'spatula', 'tongs', 'whisk'], answer: 'UTENSILS', difficulty: 'hard' },
  { id: 'utens-003', items: ['peeler', 'grater', 'masher', 'rolling pin'], answer: 'UTENSILS', difficulty: 'hard' },
  { id: 'utens-004', items: ['butter knife', 'soup spoon', 'salad fork', 'teaspoon'], answer: 'UTENSILS', difficulty: 'hard' },
  { id: 'utens-005', items: ['fork', 'spoon', 'knife', 'spatula'], answer: 'UTENSILS', difficulty: 'hard' },
  { id: 'utens-006', items: ['can opener', 'corkscrew', 'bottle opener', 'pizza cutter'], answer: 'UTENSILS', difficulty: 'hard' },

  // FURNITURE (hard)
  { id: 'furn-001', items: ['chair', 'table', 'sofa', 'bed'], answer: 'FURNITURE', difficulty: 'hard' },
  { id: 'furn-002', items: ['dresser', 'desk', 'bookshelf', 'nightstand'], answer: 'FURNITURE', difficulty: 'hard' },
  { id: 'furn-003', items: ['couch', 'recliner', 'ottoman', 'loveseat'], answer: 'FURNITURE', difficulty: 'hard' },
  { id: 'furn-004', items: ['stool', 'bench', 'rocking chair', 'armchair'], answer: 'FURNITURE', difficulty: 'hard' },
  { id: 'furn-005', items: ['wardrobe', 'cabinet', 'cupboard', 'sideboard'], answer: 'FURNITURE', difficulty: 'hard' },
  { id: 'furn-006', items: ['bed', 'sofa', 'chair', 'desk'], answer: 'FURNITURE', difficulty: 'hard' },

  // APPLIANCES (hard)
  { id: 'appl-001', items: ['fridge', 'oven', 'microwave', 'dishwasher'], answer: 'APPLIANCES', difficulty: 'hard' },
  { id: 'appl-002', items: ['blender', 'toaster', 'mixer', 'food processor'], answer: 'APPLIANCES', difficulty: 'hard' },
  { id: 'appl-003', items: ['washer', 'dryer', 'iron', 'vacuum'], answer: 'APPLIANCES', difficulty: 'hard' },
  { id: 'appl-004', items: ['kettle', 'coffee maker', 'rice cooker', 'air fryer'], answer: 'APPLIANCES', difficulty: 'hard' },
  { id: 'appl-005', items: ['fridge', 'stove', 'microwave', 'dishwasher'], answer: 'APPLIANCES', difficulty: 'hard' },
  { id: 'appl-006', items: ['hair dryer', 'curling iron', 'straightener', 'electric razor'], answer: 'APPLIANCES', difficulty: 'hard' },

  // ROOMS (easy)
  { id: 'rooms-001', items: ['kitchen', 'bedroom', 'bathroom', 'living room'], answer: 'ROOMS', difficulty: 'easy' },
  { id: 'rooms-002', items: ['attic', 'basement', 'garage', 'closet'], answer: 'ROOMS', difficulty: 'easy' },
  { id: 'rooms-003', items: ['office', 'study', 'library', 'den'], answer: 'ROOMS', difficulty: 'easy' },
  { id: 'rooms-004', items: ['nursery', 'playroom', 'guest room', 'master bedroom'], answer: 'ROOMS', difficulty: 'easy' },
  { id: 'rooms-005', items: ['dining room', 'family room', 'pantry', 'foyer'], answer: 'ROOMS', difficulty: 'easy' },

  // TOYS (easy)
  { id: 'toys-001', items: ['doll', 'teddy bear', 'lego', 'puzzle'], answer: 'TOYS', difficulty: 'easy' },
  { id: 'toys-002', items: ['yo-yo', 'jump rope', 'frisbee', 'kite'], answer: 'TOYS', difficulty: 'easy' },
  { id: 'toys-003', items: ['action figure', 'race car', 'dollhouse', 'train set'], answer: 'TOYS', difficulty: 'easy' },
  { id: 'toys-004', items: ['marbles', 'jacks', 'top', 'jigsaw puzzle'], answer: 'TOYS', difficulty: 'easy' },
  { id: 'toys-005', items: ['ball', 'block', 'doll', 'truck'], answer: 'TOYS', difficulty: 'easy' },
  { id: 'toys-006', items: ['slinky', 'etch a sketch', 'silly putty', 'play-doh'], answer: 'TOYS', difficulty: 'easy' },
  { id: 'toys-007', items: ['Barbie', 'Lego', 'Hot Wheels', 'Nerf'], answer: 'TOYS', difficulty: 'easy' },
  { id: 'toys-008', items: ['rocking horse', 'wooden blocks', 'pull toy', 'rattle'], answer: 'TOYS', difficulty: 'easy' },

  // BOOKS (easy)
  { id: 'books-001', items: ['novel', 'biography', 'textbook', 'cookbook'], answer: 'BOOKS', difficulty: 'easy' },
  { id: 'books-002', items: ['Harry Potter', 'Charlotte\'s Web', 'Matilda', 'Charlie and the Chocolate Factory'], answer: 'BOOKS', difficulty: 'easy' },
  { id: 'books-003', items: ['picture book', 'chapter book', 'comic book', 'pop-up book'], answer: 'BOOKS', difficulty: 'easy' },
  { id: 'books-004', items: ['dictionary', 'encyclopedia', 'atlas', 'thesaurus'], answer: 'BOOKS', difficulty: 'easy' },
  { id: 'books-005', items: ['mystery', 'fantasy', 'romance', 'biography'], answer: 'BOOKS', difficulty: 'easy' },

  // BAGS (easy)
  { id: 'bags-001', items: ['backpack', 'purse', 'tote', 'duffle'], answer: 'BAGS', difficulty: 'easy' },
  { id: 'bags-002', items: ['suitcase', 'briefcase', 'messenger bag', 'fanny pack'], answer: 'BAGS', difficulty: 'easy' },
  { id: 'bags-003', items: ['grocery', 'gift', 'lunch', 'sandwich'], answer: 'BAGS', difficulty: 'easy' },

  // GARDENS (medium)
  { id: 'gardens-001', items: ['vegetable', 'flower', 'herb', 'fruit'], answer: 'GARDENS', difficulty: 'medium' },
  { id: 'gardens-002', items: ['rose garden', 'butterfly garden', 'rock garden', 'water garden'], answer: 'GARDENS', difficulty: 'medium' },

  // ART SUPPLIES → ART (easy)
  { id: 'art-001', items: ['paint', 'crayons', 'markers', 'pencils'], answer: 'ART', difficulty: 'easy' },
  { id: 'art-002', items: ['canvas', 'easel', 'palette', 'brush'], answer: 'ART', difficulty: 'easy' },
  { id: 'art-003', items: ['watercolor', 'acrylic', 'oil paint', 'pastel'], answer: 'ART', difficulty: 'easy' },
  { id: 'art-004', items: ['drawing', 'painting', 'sculpture', 'pottery'], answer: 'ART', difficulty: 'easy' },

  // SCHOOL SUPPLIES → SCHOOL (medium)
  { id: 'school-001', items: ['pencil', 'eraser', 'notebook', 'ruler'], answer: 'SCHOOL', difficulty: 'medium' },
  { id: 'school-002', items: ['backpack', 'lunchbox', 'binder', 'planner'], answer: 'SCHOOL', difficulty: 'medium' },
  { id: 'school-003', items: ['math', 'reading', 'science', 'history'], answer: 'SCHOOL', difficulty: 'medium' },
  { id: 'school-004', items: ['teacher', 'principal', 'classroom', 'desk'], answer: 'SCHOOL', difficulty: 'medium' },

  // CONTAINERS (hard)
  { id: 'ctnr-001', items: ['box', 'jar', 'can', 'bottle'], answer: 'CONTAINERS', difficulty: 'hard' },
  { id: 'ctnr-002', items: ['basket', 'bucket', 'crate', 'tub'], answer: 'CONTAINERS', difficulty: 'hard' },
  { id: 'ctnr-003', items: ['vase', 'pot', 'pitcher', 'jug'], answer: 'CONTAINERS', difficulty: 'hard' }
];
