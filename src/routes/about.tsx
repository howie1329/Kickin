import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">How it works</p>
        <h1 className="display-title mb-4 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
          One receipt. Your table. Done.
        </h1>
        <ol className="m-0 max-w-2xl list-decimal space-y-3 pl-5 text-base leading-7 text-[var(--sea-ink-soft)]">
          <li>Host signs in and opens a bill with total, tip, and seats.</li>
          <li>Share the link and 4-digit bill code with the table.</li>
          <li>Guests claim a seat, see their equal share, and mark paid.</li>
          <li>Watch the remaining balance fall as everyone settles up.</li>
        </ol>
        <p className="mt-6 mb-0">
          <Link
            to="/"
            className="font-semibold text-[var(--lagoon-deep)] no-underline hover:underline"
          >
            Back home
          </Link>
        </p>
      </section>
    </main>
  )
}
