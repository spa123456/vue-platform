  <template>
  <el-container style="padding:0;">
    <el-aside width="330px">
      <el-container>
        <el-header height="40px">
          <el-row>
            <el-col :span="18">
              <div>
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
              <el-table-column prop="date" align="center"></el-table-column>
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
          <el-select v-model="selectvalue">
            <el-option value="0" label="日报"></el-option>
            <el-option value="1" label="月报"></el-option>
          </el-select>
          <el-date-picker v-model="valueday" type="date" placeholder="选择日期" v-if="selectvalue==0"></el-date-picker>
          <el-date-picker v-model="valuemouth" type="month" placeholder="选择月" v-else></el-date-picker>
        </div>
        <div>
          <el-button type="primary">查询</el-button>
          <el-button type="primary">导出</el-button>
        </div>
      </el-header>
      <el-main>
        <el-table
          :data="cartableData"
          style="width: 100%"
          stripe
          border
          size="mini"
          height="100%"
          :summary-method="getSummaries"
          show-summary
        >
          <el-table-column label="日期" prop="date" align="center"></el-table-column>
          <el-table-column label="收入项目" align="center">
            <el-table-column label="临停" prop="date" align="center"></el-table-column>
            <el-table-column label="包月" prop="date" align="center"></el-table-column>
            <el-table-column label="商户充值" prop="date" align="center"></el-table-column>
          </el-table-column>
          <el-table-column label="收款通道" align="center">
            <el-table-column label="现金" prop="date" align="center"></el-table-column>
            <el-table-column label="招行" prop="date" align="center"></el-table-column>
            <el-table-column label="微信" prop="date" align="center"></el-table-column>
            <el-table-column label="支付宝" prop="date" align="center"></el-table-column>
          </el-table-column>
          <el-table-column label="合计" align="center">
            <template slot-scope="scope">
              <span>{{scope.row.date+scope.row.date+scope.row.date}}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>
  <script>
export default {
  data() {
    return {
      input: "", //aside查询停车场的input
      selectvalue: "0", //查询车主房主车位信息的号码
      tableData: [
        {
          date: "川A.123412"
        }
      ],
      newsprev: "上一页",
      newsNext: "下一页",
      activeName: "first",
      cartableData: [
        {
          date: 1111111
        },
        {
          date: 1111111
        },
        {
          date: 1111111
        },
        {
          date: 1111111
        },
        {
          date: 1111111
        },
        {
          date: 1111111
        },
        {
          date: 1111111
        }
      ], //包月车辆业主数据
      currentPage: 1,
      valueday: "", //change日期选择器
      valuemouth: "" //change月选择器
    };
  },
  methods: {
    querydate(val) {
      console.log(val.date);
    },
    /*
     **  @description 列表合计方法
     **  @param {}
     **  @return
     **  @author shipingan
     */
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " 元";
        } else {
          sums[index] = "";
        }
      });
      return sums;
    }
  },
  handleClick(tab, event) {
    console.log(tab, event);
  },
  writeplate(row) {
    console.log(row);
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
      .el-select {
        width: 100px;
        margin-right: 10px;
      }
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