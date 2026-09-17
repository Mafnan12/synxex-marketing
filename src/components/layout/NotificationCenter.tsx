"use client";

import { useEffect, useRef, useState } from "react";
import { Bell, ShieldAlert, TrendingUp, Landmark, Wallet as WalletIcon, Send, ShieldCheck, Bot, Server } from "lucide-react";
import { useNotificationStore } from "@/state/useNotificationStore";
import { formatRelativeTime } from "@/utils/format";
import { cn } from "@/utils/cn";
import type { NotificationCategory } from "@/types";

const categoryIcon: Record<NotificationCategory, typeof Bell> = {
  security: ShieldAlert,
  trading: TrendingUp,
  banking: Landmark,
  cards: WalletIcon,
  wallet: WalletIcon,
  remittance: Send,
  kyc: ShieldCheck,
  "ai-agents": Bot,
  system: Server,
};

export function NotificationCenter() {
  const { items, status, fetch, markAsRead, unreadCount } = useNotificationStore();
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

  const unread = unreadCount();

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={`Notifications${unread ? `, ${unread} unread` : ""}`}
        aria-expanded={open}
        className="relative flex h-9 w-9 items-center justify-center rounded-full text-sx-text-secondary hover:bg-sx-surface-sunken"
      >
        <Bell className="h-[18px] w-[18px]" />
        {unread > 0 && (
          <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-sx-negative" />
        )}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-[360px] max-w-[calc(100vw-2rem)] rounded-[var(--sx-radius-lg)] border border-sx-border bg-sx-surface shadow-[var(--sx-shadow-md)]">
          <div className="flex items-center justify-between border-b border-sx-border px-4 py-3">
            <p className="text-sm font-semibold">Notifications</p>
            {unread > 0 && <span className="text-xs text-sx-text-tertiary">{unread} unread</span>}
          </div>
          <div className="max-h-[400px] overflow-y-auto">
            {status === "loading" && items.length === 0 && (
              <div className="px-4 py-6 text-center text-sm text-sx-text-tertiary">Loading…</div>
            )}
            {status === "success" && items.length === 0 && (
              <div className="px-4 py-6 text-center text-sm text-sx-text-tertiary">You&apos;re all caught up.</div>
            )}
            {items.map((n) => {
              const Icon = categoryIcon[n.category];
              return (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => markAsRead(n.id)}
                  className={cn(
                    "flex w-full items-start gap-3 border-b border-sx-border px-4 py-3 text-left last:border-b-0 hover:bg-sx-surface-sunken",
                    !n.read && "bg-sx-brand-soft/40"
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                      n.severity === "critical" && "bg-sx-negative-soft text-sx-negative",
                      n.severity === "warning" && "bg-sx-warning-soft text-sx-warning",
                      n.severity === "success" && "bg-sx-positive-soft text-sx-positive",
                      n.severity === "info" && "bg-sx-info-soft text-sx-info"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1 space-y-0.5">
                    <span className="flex items-center gap-2">
                      <span className="truncate text-sm font-medium text-sx-text-primary">{n.title}</span>
                      {!n.read && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sx-brand" />}
                    </span>
                    <span className="block text-xs text-sx-text-secondary">{n.body}</span>
                    <span className="block text-[11px] text-sx-text-tertiary">{formatRelativeTime(n.timestamp)}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
