<template>
  <Breadcrumb>
    <BreadcrumbItem
      v-for="{ name, path } in dataSource"
      :key="path"
      @click="onclick(path)"
    >
      {{ name }}
    </BreadcrumbItem>
  </Breadcrumb>
</template>
<script setup lang="ts">
import router from "@/router";
import { Breadcrumb, BreadcrumbItem } from "@arco-design/web-vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const dataSource = computed(() => {
  return route.matched.map((item) => {
    return {
      path: item.path,
      name: item.meta.locale,
    };
  });
});
const onclick = (path: string) => {
  router.push(path);
};
</script>
