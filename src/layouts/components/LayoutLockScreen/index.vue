<template>
  <div class="layout-lockscreen">
    <FlipClock />
    <Drawer v-model="visible" />
    <div class="trigger" @click="show">
      <IconLock />
      <em>点击解锁</em>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useVisible } from "@/hooks";
import { IconLock } from "@arco-design/web-vue/es/icon";
import FlipClock from "./FlipClock/index.vue";
import Drawer from "./Drawer.vue";

const { visible, show } = useVisible(false);
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
  z-index: 999;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  .trigger {
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 80px;
    color: #a4a4a5;
    font-size: 40px;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #fff;
    }
    // background: red;
    em {
      font-size: 16px;
      margin-top: 10px;
    }
  }
}
</style>
