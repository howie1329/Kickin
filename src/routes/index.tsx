import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="page-wrap px-4 pb-8 pt-10 sm:pt-14">
      <section className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 sm:py-16">
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />

        <p className="font-[Fraunces,serif] text-5xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-6xl">
          Kickin
        </p>
        <h1 className="mt-4 max-w-xl text-2xl font-semibold leading-snug tracking-tight text-[var(--sea-ink)] sm:text-3xl">
          Split the check. Settle the table.
        </h1>
        <p className="mt-4 max-w-md text-base text-[var(--sea-ink-soft)] sm:text-lg">
          Host a bill, share a link, and watch shares update as people join and
          mark paid.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/about"
            className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
          >
            How it works
          </Link>
          <span
            className="rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink-soft)]"
            title="Coming next"
          >
            Create account
          </span>
        </div>
      </section>
    </main>
  )
}
