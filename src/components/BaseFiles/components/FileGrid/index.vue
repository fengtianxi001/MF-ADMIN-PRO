<template>
  <div class="file-grid">
    <FileGridItem
      v-for="item in data"
      :key="item.id"
      :data="item"
      :selected="selected"
    />
  </div>
</template>
<script setup lang="ts">
import type { FileItem } from "../../types";
import FileGridItem from "./FileGridItem.vue";
interface PropsType {
  selected: FileItem[];
  pointer: any;
  data: FileItem[];
  current: string;
}
const props = defineProps<PropsType>();
</script>
<style lang="scss" scoped>
.file-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-template-rows: repeat(auto-fit, 110px);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-auto-flow: dense;
  max-height: calc(100vh - 225px);
  overflow: auto;
}
</style>
