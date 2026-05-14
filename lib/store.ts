"use client";

import { create } from "zustand";
import type { PredictionResult } from "@/lib/types";

type User = { uid: string; email: string; role: string } | null;

type AppState = {
  user: User;
  sidebarCollapsed: boolean;
  theme: "dark" | "light";
  latestPrediction: PredictionResult | null;
  setUser: (user: User) => void;
  toggleSidebar: () => void;
  setTheme: (theme: "dark" | "light") => void;
  setLatestPrediction: (prediction: PredictionResult) => void;
};

export const useAppStore = create<AppState>((set) => ({
  user: null,
  sidebarCollapsed: false,
  theme: "dark",
  latestPrediction: null,
  setUser: (user) => set({ user }),
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  setTheme: (theme) => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
    set({ theme });
  },
  setLatestPrediction: (prediction) => set({ latestPrediction: prediction })
}));
