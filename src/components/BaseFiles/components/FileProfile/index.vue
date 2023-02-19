<template>
  <div class="files-detail">
    <div class="container">
      <div class="detail-preview">
        <img :src="icon" alt="" />
      </div>
      <div class="detail-title">{{ data?.name }}</div>
      <div class="detail-list">
        <div class="detail-item">
          <span>创建时间:</span>
          <span>{{ data?.createdTime }}</span>
        </div>
        <div class="detail-item">
          <span>文件格式:</span>
          <span>{{ data?.suffix }}</span>
        </div>
        <div class="detail-item">
          <span>文件大小:</span>
          <span>{{ data?.size }}</span>
        </div>
        <div class="detail-item">
          <span>所在位置:</span>
          <span>{{ data?.path }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { FileItem } from "../../types";
import { computed } from "vue";
import { getFileIcon } from "../../utils";
interface PropsType {
  data: FileItem | undefined;
}
const props = defineProps<PropsType>();

const icon = computed(() => {
  const ext = props.data?.type === "folder" ? "folder" : props.data?.suffix;
  return getFileIcon(ext);
});
</script>
<style lang="scss" scoped>
.files-detail {
  width: 300px;
  // height: 600px;
  // padding: 0 10px;
  box-sizing: border-box;
  .container {
    width: 100%;
    height: 100%;
    // background-color: rgba(var(--gray-1));
    background-color: rgba(var(--gray-1), 0.6);
    padding: 10px 10px;
    box-sizing: border-box;
    .detail-preview {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 150px;
      // background-color: #dedede;
      border: 1px solid var(--color-neutral-3);
      margin-bottom: 10px;
      overflow: hidden;
      img {
        height: 80%;
        object-fit: contain;
      }
    }
    .detail-title {
      font-weight: bold;
      margin-bottom: 10px;
    }
    .detail-list {
      .detail-item {
        line-height: 30px;
        span:first-child {
          font-size: 12px;
          padding: 4px 8px;
          background-color: var(--color-fill-2);
        }
        span:last-child {
          font-size: 12px;
          padding: 4px 8px;
          // background-color: var(--color-fill-1);
        }
      }
    }
  }
}
</style>
