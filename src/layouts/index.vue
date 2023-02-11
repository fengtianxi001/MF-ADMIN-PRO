<template>
  <LayoutLockScreen v-if="lockScreen" />
  <component v-show="!lockScreen" :is="Layout" />
</template>
<script setup lang="ts">
import { computed } from "vue";
import TopMenu from "./modes/TopMenu/index.vue";
import Sidebar from "./modes/Sidebar/index.vue";
import useLayoutConfig from "./hooks/useLayoutConfig";
import LayoutLockScreen from "./components/LayoutLockScreen/index.vue";
const { mode, lockScreen } = useLayoutConfig();

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
