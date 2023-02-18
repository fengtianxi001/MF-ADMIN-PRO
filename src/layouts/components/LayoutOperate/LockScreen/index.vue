<template>
  <Panel>
    <IconLock @click="onclick" />
  </Panel>
</template>
<script setup lang="ts">
import Panel from "../panel.vue";
import { confirm } from "@/utils/common";
import { IconLock } from "@arco-design/web-vue/es/icon";
import useLayoutConfig from "../../../hooks/useLayoutConfig";
const { setLockScreen } = useLayoutConfig();
const onclick = async () => {
  const result = await confirm("锁屏", "确定要锁定屏幕吗?");
  result && setLockScreen(true);
};
</script>
<style lang="scss" scoped></style>
