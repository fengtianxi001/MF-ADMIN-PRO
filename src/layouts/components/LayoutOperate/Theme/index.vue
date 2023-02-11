<template>
  <Panel @click="themeToggle">
    <themeIcon />
  </Panel>
</template>
<script setup lang="ts">
import Panel from "../panel.vue";
import { useTheme } from "@/hooks";

const { themeIcon, themeToggle } = useTheme();
</script>
<style lang="scss" scoped></style>
