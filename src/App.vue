<script>
import { RouterView } from 'vue-router'

export default{
  data(){
    return{

    }
  },

  mounted(){
    window.addEventListener('resize', ()=>{
      let docs = document.querySelector(':root').style;
      docs.setProperty('--vh', window.innerHeight/100 + 'px');
      docs.setProperty('--vw', window.innerWidth/100 + 'px');
    })
  }
}
</script>

<template>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app{
  width: calc(100* var(--vw)) ;
  height: calc(100* var(--vh)) ;
  background-color: black;
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>
