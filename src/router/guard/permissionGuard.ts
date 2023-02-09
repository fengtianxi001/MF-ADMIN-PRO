import { PageEnum } from "@/enums/pageEnum";
import { getToken } from "@/utils/auth";
import type { Router } from "vue-router";
import { useUserStoreWithOut } from "@/stores/modules/user";
// 用于切换路由时进行权限判断
export function createPermissionGuard(router: Router) {
  const userStore = useUserStoreWithOut();
  router.beforeEach(async (to, from, next) => {
    const token = getToken();
    if (to.path === PageEnum.BASE_LOGIN) {
      return token ? next({ path: PageEnum.BASE_HOME }) : next();
    }
    if (!token) {
      return next({ path: PageEnum.BASE_LOGIN });
    }
    if (!userStore.getTenantInfo) {
      // await userStore.getTenantInfoAction();
      // await userStore.getTenantInfoAction();
    }
    next();
  });
}
