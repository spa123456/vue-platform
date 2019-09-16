<template>
  <el-container>
    <el-header height="130px">
      <el-row>
        <el-col :span="4">
          <div class="headernav">
            <div>
              <span class="spantitle">p</span>
              <span class="spandate">p</span>
            </div>
            <div class="navexplain">
              <span>停车场</span>
            </div>
          </div>
        </el-col>
        <el-col :span="4" :offset="2">
          <div class="headernav">
            <div>
              <span class="spantitle">p</span>
              <span class="spandate">p</span>
            </div>
            <div class="navexplain">
              <span>停车位</span>
            </div>
          </div>
        </el-col>
        <el-col :span="4" :offset="2">
          <div class="headernav">
            <div>
              <span class="spantitle">p</span>
              <span class="spandate">p</span>
            </div>
            <div class="navexplain">
              <span>出口个数</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6" :offset="2">
          <div class="headernav">
            <div>
              <span class="spantitle">p</span>
              <span class="spandate">p</span>
              <span class="spantitle">p</span>
              <span class="spandate">p</span>
            </div>
            <div class="navexplain">
              <span>今日实时收入（测试版）</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <div class="echarstitle">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <div class="chartstime">
              <el-date-picker
                v-model="day"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                @change="getday"
              ></el-date-picker>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="chartstext">
              <h3>收入趋势</h3>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="chartsbtn">
              <el-button type="primary">半年</el-button>
              <el-button>一年</el-button>
              <el-button>两年</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div id="echartsbx"></div>
    </el-main>

    <el-footer height="282px">
      <el-row>
        <el-col :span="10">
          <div class="footerbx">
            <el-row>
              <el-col :span="24">
                <h3>收入项目</h3>
                <div id="incomechart"></div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="10" :offset="4">
          <div class="footerbx">
            <el-row>
              <el-col :span="24">
                <h3>付款方式</h3>
                <div id="waychart"></div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      day: "",
      data: [11, 22, 33, 44, 55, 66]
    };
  },
  mounted() {
    this.getecharts();
  },
  methods: {
    getecharts() {
      // 支付方式表格的创建
      let mapecharts = this.$echarts.init(document.getElementById("echartsbx"));
      mapecharts.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["现金", "电子支付", "合计"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.data //绑定时间
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "现金",
            type: "line",
            smooth: true,
            areaStyle: {},
            stack: "现金",
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "电子支付",
            type: "line",
            smooth: true,
            areaStyle: {},
            stack: "电子支付",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "合计",
            type: "line",
            smooth: true,
            areaStyle: {},
            stack: "合计",
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      });

      // 收入项目的chart
      let incomechart = this.$echarts.init(
        document.getElementById("incomechart")
      );
      incomechart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: ["直接访问", "邮件营销", "联盟广告"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" }
            ]
          }
        ]
      });
      // 支付方式的图表
      let waychart = this.$echarts.init(document.getElementById("waychart"));
      waychart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: ["直接访问", "邮件营销", "联盟广告"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" }
            ]
          }
        ]
      });
    },
    getday(val) {
      console.log(val); //传过来的时间是一个数组
    }
  }
};
</script>

<style lang="less" scoped>
.el-container {
  padding: 30px;
  height: 100%;
  .el-header {
    box-sizing: border-box;
    margin-bottom: 15px;
    padding: 0;
    .headernav {
      background-color: #fff;
      height: 90px;
      padding: 10px;
      box-shadow: 1px 1px 1px burlywood;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .spantitle{
        font-size: 16px;
        color: orange;
        font-weight: 700;
        padding:0 5px;
      }
      .spandate{
        font-size: 24px;
        color: rgb(30, 211, 30);
      }
      .navexplain{
        text-align: right;
        color: #ccc;
        font-size: 14px;
      }
    }
  }
  .el-main {
    box-sizing: border-box;
    background-color: #fff;
    padding: 0;
    margin: 15px 0;
    box-shadow: 1px 1px 1px burlywood;
    #echartsbx {
      width: 80%;
      height: 240px;
      margin: 0 auto;
      // background-color: red;
    }
    .echarstitle {
      height: 35px;
      margin: 5px 0;
      .chartstime {
        text-align: left;
        padding-left: 20px;
      }
      .chartstext {
        text-align: center;
      }
      .chartsbtn {
        text-align: right;
        padding-right: 20px;
      }
    }
  }
  .el-footer {
    box-sizing: border-box;
    padding: 0;

    margin-top: 15px;
    .footerbx {
      height: 282px;
      background-color: #fff;
      box-shadow: 1px 1px 1px burlywood;
      .el-row {
        height: 100%;
        .el-col {
          height: 100%;
          div {
            height: 100%;
          }
        }
      }
      h3{
        padding-left: 10px;
      }
    }
  }
}
</style>