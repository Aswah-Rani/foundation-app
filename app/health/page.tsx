import type { Metadata } from "next";
import { HealthStatusPanel } from "./HealthStatusPanel";

export const metadata: Metadata = {
  title: "Health Check",
  description: "Live status from the /api/health endpoint.",
};

export default function HealthPage() {
  return (
    <div className="mx-auto w-full max-w-desktop px-page-x py-page-y">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Health Check
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          This page loads data from{" "}
          <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm text-foreground">
            /api/health
          </code>{" "}
          so you can confirm the API is responding with a status and timestamp.
        </p>
        <div className="mt-8">
          <HealthStatusPanel />
        </div>
      </div>
    </div>
  );
}
