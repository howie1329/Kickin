<!-- agentkit:start design -->
# Kickin Design — Apple baseline (mapped)

Design spec for Kickin, starting from the AgentKit **apple** baseline and mapped onto this repo’s real theme in `src/styles.css`. Prefer CSS variables / Tailwind theme tokens over hardcoding hex in components.

## Overview

Photography- and product-first marketing language from the Apple baseline, adapted to Kickin’s coastal lagoon brand: soft seafoam canvases, lagoon accents, Manrope body, and Fraunces for display moments. UI should recede so content leads. Existing page atmosphere (radial washes, light grid) lives in `src/styles.css` — extend carefully; don’t invent a second visual system.

**Key characteristics:**
- Tile/section rhythm via canvas shifts (`--foam` / `--sand` / `--bg-base` ↔ dark `--foam` / `--sand`)
- Single interactive accent mapped to lagoon (`--lagoon` / `--lagoon-deep`) for links and primary actions
- Pill CTAs for primary marketing actions; compact radii for utility controls (shadcn `--radius`)
- Display tracking pulls negative at large sizes; body stays readable
- Prefer product imagery and calm surfaces; treat decorative gradients as background-only, already owned by `body` styles

## Colors

### Brand & Accent
- `{colors.primary}` → `--lagoon` / `--lagoon-deep` (CTAs, links, focus)
- `{colors.primary-hover}`, `{colors.primary-focus}` → deepen toward `--lagoon-deep` / `#246f76` (see `a:hover` in `src/styles.css`)
- `{colors.on-primary}` → light text on lagoon fills (or shadcn `--primary-foreground` when using shadcn primitives)

### Surface
- `{colors.canvas}` → `--foam` / `--background`
- `{colors.canvas-parchment}` → `--sand` / `--bg-base`
- `{colors.surface-tile-*}` / dark tiles → `.dark` `--foam`, `--sand`, `--bg-base`
- `{colors.surface-black}` → dark nav/header via `--header-bg` / dark `--surface-strong`
- `{colors.hairline}` → `--line` / `--border`

### Text
- `{colors.ink}` → `--sea-ink` (light) / `--sea-ink` in `.dark`
- `{colors.body-muted}` → `--sea-ink-soft` / `--muted-foreground`
- Kickers / emphasis → `--kicker`, `--palm`

### shadcn layer
Form controls and primitives also use zinc semantic tokens (`--primary`, `--secondary`, `--muted`, `--border`, etc.). Prefer those inside shadcn components; prefer lagoon/sea tokens for marketing chrome (Header, Footer, landing).

## Typography

- Display: Fraunces (imported in `src/styles.css`)
- Body/UI: Manrope via `--font-sans` / `font-sans`
- Mono: system / existing `code` styles in `src/styles.css`

| Token | Use |
|---|---|
| `{typography.display-xl}` | Hero headline (Fraunces) |
| `{typography.display-lg}` | Section openers |
| `{typography.lead}` | Supporting lines under heroes |
| `{typography.body}` | Default body (Manrope) |
| `{typography.button}` | Button labels |
| `{typography.nav-link}` | Global nav (`Header`) |

### Principles
- Headlines can use Fraunces at medium/bold; body stays Manrope 400–600
- Keep weight ladder intentional; avoid random 500/800 mixes in one block

## Layout

- Base unit: 8px; align section spacing with existing page padding patterns
- Max content width should match current route layouts (avoid introducing a second container system)
- Full-bleed atmosphere comes from `body` backgrounds; content columns stay readable

## Elevation

Prefer flat surfaces with `--surface` / `--surface-strong` frosted panels. Soft blur on sticky header (`--header-bg`) is allowed. Avoid stacking heavy shadows on cards/buttons.

## Shapes

| Token | Use |
|---|---|
| `{rounded.sm}` | Utility controls → `--radius-sm` |
| `{rounded.lg}` | Cards/panels → `--radius-lg` / `--radius` |
| `{rounded.pill}` | Primary marketing CTAs |
| `{rounded.none}` | Full-bleed bands |

## Components

- Primary CTA — lagoon fill, pill when marketing; shadcn `Button` when in app chrome
- Secondary — hairline / `--line` on surface
- Global nav / footer — `src/components/Header.tsx`, `Footer.tsx`
- Theme control — `ThemeToggle` (light / dark / auto)
- Inputs — shadcn-compatible tokens (`--input`, `--ring`)

## Do's and Don'ts

### Do
- Use lagoon tokens for interactive signals in marketing UI
- Reuse `src/styles.css` variables before adding new hex
- Check light and dark (`.dark`) when changing chrome
- Add UI primitives via shadcn into `#/components/ui`

### Don't
- Don’t introduce a purple/indigo SaaS palette or a second accent family
- Don’t hardcode hex in components when a variable exists
- Don’t shadow every card
- Don’t fight the existing `body` atmosphere with competing full-page gradients in each route

## Responsive Behavior

Keep touch targets comfortable (~44px). Nav should remain usable on small screens alongside `Header`. Scale display type down on narrow viewports rather than truncating hero copy aggressively.

## Token Mapping

Bind roles in `src/styles.css` (`:root`, `.dark`, `@theme inline`). Brand: `--sea-ink`, `--lagoon`, `--palm`, `--sand`, `--foam`, `--surface*`. Primitives: shadcn zinc variables and `--radius*`. Fonts: `--font-sans` (Manrope) + Fraunces for display.
<!-- agentkit:end design -->
