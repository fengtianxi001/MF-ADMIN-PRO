<template>
  <Flip :value="value" />
  <Flip :value="value" />
  <Flip value="时" />
  <Flip :value="value" />
  <Flip :value="value" />
  <Flip value="分" />
  <Flip :value="value" />
  <Flip :value="value" />
</template>
<script setup lang="ts">
import { ref } from "vue";
import Flip from "./Flip.vue";
const value = ref(0);
setInterval(() => {
  value.value++;
}, 1000);
</script>
<style lang="scss" scoped></style>
