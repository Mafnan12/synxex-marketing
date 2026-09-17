"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ShieldCheck, Settings, LogOut, Globe } from "lucide-react";
import { useAccountStore } from "@/state/useAccountStore";
import { KycStatusBadge } from "@/components/financial/KycStatusBadge";

export function AccountPanel() {
  const { snapshot, fetch } = useAccountStore();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const account = snapshot?.account;
  const initials = account?.displayName
    ? account.displayName.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase()
    : "--";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full border border-sx-border py-1 pl-1 pr-2.5 hover:bg-sx-surface-sunken"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sx-brand-soft text-xs font-semibold text-sx-brand">
          {initials}
        </span>
        <ChevronDown className="h-3.5 w-3.5 text-sx-text-tertiary" />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-72 rounded-[var(--sx-radius-lg)] border border-sx-border bg-sx-surface shadow-[var(--sx-shadow-md)]">
          <div className="border-b border-sx-border px-4 py-3.5">
            <p className="truncate text-sm font-semibold text-sx-text-primary">{account?.displayName ?? "Loading…"}</p>
            <p className="truncate text-xs text-sx-text-tertiary">{account?.email}</p>
            <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
              <KycStatusBadge status="in-progress" />
              <span className="inline-flex items-center gap-1 rounded-full bg-sx-neutral-soft px-2.5 py-1 text-xs font-medium text-sx-text-secondary">
                <Globe className="h-3 w-3" />
                {account?.jurisdiction ?? "—"}
              </span>
            </div>
          </div>
          <div className="p-1.5">
            <Link href="/app/kyc" className="flex items-center gap-2.5 rounded-[var(--sx-radius-sm)] px-3 py-2 text-sm text-sx-text-secondary hover:bg-sx-surface-sunken hover:text-sx-text-primary">
              <ShieldCheck className="h-4 w-4" /> Verification status
            </Link>
            <Link href="/app/settings" className="flex items-center gap-2.5 rounded-[var(--sx-radius-sm)] px-3 py-2 text-sm text-sx-text-secondary hover:bg-sx-surface-sunken hover:text-sx-text-primary">
              <Settings className="h-4 w-4" /> Account settings
            </Link>
            <button type="button" className="flex w-full items-center gap-2.5 rounded-[var(--sx-radius-sm)] px-3 py-2 text-left text-sm text-sx-negative hover:bg-sx-negative-soft">
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
