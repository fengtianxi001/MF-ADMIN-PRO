import Modal, { type ModalConfig } from "@arco-design/web-vue/es/modal";

const BaseConfirm = (params: ModalConfig) => {
  return new Promise((resolve) => {
    Modal.confirm({
      ...params,
      onOk: () => {
        resolve(true);
      },
      onCancel: () => {
        resolve(false);
      },
      onClose: () => {
        resolve(false);
      },
    });
  });
};

export default BaseConfirm;
