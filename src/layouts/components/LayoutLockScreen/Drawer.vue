<template>
  <a-drawer
    height="100%"
    v-model:visible="visible"
    unmountOnClose
    :render-to-body="false"
    :header="false"
    :footer="false"
    placement="top"
    class="lock-screen-drawer"
  >
    <div class="container">
      <img class="avatar" src="@/assets/images/avatar.jpeg" alt="" />
      <em class="name">肛肠科冯主任</em>
      <a-input-password
        v-model="password"
        placeholder="请输入密码(admin)并回车"
        allow-clear
        @press-enter="actions.onEnter"
      />
      <div class="operates">
        <em @click="actions.onCancel">取消</em>
        <em @click="actions.onSwitchAccount">切换账号</em>
      </div>
    </div>
  </a-drawer>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { Message } from "@arco-design/web-vue";
import { useUserStore } from "@/stores/modules/user";
import useLayoutConfig from "../../hooks/useLayoutConfig";

interface PropsType {
  modelValue: boolean;
}
const props = defineProps<PropsType>();
const emit = defineEmits(["update:modelValue"]);
const visible = computed({
  get() {
    return props.modelValue;
  },
  set(val: boolean) {
    emit("update:modelValue", val);
  },
});
const password = ref("");
const { setLockScreen } = useLayoutConfig();
const { userLogout } = useUserStore();
const actions = {
  onCancel() {
    visible.value = false;
  },
  onSwitchAccount() {
    setLockScreen(false);
    userLogout();
  },
  onValidPassword() {
    return password.value === "admin";
  },
  onEnter() {
    const result = actions.onValidPassword();
    if (!result) return Message.error("密码错误");
    setLockScreen(false);
  },
};
</script>
<style lang="scss">
.lock-screen-drawer {
  .arco-drawer {
    background-color: transparent;
    backdrop-filter: blur(10px);
    .arco-drawer-body {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .container {
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    .name {
      color: #fff;
      font-weight: bold;
      margin: 10px 0 20px;
    }
    .operates {
      width: 100%;
      display: flex;
      justify-content: space-around;
      color: #fff;
      margin-top: 10px;
      em {
        cursor: pointer;
      }
    }
  }
}
</style>
