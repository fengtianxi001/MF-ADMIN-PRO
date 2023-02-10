import { Message } from "@arco-design/web-vue";
import { isFunction } from "lodash";
import { clearToken } from "../auth";
import { router } from "@/router";

const ERROR_CODE = new Map<string, () => void>([
  [
    "A0200",
    () => {
      Message.error("登录信息已过期, 请重新登录");
      clearToken();
      router.push("/login");
    },
  ],
  ["C0154", () => Message.error("服务器拒绝访问")],
]);

function httpCustomStatus(error: any) {
  const code = error.code;
  if (ERROR_CODE.has(code)) {
    const func = ERROR_CODE.get(code) as () => void;
    isFunction(func) && func();
  }
}

export default httpCustomStatus;
