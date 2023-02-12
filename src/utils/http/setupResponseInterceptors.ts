import type { AxiosInstance } from "axios";
import httpCancel from "./httpCancel";
import httpStatus from "./httpStatus";
import httpStatusCustom from "./httpStatusCustom";
//响应拦截器
function setupResponseInterceptors(http: AxiosInstance) {
  http.interceptors.response.use(
    (response) => {
      httpCancel.removePending(response.config);
      httpStatusCustom(response);
      return response.data.data;
    },
    (error) => {
      httpStatus(error);
      return Promise.reject(error);
    }
  );
}

export default setupResponseInterceptors;
