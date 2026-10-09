import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Foundations assignment — Phase 3: Build (Core).",
};

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-desktop px-page-x py-page-y">
      <section className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          Phase 3: Build (Core)
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Welcome to Foundations App
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          A clean Next.js starter with App Router, TypeScript, and Tailwind CSS.
          Explore the dashboard or verify your API with the health check.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/health"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-surface-elevated px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            Health Check
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-4 border-t border-border pt-10 sm:grid-cols-3">
        {[
          { label: "App Router", detail: "File-based routing with Server Components." },
          { label: "TypeScript", detail: "Typed components and API routes." },
          { label: "Tailwind CSS", detail: "Responsive layout from 375px to 1280px." },
        ].map((item) => (
          <div key={item.label} className="rounded-lg bg-surface p-4">
            <h2 className="font-medium text-foreground">{item.label}</h2>
            <p className="mt-1 text-sm text-muted">{item.detail}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
