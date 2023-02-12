import type { routesType } from "./types";
import { IconApps } from "@arco-design/web-vue/es/icon";
export const constantRoutes: routesType[] = [
  {
    path: "/mine",
    name: "mine",
    component: () => import("@/views/mine/index.vue"),
    meta: {
      locale: "我的设备",
      icon: IconApps,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/register/index.vue"),
    meta: {
      locale: "设备登记",
      icon: IconApps,
    },
  },
  {
    path: "/apply",
    name: "apply",
    component: () => import("@/views/apply/index.vue"),
    meta: {
      locale: "设备申请",
      icon: IconApps,
    },
  },
];
