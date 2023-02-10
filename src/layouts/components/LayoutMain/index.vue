<template>
  <div class="layout-content">
    <div class="layout-content-main">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.layout-content {
  box-sizing: border-box;
}
.layout-content-main {
  height: 1000px;
  padding: 10px;
  background-color: #fff;
}
</style>
