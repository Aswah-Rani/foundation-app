"use client";

import { useEffect, useState } from "react";

type HealthPayload = {
  status: string;
  timestamp: string;
};

type LoadState =
  | { kind: "loading" }
  | { kind: "success"; data: HealthPayload }
  | { kind: "error"; message: string };

export function HealthStatusPanel() {
  const [state, setState] = useState<LoadState>({ kind: "loading" });

  useEffect(() => {
    let cancelled = false;

    async function loadHealth() {
      try {
        const response = await fetch("/api/health");
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = (await response.json()) as HealthPayload;
        if (!cancelled) {
          setState({ kind: "success", data });
        }
      } catch (error) {
        if (!cancelled) {
          setState({
            kind: "error",
            message:
              error instanceof Error ? error.message : "Unable to load health data.",
          });
        }
      }
    }

    void loadHealth();

    return () => {
      cancelled = true;
    };
  }, []);

  if (state.kind === "loading") {
    return (
      <div
        className="rounded-lg border border-border bg-surface-elevated p-6 text-muted"
        role="status"
        aria-live="polite"
      >
        Checking API health…
      </div>
    );
  }

  if (state.kind === "error") {
    return (
      <div
        className="rounded-lg border border-danger/30 bg-danger/5 p-6 text-danger"
        role="alert"
      >
        {state.message}
      </div>
    );
  }

  const { status, timestamp } = state.data;
  const formattedTime = new Date(timestamp).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "medium",
  });

  return (
    <dl className="grid gap-4 rounded-lg border border-border bg-surface-elevated p-6 sm:grid-cols-2">
      <div>
        <dt className="text-sm font-medium text-muted">Status</dt>
        <dd className="mt-1 font-mono text-lg font-semibold text-success">
          {status}
        </dd>
      </div>
      <div>
        <dt className="text-sm font-medium text-muted">Timestamp</dt>
        <dd className="mt-1 font-mono text-base text-foreground">
          {formattedTime}
        </dd>
        <dd className="mt-1 font-mono text-xs text-muted">{timestamp}</dd>
      </div>
    </dl>
  );
}
