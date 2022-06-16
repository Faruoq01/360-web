<template>
  <div class="home-container">
    <div v-if="createUserModal || addDepartment || addBranch" class="modal-container">
      <CreateUserModal v-if="createUserModal" @close-create-modal="closeCreateModal" />
      <AddDepartmentModal v-if="addDepartment" @close-department-modal ="closeDepartmentModal" />
      <BranchModal v-if="addBranch" @close-branch-modal ="closeBranchModal" />
    </div>
    <div class="side-bar">
      <SideBar />
    </div>
    <div class="main-content">
      <RouterView 
        @create-user="openCreateUserModal" 
        @add-department-modal="openAddDepartment"
        @add-branch-modal = "openBranch"
      />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/Home/SideBar.vue'
import CreateUserModal from '../components/Modals/CreateUserModal.vue'
import AddDepartmentModal from '../components/Modals/AddDepartmentModal.vue'
import BranchModal from '../components/Modals/BranchModal.vue'
import { RouterView } from 'vue-router'

export default{
  components:{
    SideBar,
    CreateUserModal,
    AddDepartmentModal,
    BranchModal,
    RouterView,
  },

  data(){
    return{
      createUserModal: false,
      addDepartment: false,
      addBranch: false,
    }
  },

  methods:{
    openCreateUserModal(){
      this.createUserModal = true;
    },

    closeCreateModal(){
      this.createUserModal = false;
    },

    openAddDepartment(){
      this.addDepartment = true;
    },

    closeDepartmentModal(){
      this.addDepartment = false;
    },

    openBranch(){
      this.addBranch = true;
    },

    closeBranchModal(){
      this.addBranch = false;
    },
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
