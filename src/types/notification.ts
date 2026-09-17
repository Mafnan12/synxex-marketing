export type NotificationCategory =
  | "security"
  | "trading"
  | "banking"
  | "cards"
  | "wallet"
  | "remittance"
  | "kyc"
  | "ai-agents"
  | "system";

export type NotificationSeverity = "info" | "success" | "warning" | "critical";

export interface AppNotification {
  id: string;
  category: NotificationCategory;
  severity: NotificationSeverity;
  title: string;
  body: string;
  timestamp: string;
  read: boolean;
  actionLabel?: string;
  actionHref?: string;
  source: string;
}
