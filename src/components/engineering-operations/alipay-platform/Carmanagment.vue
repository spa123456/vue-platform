<template>
  <!-- 支付宝平台---停车场管理 -->
  <el-container>
    <el-header class="header-bx">
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">添加</el-button>
    </el-header>
    <el-main class="table-style">
      <el-table :data="tableData" style="width: 100%" border size="mini">
        <el-table-column prop="date" label="停车场" align="center"></el-table-column>
        <el-table-column prop="date" label="品牌" align="center" :render-header="renderHeaderone"></el-table-column>
        <el-table-column prop="name" label="单位" align="center" :render-header="renderHeadertwo"></el-table-column>
        <el-table-column prop="address" label="停车场类型"></el-table-column>
        <el-table-column prop="date" label="停车场客服" align="center"></el-table-column>
        <el-table-column prop="name" label="支付方式" align="center"></el-table-column>
        <el-table-column prop="address" label="资金流向"></el-table-column>
        <el-table-column prop="date" label="备注" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
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
      tableData: [{ name: "111111111111" }],
      logLevelone: "1",
      logLeveltwo: "1"
    };
  },
  methods: {
    renderHeaderone(h, { column }) {
      let filters = [
        { text: "全部", value: "1" },
        { text: "添加", value: "2" },
        { text: "修改", value: "3" },
        { text: "删除", value: "4" },
        { text: "其他", value: "5" }
      ]; //下拉框选项
      return h(
        "el-select",
        {
          class: "myselect",
          on: {
            //el-select实现下拉框
            input: value => {
              this.logLevelone = value; //随着下拉框的不同，文字框里的内容在变
            }
          },
          props: {
            value: this.logLevelone //文字框的内容取决于这个value，如果value不存在，会报错
          }
        },
        [
          filters.map(item => {
            //下拉框里面填充选项，通过filters遍历map，为每一个选项赋值。
            return h("el-option", {
              props: {
                value: item.value,
                label: item.text
              }
            });
          })
        ]
      );
    },
    renderHeadertwo(h) {
      let filters = [
        { text: "全部", value: "1" },
        { text: "添加", value: "2" },
        { text: "修改", value: "3" },
        { text: "删除", value: "4" },
        { text: "其他", value: "5" }
      ]; //下拉框选项
      return h(
        "el-select",
        {
          class: "myselect",
          on: {
            //el-select实现下拉框
            input: value => {
              this.logLeveltwo = value; //随着下拉框的不同，文字框里的内容在变
            }
          },
          props: {
            value: this.logLeveltwo //文字框的内容取决于这个value，如果value不存在，会报错
          }
        },
        [
          filters.map(item => {
            //下拉框里面填充选项，通过filters遍历map，为每一个选项赋值。
            return h("el-option", {
              props: {
                value: item.value,
                label: item.text
              }
            });
          })
        ]
      );
    }
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
    /deep/ .el-input__inner {
      border: 0px solid #ccc;
      text-align: center;
      font-size: 12px;
    }
  }
  .table-style {
    /deep/ .el-select {
      height: 30px;
      line-height: 20px;
    }
  }
}
</style>