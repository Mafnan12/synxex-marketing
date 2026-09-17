import { create } from "zustand";
import type { AccountSnapshot } from "@/types";
import { accountService } from "@/services";

interface AccountState {
  snapshot: AccountSnapshot | null;
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
  fetch: () => Promise<void>;
}

export const useAccountStore = create<AccountState>((set, get) => ({
  snapshot: null,
  status: "idle",
  error: null,
  fetch: async () => {
    if (get().status === "loading") return;
    set({ status: "loading", error: null });
    try {
      const snapshot = await accountService.getAccountSnapshot();
      set({ snapshot, status: "success" });
    } catch {
      set({ status: "error", error: "Unable to load account data. Retry in a moment." });
    }
  },
}));
