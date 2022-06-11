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
              <div style="color:#0C6FF2" class="me">Forgot password</div>
            </div>
            <button class="login-button">Login</button>
            <div class="footer">Don’t have a business account, Register</div>
          </div>
        </div>
      </div>
      <div class="last-shadow">
        <img style="width:150px; height:150px" src="../assets/images/elipse2.png" alt="icon" />
      </div>
    </div>
  </div>
</template>

<script>
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

  .login-pane{
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .last-shadow{
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .login-page{
    width: 300px;
    height: 350px;
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
    font-size: 14px;
    line-height: 20px;
    color: #1F2247;
  }

  .desc{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #1F2247;
  }

  .inputs{
    width: 100%;
    height: 35px;
    margin-top: 20px;
    border: 1.09777px solid #1F2247;
    border-radius: 5px;
    padding-left: 10px;
    outline: none;
  }

  .inputs::placeholder{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
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
    font-size: 12px;
    line-height: 20px;
    color: #1F2247;
  }

  .login-button{
    width: 100%;
    height: 35px;
    margin-top: 20px;
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
    font-size: 12px;
    line-height: 23px;
    color: #1368D8;
    margin-top: 20px;
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
