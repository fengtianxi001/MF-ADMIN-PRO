<template>
  <div class="notify-item">
    <div class="notify-item-icon">
      <IconNotification />
    </div>
    <div class="notify-item-data">
      <div class="notify-item-text">
        「码上掘金月赛 第 1
        期」正式启动，这里有丰厚奖品、超多玩法等着你！欢迎掘友们参赛交流，挥洒灵感、迸发创意～详情请看：
        <a href="https://juejin.cn/post/7197608560603152441/"
          >https://juejin.cn/post/7197608560603152441/</a
        >
      </div>
      <div class="notify-item-time">2022-09-10 12:00:00</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { IconNotification } from "@arco-design/web-vue/es/icon";
</script>
<style lang="scss" scoped>
.notify-item {
  display: flex;
  grid-gap: 10px;
  font-size: 13px;

  &:not(:last-child) {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dedede;
  }
  .notify-item-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    width: 36px;
    height: 36px;
    background-color: rgb(var(--primary-6));
    flex-shrink: 0;
    border-radius: 50%;
    color: #fff;
  }
}
</style>
