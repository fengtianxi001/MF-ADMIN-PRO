import { useLayoutStore } from "@/stores/modules/layout";
import { computed } from "vue";

function useLayoutConfig() {
  const store = useLayoutStore();
  const siderWidth = computed(() => store.getSiderWidth);
  const siderCollapsed = computed(() => store.getSiderCollapsed);
  const hideTabs = computed(() => store.getHideTabs);
  const menuTheme = computed(() => store.getMenuTheme);
  const lockScreen = computed(() => store.getLockScreen);
  const mode = computed(() => store.getMode);
  return {
    siderWidth,
    siderCollapsed,
    hideTabs,
    mode,
    menuTheme,
    lockScreen,
    setHideTabs: store.setHideTabs,
    setSiderCollapsed: store.setSiderCollapsed,
    setSiderWidth: store.setSiderWidth,
    setMode: store.setMode,
    setMenuTheme: store.setMenuTheme,
    setLockScreen: store.setLockScreen,
  };
}

export default useLayoutConfig;
