<template>
  <div class="item">
    <div class="logo-container">
        <img class="logo" src="../../assets/images/logo.png" alt="logo" />
        <div class="org">360 Corporation</div>
    </div>
  </div>
</template>

<style scoped>
.item {
    width: 100%;
    height: 100%;
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
</style>
