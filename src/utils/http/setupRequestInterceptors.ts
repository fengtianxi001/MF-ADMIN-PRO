import type { AxiosInstance } from "axios";
import { getToken } from "@/utils/auth";
import { Message } from "@arco-design/web-vue";
import httpCancel from "./httpCancel";
//请求拦截器
function setupRequestInterceptors(http: AxiosInstance) {
  http.interceptors.request.use(
    (config: any) => {
      config.headers["Authorization"] = getToken();
      httpCancel.addPending(config);
      return config;
    },
    (error) => {
      Message.error(error);
      return Promise.reject(error);
    }
  );
}

export default setupRequestInterceptors;
