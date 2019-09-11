<template>
  <el-container>
    <el-header height="130px">
      <el-row>
        <el-col :span="4">
          <div class="headernav">rrrrrrrrrrrrrrrr</div>
        </el-col>
        <el-col :span="4" :offset="2">
          <div class="headernav">ttttttttt</div>
        </el-col>
        <el-col :span="4" :offset="2">
          <div class="headernav">iiiiii</div>
        </el-col>
        <el-col :span="6" :offset="2">
          <div class="headernav">aaaa</div>
        </el-col>
      </el-row>
    </el-header>

    <el-main></el-main>

    <el-footer height="282px">
      <el-row>
        <el-col :span="10">
          <div class="footerbx">iiiiii</div>
        </el-col>
        <el-col :span="10" :offset="4">
          <div class="footerbx">aaaa</div>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.el-container {
  padding: 30px;
  height: 100%;
  .el-header {
    box-sizing: border-box;
    margin-bottom: 15px;
    padding: 0;
    .headernav {
      background-color: #fff;
      height: 90px;
      padding: 10px;
      box-shadow: 1px 1px 1px burlywood;
    }
  }
  .el-main {
    box-sizing: border-box;
    background-color: #fff;
    padding: 0;
    margin: 15px 0;
    box-shadow: 1px 1px 1px burlywood;
  }
  .el-footer {
    box-sizing: border-box;
    padding: 0;

    margin-top: 15px;
    .footerbx {
      height: 282px;
      background-color: #fff;
      box-shadow: 1px 1px 1px burlywood;
    }
  }
}
</style>