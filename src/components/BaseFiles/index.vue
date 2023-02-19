<template>
  <div class="base-files">
    <FileActions :selected="selected" />
    <div class="files-main">
      <div class="file-main-operates">
        <a-checkbox
          :model-value="isSelectAll"
          :indeterminate="isSelectHalf"
          @change="selectorActions.onToggleSelector"
        >
          全选
        </a-checkbox>
        <FileBreadcrumb :data="currentPath" />
      </div>
      <a-spin :loading="loading" tip="This may take a while...">
        <div class="files-main-container">
          <component :is="component" :data="dataSource" />
          <FileProfile :data="focuesItem" />
        </div>
      </a-spin>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, provide } from "vue";
import FileActions from "./components/FileActions/index.vue";
import FileBreadcrumb from "./components/FileBreadcrumb/index.vue";
import FileGrid from "./components/FileGrid/index.vue";
import FileTable from "./components/FileTable/index.vue";
import FileProfile from "./components/FileProfile/index.vue";
// import { uniqueId } from "lodash";
// import type { FileItem } from "./types";
import { useFileSystem } from "./hooks/useFileSystem";

const {
  mode,
  dataSource,
  currentPath,
  isEmptyData,
  loading,
  focuesItem,
  selected,
  isSelectAll,
  isSelectHalf,
  selectorActions,
  onChangeCurrentPath,
  onChangeFocusItem,
} = useFileSystem();
const component = computed(() => {
  return mode.value === "grid" ? FileGrid : FileTable;
});

provide("base-file", {
  mode,
  selected,
  currentPath,
  ...selectorActions,
  onChangeCurrentPath,
  onChangeFocusItem,
});
</script>
<style lang="scss" scoped>
.base-files {
  flex: 1;
  .files-main {
    .file-main-operates {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .files-main-container {
      min-height: 500px;
      display: flex;
      grid-gap: 10px;
      margin-top: 10px;
    }
  }
}
</style>
