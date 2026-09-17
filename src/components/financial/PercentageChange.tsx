import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import { formatPercentage } from "@/utils/format";
import { cn } from "@/utils/cn";

export function PercentageChange({ value, className }: { value: number; className?: string }) {
  const isPositive = value > 0;
  const isNegative = value < 0;
  const Icon = isPositive ? ArrowUpRight : isNegative ? ArrowDownRight : Minus;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 tabular-nums text-sm font-medium",
        isPositive && "text-sx-positive",
        isNegative && "text-sx-negative",
        !isPositive && !isNegative && "text-sx-text-tertiary",
        className
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {formatPercentage(Math.abs(value), { signDisplay: "never" })}
    </span>
  );
}
