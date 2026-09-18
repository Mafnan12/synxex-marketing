/**
 * Unified account model.
 * One authenticated identity owns exactly one UnifiedAccount. Every vertical
 * (crypto, forex, stocks, banking, cards, remittance, wallet) is represented
 * as an internal virtual sub-account allocation, never a separate account.
 */

export type Vertical =
  | "crypto"
  | "forex"
  | "stocks"
  | "banking"
  | "cards"
  | "remittance"
  | "wallet"
  | "ai-agents";

export type AccountTier = "retail" | "professional-applicant" | "under-review" | "professional";

export interface UnifiedAccount {
  id: string;
  displayName: string;
  email: string;
  jurisdiction: string; // ISO 3166-1 alpha-2, drives jurisdiction-aware rules
  accountTier: AccountTier;
  createdAt: string;
}

export interface SubAccount {
  id: string;
  vertical: Vertical;
  label: string;
  /** ISO 4217 for fiat, asset symbol for crypto */
  primaryCurrency: string;
  balance: number;
  /** Share of total portfolio value, 0-1, for allocation visualizations */
  allocation: number;
}

export interface AccountSnapshot {
  account: UnifiedAccount;
  totalPortfolioValue: number;
  availableBalance: number;
  todaysChangeValue: number;
  todaysChangePercent: number;
  subAccounts: SubAccount[];
}
