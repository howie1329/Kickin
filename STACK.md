<!-- agentkit:start stack -->
# Kickin — Stack

Inferred stack: **TanStack Start (React) + Vite + Nitro + Drizzle/Neon + Tailwind CSS v4**. No `preset` in `agentkit.config.json`; this file reflects repository facts.

## Runtime & app shell

- **Framework:** TanStack Start via `@tanstack/react-start` and Vite (`vite.config.ts`)
- **UI:** React 19 + TanStack Router file routes under `src/routes/`
- **SSR/deploy:** Nitro Vite plugin; Vercel-oriented README/`vercel.json`
- **Path alias:** `#/*` → `./src/*` (`package.json` `imports`)

## Routing & data fetching

- Routes live in `src/routes/` (`index`, `about`, `__root`, plus `demo/*` samples)
- Router entry: `src/router.tsx`
- TanStack Query wired through `src/integrations/tanstack-query/`
- API-style handlers exist as route modules under `src/routes/demo/api.*`

## Database

- **ORM:** Drizzle (`drizzle-orm`, `drizzle-kit`)
- **Driver:** Neon serverless (`@neondatabase/serverless`) + `pg`
- **Schema:** `src/db/schema.ts` (starter `todos` table)
- **Clients:** `src/db/index.ts`, `src/db.ts`
- **Env:** `DATABASE_URL`, `DATABASE_URL_POOLER` (see `.env.example`)
- Dev may provision a claimable Neon DB via `vite-plugin-neon-new` / local `neon-vite-plugin.ts`

## Styling & components

- Tailwind CSS v4 via `@tailwindcss/vite`
- Theme + brand tokens in `src/styles.css` (lagoon/sea palette + shadcn zinc CSS variables)
- Fonts: Manrope (sans) and Fraunces (display) from Google Fonts import in `src/styles.css`
- shadcn: `components.json` (style `new-york`, base `zinc`, aliases under `#/`)
- Theme toggle: light/dark/auto via `localStorage` + root class in `__root.tsx`

## AI / demos

- TanStack AI packages are present for demo chat/image/TTS/transcription routes under `src/routes/demo/`
- Treat these as optional demos unless the task explicitly builds product AI features

## Validation checkpoints

| Change type | Check |
| --- | --- |
| Route/UI | `npm run dev`; exercise the route; light/dark theme |
| Types/lint | `npm run lint`; `npm run check` |
| Schema | Update `src/db/schema.ts`; `npm run db:generate` / `db:push` as appropriate |
| Build | `npm run build` before release-sensitive changes |
| shadcn | `pnpm dlx shadcn@latest add <name>`; keep imports on `#/` aliases |

## Boundaries

- Keep DB access and secrets on the server; never expose connection strings to the client bundle
- Prefer extending product routes/components over growing unbounded demo surface area
- Do not invent scripts — use `package.json` only
<!-- agentkit:end stack -->
