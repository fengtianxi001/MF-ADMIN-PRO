<template>
  <Menu
    :selected-keys="selectedKey"
    mode="vertical"
    auto-open
    @menu-item-click="onMenuItemClick"
  >
    <LayoutMainMenuItem :routes="permissionStore.frontMenuList" />
  </Menu>
</template>
<script setup lang="ts">
import { Menu } from "@arco-design/web-vue";
import { usePermissionStore } from "@/stores/modules/permission";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import LayoutMainMenuItem from "./LayoutMainMenuItem";

const route = useRoute();
const router = useRouter();
const permissionStore = usePermissionStore();
const selectedKey = computed(() => [route.path]);
const onMenuItemClick = (key: string) => router.push(key);
</script>
<style lang="scss" scoped></style>
