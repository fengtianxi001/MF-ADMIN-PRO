<template>
  <div class="flip-clock">
    <FlipClockCell :value="state.hours" />
    <FlipClockSemicolon />
    <FlipClockCell :value="state.minutes" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from "vue";
import FlipClockCell from "./FlipClockCell.vue";
import FlipClockSemicolon from "./FlipClockSemicolon.vue";

const state = reactive({
  hours: "00",
  minutes: "00",
});
setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  state.hours = hours < 10 ? `0${hours}` : `${hours}`;
  state.minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
}, 1000 * 1);
</script>
<style lang="scss">
.flip-clock {
  display: flex;
  grid-gap: 10px;
  align-items: center;
  .tick {
    font-size: 10rem;
  }
}
</style>
