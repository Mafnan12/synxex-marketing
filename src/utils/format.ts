import { getCurrency } from "@/config/currencies";

export function formatCurrency(
  amount: number,
  currencyCode: string,
  options?: { signDisplay?: "auto" | "always" | "never" }
): string {
  const currency = getCurrency(currencyCode);

  if (currency.kind === "crypto") {
    const formatted = amount.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: currency.decimals,
      signDisplay: options?.signDisplay ?? "auto",
    });
    return `${formatted} ${currency.code}`;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.code,
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: currency.decimals,
    maximumFractionDigits: currency.decimals,
    signDisplay: options?.signDisplay ?? "auto",
  }).format(amount);
}

export function formatPercentage(value: number, options?: { signDisplay?: "auto" | "always" | "never" }): string {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: options?.signDisplay ?? "auto",
  }).format(value / 100);
}

export function formatCompactNumber(value: number): string {
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 2 }).format(value);
}

export function formatTimestamp(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}

export function formatRelativeTime(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const diffMin = Math.round(diffMs / 60000);
  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.round(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  const diffDay = Math.round(diffHr / 24);
  return `${diffDay}d ago`;
}

export function maskAccountNumber(value: string, visibleTrailing = 4): string {
  const trailing = value.slice(-visibleTrailing);
  return `•••• ${trailing}`;
}
