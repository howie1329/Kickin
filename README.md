# Kickin

Mobile-friendly bill splitter. A host opens a receipt, invites the table with a link, guests claim a seat, everyone sees an equal share, and Pay marks shares settled — no real money moves.

Full product decisions: [`docs/mvp-brief.md`](docs/mvp-brief.md).

## MVP

- **Host** creates an account (initials + 6-digit PIN), starts a bill (total + tip), pre-adds seats, shares a link + 4-digit bill code.
- **Guests** need no account: open the link → bill code → pick a seat → see what they owe → mark paid.
- Equal split: `(total + tip) / n`. Host can toggle anyone paid; guests can mark themselves paid.
- Live balance via short polling in v1.

Not in v1: line items, custom amounts, groups/history, real payments, OCR, WebSockets.

## Stack

- [TanStack Start](https://tanstack.com/start) (React) + Vite + file router
- Drizzle ORM + Neon Postgres
- Tailwind CSS 4 + shadcn
- TanStack Query

## Setup

```bash
npm install
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

### Database

Copy env from the example and fill in Neon URLs (or let the Neon Vite plugin create a claimable DB on first `dev`):

```bash
cp .env.example .env.local
```

```env
DATABASE_URL=
DATABASE_URL_POOLER=
```

> Claimable Neon Launchpad databases expire in 72 hours. Claim/persist one for ongoing work.

Useful DB scripts:

```bash
npm run db:generate   # drizzle-kit generate
npm run db:migrate    # drizzle-kit migrate
npm run db:push       # drizzle-kit push
npm run db:studio     # drizzle-kit studio
```

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server (port 3000) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier + ESLint fix |
| `npm run check` | Prettier check |

### UI components

```bash
pnpm dlx shadcn@latest add button
```

## Project layout

```text
docs/           Product briefs and decisions
src/routes/     File-based routes (TanStack Router)
src/db/         Drizzle schema and DB client
db/             SQL init / seed helpers
```

Starter **demo** routes and `demo-*` files under `src/` are leftover from the TanStack scaffold and can be removed as Kickin features land.

## Deploy

Repo includes `vercel.json` for TanStack Start on Vercel.

1. Import the repo in Vercel.
2. Set `DATABASE_URL` / `DATABASE_URL_POOLER` (and any other secrets) from `.env.example`.
3. Deploy.

Keep secrets unprefixed. Only `VITE_` vars are exposed to the browser.
