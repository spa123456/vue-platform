<template>
  <el-container class="el-mainBx">
    <el-header height="60px">
      <div class="header-input">
        <el-input placeholder="请输入用户名，登陆账号，手机号查询" prefix-icon="el-icon-search" v-model="inputvalue"></el-input>
      </div>
      <div>
        <el-button>查询</el-button>
        <el-button>添加用户</el-button>
      </div>
    </el-header>
    <el-main>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="姓名首位" width="100">
              <template slot-scope="scope">
                <el-tag type="success">{{scope.row.name.substr(0,1)}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="姓名/所属部门" width="480">
              <template slot-scope="scope">
                <span style="padding-right:10px;">{{scope.row.name}}</span> <span><el-tag>{{scope.row.status}}</el-tag></span>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="操作" align="right">
              <template slot-scope="scope">
                <el-button type="primary" @click="redactsetprimary(scope.row)">编辑</el-button>
                <el-button type="warning">重置密码</el-button>
                <el-button type="danger">停用</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="系统管理员" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="停车场财务" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="停车场客服" name="fourth">定时任务补偿</el-tab-pane>
        <el-tab-pane label="岗亭值班人员" name="five">定时任务补偿</el-tab-pane>
        <el-tab-pane label="大型商户" name="six">定时任务补偿</el-tab-pane>
        <el-tab-pane label="普通商户" name="serven">定时任务补偿</el-tab-pane>
        <el-tab-pane label="路边停车管理" name="eight">定时任务补偿</el-tab-pane>
        <el-tab-pane label="已停用" name="nine">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      inputvalue: "",
      activeName: "first",
      tableData: [{  name: '刘德华',status:'系统管理员'}]
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
  }
  .el-main {
    height: 100%;
    
  }
}
</style>