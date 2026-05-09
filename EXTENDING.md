# Adding More Puzzles

The puzzle library lives in `src/data/puzzles/`, split by theme:

```
src/data/puzzles/
├── schema.ts        — types and helpers (don't usually need to edit)
├── index.ts         — barrel export, combines all themes
├── food.ts          — fruit, vegetables, meat, bread, cheese, etc.
├── animals.ts       — pets, birds, fish, insects, dinosaurs, etc.
├── nature.ts        — trees, flowers, weather, gems, planets, etc.
├── household.ts     — tools, furniture, appliances, toys, etc.
├── body.ts          — body parts, organs, emotions, family
├── clothing.ts      — shoes, hats, shirts, pants, jackets
├── activities.ts    — sports, games, dances, hobbies
├── transport.ts     — vehicles, boats, aircraft, trains
├── world.ts         — countries, cities, holidays, careers
└── arts.ts          — instruments, colors, shapes, music
```

## To add puzzles

Open the relevant theme file and append entries to the exported array. The shape:

```ts
{ id: 'xyz-007', items: ['a', 'b', 'c', 'd'], answer: 'CATEGORY', difficulty: 'easy' }
```

Rules:

- **`id`** — unique across the entire library. Convention: `<short-prefix>-<3 digits>`. Search the codebase first to make sure your prefix isn't taken.
- **`items`** — exactly 4 strings, all clearly members of the answer category. They should *uniquely* identify the answer (avoid items that fit multiple categories — e.g. don't use only berries when the answer is FRUIT).
- **`answer`** — UPPERCASE, single canonical word (or a 2-word phrase like `MARTIAL ARTS`). The player will spell this.
- **`difficulty`** — `'easy'` | `'medium'` | `'hard'`. Roughly tied to the spelling difficulty of the answer, not the conceptual difficulty:
  - **easy**: 3–6 letters, common phonics (TOOLS, GEMS, FRUIT)
  - **medium**: 6–8 letters (COLORS, SPORTS, FLOWERS)
  - **hard**: 8+ letters or tricky spelling (VEGETABLES, INSTRUMENTS, EMOTIONS)

To add a new theme file, create it in `src/data/puzzles/`, export an array (e.g. `export const myThemePuzzles: Puzzle[] = [...]`), and add it to the spread list in `index.ts`.

## Generation prompt for Claude or ChatGPT

When you want to add a batch of puzzles in bulk, paste this prompt and adapt the specifics. The model will generate output you can paste directly into the appropriate theme file.

> I'm extending a children's spelling game that follows a strict puzzle format. Each puzzle has 4 example items and one canonical category answer. Generate **N puzzles** for category **CATEGORY** at difficulty **easy/medium/hard**, using IDs `prefix-NNN` starting from `prefix-XXX`.
>
> Format (TypeScript object literals, exactly this shape):
>
> ```ts
> { id: 'fruit-013', items: ['mango', 'pear', 'peach', 'plum'], answer: 'FRUIT', difficulty: 'easy' },
> ```
>
> Rules:
>
> 1. Each `items` array has **exactly 4 strings**, all clearly members of the named category.
> 2. The 4 items must **uniquely identify** the answer — they shouldn't also fit another single-word category (e.g., for FRUIT use `apple, banana, grape, orange`, not `strawberry, blueberry, raspberry, blackberry` which would also fit BERRIES).
> 3. **Vary the items across puzzles** in the batch — don't repeat the same 4 items in different orders. Change theme within the category (tropical fruits, citrus, stone fruits, etc.).
> 4. Items can include 1–2 word strings; keep them lowercase except for proper nouns.
> 5. The answer must be UPPERCASE and **canonical** — the single word a child would say.
> 6. Output ONLY the array entries, one per line, with trailing commas. No preamble, no markdown fences, no commentary.
>
> Generate the N entries now.

Adjust N (typically 5–20 per batch), the category, the difficulty, and the starting ID number to match the next free slot in the relevant theme file.

## After adding puzzles

```bash
npm run build
```

The build will fail loudly if you've made a typing error (missing comma, wrong field name). If it succeeds, commit and push — GitHub Actions will redeploy automatically.

## Tips for staying consistent

- **Check the existing puzzles in the file** before adding — different categories use different conventions. (Some categories use lowercase items like `apple`, others use proper nouns like `Persian` for cat breeds.)
- **Avoid niche items** young kids won't recognize — `papaya, lychee, persimmon, guava` is a stretch for a child even if it's accurate.
- **When in doubt about category overlap**, pick items that are *unambiguous* for your target category. The four items together should make the answer obvious, not be a riddle.
- **Spot-check generated batches** — AI tools sometimes output items that don't quite fit, or duplicate IDs from earlier in the file. A 30-second scan of any new batch is worth it.
