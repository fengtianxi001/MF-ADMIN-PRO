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
import { onMounted, ref, watch, watchEffect } from "vue";

interface PropsType {
  value: number | string;
}
const props = defineProps<PropsType>();
const tick = ref<HTMLElement | null>(null);
let instance: any;
onMounted(() => {
  instance = Tick.DOM.create(tick.value, {
    value: props.value,
  });
});

watch(
  () => props.value,
  (value) => {
    console.log("inter");
    instance && (instance.value = value);
  }
);
</script>

<style lang="scss">
.tick {
  font-size: 3em;
  .tick-flip-panel-text-wrapper {
    font-weight: bold;
    color: #aeaeae;
  }
}
</style>
