import { store } from "@/stores";
import { defineStore } from "pinia";

import { getUserInfo } from "@/apis/user";
import { login } from "@/apis/user";
import type { GetUserInfoModel } from "@/apis/user/types";
import { setToken } from "@/utils/auth";
import { Message } from "@arco-design/web-vue";
import { router } from "@/router";
import { PageEnum } from "@/enums/pageEnum";

interface UserState {
  userInfo: Nullable<GetUserInfoModel>;
}
type UserInfoType = UserState["userInfo"];

export const useUserStore = defineStore({
  id: "app-user",
  state: (): UserState => ({
    userInfo: null,
  }),
  getters: {
    getUserInfo(): UserInfoType {
      return this.userInfo;
    },
  },
  actions: {
    setUserInfo(info: UserInfoType) {
      this.userInfo = info;
    },
    async getUserInfoAction() {
      const userInfo = await getUserInfo();
      this.setUserInfo(userInfo);
    },
    resetUserInfo() {
      this.userInfo = null;
    },
    async userLogin(params: any) {
      const { tokenValue } = await login(params);
      if (!tokenValue) return void 0;
      setToken(tokenValue);
      Message.success("登录成功");
      router.push("/");
      return void 0;
    },
    userLogout() {
      setToken("");
      this.resetUserInfo();
      router.push(PageEnum.BASE_LOGIN);
    },
  },
});

//be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
