import { Puzzle } from './schema';

export const foodPuzzles: Puzzle[] = [
  // FRUIT (easy)
  { id: 'fruit-001', items: ['apple', 'banana', 'grape', 'orange'], answer: 'FRUIT', difficulty: 'easy' },
  { id: 'fruit-002', items: ['mango', 'pear', 'peach', 'plum'], answer: 'FRUIT', difficulty: 'easy' },
  { id: 'fruit-003', items: ['watermelon', 'pineapple', 'kiwi', 'papaya'], answer: 'FRUIT', difficulty: 'easy' },
  { id: 'fruit-004', items: ['lemon', 'lime', 'grapefruit', 'tangerine'], answer: 'FRUIT', difficulty: 'easy' },
  { id: 'fruit-005', items: ['cherry', 'apricot', 'nectarine', 'fig'], answer: 'FRUIT', difficulty: 'easy' },
  { id: 'fruit-006', items: ['cantaloupe', 'honeydew', 'apple', 'pear'], answer: 'FRUIT', difficulty: 'easy' },
  { id: 'fruit-007', items: ['pomegranate', 'guava', 'lychee', 'persimmon'], answer: 'FRUIT', difficulty: 'easy' },
  { id: 'fruit-008', items: ['banana', 'mango', 'coconut', 'pineapple'], answer: 'FRUIT', difficulty: 'easy' },
  { id: 'fruit-009', items: ['date', 'fig', 'olive', 'pomegranate'], answer: 'FRUIT', difficulty: 'easy' },
  { id: 'fruit-010', items: ['orange', 'lemon', 'grapefruit', 'lime'], answer: 'FRUIT', difficulty: 'easy' },
  { id: 'fruit-011', items: ['apple', 'cherry', 'plum', 'apricot'], answer: 'FRUIT', difficulty: 'easy' },
  { id: 'fruit-012', items: ['kiwi', 'starfruit', 'dragonfruit', 'passionfruit'], answer: 'FRUIT', difficulty: 'easy' },

  // BERRIES (medium)
  { id: 'berries-001', items: ['strawberry', 'blueberry', 'raspberry', 'blackberry'], answer: 'BERRIES', difficulty: 'medium' },
  { id: 'berries-002', items: ['cranberry', 'gooseberry', 'mulberry', 'elderberry'], answer: 'BERRIES', difficulty: 'medium' },
  { id: 'berries-003', items: ['boysenberry', 'loganberry', 'blueberry', 'huckleberry'], answer: 'BERRIES', difficulty: 'medium' },
  { id: 'berries-004', items: ['strawberry', 'raspberry', 'cranberry', 'blueberry'], answer: 'BERRIES', difficulty: 'medium' },
  { id: 'berries-005', items: ['blackberry', 'elderberry', 'mulberry', 'cloudberry'], answer: 'BERRIES', difficulty: 'medium' },
  { id: 'berries-006', items: ['raspberry', 'gooseberry', 'lingonberry', 'strawberry'], answer: 'BERRIES', difficulty: 'medium' },

  // VEGETABLES (hard)
  { id: 'vegs-001', items: ['carrot', 'broccoli', 'spinach', 'lettuce'], answer: 'VEGETABLES', difficulty: 'hard' },
  { id: 'vegs-002', items: ['celery', 'cabbage', 'cauliflower', 'asparagus'], answer: 'VEGETABLES', difficulty: 'hard' },
  { id: 'vegs-003', items: ['potato', 'onion', 'pepper', 'cucumber'], answer: 'VEGETABLES', difficulty: 'hard' },
  { id: 'vegs-004', items: ['kale', 'arugula', 'chard', 'spinach'], answer: 'VEGETABLES', difficulty: 'hard' },
  { id: 'vegs-005', items: ['zucchini', 'eggplant', 'squash', 'pumpkin'], answer: 'VEGETABLES', difficulty: 'hard' },
  { id: 'vegs-006', items: ['radish', 'turnip', 'beet', 'parsnip'], answer: 'VEGETABLES', difficulty: 'hard' },
  { id: 'vegs-007', items: ['tomato', 'cucumber', 'pepper', 'lettuce'], answer: 'VEGETABLES', difficulty: 'hard' },
  { id: 'vegs-008', items: ['leek', 'shallot', 'garlic', 'onion'], answer: 'VEGETABLES', difficulty: 'hard' },
  { id: 'vegs-009', items: ['artichoke', 'okra', 'eggplant', 'fennel'], answer: 'VEGETABLES', difficulty: 'hard' },

  // MEAT (easy)
  { id: 'meat-001', items: ['beef', 'pork', 'chicken', 'lamb'], answer: 'MEAT', difficulty: 'easy' },
  { id: 'meat-002', items: ['steak', 'bacon', 'ham', 'sausage'], answer: 'MEAT', difficulty: 'easy' },
  { id: 'meat-003', items: ['turkey', 'duck', 'venison', 'rabbit'], answer: 'MEAT', difficulty: 'easy' },
  { id: 'meat-004', items: ['ribs', 'brisket', 'chuck', 'sirloin'], answer: 'MEAT', difficulty: 'easy' },
  { id: 'meat-005', items: ['ham', 'pepperoni', 'salami', 'prosciutto'], answer: 'MEAT', difficulty: 'easy' },

  // BREAD (easy)
  { id: 'bread-001', items: ['baguette', 'sourdough', 'rye', 'pita'], answer: 'BREAD', difficulty: 'easy' },
  { id: 'bread-002', items: ['naan', 'tortilla', 'focaccia', 'ciabatta'], answer: 'BREAD', difficulty: 'easy' },
  { id: 'bread-003', items: ['bagel', 'roll', 'bun', 'loaf'], answer: 'BREAD', difficulty: 'easy' },
  { id: 'bread-004', items: ['pumpernickel', 'brioche', 'challah', 'cornbread'], answer: 'BREAD', difficulty: 'easy' },

  // CHEESE (medium)
  { id: 'cheese-001', items: ['cheddar', 'mozzarella', 'parmesan', 'feta'], answer: 'CHEESE', difficulty: 'medium' },
  { id: 'cheese-002', items: ['brie', 'camembert', 'gouda', 'swiss'], answer: 'CHEESE', difficulty: 'medium' },
  { id: 'cheese-003', items: ['ricotta', 'provolone', 'asiago', 'havarti'], answer: 'CHEESE', difficulty: 'medium' },
  { id: 'cheese-004', items: ['gorgonzola', 'roquefort', 'stilton', 'blue'], answer: 'CHEESE', difficulty: 'medium' },
  { id: 'cheese-005', items: ['monterey jack', 'pepper jack', 'colby', 'muenster'], answer: 'CHEESE', difficulty: 'medium' },

  // CANDY (easy)
  { id: 'candy-001', items: ['lollipop', 'gummy bear', 'jellybean', 'caramel'], answer: 'CANDY', difficulty: 'easy' },
  { id: 'candy-002', items: ['toffee', 'taffy', 'fudge', 'nougat'], answer: 'CANDY', difficulty: 'easy' },
  { id: 'candy-003', items: ['licorice', 'mint', 'butterscotch', 'truffle'], answer: 'CANDY', difficulty: 'easy' },
  { id: 'candy-004', items: ['marshmallow', 'gumdrop', 'rock candy', 'cotton candy'], answer: 'CANDY', difficulty: 'easy' },
  { id: 'candy-005', items: ['Twix', 'Snickers', 'Milky Way', 'Kit Kat'], answer: 'CANDY', difficulty: 'easy' },
  { id: 'candy-006', items: ['Skittles', 'Starburst', 'Sour Patch Kids', 'Nerds'], answer: 'CANDY', difficulty: 'easy' },

  // DRINKS (easy)
  { id: 'drinks-001', items: ['water', 'milk', 'juice', 'soda'], answer: 'DRINKS', difficulty: 'easy' },
  { id: 'drinks-002', items: ['coffee', 'tea', 'cocoa', 'cider'], answer: 'DRINKS', difficulty: 'easy' },
  { id: 'drinks-003', items: ['lemonade', 'iced tea', 'punch', 'milkshake'], answer: 'DRINKS', difficulty: 'easy' },
  { id: 'drinks-004', items: ['cola', 'root beer', 'ginger ale', 'sprite'], answer: 'DRINKS', difficulty: 'easy' },
  { id: 'drinks-005', items: ['orange juice', 'apple juice', 'grape juice', 'cranberry juice'], answer: 'DRINKS', difficulty: 'easy' },
  { id: 'drinks-006', items: ['smoothie', 'shake', 'slushie', 'frappe'], answer: 'DRINKS', difficulty: 'easy' },
  { id: 'drinks-007', items: ['espresso', 'latte', 'cappuccino', 'mocha'], answer: 'DRINKS', difficulty: 'easy' },
  { id: 'drinks-008', items: ['chai', 'matcha', 'green tea', 'oolong'], answer: 'DRINKS', difficulty: 'easy' },

  // SOUPS (easy)
  { id: 'soups-001', items: ['chicken noodle', 'tomato', 'minestrone', 'clam chowder'], answer: 'SOUPS', difficulty: 'easy' },
  { id: 'soups-002', items: ['pho', 'ramen', 'miso', 'won ton'], answer: 'SOUPS', difficulty: 'easy' },
  { id: 'soups-003', items: ['gazpacho', 'borscht', 'bisque', 'consomme'], answer: 'SOUPS', difficulty: 'easy' },
  { id: 'soups-004', items: ['lentil', 'split pea', 'black bean', 'mushroom'], answer: 'SOUPS', difficulty: 'easy' },

  // NUTS (easy)
  { id: 'nuts-001', items: ['almond', 'cashew', 'walnut', 'peanut'], answer: 'NUTS', difficulty: 'easy' },
  { id: 'nuts-002', items: ['pecan', 'pistachio', 'hazelnut', 'macadamia'], answer: 'NUTS', difficulty: 'easy' },
  { id: 'nuts-003', items: ['chestnut', 'brazil nut', 'pine nut', 'acorn'], answer: 'NUTS', difficulty: 'easy' },
  { id: 'nuts-004', items: ['almond', 'walnut', 'pecan', 'cashew'], answer: 'NUTS', difficulty: 'easy' },
  { id: 'nuts-005', items: ['pistachio', 'hazelnut', 'peanut', 'macadamia'], answer: 'NUTS', difficulty: 'easy' },

  // HERBS (easy)
  { id: 'herbs-001', items: ['basil', 'thyme', 'rosemary', 'oregano'], answer: 'HERBS', difficulty: 'easy' },
  { id: 'herbs-002', items: ['parsley', 'sage', 'cilantro', 'dill'], answer: 'HERBS', difficulty: 'easy' },
  { id: 'herbs-003', items: ['mint', 'chives', 'tarragon', 'lavender'], answer: 'HERBS', difficulty: 'easy' },
  { id: 'herbs-004', items: ['bay leaf', 'marjoram', 'fennel', 'lemongrass'], answer: 'HERBS', difficulty: 'easy' },
  { id: 'herbs-005', items: ['basil', 'oregano', 'thyme', 'parsley'], answer: 'HERBS', difficulty: 'easy' },

  // SPICES (medium)
  { id: 'spices-001', items: ['cinnamon', 'nutmeg', 'cloves', 'cardamom'], answer: 'SPICES', difficulty: 'medium' },
  { id: 'spices-002', items: ['paprika', 'cumin', 'turmeric', 'coriander'], answer: 'SPICES', difficulty: 'medium' },
  { id: 'spices-003', items: ['ginger', 'saffron', 'allspice', 'mace'], answer: 'SPICES', difficulty: 'medium' },
  { id: 'spices-004', items: ['black pepper', 'white pepper', 'cayenne', 'chili powder'], answer: 'SPICES', difficulty: 'medium' },
  { id: 'spices-005', items: ['cinnamon', 'paprika', 'cumin', 'turmeric'], answer: 'SPICES', difficulty: 'medium' },
  { id: 'spices-006', items: ['cardamom', 'cloves', 'star anise', 'fenugreek'], answer: 'SPICES', difficulty: 'medium' },

  // PASTA (medium)
  { id: 'pasta-001', items: ['spaghetti', 'penne', 'fettuccine', 'ravioli'], answer: 'PASTA', difficulty: 'medium' },
  { id: 'pasta-002', items: ['lasagna', 'macaroni', 'rigatoni', 'linguine'], answer: 'PASTA', difficulty: 'medium' },
  { id: 'pasta-003', items: ['tortellini', 'gnocchi', 'orzo', 'farfalle'], answer: 'PASTA', difficulty: 'medium' },
  { id: 'pasta-004', items: ['ziti', 'rotini', 'angel hair', 'bucatini'], answer: 'PASTA', difficulty: 'medium' },

  // SEAFOOD (medium)
  { id: 'seafood-001', items: ['shrimp', 'lobster', 'crab', 'oyster'], answer: 'SEAFOOD', difficulty: 'medium' },
  { id: 'seafood-002', items: ['salmon', 'tuna', 'cod', 'halibut'], answer: 'SEAFOOD', difficulty: 'medium' },
  { id: 'seafood-003', items: ['scallop', 'mussel', 'clam', 'squid'], answer: 'SEAFOOD', difficulty: 'medium' },
  { id: 'seafood-004', items: ['octopus', 'crab', 'lobster', 'shrimp'], answer: 'SEAFOOD', difficulty: 'medium' },
  { id: 'seafood-005', items: ['tilapia', 'trout', 'bass', 'snapper'], answer: 'SEAFOOD', difficulty: 'medium' },

  // GRAINS (easy)
  { id: 'grains-001', items: ['rice', 'wheat', 'barley', 'oats'], answer: 'GRAINS', difficulty: 'easy' },
  { id: 'grains-002', items: ['quinoa', 'millet', 'rye', 'spelt'], answer: 'GRAINS', difficulty: 'easy' },
  { id: 'grains-003', items: ['corn', 'buckwheat', 'farro', 'bulgur'], answer: 'GRAINS', difficulty: 'easy' },

  // MEALS (easy)
  { id: 'meals-001', items: ['breakfast', 'lunch', 'dinner', 'snack'], answer: 'MEALS', difficulty: 'easy' },
  { id: 'meals-002', items: ['brunch', 'supper', 'tea time', 'dessert'], answer: 'MEALS', difficulty: 'easy' },
  { id: 'meals-003', items: ['breakfast', 'brunch', 'lunch', 'dinner'], answer: 'MEALS', difficulty: 'easy' },
  { id: 'meals-004', items: ['lunch', 'dinner', 'snack', 'supper'], answer: 'MEALS', difficulty: 'easy' },

  // DESSERTS (hard)
  { id: 'desserts-001', items: ['cake', 'pie', 'ice cream', 'cookies'], answer: 'DESSERTS', difficulty: 'hard' },
  { id: 'desserts-002', items: ['brownie', 'cupcake', 'tart', 'pudding'], answer: 'DESSERTS', difficulty: 'hard' },
  { id: 'desserts-003', items: ['tiramisu', 'cheesecake', 'eclair', 'mousse'], answer: 'DESSERTS', difficulty: 'hard' },
  { id: 'desserts-004', items: ['sorbet', 'gelato', 'sherbet', 'parfait'], answer: 'DESSERTS', difficulty: 'hard' },
  { id: 'desserts-005', items: ['donut', 'cinnamon roll', 'pastry', 'scone'], answer: 'DESSERTS', difficulty: 'hard' },

  // CONDIMENTS (hard)
  { id: 'cond-001', items: ['ketchup', 'mustard', 'mayo', 'relish'], answer: 'CONDIMENTS', difficulty: 'hard' },
  { id: 'cond-002', items: ['hot sauce', 'soy sauce', 'BBQ sauce', 'salsa'], answer: 'CONDIMENTS', difficulty: 'hard' },
  { id: 'cond-003', items: ['ranch', 'blue cheese', 'Italian', 'thousand island'], answer: 'CONDIMENTS', difficulty: 'hard' },
  { id: 'cond-004', items: ['ketchup', 'mustard', 'hot sauce', 'mayo'], answer: 'CONDIMENTS', difficulty: 'hard' },

  // SNACKS (medium)
  { id: 'snacks-001', items: ['chips', 'pretzels', 'popcorn', 'crackers'], answer: 'SNACKS', difficulty: 'medium' },
  { id: 'snacks-002', items: ['granola bar', 'trail mix', 'jerky', 'nuts'], answer: 'SNACKS', difficulty: 'medium' },
  { id: 'snacks-003', items: ['cheese sticks', 'crackers', 'pretzels', 'goldfish'], answer: 'SNACKS', difficulty: 'medium' }
];
