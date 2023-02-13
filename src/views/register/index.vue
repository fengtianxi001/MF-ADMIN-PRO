<template>
  <div class="page-container">
    <BaseCard title="设备登记列表">
      <BaseTableFilter
        v-model="search"
        label-width="70px"
        :configs="tableFilter"
        :query="run"
      />
      <BaseButtonGroup :data="tableButton" />
      <BaseTable
        v-model:selectedKeys="selected"
        :selection="true"
        :loading="loading"
        :columns="tableColumns"
        :data="dataSource"
        :pagination="pagination"
        row-key="id"
      />
    </BaseCard>
  </div>
</template>
<script setup lang="tsx">
import Modal from "@/components/BaseModal/index";
import BaseCard from "@/components/BaseCard/index.vue";
import BaseTableFilter from "@/components/BaseTableFilter/index.vue";
import BaseButtonGroup from "@/components/BaseButtonGroup/index.vue";
import BaseTable from "@/components/BaseTable/index.vue";
import RegisterForm from "./RegisterForm.vue";
import BaseConfirm from "@/components/BaseConfirm";
import { size } from "lodash";
import { useTable } from "@/hooks";
import { computed, reactive } from "vue";
import { dateFormater } from "@/utils/common";
import { Tag } from "@arco-design/web-vue";
import { getRegisterDevicePage, deleteRegisterDevice } from "@/apis/register";

//表格筛选配置项
const tableFilter = reactive([
  {
    name: "code",
    component: "Input",
    label: "设备编号",
    formItemProps: {
      labelColFlex: "100px",
    },
  },
  {
    name: "name",
    component: "Input",
    label: "设备名称",
  },
  {
    name: "category",
    component: "Input",
    label: "设备类别",
  },
  {
    name: "model",
    component: "Input",
    label: "设备型号",
  },
  {
    name: "storager",
    component: "Input",
    label: "入库人",
  },
  {
    name: "storageTime",
    component: "DatePicker",
    label: "入库时间",
  },
]);
//表格按钮配置项
const tableButton = computed(() => [
  {
    type: "primary",
    onClick: tableOperate.onCreate,
    text: "新增记录",
  },
  {
    type: "primary",
    status: "danger",
    disabled: size(selected.value) === 0,
    onClick: () => {},
    text: "批量删除",
  },
]);

//表格列配置项
const tableColumns = [
  {
    title: "设备编号",
    align: "center",
    render: (record: any) => <Tag color="arcoblue">{record.code}</Tag>,
  },
  {
    title: "设备名称",
    align: "center",
    dataIndex: "name",
  },
  {
    title: "设备型号",
    align: "center",
    dataIndex: "model",
  },

  {
    title: "设备类别",
    align: "center",
    dataIndex: "category",
  },
  {
    title: "设备数量",
    align: "center",
    dataIndex: "number",
  },
  {
    title: "入库人",
    align: "center",
    dataIndex: "storager",
  },
  {
    title: "入库时间",
    align: "center",
    render: (record: any) => dateFormater(record.storageTime),
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
          onClick: () => tableOperate.onDetail(record),
        },
        {
          type: "text",
          text: "删除",
          onClick: () => tableOperate.onDelete(record),
        },
      ];
      return <BaseButtonGroup data={configs}></BaseButtonGroup>;
    },
  },
];
//获取表格数据
const { selected, loading, dataSource, search, pagination, run } = useTable(
  getRegisterDevicePage
);
//表格数据操作
const tableOperate = {
  onDetail: async (record: any) => {
    const result = await Modal(RegisterForm, { id: record.id });
    result && run();
  },
  onCreate: async () => {
    const result = await Modal(RegisterForm);
    result && run();
  },
  onDelete: async (record: any) => {
    const result = await BaseConfirm({
      title: "删除确认",
      content: "确认删除该记录吗？",
    });
    const response = result && (await deleteRegisterDevice(record.id));
    response && run();
  },
};
</script>
