import type { SubAccount } from "@/types";
import { CurrencyAmount } from "./CurrencyAmount";
import { formatPercentage } from "@/utils/format";

const verticalColor: Record<SubAccount["vertical"], string> = {
  crypto: "bg-amber-500",
  forex: "bg-sky-500",
  stocks: "bg-violet-500",
  banking: "bg-emerald-500",
  cards: "bg-pink-500",
  remittance: "bg-orange-500",
  wallet: "bg-indigo-500",
  "ai-agents": "bg-teal-500",
};

/** Visualizes internal virtual sub-account allocation — never framed as separate external wallets. */
export function SubAccountAllocation({ subAccounts }: { subAccounts: SubAccount[] }) {
  return (
    <div className="space-y-4">
      <div className="flex h-2 w-full overflow-hidden rounded-full bg-sx-surface-sunken">
        {subAccounts.map((sa) => (
          <div
            key={sa.id}
            className={verticalColor[sa.vertical]}
            style={{ width: `${sa.allocation * 100}%` }}
            title={`${sa.label}: ${formatPercentage(sa.allocation * 100)}`}
          />
        ))}
      </div>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
        {subAccounts.map((sa) => (
          <li key={sa.id} className="flex items-center justify-between gap-3 text-sm">
            <span className="flex items-center gap-2 text-sx-text-secondary">
              <span className={`h-2 w-2 shrink-0 rounded-full ${verticalColor[sa.vertical]}`} />
              {sa.label}
            </span>
            <span className="flex items-center gap-2">
              <CurrencyAmount amount={sa.balance} currency={sa.primaryCurrency} size="sm" />
              <span className="w-12 text-right text-xs text-sx-text-tertiary">{formatPercentage(sa.allocation * 100)}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
