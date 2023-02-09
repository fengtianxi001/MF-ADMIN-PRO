import http from "@/utils/http";
import type { GetUserInfoModel, GetTenantInfoModel } from "./types";

export enum Api {
  Login = "/web/site/login",
  Logout = "/web/site/logout",
  GetUserInfo = "/web/mine/getUser",
  GetTenantInfo = "/web/site/tenant",
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

export function getTenantInfo() {
  return http<GetTenantInfoModel>({ url: Api.GetTenantInfo });
}
