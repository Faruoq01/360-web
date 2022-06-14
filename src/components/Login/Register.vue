<template>
    <div class="main-body">
        <div class="inner-reg">
            <div style="margin-top:5%; line-height: 30px;" class="login-title">Register a business account</div>
            <div class="desc">Please enter your details.</div>

            <div class="container-input">
                <div class="header">
                    Business Name
                </div>
                <input type="text" class="top-input" />
            </div>

            <div class="container-input-double">
                <div class="item">
                    <div class="container-input">
                        <div class="header">
                            RC Number
                        </div>
                        <input type="text" class="top-input" />
                    </div>
                </div>
                <div class="item">
                    <div class="container-input">
                        <div class="header">
                            To
                        </div>
                        <input type="text" class="top-input" />
                    </div>
                </div>
            </div>

            <div class="container-input-double">
                <div class="item">
                    <div class="container-input">
                        <div class="header">
                            Date of Incorporation
                        </div>
                        <input type="text" class="top-input" />
                    </div>
                </div>
                <div class="item">
                    <div class="container-input">
                        <div class="header">
                            Business Email
                        </div>
                        <input type="text" class="top-input" />
                    </div>
                </div>
            </div>

            <div class="container-input">
                <div class="header">
                    Business Phone N0
                </div>
                <div id="phone" class="top-input" >
                    <div class="code">
                        <img style="width:20px; height:15px" src="../../assets/images/flag.png" alt="icon" />
                        <img style="width:10px; height:5px; margin-right:2px" src="../../assets/images/downArrow.png" alt="icon" />
                    </div>
                    <div class="input-code">
                        <input class="phone-code" type="text" placeholder="Phone No" />
                    </div>
                </div>
            </div>

            <div class="container-input-double">
                <div class="item">
                    <div class="container-input">
                        <div class="header">
                            State
                        </div>
                        <div class="top-input">
                            <select class="text-style" style="width:84%; border: none">
                                <option>Select state</option>
                                <option>option 1</option>
                                <option>option 1</option>
                                <option>option 1</option>
                            </select>
                            <img class="sell" src="../../assets/images/downArrow.png" alt="icon" />
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="container-input">
                        <div class="header">
                            Business Address
                        </div>
                        <input type="text" class="top-input" />
                    </div>
                </div>
            </div>

            <div class="container-input-double">
                <div class="item">
                    <div class="container-input">
                        <div class="header">
                            Password
                        </div>
                        <div class="top-input">
                            <input class="text-style" style="width:84%; border: none; background:#fff" :type="updatePasswordType" />
                            <img @click="toggleEye" v-if="passwordEye" style="width:15px; height:15px" src="../../assets/images/show.png" alt="icon" />
                            <img @click="toggleEye" v-else style="width:15px; height:15px" src="../../assets/images/hide.png" alt="icon" />
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="container-input">
                        <div class="header">
                            Confirm Password
                        </div>
                        <div class="top-input">
                            <input class="text-style" style="width:84%; border: none; background:#fff" :type="updateConfirmPasswordType" />
                            <img @click="toggleConfirmPassword" v-if="confirmPasswordEye" style="width:15px; height:15px" src="../../assets/images/show.png" alt="icon" />
                            <img @click="toggleConfirmPassword" v-else style="width:15px; height:15px" src="../../assets/images/hide.png" alt="icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="terms"> 
                <input type="checkbox" style="margin-top:10px" />
                <div class="condition">By clicking, you agree to the Terms and Conditions set out by this site, including our Cookie Use.</div>
            </div>

            <button class="register-button">Register</button>

            <div class="reg-fott">Already have an account, 
                <span>
                    <RouterLink to="/login">
                        Sign in
                    </RouterLink>
                </span>
            </div>

        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
    data(){
        return{
            passwordEye: false,
            confirmPasswordEye: false,
        }
    },

    methods:{
        toggleEye(){
            this.passwordEye = !this.passwordEye;
        },

        toggleConfirmPassword(){
            this.confirmPasswordEye = !this.confirmPasswordEye;
        },
    },

    computed:{
        updatePasswordType(){
            return this.passwordEye? "text": "password";
        },

        updateConfirmPasswordType(){
            return this.confirmPasswordEye? "text": "password";
        }
    }
}
</script>


<style scoped>
.main-body{
    width: 100%;
    height: 90vh;
    background: #FFFFFF;
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inner-reg{
    width: 92%;
    height: 98%;
}

.login-title{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #1F2247;
  }

  .desc{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #1F2247;
  }

.container-input{
    width: 100%;
    margin-top: 3%;
}

.container-input-double{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3%;
}

.item{
    width: 49%;
}

.header{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #1F2247;
}

.top-input{
    width:100%;
    height: 30px;
    border: 1.0183px solid #1F2247;
    border-radius: 5px;
    outline: none;
    padding-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Nunito-regular';
    font-size: 14px;
}

#phone{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 5px;
}

.code{
    width: 50px;
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-right: 1px solid #ccc;
}

.phone-code{
    width: 100%;
    border: none;
    margin-left: 5px;
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #1F2247;
    outline: none;
}

.text-style{
    width: 100%;
    border: none;
    margin-left: 5px;
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #1F2247;
    outline: none;
}

select{
    appearance: none;
}

.sell{
    width:10px; 
    height:5px; 
}

.terms{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 5%;
}

.condition{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #1F2247;
    margin-left: 10px;
}

.register-button{
    width: 100%;
    height:30px;
    color: #fff;
    background: #006EFE;
    border-radius: 5px;
    margin-top: 5%;
    border: none;
    font-family: 'Nunito-regular';
    font-size: 14px;
}

.reg-fott{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #006EFE;
    margin-top: 5%;
}

a{
    text-decoration: none;
    color: #006EFE;
    font-weight: 400;
    font-size: 14px;
}
</style>