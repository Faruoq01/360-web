<script setup>
import SideBar from '@/components/Home/SideBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="home-container">
    <div class="side-bar">
      <SideBar />
    </div>
    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.home-container{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
}

.side-bar{
  width: 15%;
  height: 100%;
  background-color: #404690;
  overflow-y: scroll;
  overflow-x: hidden;
}

.main-content{
  width: 85%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
