export type AgentValidationStatus = "paper-trading" | "live-verified";
export type RiskLevel = "low" | "moderate" | "elevated" | "high";

export interface AiAgent {
  id: string;
  name: string;
  strategy: string;
  assetClasses: string[];
  riskLevel: RiskLevel;
  validationStatus: AgentValidationStatus;
  historicalReturnPercent: number;
  volatilityPercent: number;
  sharpeRatio: number;
  maxDrawdownPercent: number;
  winRatePercent: number | null;
  positionLimit: number;
  subscriberCount: number;
  lastUpdated: string;
  periodLabel: string;
}
