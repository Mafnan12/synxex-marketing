import type { ReservesService } from "../types";
import type { ProofOfReservesSnapshot } from "@/types";
import { withLatency } from "./latency";

/**
 * No live reserves/audit integration exists yet. Per product policy, this
 * must render as an explicit "integration pending" state rather than
 * fabricated figures — see src/app/(platform)/proof-of-reserves/page.tsx.
 */
const snapshot: ProofOfReservesSnapshot = {
  available: false,
  totalReservesUsd: null,
  totalLiabilitiesUsd: null,
  reserveRatio: null,
  verifiedAt: null,
  methodologyUrl: null,
  allocation: [],
};

export const mockReservesService: ReservesService = {
  async getProofOfReserves() {
    return withLatency(snapshot);
  },
};
