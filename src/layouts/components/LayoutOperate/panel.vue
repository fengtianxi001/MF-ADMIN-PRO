<template>
  <div class="layout-operate-panel" :style="style">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import useLayoutConfig from "../../hooks/useLayoutConfig";

const { menuTheme, mode } = useLayoutConfig();
const style = computed(() => {
  if (menuTheme.value === "dark" && mode.value === "topmenu") {
    return {
      backgroundColor: "#343435",
      color: "rgb(197,197,197)",
    };
  } else {
    return {
      backgroundColor: "var(--color-fill-2)",
      color: "rgb(var(--gray-8))",
    };
  }
});
</script>
<style lang="scss" scoped>
.layout-operate-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
}
</style>
