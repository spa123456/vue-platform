<template>
  <el-container class="el-mainBx">
    <el-header height="60px">
      <div class="header-input">
        <el-input placeholder="请输入用户名，登陆账号，手机号查询" prefix-icon="el-icon-search" v-model="inputvalue"></el-input>
      </div>
      <div>
        <el-button>查询</el-button>
        <el-button>添加</el-button>
      </div>
    </el-header>
    <el-main>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first">
            <el-table :data="cartableData" style="width: 100%" stripe border>
              <el-table-column label="全部" prop="date" align="center"></el-table-column>
              <el-table-column label="车主" prop="date" align="center"></el-table-column>
              <el-table-column label="包月类型" prop="date" align="center"></el-table-column>
              <el-table-column label="车牌号" prop="date" align="center"></el-table-column>
              <el-table-column label="占用车位" prop="date" align="center"></el-table-column>
              <el-table-column label="包月金额" prop="date" align="center"></el-table-column>
              <el-table-column label="到期时间" prop="date" align="center"></el-table-column>
              <el-table-column label="车辆类型" prop="date" align="center"></el-table-column>
              <el-table-column label="包月车位" prop="date" align="center"></el-table-column>
              <el-table-column label="操作" align="center" width="240">
                <template slot-scope="scope">
                  <el-button size="mini" type="primary " @click="settime(scope.row)">续费</el-button>
                  <el-button size="mini" type="primary ">编辑</el-button>
                  <el-button size="mini" type="danger ">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="大型商户" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="普通商户" name="third">角色管理</el-tab-pane>
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
      cartableData:[{date:"aaa"}],
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