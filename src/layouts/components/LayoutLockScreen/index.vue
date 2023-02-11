<template>
  <div class="layout-lockscreen">
    <Clock />
  </div>
</template>
<script setup lang="ts">
import Clock from "./Clock/index.vue";
</script>
<style lang="scss">
.layout-lockscreen {
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  z-index: 9999;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
}
</style>
