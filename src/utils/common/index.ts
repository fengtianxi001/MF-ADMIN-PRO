import dayjs from "dayjs";
import { Modal } from "@arco-design/web-vue";
import { isFunction } from "lodash";

export function dateFormater(date: any, format = "YYYY-MM-DD HH:mm:ss") {
  return dayjs(date).format(format);
}

export function confirm(title: string, content: string, callback?: Function) {
  return new Promise((resolve) => {
    Modal.confirm({
      title,
      content,
      modalClass: "base-confirm-modal",
      onOk: () => resolve(true),
      onCancel: () => resolve(false),
      onBeforeOk: async () => {
        isFunction(callback) && (await callback());
      },
    });
  });
}
