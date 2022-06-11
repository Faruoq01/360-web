<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <div class="home-container">
    <div class="side-menu">first</div>
    <div class="main-body">second</div>
  </div>
</template>

<style scoped>
  .home-container{
    width: 100vw;
    height:100vh;
    display: flex;
    flex-direction: row;
  }

  .side-menu{
    width: 15%;
    height: 100%;
    background-color:#404690;
  }

  .main-body{
    width: 85%;
    height: 100%;
    background-color: #fff;
  }
</style>
