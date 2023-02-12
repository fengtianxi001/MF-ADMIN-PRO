<template>
  <BaseDetailModal
    title="设备详情"
    :data="data"
    :loading="loading"
    :width="800"
    :column="2"
  />
</template>
<script setup lang="ts">
import BaseDetailModal from "@/components/BaseDetailModal/index.vue";
import { useRequest } from "@/hooks";
import { getMineDeviceDetail } from "@/apis/mine";
import { dateFormater } from "@/utils/common";

interface PropsType {
  id?: any;
}
const props = defineProps<PropsType>();
//表单数据源
const { data, loading } = useRequest(getMineDeviceDetail, {
  defaultParams: [props.id],
  defaultData: [],
  formatResult: (res) => {
    console.log("res", res);
    return [
      {
        label: "设备名称",
        value: res.name,
      },
      {
        label: "设备编号",
        value: res.code,
      },
      {
        label: "设备型号",
        value: res.model,
      },
      {
        label: "设备品牌",
        value: res.brand,
      },
      {
        label: "设备类别",
        value: res.category,
      },
      {
        label: "设备序列",
        value: res.sequence,
      },
      {
        label: "设备等级",
        value: res.level,
      },
      {
        label: "设备数量",
        value: res.number,
      },
      {
        label: "设备部门",
        value: res.department,
      },
      {
        label: "设备入库人",
        value: res.storager,
      },
      {
        label: "设备入库时间",
        value: dateFormater(res.storageTime),
      },
      {
        label: "设备购买时间",
        value: dateFormater(res.purchaseTime),
      },
      {
        label: "设备状态",
        value: res.status ? "正常" : "异常",
      },
      {
        label: "设备备注",
        value: res.remark,
      },
    ];
  },
});
</script>
