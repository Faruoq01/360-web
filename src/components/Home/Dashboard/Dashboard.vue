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
            <div class="stat-item">
                <div class="lobe">
                    <img class="lobe-icon" src="../../../assets/images/lobe.png" alt="icon"/>
                </div>
                <div class="ico">
                    <img class="dash-icons" src="../../../assets/images/productsDash.png" alt="icon"/>
                </div>
                <div class="stat-details">
                    <div style="margin-top:10px" class="prod">Products</div>
                    <div class="prod">3</div>
                </div>
            </div>
            <div class="stat-item">
                <div class="lobe">
                    <img class="lobe-icon" src="../../../assets/images/lobe.png" alt="icon"/>
                </div>
                <div class="ico">
                    <img class="dash-icons" src="../../../assets/images/salesDash.png" alt="icon"/>
                </div>
                <div class="stat-details">
                    <div style="margin-top:10px" class="prod">Sales</div>
                    <div class="prod">#16,345.00</div>
                </div>
            </div>
            <div class="stat-item">
                <div class="lobe">
                    <img class="lobe-icon" src="../../../assets/images/lobe.png" alt="icon"/>
                </div>
                <div class="ico">
                    <img class="dash-icons" src="../../../assets/images/postDash.png" alt="icon"/>
                </div>
                <div class="stat-details">
                    <div style="margin-top:10px" class="prod">Posts</div>
                    <div class="prod">177</div>
                </div>
            </div>
            <div class="stat-item">
                <div class="lobe">
                    <img class="lobe-icon" src="../../../assets/images/lobe.png" alt="icon"/>
                </div>
                <div class="ico">
                    <img class="dash-icons" src="../../../assets/images/userDash.png" alt="icon"/>
                </div>
                <div class="stat-details">
                    <div style="margin-top:10px" class="prod">Users</div>
                    <div class="prod">107</div>
                </div>
            </div>
        </div>

        <div class="search-feed">
            <div class="left-side">
                <img style="width:18px; height:15px" class="search-icon" src="../../../assets/images/meet.png" alt="icon"/>
                <div class="texts">Recent General Feeds</div>
            </div>
            <div class="right-side">
                <img style="width:18px; height:15px" class="search-icon" src="../../../assets/images/search.png" alt="icon"/>
                <input style="background:#fff; margin-left:5px; font-weight:500" class="input-search" type="text" placeholder="Search" />
            </div>
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
