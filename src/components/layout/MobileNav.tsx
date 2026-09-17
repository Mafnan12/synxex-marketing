"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, LineChart, ArrowLeftRight, WalletMinimal, Menu } from "lucide-react";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { primaryNavigation, secondaryNavigation } from "@/config/navigation";

const quickItems = [
  { label: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
  { label: "Markets", href: "/app/markets", icon: LineChart },
  { label: "Trade", href: "/app/trade", icon: ArrowLeftRight },
  { label: "Wallet", href: "/app/wallet", icon: WalletMinimal },
];

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed inset-x-0 bottom-0 z-40 flex items-stretch justify-around border-t border-sx-border bg-sx-surface lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        aria-label="Primary"
      >
        {quickItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium",
                isActive ? "text-sx-brand" : "text-sx-text-tertiary"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium text-sx-text-tertiary"
        >
          <Menu className="h-5 w-5" />
          More
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end lg:hidden">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div
            className="relative max-h-[80vh] overflow-y-auto rounded-t-[var(--sx-radius-lg)] border-t border-sx-border bg-sx-surface p-4"
            style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)" }}
          >
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-sx-border-strong" />
            <div className="grid grid-cols-3 gap-2">
              {[...primaryNavigation, ...secondaryNavigation].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex flex-col items-center gap-2 rounded-[var(--sx-radius-md)] border border-sx-border px-2 py-3 text-center text-xs font-medium text-sx-text-secondary hover:bg-sx-surface-sunken"
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
