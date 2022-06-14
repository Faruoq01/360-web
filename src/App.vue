<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

@media (min-width: 1366px) {
  #app {
    max-width: 2000px;
    margin: 0 auto;
    font-weight: normal;
  }
}
</style>
