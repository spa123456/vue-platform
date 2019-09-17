<template>
  <el-container class="el-mainBx">
    <el-header height="60px">
      <div class="header-input">
        <el-input placeholder="请输入用户名，登陆账号，手机号查询" prefix-icon="el-icon-search" v-model="inputvalue"></el-input>
      </div>
      <div>
        <el-button>查询</el-button>
      </div>
    </el-header>
    <el-main>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="入口" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="出口" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="已停用" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      inputvalue: "",
      activeName:'first',
    };
  },
  methods:{
    handleClick(tab, event) {
        console.log(tab, event);
      }
  }
};
</script>

<style lang="less" scoped>
.el-container {
  .el-header {
    display: flex;
    padding-top: 10px;
    .header-input {
      flex: 1;
      margin-right: 10px;
    }
  }
  .el-main {
    height: 100%;
  }
}
</style>