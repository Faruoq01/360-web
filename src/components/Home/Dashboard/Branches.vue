<template>
  <div class="settings-container ">
    <div class="search-bar2">
      <div class="search-container2">
        <img class="search-icon2" src="../../../assets/images/search.png" alt="icon"/>
        <input class="input-search2" type="text" placeholder="Search" />
      </div>
      <div class="notes2">
        <div class="icon2">
          <img class="bell2" src="../../../assets/images/bell.png" alt="icon"/>
        </div>
        <div class="name2">Hi, Olayimika </div>
        <RouterLink to="/login">
          <div class="icon2">
            <img class="user-icon2" src="../../../assets/images/first.png" alt="icon"/>
          </div>
        </RouterLink>
      </div>
    </div>

    <div class="main-user2">
      <div class="inner-user2">
        <div class="top-header2">
          <div class="user-name2">
            Branch
          </div>
          <button @click="createBranchModal" class="create2">Add Branch</button>
        </div>

        <div class="numbers">
          <p style="margin-right: 5px; color:#000">Show</p>
          <div>
            <div class="container-input" style="width: 60px;">
              <div class="top-input">
                <select class="text-style" style="width:25px; border: none; background: #F0F0F0; color: #58A0DF;">
                  <option>5</option>
                  <option> 1</option>
                  <option> 1</option>
                  <option> 1</option>
                </select>
                <img class="sell" src="../../../assets/images/downArrow.png" alt="icon" />
              </div>
            </div>
          </div>
          <p style="margin-left: 5px; color:#000">entries</p>
        </div>

        <div class="table-container">
          <div style="padding-left: 30px;" class="columns">Department</div>
          <div class="columns2">Location</div>
          <div class="columns2">Status</div>
          <div class="columns2">Action</div>
        </div>

        <div class="table-row">
          <div style="padding-left: 30px;" class="columns">Amabills_One</div>
          <div style="margin-top:5px; margin-bottom:5px" class="columns2">
            Abuja branch
          </div>
          <div class="columns2">
            <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
          </div>
          <div class="columns2">
            <div class="list-control">
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
            </div>
          </div>
        </div>

        <div class="table-row">
          <div style="padding-left: 30px;" class="columns">Amabills_One</div>
          <div style="margin-top:5px; margin-bottom:5px" class="columns2">
            Abuja branch
          </div>
          <div class="columns2">
            <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
          </div>
          <div class="columns2">
            <div class="list-control">
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
            </div>
          </div>
        </div>

        <div class="table-row">
          <div style="padding-left: 30px;" class="columns">Amabills_One</div>
          <div style="margin-top:5px; margin-bottom:5px" class="columns2">
            Abuja branch
          </div>
          <div class="columns2">
            <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
          </div>
          <div class="columns2">
            <div class="list-control">
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
            </div>
          </div>
        </div>

        <div class="table-row">
          <div style="padding-left: 30px;" class="columns">Amabills_One</div>
          <div style="margin-top:5px; margin-bottom:5px" class="columns2">
            Abuja branch
          </div>
          <div class="columns2">
            <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
          </div>
          <div class="columns2">
            <div class="list-control">
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
            </div>
          </div>
        </div>

        <div class="table-row">
          <div style="padding-left: 30px;" class="columns">Amabills_One</div>
          <div style="margin-top:5px; margin-bottom:5px" class="columns2">
            Abuja branch
          </div>
          <div class="columns2">
            <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
          </div>
          <div class="columns2">
            <div class="list-control">
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
            </div>
          </div>
        </div>

        <div class="table-row">
          <div style="padding-left: 30px;" class="columns">Amabills_One</div>
          <div style="margin-top:5px; margin-bottom:5px" class="columns2">
            Abuja branch
          </div>
          <div class="columns2">
            <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
          </div>
          <div class="columns2">
            <div class="list-control">
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
            </div>
          </div>
        </div>

        <div class="table-row">
          <div style="padding-left: 30px;" class="columns">Amabills_One</div>
          <div style="margin-top:5px; margin-bottom:5px" class="columns2">
            Abuja branch
          </div>
          <div class="columns2">
            <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
          </div>
          <div class="columns2">
            <div class="list-control">
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
            </div>
          </div>
        </div>

        <div class="table-row">
          <div style="padding-left: 30px;" class="columns">Amabills_One</div>
          <div style="margin-top:5px; margin-bottom:5px" class="columns2">
            Abuja branch
          </div>
          <div class="columns2">
            <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
          </div>
          <div class="columns2">
            <div class="list-control">
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
            </div>
          </div>
        </div>

        <div class="table-row">
          <div style="padding-left: 30px;" class="columns">Amabills_One</div>
          <div style="margin-top:5px; margin-bottom:5px" class="columns2">
            Abuja branch
          </div>
          <div class="columns2">
            <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
          </div>
          <div class="columns2">
            <div class="list-control">
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
            </div>
          </div>
        </div>

        <div class="table-row">
          <div style="padding-left: 30px;" class="columns">Amabills_One</div>
          <div style="margin-top:5px; margin-bottom:5px" class="columns2">
            Abuja branch
          </div>
          <div class="columns2">
            <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
          </div>
          <div class="columns2">
            <div class="list-control">
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
              <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer2">
      <div class="info">Showing 1 to 10 of 38 entries</div>
      <div class="nav">
        <div class="prev">Previous</div>
        <div class="display">1</div>
        <div class="prev">Next</div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{

    }
  },

  methods:{
    createBranchModal(){
      this.$emit('add-branch-modal');
    }
  }
}
</script>

<style scoped>
 .settings-container {
    width: 96%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;
  }

  .search-bar2{
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.search-container2{
    width: 300px;
    height: 100%;
    background: #F0F0F0;
    border-radius: 35.5985px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.search-icon2{
  width: 20px;
  height: 20px;
  margin-left: 10px;
}

.input-search2{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: #F0F0F0;
    border-radius: 35.5985px;
    margin-left: 8px;
    color: #000;
    font-weight: bold;
}

.notes2{
    width: 180px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.name2{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
}

.icon2{
    width: 30px;
    height: 30px;
    background-color: #F0F0F0;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.user-icon2{
    width: 30px;
    height: 30px;
}

.bell2{
    width: 12px;
    height: 15px;
}

.main-user2{
    width: 100%;
    background: #FAFAFA;
    border-radius: 5px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.inner-user2{
    width: 96%;
    height: 94%;
    margin-top: 20px;
    margin-bottom: 20px;
}

.top-header2{
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.user-name2{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #232759;
}

.create2{
    width: 130px;
    height: 35px;
    background: #58A0DF;
    border-radius: 3px;
    border: none;
    outline: none;     
    color: #fff;
    font-family: 'Nunito-regular';
    font-size: 14px;
}

.numbers{
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.container-input{
  width: 100%;
}

.top-input{
  width:100%;
  height: 35px;
  background: #F0F0F0;
  border: 0.6px solid #232759;
  border-radius: 6px;
  outline: none;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Nunito-regular';
  font-size: 14px;
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

.table-container{
    width: 100%;
    height: 35px;
    background: #EFEFEF;
    border-radius: 6px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.table-row{
    width: 100%;
    background: #EFEFEF;
    border-radius: 6px;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.columns{
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 23px;
    color: #232759;
}

.columns2{
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 23px;
    color: #232759;
}

.list-control{
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.footer2{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.nav{
    display: flex;
    flex-direction: row;
    width: 125px;
    margin-right: 25px;
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 21px;
    color: #000000;
    margin-top: 10px;
}

.prev{
    width: 60px;
    height: 30px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}

.display{
    width: 25px;
    height: 30px;
    background-color: #58A0DF;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.info{
    font-family: 'Nunito-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 23px;
    color: #615D5D;
    margin-left: 30px;
}
</style>
