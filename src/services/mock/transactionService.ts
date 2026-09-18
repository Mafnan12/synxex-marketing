import type { TransactionService } from "../types";
import type { Transaction } from "@/types";
import { withLatency } from "./latency";

const transactions: Transaction[] = [
  { id: "t1", referenceId: "SYX-20260917-0041", vertical: "crypto", description: "BTC/USD limit buy filled", direction: "debit", amount: 15_301.03, currency: "USD", status: "completed", timestamp: "2026-09-16T11:02:00Z" },
  { id: "t2", referenceId: "SYX-20260916-0038", vertical: "banking", description: "Inbound wire transfer", direction: "credit", amount: 5_000.0, currency: "USD", status: "completed", timestamp: "2026-09-16T09:15:00Z" },
  { id: "t3", referenceId: "SYX-20260915-0022", vertical: "remittance", description: "Remittance to Manila, PH", direction: "debit", amount: 1_200.0, currency: "USD", status: "processing", timestamp: "2026-09-15T18:47:00Z", fees: { networkFee: 0, platformFee: 4.5, fxSpread: 6.2, currency: "USD" } },
  { id: "t4", referenceId: "SYX-20260915-0011", vertical: "cards", description: "Card top-up", direction: "debit", amount: 500.0, currency: "USD", status: "completed", timestamp: "2026-09-15T08:30:00Z" },
  { id: "t5", referenceId: "SYX-20260914-0004", vertical: "wallet", description: "USDT withdrawal to external wallet", direction: "debit", amount: 2_000.0, currency: "USDT", status: "confirming", timestamp: "2026-09-14T21:11:00Z" },
];

export const mockTransactionService: TransactionService = {
  async getRecentTransactions(limit = 10) {
    return withLatency(transactions.slice(0, limit));
  },
};
