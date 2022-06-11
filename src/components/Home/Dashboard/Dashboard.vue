<template>
    <div class="dashboard-container">
        <div class="search-bar">
            <div class="search-container">
                <img class="search-icon" src="../../../assets/images/search.png" alt="icon"/>
                <input class="input-search" type="text" placeholder="Search" />
            </div>
            <div class="notes">
                <div class="icon">
                    <img class="bell" src="../../../assets/images/bell.png" alt="icon"/>
                </div>
                <div class="name">Hi, Olayimika </div>
                <div class="icon">
                    <img class="user-icon" src="../../../assets/images/first.png" alt="icon"/>
                </div>
            </div>
        </div>
        <div class="stats">

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userDrop:false,
            contactDrop:false,
            departmentDrop: false,
        }
    },

    methods:{
    }
}
</script>

<style scoped>
@import '../../styles/dashboard.css';

.dashboard-container{
  width: 96%;
  height: 94%;
}

.search-icon{
    width: 20px;
    height: 20px;
    margin-left: 10px;
}

</style>
