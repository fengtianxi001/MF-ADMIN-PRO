<template>
  <Panel>
    <IconLock @click="onclick" />
  </Panel>
</template>
<script setup lang="ts">
import Panel from "../panel.vue";
import { Modal } from "@arco-design/web-vue";
import { IconLock } from "@arco-design/web-vue/es/icon";
import useLayoutConfig from "../../../hooks/useLayoutConfig";

const { setLockScreen } = useLayoutConfig();
const onclick = () => {
  Modal.confirm({
    title: "锁屏",
    content: "确定要锁定屏幕吗?",
    onOk: () => {
      setLockScreen(true);
      // console.log("ok");
    },
    onCancel: () => {
      console.log("cancel");
    },
  });
};
</script>
<style lang="scss" scoped></style>
