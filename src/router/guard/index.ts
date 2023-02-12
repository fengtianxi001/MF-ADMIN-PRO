import { clearToken, getToken } from "@/utils/auth";
import { setRouteChange } from "../mitter";
import { clearPending } from "@/utils/http/httpCancel";
import { Modal } from "@arco-design/web-vue";
import { createPermissionGuard } from "./permissionGuard";
import { useAppStoreWithOut } from "@/stores/modules/app";
import type { RouteLocationNormalized, Router } from "vue-router";
import nProgress from "nprogress";
import { PageEnum } from "@/enums/pageEnum";
import { useUserStore } from "@/stores/modules/user";
import "nprogress/nprogress.css";
import { useTabsStoreWithOut } from "@/stores/modules/tab";
nProgress.configure({ showSpinner: false });

export function setupRouterGuard(router: Router) {
  createPageGuard(router);
  createPageLoadingGuard(router);
  createHttpGuard(router);
  createScrollGuard(router);
  createMessageGuard(router);
  createProgressGuard(router);
  createPermissionGuard(router);
  createStateGuard(router);
  createTabsGuard(router);
}

//用于处理页面状态的挂钩
function createPageGuard(router: Router) {
  const loadedPageMap = new Map<string, boolean>();
  router.beforeEach(async (to) => {
    // 页面已经加载，再次打开会更快，不需要进行加载和其他处理
    to.meta.loaded = !!loadedPageMap.get(to.path);
    setRouteChange(to);
    return true;
  });
  router.afterEach((to) => {
    loadedPageMap.set(to.path, true);
  });
}

// 用于处理页面加载状态
function createPageLoadingGuard(router: Router) {
  const token = getToken();
  const appStore = useAppStoreWithOut();
  router.beforeEach(async (to) => {
    if (!token) return true;
    if (to.meta.loaded) return true;
    appStore.setPageLoading(true);
    return true;
  });
  router.afterEach(async () => {
    setTimeout(() => {
      appStore.setPageLoading(false);
    }, 220);
  });
}

// 用于在切换路由时关闭当前页面的请求
function createHttpGuard(router: Router) {
  router.beforeEach(async () => {
    // 切换路由时，关闭当前页面的请求
    clearPending();
    return true;
  });
}

// 用于在切换路由时回到页面顶部
function createScrollGuard(router: Router) {
  const isHash = (href: string) => /^#/.test(href);
  const body = document.body;
  router.afterEach(async (to) => {
    isHash((to as RouteLocationNormalized & { href: string })?.href) &&
      body.scrollTo(0, 0);
    return true;
  });
}

// 用于在切换路由时关闭消息实例
export function createMessageGuard(router: Router) {
  router.beforeEach(async () => {
    // Modal.destroyAll();
    // Notification.destroy();
    return true;
  });
}

// 用于在切换路由时关闭进度条
export function createProgressGuard(router: Router) {
  router.beforeEach(() => {
    nProgress.start();
    return true;
  });

  router.afterEach(async () => {
    nProgress.done();
    return true;
  });
}

// 进入登录页面时清除身份验证信息
export function createStateGuard(router: Router) {
  router.afterEach((to) => {
    if (to.path === PageEnum.BASE_LOGIN) {
      const userStore = useUserStore();
      userStore.resetState();
      clearToken();
    }
  });
}

// 用于在切换路由时管理页签
export function createTabsGuard(router: Router) {
  router.afterEach((to) => {
    const tabsStore = useTabsStoreWithOut();
    tabsStore.tabAppend(to);
  });
}
