<template>
  <Dropdown
    class="file-contentmenu"
    trigger="contextMenu"
    alignPoint
    position="bl"
  >
    <slot></slot>
    <template #content>
      <Doption
        class="contextmenu-item"
        v-for="(item, index) in data"
        :key="index"
        @click="item.click"
      >
        <template #icon v-if="item.icon">
          <component :is="item.icon" />
        </template>
        <template #default>{{ item.label }}</template>
      </Doption>
    </template>
  </Dropdown>
</template>
<script setup lang="ts">
import { Dropdown, Doption } from "@arco-design/web-vue";
import {
  IconCheck,
  IconDownload,
  IconEraser,
  IconDelete,
  IconDragArrow,
} from "@arco-design/web-vue/es/icon";

const data = [
  {
    label: "打开",
    icon: IconCheck,
    click: () => {},
  },
  {
    label: "下载",
    icon: IconDownload,
    click: () => {},
  },
  {
    label: "移动",
    icon: IconDragArrow,
    click: () => {},
  },
  {
    label: "删除",
    icon: IconDelete,
    click: () => {},
  },
  {
    label: "重命名",
    icon: IconEraser,
    click: () => {},
  },
];
</script>
<style lang="scss">
.file-contentmenu {
  .arco-dropdown {
    padding: 4px;
    .arco-dropdown-option {
      font-size: 11px;
      line-height: 30px;
      padding: 0 8px;
    }
  }
  font-size: 12px;
}
</style>
