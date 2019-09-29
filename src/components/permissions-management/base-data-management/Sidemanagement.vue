<template>
  <el-container class="el-mainBx">
    <el-header height="60px">
      <div class="header-input">
        <el-input placeholder="请输入站点名称查询" prefix-icon="el-icon-search" v-model="inputvalue"></el-input>
        <div>
          <el-button type="primary">查询</el-button>
          <el-button type="primary">新增站点</el-button>
        </div>
      </div>
    </el-header>
    <el-main>
      <el-table
        :data="cartableData"
        style="width: 100%"
        stripe
        class="nonly-secect"
        border
        size="mini"
      >
        <el-table-column label="站点名称" prop="date" align="center"></el-table-column>
        <el-table-column label="站点地址" prop="date" align="center"></el-table-column>
        <el-table-column label="站点首页地址" prop="date" align="center"></el-table-column>
        <el-table-column label="图标" prop="date" align="center"></el-table-column>
        <el-table-column label="备注" prop="date" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="220">
          <template slot-scope="scope">
            <el-button type="primary" @click="editquery(scope.row)" size="mini" >编辑</el-button>
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
      cartableData: [{ date: "aaa" }]
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
    padding-top: 10px;
    .header-input {
      display: flex;
      .el-input {
       max-width: 500px;
      }
      .el-button{
        margin-left: 10px;
      }
    }
   
  }
  .el-main {
    height: 100%;
    padding-top: 0;
    p {
      margin-bottom: 10px;
    }
  }
}
</style>