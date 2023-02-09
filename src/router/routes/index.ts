import { PageEnum } from "@/enums/pageEnum";
import type { RouteRecordRaw } from "vue-router";
// 根路由
export const RootRoute: RouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: "Root",
  },
  children: [
    {
      path: PageEnum.BASE_HOME,
      name: "Dashboard",
      component: () => import("@/views/dashboard/index.vue"),
      meta: {
        title: "Dashboard",
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

export default [RootRoute, LoginRoute, ErrorRoute];
