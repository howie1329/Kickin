export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-border px-4 pb-14 pt-10 text-muted-foreground">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">&copy; {year} Kickin</p>
        <p className="m-0 text-sm tracking-wide uppercase">
          Split the bill. Settle up.
        </p>
      </div>
    </footer>
  )
}
