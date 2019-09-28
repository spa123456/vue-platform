<template>
  <el-container class="el-mainBx">
    <el-header height="60px">
      <div>
        <el-select v-model="enterprisevalue">
          <el-option
            v-for="itme in options"
            :key="itme.value"
            :value="itme.value"
            :label="itme.label"
          ></el-option>
        </el-select>
      </div>
      <div class="header-input">
        <el-input placeholder="请输入品牌查询" prefix-icon="el-icon-search" v-model="inputvalue"></el-input>
      </div>
      <div>
        <el-button type="primary">查询</el-button>
        <el-button type="primary">新增单位</el-button>
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
        <el-table-column label="单位名称" prop="date" align="center"></el-table-column>
        <el-table-column label="单位类别" prop="date" align="center"></el-table-column>
        <el-table-column label="负责人" prop="date" align="center"></el-table-column>
        <el-table-column label="电话" prop="date" align="center"></el-table-column>
        <el-table-column label="邮箱" prop="date" align="center"></el-table-column>
        <el-table-column label="传真" prop="date" align="center"></el-table-column>
        <el-table-column label="联系地址" prop="date" align="center"></el-table-column>
        <el-table-column label="操作" prop="date" align="center">
          <template slot-scope="scope">
            <el-button type="primary" @click="editset(scope.row)" size="mini">编辑</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      inputvalue: "",
      payvalue: "",
      enterprisevalue:'',
      options: [
        {
          value: 1,
          label: "aaa"
        }
      ],
      querytime: "",
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
    display: flex;
    padding-top: 10px;
    .el-select{
        margin-right: 10px;
        width: 150px;
    }
    .header-input {
      flex: 1;
      margin-right: 10px;
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