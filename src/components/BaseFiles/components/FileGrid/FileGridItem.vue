<template>
  <FileContextmenu>
    <div
      class="file-grid-item"
      :class="{ checked: isItemCheck }"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      @contextmenu="onContextMenu"
    >
      <div class="file-grid-item-header" v-show="isHeaderShow">
        <a-checkbox v-model="isItemCheck" @change="onToggleChecked" />
      </div>
      <div class="file-grid-item-main" @click="onOpen(data)">
        <img class="file-grid-item-icon" :src="icon" alt="file-icon" />
        <em class="file-grid-item-name">{{ data.name }}</em>
      </div>
    </div>
  </FileContextmenu>
</template>
<script setup lang="ts">
import type { FileItem } from "../../types";
import FileContextmenu from "../FileContextmenu/index.vue";
import { useFileSystemGridItem } from "../../hooks/useFileSystemGridItem";
import { useFileIcon } from "../../hooks/useFileIcon";
interface PropsType {
  data: FileItem;
}
const props = defineProps<PropsType>();

const {
  isItemCheck,
  isHeaderShow,
  proviceFormParent,
  selectedKeys,
  onMouseEnter,
  onMouseLeave,
  onContextMenu,
  onToggleChecked,
  onOpen,
} = useFileSystemGridItem(props.data);

const { icon } = useFileIcon(props.data);
</script>
<style lang="scss" scoped>
.file-grid-item {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 110px;
  transition: all 0.2s ease-in-out;
  background-color: rgba(var(--gray-1), 0.6);
  &:hover {
    background-color: var(--color-fill-1);
  }
  &.checked {
    background-color: rgba(var(--primary-6), 0.1);
  }
  .file-grid-item-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    .file-grid-item-icon {
      width: 50px;
    }
    .file-grid-item-name {
      margin-top: 10px;
      font-size: 12px;
      color: var(--color-text-1);
    }
  }
  .file-grid-item-header {
    position: absolute;
    top: 6px;
    left: 1px;
  }
}
</style>

<style lang="scss">
.file-grid-item-detail-popover {
  .arco-popover-title {
    display: none;
  }
  padding: 0;
}
</style>
