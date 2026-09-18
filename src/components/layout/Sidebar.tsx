"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { primaryNavigation, secondaryNavigation } from "@/config/navigation";
import { cn } from "@/utils/cn";

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>("Markets");

  return (
    <aside
      className={cn(
        "hidden shrink-0 flex-col border-r border-sx-border bg-sx-surface transition-[width] duration-200 lg:flex",
        collapsed ? "w-[68px]" : "w-64"
      )}
    >
      <div className="flex h-16 items-center gap-2 border-b border-sx-border px-4">
        <Link href="/app/dashboard" className="flex items-center gap-2 overflow-hidden">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--sx-radius-sm)] bg-sx-brand text-sm font-bold text-white">
            SX
          </span>
          {!collapsed && <span className="truncate text-sm font-semibold tracking-tight">SynxEx</span>}
        </Link>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-2 py-3" aria-label="Primary">
        {primaryNavigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          const hasChildren = !!item.children?.length;
          const isExpanded = expandedGroup === item.label;

          return (
            <div key={item.href}>
              <div className="flex items-center">
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex flex-1 items-center gap-3 rounded-[var(--sx-radius-md)] px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sx-brand-soft text-sx-brand"
                      : "text-sx-text-secondary hover:bg-sx-surface-sunken hover:text-sx-text-primary"
                  )}
                >
                  <item.icon className="h-[18px] w-[18px] shrink-0" />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </Link>
                {!collapsed && hasChildren && (
                  <button
                    type="button"
                    onClick={() => setExpandedGroup(isExpanded ? null : item.label)}
                    aria-label={`Toggle ${item.label} submenu`}
                    aria-expanded={isExpanded}
                    className="rounded-md p-1.5 text-sx-text-tertiary hover:bg-sx-surface-sunken"
                  >
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", isExpanded && "rotate-180")} />
                  </button>
                )}
              </div>
              {!collapsed && hasChildren && isExpanded && (
                <div className="ml-[34px] mt-0.5 space-y-0.5 border-l border-sx-border pl-3">
                  {item.children!.map((child) => {
                    const childActive = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block rounded-md px-2.5 py-1.5 text-sm transition-colors",
                          childActive
                            ? "text-sx-brand font-medium"
                            : "text-sx-text-tertiary hover:text-sx-text-primary"
                        )}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="space-y-0.5 border-t border-sx-border px-2 py-3">
        {secondaryNavigation.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-[var(--sx-radius-md)] px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sx-brand-soft text-sx-brand"
                  : "text-sx-text-secondary hover:bg-sx-surface-sunken hover:text-sx-text-primary"
              )}
            >
              <item.icon className="h-[18px] w-[18px] shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          className="flex w-full items-center gap-3 rounded-[var(--sx-radius-md)] px-3 py-2 text-sm font-medium text-sx-text-tertiary hover:bg-sx-surface-sunken hover:text-sx-text-primary"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="h-[18px] w-[18px]" /> : <ChevronLeft className="h-[18px] w-[18px]" />}
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </aside>
  );
}
