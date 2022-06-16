<template>
  <div class="home-container">
    <div v-if="createUserModal" class="modal-container">
      <CreateUserModal @close-create-modal="closeCreateModal" />
    </div>
    <div class="side-bar">
      <SideBar />
    </div>
    <div class="main-content">
      <RouterView 
        @create-user="openCreateUserModal" 
      />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/Home/SideBar.vue'
import CreateUserModal from '../components/Modals/CreateUserModal.vue'
import { RouterView } from 'vue-router'

export default{
  components:{
    SideBar,
    CreateUserModal,
    RouterView,
  },

  data(){
    return{
      createUserModal: false,
    }
  },

  methods:{
    openCreateUserModal(){
      this.createUserModal = true;
    },

    closeCreateModal(){
      this.createUserModal = false;
    }
  }
}
</script>

<style scoped>
.home-container{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
}

.side-bar{
  max-width: 230px;
  min-width: 215px;
  width: 17%;
  height: 100%;
  background-color: #404690;
  overflow-y: scroll;
  overflow-x: hidden;
}

.main-content{
  max-width: 1700px;
  min-width: 1000px;
  width: 83%;
  height: 100%;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
}

.modal-container{
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
