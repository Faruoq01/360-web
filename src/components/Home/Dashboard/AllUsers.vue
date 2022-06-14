<template>
    <div class="user-container">
        <div class="search-bar">
            <div class="search-container">
                <img class="search-icon" src="../../../assets/images/search.png" alt="icon"/>
                <input class="input-search" type="text" placeholder="Search" />
            </div>
            <div class="notes">
                <div class="icon">
                    <img class="bell" src="../../../assets/images/bell.png" alt="icon"/>
                </div>
                <div class="name">Hi, Olayimika </div>
                <RouterLink to="/login">
                <div class="icon">
                    <img class="user-icon" src="../../../assets/images/first.png" alt="icon"/>
                </div>
                </RouterLink>
            </div>
        </div>

        <div class="main-user">
            <div class="inner-user">
                <div class="top-header">
                    <div class="user-name">
                        User List
                    </div>
                    <button class="create">Create User</button>
                </div>

                <div class="filter">
                    <div class="item">
                        <div class="container-input">
                            <div class="top-input">
                                <select class="text-style" style="width:88%; border: none; background: #F0F0F0; color: #58A0DF;">
                                    <option>Select Development</option>
                                    <option>option 1</option>
                                    <option>option 1</option>
                                    <option>option 1</option>
                                </select>
                                <img class="sell" src="../../../assets/images/downArrow.png" alt="icon" />
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="container-input">
                            <div class="top-input">
                                <select class="text-style" style="width:88%; border: none; background: #F0F0F0; color: #58A0DF;">
                                    <option>Select Employment Type</option>
                                    <option>option 1</option>
                                    <option>option 1</option>
                                    <option>option 1</option>
                                </select>
                                <img class="sell" src="../../../assets/images/downArrow.png" alt="icon" />
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="container-input">
                            <div class="top-input">
                                <select class="text-style" style="width:88%; border: none; background: #F0F0F0; color: #58A0DF;">
                                    <option>Select Branch</option>
                                    <option>option 1</option>
                                    <option>option 1</option>
                                    <option>option 1</option>
                                </select>
                                <img class="sell" src="../../../assets/images/downArrow.png" alt="icon" />
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="container-input">
                            <div class="top-input">
                                <img style="width:18px; height:18px" src="../../../assets/images/search.png" alt="icon" />
                                <input class="search-place" type="search-place" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="numbers">
                    <p style="margin-right: 5px;">Show</p>
                    <div>
                        <div class="container-input" style="width: 60px;">
                            <div class="top-input">
                                <select class="text-style" style="width:25px; border: none; background: #F0F0F0; color: #58A0DF;">
                                    <option>10</option>
                                    <option> 1</option>
                                    <option> 1</option>
                                    <option> 1</option>
                                </select>
                                <img class="sell" src="../../../assets/images/downArrow.png" alt="icon" />
                            </div>
                        </div>
                    </div>
                    <p style="margin-left: 5px;">entries</p>
                </div>

                <div class="table-container">
                    <div style="padding-left: 30px;" class="columns">Name</div>
                    <div class="columns">Username</div>
                    <div class="columns">Email Address</div>
                    <div class="columns2">Role</div>
                    <div class="columns2">Status</div>
                    <div class="columns2">Action</div>
                </div>

                <div class="table-row">
                    <div style="padding-left: 30px;" class="columns">Name</div>
                    <div class="columns">Username</div>
                    <div class="columns">Email Address</div>
                    <div class="columns2">Role</div>
                    <div class="columns2">Status</div>
                    <div class="columns2">Action</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '../../styles/dashboard.css';
@import '../../styles/users.css';

@media (max-width: 2000px) {
   .user-container{
        width: 96%;
        height: 94%;
    }

    .search-icon{
        width: 20px;
        height: 20px;
        margin-left: 10px;
    }

    .item{
        width: 23%;
        height: 100%;
    }

    .container-input{
        width: 100%;
    }

    .header{
        font-family: 'Nunito-regular';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #1F2247;
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
}
</style>
