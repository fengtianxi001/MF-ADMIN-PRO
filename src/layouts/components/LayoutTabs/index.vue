<template>
  <div class="layout-tabs">
    <div class="layout-tabs-item" v-for="item in 10" :key="item">首页</div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.layout-tabs {
  display: flex;
  grid-gap: 4px;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid var(--color-border);
  padding: 4px;
  box-sizing: border-box;
  background-color: var(--color-bg-2);
  .layout-tabs-item {
    display: flex;
    align-items: center;
    background-color: rgb(var(--primary-6));
    font-size: 12px;
    padding: 0 10px;
    color: #fff;
  }
}
</style>
