import type { Transaction } from "@/types";
import { CurrencyAmount } from "./CurrencyAmount";
import { TransactionStatusBadge } from "./TransactionStatusBadge";
import { formatRelativeTime } from "@/utils/format";
import { cn } from "@/utils/cn";

const verticalLabel: Record<Transaction["vertical"], string> = {
  crypto: "Crypto",
  forex: "Forex",
  stocks: "Stocks",
  banking: "Banking",
  cards: "Cards",
  remittance: "Remittance",
  wallet: "Wallet",
  "ai-agents": "AI Agents",
};

export function TransactionRow({ transaction }: { transaction: Transaction }) {
  const isCredit = transaction.direction === "credit";
  return (
    <div className="flex items-center justify-between gap-4 border-b border-sx-border px-5 py-3.5 last:border-b-0">
      <div className="min-w-0 space-y-0.5">
        <p className="truncate text-sm font-medium text-sx-text-primary">{transaction.description}</p>
        <p className="text-xs text-sx-text-tertiary">
          {verticalLabel[transaction.vertical]} · {transaction.referenceId} · {formatRelativeTime(transaction.timestamp)}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <CurrencyAmount
          amount={isCredit ? transaction.amount : -transaction.amount}
          currency={transaction.currency}
          signDisplay="always"
          className={cn("text-sm", isCredit ? "text-sx-positive" : "text-sx-text-primary")}
        />
        <TransactionStatusBadge status={transaction.status} />
      </div>
    </div>
  );
}
