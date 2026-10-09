import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Overview and quick links for your Foundations project.",
};

const placeholders = [
  {
    title: "Project status",
    body: "Core pages, layout, and health API are in place. Extend this area with assignment-specific features.",
  },
  {
    title: "Next steps",
    body: "Wire up data sources, authentication, or dashboards as your Phase 3 requirements evolve.",
  },
  {
    title: "System health",
    body: "Use the Health Check page to verify the API endpoint anytime.",
  },
] as const;

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-desktop px-page-x py-page-y">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Dashboard
          </h1>
          <p className="mt-2 max-w-xl text-base text-muted">
            A central place for summaries and shortcuts while you build out Phase
            3.
          </p>
        </div>
        <Link
          href="/health"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Run health check
        </Link>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {placeholders.map((item) => (
          <li
            key={item.title}
            className="rounded-lg border border-border bg-surface-elevated p-5 shadow-sm"
          >
            <h2 className="text-lg font-medium text-foreground">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
