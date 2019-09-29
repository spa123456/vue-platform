<template>
  <!-- 工程运维-通道设置 -->
  <el-container class="first-container">
    <el-header height="40px">
      <el-input></el-input>
    </el-header>
    <el-container>
      <el-aside width="340px">
        <el-container>
          <el-main>aaaaaaaaa</el-main>
          <el-footer>asd</el-footer>
        </el-container>
      </el-aside>
      <el-main class="main-main">bbbbbbbbbbbbbb</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.first-container {
  padding: 10px;
  height: 100%;
  .el-header {
    padding: 0px;
    margin-bottom: 10px;
  }
  .el-container {
    height: 100%;
    .el-aside {
      box-shadow: 0 0 10px rgb(156, 206, 163);
      padding: 0;
      margin-right: 10px;
    }
    .el-main {
      padding: 0 10px;
      background-color: #fff;
    }
    .el-footer {
      padding: 10px;
      text-align: center;
      background-color: #fff;
      margin-top: 10px;
    }
    .main-main{
      box-shadow: 0 0 10px rgb(70, 102, 28);
    }
  }
}
</style>