<template>
    <div class="login-page">
        <div class="inner-pane">
            <div style="margin-top:10px" class="login-title">Reset Password</div>
            <div style="margin-top:10px" class="desc">Welcome</div>
            <div class="desc">Oluwasegunyinka.samuel@gmail.com</div>

            <input class="input-password" type="password" placeholder="Password" />
            <input class="input-password" type="password" placeholder="Confirm Password" />

            <RouterLink to="/login">
                <button class="send">Send</button>
            </RouterLink>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.login-page{
    width: 300px;
    height: 300px;
    background: #FFFFFF;
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inner-pane{
    width: 88%;
    height: 90%;
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
    font-size: 14px;
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
</style>