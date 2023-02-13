import http from "@/utils/http";
import type { GetMineDevicePageModel } from "./types";

export enum Api {
  GetRegisterDevicePage = "/web/register/page",
  GetRegisterDeviceDetail = "/web/register/detail",
  UpdateRegisterDevice = "/web/register/update",
  DeleteRegisterDevice = "/web/register/delete",
  AddRegisterDevice = "/web/register/add",
}

export function getRegisterDevicePage(params: any) {
  return http<GetMineDevicePageModel>({
    url: Api.GetRegisterDevicePage,
    method: "GET",
    params,
  });
}

export function getRegisterDeviceDetail(id: any) {
  return http<GetMineDevicePageModel>({
    url: Api.GetRegisterDeviceDetail,
    method: "GET",
    params: { id },
  });
}

export function addRegisterDevice(data: any) {
  return http<GetMineDevicePageModel>({
    url: Api.AddRegisterDevice,
    method: "POST",
    data,
  });
}

export function updateRegisterDevice(data: any) {
  return http<GetMineDevicePageModel>({
    url: Api.UpdateRegisterDevice,
    method: "PUT",
    data,
  });
}

export function deleteRegisterDevice(id: any) {
  return http<GetMineDevicePageModel>({
    url: Api.DeleteRegisterDevice,
    method: "DELETE",
    data: { id },
  });
}
