<template>
  <Panel>
    <a-dropdown position="bl" class="profile-container">
      <img class="profile-avatar" :src="userInfo?.avatar" alt="avatar" />
      <template #content>
        <a-doption>
          <UserCard :data="userInfo" />
        </a-doption>
        <a-doption
          v-for="item in dataSource"
          :key="item.text"
          @click="item.onClick"
        >
          <template #icon>
            <component :is="item.icon" />
          </template>
          <template #default>{{ item.text }}</template>
        </a-doption>
      </template>
    </a-dropdown>
  </Panel>
</template>
<script setup lang="ts">
import Panel from "../panel.vue";
import UserCard from "./UserCard.vue";
import { useUserStore } from "@/stores/modules/user";
import { IconExport } from "@arco-design/web-vue/es/icon";
import { confirm } from "@/utils/common";

const { userInfo, userLogout } = useUserStore();
const dataSource = [
  {
    icon: IconExport,
    text: "退出登录",
    onClick: async () => {
      const result = await confirm("退出登录", "确定退出登录吗?");
      result && userLogout();
    },
  },
];
</script>
<style lang="scss" scoped>
.profile-avatar {
  width: 100%;
  height: 100%;
}
</style>
