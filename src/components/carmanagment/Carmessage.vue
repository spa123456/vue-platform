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
    <el-container>
      <el-header class="main-header" height="180px">
        <div>
          <h4>基本信息</h4>
        </div>
        <div>
          <el-row class="datelist-row">
            <el-col :span="18">
              <div class="main-datelist">
                <p>编码：</p>
                <p>名称：</p>
                <p>地址：</p>
                <p>总车位：</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="main-header-imgbx">
                <img src="../../assets/loginimage/qrcode-none.png" alt width="100" height="120" />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main class="main-main">
        <div>
          <h4>管理设置</h4>
        </div>
        <div class="querydatelist-Bx">
          <div class="main-changeBx">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="querydatelist">
            <span>
              <el-row>
                <el-col :span="18">
                  <div>
                    <h5>临时停车</h5>
                    <h6>是否允许临时车辆进入停车场</h6>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">
                    <el-switch v-model="statusone" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                  </div>
                </el-col>
              </el-row>
            </span>
            <span>
              <el-row>
                <el-col :span="18">
                  <div>
                    <h5>入口0车位进场</h5>
                    <h6>停车场车位为0时，是否自动放行车辆进入。</h6>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content"></div>
                </el-col>
              </el-row>
            </span>
            <span>
              <el-row>
                <el-col :span="18">
                  <div>
                    <h5>支付完成后，离场限制</h5>
                    <h6>设置电子支付后，离场的时间限制。</h6>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content"></div>
                </el-col>
              </el-row>
            </span>
            <span>
              <el-row>
                <el-col :span="18">
                  <div>
                    <h5>手机包月续费</h5>
                    <h6>是否开启手机包月续费功能。</h6>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content"></div>
                </el-col>
              </el-row>
            </span>
            <span>
              <el-row>
                <el-col :span="18">
                  <div>
                    <h5>包月到期提醒</h5>
                    <h6>是否开启包月提醒功能。开启后，将提前7天提醒车主续费。</h6>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content"></div>
                </el-col>
              </el-row>
            </span>
            <span>
              <el-row>
                <el-col :span="18">
                  <div>
                    <h5>允许包月超期天数</h5>
                    <h6>设置允许包月超期天数，客户在包月过期后仍可按包月进出。0表示不允许超期。</h6>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content"></div>
                </el-col>
              </el-row>
            </span>
            <span>
              <el-row>
                <el-col :span="18">
                  <div>
                    <h5>包月车辆临停免费时长</h5>
                    <h6>设置允许包月车辆临时停车免费时长</h6>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content"></div>
                </el-col>
              </el-row>
            </span>
            <span>
              <el-row>
                <el-col :span="18">
                  <div>
                    <h5>剩余空车位数</h5>
                    <h6>设置停车场剩余车位数</h6>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content"></div>
                </el-col>
              </el-row>
            </span>
            <span>
              <el-row>
                <el-col :span="18">
                  <div>
                    <h5>停车场总车位数</h5>
                    <h6>设置停车场的车位总数</h6>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content"></div>
                </el-col>
              </el-row>
            </span>
          </div>
        </div>
      </el-main>
      <el-footer class="main-footer" height="130px">Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      newsprev: "上一页",
      newsNext: "下一页",
      currentPage: "",
      tableData: [
        {
          date: "中国国际机场"
        },
        {
          date: "中国国际rr机场"
        },
        {
          date: "中国国际aa机场"
        }
      ],
      options: [],
      value: "",
      statusone:'',
    };
  },
  methods: {
    querydate(row) {
      console.log(row.date);
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
    }
    .el-footer {
      text-align: center;
      padding-top: 20px;
    }
  }
  .el-header {
    background-color: #fff;
    box-shadow: 1px 1px 3px #ccc;
    .datelist-row {
      height: 100%;
      .el-col {
        height: 124px;
      }
    }
  }
  .el-main {
    background-color: #fff;
    box-shadow: 1px 1px 3px #ccc;
  }
  .el-footer {
    background-color: #fff;
    box-shadow: 1px 1px 3px #ccc;
  }
  .main-header {
    margin-bottom: 10px;
    .main-header-imgbx {
      text-align: right;
    }
    .main-datelist {
      display: flex;
      height: 100%;
      margin-top: 10px;
      flex-direction: column;
      justify-content: space-between;
      p {
        font-size: 14px;
      }
    }
  }
  //   管理设置
  .main-main {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    .main-changeBx {
      margin-top: 10px;
    }
    .querydatelist-Bx {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-content: space-between;
      .main-changeBx {
        margin-bottom: 10px;
      }
      .querydatelist {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        span {
          h6 {
            font-size: 12px;
            color: rgb(161, 161, 161);
          }
        }
      }
    }
  }
  .main-footer {
  }
  h4 {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
}
</style>