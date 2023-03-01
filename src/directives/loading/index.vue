<template>
  <section class="loading" v-if="loading" :style="style">
    <Spin v-bind="$attrs" :tip="tip" :size="size" :loading="loading" />
  </section>
</template>
<script setup lang="ts">
import { Spin } from "@arco-design/web-vue";
import { computed, type StyleValue } from "vue";

interface PropsType {
  tip?: string;
  size?: number | undefined;
  loading?: boolean;
  fullscreen?: boolean;
}

const props = withDefaults(defineProps<PropsType>(), {
  tip: "加载中...",
  size: 50,
  loading: true,
  fullscreen: false,
});

const style = computed<StyleValue>(() => {
  const { fullscreen } = props;
  return {
    position: fullscreen ? "fixed" : "absolute",
  };
});
</script>
<style lang="scss" scoped>
.loading {
  top: 0;
  left: 0;
  z-index: 300;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
}
</style>
