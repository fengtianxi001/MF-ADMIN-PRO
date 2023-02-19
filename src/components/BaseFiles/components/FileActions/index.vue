<template>
  <div class="file-actions">
    <a-button-group type="primary" v-show="isEmpty(selected)">
      <a-button size="small">
        <template #icon>
          <IconUpload />
        </template>
        <template #default>上传</template>
      </a-button>
      <a-button size="small">
        <template #icon>
          <IconPlus />
        </template>
        <template #default>新建文件夹</template>
      </a-button>
    </a-button-group>

    <a-button-group type="primary" v-show="!isEmpty(selected)">
      <a-button size="small">
        <template #icon>
          <IconDownload />
        </template>
        <template #default>下载</template>
      </a-button>
      <a-button size="small">
        <template #icon>
          <IconDelete />
        </template>
        <template #default>删除</template>
      </a-button>
      <a-button size="small">
        <template #icon>
          <IconDragArrow />
        </template>
        <template #default>移动</template>
      </a-button>
      <a-button size="small">
        <template #icon>
          <IconCopy />
        </template>
        <template #default>复制</template>
      </a-button>
    </a-button-group>
  </div>
</template>
<script setup lang="ts">
import { isEmpty } from "lodash";
import {
  IconUpload,
  IconPlus,
  IconCopy,
  IconDownload,
  IconDragArrow,
  IconDelete,
} from "@arco-design/web-vue/es/icon";
interface PropsType {
  selected: any[];
}
const props = defineProps<PropsType>();
</script>
<style lang="scss" scoped>
.file-actions {
  display: flex;
  gap: 10px;
  border-bottom: 1px solid var(--color-neutral-3);
  padding-bottom: 10px;
  margin-bottom: 10px;
}
</style>
