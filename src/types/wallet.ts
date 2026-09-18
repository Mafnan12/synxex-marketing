export type ChainFamily = "evm" | "btc-family" | "non-evm" | "memo-tag";

export interface ChainConfig {
  id: string;
  networkName: string;
  family: ChainFamily;
  requiresMemo: boolean;
  confirmationsRequired: number;
  nativeAsset: string;
}

export type DepositWithdrawalStatus =
  | "pending"
  | "processing"
  | "confirming"
  | "completed"
  | "failed"
  | "rejected"
  | "under-review";

export type GasTier = "economy" | "standard" | "fast";

export interface GasEstimate {
  tier: GasTier;
  networkFee: number;
  currency: string;
  estimatedMinutes: number;
}
