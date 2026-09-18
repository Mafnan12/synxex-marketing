import type { AccountService } from "../types";
import type { AccountSnapshot } from "@/types";
import { withLatency } from "./latency";

const snapshot: AccountSnapshot = {
  account: {
    id: "acct_demo_001",
    displayName: "Alex Morgan",
    email: "alex.morgan@example.com",
    jurisdiction: "SG",
    accountTier: "retail",
    createdAt: "2025-11-02T09:14:00Z",
  },
  totalPortfolioValue: 284_912.47,
  availableBalance: 42_310.18,
  todaysChangeValue: 3_218.55,
  todaysChangePercent: 1.14,
  subAccounts: [
    { id: "sa_crypto", vertical: "crypto", label: "Crypto Exchange", primaryCurrency: "USD", balance: 118_204.32, allocation: 0.415 },
    { id: "sa_forex", vertical: "forex", label: "Forex", primaryCurrency: "USD", balance: 46_120.0, allocation: 0.162 },
    { id: "sa_stocks", vertical: "stocks", label: "Stocks", primaryCurrency: "USD", balance: 38_940.75, allocation: 0.137 },
    { id: "sa_banking", vertical: "banking", label: "Banking", primaryCurrency: "USD", balance: 42_310.18, allocation: 0.149 },
    { id: "sa_cards", vertical: "cards", label: "Cards", primaryCurrency: "USD", balance: 4_120.0, allocation: 0.014 },
    { id: "sa_remittance", vertical: "remittance", label: "Remittance", primaryCurrency: "USD", balance: 1_240.5, allocation: 0.004 },
    { id: "sa_wallet", vertical: "wallet", label: "Web3 Wallet", primaryCurrency: "USD", balance: 33_976.72, allocation: 0.119 },
  ],
};

export const mockAccountService: AccountService = {
  async getAccountSnapshot() {
    return withLatency(snapshot);
  },
};
