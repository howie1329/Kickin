import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12">
      <section className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-8">
        <p className="mb-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
          How it works
        </p>
        <h1 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          One receipt. Your table. Done.
        </h1>
        <ol className="m-0 max-w-2xl list-decimal space-y-3 pl-5 text-base leading-7 text-muted-foreground">
          <li>Host signs in and opens a bill with total, tip, and seats.</li>
          <li>Share the link and 4-digit bill code with the table.</li>
          <li>Guests claim a seat, see their equal share, and mark paid.</li>
          <li>Watch the remaining balance fall as everyone settles up.</li>
        </ol>
        <p className="mt-6 mb-0">
          <Link
            to="/"
            className="font-semibold text-foreground underline-offset-4 hover:underline"
          >
            Back home
          </Link>
        </p>
      </section>
    </main>
  )
}
