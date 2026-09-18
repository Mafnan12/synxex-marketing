import { formatCurrency } from "@/utils/format";
import { cn } from "@/utils/cn";

interface CurrencyAmountProps {
  amount: number;
  currency: string;
  className?: string;
  signDisplay?: "auto" | "always" | "never";
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-2xl",
  xl: "text-4xl",
};

export function CurrencyAmount({ amount, currency, className, signDisplay = "never", size = "md" }: CurrencyAmountProps) {
  return (
    <span className={cn("tabular-nums font-semibold text-sx-text-primary", sizeClasses[size], className)}>
      {formatCurrency(amount, currency, { signDisplay })}
    </span>
  );
}
