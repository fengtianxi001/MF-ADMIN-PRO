<template>
  <component :is="Layout" />
</template>
<script setup lang="ts">
import { computed } from "vue";
import TopMenu from "./modes/TopMenu/index.vue";
import Sidebar from "./modes/Sidebar/index.vue";
import useLayoutConfig from "./hooks/useLayoutConfig";

const { mode } = useLayoutConfig();

const Layout = computed(() => {
  const modeMap = {
    topmenu: TopMenu,
    sidebar: Sidebar,
  };
  return modeMap[mode.value];
});
</script>
<style lang="scss" scoped>
.layouts {
  width: 100%;
  height: 100vh;
}
</style>
