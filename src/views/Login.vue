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
      <div class="first-shadow">
        <img style="width:150px; height:150px" src="../assets/images/elipse1.png" alt="icon" />
      </div>
      <div class="login-pane">
        <RouterView />
      </div>
      <div class="last-shadow">
        <img style="width:150px; height:150px" src="../assets/images/elipse2.png" alt="icon" />
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import LoginPane from '@/components/Login/LoginPane.vue'
</script>


<style>
@media (min-width: 1024px) {
  .about {
    widows: 100%;
    height: 100%;
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
    background: #404690;
    display: flex;
    flex-direction: column;
  }

  .first-shadow{
    width: 100%;
    height: 20%;
  }

  .last-shadow{
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .login-pane{
    width: 100%;
    height: 60%;
    display: flex;
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
    width: 100%;
    height: 10%;
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #404690;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .caros{
    width: 300px;
    height: 350px;
  }

  .tites{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #092C5A;
    margin-top: 5px;
  }

  .tex{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 17px;
    text-transform: capitalize;
    color: #092C5A;
    margin-top: 11px;
  }
}
</style>
