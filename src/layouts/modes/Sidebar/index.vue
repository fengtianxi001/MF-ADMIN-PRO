<template>
  <Layout class="layout-sidebar">
    <LayoutSider
      class="layout-sidebar-sider"
      hide-trigger
      collapsible
      :theme="menuTheme"
      :collapsed="siderCollapsed"
    >
      <LayoutBrand />
      <LayoutMenu />
    </LayoutSider>
    <Layout>
      <LayoutHeader>
        <LayoutSideTrigger />
        <LayoutBreadcrumb />
      </LayoutHeader>
      <LayoutMain style="padding-top: 78px" />
      <LayoutFooter />
    </Layout>
  </Layout>
</template>
<script setup lang="ts">
import { Layout, LayoutSider } from "@arco-design/web-vue";
import LayoutBrand from "../../components/LayoutBrand/index.vue";
import LayoutMenu from "../../components/LayoutMenu/index.vue";
import LayoutHeader from "../../components/LayoutHeader/index.vue";
import LayoutMain from "../../components/LayoutMain/index.vue";
import LayoutFooter from "../../components/LayoutFooter/index.vue";
import useLayoutConfig from "../../hooks/useLayoutConfig";
import LayoutSideTrigger from "../../components/LayoutSideTrigger/index.vue";
import LayoutBreadcrumb from "../../components/LayoutBreadcrumb/index.vue";

const { siderCollapsed, menuTheme } = useLayoutConfig();
</script>
<style lang="scss" scoped>
.layout-sidebar {
  width: 100%;
  height: 100vh;
  .layout-sidebar-sider {
    border-right: 1px solid var(--color-border);
    box-shadow: unset;
  }
}
</style>
