import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 px-4 backdrop-blur-lg">
      <nav className="mx-auto flex w-full max-w-3xl items-center gap-3 py-3 sm:py-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-semibold text-foreground no-underline shadow-xs sm:px-4 sm:py-2"
        >
          <span className="h-2 w-2 rounded-full bg-primary" />
          Kickin
        </Link>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
