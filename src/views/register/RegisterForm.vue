<template>
  <BaseModal
    width="500px"
    :title="title"
    :onBeforeConfirm="onBeforeConfirm"
    :loading="loading"
  >
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
import { Message } from "@arco-design/web-vue";
import { computed, onMounted } from "vue";
import { useForm } from "@/hooks";
import { useRequest } from "@/hooks";
import BaseModal from "@/components/BaseModal/index.vue";
import BaseForm from "@/components/BaseForm/index.vue";
import {
  getRegisterDeviceDetail,
  addRegisterDevice,
  updateRegisterDevice,
} from "@/apis/register";

interface PropsType {
  id?: any;
}
const props = defineProps<PropsType>();

const title = computed(() =>
  props.id ? "设备登记编辑表单" : "设备登记新增表单"
);
//表单数据源
const { data, run, loading } = useRequest(getRegisterDeviceDetail, {
  manual: true,
  defaultParams: [props.id],
  defaultData: {},
});
//获取表单组件实例
const { form, validate } = useForm();
//表单配置
const configs = computed(() => [
  {
    name: "code",
    component: "Input",
    label: "设备编号",
    required: true,
    formItemProps: {
      labelColFlex: "100px",
    },
  },
  {
    name: "name",
    component: "Input",
    required: true,
    label: "设备名称",
  },
  {
    name: "model",
    component: "Input",
    required: true,
    label: "设备型号",
  },
  {
    name: "brand",
    component: "Input",
    required: true,
    label: "设备品牌",
  },
  {
    name: "sequence",
    component: "Input",
    required: true,
    label: "设备序号",
  },
  {
    name: "level",
    component: "Input",
    required: true,
    label: "设备密级",
  },
  {
    name: "number",
    component: "Input",
    required: true,
    label: "设备数量",
  },
  {
    name: "storager",
    component: "Input",
    required: true,
    label: "入库人",
  },
  {
    name: "storageTime",
    component: "Input",
    required: true,
    label: "入库时间",
  },
  {
    name: "purchaseTime",
    component: "Input",
    required: true,
    label: "购置时间",
  },
]);
//表单提交前的校验
const onBeforeConfirm = async () => {
  const errorMsg = await validate();
  if (errorMsg) return false;
  const methods = props.id ? updateRegisterDevice : addRegisterDevice;
  await methods(data.value);
  Message.success("操作成功");
  return true;
};
//初始化表单数据
onMounted(() => {
  props.id && run();
});
</script>
