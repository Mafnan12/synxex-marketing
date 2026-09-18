"use client";

import { Search } from "lucide-react";
import { NotificationCenter } from "./NotificationCenter";
import { AccountPanel } from "./AccountPanel";
import { SystemStatusIndicator } from "./SystemStatusIndicator";

export function Topbar() {
  return (
    <header
      className="sticky z-30 flex h-16 items-center gap-4 border-b border-sx-border bg-sx-surface px-4 sm:px-6 lg:px-8"
      style={{ top: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="relative hidden max-w-sm flex-1 sm:block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sx-text-tertiary" />
        <input
          type="search"
          placeholder="Search markets, transactions, agents…"
          className="h-9 w-full rounded-[var(--sx-radius-md)] border border-sx-border bg-sx-surface-sunken pl-9 pr-3 text-sm text-sx-text-primary placeholder:text-sx-text-tertiary focus:outline-none focus:ring-2 focus:ring-sx-brand"
        />
      </div>
      <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
        <SystemStatusIndicator />
        <NotificationCenter />
        <AccountPanel />
      </div>
    </header>
  );
}
