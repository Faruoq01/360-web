<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import SideBar from '@/components/Home/SideBar.vue'
</script>

<template>
  <div class="home-container">
    <div class="side-bar">
      <SideBar />
    </div>
    <div class="main-content">second</div>
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
  overflow: scroll;
}

.main-content{
  width: 85%;
  height: 100%;
  background-color: #fff;
}
</style>
