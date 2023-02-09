import type { AxiosRequestConfig, Canceler } from "axios";
import axios from "axios";
import { isFunction } from "lodash";

//用于存储每个请求的识别和取消功能
let pendingMap = new Map<string, Canceler>();

export function getPendingUrl(config: AxiosRequestConfig) {
  return [config.method, config.url].join("&");
}

//取消所有正在等待的请求
export function clearPending() {
  pendingMap.forEach((cancel) => {
    isFunction(cancel) && cancel();
  });
}

export function removePending(config: AxiosRequestConfig) {
  const url = getPendingUrl(config);
  if (pendingMap.has(url)) {
    const cancel = pendingMap.get(url);
    isFunction(cancel) && cancel();
    pendingMap.delete(url);
  }
}

export function addPending(config: AxiosRequestConfig) {
  removePending(config);
  const url = getPendingUrl(config);
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      !pendingMap.has(url) && pendingMap.set(url, cancel);
    });
}

export function resetPending() {
  pendingMap = new Map<string, Canceler>();
}

export default {
  getPendingUrl,
  clearPending,
  removePending,
  addPending,
  resetPending,
};
