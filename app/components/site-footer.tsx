import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="px-6 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 text-sm text-[var(--muted)] sm:flex-row">
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-[var(--accent)]"
          />
          <span className="font-medium text-[var(--foreground)]">Untap</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="#" className="transition-colors hover:text-[var(--foreground)]">
            Privacy
          </Link>
          <Link href="#" className="transition-colors hover:text-[var(--foreground)]">
            Terms
          </Link>
          <Link href="#" className="transition-colors hover:text-[var(--foreground)]">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
