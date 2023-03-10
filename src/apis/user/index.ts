import http from "@/utils/http";
import type { GetUserInfoModel } from "./types";
export enum Api {
  Login = "/web/site/login",
  Logout = "/web/site/logout",
  GetUserInfo = "/web/site/getUser",
  GetPermission = "/web/site/permission",
}

export function login(data: any) {
  return http({ url: Api.Login, method: "POST", data });
}

export function logout() {
  return http({ url: Api.Logout, method: "POST" });
}

export function getUserInfo() {
  return http<GetUserInfoModel>({ url: Api.GetUserInfo });
}

export function getPermission() {
  return http({ url: Api.GetPermission });
}
