<template>
  <div class="page-container" v-empty="empty">
    <BaseFileSystem />
  </div>
</template>
<script setup lang="ts">
import BaseFileSystem from "@/components/BaseFileSystem/index.vue";
import { ref } from "vue";

const empty = ref(true);
</script>
<style lang="scss" scoped>
.base-card {
  height: 500px;
  :deep(.arco-card-header) {
    padding-bottom: 10px;
  }
}
.container {
  display: flex;
}
</style>
