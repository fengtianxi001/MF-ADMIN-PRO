import http from "@/utils/http";
import type { GetMineDevicePageModel } from "./types";

export enum Api {
  GetTablePage = "/web/table/page",
  GetTableDetail = "/web/table/detail",
  AddTableItem = "/web/table/add",
  UpdateTableItem = "/web/table/edit",
  DeleteTableItem = "/web/table/delete",
}

export function getTablePage(params: any) {
  return http<GetMineDevicePageModel>({
    url: Api.GetTablePage,
    method: "GET",
    params,
  });
}

export function addTableItem(params: any) {
  return http<GetMineDevicePageModel>({
    url: Api.AddTableItem,
    method: "POST",
    params,
  });
}

export function updateTableItem(params: any) {
  return http<GetMineDevicePageModel>({
    url: Api.UpdateTableItem,
    method: "PUT",
    params,
  });
}

export function delTableItem(id: string | string[]) {
  return http<GetMineDevicePageModel>({
    url: Api.DeleteTableItem,
    method: "DELETE",
    params: { id },
  });
}

export function getTableDetail(id: any) {
  return http<GetMineDevicePageModel>({
    url: Api.GetTableDetail,
    method: "GET",
    params: { id },
  });
}
