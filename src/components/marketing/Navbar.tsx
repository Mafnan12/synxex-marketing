"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight, Send } from "lucide-react";
import { primaryPillNav, megaMenuColumns, productLinks, companyLinks } from "@/config/marketingNav";
import { cn } from "@/utils/cn";
import { SignatureLogo } from "./SignatureLogo";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.24 2.5h3.3l-7.2 8.23 8.47 11.27h-6.63l-5.19-6.79-5.94 6.79H1.75l7.7-8.8L1.35 2.5h6.8l4.69 6.2 5.4-6.2Zm-1.16 17.52h1.83L7.02 4.4H5.06l12.02 15.62Z" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    let raf = 0;

    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const scrollingDown = y > lastY.current;

        if (mobileOpen) {
          setHidden(false);
        } else if (scrollingDown && y > 120) {
          setHidden(true);
          setResourcesOpen(false);
        } else if (!scrollingDown || y < 120) {
          setHidden(false);
        }

        lastY.current = y;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-300 ease-out sm:px-4",
        hidden ? "-translate-y-[calc(100%+2rem)]" : "translate-y-0"
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 rounded-full border border-white/[0.08] bg-[#08080a]/90 pl-4 pr-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:pl-5">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <SignatureLogo size={26} />
        </Link>

        {/* Centered pill nav */}
        <nav
          className="hidden items-center gap-0.5 rounded-full border border-white/[0.06] bg-black/40 p-1 lg:flex"
          aria-label="Primary"
        >
          {primaryPillNav.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors",
                  isActive
                    ? "bg-gradient-to-r from-[#ff6a2b]/20 to-[#5c1023]/25 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                {item.label}
                {item.badge && (
                  <span className="rounded-full bg-[#ff6a2b] px-1.5 py-[1px] text-[9px] font-bold uppercase leading-tight tracking-wide text-black">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setResourcesOpen((o) => !o)}
              aria-expanded={resourcesOpen}
              className={cn(
                "flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors",
                resourcesOpen
                  ? "bg-gradient-to-r from-[#ff6a2b]/20 to-[#5c1023]/25 text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              )}
            >
              Resources
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", resourcesOpen && "rotate-180")} />
            </button>

            {resourcesOpen && (
              <div className="absolute left-1/2 top-full w-[min(90vw,720px)] -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0d]/98 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                  <Link
                    href="/#products"
                    className="group flex items-center justify-between border-b border-white/[0.06] bg-gradient-to-r from-[#ff6a2b]/10 to-transparent px-6 py-4 text-sm font-semibold text-white transition-colors hover:from-[#ff6a2b]/20"
                  >
                    Explore the full SynxEx platform
                    <ArrowRight className="h-4 w-4 text-[#ff8a52] transition-transform group-hover:translate-x-1" />
                  </Link>
                  <div className="grid grid-cols-3 gap-6 px-6 py-6">
                    {megaMenuColumns.map((col) => (
                      <div key={col.heading}>
                        <p className="text-[11px] font-medium uppercase tracking-wider text-white/35">{col.heading}</p>
                        <ul className="mt-3 space-y-2.5">
                          {col.links.map((link) => (
                            <li key={link.label + link.href}>
                              <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right cluster */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <div className="flex items-center gap-1">
            <a
              href="#"
              aria-label="SynxEx on X (coming soon)"
              title="X — coming soon"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <XIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="SynxEx on Telegram (coming soon)"
              title="Telegram — coming soon"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Send className="h-3.5 w-3.5" />
            </a>
          </div>
          <span className="h-5 w-px bg-white/15" aria-hidden="true" />
          <Link href="/login" className="px-1 text-[13px] font-medium text-white/65 transition-colors hover:text-white">
            Sign in
          </Link>
          <Link
            href="/login"
            className="rounded-full bg-gradient-to-r from-[#ff6a2b] via-[#e2321f] to-[#5c1023] px-4 py-2 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(226,50,31,0.35)] transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center text-white lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/[0.08] bg-[#08080a]/98 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="grid grid-cols-1 gap-0.5">
            {primaryPillNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5"
              >
                {item.label}
                {item.badge && (
                  <span className="rounded-full bg-[#ff6a2b] px-1.5 py-[1px] text-[9px] font-bold uppercase leading-tight tracking-wide text-black">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <p className="mt-3 border-t border-white/[0.06] px-3 pb-1 pt-3 text-[11px] font-medium uppercase tracking-wider text-white/35">
            Resources
          </p>
          <div className="grid grid-cols-1 gap-0.5">
            {[...productLinks.filter((l) => !primaryPillNav.some((p) => p.href === l.href)), ...companyLinks].map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="mt-3 flex items-center justify-center gap-3 border-t border-white/[0.06] pt-3">
            <a href="#" aria-label="SynxEx on X (coming soon)" className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 hover:bg-white/10 hover:text-white">
              <XIcon className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="SynxEx on Telegram (coming soon)" className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 hover:bg-white/10 hover:text-white">
              <Send className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-3 flex gap-2 border-t border-white/[0.06] pt-3">
            <Link href="/login" className="flex-1 rounded-full border border-white/15 px-4 py-2.5 text-center text-sm font-medium text-white">
              Sign in
            </Link>
            <Link
              href="/login"
              className="flex-1 rounded-full bg-gradient-to-r from-[#ff6a2b] via-[#e2321f] to-[#5c1023] px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
