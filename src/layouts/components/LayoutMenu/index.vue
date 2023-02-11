<template>
  <Menu v-model:selectedKeys="selectedKeys" mode="vertical">
    <MenuItem key="1">
      <IconApps />
      <span>综合一张图</span>
    </MenuItem>
    <MenuItem key="2">
      <IconApps />
      <span>大坝安全监测</span>
    </MenuItem>
    <MenuItem key="3">
      <IconApps />
      <span>巡查统计</span>
    </MenuItem>
    <MenuItem key="4">
      <IconApps />
      <span>防洪预警预报</span>
    </MenuItem>
    <MenuItem key="5">
      <IconApps />
      <span>设备管理</span>
    </MenuItem>
    <MenuItem key="6">
      <IconApps />
      <span>工程管理</span>
    </MenuItem>
  </Menu>
</template>
<script setup lang="ts">
import { Menu, MenuItem } from "@arco-design/web-vue";
import {
  IconMenuFold,
  IconMenuUnfold,
  IconApps,
} from "@arco-design/web-vue/es/icon";
import { ref } from "vue";
const selectedKeys = ref(["1"]);
</script>
<style lang="scss" scoped></style>
