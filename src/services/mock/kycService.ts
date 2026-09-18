import type { KycService } from "../types";
import type { KycProfile } from "@/types";
import { withLatency } from "./latency";

const profile: KycProfile = {
  currentTier: 2,
  jurisdiction: "SG",
  activeProvider: {
    providerId: "provider_a",
    providerLabel: "Identity Verification Partner A",
    status: "active",
    isFailoverTarget: false,
  },
  tiers: [
    {
      level: 1,
      name: "Basic Account",
      description: "Email and phone verified. Limited access to demo/browse features.",
      status: "approved",
      requirements: [
        { id: "r1", label: "Email verification", description: "Confirm your email address", completed: true },
        { id: "r2", label: "Phone verification", description: "Confirm your phone number", completed: true },
      ],
      nextStep: null,
      estimatedReview: null,
      unlocks: ["Browse markets", "Explore AI agent marketplace"],
    },
    {
      level: 2,
      name: "Identity Verification",
      description: "Government ID verified. Enables deposits and core trading.",
      status: "approved",
      requirements: [
        { id: "r3", label: "Government-issued ID", description: "Upload a valid passport or national ID", completed: true },
        { id: "r4", label: "Liveness check", description: "Complete a short selfie verification", completed: true },
      ],
      nextStep: null,
      estimatedReview: null,
      unlocks: ["Deposit funds", "Spot trading", "Card issuance"],
    },
    {
      level: 3,
      name: "Enhanced Verification",
      description: "Proof of address and source-of-funds. Raises withdrawal and remittance limits.",
      status: "in-progress",
      requirements: [
        { id: "r5", label: "Proof of address", description: "Utility bill or bank statement, issued within 90 days", completed: true },
        { id: "r6", label: "Source of funds declaration", description: "Describe the origin of your account funding", completed: false },
      ],
      nextStep: "Submit your source of funds declaration",
      estimatedReview: "1–2 business days after submission",
      unlocks: ["Higher withdrawal limits", "Remittance corridors"],
    },
    {
      level: 4,
      name: "Advanced Financial Access",
      description: "Margin, leverage, and cross-asset collateral features.",
      status: "locked",
      requirements: [
        { id: "r7", label: "Financial suitability assessment", description: "Complete the risk questionnaire", completed: false },
        { id: "r8", label: "Enhanced due diligence", description: "Additional documentation as required by your jurisdiction", completed: false },
      ],
      nextStep: "Complete Tier 3 first",
      estimatedReview: null,
      unlocks: ["Margin trading", "Cross-asset collateral"],
    },
    {
      level: 5,
      name: "Professional / Enhanced Access",
      description: "Professional client status for eligible applicants.",
      status: "locked",
      requirements: [
        { id: "r9", label: "Professional eligibility criteria", description: "Meet jurisdiction-specific professional client criteria", completed: false },
        { id: "r10", label: "Suitability assessment review", description: "Reviewed by the onboarding team", completed: false },
      ],
      nextStep: "Complete Tier 4 first",
      estimatedReview: null,
      unlocks: ["Elevated leverage where permitted", "Institutional-grade tools"],
    },
  ],
};

export const mockKycService: KycService = {
  async getKycProfile() {
    return withLatency(profile);
  },
};
