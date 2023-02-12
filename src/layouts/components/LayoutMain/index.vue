<template>
  <div class="layout-content">
    <div class="layout-content-main" :style="style">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import useLayoutConfig from "../../hooks/useLayoutConfig";

const { hideTabs } = useLayoutConfig();
const style = computed(() => ({
  minHeight: hideTabs.value ? "calc(100vh - 49px)" : "calc(100vh - 79px)",
}));
</script>
<style lang="scss" scoped>
.layout-content {
  box-sizing: border-box;
}
.layout-content-main {
  position: relative;
  background-color: var(--color-fill-2);
}
</style>
