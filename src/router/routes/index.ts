import { PageEnum } from "@/enums/pageEnum";
import type { RouteRecordRaw } from "vue-router";
import type { routesType } from "./types";

// 根路由
export const RootRoute: routesType = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_HOME,
  meta: {
    locale: "首页",
  },
  component: () => import("@/layouts/index.vue"),
  children: [
    {
      path: PageEnum.BASE_HOME,
      name: "Dashboard",
      component: () => import("@/views/dashboard/index.vue"),
      meta: {
        locale: "仪表盘",
      },
    },
  ],
};

export const LoginRoute: RouteRecordRaw = {
  path: PageEnum.BASE_LOGIN,
  name: "Login",
  component: () => import("@/views/login/index.vue"),
  meta: {
    title: "Login",
  },
};

export const ErrorRoute: RouteRecordRaw = {
  path: "/:pathMatch(.*)*",
  name: "NotFound",
  component: () => import("@/views/error/index.vue"),
  meta: {
    title: "404",
  },
};

export default [RootRoute, LoginRoute];
