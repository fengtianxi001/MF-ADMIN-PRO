<template>
  <Layout class="layout-top-menu">
    <Layout class="layout-top-menu-content">
      <LayoutHeader>
        <LayoutBrand />
        <LayoutMenu mode="horizontal" :theme="menuTheme" />
      </LayoutHeader>
      <LayoutMain :style="{ paddingTop: headerHeight }" />
      <LayoutFooter />
    </Layout>
  </Layout>
</template>
<script setup lang="ts">
import { Layout } from "@arco-design/web-vue";
import LayoutBrand from "../../components/LayoutBrand/index.vue";
import LayoutMenu from "../../components/LayoutMenu/index.vue";
import LayoutHeader from "../../components/LayoutHeader/index.vue";
import LayoutMain from "../../components/LayoutMain/index.vue";
import LayoutFooter from "../../components/LayoutFooter/index.vue";
import useLayoutConfig from "../../hooks/useLayoutConfig";

const { menuTheme, headerHeight } = useLayoutConfig();
</script>
<style lang="scss" scoped>
.layout-top-menu {
  width: 100%;
  height: 100vh;
}
</style>
