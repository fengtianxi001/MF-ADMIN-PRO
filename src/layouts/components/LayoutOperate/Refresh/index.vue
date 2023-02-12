<template>
  <Panel @click="onclick">
    <IconRefresh />
  </Panel>
</template>
<script setup lang="ts">
import Panel from "../panel.vue";
import { IconRefresh } from "@arco-design/web-vue/es/icon";
const onclick = () => {
  window.location.reload();
};
</script>
<style lang="scss" scoped></style>
