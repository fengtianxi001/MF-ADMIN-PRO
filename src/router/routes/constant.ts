import type { routesType } from "./types";
import { IconApps } from "@arco-design/web-vue/es/icon";
import { RouterView } from "vue-router";

export const constantRoutes: routesType[] = [
  {
    path: "/table",
    name: "table",
    component: RouterView,
    redirect: "/table/complex-table",
    meta: {
      locale: "系统表格",
      icon: IconApps,
    },
    children: [
      {
        path: "/table/complex-table",
        name: "complex-table",
        component: () => import("@/views/table/complex-table/index.vue"),
        meta: {
          locale: "综合表格",
          icon: IconApps,
        },
      },
      {
        path: "/table/editable-table",
        name: "editable-table",
        component: () => import("@/views/table/editable-table/index.vue"),
        meta: {
          locale: "可编辑表格",
          icon: IconApps,
        },
      },
      {
        path: "/table/tree-table",
        name: "tree-table",
        component: () => import("@/views/table/tree-table/index.vue"),
        meta: {
          locale: "树状表格",
          icon: IconApps,
        },
      },
    ],
  },
  {
    path: "/form",
    name: "form",
    component: () => import("@/views/register/index.vue"),
    meta: {
      locale: "基础表单",
      icon: IconApps,
    },
  },
  {
    path: "/chart",
    name: "chart",
    component: () => import("@/views/apply/index.vue"),
    meta: {
      locale: "基础图表",
      icon: IconApps,
    },
  },
  {
    path: "/disk",
    name: "disk",
    component: () => import("@/views/apply/index.vue"),
    meta: {
      locale: "网盘实例",
      icon: IconApps,
    },
  },
  {
    path: "/file-preview",
    name: "file-preview",
    component: () => import("@/views/apply/index.vue"),
    meta: {
      locale: "文件预览",
      icon: IconApps,
    },
  },
  {
    path: "/map",
    name: "map",
    component: () => import("@/views/apply/index.vue"),
    meta: {
      locale: "地图实例",
      icon: IconApps,
    },
  },
  {
    path: "/rich-text",
    name: "rich-text",
    component: () => import("@/views/apply/index.vue"),
    meta: {
      locale: "富文本实例",
      icon: IconApps,
    },
  },
  {
    path: "/md",
    name: "md",
    component: () => import("@/views/apply/index.vue"),
    meta: {
      locale: "md实例",
      icon: IconApps,
    },
  },
  {
    path: "/image-edit",
    name: "image-edit",
    component: () => import("@/views/apply/index.vue"),
    meta: {
      locale: "图片编辑",
      icon: IconApps,
    },
  },
  {
    path: "/org-tree",
    name: "org-tree",
    component: () => import("@/views/apply/index.vue"),
    meta: {
      locale: "组织树",
      icon: IconApps,
    },
  },
  {
    path: "/panorama",
    name: "panorama",
    component: () => import("@/views/apply/index.vue"),
    meta: {
      locale: "全景图",
      icon: IconApps,
    },
  },
  {
    path: "/setup",
    name: "setup",
    component: () => import("@/views/apply/index.vue"),
    meta: {
      locale: "引导页面",
      icon: IconApps,
    },
  },
  {
    path: "/flow",
    name: "flow",
    component: () => import("@/views/apply/index.vue"),
    meta: {
      locale: "流程图",
      icon: IconApps,
    },
  },
  {
    path: "/cesium",
    name: "cesium",
    component: () => import("@/views/apply/index.vue"),
    meta: {
      locale: "cesium",
      icon: IconApps,
    },
  },
  {
    path: "/threejs",
    name: "threejs",
    component: () => import("@/views/apply/index.vue"),
    meta: {
      locale: "threejs",
      icon: IconApps,
    },
  },
  {
    path: "/log",
    name: "log",
    component: () => import("@/views/apply/index.vue"),
    meta: {
      locale: "错误日志",
      icon: IconApps,
    },
  },
];
