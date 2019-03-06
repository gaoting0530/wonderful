<template>
    <div class="loginContai">
        <el-form :model="loginInfo" :rules="rules" ref="ruleForm" :label-position="labelPosition" label-width="120px" class="loginBox">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="loginInfo.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginInfo.password"></el-input>
            </el-form-item>
                <el-button type="primary" class="loginBtn" @click="checkLogin('ruleForm')">登录</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            labelPosition:'top',
            loginInfo:{
                userName:'',
                password:''
            },
             rules: {
                userName: [
                    { required: true, message: '请输入用户名称', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入用户密码', trigger: 'blur' }
                ],
          }
        }
    },
    methods: {
        checkLogin(formName) {
             this.$refs[formName].validate(async (valid) => {
          if (valid) {
            const res = await this.$http.post(`login`,{
               username:this.loginInfo.userName,
               password:this.loginInfo.password
            })
            const {status} = res.data.meta
            if(status === 200) {
                localStorage.setItem('token',res.data.data.token)
                this.$message.success('登录成功')
                this.$router.push({name:'首页',params:{username:res.data.data.username}})
                this.loginInfo = {}
            }else {
                this.$message.error(res.data.meta.msg);
                
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        }
    },
}
</script>

<style lang="less">
    .loginContai {
        height: 100%;
        background: #324152;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        // .title {
        //     position: absolute;
        //     left: 50%;
        //     top: 10%;
        //     font-size: 24px;
        //     color:aliceblue;
        //     transform: translateX(-50%)
        // }
        .loginBox {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            width: 320px;
            .loginBtn {
                margin-top: 40px;
                width: 100%;
                margin-bottom: 20px
            }
        }
    }
</style>
