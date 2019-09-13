<template>
  <el-container class="el-mainBx">
    <el-header height="60px">
      <div class="header-input">
        <el-input placeholder="请输入用户名，登陆账号，手机号查询" prefix-icon="el-icon-search" v-model="inputvalue"></el-input>
      </div>
      <div>
        <el-button>查询</el-button>
        <el-button>添加用户</el-button>
      </div>
    </el-header>
    <el-main></el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      inputvalue: ""
    };
  }
};
</script>

<style lang="less" scoped>
.el-container {
  .el-header {
    display: flex;
    padding-top: 10px;
    .header-input{
        flex: 1;
        margin-right: 10px;
    }
  }
  .el-main{
      height: 100%;
  }
}
</style>