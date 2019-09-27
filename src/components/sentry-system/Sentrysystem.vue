<template>
  <el-container>
    <el-header class="firstheader" height="80px" v-if="beondutyquery==0">
      <el-row>
        <el-col :span="12">
          <div>
            <span>实时收费</span>
            <el-button type="primary" @click="beondutyquery=1">值班详情</el-button>
          </div>
        </el-col>
        <el-col :span="12" class="el-col-right">
          <div class="el-col-right-div">
            <span>当前岗亭：</span>
            <el-select v-model="sentryvalue">
              <el-option
                v-for="item in options"
                :key="item.value"
                :value="item.value"
                :label="item.lable"
              ></el-option>
            </el-select>
            <el-button>800/800</el-button>
            <el-button type="primary">交接班</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main v-if="beondutyquery==0">
      <div>
        <el-button size="small" @click="porchoutstatus = 1" autofocus>测试入口</el-button>
        <el-button size="small" class="tagbtn" @click="porchoutstatus=2">测试出口</el-button>
        <span>&nbsp&nbsp</span>
        <el-button
          @click="opentag()"
          v-if="selfstate==false"
          size="small"
          style="margin-left:0px;"
        >自动切换</el-button>
        <el-tag closable @close="closetag()" v-if="selfstate">开启中</el-tag>
      </div>
      <div class="mainimagebx">
        <div>aaa</div>
        <div v-if="porchoutstatus==2">sss</div>
        <div class="carquery">
          <el-container>
            <el-main>
              <p>
                <el-tag>临</el-tag>
              </p>
              <p>
                <el-tag type="success">时</el-tag>
              </p>
              <p v-if="porchoutstatus==2">
                <el-tag type="danger">费</el-tag>
              </p>
              <p v-if="porchoutstatus==2">
                <el-tag type="warning">抵</el-tag>
              </p>
              <p v-if="porchoutstatus==2">
                <el-tag type="info">已</el-tag>
              </p>
            </el-main>
            <el-footer>
              <el-button type="danger" v-if="porchoutstatus==1">开启通道</el-button>
              <el-button type="success" v-if="porchoutstatus==1">关闭通道</el-button>
            </el-footer>
          </el-container>
        </div>
      </div>
      <div class="lastdoitbx" v-if="porchoutstatus==2">
        <div class="cartype">
          <p>免费放行理由：</p>
          <div>
            <el-radio v-model="radio" label="1" border>军车</el-radio>
            <el-radio v-model="radio" label="2" border>警车</el-radio>
            <el-radio v-model="radio" label="3" border>消防车</el-radio>
            <el-radio v-model="radio" label="4" border>维修车辆</el-radio>
            <el-radio v-model="radio" label="5" border>包月超期</el-radio>
            <el-radio v-model="radio" label="6" border>不免费</el-radio>
            <el-radio v-model="radio" label="7" border>其他</el-radio>
          </div>
        </div>
        <div class="outdoit">
          <el-row>
            <el-col :span="12">
              <div>
                <el-radio v-model="radiotwo" label="1" border>二次确定</el-radio>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="outcarquery">
                <el-button type="primary">详情</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div>
                <el-button type="danger" class="btnstyle">修正车牌</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div>
                <el-button class="btnstyle" type="warning">免费放行</el-button>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="outcarquery">
                <el-button type="info" class="btnstyle">收费放行</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div>
                <el-button class="btnstyle" type="success">开启通道</el-button>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="outcarquery">
                <el-button type="primary" class="btnstyle">关闭通道</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-main>
    <transition name="el-zoom-in-center">
      <div v-if="beondutyquery==1" class="beondutybx">
        <el-container>
          <el-header height="40px">
            <el-row>
              <el-col :span="12">
                <span>值班详情</span>
              </el-col>
              <el-col :span="12" class="closei">
                <i class="el-icon-error" @click="beondutyquery=0"></i>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <el-row>
              <el-col :span="8">
                <div>aaa</div>
              </el-col>
              <el-col :span="8">
                <div>aaa</div>
              </el-col>
              <el-col :span="8">
                <div>aaa</div>
              </el-col>
            </el-row>
          </el-main>
          <el-footer height="580px">
            <div class="footerfirstdiv">
              <el-row>
                <el-col :span="8">
                  <p>当班免费放行及异常车辆列表:</p>
                </el-col>
                <el-col :span="16" class="inputbx">
                  <el-input placeholder="请输入车牌号" size="mini" v-model="carquery"></el-input>
                  <el-button size="mini" type="success">查询</el-button>
                </el-col>
              </el-row>
            </div>
            <div>
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="车牌号" align="center"></el-table-column>
                <el-table-column prop="date" label="入场时间" align="center"></el-table-column>
                <el-table-column prop="date" label="出场时间" align="center"></el-table-column>
                <el-table-column
                  prop="date"
                  label="类别"
                  :filters="[{ text: '所有', value: '0' }, { text: '未收费', value: '1' }, { text: '免费放行', value: '2' }]"
                  filter-placement="bottom-end"
                  align="center"
                ></el-table-column>
                <el-table-column prop="date" label="总额" align="center"></el-table-column>
                <el-table-column prop="date" label="抵扣" align="center"></el-table-column>
                <el-table-column prop="date" label="应收" align="center"></el-table-column>
                <el-table-column prop="date" label="备注" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                  <template slot-scope="scope">
                    <el-button @click="querycar(scope.row)" size="mini" type="danger">详情</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-footer>
        </el-container>
      </div>
    </transition>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      sentryvalue: "1",
      options: [
        {
          value: "1",
          lable: "不得了的岗亭"
        }
      ],
      selfstate: false,
      radio: "",
      radiotwo: "",
      porchoutstatus: 1,
      beondutyquery: 0,
      carquery: "",//异常车辆查询的
      tableData:[{
        date:'川B。1111111'
      }]
    };
  },
  methods: {
    /*
     **  @description 自动切换按钮的改变状态
     **  @param {}
     **  @return
     **  @author shipingan
     */
    opentag() {
      this.selfstate = true;
    },
    closetag() {
      this.selfstate = false;
    },
    /*
     **  @description 出口按钮
     **  @param {}
     **  @return
     **  @author shipingan
     */
    porch() {
      this.porchoutstatus = 1;
    },
    /*
     **  @description 入口按钮
     **  @param {}
     **  @return
     **  @author shipingan
     */
    wayout() {
      this.porchoutstatus = 2;
    }
  }
};
</script>

<style lang="less" scoped>
.el-container {
  width: 100%;
  height: 100%;
  .firstheader {
    border-bottom: 1px solid rgb(233, 230, 230);
    .el-row {
      padding-top: 20px;
      .el-button {
        margin-left: 10px;
      }
    }
    .el-col-right {
      text-align: right;
      .el-col-right-div {
        width: 100%;
        .el-select {
          width: 200px;
        }
      }
    }
  }
  .el-main {
    .mainimagebx {
      display: flex;
      div {
        flex: 1;
        min-width: 500px;
        max-width: 560px;
        height: 340px;
        margin: 20px 40px 0 0;
        box-shadow: 1px 1px 1px rgb(189, 186, 186);
      }
      .carquery {
        .el-container {
          height: 100%;
          p {
            border-bottom: 1px double rgb(235, 227, 227);
            padding: 5px;
          }
        }
      }
    }
    .lastdoitbx {
      display: flex;
      .cartype {
        width: 1080px;
        margin: 20px 40px 0 0;
        p {
          color: rgb(187, 8, 8);
          font-weight: 700;
          padding-bottom: 20px;
        }
        .el-radio {
          background-color: rgb(195, 248, 195);
        }
      }
      .outdoit {
        min-width: 340px;
        height: 340px;
        margin: 20px 40px 0 0;
        .outcarquery {
          text-align: right;
        }
        .btnstyle {
          margin: 20px 0;
          width: 100%;
        }
      }
    }
  }
  .beondutybx {
    width: 100%;
    height: 100%;
    .el-header {
      line-height: 40px;
      border-bottom: 1px solid #e2e2e2;
      .closei {
        text-align: right;
      }
    }
    .el-main {
      .el-col {
        text-align: center;
      }
    }
    .el-footer {
      border-top: 1px solid #e2e2e2;
      .footerfirstdiv {
        padding: 10px;
        .inputbx {
          text-align: right;
          .el-input {
            width: 200px;
          }
        }
      }
    }
  }
}
</style>