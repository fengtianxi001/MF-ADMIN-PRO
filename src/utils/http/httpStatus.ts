import { Message } from "@arco-design/web-vue";
import { isFunction } from "lodash";

const ERROR_CODE = new Map<number, () => void>([
  [400, () => Message.error("请求错误")],
  [401, () => Message.error("未授权，请登录")],
  [403, () => Message.error("拒绝访问")],
  [404, () => Message.error("请求地址出错")],
  [500, () => Message.error("服务器内部错误")],
  [501, () => Message.error("服务未实现")],
  [502, () => Message.error("网关错误")],
  [503, () => Message.error("服务不可用")],
  [504, () => Message.error("网关超时")],
  [505, () => Message.error("HTTP版本不受支持")],
]);

function httpStatus(error: any) {
  const code = error.response.status;
  if (ERROR_CODE.has(code)) {
    const func = ERROR_CODE.get(code) as () => void;
    isFunction(func) && func();
  } else {
    Message.error("请求错误");
  }
}

export default httpStatus;
