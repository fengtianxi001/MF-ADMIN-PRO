import logo from "@/assets/images/logo.png";

interface AppConfigs {
  APP_NAME: string;
  APP_LOGO: string;
  DYNAMIC_PERMISSION: boolean;
  DEFAULT_LAYOUT: {
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
  };
  lAYOUT_OPERATES: {
    fullscreen: boolean;
    lockscreen: boolean;
    theme: boolean;
    notify: boolean;
    refresh: boolean;
    setting: boolean;
  };
}

const APP_CONFIGS: AppConfigs = {
  APP_NAME: "MF-ADMIN", //应用名称
  APP_LOGO: logo, //应用logo
  DYNAMIC_PERMISSION: true, //是否开启动态权限
  DEFAULT_LAYOUT: {
    //默认的布局配置
    mode: "sidebar",
    siderWidth: 256,
    siderCollapsed: false,
    menuTheme: "dark",
    lockScreen: false,
    theme: "dark",
    greyMode: false,
    hypochromatopsia: false,
    hideFooter: false,
    hideTabs: false,
  },
  lAYOUT_OPERATES: {
    //页头的操作按钮配置
    fullscreen: true,
    lockscreen: true,
    theme: true,
    notify: true,
    refresh: true,
    setting: true,
  },
};

export default APP_CONFIGS;
