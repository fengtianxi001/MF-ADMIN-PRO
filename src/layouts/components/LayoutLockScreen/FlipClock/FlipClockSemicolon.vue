<template>
  <div class="flip-clock-semicolons">
    <div class="flip-clock-semicolon"></div>
    <div class="flip-clock-semicolon"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.flip-clock-semicolons {
  display: flex;
  flex-direction: column;
  width: 1rem;
  height: 10rem;
  justify-content: center;
  gap: 2rem;
  .flip-clock-semicolon {
    width: 1rem;
    height: 1rem;
    background-color: #333232;
    border-radius: 50%;
  }
}
</style>
