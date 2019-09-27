<template>
  <el-container class="el-mainBx">
    <el-header height="60px">
      <div class="header-input">
        <el-input placeholder="请输入车牌号查询" prefix-icon="el-icon-search" v-model="inputvalue"></el-input>
      </div>
      <div>
        <el-date-picker
          v-model="querytime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
        <el-button type="primary">查询</el-button>
      </div>
    </el-header>
    <el-main>
      <el-table :data="cartableData" style="width: 100%" stripe class="nonly-secect" border>
        <el-table-column label="车牌号" prop="date" align="center"></el-table-column>
        <el-table-column label="状态" prop="date" align="center" :render-header="renderHeaderone"></el-table-column>
        <el-table-column label="入场时间" prop="date" align="center"></el-table-column>
        <el-table-column label="出场时间" prop="date" align="center"></el-table-column>
        <el-table-column label="入场通道" prop="date" align="center"></el-table-column>
        <el-table-column label="出场通道" prop="date" align="center"></el-table-column>
        <el-table-column label="出场通道" prop="date" align="center" :render-header="renderHeadertwo"></el-table-column>
        <el-table-column label="出场通道" prop="date" align="center" :render-header="renderHeaderthree"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="primary " @click="settime(scope.row)">详情</el-button>
          </template>
        </el-table-column>
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
      inputvalue: "",
      payvalue: "",
      options: [],
      querytime: "",
      cartableData: [{ date: "aaa" }],
      currentPage: 1,
      logLevel: "1",
      logLeveltwo: "1",
      logLevelthree: "1"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    renderHeaderone(h, { column }) {
      let filters = [
        { text: "全部", value: "1" },
        { text: "在场", value: "2" },
        { text: "待入场", value: "3" },
        { text: "待出场", value: "4" },
        { text: "已离场", value: "5" }
      ]; //下拉框选项
      return h(
        "el-select",
        {
          class: "myselect",
          on: {
            //el-select实现下拉框
            input: value => {
              this.logLevel = value; //随着下拉框的不同，文字框里的内容在变
            }
          },
          props: {
            value: this.logLevel //文字框的内容取决于这个value，如果value不存在，会报错
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
    renderHeadertwo(h, { column }) {
      let filters = [
        { text: "全部", value: "1" },
        { text: "15分钟内", value: "2" },
        { text: "30分钟内", value: "3" },
        { text: "45分钟内", value: "4" },
        { text: "60分钟内", value: "5" }
      ]; //下拉框选项
      return h(
        "el-select",
        {
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
    },
    renderHeaderthree(h, { column }) {
      let filters = [
        { text: "全部", value: "1" },
        { text: "包月", value: "2" },
        { text: "临停", value: "3" },
        { text: "免费", value: "4" },
        { text: "无牌", value: "5" }
      ]; //下拉框选项
      return h(
        "el-select",
        {
          on: {
            //el-select实现下拉框
            input: value => {
              this.logLevelthree = value; //随着下拉框的不同，文字框里的内容在变
            }
          },
          props: {
            value: this.logLevelthree //文字框的内容取决于这个value，如果value不存在，会报错
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
    height: 100%;
  .el-header {
    display: flex;
    padding-top: 10px;
    .header-input {
      flex: 1;
      margin-right: 10px;
      .el-input {
        width: 400px;
      }
    }
    .el-select {
      margin: 0 10px;
      width: 100px;
    }
  }
  .el-main {
    height: 100%;
    padding-top: 0;
    p {
      margin-bottom: 10px;
    }
    .el-main {
      /deep/ .nonly-secect th {
        padding: 0px;
        /deep/ .el-input__inner {
          padding: 0px;
          border: none;
          text-align: center;
        }
        /deep/ .el-input__suffix {
          margin-left: 0;
        }
      }
    }
  }
  .el-footer{
      text-align: right;
  }
}
</style>