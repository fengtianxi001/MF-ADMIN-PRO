<template>
  <div class="layout-operate">
    <FullScreen title="切换全屏" />
    <Theme title="切换主题" />
    <Notify title="系统通知" />
    <LockScreen title="屏幕锁定" />
    <Profile title="用户信息" />
    <Refresh title="页面刷新" />
    <Setting title="系统设置" />
  </div>
</template>
<script setup lang="ts">
import FullScreen from "./FullScreen/index.vue";
import LockScreen from "./LockScreen/index.vue";
import Profile from "./Profile/index.vue";
import Setting from "./Setting/index.vue";
import Theme from "./Theme/index.vue";
import Notify from "./Notify/index.vue";
import Refresh from "./Refresh/index.vue";
</script>
<style lang="scss" scoped>
.layout-operate {
  display: flex;
  grid-gap: 10px;
  flex-shrink: 0;
}
</style>
