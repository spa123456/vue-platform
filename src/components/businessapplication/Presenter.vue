<template>
  <el-container>
    <el-tabs type="border-card">
      <el-tab-pane label="查询车辆">
        <el-container>
          <el-aside width="330px">
            <div class="nav-query">
              <el-input prefix-icon="el-icon-search" v-model="queryvalue" placeholder="请输入车牌号"></el-input>
              <el-button type="primary">查询</el-button>
            </div>
            <el-table :data="tableData" stripe style="width: 100%" size="mini">
              <el-table-column prop="data" label="车牌号" align="center"></el-table-column>
            </el-table>
          </el-aside>
          <el-aside width="620px" class="right-aside-one">
            <div class="imgBx">
              <img src alt />
            </div>
            <P>入场时间</P>
            <P>停车时长</P>
            <P>总金额</P>
            <P>已付金额</P>
            <P>还需支付</P>
          </el-aside>
        </el-container>
      </el-tab-pane>
      <el-tab-pane label="二维码制作">
        <el-container>
          <el-aside width="330px">
            <!-- 展示创建的二维码列表 -->
          </el-aside>
          <el-aside width="755px" class="right-aside-two">
            <div style="width:414px">
              <p>二维码参数设置</p>
              <el-row>
                <el-col :span="8">
                  <div class="grid-content">赠送类型</div>
                </el-col>
                <el-col :span="16" class="content-right">
                  <div class="grid-content">
                    <el-select v-model="typevalue" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <div class="grid-content">赠送数额</div>
                </el-col>
                <el-col :span="16" class="content-right">
                  <div class="grid-content">
                    <!-- oninput = "value=value.replace(/[^\d.]/g,'')" -->
                    <el-input v-model="inputvalue1"></el-input>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <div class="grid-content">赠送张数</div>
                </el-col>
                <el-col :span="16" class="content-right">
                  <div class="grid-content">
                    <el-input v-model="inputvalue2"></el-input>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <div class="grid-content">有效期至</div>
                </el-col>
                <el-col :span="16" class="content-right">
                  <div class="grid-content">
                    <el-date-picker v-model="timevalue" type="date" placeholder="选择日期"></el-date-picker>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                
                <el-col :span="16" class="content-right" :offset="8">
                  <div class="grid-content">
                    <el-button type="primary">生成二维码</el-button>
                  </div>
                </el-col>
              </el-row>
            </div>
            <!-- 二维码图片界面 -->
            <div style="width:341px" class="imgset">
                <div>
                    <img src="" alt="">
                </div>
                <el-button type="primary" size="mini">下载</el-button>
            </div>
          </el-aside>
        </el-container>
      </el-tab-pane>
    </el-tabs>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      queryvalue: "",
      tableData: [
        {
          data: "川A.122455"
        }
      ],
      options: [],
      typevalue: "",
      inputvalue1: 1,
      inputvalue2: 3,
      timevalue: ""
    };
  }
};
</script>
<style lang="less" scoped>
.el-container {
  width: 100%;
  height: 100%;
  padding: 10px;
  .el-tabs {
    width: 100%;
    height: 100%;
    /deep/ .el-tabs__content {
      height: calc(100% - 69px);
      /deep/ .el-tab-pane {
        height: 100%;
        .el-container {
          padding: 0;
          .el-aside {
            height: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            box-shadow: 1px 1px 10px #ccc;
            .nav-query {
              display: flex;
              .el-input {
                margin-right: 10px;
              }
            }
          }
          .right-aside-one {
            margin-left: 15px;
            padding: 10px;
            .imgBx {
              height: 330px;
              box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);
            }
            p {
              height: 35px;
              line-height: 35px;
              border-bottom: 1px solid #ccc;
              font-size: 14px;
            }
          }
          .right-aside-two {
            margin-left: 15px;
            padding: 10px;
            display: flex;
            .imgBx {
              height: 330px;
              box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);
            }
            p{
                text-align: center;
                margin-bottom: 10px;
            }
            .el-row{
                margin-bottom: 20px;
                line-height: 40px;
            }
            .content-right{
                text-align: right;
            }
            .grid-content{
                .el-input{
                    width: 230px;
                }
                .el-button{
                    width: 230px;
                }
            }
          }
            // 二维码图片设置界面
          .imgset{
              padding-left: 10px;
              div{
                  width: 250px;
                  height: 250px;
                  margin: 0 auto;
                  background-color:rgb(214, 212, 212);
              }
              .el-button{
                  display: block;
                  width: 250px;
                  margin: 30px auto;
              }
          }
        }
      }
    }
  }
}
</style>