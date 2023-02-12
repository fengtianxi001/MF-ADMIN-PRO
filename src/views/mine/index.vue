<template>
  <div class="page-container">
    <BaseCard title="我的设备列表">
      <BaseTableFilter
        v-model="search"
        label-width="70px"
        :configs="tableFilter"
        :query="run"
      />
      <BaseTable
        row-key="id"
        :loading="loading"
        :columns="tableColumns"
        :data="dataSource"
        :pagination="pagination"
      />
    </BaseCard>
  </div>
</template>
<script setup lang="tsx">
import BaseCard from "@/components/BaseCard/index.vue";
import BaseTableFilter from "@/components/BaseTableFilter/index.vue";
import BaseButtonGroup from "@/components/BaseButtonGroup/index.vue";
import BaseTable from "@/components/BaseTable/index.vue";
import { useTable } from "@/hooks";
import { getMineDevicePage } from "@/apis/mine";
import { Tag, Badge } from "@arco-design/web-vue";
import { reactive } from "vue";
import MineDeviceForm from "./MineDeviceForm.vue";
import Modal from "@/components/BaseModal/index";
import { dateFormater } from "@/utils/common";
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
    component: "Select",
    label: "设备类别",
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
    title: "入库时间",
    align: "center",
    render: (record: any) => dateFormater(record.storageTime),
  },
  {
    title: "设备状态",
    align: "center",
    dataIndex: "status",
    render: (record: any) => {
      const status = record.status === 1 ? "success" : "normal";
      const text = record.status === 1 ? "正常" : "异常";
      return <Badge status={status} text={text} />;
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
          text: "详情",
          onClick: () => tableOperate.onDetail(record),
        },
      ];
      return <BaseButtonGroup data={configs}></BaseButtonGroup>;
    },
  },
];
//获取表格数据
const { loading, dataSource, search, pagination, run } =
  useTable(getMineDevicePage);
//表格数据操作
const tableOperate = {
  onDetail: async (record: any) => {
    console.log("inter");
    const result = await Modal(MineDeviceForm, { id: record.id });
    result && run();
  },
};
</script>
