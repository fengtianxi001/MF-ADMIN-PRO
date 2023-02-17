<template>
  <div class="layout-operate">
    <FullScreen v-if="lAYOUT_OPERATES.fullscreen" title="切换全屏" />
    <Theme v-if="lAYOUT_OPERATES.theme" title="切换主题" />
    <Notify v-if="lAYOUT_OPERATES.notify" title="系统通知" />
    <LockScreen v-if="lAYOUT_OPERATES.lockscreen" title="屏幕锁定" />
    <Refresh v-if="lAYOUT_OPERATES.refresh" title="页面刷新" />
    <Setting v-if="lAYOUT_OPERATES.setting" title="系统设置" />
    <Profile title="用户信息" />
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
import APP_CONFIGS from "@/configs/app";

const { lAYOUT_OPERATES } = APP_CONFIGS;
</script>
<style lang="scss" scoped>
.layout-operate {
  display: flex;
  grid-gap: 10px;
  flex-shrink: 0;
}
</style>
