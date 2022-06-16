<template>
  <div class="item">
    <div style="margin-bottom:20px" class="logo-container">
        <img class="logo" src="../../assets/images/logo.png" alt="logo" />
        <div class="org">360 Corporation</div>
    </div>

    <RouterLink class="route-style" to="/">
        <div @mouseenter="mouseEnter" @mouseleave="mouseLeave" v-bind:style="activeStates.dashboard? itemContainer: itemContainer2">
            <div v-bind:style="activeStates.dashboard? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.dashboard" src="../../assets/images/dashIcon.png" />
                <img class="dash" v-else src="../../assets/images/icons/dashWhite.png" />
                <div class="dash-text" :style="activeStates.dashboard? dashText:dashText2">Dashboard</div>
            </div>
        </div>
    </RouterLink>

    <RouterLink class="route-style" to="/settings">
        <div @mouseenter="mouseEnter" @mouseleave="mouseLeave" @click="settingsDropAccordion" v-bind:style="activeStates.settings? itemContainer: itemContainer2">
            <div v-bind:style="activeStates.settings? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.settings" src="../../assets/images/icons/setWhite.png" />
                <img class="dash" v-else src="../../assets/images/settings.png" />
                <div class="dash-text2" :style="activeStates.settings? dashText:dashText2">Settings</div>
                <img style="margin-left: 115px" class="dash-arrow" src="../../assets/images/arrowRight.png" />
            </div>
        </div>
    </RouterLink>
    <div v-if="settingsDrop" class="accordion">
        <div style="margin-top:5px" class="sub-modules">Department</div>
        <div class="sub-modules">Branch</div>
    </div>

    <RouterLink class="route-style" to="/feeds">
        <div @mouseenter="mouseEnter" @mouseleave="mouseLeave" v-bind:style="activeStates.feeds? itemContainer: itemContainer2">
            <div v-bind:style="activeStates.feeds? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.feeds" src="../../assets/images/icons/feedWhite.png" />
                <img class="dash" v-else src="../../assets/images/feeds.png" />
                <div class="dash-text2" :style="activeStates.feeds? dashText:dashText2">Feeds</div>
            </div>
        </div>
    </RouterLink>

    <RouterLink class="route-style" to="/user-management">
        <div @mouseenter="mouseEnter" @mouseleave="mouseLeave" @click="userDropAccordion" v-bind:style="activeStates.user? itemContainer: itemContainer2">
            <div v-bind:style="activeStates.user? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.user" src="../../assets/images/icons/userWhite.png" />
                <img class="dash" v-else src="../../assets/images/user.png" />
                <div class="dash-text2" :style="activeStates.user? dashText:dashText2">User Management</div>
                <img style="margin-left:50px" class="dash-arrow" src="../../assets/images/arrowRight.png" />
            </div>
        </div>
    </RouterLink>
    <div v-if="userDrop" class="accordion">
        <div style="margin-top:5px" class="sub-modules">All Users</div>
    </div>

    <RouterLink class="route-style" to="/contact-management">
        <div @mouseenter="mouseEnter" @mouseleave="mouseLeave" @click="ContactDropAccordion" v-bind:style="activeStates.contact? itemContainer: itemContainer2">
            <div v-bind:style="activeStates.contact? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.contact" src="../../assets/images/icons/contactWhite.png" />
                <img class="dash" v-else src="../../assets/images/contact.png" />
                <div class="dash-text2" :style="activeStates.contact? dashText:dashText2">Contact Management</div>
                <img style="margin-left: 30px" class="dash-arrow" src="../../assets/images/arrowRight.png" />
            </div>
        </div>
    </RouterLink>
    <div v-if="contactDrop" class="accordion">
        <div style="margin-top:5px" class="sub-modules">First item</div>
        <div class="sub-modules">Second item</div>
        <div class="sub-modules">Third item</div>
    </div>

    <RouterLink class="route-style" to="/departments">
        <div @mouseenter="mouseEnter" @mouseleave="mouseLeave" @click="DepartmentDropAccordion" v-bind:style="activeStates.departments? itemContainer: itemContainer2">
            <div v-bind:style="activeStates.departments? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.departments" src="../../assets/images/icons/depWhite.png" />
                <img class="dash" v-else src="../../assets/images/department.png" />
                <div class="dash-text2" :style="activeStates.departments? dashText:dashText2">Departments</div>
                <img style="margin-left: 80px" class="dash-arrow" src="../../assets/images/arrowRight.png" />
            </div>
        </div>
    </RouterLink>
    <div v-if="departmentDrop" class="accordion">
        <div style="margin-top:5px" class="sub-modules">First item</div>
        <div class="sub-modules">Second item</div>
        <div class="sub-modules">Third item</div>
    </div>

    <RouterLink class="route-style" to="/shedule">
        <div @mouseenter="mouseEnter" @mouseleave="mouseLeave" v-bind:style="activeStates.schedule? itemContainer: itemContainer2">
            <div class="inner-container2" v-bind:style="activeStates.schedule? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.schedule" src="../../assets/images/icons/shedWhite.png" />
                <img class="dash" v-else src="../../assets/images/schedule.png" />
                <div class="dash-text2" :style="activeStates.schedule? dashText:dashText2">Schedule & Reports</div>
            </div>
        </div>
    </RouterLink>

    <RouterLink class="route-style" to="/inventory">
    <div @mouseenter="mouseEnter" @mouseleave="mouseLeave" v-bind:style="activeStates.inventory? itemContainer: itemContainer2">
        <div class="inner-container2" v-bind:style="activeStates.inventory? innerContainer: innerContainer2"> 
            <img class="dash" v-if="activeStates.inventory" src="../../assets/images/icons/invWhite.png" />
                <img class="dash" v-else src="../../assets/images/inventory.png" />
            <div class="dash-text2" :style="activeStates.inventory? dashText:dashText2">Inventory</div>
        </div>
    </div>
    </RouterLink>

    <RouterLink class="route-style" to="/sales">
        <div @mouseenter="mouseEnter" @mouseleave="mouseLeave" v-bind:style="activeStates.sales? itemContainer: itemContainer2">
            <div class="inner-container2" v-bind:style="activeStates.sales? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.sales" src="../../assets/images/icons/salesWhite.png" />
                <img class="dash" v-else src="../../assets/images/sales.png" />
                <div class="dash-text2" :style="activeStates.sales? dashText:dashText2">Sales & Payments</div>
            </div>
        </div>
    </RouterLink>

    <RouterLink class="route-style" to="/companies">
        <div @mouseenter="mouseEnter" @mouseleave="mouseLeave" v-bind:style="activeStates.companies? itemContainer: itemContainer2">
            <div class="inner-container2" v-bind:style="activeStates.companies? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.companies" src="../../assets/images/icons/compWhite.png" />
                <img class="dash" v-else src="../../assets/images/company.png" />
                <div class="dash-text2" :style="activeStates.companies? dashText:dashText2">Companies</div>
            </div>
        </div>
    </RouterLink>

    <RouterLink class="route-style" to="/requests">
    <div @mouseenter="mouseEnter" @mouseleave="mouseLeave" v-bind:style="activeStates.requests? itemContainer: itemContainer2">
        <div class="inner-container2" v-bind:style="activeStates.requests? innerContainer: innerContainer2">
            <img class="dash" v-if="activeStates.requests" src="../../assets/images/icons/reqWhite.png" />
                <img class="dash" v-else src="../../assets/images/request.png" />
            <div class="dash-text2" :style="activeStates.requests? dashText:dashText2">Requests</div>
        </div>
    </div>
    </RouterLink>

    <RouterLink class="route-style" to="/messaging">
    <div @mouseenter="mouseEnter" @mouseleave="mouseLeave" v-bind:style="activeStates.messaging? itemContainer: itemContainer2">
        <div class="inner-container2" v-bind:style="activeStates.messaging? innerContainer: innerContainer2">
            <img class="dash" v-if="activeStates.messaging" src="../../assets/images/icons/messWhite.png" />
                <img class="dash" v-else src="../../assets/images/messaging.png" />
            <div class="dash-text2" :style="activeStates.messaging? dashText:dashText2">messaging</div>
        </div>
    </div>
    </RouterLink>

    <RouterLink class="route-style" to="/conferencing">
        <div @mouseenter="mouseEnter" @mouseleave="mouseLeave" v-bind:style="activeStates.conferencing? itemContainer: itemContainer2">
            <div class="inner-container2" v-bind:style="activeStates.conferencing? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.conferencing" src="../../assets/images/icons/confWhite.png" />
                <img class="dash" v-else src="../../assets/images/conferencing.png" />
                <div class="dash-text2" :style="activeStates.conferencing? dashText:dashText2">Conferencing</div>
            </div>
        </div>
    </RouterLink>
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
            settingsDrop: false,

            itemContainer: {
                width: '100%',
                height: '35px',
                backgroundColor: '#232759',
                marginTop: '15px',
                display: 'flex',
                alignItems: 'center',
                color:'#58A0DF'
            },

            itemContainer2: {
                width: '100%',
                height: '35px',
                marginTop: '15px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#404690',
            },

            innerContainer:{
                width: '100%',
                height: '20px',
                borderLeftWidth: '5px',
                borderLeftStyle: 'solid',
                borderLeftColor: '#58A0DF',
                backgroundColor: '#232759',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            },

            innerContainer2:{
                width: '100%',
                height: '20px',
                borderLeftWidth: '5px',
                borderLeftStyle: 'solid',
                borderLeftColor: '#404690',
                backgroundColor: 'transparent',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            },

            dashText:{
                fontFamily: 'Nunito-regular',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight:'20px',
                lineHeight: '25px',
                color: '#58A0DF',
                cursor: 'pointer',
                userSelect: 'none',
            },

            dashText2:{
                fontFamily: 'Nunito-regular',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '25px',
                color: '#fff',
                cursor: 'pointer',
                userSelect: 'none',
            },

            activeStates:{
                dashboard: false,
                settings:false,
                feeds:false,
                user:false,
                contact:false,
                departments:false,
                schedule:false,
                inventory:false,
                sales:false,
                companies:false,
                requests:false,
                messaging:false,
                conferencing:false,
            }
        }
    },

    watch:{
        '$route'(to, from){
            this.activeStates[from.name] = false;
            this.activeStates[to.name]= true;
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
        },

        settingsDropAccordion(){
            this.settingsDrop? this.settingsDrop = false: this.settingsDrop = true;
        },

        mouseEnter(e){
            let style = e.target.style;
            style.backgroundColor = '#232759';
        },

        mouseLeave(e){
            let style = e.target.style;
            let currentElement = e.fromElement.innerText.split(' ')[0].toLowerCase();
            if(currentElement === this.$route.name){
                style.backgroundColor = '#232759';
            }else{
                style.backgroundColor = '#404690';
            }
        },
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
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.logo{
    width: 40px;
    height: 40px;
}

.org{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;
    margin-left: 5px;
}

.route-style{
    width: 100%;
    text-decoration: none;
}
</style>
