<template>
  <a-breadcrumb>
    <a-breadcrumb-item>根目录</a-breadcrumb-item>
    <a-breadcrumb-item>我的文件</a-breadcrumb-item>
    <a-breadcrumb-item>资源</a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script setup lang="ts">
interface PropsType {
  data: string;
}
const props = defineProps<PropsType>();
</script>
<style lang="scss" scoped></style>
