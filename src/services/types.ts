/**
 * Service layer contracts. Every feature module talks to these interfaces,
 * never directly to fetch/axios/mock data. Swapping `services/index.ts` from
 * the mock implementations to real API clients requires no changes in
 * components, hooks, or state stores.
 */
import type {
  AccountSnapshot,
  AppNotification,
  KycProfile,
  ServiceStatusEntry,
  CircuitBreakerNotice,
  MarketTicker,
  Transaction,
  AiAgent,
  ProofOfReservesSnapshot,
} from "@/types";

export interface AccountService {
  getAccountSnapshot(): Promise<AccountSnapshot>;
}

export interface KycService {
  getKycProfile(): Promise<KycProfile>;
}

export interface NotificationService {
  getNotifications(): Promise<AppNotification[]>;
  markAsRead(id: string): Promise<void>;
}

export interface SystemStatusService {
  getServiceStatuses(): Promise<ServiceStatusEntry[]>;
  getCircuitBreakerNotices(): Promise<CircuitBreakerNotice[]>;
}

export interface MarketService {
  getMarketOverview(): Promise<MarketTicker[]>;
}

export interface TransactionService {
  getRecentTransactions(limit?: number): Promise<Transaction[]>;
}

export interface AiAgentService {
  listAgents(): Promise<AiAgent[]>;
}

export interface ReservesService {
  getProofOfReserves(): Promise<ProofOfReservesSnapshot>;
}
