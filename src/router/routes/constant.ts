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
      locale: "基础表格",
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
    component: () => import("@/views/form/base-form/index.vue"),
    meta: {
      locale: "基础表单",
      icon: IconApps,
    },
  },
  {
    path: "/fs",
    name: "fs",
    component: RouterView,
    meta: {
      locale: "文件系统",
      icon: IconApps,
    },
    children: [
      {
        path: "/fs-disk",
        name: "fs-disk",
        component: () => import("@/views/fs/fs-disk/index.vue"),
        meta: {
          locale: "网盘实例",
          icon: IconApps,
        },
      },
      {
        path: "/fs-preview",
        name: "fs-preview",
        component: () => import("@/views/fs/fs-preview/index.vue"),
        meta: {
          locale: "文件预览",
          icon: IconApps,
        },
      },
    ],
  },
  {
    path: "/editor",
    name: "editor",
    component: RouterView,
    meta: {
      locale: "编辑器",
      icon: IconApps,
    },
    children: [
      {
        path: "/editor-rich",
        name: "editor-rich",
        component: () => import("@/views/editor/editor-rich/index.vue"),
        meta: {
          locale: "富文本",
          icon: IconApps,
        },
      },
      {
        path: "/editor-md",
        name: "editor-md",
        component: () => import("@/views/editor/editor-md/index.vue"),
        meta: {
          locale: "markdown",
          icon: IconApps,
        },
      },
      {
        path: "/editor-image",
        name: "editor-editor",
        component: () => import("@/views/editor/editor-image/index.vue"),
        meta: {
          locale: "图片",
          icon: IconApps,
        },
      },
    ],
  },
  {
    path: "/gis",
    name: "gis",
    component: RouterView,
    meta: {
      locale: "地理信息",
      icon: IconApps,
    },
    children: [
      {
        path: "/gis-leaft",
        name: "gis-leaft",
        component: () => import("@/views/gis/gis-leaft/index.vue"),
        meta: {
          locale: "leaft",
          icon: IconApps,
        },
      },
      {
        path: "/gis-cesium",
        name: "gis-cesium",
        component: () => import("@/views/gis/gis-cesium/index.vue"),
        meta: {
          locale: "cesium",
          icon: IconApps,
        },
      },
    ],
  },
  {
    path: "/3d",
    name: "3d",
    component: RouterView,
    meta: {
      locale: "三维可视化",
      icon: IconApps,
    },
    children: [
      {
        path: "/3d-panorama",
        name: "panorama",
        component: () => import("@/views/3d/panorama/index.vue"),
        meta: {
          locale: "全景图",
          icon: IconApps,
        },
      },
      {
        path: "/3d-threejs",
        name: "threejs",
        component: () => import("@/views/3d/threejs/index.vue"),
        meta: {
          locale: "threejs",
          icon: IconApps,
        },
      },
    ],
  },
  {
    path: "/others",
    name: "others",
    component: RouterView,
    meta: {
      locale: "其他",
      icon: IconApps,
    },
    children: [
      {
        path: "/setup",
        name: "setup",
        component: () => import("@/views/setup/index.vue"),
        meta: {
          locale: "引导页面",
          icon: IconApps,
        },
      },
      {
        path: "/log",
        name: "log",
        component: () => import("@/views/log/index.vue"),
        meta: {
          locale: "错误日志",
          icon: IconApps,
        },
      },
    ],
  },
];
