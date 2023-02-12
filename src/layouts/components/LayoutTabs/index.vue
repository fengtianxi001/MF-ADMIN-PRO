<template>
  <div class="layout-tabs">
    <BaseContextmenu
      v-for="(item, index) in dataSource"
      :key="index"
      :configs="item.contextmenu"
    >
      <div
        class="layout-tab-item"
        :class="{ active: item.active.value }"
        @click="item.onClick"
      >
        <component v-if="item.icon" :is="item.icon" class="tab-item-icon" />
        <span>{{ item.origin.title }}</span>
      </div>
    </BaseContextmenu>
  </div>
</template>
<script setup lang="ts">
import BaseContextmenu from "@/components/BaseContextmenu/index.vue";
import { useTabsStore } from "@/stores/modules/tab";
import { computed } from "vue";
import { IconPushpin, IconHeart } from "@arco-design/web-vue/es/icon";
const tabsStore = useTabsStore();

const dataSource = computed(() => {
  return tabsStore.tabs.map((item) => {
    const isHome = item.path === "/";
    const contextmenu = [
      {
        label: "重新加载",
        click: () => tabsStore.tabReload(item),
      },
      {
        label: "关闭其他",
        click: () => tabsStore.tabOthersClose(item),
      },
      {
        label: item.fixed ? "取消固定" : "固定",
        disabled: isHome,
        click: () => tabsStore.tabToggleFixed(item),
      },
      {
        label: "关闭",
        disabled: isHome,
        click: () => tabsStore.tabClose(item),
      },
    ];
    return {
      origin: item,
      contextmenu,
      active: computed(() => tabsStore.current.path === item.path),
      icon: isHome ? IconHeart : item.fixed ? IconPushpin : null,
      onClick: () => tabsStore.tabChange(item),
    };
  });
});
</script>
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
  .layout-tab-item {
    display: flex;
    align-items: center;
    justify-self: center;
    height: 100%;
    padding: 0 6px;
    flex-shrink: 0;
    font-size: 12px;
    user-select: none;
    background-color: var(--color-fill-2);
    color: var(--color-text-1);
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
    overflow: hidden;
    cursor: pointer;
    &.active {
      color: #fff;
      background-color: rgb(var(--primary-6));
    }
    .tab-item-icon {
      margin-right: 4px;
    }
  }
}
</style>
