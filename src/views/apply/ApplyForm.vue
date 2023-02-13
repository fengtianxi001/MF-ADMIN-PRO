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
  props.id ? "设备申领编辑表单" : "设备申领新增表单"
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
    label: "申领原因",
    required: true,
    formItemProps: {
      labelColFlex: "100px",
    },
  },
  {
    name: "name",
    component: "Input",
    required: true,
    label: "申领内容",
  },
  {
    name: "model",
    component: "Input",
    required: true,
    label: "申领人",
  },
  {
    name: "brand",
    component: "Input",
    required: true,
    label: "申领时间",
  },
  {
    name: "sequence",
    component: "Input",
    required: true,
    label: "审核人",
  },
  {
    name: "level",
    component: "Input",
    required: true,
    label: "审核时间",
  },
  {
    name: "number",
    component: "Input",
    required: true,
    label: "状态",
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
