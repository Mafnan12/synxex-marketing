import { create } from "zustand";
import type { AppNotification } from "@/types";
import { notificationService } from "@/services";

interface NotificationState {
  items: AppNotification[];
  status: "idle" | "loading" | "success" | "error";
  fetch: () => Promise<void>;
  markAsRead: (id: string) => Promise<void>;
  unreadCount: () => number;
}

export const useNotificationStore = create<NotificationState>((set, get) => ({
  items: [],
  status: "idle",
  fetch: async () => {
    if (get().status === "loading") return;
    set({ status: "loading" });
    try {
      const items = await notificationService.getNotifications();
      set({ items, status: "success" });
    } catch {
      set({ status: "error" });
    }
  },
  markAsRead: async (id: string) => {
    set({ items: get().items.map((n) => (n.id === id ? { ...n, read: true } : n)) });
    await notificationService.markAsRead(id);
  },
  unreadCount: () => get().items.filter((n) => !n.read).length,
}));
