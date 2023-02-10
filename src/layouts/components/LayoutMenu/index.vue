<template>
  <Menu v-model:selectedKeys="selectedKeys" mode="vertical">
    <MenuItem key="1">
      <IconMenuFold />
      <span>nav 1</span>
    </MenuItem>
    <MenuItem key="2">
      <IconMenuUnfold />
      <span>nav 2</span>
    </MenuItem>
    <MenuItem key="3">
      <IconApps />
      <span>nav 3</span>
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
