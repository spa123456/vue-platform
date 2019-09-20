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
          <el-input
            placeholder="请输入房号、车主、车牌或者包月车位查询"
            prefix-icon="el-icon-search"
            v-model="inputvalue"
          ></el-input>
        </div>
        <div>
          <el-button type="primary">查询</el-button>
          <el-button type="primary">添加</el-button>
         
        </div>
      </el-header>
      <el-main>      
            <el-table :data="cartableData" style="width: 100%" stripe border>
              <el-table-column label="易错车牌标记" prop="date" align="center"></el-table-column>
              <el-table-column label="易错车牌对应正确车牌" prop="date" align="center"></el-table-column>
              <el-table-column label="备注" prop="date" align="center"></el-table-column>
              <el-table-column label="操作" align="center" >
                <template slot-scope="scope">
                  <el-button size="mini" type="primary ">编辑</el-button>
                  <el-button size="mini" type="danger ">删除</el-button>
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
      activeName: "first",
      cartableData: [
        {
          date: "aaaaaaaaaa"
        }
      ], //包月车辆业主数据
      currentPage: 1
    };
  },
  methods: {
    querydate(val) {
      console.log(val.date);
    },
    handleClick(tab, event) {
      console.log(tab, event);
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
  }
  .right-container {
    background-color: rgb(240, 240, 240);
  }
  .ationfooter {
    text-align: right;
  }
}
</style>