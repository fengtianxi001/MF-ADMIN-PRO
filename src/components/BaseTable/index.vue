<template>
  <Table
    ref="table"
    v-bind="{ ...$attrs, ...attrs }"
    :columns="tableColumns"
    :pagination="false"
    :bordered="false"
  >
    <template v-for="(_, scopeSlotName) in $slots" #[scopeSlotName]="scope">
      <slot :name="scopeSlotName" v-bind="scope" />
    </template>
  </Table>

  <Pagination
    v-if="pagination"
    class="pagination"
    v-model:current="pagination.current"
    v-model:page-size="pagination.size"
    :total="pagination.total"
    :show-total="false"
  />
</template>
<script setup lang="ts">
import { Table, Pagination } from "@arco-design/web-vue";
import { computed, reactive, ref } from "vue";
interface PropsType {
  pagination?: {
    current: number;
    size: number;
    total: number;
  };
  selection?: boolean;
  columns: any[];
}
const props = defineProps<PropsType>();
const table = ref();
const attrs = computed(() => {
  const cache: any = {};
  if (props.selection) {
    cache.rowSelection = reactive({
      type: "checkbox",
      showCheckedAll: true,
      onlyCurrent: false,
    });
  }
  return cache;
});
const tableColumns = computed(() => {
  const filters = props.columns.filter((column) => column.show !== false);
  return filters.map((column) => {
    const render = column.render;
    if (render) {
      column.render = ({ record }: any) => render(record);
    }
    return column;
  });
});

defineExpose({
  table: table,
});
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
