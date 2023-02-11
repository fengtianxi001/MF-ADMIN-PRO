<template>
  <div ref="tick" class="tick">
    <div data-repeat="true" aria-hidden="true">
      <span data-view="flip"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
import { onMounted, ref, watchEffect } from "vue";

interface PropsType {
  value: number;
}
const props = defineProps<PropsType>();
const tick = ref<HTMLElement | null>(null);
let instance: any;
onMounted(() => {
  instance = Tick.DOM.create(tick.value, {
    value: props.value,
  });
});
watchEffect(() => {
  console.log("props.value", props.value);
  if (instance) {
    instance.value = props.value;
  }
});
</script>

<style scoped>
.tick {
  font-size: 3em;
}
</style>
