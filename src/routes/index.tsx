import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 pb-8 pt-10 sm:pt-14">
      <section className="rounded-lg border border-border bg-card px-6 py-12 text-card-foreground shadow-sm sm:px-10 sm:py-16">
        <p className="font-serif text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Kickin
        </p>
        <h1 className="mt-4 max-w-xl text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">
          Split the check. Settle the table.
        </h1>
        <p className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
          Host a bill, share a link, and watch shares update as people join and
          mark paid.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground no-underline transition hover:opacity-90"
          >
            How it works
          </Link>
          <span
            className="inline-flex items-center justify-center rounded-md border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground"
            title="Coming next"
          >
            Create account
          </span>
        </div>
      </section>
    </main>
  )
}
