<template>
  <Button :type="type" v-show="visible" v-bind="$attrs">
    <template #icon>
      <component :is="icon" />
    </template>
    <template #default>{{ text }}</template>
  </Button>
</template>
<script setup lang="ts">
import { Button } from "@arco-design/web-vue";
interface PropsType {
  icon: any;
  text: string;
  visible?: boolean;
  type?: "primary" | "text" | "dashed" | "outline" | "secondary" | undefined;
}
withDefaults(defineProps<PropsType>(), {
  visible: true,
  type: "primary",
});
</script>
<style lang="scss" scoped></style>
