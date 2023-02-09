import { message } from "ant-design-vue";
import { isFunction } from "lodash";

const ERROR_CODE = new Map<number, () => void>([
  [400, () => message.error("请求错误")],
  [401, () => message.error("未授权，请登录")],
  [403, () => message.error("拒绝访问")],
  [404, () => message.error("请求地址出错")],
  [500, () => message.error("服务器内部错误")],
  [501, () => message.error("服务未实现")],
  [502, () => message.error("网关错误")],
  [503, () => message.error("服务不可用")],
  [504, () => message.error("网关超时")],
  [505, () => message.error("HTTP版本不受支持")],
]);

function httpStatus(error: any) {
  const code = error.response.status;
  if (ERROR_CODE.has(code)) {
    const func = ERROR_CODE.get(code) as () => void;
    isFunction(func) && func();
  } else {
    message.error("请求错误");
  }
}

export default httpStatus;
