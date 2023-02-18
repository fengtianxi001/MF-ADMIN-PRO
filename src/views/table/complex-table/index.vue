<template>
  <div class="page-container">
    <BaseCard title="综合表单">
      <BaseTableFilter
        v-model="search"
        label-width="70px"
        :configs="tableFilter"
        :query="run"
      />
      <BaseButtonGroup :data="tableOperates" />
      <BaseTable
        ref="table"
        row-key="id"
        v-model:selectedKeys="selected"
        :selection="true"
        :loading="loading"
        :columns="tableColumns"
        :data="dataSource"
        :pagination="pagination"
      />
    </BaseCard>
  </div>
</template>
<script setup lang="tsx">
import TableForm from "./TableForm.vue";
import Modal from "@/components/BaseModal/index";
import BaseCard from "@/components/BaseCard/index.vue";
import BaseTableFilter from "@/components/BaseTableFilter/index.vue";
import BaseButtonGroup from "@/components/BaseButtonGroup/index.vue";
import BaseTable from "@/components/BaseTable/index.vue";
import { useTable } from "@/hooks";
import { getTablePage, delTableItem } from "@/apis/table";
import { Badge, Message } from "@arco-design/web-vue";
import { computed, reactive } from "vue";
import { dateFormater, confirm } from "@/utils/common";
import { isEmpty } from "lodash";
//表格筛选配置项
const tableFilter = reactive([
  {
    name: "name",
    component: "Input",
    label: "工程名称",
    formItemProps: {
      labelColFlex: "100px",
    },
  },
  {
    name: "principalId",
    component: "Select",
    label: "工程负责人",
    props: {
      options: [
        {
          label: "土木工程",
          value: "1",
        },
        {
          label: "水利工程",
          value: "2",
        },
      ],
    },
  },
  {
    name: "code",
    component: "Input",
    label: "工程编码",
  },
  {
    name: "type",
    component: "Select",
    label: "工程类型",
    props: {
      options: [
        {
          label: "土木工程",
          value: "1",
        },
        {
          label: "水利工程",
          value: "2",
        },
      ],
    },
  },
  {
    name: "status",
    component: "Select",
    label: "工程状态",
    props: {
      options: [
        {
          label: "正常",
          value: 1,
        },
        {
          label: "异常",
          value: 0,
        },
      ],
    },
  },
  {
    name: "createTime",
    component: "RangePicker",
    label: "建档时间",
    props: {
      format: "YYYY-MM-DD",
      placeholder: ["开始时间", "结束时间"],
    },
  },
]);
//表格列配置项
const tableColumns = [
  {
    title: "工程名称",
    dataIndex: "name",
    align: "left",
  },
  {
    title: "工程负责人",
    dataIndex: "principal",
    align: "center",
  },
  {
    title: "工程编码",
    dataIndex: "code",
    align: "center",
  },

  {
    title: "工程类型",
    dataIndex: "category",
    align: "center",
  },
  {
    title: "工程规模",
    dataIndex: "scale",
    align: "center",
  },
  {
    title: "所属机构",
    align: "center",
    dataIndex: "organization",
  },
  {
    title: "工程状态",
    align: "center",
    dataIndex: "status",
    render: (record: any) => {
      const status = record.status === 1 ? "success" : "normal";
      const text = record.status === 1 ? "正常" : "异常";
      return <Badge status={status} text={text} />;
    },
  },
  {
    title: "建档时间",
    align: "center",
    dataIndex: "createTime",
    render: (record: any) => {
      return <span>{dateFormater(record.createTime)}</span>;
    },
  },
  {
    title: "操作",
    align: "center",
    width: 150,
    render: (record: any) => {
      const configs = [
        {
          type: "text",
          text: "编辑",
          onClick: () => actions.onEdit(record),
        },
        {
          type: "text",
          text: "删除",
          onClick: () => actions.onDelete(record.id),
        },
      ];
      return <BaseButtonGroup data={configs}></BaseButtonGroup>;
    },
  },
];
//获取表格数据
const { table, selected, loading, dataSource, search, pagination, run } =
  useTable(getTablePage);

//表格操作按钮
const tableOperates = computed(() => [
  {
    type: "primary",
    text: "新增工程",
    onClick: () => actions.onAdd(),
  },
  {
    status: "danger",
    text: "批量删除",
    disabled: isEmpty(selected.value),
    onClick: () => actions.onDelete(selected.value),
  },
]);

//表格数据操作
const actions = {
  onAdd: async () => {
    const result = await Modal(TableForm);
    result && run();
  },
  onEdit: async (record: any) => {
    const result = await Modal(TableForm, { id: record.id });
    result && run();
  },
  onDelete: async (params: string[] | string) => {
    const result = await confirm("删除", "确定删除？", async () => {
      await delTableItem(params);
    });
    result && Message.success("删除成功") && run();
  },
};
</script>
