import { defineStore } from "pinia";
import { store } from "@/stores";

interface AppState {
  pageLoading: boolean;
}

export const useAppStore = defineStore({
  id: "app",
  state: (): AppState => ({
    pageLoading: false,
  }),
  getters: {
    getPageLoading(): boolean {
      return this.pageLoading;
    },
  },
  actions: {
    setPageLoading(loading: boolean): void {
      this.pageLoading = loading;
    },
  },
});

//be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store);
}
