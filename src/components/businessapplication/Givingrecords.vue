<template>
  <el-container class="right-container">
    <el-header height="60px" class="querycarmessage">
      <div class="header-input">
        <el-input placeholder="请输入车牌、备注信息" prefix-icon="el-icon-search" v-model="inputvalue"></el-input>
      </div>
      <div>
        <el-date-picker
          v-model="querytime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
        <el-select v-model="typevalue">
          <el-option value="0" label="全部">全部</el-option>
          <el-option value="1" label="时间卷">时间卷</el-option>
          <el-option value="2" label="现金卷">现金卷</el-option>
        </el-select>
        <el-button type="primary" class="btn-query">查询</el-button>
        <el-button type="primary">导出</el-button>
      </div>
    </el-header>
    <el-main>
      <p>共赠送 <span>1</span> 笔，合计赠送时间 <span>1</span> 小时，赠送金额 <span>1</span> 元。</p>
      <el-table :data="cartableData" style="width: 100%" class="nonly-secect" border size="mini">
        <el-table-column label="车牌号" prop="date" align="center"></el-table-column>
        <el-table-column label="状态" prop="date" align="center"></el-table-column>
        <el-table-column label="入场时间" prop="date" align="center"></el-table-column>
        <el-table-column label="出场时间" prop="date" align="center"></el-table-column>
        <el-table-column label="入场通道" prop="date" align="center"></el-table-column>
      </el-table>
    </el-main>
    <el-footer height="60px" class="ationfooter">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      typevalue: "0",
      inputvalue: "",
      querytime: "",
      cartableData: [{ date: "川A.123456" }],
      currentPage: 0
    };
  },

  methods: {
    /*
     **  @description 页码界面的操作
     **  @param {}
     **  @return
     **  @author shipingan
     */
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="less" scoped>
.el-container {
  padding: 10px;
  height: 100%;
  background-color: rgb(240, 240, 240);
  .querycarmessage {
    display: flex;
    .header-input {
      flex: 1;
      padding-right: 10px;
    }
    .btn-query {
      margin-left: 10px;
    }
    .el-select {
      margin-left: 10px;
      width: 150px;
    }
  }
  .ationfooter {
    text-align: right;
  }
  .el-main {
      padding-top: 0;
    /deep/ .nonly-secect th {
      padding: 10px;
      /deep/ .el-input__inner {
        padding: 0px;
        border: none;
      }
      /deep/ .el-input__suffix {
        margin-left: 0;
      }
    }
    p{
        padding-bottom: 20px;
        span{
            color: red;
        }
    }
    
  }
}
</style>