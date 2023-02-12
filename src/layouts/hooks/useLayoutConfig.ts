import { useLayoutStore } from "@/stores/modules/layout";
import { computed } from "vue";

function useLayoutConfig() {
  const { state: store, resetState } = useLayoutStore();
  const mode = computed(() => store.mode);
  const siderWidth = computed(() => store.siderWidth);
  const siderCollapsed = computed(() => store.siderCollapsed);
  const hideTabs = computed(() => store.hideTabs);
  const menuTheme = computed(() => store.menuTheme);
  const lockScreen = computed(() => store.lockScreen);
  const theme = computed(() => store.theme);
  const greyMode = computed(() => store.greyMode);
  const hypochromatopsia = computed(() => store.hypochromatopsia);
  const hideFooter = computed(() => store.hideFooter);
  const headerHeight = computed(() => (hideTabs.value ? "49px" : "78px"));

  return {
    store,
    siderWidth,
    siderCollapsed,
    hideTabs,
    mode,
    theme,
    menuTheme,
    lockScreen,
    greyMode,
    hideFooter,
    hypochromatopsia,
    headerHeight,
    setHideTabs: (bool: boolean) => (store.hideTabs = bool),
    setSiderCollapsed: (bool: boolean) => (store.siderCollapsed = bool),
    setSiderWidth: (number: number) => (store.siderWidth = number),
    setMode: (mode: "sidebar" | "topmenu") => (store.mode = mode),
    setMenuTheme: (theme: "dark" | "light") => (store.menuTheme = theme),
    setLockScreen: (bool: boolean) => (store.lockScreen = bool),
    resetLayoutConfig: () => resetState(),
  };
}

export default useLayoutConfig;
