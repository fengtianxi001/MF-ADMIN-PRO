import { defineStore } from "pinia";
import { store } from "@/stores";

interface LayoutState {
  mode: "sidebar" | "topmenu";
  siderWidth: number;
  siderCollapsed: boolean;
  hideTabs: boolean;
  menuTheme: "dark" | "light";
  lockScreen: boolean;
}

export const useLayoutStore = defineStore({
  id: "layout",
  state: (): LayoutState => ({
    mode: "topmenu",
    siderWidth: 256,
    siderCollapsed: false,
    hideTabs: false,
    menuTheme: "dark",
    lockScreen: false,
  }),
  getters: {
    getMode(): "sidebar" | "topmenu" {
      return this.mode;
    },
    getSiderWidth(): number {
      return this.siderWidth;
    },
    getSiderCollapsed(): boolean {
      return this.siderCollapsed;
    },
    getHideTabs(): boolean {
      return this.hideTabs;
    },
    getMenuTheme(): "dark" | "light" {
      return this.menuTheme;
    },
    getLockScreen(): boolean {
      return this.lockScreen;
    },
  },
  actions: {
    setMode(mode: "sidebar" | "topmenu"): void {
      this.mode = mode;
    },
    setSiderWidth(width: number): void {
      this.siderWidth = width;
    },
    setSiderCollapsed(collapsed: boolean): void {
      this.siderCollapsed = collapsed;
    },
    setHideTabs(hide: boolean): void {
      this.hideTabs = hide;
    },
    setMenuTheme(theme: "dark" | "light"): void {
      this.menuTheme = theme;
    },
    setLockScreen(lock: boolean): void {
      this.lockScreen = lock;
    },
  },
});

//be used outside the setup
export function useLayoutStoreWithOut() {
  return useLayoutStore(store);
}
