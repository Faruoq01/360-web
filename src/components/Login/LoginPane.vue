<template>
  <div class="login-page">
    <div class="inner-pane">
      <div style="margin-top:10px" class="login-title">Login</div>
      <div class="desc">Welcome back! Please enter your details.</div>
      <input class="inputs" type="text" placeholder="Enter Your Username" />
      <input class="inputs" type="text" placeholder="Enter Your Password" />
      <div class="remember">
        <div class="check">
          <input type="checkbox" />
          <div style="margin-left:8px" class="me">Remember me</div>
        </div>
        <RouterLink class="router" to="/forgot-password">
          <div style="color:#0C6FF2" class="me">Forgot password</div>
        </RouterLink>
      </div>
      <RouterLink class="router" to="/">
        <button class="login-button">Login</button>
      </RouterLink>
      <div class="footer">Don’t have a business account, 
        <span>
          <RouterLink class="footer" to="/register">
            Register
          </RouterLink>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
  .login-page{
    width: 350px;
    height: 400px;
    background: #FFFFFF;
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inner-pane{
    width: 90%;
    height: 90%;
  }

  .login-title{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    color: #1F2247;
    margin-top: 30px;
  }

  .desc{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #1F2247;
  }

  .inputs{
    width: 100%;
    height: 35px;
    margin-top: 30px;
    border: 1.09777px solid #1F2247;
    border-radius: 5px;
    padding-left: 10px;
    outline: none;
  }

  .inputs::placeholder{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #1F2247;
  }

  .remember{
    widows: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .check{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .me{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #1F2247;
  }

  a{
    text-decoration: none;
  }

  .login-button{
    width: 100%;
    height: 35px;
    margin-top: 30px;
    background: #006EFE;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-family: 'Nunito-regular';
  }

  .footer{
    width: 100%;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 23px;
    color: #1368D8;
    margin-top: 30px;
  }

  .finger{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #0C6FF2;
  }
</style>