# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Promotional/marketing website for a service, built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4. Bootstrapped with `create-next-app`; still in early scaffold state.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (flat config via `eslint.config.mjs`)

No test runner is configured yet.

## Architecture

- App Router lives in `src/app/`; `@/*` path alias maps to `src/*` (see `tsconfig.json`).
- `src/app/layout.tsx` — root layout, loads Geist fonts via `next/font`.
- `src/app/globals.css` — Tailwind entry point (Tailwind 4 uses the `@tailwindcss/postcss` PostCSS plugin, configured in `postcss.config.mjs`, not a `tailwind.config.js`).
- Styling is Tailwind-first; no CSS-in-JS or component library is set up.

## Important: Next.js version

This project pins **Next.js 16.2.11**, a version newer than most training data. Per `AGENTS.md`, APIs, conventions, and file structure may differ from what you expect — read the relevant guide under `node_modules/next/dist/docs/` (organized as `01-app/`, `02-pages/`, `03-architecture/`) before implementing App Router features, and heed any deprecation notices encountered.
