import type { SystemStatusService } from "../types";
import type { ServiceStatusEntry, CircuitBreakerNotice } from "@/types";
import { withLatency } from "./latency";

const statuses: ServiceStatusEntry[] = [
  { service: "trading", label: "Trading", state: "operational", affected: null, availableAlternatives: [], lastUpdated: "2026-09-17T07:00:00Z", expectedUpdate: null },
  { service: "wallet", label: "Wallet", state: "operational", affected: null, availableAlternatives: [], lastUpdated: "2026-09-17T07:00:00Z", expectedUpdate: null },
  {
    service: "banking",
    label: "Banking",
    state: "degraded",
    affected: "Outbound transfers via one partner bank",
    availableAlternatives: ["View balances", "View transaction history", "Inbound transfers"],
    lastUpdated: "2026-09-17T06:20:00Z",
    expectedUpdate: "2026-09-17T10:00:00Z",
  },
  { service: "cards", label: "Cards", state: "operational", affected: null, availableAlternatives: [], lastUpdated: "2026-09-17T07:00:00Z", expectedUpdate: null },
  { service: "remittance", label: "Remittance", state: "operational", affected: null, availableAlternatives: [], lastUpdated: "2026-09-17T07:00:00Z", expectedUpdate: null },
  { service: "kyc", label: "KYC", state: "operational", affected: null, availableAlternatives: [], lastUpdated: "2026-09-17T07:00:00Z", expectedUpdate: null },
  { service: "ai-agents", label: "AI Agents", state: "operational", affected: null, availableAlternatives: [], lastUpdated: "2026-09-17T07:00:00Z", expectedUpdate: null },
  { service: "markets", label: "Markets", state: "operational", affected: null, availableAlternatives: [], lastUpdated: "2026-09-17T07:00:00Z", expectedUpdate: null },
];

const circuitBreakers: CircuitBreakerNotice[] = [
  {
    id: "cb1",
    title: "Volatility protection active on BTC/USD",
    what: "Leverage on BTC/USD has been temporarily reduced and order size limits are in effect.",
    why: "Abnormal short-term volatility was detected in the underlying market.",
    affected: ["BTC/USD margin trading"],
    whatYouCanDo: "Spot trading remains fully available. Existing positions are unaffected unless margin requirements are breached.",
    nextUpdateExpected: "2026-09-17T09:30:00Z",
    issuedAt: "2026-09-17T08:30:00Z",
  },
];

export const mockSystemStatusService: SystemStatusService = {
  async getServiceStatuses() {
    return withLatency(statuses);
  },
  async getCircuitBreakerNotices() {
    return withLatency(circuitBreakers);
  },
};
