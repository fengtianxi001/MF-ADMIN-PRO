<template>
  <Panel @click="show">
    <IconSettings />
    <Modal v-model:visible="visible" title="系统设置" :footer="false">
      <Form :model="store" label-align="left">
        <FormItem field="size" label="布局方式">
          <RadioGroup v-model="store.mode" type="button">
            <Radio value="sidebar">侧边栏</Radio>
            <Radio value="topmenu">头部菜单栏</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem field="size" label="系统主题">
          <RadioGroup v-model="store.theme" type="button">
            <Radio value="light">亮色主题</Radio>
            <Radio value="dark">暗黑主题</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem field="size" label="菜单栏主题">
          <RadioGroup v-model="store.menuTheme" type="button">
            <Radio value="light">亮色主题</Radio>
            <Radio value="dark">暗黑主题</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem field="size" label="页签栏">
          <RadioGroup v-model="store.hideTabs" type="button">
            <Radio :value="false">开启</Radio>
            <Radio :value="true">关闭</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem field="size" label="页脚">
          <RadioGroup v-model="store.hideFooter" type="button">
            <Radio :value="false">开启</Radio>
            <Radio :value="true">关闭</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem field="size" label="灰色模式">
          <RadioGroup v-model="store.greyMode" type="button">
            <Radio :value="true">开启</Radio>
            <Radio :value="false">关闭</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem field="size" label="色弱模式">
          <RadioGroup v-model="store.hypochromatopsia" type="button">
            <Radio :value="true">开启</Radio>
            <Radio :value="false">关闭</Radio>
          </RadioGroup>
        </FormItem>
      </Form>
    </Modal>
  </Panel>
</template>
<script setup lang="ts">
import { Modal, Form, FormItem, RadioGroup, Radio } from "@arco-design/web-vue";
import Panel from "../panel.vue";
import { useVisible } from "@/hooks";
import { IconSettings } from "@arco-design/web-vue/es/icon";
import useLayoutConfig from "../../../hooks/useLayoutConfig";

const { visible, show } = useVisible(false);
const { store } = useLayoutConfig();
</script>
<style lang="scss" scoped></style>
