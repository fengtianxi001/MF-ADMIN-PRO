<template>
  <button @click="onclick('sidebar')">sidebar</button>
  <button @click="onclick('topmenu')">topmenu</button>
  <button @click="onclick2()">topmenu</button>
</template>
<script setup lang="ts">
import useLayoutConfig from "@/layouts/hooks/useLayoutConfig";
const onclick = (name: any) => {
  useLayoutConfig().setMode(name);
};

const onclick2 = () => {
  const { menuTheme, setMenuTheme } = useLayoutConfig();
  const value = menuTheme.value === "dark" ? "light" : "dark";
  setMenuTheme(value);
  // .setMenuTheme(name);
};
</script>
<style lang="scss" scoped></style>
