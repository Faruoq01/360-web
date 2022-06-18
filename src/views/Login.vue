<template>
  <div class="about">
    <div class="page">
      <div class="left-page">
        <div class="inner-left">
          <div class="logos">
            <img style="width:60px; height:65px; margin-top:20px" src="../assets/images/logo2.png" alt="icon" />
          </div>
          <div class="intro">
            <div class="caros">
              <img style="width:300px; height:200px" src="../assets/images/corousel1.png" alt="icon" />
              <div class="tites">Business activities at your <span class="finger"> finger tips </span></div>
              <div class="tex">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Lorem cras habitasse donec arcu enim eu, justo, nunc nulla. 
                Mauris turpis ut est est quis sed praesent. Nulla integer 
                risus dolor enim at nulla. Nunc non egestas vitae quis turpis 
                ut est est quis sed praesent. Nulla integer risus dolor .
              </div>
            </div>
          </div>
          <div class="foot">Amabillstech.com . Technical Support . Terms & Condition . Privacy</div>
        </div>
      </div>
      <div class="right-page">
        <div :style="shiftLogo" class="logo-container2">
            <img class="logo" src="../assets/images/logo.png" alt="logo" />
            <div class="org">360 Corporation</div>
        </div>
        <div class="reserved">&copy; All Rights Reserved</div>
        <div class="login-pane">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import LoginPane from '@/components/Login/LoginPane.vue'

export default{
  data(){
    return{
      currentRoute:''
    }
  },
  watch:{
    '$route'(to){
      this.currentRoute = to.name;   
    }
  },
  computed:{
    shiftLogo(){
      return this.currentRoute === 'register'? {top: '1vh'}: {top: '10vh'};
    }
  }
}
</script>


<style>
.about {
    max-width: 2000px;
    min-width: 1200px;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .left-page{
    width: 50%;
    height: 100vh;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-page{
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #404690;
    background-image: url('../assets/images/background.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .login-pane{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .inner-left{
    width: 95%;
    height: 95%;
    background: #F3F3F3;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logos{
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
  }

  .intro{
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .foot{
    width: 60%;
    height: 10%;
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #404690;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .caros{
    width: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .tites{
    width: 100%;
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 22px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #092C5A;
    margin-top: 30px;
  }

  .tex{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-transform: capitalize;
    color: #092C5A;
    margin-top: 11px;
  }

  .logo-container2{
    display: none;
  }

  .reserved{
    display: none;
  }

@media (max-width: 600px) {
  .about{
    max-width: 100vw;
    min-width: 100vw;
    width: 100%;
    height: 100%;
  }

  .left-page{
    display: none;
  }

  .right-page{
    max-width: 100vw;
    min-width: 100vw;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login-pane{
    max-width: 100vw;
    min-width: 100vw;
    width: 100vw;
  }

  .logo-container2{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 30;
    top: 10vh;
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

  .reserved{
    display: block;
    position: absolute;
    z-index: 40;
    top: 92vh;
  }
}
</style>
