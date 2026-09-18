import type { AiAgentService } from "../types";
import type { AiAgent } from "@/types";
import { withLatency } from "./latency";

const agents: AiAgent[] = [
  {
    id: "a1",
    name: "Momentum Rotation — Majors",
    strategy: "Trend-following rotation across large-cap crypto majors",
    assetClasses: ["crypto"],
    riskLevel: "moderate",
    validationStatus: "live-verified",
    historicalReturnPercent: 18.4,
    volatilityPercent: 24.1,
    sharpeRatio: 1.12,
    maxDrawdownPercent: -16.8,
    winRatePercent: 54.2,
    positionLimit: 25_000,
    subscriberCount: 1_284,
    lastUpdated: "2026-09-16T00:00:00Z",
    periodLabel: "Trailing 12 months (demo data)",
  },
  {
    id: "a2",
    name: "FX Carry Balance",
    strategy: "Carry-oriented basket across G10 currency pairs",
    assetClasses: ["forex"],
    riskLevel: "low",
    validationStatus: "live-verified",
    historicalReturnPercent: 7.9,
    volatilityPercent: 6.3,
    sharpeRatio: 0.94,
    maxDrawdownPercent: -4.2,
    winRatePercent: 61.0,
    positionLimit: 50_000,
    subscriberCount: 842,
    lastUpdated: "2026-09-15T00:00:00Z",
    periodLabel: "Trailing 12 months (demo data)",
  },
  {
    id: "a3",
    name: "Equity Volatility Harvest",
    strategy: "Mean-reversion overlay on large-cap tech equities",
    assetClasses: ["stocks"],
    riskLevel: "elevated",
    validationStatus: "paper-trading",
    historicalReturnPercent: 11.2,
    volatilityPercent: 19.7,
    sharpeRatio: 0.71,
    maxDrawdownPercent: -12.4,
    winRatePercent: null,
    positionLimit: 15_000,
    subscriberCount: 96,
    lastUpdated: "2026-09-14T00:00:00Z",
    periodLabel: "Paper trading since 2026-06-01",
  },
];

export const mockAiAgentService: AiAgentService = {
  async listAgents() {
    return withLatency(agents);
  },
};
