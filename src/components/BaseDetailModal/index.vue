<template>
  <BaseModal title="详情" width="500px" :footer="false">
    <Descriptions :data="data" :column="column" class="base-detail-modal">
      <DescriptionsItem
        v-for="(item, index) of data"
        :label="item.label"
        :key="index"
      >
        <Tag>{{ item.value }}</Tag>
      </DescriptionsItem>
    </Descriptions>
  </BaseModal>
</template>
<script setup lang="ts">
import BaseModal from "@/components/BaseModal/index.vue";
import { Descriptions, DescriptionsItem, Tag } from "@arco-design/web-vue";

interface PropsType {
  data?: any;
  column?: number;
}
const props = defineProps<PropsType>();
</script>
<style lang="scss">
.base-detail-modal {
  .arco-descriptions-item-label-block,
  .arco-descriptions-item-value-block {
    padding-bottom: 20px !important;
  }
}
</style>
