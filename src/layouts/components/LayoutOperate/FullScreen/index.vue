<template>
  <Panel @click="fullscreenToggle">
    <fullscreenIcon />
  </Panel>
</template>
<script setup lang="ts">
import Panel from "../panel.vue";
import { useFullscreen } from "@/hooks";

const { fullscreenIcon, fullscreenToggle } = useFullscreen();
</script>
<style lang="scss" scoped></style>
