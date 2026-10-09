import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/health", label: "Health Check" },
] as const;

export function Navbar() {
  return (
    <header className="border-b border-border bg-surface-elevated">
      <div className="mx-auto flex w-full max-w-desktop items-center justify-between gap-4 px-page-x py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          Foundations
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
