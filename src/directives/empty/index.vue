<template>
  <Empty class="empty" v-show="empty"> {{ tip }} </Empty>
</template>
<script setup lang="ts">
import { Empty } from "@arco-design/web-vue";
interface PropsType {
  tip: string;
  empty?: boolean;
}
withDefaults(defineProps<PropsType>(), {
  tip: "暂无数据",
});
</script>
<style lang="scss" scoped>
.empty {
  position: absolute;
  z-index: 200;
  top: calc(50% - 45px);
}
</style>
