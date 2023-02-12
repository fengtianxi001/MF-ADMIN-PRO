<template>
  <BaseModal title="设备详情" width="500px" :loading="loading" :footer="false">
    <BaseForm
      ref="form"
      v-model="data"
      size="small"
      :configs="configs"
      :loading="loading"
    />
  </BaseModal>
</template>
<script setup lang="ts">
import BaseModal from "@/components/BaseModal/index.vue";
import BaseForm from "@/components/BaseForm/index.vue";
import { computed, onMounted } from "vue";
import { useForm } from "@/hooks";
import { useRequest } from "@/hooks";
import { getMineDeviceDetail } from "@/apis/mine";

interface PropsType {
  id?: any;
}
const props = defineProps<PropsType>();
//表单数据源
const { data, run, loading } = useRequest(getMineDeviceDetail, {
  manual: true,
  defaultParams: [props.id],
  defaultData: {},
  formatResult: (res) => {
    res.principalId = res.principal?.id;
    return res;
  },
});
//获取表单组件实例
const { form } = useForm();
//表单配置
const configs = computed(() => [
  {
    name: "code",
    component: "Input",
    label: "设备编号",
    props: {
      disabled: true,
    },
  },
  {
    name: "name",
    component: "Input",
    label: "设备名称",
    props: {
      disabled: true,
    },
  },
  {
    name: "model",
    component: "Input",
    label: "设备型号",
    props: {
      disabled: true,
    },
  },
  {
    name: "brand",
    component: "Input",
    label: "设备品牌",
    props: {
      disabled: true,
    },
  },
  {
    name: "category",
    component: "Input",
    label: "设备类别",
    props: {
      disabled: true,
    },
  },
  {
    name: "sequence",
    component: "Input",
    label: "设备序号",
    props: {
      disabled: true,
    },
  },
  {
    name: "level",
    component: "Input",
    label: "设备等级",
    props: {
      disabled: true,
    },
  },
  {
    name: "number",
    component: "Input",
    label: "设备数量",
    props: {
      disabled: true,
    },
  },
  {
    name: "department",
    component: "Input",
    label: "设备部门",
    props: {
      disabled: true,
    },
  },
  {
    name: "status",
    component: "Input",
    label: "设备状态",
    props: {
      disabled: true,
    },
  },
]);
//初始化表单数据
onMounted(() => {
  if (props.id) run();
});
</script>
