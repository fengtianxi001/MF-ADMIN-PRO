<template>
  <Spin :loading="loading">
    <Card class="base-card" v-bind="$attrs">
      <template #title>
        <slot name="title">{{ title }}</slot>
      </template>

      <template #extra>
        <slot name="extra"></slot>
      </template>

      <Empty v-show="isEmpty">
        <template #image>
          <IconExclamationCircleFill />
        </template>
        <span>暂无数据</span>
      </Empty>
      <div class="base-card-container" v-show="!isEmpty">
        <slot></slot>
      </div>
    </Card>
  </Spin>
</template>
<script setup lang="ts">
import { Card } from "@arco-design/web-vue";
import { computed } from "vue";
import { Spin, Empty } from "@arco-design/web-vue";
import { IconExclamationCircleFill } from "@arco-design/web-vue/es/icon";

interface PropsType {
  title?: string;
  loading?: boolean;
  empty?: boolean;
}
const props = defineProps<PropsType>();
const isEmpty = computed(() => props.empty === true);
</script>
<style lang="scss" scoped>
.base-card {
  border-radius: 0px;
  border: none;
  .base-card-container {
    width: 100%;
    display: grid;
    grid-gap: 12px;
    height: 100%;
  }
  :deep(.arco-card-header) {
    display: flex;
    align-items: center;
    border: none;
    padding: 14px 20px 18px;
    height: auto;
  }
  :deep(.arco-card-body) {
    padding: 0 20px 20px;
    height: calc(100% - 77px);
    // height: 100%;
  }
}
</style>
