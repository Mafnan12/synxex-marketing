import Link from "next/link";
import type { MarketTicker } from "@/types";
import { CurrencyAmount } from "./CurrencyAmount";
import { PercentageChange } from "./PercentageChange";
import { formatCompactNumber } from "@/utils/format";

export function MarketTable({ tickers }: { tickers: MarketTicker[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead>
          <tr className="border-b border-sx-border text-xs text-sx-text-tertiary">
            <th className="px-5 py-3 font-medium">Market</th>
            <th className="px-5 py-3 font-medium">Price</th>
            <th className="px-5 py-3 font-medium">24h change</th>
            <th className="px-5 py-3 font-medium">24h volume</th>
            <th className="px-5 py-3" />
          </tr>
        </thead>
        <tbody>
          {tickers.map((t) => (
            <tr key={t.symbol} className="border-b border-sx-border last:border-b-0 hover:bg-sx-surface-sunken">
              <td className="px-5 py-3.5">
                <p className="font-medium text-sx-text-primary">{t.symbol}</p>
                <p className="text-xs text-sx-text-tertiary">{t.displayName}</p>
              </td>
              <td className="px-5 py-3.5">
                <CurrencyAmount amount={t.price} currency={t.currency} size="sm" />
              </td>
              <td className="px-5 py-3.5">
                <PercentageChange value={t.changePercent24h} />
              </td>
              <td className="px-5 py-3.5 tabular-nums text-sx-text-secondary">
                {t.volume24h > 0 ? formatCompactNumber(t.volume24h) : "—"}
              </td>
              <td className="px-5 py-3.5 text-right">
                <Link
                  href={`/app/trade?symbol=${encodeURIComponent(t.symbol)}`}
                  className="text-xs font-medium text-sx-brand hover:underline"
                >
                  Trade
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-sx-border px-5 py-2 text-[11px] text-sx-text-tertiary">
        Demo market data for interface development — not connected to a live feed.
      </p>
    </div>
  );
}
