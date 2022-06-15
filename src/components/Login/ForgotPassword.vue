<template>
    <div class="main">
        <div class="inner-pane">
            <div class="logo-container">
                <img style="width:40px; height:40px" src="../../assets/images/key.png" alt="icon" />
                <div class="text">Forget Password</div>
            </div>

            <div class="inner-text">
                Confirm the email address that you provided in your registration : n***@****.com
            </div>

            <input class="input-password" type="password" placeholder="Email Address" />

            <RouterLink to="/password-mail" >
                <button class="send">Send</button>
            </RouterLink>

            <RouterLink to="/login">
                <div class="foot">
                    <img style="width:15px; height:13px" src="../../assets/images/backAroow.png" alt="icon" />
                    <div style="margin-left:10px">Back to log in</div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
</script>


<style scoped>
.main{
    width: 350px;
    height: 350px;
    background: #FFFFFF;
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inner-pane{
    width: 86%;
    height: 86%;
  }

.logo-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
}

.text{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 30px;
    color: #404690;
    margin-left: 10px;
}

.inner-text{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #404690;
    margin-top: 20px;
}

.input-password{
    width: 100%;
    height: 30px;
    border: 1.09777px solid #404690;
    border-radius: 5px;
    margin-top: 30px;
    padding-left: 10px;
}

.input-password::placeholder{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #414790;
}

.send{
    width: 100%;
    height: 30px;
    background: #006EFE;
    border-radius: 5px;
    margin-top: 40px;
    border: none;
    color: #fff;
}

.foot{
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

a{
    text-decoration: none;
}

@media (max-width: 600px) {
  .main{
      zoom: 450%;
      width: 96%;
  }
}
</style>