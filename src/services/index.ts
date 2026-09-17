/**
 * Active service implementations. This is the single place that decides
 * whether the app talks to mock data or real API clients — components,
 * hooks, and stores only ever import from here.
 */
import { mockAccountService } from "./mock/accountService";
import { mockKycService } from "./mock/kycService";
import { mockNotificationService } from "./mock/notificationService";
import { mockSystemStatusService } from "./mock/systemStatusService";
import { mockMarketService } from "./mock/marketService";
import { mockTransactionService } from "./mock/transactionService";
import { mockAiAgentService } from "./mock/aiAgentService";
import { mockReservesService } from "./mock/reservesService";

export const accountService = mockAccountService;
export const kycService = mockKycService;
export const notificationService = mockNotificationService;
export const systemStatusService = mockSystemStatusService;
export const marketService = mockMarketService;
export const transactionService = mockTransactionService;
export const aiAgentService = mockAiAgentService;
export const reservesService = mockReservesService;

export * from "./types";
