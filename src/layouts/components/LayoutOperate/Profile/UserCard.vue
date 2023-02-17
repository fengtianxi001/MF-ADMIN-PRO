<template>
  <div class="user-card">
    <img class="user-card-avatar" :src="data?.avatar" alt="avatar" />
    <div class="user-card-info">
      <em class="user-card-info-name">{{ data?.name }}</em>
      <em class="user-card-info-desc">{{ data?.email }}</em>
    </div>
  </div>
</template>
<script setup lang="ts">
interface PropsType {
  data: {
    name: string;
    email: string;
    avatar: string;
    introduction: string;
    roles: string[];
  } | null;
}
const props = defineProps<PropsType>();
</script>
<style lang="scss" scoped>
.user-card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 0;
  .user-card-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid rgb(var(--gray-2));
  }
  .user-card-info {
    display: grid;
    grid-gap: 6px;
    .user-card-info-name {
      font-size: 14px;
      line-height: 14px;
      font-weight: bold;
    }
    .user-card-info-desc {
      font-size: 12px;
      line-height: 12px;
      color: #999;
    }
  }
}
</style>
