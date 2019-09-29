<template>
  <!-- 工程运维-停车场管理 -->
  <el-container class="first-container">
    <el-header height="40px" class="first-header">
      <el-input prefix-icon="el-icon-search" v-model="carparkname" placeholder="请输入停车场名称"></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">添加</el-button>
    </el-header>
    <el-container>
      <el-aside width="340px">
        <el-container>
          <el-main>
            <el-table
              :data="dataoptions"
              :show-header="false"
              size="mini"
              :highlight-current-row="true"
            >
              <el-table-column prop="name" lable="名称"></el-table-column>
            </el-table>
          </el-main>
          <el-footer>
            <el-pagination background layout="prev, pager, next" :total="10" :page-size="10"></el-pagination>
          </el-footer>
        </el-container>
      </el-aside>
      <el-main class="main-main">
        <div class="main-main-div">
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h3>基本信息</h3>
              </el-col>
              <el-col :span="12" class="rightcol">
                <span>归属品牌：</span>
                <span style="color:red">弈博停车</span>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>停车场名称</h4>
                <p>输入停车场名称，必填。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-input placeholder="请输入停车场名称" v-model="stopparkname"></el-input>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>停车场类型</h4>
                <p>选择停车场类型。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-select v-model="stopcartype">
                  <el-option value="1" label="普通停车场"></el-option>
                  <el-option value="2" label="嵌套停车场"></el-option>
                </el-select>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>停车场编码</h4>
                <p>停车场编码。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-input placeholder="停车场编码" v-model="stopparknumber"></el-input>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>代理商</h4>
                <p>选择停车场归属代理商。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-input placeholder="请输入代理商" v-model="agentvalue" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>物业</h4>
                <p>选择停车场归属代物业。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-input placeholder="请输入物业" v-model="tenementvalue" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>区域</h4>
                <p>设置停车场行政区划信息。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <v-distpicker></v-distpicker>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>地址</h4>
                <p>填写停车场地址信息。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-input placeholder="停车场地址" v-model="tenementvalue"></el-input>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>LBS</h4>
                <p>设置停车场LBS信息，请参考百度地图坐标。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-input placeholder="经度" v-model="tenementvalue" style="width:200px"></el-input>
                <el-input placeholder="纬度" v-model="tenementvalue" style="width:200px"></el-input>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv setstyle">
            <el-row>
              <el-col :span="12">
                <h4>图片形象</h4>
                <p>选择形象照片，将在系统中进行展示。画面比例为 9:16，大小在200KB以下。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <el-button type="primary">上传图片</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="main-main-div">
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h3>管理设置</h3>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <el-select v-model="stopcarset">
                  <el-option
                    v-for="itme in stopcarnumber"
                    :value="itme.value"
                    :label="itme.label"
                    :key="itme.value"
                  ></el-option>
                </el-select>
                <span>主停车场</span>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-button type="danger">删除</el-button>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>总车位</h4>
                <p>设置停车场总车位数。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-input v-model="allcarnumber" style="width:100px"></el-input>个
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>是否为露天停车场</h4>
                <p>设置停车场属性，是否为露天停车场。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>是否公开停车场</h4>
                <p>设置停车场属性，是否公开停车场。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>免费停车</h4>
                <p>是否开启免费停车，开启后，所有计费规则都将失效。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>临时停车</h4>
                <p>是否允许临时车辆进入停车场。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-switch v-model="value4" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>入口 0 车位进场</h4>
                <p>停车场车位为0时，是否自动放行车辆进入。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-switch v-model="value5" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>手机包月续费</h4>
                <p>是否开启手机包月续费功能。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-switch v-model="value6" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv setstyle">
            <el-row>
              <el-col :span="12">
                <h4>包月到期提醒</h4>
                <p>是否开启包月提醒功能。开启后，将提前7天提醒车主续费。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-switch v-model="value7" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>支付完成后，离场限制</h4>
                <p>设置电子支付后，离场的时间限制。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-input v-model="allcarnumber" style="width:100px"></el-input>分钟
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>允许包月超期天数</h4>
                <p>设置允许包月超期天数，客户在包月过期后仍可按包月进出。0表示不允许超期。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-input v-model="allcarnumber" style="width:100px"></el-input>天
              </el-col>
            </el-row>
          </div>
          <div class="coldiv">
            <el-row>
              <el-col :span="12">
                <h4>包月车辆临时停车免费分钟数</h4>
                <p>设置包月车辆临时停车免费分钟数。</p>
              </el-col>
              <el-col :span="12" class="rightcol">
                <el-input v-model="allcarnumber" style="width:100px"></el-input>分钟
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="main-main-div">
          <div class="coldiv">
            <el-row>
              <el-col :span="12" style>
                <p>
                  <span>操作提示:</span>
                  <span style="color:red">正在查看停车场详情</span>
                </p>
              </el-col>
              <el-col :span="12" class="rightcol-text">
                <el-button type="primary">保存</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      carparkname: "", //停车场名字
      dataoptions: [{ name: "超级停车场" }],
      stopparkname: "", //输入停车场的名字
      stopcartype: "1", //停车场类型
      stopparknumber: "",
      agentvalue: "",
      tenementvalue: "",
      imageUrl: "",
      stopcarset: "", //选择子停车场
      stopcarnumber: [
        {
          value: "1",
          label: "就一个"
        }
      ],
      allcarnumber: "600",
      value1: false,
      value2: true,
      value3: false,
      value4: true,
      value5: true,
      value6: false,
      value7: true,
    };
  },
  methods: {
    /*
     **  @description 上传图片的方法
     **  @param {}
     **  @return
     **  @author shipingan
     */
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
    /////////////////////////////////////////////
  }
};
</script>
<style lang="less" scoped>
.first-container {
  padding: 10px;
  height: 100%;
  .el-header {
    padding: 0px;
    margin-bottom: 10px;
    display: flex;
    .el-button {
      margin-left: 10px;
    }
  }
  .el-container {
    height: 100%;
    .el-aside {
      box-shadow: 0 0 10px rgb(156, 206, 163);
      padding: 0;
      margin-right: 10px;
    }
    .el-main {
      padding: 0;
      background-color: #fff;
    }
    .el-footer {
      padding: 10px;
      text-align: center;
      background-color: #fff;
      margin-top: 10px;
    }
    .main-main {
      box-shadow: 0 0 10px rgb(70, 102, 28);
      .setstyle {
        padding-bottom: 40px;
      }
      .main-main-div {
        margin-bottom: 10px;
        box-shadow: 0 0 10px rgb(176, 179, 177);
        h4 {
          font-size: 14px;
        }
        p {
          font-size: 12px;
        }
        .coldiv {
          border-bottom: 1px solid #ccc;
          .el-row {
            padding: 5px;
            .rightcol {
              //   text-align: right;
              padding-right: 20px;
              /deep/ .distpicker-address-wrapper {
                select {
                  width: 160px;
                  font-size: 14px;
                }
              }
            }
            .rightcol-text {
              text-align: right;
              padding-right: 20px;
            }
          }
        }
      }
    }
  }
}
// 上传图片的样式
.avatar-uploader .el-upload {
  border: 1px dashed #ac4545;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  border: 1px solid #409eff;
  width: 320px;
  height: 180px;
  line-height: 180px;
  text-align: center;
  margin-bottom: 10px;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>