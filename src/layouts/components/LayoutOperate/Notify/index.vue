<template>
  <Panel @click="show">
    <IconNotification />
    <Modal v-model:visible="visible" title="系统未读消息">
      <div class="container">
        <NotifyItem />
        <NotifyItem />
        <NotifyItem />
        <NotifyItem />
      </div>
      <template #footer>
        <Space>
          <Button>关闭窗口</Button>
          <Button type="primary" :loading="loading" @click="onAllRead">
            一键已读
          </Button>
        </Space>
      </template>
    </Modal>
  </Panel>
</template>
<script setup lang="ts">
import { useVisible } from "@/hooks";
import { Modal, Button, Space, Message } from "@arco-design/web-vue";
import { IconNotification } from "@arco-design/web-vue/es/icon";
import { useLoading } from "@/hooks";
import Panel from "../panel.vue";
import NotifyItem from "./NotifyItem.vue";

const { loading } = useLoading(false);
const { visible, show, hide } = useVisible(false);

const onAllRead = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    Message.success("操作成功");
    hide();
  }, 2000);
};
</script>
<style lang="scss" scoped>
.container {
  max-height: 500px;
}
</style>
