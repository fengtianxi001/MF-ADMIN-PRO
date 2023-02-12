import http from "@/utils/http";
import type { GetMineDevicePageModel } from "./types";

export enum Api {
  GetMineDevicePage = "/web/mine/page",
  GetMineDeviceDetail = "/web/mine/detail",
}

export function getMineDevicePage(params: any) {
  return http<GetMineDevicePageModel>({
    url: Api.GetMineDevicePage,
    method: "GET",
    params,
  });
}

export function getMineDeviceDetail(id: any) {
  return http<GetMineDevicePageModel>({
    url: Api.GetMineDeviceDetail,
    method: "GET",
    params: { id },
  });
}
