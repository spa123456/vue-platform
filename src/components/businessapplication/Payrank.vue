<template>
  <el-container class="el-mainBx">
    <el-header height="60px">
      <div class="header-input">
        <el-input placeholder="请输入用户名，登陆账号，手机号查询" prefix-icon="el-icon-search" v-model="inputvalue"></el-input>
      </div>
      <div>
        <el-date-picker
          v-model="querytime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
        <el-select v-model="payvalue" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button type="primary">查询</el-button>
        <el-button type="primary">导出</el-button>
      </div>
    </el-header>
    <el-main>
        <p>共充值0笔，合计0元。</p>
        <el-table :data="cartableData" style="width: 100%" stripe class="nonly-secect" border size="mini">
          <el-table-column label="商户名称" prop="date" align="center"></el-table-column>
          <el-table-column label="充值时间" prop="date" align="center" ></el-table-column>
          <el-table-column label="规则名称" prop="date" align="center"></el-table-column>
          <el-table-column label="充值类别" prop="date" align="center"></el-table-column>
          <el-table-column label="额度" prop="date" align="center"></el-table-column>
          <el-table-column label="金额（元）" prop="date" align="center"></el-table-column>
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
    p{
        margin-bottom: 10px;
    }
  }
}
</style>