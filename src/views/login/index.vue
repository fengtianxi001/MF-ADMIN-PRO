<template>
  <button @click="onclick">登录</button>
</template>
<script setup lang="ts">
import { login } from "@/apis/user";
import { setToken } from "@/utils/auth";
import { router } from "@/router/index";
const onclick = async () => {
  const response = await login({});
  setToken(response.data.tokenValue);
  router.push("/");
};
</script>
<style lang="scss" scoped></style>
