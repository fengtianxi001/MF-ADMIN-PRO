import { defineStore } from "pinia";
import { getPermission } from "@/apis/user";
import { constantRoutes } from "@/router/routes/constant";
import { map, filter } from "lodash";
import { router } from "@/router";
import type { routesType } from "@/router/routes/types";
interface AppPermissionState {
  isDynamicAddedRoute: boolean;
  lastBuildMenuTime: number;
  frontMenuList: any[];
}

export const usePermissionStore = defineStore({
  id: "app-permission",
  state: (): AppPermissionState => ({
    isDynamicAddedRoute: false,
    lastBuildMenuTime: 0,
    frontMenuList: [],
  }),
  getters: {
    getIsDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute;
    },
    getLastBuildMenuTime(): number {
      return this.lastBuildMenuTime;
    },
    getFrontMenuList(): any[] {
      return this.frontMenuList;
    },
  },
  actions: {
    setIsDynamicAddedRoute(isDynamicAddedRoute: boolean): void {
      this.isDynamicAddedRoute = isDynamicAddedRoute;
    },
    setLastBuildMenuTime(lastBuildMenuTime: number): void {
      this.lastBuildMenuTime = lastBuildMenuTime;
    },
    setFrontMenuList(frontMenuList: any[]): void {
      this.frontMenuList = frontMenuList;
    },
    async buildRoutesAction() {
      const response = <any>await getPermission();
      const find = <routesType[]>(
        filter(constantRoutes, (item) => response.includes(item.path))
      );
      const root = router.options.routes.find((item) => item.path === "/");
      if (root) {
        root.children?.push(...find);
        router.addRoute(root);
        this.setIsDynamicAddedRoute(true);
        this.setLastBuildMenuTime(new Date().getTime());
        this.setFrontMenuList(find);
      }
      return void 0;
    },
  },
});
