# Jungle Spelling

A calm, family-friendly Progressive Web App for category-guessing spelling rounds on iPads.

## What it does

- Five fixed profiles: Ethan, Everett, Lukas, Ben, and Laurie.
- Each round has five puzzles.
- Each puzzle shows four category clues and asks the player to spell the single canonical category answer.
- Players get four attempts with progressive hints:
  1. Correct-position letters lock green.
  2. Keyboard narrows to answer letters plus distractors.
  3. Keyboard narrows further.
  4. Answer reveals if still missed.
- Local-only persistence: profile stars, avatar, timer adaptation, recent solve times, and global mute.
- In-session missed-puzzle repetition, reset when the tab/app context closes.
- PWA install support and offline app shell after first load.

## Local development

```bash
npm install
npm run dev
```

Open the Vite dev URL shown in the terminal.

## Build

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Deployment to GitHub Pages

This repo is configured for GitHub Pages with a custom subdomain:

```text
jungle.benjaminshiller.com
```

Included files:

- `.github/workflows/deploy.yml` builds on push to `main` and deploys using the official Pages flow.
- `public/CNAME` contains `jungle.benjaminshiller.com`.
- `public/.nojekyll` disables Jekyll processing.
- `public/robots.txt` disallows all crawlers.
- `vite.config.ts` uses `base: '/'` for custom subdomain-root hosting.

### First-time GitHub setup

1. Create a new repo, for example `benjaminshiller/jungle-spelling`.
2. Push this project to `main`.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. The workflow will deploy on the next push to `main`.

### DNS setup

At the DNS provider for `benjaminshiller.com`, add a CNAME record:

```text
Host/name: jungle
Type: CNAME
Value/target: benjaminshiller.github.io
```

GitHub Pages provisions the TLS certificate automatically after DNS resolves. It can take a little while for the certificate to become active.

## iPad install notes

On iPad Safari:

1. Open `https://jungle.benjaminshiller.com`.
2. Tap the Share button.
3. Choose **Add to Home Screen**.
4. Launch from the new Jungle icon for the most app-like experience.

The app supports both portrait and landscape.

## Safari localStorage note

Safari's Intelligent Tracking Prevention can evict localStorage for sites that have not had sufficient engagement after roughly a week of non-use. Installing the app through **Add to Home Screen** makes this much less likely. If profile progress appears to vanish, localStorage eviction is the likely explanation.

## Editing puzzles

Puzzle data lives in:

```text
src/data/puzzles.ts
```

Append new puzzles using the same shape:

```ts
{
  id: 'unique-id-001',
  items: ['item one', 'item two', 'item three', 'item four'],
  answer: 'ANSWER',
  difficulty: 'easy'
}
```

Rules:

- `items` must contain exactly four strings.
- `answer` must be uppercase A-Z only.
- There is exactly one accepted answer per puzzle.
- The first answer letter is always revealed; a final `S` is also revealed for plural answers.

## Privacy

No backend, no login, no analytics, and no third-party trackers. All profile data stays in localStorage on the device.
