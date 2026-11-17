<!-- agentkit:start code-quality -->
# Code quality

Guidance for review, refactor, and maintainability in Kickin. Commands live in `AGENTS.md` — do not duplicate large tables here.

## Principles

- Prefer clear route/component boundaries over shared grab-bags
- Keep demo code (`src/routes/demo/**`, demo components/hooks) isolated from product bill-split flows
- Use existing `#/` imports; match neighboring file style
- Prefer server-safe data access for anything that needs `DATABASE_URL`

## Review checklist

- [ ] Change matches the owning layer (route vs component vs schema)
- [ ] No new secrets or `VITE_`-prefixed secrets
- [ ] Types and naming stay consistent with nearby modules
- [ ] UI uses theme tokens from `src/styles.css` / `DESIGN.md` instead of one-off hex sprawl
- [ ] Drizzle schema changes have a clear migrate/push plan
- [ ] Lint/format considered (`npm run lint`, `npm run format` / `npm run check`)

## Refactors

- Extract only when a pattern repeats or a file has multiple jobs
- Do not “clean up” unrelated demo routes while shipping a product change
- Avoid drive-by dependency upgrades

## Maintainability

- Document non-obvious Neon/Drizzle/env requirements in the PR, not only in chat
- When adding UI primitives, prefer shadcn under `#/components/ui`
- Keep AgentKit guidance (`AGENTS.md`, companions) in sync via `/agentkit update` when commands or layout change
<!-- agentkit:end code-quality -->
