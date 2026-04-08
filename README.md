# meet-marcelo

Personal portfolio/CV website for Marcelo Marreiros, built with Next.js.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS
- TypeScript

## Features

- Animated hero and interactive visual effects
- Recruiter-focused CV layout
- Interconnected Tlantic experience timeline
- Expandable featured project card with embedded YouTube video
- Downloadable PDF CV (`public/cv/marcelo-marreiros-cv-2026.pdf`)

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Project structure

- `src/app/page.tsx` - main portfolio page
- `src/app/globals.css` - theme + animation system
- `src/components/interactive-scene.tsx` - pointer-reactive scene wrapper
- `src/app/layout.tsx` - app shell + metadata
- `public/cv/` - downloadable CV assets

## Notes

- Profile content is currently maintained manually in code.
