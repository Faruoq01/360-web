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
                    <button @click="createUserModal" class="create">Create User</button>
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
                    <p style="margin-right: 5px; color:#ccc">Show</p>
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
                    <p style="margin-left: 5px; color:#ccc">entries</p>
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
                    <div style="padding-left: 30px;" class="columns">Olamilekan Odun</div>
                    <div class="columns">Olamilekan</div>
                    <div class="columns">Olamilekanodun@gmail.com</div>
                    <div class="columns2">Marketer</div>
                    <div class="columns2">
                        <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
                    </div>
                    <div class="columns2">
                        <div class="list-control">
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/exitDel.png" alt="icon" />
                        </div>
                    </div>
                </div>

                <div class="table-row">
                    <div style="padding-left: 30px;" class="columns">Olamilekan Odun</div>
                    <div class="columns">Olamilekan</div>
                    <div class="columns">Olamilekanodun@gmail.com</div>
                    <div class="columns2">Marketer</div>
                    <div class="columns2">
                        <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
                    </div>
                    <div class="columns2">
                        <div class="list-control">
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/exitDel.png" alt="icon" />
                        </div>
                    </div>
                </div>

                <div class="table-row">
                    <div style="padding-left: 30px;" class="columns">Olamilekan Odun</div>
                    <div class="columns">Olamilekan</div>
                    <div class="columns">Olamilekanodun@gmail.com</div>
                    <div class="columns2">Marketer</div>
                    <div class="columns2">
                        <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
                    </div>
                    <div class="columns2">
                        <div class="list-control">
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/good2.png" alt="icon" />
                        </div>
                    </div>
                </div>

                <div class="table-row">
                    <div style="padding-left: 30px;" class="columns">Olamilekan Odun</div>
                    <div class="columns">Olamilekan</div>
                    <div class="columns">Olamilekanodun@gmail.com</div>
                    <div class="columns2">Marketer</div>
                    <div class="columns2">
                        <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
                    </div>
                    <div class="columns2">
                        <div class="list-control">
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/good2.png" alt="icon" />
                        </div>
                    </div>
                </div>

                <div class="table-row">
                    <div style="padding-left: 30px;" class="columns">Olamilekan Odun</div>
                    <div class="columns">Olamilekan</div>
                    <div class="columns">Olamilekanodun@gmail.com</div>
                    <div class="columns2">Marketer</div>
                    <div class="columns2">
                        <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
                    </div>
                    <div class="columns2">
                        <div class="list-control">
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/exitDel.png" alt="icon" />
                        </div>
                    </div>
                </div>

                <div class="table-row">
                    <div style="padding-left: 30px;" class="columns">Olamilekan Odun</div>
                    <div class="columns">Olamilekan</div>
                    <div class="columns">Olamilekanodun@gmail.com</div>
                    <div class="columns2">Marketer</div>
                    <div class="columns2">
                        <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
                    </div>
                    <div class="columns2">
                        <div class="list-control">
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/exitDel.png" alt="icon" />
                        </div>
                    </div>
                </div>

                <div class="table-row">
                    <div style="padding-left: 30px;" class="columns">Olamilekan Odun</div>
                    <div class="columns">Olamilekan</div>
                    <div class="columns">Olamilekanodun@gmail.com</div>
                    <div class="columns2">Marketer</div>
                    <div class="columns2">
                        <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
                    </div>
                    <div class="columns2">
                        <div class="list-control">
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/good2.png" alt="icon" />
                        </div>
                    </div>
                </div>

                <div class="table-row">
                    <div style="padding-left: 30px;" class="columns">Olamilekan Odun</div>
                    <div class="columns">Olamilekan</div>
                    <div class="columns">Olamilekanodun@gmail.com</div>
                    <div class="columns2">Marketer</div>
                    <div class="columns2">
                        <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
                    </div>
                    <div class="columns2">
                        <div class="list-control">
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/good2.png" alt="icon" />
                        </div>
                    </div>
                </div>

                <div class="table-row">
                    <div style="padding-left: 30px;" class="columns">Olamilekan Odun</div>
                    <div class="columns">Olamilekan</div>
                    <div class="columns">Olamilekanodun@gmail.com</div>
                    <div class="columns2">Marketer</div>
                    <div class="columns2">
                        <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
                    </div>
                    <div class="columns2">
                        <div class="list-control">
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/exitDel.png" alt="icon" />
                        </div>
                    </div>
                </div>

                <div class="table-row">
                    <div style="padding-left: 30px;" class="columns">Olamilekan Odun</div>
                    <div class="columns">Olamilekan</div>
                    <div class="columns">Olamilekanodun@gmail.com</div>
                    <div class="columns2">Marketer</div>
                    <div class="columns2">
                        <img style="width: 20px; height:20px" src="../../../assets/images/icons/good.png" alt="icon" />
                    </div>
                    <div class="columns2">
                        <div class="list-control">
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/edit.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/delete.png" alt="icon" />
                            <img style="width: 25px; height:25px" src="../../../assets/images/icons/good2.png" alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
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
export default {
    data(){
        return{
           
        }
    },

    methods: {
        createUserModal(){
            this.$emit('create-user');
        }
    }
}
</script>

<style scoped>
@import '../../styles/dashboard.css';
@import '../../styles/users.css';

.user-container{
        width: 96%;
        margin-top: 20px;
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

    .list-control{
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>
