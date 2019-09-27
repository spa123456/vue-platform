<template>
  <el-container class="el-mainBx">
    <el-header height="60px">
      <div class="header-input">
        <el-input placeholder="请输入品牌查询" prefix-icon="el-icon-search" v-model="inputvalue"></el-input>
      </div>
      <div>
        <el-button type="primary">查询</el-button>
        <el-button type="primary">新增品牌</el-button>
      </div>
    </el-header>
    <el-main>
        <el-table :data="cartableData" style="width: 100%" stripe class="nonly-secect" border size="mini">
          <el-table-column label="品牌名称" prop="date" align="center"></el-table-column>
          <el-table-column label="负责人" prop="date" align="center" ></el-table-column>
          <el-table-column label="电话" prop="date" align="center"></el-table-column>
          <el-table-column label="传真" prop="date" align="center"></el-table-column>
          <el-table-column label="邮箱" prop="date" align="center"></el-table-column>
          <el-table-column label="备注" prop="date" align="center"></el-table-column>
          <el-table-column label="操作" prop="date" align="center">
              <template slot-scope="scope">
                  <el-button type="primary" @click="editset(scope.row)" size="mini">编辑</el-button>
                  <el-button type="danger" size="mini">删除</el-button>
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
      inputvalue: "",
      payvalue: "",
      options: [],
      querytime: "",
      cartableData:[{date:"aaa"}],
    };
  },
  methods: {
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
    .el-select {
      margin: 0 10px;
      width: 100px;
    }
  }
  .el-main {
    height: 100%;
    padding-top: 0;
    p{
        margin-bottom: 10px;
    }
  }
}
</style>