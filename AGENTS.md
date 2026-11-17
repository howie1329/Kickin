<!-- agentkit:start agents -->
# Kickin

Bill splitter app built on TanStack Start. Agents should treat this file as the source of truth for how to work in the repo.

## Project map

| Path | Role |
| --- | --- |
| `src/routes/` | File-based routes (pages + API handlers under `demo/`) |
| `src/routes/__root.tsx` | Root shell, theme boot script, layout chrome |
| `src/components/` | Shared UI (Header, Footer, ThemeToggle, demos) |
| `src/db/` | Drizzle schema and DB client |
| `src/db.ts` | Neon/Drizzle entry used by routes |
| `src/integrations/` | TanStack Query provider/devtools |
| `src/styles.css` | Tailwind v4 + theme tokens (lagoon brand + shadcn zinc) |
| `src/lib/` | Utilities and demo helpers |
| `vite.config.ts` | Vite + TanStack Start + Nitro + Neon + Tailwind |
| `drizzle.config.ts` | Drizzle Kit config |
| `components.json` | shadcn (new-york, `#/` aliases) |
| `.env.example` | `DATABASE_URL` / `DATABASE_URL_POOLER` |

## Commands

Package manager: **npm** (`package-lock.json`). Use npm scripts below; for shadcn adds, follow `.cursorrules` (`pnpm dlx shadcn@latest add …`).

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server on port 3000 (Neon Launchpad claimable DB if unset) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier write + ESLint fix |
| `npm run check` | Prettier check |
| `npm run db:generate` | Generate Drizzle migrations |
| `npm run db:migrate` | Run migrations |
| `npm run db:push` | Push schema |
| `npm run db:pull` | Pull schema |
| `npm run db:studio` | Drizzle Studio |

No dedicated `test` script is configured.

## Stack

Read `STACK.md` before framework, routing, data, or styling changes.

## Companion docs

| Doc | When to read |
| --- | --- |
| `STACK.md` | Stack boundaries, validation, data/auth |
| `DESIGN.md` | UI/visual work; map to `src/styles.css` |
| `CODE-QUALITY.md` | Review, refactor, maintainability |
| `CHANGE-EXPLANATION.md` | Handoffs and change summaries |
| `.github/pull_request_template.md` | PR checklist |

## Workflow expectations

- Prefer small, focused changes in the surface that already owns the concern (route, component, schema).
- Keep secrets server-only; do not prefix secrets with `VITE_`.
- Demo routes under `src/routes/demo/` are starter samples — prefer product routes (`index`, `about`, future feature routes) for Kickin features unless extending demos intentionally.
- Add shadcn components with `pnpm dlx shadcn@latest add <component>` into `#/components/ui`.

## Safety

- Do not commit `.env` or database credentials.
- Do not invent npm scripts; only use scripts from `package.json`.
- Do not modify lockfiles unless the task explicitly requires dependency changes.

## Before finishing

- [ ] Commands used match `package.json`
- [ ] UI changes respect `DESIGN.md` token mapping
- [ ] Stack changes checked against `STACK.md`
- [ ] Lint/format considered (`npm run lint` / `npm run check`)
- [ ] No secrets or `.env` values in the diff
<!-- agentkit:end agents -->
