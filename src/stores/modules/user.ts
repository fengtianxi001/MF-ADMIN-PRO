import { store } from "@/stores";
import { defineStore } from "pinia";
import type { GetUserInfoModel, GetTenantInfoModel } from "@/apis/user/types";
import { getTenantInfo, getUserInfo } from "@/apis/user";
interface UserState {
  userInfo: Nullable<GetUserInfoModel>;
  tenantInfo: Nullable<GetTenantInfoModel>;
}
type UserInfoType = UserState["userInfo"];
type TenantInfoType = UserState["tenantInfo"];

export const useUserStore = defineStore({
  id: "app-user",
  state: (): UserState => ({
    userInfo: null,
    tenantInfo: null,
  }),
  getters: {
    getUserInfo(): UserInfoType {
      return this.userInfo;
    },
    getTenantInfo(): TenantInfoType {
      return this.tenantInfo;
    },
  },
  actions: {
    setUserInfo(info: UserInfoType) {
      this.userInfo = info;
    },
    setTenantInfo(info: TenantInfoType) {
      this.tenantInfo = info;
    },
    getUserInfoAction() {},
    getTenantInfoAction() {
      // return getTenantInfo().then((res) => {
      //   this.setTenantInfo(res.data);
      // });
    },
    resetState() {
      this.userInfo = null;
      this.tenantInfo = null;
    },
  },
});

//be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
