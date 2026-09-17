import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type Tone = "neutral" | "positive" | "negative" | "warning" | "info";

const toneClasses: Record<Tone, string> = {
  neutral: "bg-sx-neutral-soft text-sx-text-secondary",
  positive: "bg-sx-positive-soft text-sx-positive",
  negative: "bg-sx-negative-soft text-sx-negative",
  warning: "bg-sx-warning-soft text-sx-warning",
  info: "bg-sx-info-soft text-sx-info",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  dot?: boolean;
}

export function Badge({ className, tone = "neutral", dot, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {dot && <span className={cn("h-1.5 w-1.5 rounded-full", toneClasses[tone].split(" ")[1])} style={{ backgroundColor: "currentColor" }} />}
      {children}
    </span>
  );
}
