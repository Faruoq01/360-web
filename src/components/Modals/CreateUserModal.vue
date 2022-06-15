<template>
    <div class="modals">
        <div class="inner-modal">
            <div class="closeIcon">
                <div class="name">Create User Account</div>
                <img @click="closeCreateModal" style="width:18px; height:18px" src="../../assets/images/closeModal.png" alt="icon" />
            </div>

            <div class="form-input">
                <div>User Type</div>
                <div class="item">
                    <div class="container-input">
                        <div class="top-input">
                            <select class="text-style" style="width:90%; border: none; background: #F0F0F0; color: #6D6D6D;">
                                <option>Select Deaprtment</option>
                                <option>option 1</option>
                                <option>option 1</option>
                                <option>option 1</option>
                            </select>
                            <img class="sell" src="../../assets/images/downArrow.png" alt="icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div style="margin-top:20px" class="form-input">
                <div>Employee</div>
                <div class="item">
                    <div class="container-input">
                        <div class="top-input">
                            <select class="text-style" style="width:90%; border: none; background: #F0F0F0; color: #6D6D6D;">
                                <option>Select Employee</option>
                                <option>option 1</option>
                                <option>option 1</option>
                                <option>option 1</option>
                            </select>
                            <img class="sell" src="../../assets/images/downArrow.png" alt="icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div style="margin-top:20px" class="form-input">
                <div>Role</div>
                <div class="item">
                    <div class="container-input">
                        <div class="top-input">
                            <select class="text-style" style="width:90%; border: none; background: #F0F0F0; color: #6D6D6D;">
                                <option>Select Role</option>
                                <option>option 1</option>
                                <option>option 1</option>
                                <option>option 1</option>
                            </select>
                            <img class="sell" src="../../assets/images/downArrow.png" alt="icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div style="margin-top:20px" class="form-input">
                <div class="username">
                    <div>Username</div>
                    <div style="color:blue">Generate</div>
                </div>
                <div class="item">
                    <div class="container-input">
                        <div class="top-input">
                            <select class="text-style" style="width:90%; border: none; background: #F0F0F0; color: #6D6D6D;">
                                <option>Select Employee</option>
                                <option>option 1</option>
                                <option>option 1</option>
                                <option>option 1</option>
                            </select>
                            <img class="sell" src="../../assets/images/downArrow.png" alt="icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div style="margin-top:20px" class="form-input">
                <div>Password</div>
                <div class="item">
                    <div class="container-input">
                        <div class="top-input">
                            <input type="text" style="width:90%; border:none; outline:none; background:#F0F0F0" />
                            <img style="width:20px; height:20px" src="../../assets/images/hide.png" alt="icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div style="margin-top:20px" class="form-input">
                <div>Confirm Password</div>
                <div class="item">
                    <div class="container-input">
                        <div class="top-input">
                            <input type="text" style="width:90%; border:none; outline:none; background:#F0F0F0" />
                            <img style="width:20px; height:20px" src="../../assets/images/hide.png" alt="icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="message"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Lorem cras habitasse donec arcu enim eu, justo, nunc nulla. Mauris
            </div>

            <div class="but-container">
                <button class="save">Save</button>
                <button class="cancel">Cancel</button>
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
        closeCreateModal(){
            this.$emit('close-create-modal');
        }
    }
}
</script>


<style scoped>
    .modals{
        width: 380px;
        height: 600px;
        color: #000;
        background: #FAFAFA;
        border-radius: 5.52061px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .inner-modal{
        width: 92%;
        height: 94%;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .closeIcon{
        width: 100%;
        height: 35px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .name{
        font-family: 'Nunito-regular';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 30px;
        color: #232759;
    }
    .form-input{
        width: 100%;
        margin-top: 20px;
        font-family: 'Nunito-regular';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 26px;
        color: #000000;
        display: flex;
        flex-direction: column;
    }
    .item{
        width: 100%;
        height: 100%;
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
        color: #6D6D6D;
        outline: none;
    }

    select{
        appearance: none;
    }

    .sell{
        width:10px; 
        height:5px; 
    }
    .username{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .message{
        font-family: 'Nunito-regular';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        text-transform: capitalize;
        color: #092C5A;
        margin-top: 20px;
    }
    .but-container{
        width: 100%;
        height: 35px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
    }
    .save{
        width: 160px;
        height: 35px;
        background: #58A0DF;
        border-radius: 5.52061px;
        border: none;
        color: #fff;
    }
    .cancel{
        width: 100px;
        height: 35px;
        background: #FAFAFA;
        border-radius: 5.52061px;
        border: none;
        color: #000;
    }
</style>