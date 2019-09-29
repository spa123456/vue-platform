<template>
  <el-container class="el-mainBx">
    <el-header height="60px">
      <div class="header-input">
        <el-select v-model="payvalue" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input placeholder="请输入参数编码、参数值查询" prefix-icon="el-icon-search" v-model="inputvalue"></el-input>
        <div>
          <el-button type="primary">查询</el-button>
          <el-button type="primary">新增参数</el-button>
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
        <el-table-column label="品牌名称" prop="date" align="center"></el-table-column>
        <el-table-column label="参数编码" prop="date" align="center"></el-table-column>
        <el-table-column label="参数值" prop="date" align="center"></el-table-column>
        <el-table-column label="备注" prop="date" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="180">
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
      payvalue: "",
      options: [],
      querytime: "",
      cartableData: [{ date: "aaa" }]
    };
  },
  methods: {

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
        width: 500px;
      }
      .el-button{
        margin-left: 10px;
      }
    }
    .el-select {
      margin: 0 10px 10px 0;
      width: 100px;
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