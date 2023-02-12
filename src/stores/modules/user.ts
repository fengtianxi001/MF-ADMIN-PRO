import { store } from "@/stores";
import { defineStore } from "pinia";
import type { GetUserInfoModel } from "@/apis/user/types";
import { getUserInfo } from "@/apis/user";
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
    resetState() {
      this.userInfo = null;
    },
  },
});

//be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
