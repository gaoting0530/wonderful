<template>
    <el-container class="mainBox">
      <el-header class="mainHeader">
        <el-row>
          <el-col :span="11"><div class="grid-content bg-purple"><img src="@/assets/logo.png" alt=""></div></el-col>
          <el-col :span="11"><div class="grid-content bg-purple-light title">傲雪其后台管理系统</div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple"><div class="logout" @click="logOut">退出</div></div></el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
    // 退出登录
    logOut() {
       this.$confirm('是否要退出登录?', 'tips', {
          confirmButtonText: 'sure',
          cancelButtonText: 'cancel',
          type: 'warning'
        }).then(() => {
          localStorage.clear(),
          this.$message({
            type: 'success',
            message: '退出成功!',
          });
          this.$router.push('login')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });          
        });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .mainBox {
    height: 100%;
    margin: 0;
    padding: 0;
    .mainHeader {
      height: 60px;
      line-height: 60px;
      background: palevioletred;
      img {
        vertical-align: middle;
      }
      .title {
        font-size: 22px;
        color: #ffffff;
        font-weight: 900
      }
      .logout{
        cursor: pointer;
        &:hover {
        color:blueviolet;
        }
    }
  }
  }
</style>
