import type { NotificationService } from "../types";
import type { AppNotification } from "@/types";
import { withLatency } from "./latency";

let notifications: AppNotification[] = [
  {
    id: "n1",
    category: "security",
    severity: "warning",
    title: "New device sign-in",
    body: "A new sign-in was detected from Singapore on Chrome/Windows.",
    timestamp: "2026-09-17T08:12:00Z",
    read: false,
    actionLabel: "Review sessions",
    actionHref: "/security",
    source: "Security Center",
  },
  {
    id: "n2",
    category: "kyc",
    severity: "info",
    title: "Tier 3 verification in progress",
    body: "Your source of funds declaration is required to complete Tier 3.",
    timestamp: "2026-09-16T14:40:00Z",
    read: false,
    actionLabel: "Continue verification",
    actionHref: "/kyc",
    source: "KYC",
  },
  {
    id: "n3",
    category: "trading",
    severity: "success",
    title: "Limit order filled",
    body: "Your BTC/USD limit buy order for 0.25 BTC was filled at $61,204.10.",
    timestamp: "2026-09-16T11:02:00Z",
    read: true,
    source: "Trading",
  },
  {
    id: "n4",
    category: "system",
    severity: "warning",
    title: "Banking transfers degraded",
    body: "Fiat transfers via one partner bank are experiencing delays. Other services unaffected.",
    timestamp: "2026-09-15T22:05:00Z",
    read: true,
    actionLabel: "View system status",
    actionHref: "/support",
    source: "System Status",
  },
];

export const mockNotificationService: NotificationService = {
  async getNotifications() {
    return withLatency([...notifications]);
  },
  async markAsRead(id: string) {
    notifications = notifications.map((n) => (n.id === id ? { ...n, read: true } : n));
    return withLatency(undefined, 100);
  },
};
