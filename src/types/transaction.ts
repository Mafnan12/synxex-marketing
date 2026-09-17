import type { Vertical } from "./account";

export type TransactionStatus =
  | "pending"
  | "processing"
  | "confirming"
  | "completed"
  | "failed"
  | "rejected"
  | "under-review";

export type TransactionDirection = "credit" | "debit";

export interface TransactionFeeBreakdown {
  networkFee?: number;
  platformFee?: number;
  fxSpread?: number;
  providerFee?: number;
  currency: string;
}

export interface Transaction {
  id: string;
  referenceId: string;
  vertical: Vertical;
  description: string;
  direction: TransactionDirection;
  amount: number;
  currency: string;
  status: TransactionStatus;
  timestamp: string;
  fees?: TransactionFeeBreakdown;
}
