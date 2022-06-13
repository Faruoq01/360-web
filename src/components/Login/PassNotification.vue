<template>
    <div class="main">
        <div class="inner-pane">
            <div class="logo-container">
                <img style="width:40px; height:40px" src="../../assets/images/mailIcon.png" alt="icon" />
                <div class="text">Check Your Mail</div>
            </div>

            <div class="inner-text">
                We sent a password reset link to nisha@gmail.com
            </div>

            <div style="margin-top:10px" class="inner-text">
                Didn’t receive the email? 
                <span style="color:#2F80ED">
                    Click to resend
                </span>
            </div>

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
    width: 250px;
    height: 220px;
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
}

.text{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 30px;
    color: #404690;
    margin-left: 10px;
}

.inner-text{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    color: #404690;
    margin-top: 20px;
}

.input-password{
    width: 100%;
    height: 30px;
    border: 1.09777px solid #404690;
    border-radius: 5px;
    margin-top: 20px;
    padding-left: 10px;
}

.input-password::placeholder{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #414790;
}

.send{
    width: 100%;
    height: 30px;
    background: #006EFE;
    border-radius: 5px;
    margin-top: 30px;
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
</style>