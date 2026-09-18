import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function Section({
  children,
  className,
  tone = "base",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "base" | "raised";
  id?: string;
}) {
  return (
    <section id={id} className={cn("bg-[#0a0504] py-16 sm:py-24", tone === "raised" && "bg-[#120705]", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/45">{eyebrow}</span>
      )}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-white/55">{description}</p>}
    </div>
  );
}
