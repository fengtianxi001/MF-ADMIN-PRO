<template>
  <div class="page-container">
    <BaseCard title="网盘实例" class="base-card">
      <div class="container">
        <BaseFiles />
      </div>
    </BaseCard>
  </div>
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";
import BaseFiles from "@/components/BaseFiles/index.vue";
</script>
<style lang="scss" scoped>
.base-card {
  :deep(.arco-card-header) {
    padding-bottom: 10px;
  }
}
.container {
  display: flex;
}
</style>
