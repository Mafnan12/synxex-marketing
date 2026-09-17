import { create } from "zustand";
import type { ServiceStatusEntry, CircuitBreakerNotice } from "@/types";
import { systemStatusService } from "@/services";

interface SystemStatusState {
  services: ServiceStatusEntry[];
  circuitBreakers: CircuitBreakerNotice[];
  status: "idle" | "loading" | "success" | "error";
  fetch: () => Promise<void>;
}

export const useSystemStatusStore = create<SystemStatusState>((set, get) => ({
  services: [],
  circuitBreakers: [],
  status: "idle",
  fetch: async () => {
    if (get().status === "loading") return;
    set({ status: "loading" });
    try {
      const [services, circuitBreakers] = await Promise.all([
        systemStatusService.getServiceStatuses(),
        systemStatusService.getCircuitBreakerNotices(),
      ]);
      set({ services, circuitBreakers, status: "success" });
    } catch {
      set({ status: "error" });
    }
  },
}));
