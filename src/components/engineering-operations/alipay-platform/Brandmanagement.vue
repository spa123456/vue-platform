<template>
  <!-- 支付宝平台-品牌管理 -->
  <el-container>
    <el-header class="header-bx">
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">添加</el-button>
    </el-header>
    <el-main>
      <el-table :data="tableData" style="width: 100%" border size="mini">
        <el-table-column prop="date" label="品牌" align="center"></el-table-column>
        <el-table-column prop="name" label="商户简称" align="center"></el-table-column>
        <el-table-column prop="address" label="客服电话"></el-table-column>
        <el-table-column prop="date" label="支付宝账号" align="center"></el-table-column>
        <el-table-column prop="name" label="appid" align="center"></el-table-column>
        <el-table-column prop="address" label="spi接口"></el-table-column>
        <el-table-column prop="date" label="备注" align="center"></el-table-column>
        <el-table-column prop="name" label="操作" align="center">
            <template slot-scope="scope">
                <el-button type="primary" size="mini" @click="setquery(scope.row)">编辑</el-button>
            </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{ name: "111111111111" }]
    };
  }
};
</script>
<style lang="less" scoped>
.el-container {
  height: 100%;
  .header-bx {
    width: 100%;
    padding: 10px;
    display: flex;
    .el-button {
      margin-left: 10px;
    }
  }
  .el-main {
    padding: 10px;
  }
}
</style>