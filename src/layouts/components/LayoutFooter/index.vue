<template>
  <LayoutFooter v-if="!hideFooter">
    <div class="layout-footer">Copyright &copy;2023 fengtianxi001</div>
  </LayoutFooter>
</template>
<script setup lang="ts">
import { LayoutFooter } from "@arco-design/web-vue";
import useLayoutConfig from "../../hooks/useLayoutConfig";

const { hideFooter } = useLayoutConfig();
</script>
<style lang="scss" scoped>
.layout-footer {
  display: flex;
  height: 40px;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  color: var(--color-text-1);
  background-color: var(--color-fill-2);
}
</style>
