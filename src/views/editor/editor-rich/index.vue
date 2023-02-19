<template>
  src/views/editor/editor-rich/index.vue
  {{ state.number }}
  {{ state.total }}
  <button @click="() => state.number++">click</button>
</template>
<script setup lang="ts">
import { reactive, computed, type ComputedRef } from "vue";

interface PropsType {}
const props = defineProps<PropsType>();

const state: {
  number: number;
  total: number;
} = reactive({
  number: 0,
  total: computed(() => state.number + 1),
});

console.log("state", state);

const a = reactive({
  number: 0,
  total: 1,
  //
});
</script>
<style lang="scss" scoped></style>
