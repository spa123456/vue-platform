<template>
  <el-container>
    <el-header height="130px">
      <el-row>
        <el-col :span="4">
          <div class="headernav">rrrrrrrrrrrrrrrr</div>
        </el-col>
        <el-col :span="4" :offset="2">
          <div class="headernav">ttttttttt</div>
        </el-col>
        <el-col :span="4" :offset="2">
          <div class="headernav">iiiiii</div>
        </el-col>
        <el-col :span="6" :offset="2">
          <div class="headernav">aaaa</div>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <div id="echartsbx"></div>
    </el-main>

    <el-footer height="282px">
      <el-row>
        <el-col :span="10">
          <div class="footerbx">iiiiii</div>
        </el-col>
        <el-col :span="10" :offset="4">
          <div class="footerbx">aaaa</div>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.getecharts();
  },
  methods: {
    getecharts() {
      let colors = ["#5793f3", "#d14a61", "#675bba"];
      let mapecharts = this.$echarts.init(document.getElementById("echartsbx"));
      mapecharts.setOption({
        color: colors,

        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "cross"
          }
        },
        legend: {
          data: ["2016 降水量"]
        },
        grid: {
          top: 70,
          bottom: 50
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1]
              }
            },
            axisPointer: {
              label: {
                formatter: function(params) {
                  return (
                    "降水量  " +
                    params.value +
                    (params.seriesData.length
                      ? "：" + params.seriesData[0].data
                      : "")
                  );
                }
              }
            },
            data: [
              "2016-7",
              "2016-8",
              "2016-9",
              "2016-10",
              "2016-11",
              "2016-12"
            ]
          },
        ],
        yAxis: [
          {
            type: "value",
          }
        ],
        series: [
          {
            name: "2016 降水量",
            type: "line",
            smooth: true,
            areaStyle: {},
            data: [
              231.6,
              46.6,
              55.4,
              18.4,
              10.3,
              0.7
            ]
          }
        ]
      });
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
      height: 300px;
      margin: 0 auto;
      // background-color: red;
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
    }
  }
}
</style>