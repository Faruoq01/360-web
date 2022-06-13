<template>
  <div class="item">
    <div style="margin-bottom:20px" class="logo-container">
        <img class="logo" src="../../assets/images/logo.png" alt="logo" />
        <div class="org">360 Corporation</div>
    </div>

    <RouterLink class="route-style" to="/">
        <div @click="dashboard" v-bind:style="activeStates.A? itemContainer: itemContainer2">
            <div v-bind:style="activeStates.A? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.A" src="../../assets/images/dashIcon.png" />
                <img class="dash" v-else src="../../assets/images/icons/dashWhite.png" />
                <div class="dash-text" :style="activeStates.A? dashText:dashText2">Dashboard</div>
            </div>
        </div>
    </RouterLink>

    <RouterLink class="route-style" to="/settings">
        <div class="item-container2" @click="settings" v-bind:style="activeStates.B? itemContainer: itemContainer2">
            <div v-bind:style="activeStates.B? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.B" src="../../assets/images/icons/setWhite.png" />
                <img class="dash" v-else src="../../assets/images/settings.png" />
                <div class="dash-text2" :style="activeStates.B? dashText:dashText2">Settings</div>
            </div>
        </div>
    </RouterLink>

    <RouterLink class="route-style" to="/feeds">
        <div class="item-container2" @click="feeds" v-bind:style="activeStates.C? itemContainer: itemContainer2">
            <div v-bind:style="activeStates.C? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.C" src="../../assets/images/icons/feedWhite.png" />
                <img class="dash" v-else src="../../assets/images/feeds.png" />
                <div class="dash-text2" :style="activeStates.C? dashText:dashText2">Feeds</div>
            </div>
        </div>
    </RouterLink>

    <RouterLink class="route-style" to="/user-management">
        <div @click="userDropAccordion" v-bind:style="activeStates.D? itemContainer: itemContainer2">
            <div @click="user" v-bind:style="activeStates.D? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.D" src="../../assets/images/icons/userWhite.png" />
                <img class="dash" v-else src="../../assets/images/user.png" />
                <div class="dash-text2" :style="activeStates.D? dashText:dashText2">User Management</div>
                <img class="dash-arrow" src="../../assets/images/arrowRight.png" />
            </div>
        </div>
    </RouterLink>
    <div v-if="userDrop" class="accordion">
        <div style="margin-top:5px" class="sub-modules">First item</div>
        <div class="sub-modules">Second item</div>
        <div class="sub-modules">Third item</div>
    </div>

    <RouterLink class="route-style" to="/contact-management">
        <div @click="ContactDropAccordion" v-bind:style="activeStates.E? itemContainer: itemContainer2">
            <div @click="contacts" v-bind:style="activeStates.E? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.E" src="../../assets/images/icons/contactWhite.png" />
                <img class="dash" v-else src="../../assets/images/contact.png" />
                <div class="dash-text2" :style="activeStates.E? dashText:dashText2">Contact Management</div>
                <img style="margin-left: 10%" class="dash-arrow" src="../../assets/images/arrowRight.png" />
            </div>
        </div>
    </RouterLink>
    <div v-if="contactDrop" class="accordion">
        <div style="margin-top:5px" class="sub-modules">First item</div>
        <div class="sub-modules">Second item</div>
        <div class="sub-modules">Third item</div>
    </div>

    <RouterLink class="route-style" to="/department">
        <div @click="DepartmentDropAccordion" v-bind:style="activeStates.F? itemContainer: itemContainer2">
            <div @click="departments" v-bind:style="activeStates.F? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.F" src="../../assets/images/icons/depWhite.png" />
                <img class="dash" v-else src="../../assets/images/department.png" />
                <div class="dash-text2" :style="activeStates.F? dashText:dashText2">Departments</div>
                <img style="margin-left: 33%" class="dash-arrow" src="../../assets/images/arrowRight.png" />
            </div>
        </div>
    </RouterLink>
    <div v-if="departmentDrop" class="accordion">
        <div style="margin-top:5px" class="sub-modules">First item</div>
        <div class="sub-modules">Second item</div>
        <div class="sub-modules">Third item</div>
    </div>

    <RouterLink class="route-style" to="/shedule">
        <div @click="schedules" v-bind:style="activeStates.G? itemContainer: itemContainer2">
            <div class="inner-container2" v-bind:style="activeStates.G? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.G" src="../../assets/images/icons/shedWhite.png" />
                <img class="dash" v-else src="../../assets/images/schedule.png" />
                <div class="dash-text2" :style="activeStates.G? dashText:dashText2">Schedule & Reports</div>
            </div>
        </div>
    </RouterLink>

    <RouterLink class="route-style" to="/inventory">
    <div @click="inventory" v-bind:style="activeStates.H? itemContainer: itemContainer2">
        <div class="inner-container2" v-bind:style="activeStates.H? innerContainer: innerContainer2"> 
            <img class="dash" v-if="activeStates.H" src="../../assets/images/icons/invWhite.png" />
                <img class="dash" v-else src="../../assets/images/inventory.png" />
            <div class="dash-text2" :style="activeStates.H? dashText:dashText2">Inventory</div>
        </div>
    </div>
    </RouterLink>

    <RouterLink class="route-style" to="/sales">
        <div @click="sales" v-bind:style="activeStates.I? itemContainer: itemContainer2">
            <div class="inner-container2" v-bind:style="activeStates.I? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.I" src="../../assets/images/icons/salesWhite.png" />
                <img class="dash" v-else src="../../assets/images/sales.png" />
                <div class="dash-text2" :style="activeStates.I? dashText:dashText2">Sales & Payments</div>
            </div>
        </div>
    </RouterLink>

    <RouterLink class="route-style" to="/companies">
        <div @click="companies" v-bind:style="activeStates.J? itemContainer: itemContainer2">
            <div class="inner-container2" v-bind:style="activeStates.J? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.J" src="../../assets/images/icons/compWhite.png" />
                <img class="dash" v-else src="../../assets/images/company.png" />
                <div class="dash-text2" :style="activeStates.J? dashText:dashText2">Companies</div>
            </div>
        </div>
    </RouterLink>

    <RouterLink class="route-style" to="/request">
    <div @click="requests" v-bind:style="activeStates.K? itemContainer: itemContainer2">
        <div class="inner-container2" v-bind:style="activeStates.K? innerContainer: innerContainer2">
            <img class="dash" v-if="activeStates.K" src="../../assets/images/icons/reqWhite.png" />
                <img class="dash" v-else src="../../assets/images/request.png" />
            <div class="dash-text2" :style="activeStates.K? dashText:dashText2">Requests</div>
        </div>
    </div>
    </RouterLink>

    <RouterLink class="route-style" to="/messaging">
    <div @click="messaging" v-bind:style="activeStates.L? itemContainer: itemContainer2">
        <div class="inner-container2" v-bind:style="activeStates.L? innerContainer: innerContainer2">
            <img class="dash" v-if="activeStates.L" src="../../assets/images/icons/messWhite.png" />
                <img class="dash" v-else src="../../assets/images/messaging.png" />
            <div class="dash-text2" :style="activeStates.L? dashText:dashText2">messaging</div>
        </div>
    </div>
    </RouterLink>

    <RouterLink class="route-style" to="/conferencing">
        <div @click="conference" v-bind:style="activeStates.M? itemContainer: itemContainer2">
            <div class="inner-container2" v-bind:style="activeStates.M? innerContainer: innerContainer2">
                <img class="dash" v-if="activeStates.M" src="../../assets/images/icons/confWhite.png" />
                <img class="dash" v-else src="../../assets/images/conferencing.png" />
                <div class="dash-text2" :style="activeStates.M? dashText:dashText2">Conferencing</div>
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

            itemContainer: {
                width: '100%',
                height: '35px',
                backgroundColor: '#232759',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                color:'#58A0DF'
            },

            itemContainer2: {
                width: '100%',
                height: '35px',
                marginTop: '10px',
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
                fontSize: '12px',
                lineHeight: '25px',
                color: '#58A0DF',
                cursor: 'pointer',
                userSelect: 'none',
            },

            dashText2:{
                fontFamily: 'Nunito-regular',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '12px',
                lineHeight: '25px',
                color: '#fff',
                cursor: 'pointer',
                userSelect: 'none',
            },

            activeStates:{
                A: true,
                B:false,
                C:false,
                D:false,
                E:false,
                F:false,
                G:false,
                H:false,
                I:false,
                J:false,
                K:false,
                L:false,
                M:false,
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
        },

        dashboard(){
            const newState = {
                A: false,
                B:false,
                C:false,
                D:false,
                E:false,
                F:false,
                G:false,
                H:false,
                I:false,
                J:false,
                K:false,
                L:false,
                M:false,
            }

            newState.A = true;
            this.activeStates = newState;
        },

        settings(){
            const newState = {
                A: false,
                B:false,
                C:false,
                D:false,
                E:false,
                F:false,
                G:false,
                H:false,
                I:false,
                J:false,
                K:false,
                L:false,
                M:false,
            }

            newState.B = true;
            this.activeStates = newState;
        },

        feeds(){
            const newState = {
                A: false,
                B:false,
                C:false,
                D:false,
                E:false,
                F:false,
                G:false,
                H:false,
                I:false,
                J:false,
                K:false,
                L:false,
                M:false,
            }

            newState.C = true;
            this.activeStates = newState;
        },

        user(){
            const newState = {
                A: false,
                B:false,
                C:false,
                D:false,
                E:false,
                F:false,
                G:false,
                H:false,
                I:false,
                J:false,
                K:false,
                L:false,
                M:false,
            }

            newState.D = true;
            this.activeStates = newState;
        },

        contacts(){
            const newState = {
                A: false,
                B:false,
                C:false,
                D:false,
                E:false,
                F:false,
                G:false,
                H:false,
                I:false,
                J:false,
                K:false,
                L:false,
                M:false,
            }

            newState.E = true;
            this.activeStates = newState;
        },

        departments(){
            const newState = {
                A: false,
                B:false,
                C:false,
                D:false,
                E:false,
                F:false,
                G:false,
                H:false,
                I:false,
                J:false,
                K:false,
                L:false,
                M:false,
            }

            newState.F = true;
            this.activeStates = newState;
        },

        schedules(){
            const newState = {
                A: false,
                B:false,
                C:false,
                D:false,
                E:false,
                F:false,
                G:false,
                H:false,
                I:false,
                J:false,
                K:false,
                L:false,
                M:false,
            }

            newState.G = true;
            this.activeStates = newState;
        },

        inventory(){
            const newState = {
                A: false,
                B:false,
                C:false,
                D:false,
                E:false,
                F:false,
                G:false,
                H:false,
                I:false,
                J:false,
                K:false,
                L:false,
                M:false,
            }

            newState.H = true;
            this.activeStates = newState;
        },

        sales(){
            const newState = {
                A: false,
                B:false,
                C:false,
                D:false,
                E:false,
                F:false,
                G:false,
                H:false,
                I:false,
                J:false,
                K:false,
                L:false,
                M:false,
            }

            newState.I = true;
            this.activeStates = newState;
        },

        companies(){
            const newState = {
                A: false,
                B:false,
                C:false,
                D:false,
                E:false,
                F:false,
                G:false,
                H:false,
                I:false,
                J:false,
                K:false,
                L:false,
                M:false,
            }

            newState.J = true;
            this.activeStates = newState;
        },

        requests(){
            const newState = {
                A: false,
                B:false,
                C:false,
                D:false,
                E:false,
                F:false,
                G:false,
                H:false,
                I:false,
                J:false,
                K:false,
                L:false,
                M:false,
            }

            newState.K = true;
            this.activeStates = newState;
        },

        messaging(){
            const newState = {
                A: false,
                B:false,
                C:false,
                D:false,
                E:false,
                F:false,
                G:false,
                H:false,
                I:false,
                J:false,
                K:false,
                L:false,
                M:false,
            }

            newState.L = true;
            this.activeStates = newState;
        },

        conference(){
            const newState = {
                A: false,
                B:false,
                C:false,
                D:false,
                E:false,
                F:false,
                G:false,
                H:false,
                I:false,
                J:false,
                K:false,
                L:false,
                M:false,
            }

            newState.M = true;
            this.activeStates = newState;
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
