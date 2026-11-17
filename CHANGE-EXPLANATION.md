<!-- agentkit:start change-explanation -->
# Change explanation

Use this when handing off work, summarizing a PR, or explaining what changed in Kickin.

## Audience

Assume a teammate familiar with React but not necessarily TanStack Start, Drizzle, or this repo’s lagoon theme.

## What to cover

1. **Intent** — What user/problem this change serves (bill-split feature, demo cleanup, infra, etc.)
2. **Surface** — Which layers moved (route, component, schema, styles, env)
3. **Behavior** — What a reviewer should click or verify
4. **Risks** — Data, auth, env, or breaking demo routes

## File-oriented cues

| If you touched… | Call out… |
| --- | --- |
| `src/routes/**` | Route URL, SSR vs client behavior, loaders/actions |
| `src/components/**` | Shared vs page-local; theme impact |
| `src/styles.css` / `DESIGN.md` | Token or visual system changes |
| `src/db/**`, `drizzle.config.ts` | Schema shape, migration/push needed |
| `vite.config.ts`, Nitro, Neon plugin | Dev/prod runtime differences |
| `.env.example` | New required vars (never commit secrets) |

## Format

Keep summaries short:

- 2–5 bullets of what changed and why
- Explicit “how to verify” steps using real commands (`npm run dev`, `npm run lint`, `npm run db:studio`, etc.)
- Note follow-ups (migrations, Vercel env, shadcn adds) separately
<!-- agentkit:end change-explanation -->
