# Kickin — MVP Brief

One-day hackathon bill splitter. Decisions locked in conversation as of November 17, 2026.

## Concept

Mobile-responsive web app for splitting a shared bill and tip among a group. v1 is the after-dinner case: one receipt, a tip, several people. Same flow should later extend to trips, groceries, etc.

**Done when:** a host can open one receipt, invite guests via link, guests join with a bill code and claim a seat, everyone sees equal shares update live, shares can be marked paid, and the remaining balance falls — all on a phone-sized screen.

## Stack (current project)

Scaffold is already in place; MVP builds on it rather than starting over.

| Piece | Choice |
| --- | --- |
| App | TanStack Start (React) + Vite + file router |
| ORM / DB | Drizzle + Postgres (Neon) |
| UI | Tailwind 4, shadcn available |
| Client data | TanStack Query (+ Store available) |
| Deploy config in repo | Vercel (`vercel.json`) |
| Live updates (v1) | Short polling (1–2s / on focus) — not WebSockets yet |

**Approach:** keep server logic in TanStack Start (server functions / route handlers). No separate API service for the hackathon day.

## Roles

### Host

- Special role: creates and owns the split.
- Always included as a participant on their bill.
- Signs up / signs in to the app (account required).
- Invites others via a shareable link.
- Can pre-add participant seats (names optional).
- Can toggle **Paid / Not paid** for any participant (cash-on-table cases).

### Guest

- No app account and no personal PIN.
- Joins through the host’s **link** + **4-digit bill code**.
- Picks which seat they are (named person or “Guest N”).
- Sees what they owe and can mark **themselves** paid.
- Seat claim is separate from payment state (see Claims).

## Host authentication

- **Two actions:** Create account and Sign in (not a single ambiguous screen).
- **Identity:** first initial + last initial + **6-digit PIN** (option B).
  - Example shape: `HT` + `482913`.
- PIN is **person-wide / app-wide** (not per bill).
- PIN is **hashed**; never stored as plain text.
- Baseline hardening from the original brief still applies: **rate-limit** failed sign-ins and **lock out** an identity after too many failures.
- **Out of scope for v1:** code recovery if someone forgets their PIN.

## Bills and join flow

1. Host creates a bill: enters **grand total + tip** (no line items in v1).
2. Host sets the roster: themselves + other seats (e.g. dinner of four = host + three).
3. If the host does not name a seat, default labels are **Guest 1, Guest 2, Guest 3, …**
4. System issues a **4-digit bill code** (one shared code for the whole bill).
5. Host shares a **link** that scopes to that bill.
6. Guest opens link → enters bill code → picks a seat → sees their equal share → can Pay.

Equal split for v1:

```text
share = (grand_total + tip) / n
```

where `n` is the current roster size controlled by the host.

## Claims (seat picking)

- Purpose: stop two people from acting as the same seat (double Pay, confused UI).
- After link + bill code, guest **claims** a seat from the roster.
- While a seat is claimed, it appears **grayed out** and cannot be selected by others.
- **First claim wins** in the database; a second device gets “already taken — pick another.”
- **Paid** is stored in the database and is independent of claim.
- **Claim release (Q11) — parked, provisional default:** short-lived claim with heartbeat while the tab is open (~10 minutes TTL). Tab close / heartbeat stop frees the seat; paid state remains. Finalize when implementing.

## Pay semantics

- No real money movement; no Venmo/payment-app integration.
- **Guest:** can mark their own claimed seat paid.
- **Host:** can toggle any participant paid ↔ not paid.
- v1 amount is the **equal share only** (no “pay more than minimum” yet).
- Remaining bill balance = sum of unpaid shares (updates as people pay / host toggles).

## Live updates

- As people join (claim seats) and as shares are marked paid, clients should see roster, claims, paid state, and remaining balance update.
- **v1 mechanism:** polling (recommended for ship speed).
- WebSockets / SSE: optional polish if time remains.

## Roster changes

- Host controls the roster (add/remove seats).
- Adding/removing people **recalculates** equal shares based on new `n`.
- Exact rule for seats already marked paid when roster changes: prefer recalculating unpaid shares and leaving paid rows stable unless the host unpays first (implement with this intent; tighten in design if needed).

## In scope for MVP (v1)

- [ ] Single-receipt split among multiple people
- [ ] Host create account / sign in (initials + hashed 6-digit PIN, rate limiting)
- [ ] Host creates bill: total + tip, pre-add seats, 4-digit bill code, share link
- [ ] Guest join: link + bill code + claim seat (Guest N defaults)
- [ ] Equal share display
- [ ] Pay / host toggle paid, live remaining balance (via polling)
- [ ] Phone-sized / mobile-responsive UI

## Explicitly not v1 (layer two or later)

- Groups and history of past splits (including location)
- Line items / claim-your-items
- Custom pay amounts (above equal split)
- Real payments or payment-app integrations
- Auth provider (Clerk, etc.)
- Receipt scanning, OCR, currency conversion
- PIN / bill-code recovery flows
- WebSockets as a hard requirement

## Decision log

| ID | Topic | Decision |
| --- | --- | --- |
| Q1 | Host role | Special host creates bill and invites; guests need no account |
| Q2 | Bill input | Grand total + tip first; line items later |
| Q3 | Invite | Share link + short bill code (4 digits) |
| Q4 | Who can Pay | Host toggles anyone; guest marks self paid |
| Q5 | PIN scope | Host PIN is app-wide; bill code is per-bill |
| Q6 | Roster | Host pre-adds seats; host always on the bill |
| Q7 | Guest identity | Pick seat after bill code; paid in DB; claim ≠ paid |
| Q8 | Bill code | One shared code per bill; link scopes the bill |
| Q9 | Headcount | Host-controlled roster; recalculate when roster changes |
| Q10 | Guest PIN | Guests are PIN-less (seat list only) |
| Q11 | Claim release | Parked — provisional ~10 min heartbeat TTL |
| Q12 | Claim race | First claim wins in DB |
| Q13 | Pay amount | Equal split only in v1 |
| Q14 | Host identity | First + last **initial** + 6-digit PIN |
| Q15 | Auth UX | Separate **Create account** and **Sign in** |
| Arch | Live + API | TanStack Start monolith + polling; WS later if time |

## Open items (resolve during build if needed)

1. Finalize claim TTL / heartbeat behavior (Q11).
2. Precise behavior when roster changes while some seats are already paid.
3. Concurrent Pay races (two toggles at once) — use transactional updates / last-write or host-authoritative rules.
4. Hosting target for the hackathon day (repo has Vercel config; original brief mentioned Railway) — pick one when deploying.
5. Exact rate-limit / lockout thresholds for host sign-in.

## Current codebase note

The repo is a TanStack Start starter with Drizzle demo `todos`, Neon plugin, and various demo routes (AI, guitars, etc.). No bill-splitter domain schema or flows exist yet. MVP work should add domain tables and routes; demo noise can be stripped as needed.
