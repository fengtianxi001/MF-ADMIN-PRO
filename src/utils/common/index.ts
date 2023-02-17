import dayjs from "dayjs";
import { Modal } from "@arco-design/web-vue";

export function dateFormater(date: any, format = "YYYY-MM-DD HH:mm:ss") {
  return dayjs(date).format(format);
}

export function confirm(title: string, content: string) {
  return new Promise((resolve) => {
    Modal.confirm({
      title,
      content,
      modalClass: "base-confirm-modal",
      onOk: () => resolve(true),
      onCancel: () => resolve(false),
    });
  });
}
