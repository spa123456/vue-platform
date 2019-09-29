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
        <el-date-picker
          v-model="time"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
        <el-input placeholder="请输入单位身份、用户名称查询" prefix-icon="el-icon-search" v-model="inputvalue"></el-input>
        <div>
          <el-button type="primary">查询</el-button>
          <el-button type="primary">导出</el-button>
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
        <el-table-column label="归属名称" prop="date" align="center"></el-table-column>
        <el-table-column label="单位" prop="date" align="center"></el-table-column>
        <el-table-column label="用户名" prop="date" align="center"></el-table-column>
        <el-table-column label="登陆时间" prop="date" align="center"></el-table-column>
        <el-table-column label="登陆IP" prop="date" align="center"></el-table-column>
        <el-table-column label="参考数据" prop="date" align="center"></el-table-column>
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
      time:'',
      options: [],
      querytime: "",
      cartableData: [{ date: "aaa" }]
    };
  },
  methods: {}
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
        margin-left: 10px;
      }
      .el-button {
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