<template>
  <div class="layout-header-side-trigger">
    <IconMenuFold v-show="!siderCollapsed" @click="onClick" />
    <IconMenuUnfold v-show="siderCollapsed" @click="onClick" />
  </div>
</template>
<script setup lang="ts">
import { IconMenuFold, IconMenuUnfold } from "@arco-design/web-vue/es/icon";
import useLayoutConfig from "../../hooks/useLayoutConfig";
const { siderCollapsed, setSiderCollapsed } = useLayoutConfig();
const onClick = () => {
  setSiderCollapsed(!siderCollapsed.value);
};
</script>
<style lang="scss" scoped></style>
