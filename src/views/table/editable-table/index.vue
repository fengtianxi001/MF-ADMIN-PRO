<template>
  <div class="page-container">
    <BaseCard title="可编辑表单">
      <BaseTable
        ref="table"
        row-key="id"
        v-model:selectedKeys="selected"
        :selection="true"
        :loading="loading"
        :columns="tableColumns"
        :data="dataSource"
        :pagination="pagination"
      >
        <template #name="{ record, column }">
          <a-input
            v-if="tableCache[record.id]"
            v-model="tableCache[record.id][column.dataIndex]"
          />
          <em v-else> {{ record[column.dataIndex] }}</em>
        </template>
        <template #principal="{ record, column }">
          <a-input
            v-if="tableCache[record.id]"
            v-model="tableCache[record.id][column.dataIndex]"
          />
          <em v-else> {{ record[column.dataIndex] }}</em>
        </template>
        <template #category="{ record, column }">
          <a-input
            v-if="tableCache[record.id]"
            v-model="tableCache[record.id][column.dataIndex]"
          />
          <em v-else> {{ record[column.dataIndex] }}</em>
        </template>
        <template #actions="{ record }">
          <a-space nowrap v-if="tableCache[record.id]">
            <Button
              type="text"
              @click="actions.onColumnSave(record.id)"
              :loading="tableCache[record.id]?.loading"
            >
              保存
            </Button>
            <Button type="text" @click="actions.onColumnCancel(record.id)">
              取消
            </Button>
          </a-space>
          <a-space nowrap v-else>
            <Button type="text" @click="actions.onColumnEdit(record)">
              编辑
            </Button>
            <Button type="text" @click="actions.onColumnDelete(record.id)">
              删除
            </Button>
          </a-space>
        </template>
      </BaseTable>
    </BaseCard>
  </div>
</template>
<script setup lang="tsx">
import BaseCard from "@/components/BaseCard/index.vue";
import BaseTable from "@/components/BaseTable/index.vue";
import { useTable } from "@/hooks";
import { getTablePage, delTableItem, updateTableItem } from "@/apis/table";
import { Message, Button } from "@arco-design/web-vue";
import { reactive } from "vue";
import { dateFormater, confirm } from "@/utils/common";

//表格列配置项
const tableColumns = [
  {
    title: "工程名称",
    dataIndex: "name",
    align: "left",
    width: 300,
    slotName: "name",
  },
  {
    title: "工程负责人",
    dataIndex: "principal",
    align: "left",
    width: 300,
    slotName: "principal",
  },

  {
    title: "工程类型",
    dataIndex: "category",
    align: "left",
    slotName: "category",
  },
  {
    title: "建档时间",
    dataIndex: "createTime",
    align: "center",

    render: (record: any) => {
      return <span>{dateFormater(record.createTime)}</span>;
    },
  },
  {
    title: "操作",
    dataIndex: "actions",
    align: "center",
    width: 200,
    slotName: "actions",
  },
];
//获取表格数据
const { table, selected, loading, dataSource, pagination, run } =
  useTable(getTablePage);

//待确认的表格数据
const tableCache = reactive<any>({});

//表格数据操作
const actions = {
  onColumnDelete: async (params: string[] | string) => {
    const result = await confirm("删除", "确定删除？", async () => {
      await delTableItem(params);
    });
    result && Message.success("删除成功") && run();
  },
  onColumnEdit: async (record: any) => {
    tableCache[record.id] = { ...record, loading: false };
  },
  async onColumnSave(id: string) {
    tableCache[id].loading = true;
    await updateTableItem(tableCache[id]);
    tableCache[id].loading = false;
    delete tableCache[id];
    Message.success("保存成功");
    //run();
  },
  onColumnCancel(id: string) {
    delete tableCache[id];
  },
};
</script>
