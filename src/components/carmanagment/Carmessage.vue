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
            <el-select v-model="mainvalue" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <span style="padding-left:20px;color:#aaa;font-size:14px;">下拉列表可选择子停车场进行设置</span>
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
                    <el-switch
                      v-model="statusone"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      :active-text="switchtextone"
                      active-value="100"
                      inactive-value="0"
                      @change="getvaluestatuone()"
                    ></el-switch>
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
                  <div class="grid-content">
                    <el-switch
                      v-model="statustwo"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      :active-text="switchtexttwo"
                      active-value="100"
                      inactive-value="0"
                      @change="getvaluestatutwo()"
                    ></el-switch>
                  </div>
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
                  <div class="grid-content">
                    <el-input v-model="settimem1" @blur="setparmeter1()">
                      <template slot="append">分钟</template>
                    </el-input>
                  </div>
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
                  <div class="grid-content">
                    <el-switch
                      v-model="statusthree"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      :active-text="switchtextthree"
                      active-value="100"
                      inactive-value="0"
                      @change="getvaluestatuthree()"
                    ></el-switch>
                  </div>
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
                  <div class="grid-content">
                    <el-switch
                      v-model="statusfour"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      :active-text="switchtextfour"
                      active-value="100"
                      inactive-value="0"
                      @change="getvaluestatufour()"
                    ></el-switch>
                  </div>
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
                  <div class="grid-content">
                    <el-input v-model="settimeday" @blur="setparmeter2()">
                      <template slot="append">天数</template>
                    </el-input>
                  </div>
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
                  <div class="grid-content">
                    <el-input v-model="settimem2" @blur="setparmeter3()">
                      <template slot="append">分钟</template>
                    </el-input>
                  </div>
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
                  <div class="grid-content">
                    <el-input v-model="settimen1" @blur="setparmeter4()">
                      <template slot="append">个数</template>
                    </el-input>
                  </div>
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
                  <div class="grid-content">
                    <el-input v-model="settimen2" @blur="setparmeter5()">
                      <template slot="append">个数</template>
                    </el-input>
                  </div>
                </el-col>
              </el-row>
            </span>
          </div>
        </div>
      </el-main>
      <el-footer class="main-footer" height="130px">
        <div>
          <h4>管理设置</h4>
        </div>
        <div class="footer-changeBx">
          <el-select v-model="footervalue" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <span style="padding-left:20px;color:#aaa;font-size:14px;">下拉列表可选择子停车场进行设置</span>

          <!-- 对话框页面 -->
          <el-button type="primary" class="addbtn" @click="addparmeter = true">添加</el-button>
          <!-- ///// -->
          <el-dialog title="计费规则设置" :visible.sync="addparmeter">
            <span class="dialog-span">
              <el-row>
                <el-col :span="18">
                  <div>
                    <h5>规则名称</h5>
                    <h6>设定计费规则名称。</h6>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">
                    <el-input v-model="settimem1" @blur="setparmeter1()"></el-input>
                  </div>
                </el-col>
              </el-row>
            </span>
            <span class="dialog-span">
              <el-row>
                <el-col :span="18">
                  <div>
                    <h5>停车分类</h5>
                    <h6>设定车辆分类，实现不同车主区分计费。</h6>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">
                    <el-select v-model="typevalue" placeholder="请选择">
                      <el-option
                        v-for="item in typeoptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-row>
            </span>
            <span class="dialog-span">
              <el-row>
                <el-col :span="18">
                  <div>
                    <h5>车牌颜色</h5>
                    <h6>设定车牌颜色，按不同车牌颜色区分计费。</h6>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">
                    <el-select v-model="colorvalue" placeholder="请选择">
                      <el-option
                        v-for="item in coloroptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-row>
            </span>
            <span class="dialog-span">
              <el-row>
                <el-col :span="18">
                  <div>
                    <h5>车型类别</h5>
                    <h6>设定车型，按车辆类型区分计费。</h6>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">
                    <el-select v-model="cartypevalue" placeholder="请选择">
                      <el-option
                        v-for="item in cartypeoptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-row>
            </span>
            <span class="dialog-span">
              <el-row>
                <el-col :span="18">
                  <div>
                    <h5>无入场默认金额</h5>
                    <h6>无入场记录时，车辆默认收费金额。</h6>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">
                    <el-input v-model="settimem1" @blur="setparmeter1()">
                      <template slot="append">元</template>
                    </el-input>
                  </div>
                </el-col>
              </el-row>
            </span>
            <span class="dialog-span">
              <el-row>
                <el-col :span="18">
                  <div>
                    <h5>价格设置</h5>
                    <h6>设置具体价格，系统支持分段计费哟。</h6>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">
                    <el-row class="grid-content-row">
                      <el-col :span="12">
                        <el-select v-model="computervalue" placeholder="请选择">
                          <el-option
                            v-for="item in computeroptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-col>
                      <el-col :span="12">
                        <el-select v-model="computertimevalue" placeholder="请选择">
                          <el-option
                            v-for="item in computertimeoptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <div class="dialog-setmoney">
                  <el-row>
                    <el-col :span="4">免费时间：</el-col>
                    <el-col :span="20">
                      <el-input placeholder="请输入时间"></el-input>分钟
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="4">起步价：</el-col>
                    <el-col :span="20">
                      <el-input></el-input>元
                      <el-input></el-input>小时
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="4">后续价：</el-col>
                    <el-col :span="20">
                      <el-input></el-input>元
                      <el-input></el-input>小时
                    </el-col>
                  </el-row>
                </div>
              </el-row>
            </span>
            <span class="dialog-span">
              <el-row>
                <el-col :span="18">
                  <div>
                    <h5>支付完成后，离场限制</h5>
                    <h6>设置电子支付后，离场的时间限制。</h6>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">
                    <el-input v-model="settimem1" @blur="setparmeter1()">
                      <template slot="append">分钟</template>
                    </el-input>
                  </div>
                </el-col>
              </el-row>
            </span>
            <div slot="footer" class="dialog-footer">
              <el-button @click="addparmeter = false">取 消</el-button>
              <el-button type="primary" @click="addparmeter = false">确 定</el-button>
            </div>
          </el-dialog>
        </div>
      </el-footer>
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
      typevalue: "0",
      typeoptions: [
        {
          value: "0",
          label: "临时停车"
        },
        {
          value: "1",
          label: "普通停车"
        }
      ], //设置对话框中的临时停车和普通停车
      colorvalue: "0",
      coloroptions: [
        {
          value: "0",
          label: "不区分"
        },
        {
          value: "1",
          label: "蓝色"
        },
        {
          value: "2",
          label: "黄色"
        },
        {
          value: "3",
          label: "黑色"
        },
        {
          value: "4",
          label: "绿色"
        }
      ], //车牌的颜色分类
      cartypevalue: "0",
      cartypeoptions: [
        {
          value: "0",
          label: "不区分"
        },
        {
          value: "1",
          label: "小心汽车"
        },
        {
          value: "2",
          label: "中型汽车"
        },
        {
          value: "3",
          label: "大型汽车"
        },
        {
          value: "4",
          label: "其他"
        }
      ], //车辆类型分类
      computervalue: "0",
      computeroptions: [
        {
          value: "0",
          label: "统一计费"
        },
        {
          value: "1",
          label: "分段计费"
        }
      ], //计费方式分类===>统一/分段计费
      computertimevalue: "0",
      computertimeoptions: [
        {
          value: "0",
          label: "按小时计"
        },
        {
          value: "1",
          label: "按分钟计"
        }
      ], //计费计时方式
      mainvalue: "", //管理设置下拉绑定值
      footervalue: "", //
      statusone: "100", //开启关闭的状态码
      statustwo: "0", //开启关闭的状态码
      statusthree: "0", //开启关闭的状态码
      statusfour: "100", //开启关闭的状态码
      switchtextone: "开启",
      switchtexttwo: "开启",
      switchtextthree: "开启",
      switchtextfour: "开启",
      settimem1: "30", //设置电子支付后，离场的时间限制。
      settimeday: "100", //设置允许包月超期天数。
      settimem2: "1000", //设置包月车辆临停免费时长。
      settimen1: "1", //设置剩余空车位数。
      settimen2: "100", //设置停车场总车位数。
      addparmeter: false
    };
  },
  methods: {
    /*
     **  @description 左侧导航table的点击事件
     **  @param {}
     **  @return
     **  @author shipingan
     */
    querydate(row) {
      console.log(row.date);
    },

    /*
     **  @description switch开关文字的切换
     **  @param {}
     **  @return
     **  @author shipingan
     */
    getvaluestatuone() {
      this.statusone == 0
        ? (this.switchtextone = "关闭")
        : (this.switchtextone = "开启");
    },
    getvaluestatutwo() {
      this.statustwo == 0
        ? (this.switchtexttwo = "关闭")
        : (this.switchtexttwo = "开启");
    },
    getvaluestatuthree() {
      this.statusthree == 0
        ? (this.switchtextthree = "关闭")
        : (this.switchtextthree = "开启");
    },
    getvaluestatufour() {
      this.statusfour == 0
        ? (this.switchtextfour = "关闭")
        : (this.switchtextfour = "开启");
    },
    /*
     **  @description 修改离场的时间限制。
     **  @param {}
     **  @return
     **  @author shipingan
     */
    setparmeter1() {
      console.log(this.settimem1);
      //此处有一个修改成功的弹出
    },
    setparmeter2() {
      console.log(this.settimeday);
      //此处有一个修改成功的弹出
    },
    setparmeter3() {
      console.log(this.settimem2);
      //此处有一个修改成功的弹出
    },
    setparmeter4() {
      console.log(this.settimen1);
      //此处有一个修改成功的弹出
    },
    setparmeter5() {
      console.log(this.settimen2);
      //此处有一个修改成功的弹出
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
          border-bottom: 1px double rgb(243, 238, 238);
          h6 {
            font-size: 12px;
            color: rgb(161, 161, 161);
          }
          .grid-content {
            text-align: right;
            .el-input {
              width: 150px;
            }
          }
        }
      }
    }
  }
  .main-footer {
    overflow: auto;
    .footer-changeBx {
      margin-top: 10px;
      position: relative;
    }
  }
  h4 {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .dialog-span {
    .el-row {
      padding: 5px;
      border-bottom: 1px double #ccc;
    }
    .dialog-setmoney {
      z-index: 1;
      .el-input {
        width: 150px;
      }
      .el-row {
        border: none;
        padding-left: 40px;
      }
    }
    h6 {
      color: #ccc;
    }
    .grid-content-row {
      z-index: 100;
      border: none;
    }
  }
}
</style>
<style >
.addbtn {
  position: absolute;
  right: 0px;
}
</style>