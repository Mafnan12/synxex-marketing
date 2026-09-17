/**
 * Jurisdiction-aware, API-driven KYC model. The UI never hardcodes legal
 * requirements — tiers, requirements, and review states come from the
 * KYC service layer so they can vary by country/product/risk tier.
 */

export type KycTierLevel = 1 | 2 | 3 | 4 | 5;

export type KycTierStatus =
  | "locked"
  | "not-started"
  | "in-progress"
  | "under-review"
  | "approved"
  | "rejected"
  | "expired";

export interface KycRequirementItem {
  id: string;
  label: string;
  description: string;
  completed: boolean;
}

export interface KycTier {
  level: KycTierLevel;
  name: string;
  description: string;
  status: KycTierStatus;
  requirements: KycRequirementItem[];
  nextStep: string | null;
  estimatedReview: string | null;
  unlocks: string[];
}

export type KycProviderStatus = "active" | "degraded" | "failed-over" | "unavailable";

export interface KycProviderState {
  providerId: string;
  providerLabel: string;
  status: KycProviderStatus;
  /** True once this provider has taken over an in-flight session from a failed provider */
  isFailoverTarget: boolean;
}

export interface KycProfile {
  currentTier: KycTierLevel;
  jurisdiction: string;
  tiers: KycTier[];
  activeProvider: KycProviderState;
}
