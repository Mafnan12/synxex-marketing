import Link from "next/link";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, primaryCta, secondaryCta, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40" style={{ background: "#d6280f" }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(150deg, #ff7a2e 0%, #f4430f 30%, #d6280f 60%, #7a1220 100%)," +
            "radial-gradient(ellipse 55% 70% at 88% 0%, rgba(255,176,90,0.55), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(10,4,4,0.1) 0%, transparent 30%, rgba(6,6,8,0.92) 100%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80">{description}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="rounded-md bg-gradient-to-r from-[#ff6a2b] via-[#e2321f] to-[#5c1023] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(226,50,31,0.3)] transition-opacity hover:opacity-90"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="rounded-md border border-white/40 px-5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:border-white/70 hover:text-white"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
