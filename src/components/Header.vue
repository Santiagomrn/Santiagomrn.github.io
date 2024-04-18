<script lang="ts" setup>
import Navigation from './Navigation.vue'
</script>

<template>
  <header class="header" id="header">
    <Navigation />
  </header>
</template>

<style lang="css" scoped>
.header {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--first-color);
}
@media screen and (min-width: 768px) {
  .header {
    top: 0;
    bottom: initial;
  }
}
</style>
