<template>
  <BaseCard class="base-filesystem">
    <template #title>
      <Breadcrumb />
    </template>
    <template #extra>
      <GlobalOperation />
    </template>
    <div class="base-filesystem-container" v-loading="loading">
      <FileSystemList v-if="mode === 'list'" />
      <FileSystemGrid v-else />
    </div>
  </BaseCard>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useFileSystem } from "./stores/useFileSystem";
import BaseCard from "@/components/BaseCard/index.vue";
import GlobalOperation from "./widgets/GlobalOperation/index.vue";
import FileSystemList from "./components/FileSystemList/index.vue";
import FileSystemGrid from "./components/FileSystemGrid/index.vue";
import Breadcrumb from "./widgets/Breadcrumb/index.vue";

const { loading, mode } = storeToRefs(useFileSystem());
</script>
<style lang="scss" scoped>
.base-filesystem {
  box-sizing: border-box;
  :deep(.arco-card-header) {
    padding: 14px 20px !important;
  }
  .base-filesystem-container {
    // border-top: 1px solid var(--color-border);
  }
}
</style>
