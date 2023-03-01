<template>
  <div class="file-actions">
    <a-button-group type="primary">
      <BaseIconButton
        v-for="{ id, icon, text, visible, onclick } in buttonList"
        size="small"
        :key="id"
        :icon="icon"
        :text="text"
        :visible="visible"
        @click="onclick"
      />
    </a-button-group>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useFileSystem } from "../../stores/useFileSystem";
import {
  IconUpload,
  IconPlus,
  IconDownload,
  IconDragArrow,
  IconDelete,
} from "@arco-design/web-vue/es/icon";
import BaseIconButton from "@/components/BaseIconButton/index.vue";

const store = useFileSystem();
const { isEmptySelected } = storeToRefs(store);
const buttonList = computed(() => [
  {
    id: "upload",
    icon: IconUpload,
    text: "上传",
    visible: isEmptySelected.value,
    onclick: () => {},
  },
  {
    id: "add",
    icon: IconPlus,
    text: "新建文件夹",
    visible: isEmptySelected.value,
    onclick: () => {},
  },
  {
    id: "download",
    icon: IconDownload,
    text: "下载",
    visible: !isEmptySelected.value,
    onclick: () => {},
  },
  {
    id: "delete",
    icon: IconDelete,
    text: "删除",
    visible: !isEmptySelected.value,
    onclick: () => {},
  },
  {
    id: "move",
    icon: IconDragArrow,
    text: "移动",
    visible: !isEmptySelected.value,
    onclick: () => {},
  },
]);
</script>
<style lang="scss" scoped>
.file-actions {
  display: flex;
  gap: 10px;
}
</style>
