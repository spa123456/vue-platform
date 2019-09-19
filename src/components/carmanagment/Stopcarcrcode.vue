<template>
  <el-container>
    <el-aside width="330px">
      <el-container>
        <el-header height="40px">
          <el-row>
            <el-col :span="18">
              <div class>
                <el-input v-model="input" placeholder="请输入停车场名称">
                  <i class="el-icon-search el-input__icon" slot="prefix"></i>
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="aside-btn">
                <el-button>查询</el-button>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <template>
            <el-table
              :data="tableData"
              style="width: 100%"
              :show-header="false"
              stripe
              @row-click="querydate"
            >
              <el-table-column prop="date"></el-table-column>
            </el-table>
          </template>
        </el-main>
        <el-footer>
          <el-pagination
            background
            layout="prev,pager ,next"
            :total="20"
            :page-size="10"
            :prev-text="newsprev"
            :next-text="newsNext"
          ></el-pagination>
        </el-footer>
      </el-container>
    </el-aside>
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
          <el-button type="primary" class="btn-query">查询</el-button>
          <el-button type="primary">导出</el-button>
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
          <el-table-column
            label="出场通道"
            prop="date"
            align="center"
            :render-header="renderHeaderthree"
          ></el-table-column>
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
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      input: "", //aside查询停车场的input
      inputvalue: "", //查询车主房主车位信息的号码
      tableData: [
        {
          date: "aaaaaaaaaa"
        }
      ],
      newsprev: "上一页",
      newsNext: "下一页",
      querytime:'',
      cartableData: [
        {
          date: "aaaaaaaaaa"
        }
      ], //包月车辆业主数据
      currentPage: 1,
      logLevel: "1",
      logLeveltwo: "1",
      logLevelthree: "1",
    };
  },
  methods: {
    querydate(val) {
      console.log(val.date);
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
  padding: 10px;
  height: 100%;
  .el-aside {
    background-color: rgb(231, 231, 231);
    height: 100%;
    .el-header {
      box-shadow: none;
      background-color: rgb(231, 231, 231);
      padding: 0;
      .el-input {
        width: 90%;
        box-shadow: 1px 1px 3px #ccc;
      }
      .aside-btn {
        text-align: right;
      }
    }
    .el-main {
      padding: 0;
      margin: 10px 0;
      background-color: #fff;
    }
    .el-footer {
      text-align: center;
      padding-top: 20px;
      background-color: #fff;
    }
  }

  .querycarmessage {
    display: flex;
    .header-input {
      flex: 1;
      padding-right: 10px;
    }
    .btn-query{
      margin-left: 10px;
    }
  }
  .right-container {
    background-color: rgb(240, 240, 240);
    .ationfooter {
      text-align: right;
    }
    .el-main {
      /deep/ .nonly-secect th {
        padding: 0px;
        /deep/ .el-input__inner {
          padding: 0px;
          border: none;
        }
        /deep/ .el-input__suffix {
          margin-left: 0;
        }
      }
    }
  }
}
</style>


