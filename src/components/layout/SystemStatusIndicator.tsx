"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSystemStatusStore } from "@/state/useSystemStatusStore";
import { cn } from "@/utils/cn";

export function SystemStatusIndicator() {
  const { services, fetch } = useSystemStatusStore();

  useEffect(() => {
    fetch();
  }, [fetch]);

  const hasDegraded = services.some((s) => s.state !== "operational");

  return (
    <Link
      href="/app/support"
      className="hidden items-center gap-2 rounded-full border border-sx-border px-3 py-1.5 text-xs font-medium text-sx-text-secondary hover:bg-sx-surface-sunken sm:flex"
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", hasDegraded ? "bg-sx-warning" : "bg-sx-positive")}
        aria-hidden
      />
      {hasDegraded ? "Partial degradation" : "All systems operational"}
    </Link>
  );
}
