<template>
  <div class="layout-brand">
    <img class="layout-brand-logo" :src="APP_LOGO" alt="logo" />
    <div class="layout-brand-title" v-show="!siderCollapsed" :style="style">
      {{ APP_NAME }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import APP_CONFIGS from "@/configs/app";
import useLayoutConfig from "../../hooks/useLayoutConfig";

const { APP_LOGO, APP_NAME } = APP_CONFIGS;
const { siderCollapsed, menuTheme } = useLayoutConfig();

const style = computed(() => {
  if (menuTheme.value === "dark") {
    return {
      color: "var(--color-white)",
    };
  } else {
    return {
      color: "var(--color-text-1)",
    };
  }
});
</script>
<style lang="scss" scoped>
.layout-brand {
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  flex-shrink: 0;
  cursor: pointer;
  user-select: none;
  .layout-brand-logo {
    width: 48px;
    height: 48px;
    padding: 10px;
    box-sizing: border-box;
  }
  .layout-brand-title {
    font-family: Rubik;
    font-size: 18px;
    color: var(--color-white);
  }
}
</style>
