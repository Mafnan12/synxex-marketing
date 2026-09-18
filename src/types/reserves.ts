/**
 * Proof of Reserves data is backend/API-sourced only. When unavailable, the
 * UI must render an explicit "integration pending" state — never fabricate
 * reserves, liabilities, or audit results.
 */

export interface ReserveAssetAllocation {
  asset: string;
  amountUsd: number;
  percentOfReserves: number;
}

export interface ProofOfReservesSnapshot {
  available: boolean;
  totalReservesUsd: number | null;
  totalLiabilitiesUsd: number | null;
  reserveRatio: number | null;
  verifiedAt: string | null;
  methodologyUrl: string | null;
  allocation: ReserveAssetAllocation[];
}
