<template>
  <RouterView />
  <div class="page-loading" v-if="appStore.pageLoading">页面加载中</div>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import { useAppStore } from "./stores/modules/app";
const appStore = useAppStore();
</script>
<style lang="scss">
#app {
  background-color: var(--color-bg-1);
}
.page-loading {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
