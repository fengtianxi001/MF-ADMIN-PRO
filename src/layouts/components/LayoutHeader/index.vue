<template>
  <LayoutHeader class="layout-header" :style="style" theme="dark">
    <div class="layout-header-main">
      <div class="layout-header-main-slot">
        <slot></slot>
      </div>
      <LayoutOperate />
    </div>
    <LayoutTabs v-if="!hideTabs" />
  </LayoutHeader>
</template>
<script setup lang="ts">
import { computed, type CSSProperties } from "vue";
import { LayoutHeader } from "@arco-design/web-vue";
import LayoutTabs from "../LayoutTabs/index.vue";
import LayoutOperate from "../LayoutOperate/index.vue";
import useLayoutConfig from "../../hooks/useLayoutConfig";

const { mode, siderCollapsed, menuTheme, hideTabs } = useLayoutConfig();
const style = computed<CSSProperties>(() => {
  if (mode.value === "sidebar") {
    return {
      width: siderCollapsed.value ? "calc(100% - 48px)" : "calc(100% - 200px)",
    };
  }
  if (menuTheme.value === "dark" && mode.value === "topmenu") {
    return {
      backgroundColor: "var(--color-menu-dark-bg)",
    };
  }
  return {};
});
</script>
<style lang="scss" scoped>
.layout-header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--color-bg-2);
  .layout-header-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    padding: 0 10px;
    border-bottom: 1px solid var(--color-border);
    overflow: hidden;
    .layout-header-main-slot {
      display: flex;
      align-items: center;
      grid-gap: 10px;
      flex: 1;
    }
  }
}
</style>
