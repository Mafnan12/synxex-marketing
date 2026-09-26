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
    <section
      id={id}
      className={cn(
        "relative overflow-hidden bg-[#090909] py-20 sm:py-24",
        tone === "raised" && "bg-[radial-gradient(circle_at_top,_rgba(255,106,43,0.08),transparent_45%),#120a09]",
        className,
      )}
    >
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
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#ffb38f]">{eyebrow}</span>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-white/60">{description}</p>}
    </div>
  );
}
