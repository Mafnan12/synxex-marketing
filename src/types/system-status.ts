export type ServiceState = "operational" | "degraded" | "partial-outage" | "maintenance";

export type PlatformService =
  | "trading"
  | "wallet"
  | "banking"
  | "cards"
  | "remittance"
  | "kyc"
  | "ai-agents"
  | "markets";

export interface ServiceStatusEntry {
  service: PlatformService;
  label: string;
  state: ServiceState;
  affected: string | null;
  availableAlternatives: string[];
  lastUpdated: string;
  expectedUpdate: string | null;
}

export interface CircuitBreakerNotice {
  id: string;
  title: string;
  what: string;
  why: string;
  affected: string[];
  whatYouCanDo: string;
  nextUpdateExpected: string;
  issuedAt: string;
}
