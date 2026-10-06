# akairos-website

Marketing website for **Akairos** — release intelligence for modern engineering
teams. Built with [Vite](https://vite.dev/), [React](https://react.dev/),
TypeScript, and [Tailwind CSS](https://tailwindcss.com/).

## Prerequisites

- Node.js 22+
- npm 10+

## Getting started

```bash
npm ci        # install exact dependencies from the lockfile
npm run dev   # start the dev server at http://localhost:5173
```

## Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the Vite dev server with HMR           |
| `npm run build`     | Type-check and build the production bundle   |
| `npm run preview`   | Preview the production build locally         |
| `npm run lint`      | Lint the codebase with oxlint                |
| `npm run typecheck` | Run the TypeScript compiler with no emit     |

## Project structure

```
src/
  App.tsx            # Page composition
  main.tsx           # React entry point
  index.css          # Tailwind theme + global styles
  components/        # Navbar, Hero, Features, Stats, Contact, Footer, Logo
```

## Cloud Agent environment

This repository ships a `.cursor/environment.json` so Cursor Cloud Agents can
install dependencies (`npm ci`) and run the dev server automatically.
