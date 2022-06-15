<template>
  <div class="about">
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
      <div class="login-pane">
        <img class="mobile-logo" src="../assets/images/logo2.png" alt="icon" />
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import LoginPane from '@/components/Login/LoginPane.vue'
</script>


<style>
.about {
    max-width: 2000px;
    min-width: 1200px;
    min-height: 100vh;
    widows: 100%;
    height: 100vh;
    background-color: #fff;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: row;
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

@media (max-width: 600px) {
  .about{
    width: 100%;
    height: 100%;
    background-color: yellow;
  }

  .left-page{
    display: none;
  }

  .right-page{
    width: 100%;
    height: 100%;
  }

  .mobile-logo{
    zoom: 120%;
    margin-bottom: 150px;
  }
}
</style>
