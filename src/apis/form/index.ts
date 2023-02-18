import http from "@/utils/http";

export enum Api {
  GetFormBase = "/web/form/base",
}

export function getFormBase() {
  return http<any>({
    url: Api.GetFormBase,
    method: "GET",
  });
}
