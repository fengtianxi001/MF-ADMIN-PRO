import { defineStore } from "pinia";
import { store } from "@/stores";
import { useLocalStorageState } from "@/hooks";
import { watch } from "vue";
import APP_CONFIGS from "@/configs/app";

export interface LayoutState {
  mode: "sidebar" | "topmenu";
  siderWidth: number;
  siderCollapsed: boolean;
  hideTabs: boolean;
  menuTheme: "dark" | "light";
  lockScreen: boolean;
  theme: "dark" | "light";
  greyMode: boolean;
  hypochromatopsia: boolean;
  hideFooter: boolean;
}

const defaulValue: LayoutState = {
  ...APP_CONFIGS.DEFAULT_LAYOUT,
};

export const useLayoutStore = defineStore("app-layout", () => {
  const state = useLocalStorageState<LayoutState>("LAYOUT_CONFIG", {
    defaultValue: { ...defaulValue },
  });

  const resetState = () => {
    state.value = defaulValue;
  };

  //灰度模式
  watch(
    () => state.value.greyMode,
    (greyMode) => {
      if (greyMode) {
        const html = <HTMLElement>document.querySelector("html");
        html.style.filter = "grayscale(100%)";
      } else {
        const html = <HTMLElement>document.querySelector("html");
        html.style.filter = "grayscale(0%)";
      }
    },
    { immediate: true }
  );

  //色盲模式
  watch(
    () => state.value.hypochromatopsia,
    (hypochromatopsia) => {
      if (hypochromatopsia) {
        const html = <HTMLElement>document.querySelector("html");
        html.style.filter = "invert(80)";
      } else {
        const html = <HTMLElement>document.querySelector("html");
        html.style.filter = "invert(0)";
      }
    },
    { immediate: true }
  );

  //主题切换
  watch(
    () => state.value.theme,
    (theme) => {
      document.body.setAttribute("arco-theme", theme);
    },
    { immediate: true }
  );
  return { state, resetState };
});

//be used outside the setup
export function useLayoutStoreWithOut() {
  return useLayoutStore(store);
}
