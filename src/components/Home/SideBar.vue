<template>
  <div class="item">
    <div class="logo-container">
        <img class="logo" src="../../assets/images/logo.png" alt="logo" />
        <div class="org">360 Corporation</div>
    </div>

    <RouterLink class="route-style" to="/">
        <div class=".item-container" v-bind:style="itemContainer">
            <div class="inner-container">
                <img class="dash" src="../../assets/images/dashIcon.png" />
                <div class="dash-text">Dashboard</div>
            </div>
        </div>
    </RouterLink>

    <RouterLink class="route-style" to="/settings">
        <div class="item-container2">
            <div class="inner-container2">
                <img class="dash" src="../../assets/images/settings.png" />
                <div class="dash-text2">Settings</div>
            </div>
        </div>
    </RouterLink>

    <div class="item-container2">
        <div class="inner-container2">
            <img class="dash" src="../../assets/images/feeds.png" />
            <div class="dash-text2">Feeds</div>
        </div>
    </div>

    <div @click="userDropAccordion" class="item-container2">
        <div class="inner-container2">
            <img class="dash" src="../../assets/images/user.png" />
            <div class="dash-text2">User Management</div>
            <img class="dash-arrow" src="../../assets/images/arrowRight.png" />
        </div>
    </div>
    <div v-if="userDrop" class="accordion">
        <div style="margin-top:5px" class="sub-modules">First item</div>
        <div class="sub-modules">Second item</div>
        <div class="sub-modules">Third item</div>
    </div>

    <div @click="ContactDropAccordion" class="item-container2">
        <div class="inner-container2">
            <img class="dash" src="../../assets/images/contact.png" />
            <div class="dash-text2">Contact Management</div>
            <img style="margin-left: 10%" class="dash-arrow" src="../../assets/images/arrowRight.png" />
        </div>
    </div>
    <div v-if="contactDrop" class="accordion">
        <div style="margin-top:5px" class="sub-modules">First item</div>
        <div class="sub-modules">Second item</div>
        <div class="sub-modules">Third item</div>
    </div>

    <div @click="DepartmentDropAccordion" class="item-container2">
        <div class="inner-container2">
            <img class="dash" src="../../assets/images/department.png" />
            <div class="dash-text2">Departments</div>
            <img style="margin-left: 33%" class="dash-arrow" src="../../assets/images/arrowRight.png" />
        </div>
    </div>
    <div v-if="departmentDrop" class="accordion">
        <div style="margin-top:5px" class="sub-modules">First item</div>
        <div class="sub-modules">Second item</div>
        <div class="sub-modules">Third item</div>
    </div>

    <div class="item-container2">
        <div class="inner-container2">
            <img class="dash" src="../../assets/images/schedule.png" />
            <div class="dash-text2">Schedule & Reports</div>
        </div>
    </div>

    <div class="item-container2">
        <div class="inner-container2">
            <img class="dash" src="../../assets/images/inventory.png" />
            <div class="dash-text2">Inventory</div>
        </div>
    </div>

    <div class="item-container2">
        <div class="inner-container2">
            <img class="dash" src="../../assets/images/sales.png" />
            <div class="dash-text2">Sales & Payments</div>
        </div>
    </div>

    <div class="item-container2">
        <div class="inner-container2">
            <img class="dash" src="../../assets/images/company.png" />
            <div class="dash-text2">Companies</div>
        </div>
    </div>

    <div class="item-container2">
        <div class="inner-container2">
            <img class="dash" src="../../assets/images/request.png" />
            <div class="dash-text2">Requests</div>
        </div>
    </div>

    <div class="item-container2">
        <div class="inner-container2">
            <img class="dash" src="../../assets/images/messaging.png" />
            <div class="dash-text2">messaging</div>
        </div>
    </div>

    <div class="item-container2">
        <div class="inner-container2">
            <img class="dash" src="../../assets/images/conferencing.png" />
            <div class="dash-text2">Conferencing</div>
        </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
    data(){
        return{
            userDrop:false,
            contactDrop:false,
            departmentDrop: false,

            itemContainer: {
                width: '100%',
                height: '35px',
                backgroundColor: '#232759',
                marginTop: '30px',
                display: 'flex',
                alignItems: 'center',
                color:'#58A0DF'
            }
        }
    },

    methods:{
        userDropAccordion(){
            this.userDrop? this.userDrop = false: this.userDrop = true;
        },

        ContactDropAccordion(){
            this.contactDrop? this.contactDrop = false: this.contactDrop = true;
        },

        DepartmentDropAccordion(){
            this.departmentDrop? this.departmentDrop = false: this.departmentDrop = true;
        }
    }
}
</script>

<style scoped>
@import '../styles/sidebar.css';

.item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.logo-container{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.logo{
    width: 40px;
    height: 40px;
}

.org{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 700;
    font-size: 18;
    line-height: 27px;
    color: #FFFFFF;
    margin-left: 5px;
}

.route-style{
    width: 100%;
    text-decoration: none;
}
</style>
