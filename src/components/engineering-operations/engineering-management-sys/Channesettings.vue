<template>
  <!-- 工程运维-通道设置 -->
  <el-container class="first-container">
    <el-aside width="340px">
      <el-container>
        <el-main>
          <div class="aside-carstop">
            <el-input
              placeholder="请输入停车场名称"
              prefix-icon="el-icon-search"
              v-model="carstopname"
              size="mini"
            ></el-input>
            <el-button size="mini" type="primary">查询</el-button>
          </div>
          <div class="carstoptabledata">
            <el-table :data="carstoptableData" style="width: 100%" :show-header="false" size="mini">
              <el-table-column prop="name" label="停车场名称"></el-table-column>
            </el-table>
          </div>
        </el-main>
        <el-footer>
          <el-pagination background layout="prev, pager, next" :total="10" :page-size="10"></el-pagination>
        </el-footer>
      </el-container>
    </el-aside>
    <el-main class="main-main">
      <div class="main-header-first">
        <el-cascader :options="options" v-model="selectedOptions" size="medium"></el-cascader>
        <el-button type="primary" size="medium" @click="setquery()">
          添加通道
          <i class="el-icon-plus el-icon--right"></i>
        </el-button>
      </div>
      <div class="basic-info-bx">
        <el-row class="basic-info">
          <el-col :span="24">
            <h3>基本信息</h3>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>通道名称</h4>
            <p>请设置通道名称。</p>
          </el-col>
          <el-col :span="12">
            <el-input v-model="value1" placeholder="请输入通道名称" size="medium"></el-input>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>通道类型</h4>
            <p>请设置通道类型。</p>
          </el-col>
          <el-col :span="12">
            <el-select v-model="value2" size="medium">
              <el-option value="1" label="入口"></el-option>
              <el-option value="2" label="出口"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>通道状态</h4>
            <p>请设置通道状态。</p>
          </el-col>
          <el-col :span="12" class="switch-col">
            <el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>通道编码</h4>
            <p>请设置通道编码。</p>
          </el-col>
          <el-col :span="12">
            <el-input v-model="value4" placeholder="请输入通道编码" size="medium"></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="equipment-info-bx">
        <el-row class="basic-info">
          <el-col :span="24">
            <h3>设备信息</h3>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>相机类型</h4>
            <p>设置相机类型。</p>
          </el-col>
          <el-col :span="12">
            <el-select v-model="value5" size="medium">
              <el-option value="1" label="相机类型A"></el-option>
              <el-option value="2" label="相机类型B"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>相机IP</h4>
            <p>设置相机ip。</p>
          </el-col>
          <el-col :span="12">
            <el-input v-model="value6" placeholder="请输入相机IP" size="medium"></el-input>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>相机端口</h4>
            <p>设置相机端口。</p>
          </el-col>
          <el-col :span="12">
            <el-input v-model="value7" placeholder="请输入相机端口" size="medium"></el-input>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>辅助相机类型</h4>
            <p>设置辅助相机类型。</p>
          </el-col>
          <el-col :span="12">
            <el-select v-model="value8" placeholder="请选择" size="medium">
              <el-option
                v-for="item in optionsvalue8"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>辅助相机IP</h4>
            <p>设置辅助相机ip。</p>
          </el-col>
          <el-col :span="12">
            <el-input v-model="value9" placeholder="请输入辅助相机IP" size="medium"></el-input>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>辅助相机端口</h4>
            <p>设置辅助相机端口。</p>
          </el-col>
          <el-col :span="12">
            <el-input v-model="value10" placeholder="请输入辅助相机端口" size="medium"></el-input>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>显示器类型</h4>
            <p>设置显示器类型。</p>
          </el-col>
          <el-col :span="12">
            <el-select v-model="value11" placeholder="请选择" size="medium">
              <el-option
                v-for="item in optionsvalue11"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>显示屏IP</h4>
            <p>设置显示屏IP。</p>
          </el-col>
          <el-col :span="12">
            <el-input v-model="value12" placeholder="请输入显示屏IP" size="medium"></el-input>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>显示屏端口</h4>
            <p>设置显示屏端口。</p>
          </el-col>
          <el-col :span="12">
            <el-input v-model="value13" placeholder="请输入显示屏端口" size="medium"></el-input>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>显示卡地址</h4>
            <p>设置显示卡地址。</p>
          </el-col>
          <el-col :span="12">
            <el-input v-model="value14" placeholder="请输入显示卡地址" size="medium"></el-input>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>模糊匹配规则</h4>
            <p>请输入模糊匹配规则。</p>
          </el-col>
          <el-col :span="12">
            <el-input v-model="value15" placeholder="请输入模糊匹配规则" size="medium"></el-input>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>白天开始时间</h4>
            <p>设置白天开始时间（0~23）。</p>
          </el-col>
          <el-col :span="12">
            <el-input v-model="value16" type="number" max="23" min="0" size="medium"></el-input>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>白天音量</h4>
            <p>设置白天音量（0~100）。</p>
          </el-col>
          <el-col :span="12">
            <el-input v-model="value17" type="number" max="100" min="0" size="medium"></el-input>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>夜间开始时间</h4>
            <p>设置夜间开始时间（0~23）。</p>
          </el-col>
          <el-col :span="12">
            <el-input v-model="value18" type="number" max="23" min="0" size="medium"></el-input>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>夜间音量</h4>
            <p>设置夜间音量（0~100）。</p>
          </el-col>
          <el-col :span="12">
            <el-input v-model="value19" type="number" max="100" min="0" size="medium"></el-input>
          </el-col>
        </el-row>

        <el-row class="basic-info">
          <el-col :span="12">
            <h4>出口是否自动播报金额</h4>
            <p>设置出口是否自动播报金额</p>
          </el-col>
          <el-col :span="12" class="switch-col">
            <el-switch v-model="value20" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>是否显示剩余车位</h4>
            <p>设置是否显示剩余车位</p>
          </el-col>
          <el-col :span="12" class="switch-col">
            <el-switch v-model="value21" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>是否启用第二地感</h4>
            <p>设置是否启用第二地感</p>
          </el-col>
          <el-col :span="12" class="switch-col">
            <el-switch v-model="value22" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>包月是否自动抬杆</h4>
            <p>车辆在包月时是否自动放行</p>
          </el-col>
          <el-col :span="12" class="switch-col">
            <el-switch v-model="value23" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>临时停车是否自动抬杆</h4>
            <p>车辆是临时停车时否自动放行</p>
          </el-col>
          <el-col :span="12" class="switch-col">
            <el-switch v-model="value24" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>无入场记录处理方式</h4>
            <p>无入场记录时采用的处理方式</p>
          </el-col>
          <el-col :span="12" class="switch-col">
            <el-tooltip :content="'方式: ' + value25" placement="top">
              <el-switch
                v-model="value25"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-value="自动开启"
                inactive-value="不处理"
              ></el-switch>
            </el-tooltip>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>免费停车车牌匹配规则</h4>
            <p>请输入免费停车车牌匹配规则</p>
          </el-col>
          <el-col :span="12">
            <el-input v-model="value26" placeholder="请输入免费停车车牌匹配规则" size="medium"></el-input>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>开闸类别</h4>
            <p>设置开闸类型</p>
          </el-col>
          <el-col :span="12">
            <el-select v-model="value27" placeholder="请选择" size="medium">
              <el-option
                v-for="item in optionsvalue27"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row class="basic-info">
          <el-col :span="12">
            <h4>经纬度设置</h4>
            <p>设置出口LBS信息，请参考高德坐标。</p>
          </el-col>
          <el-col :span="12">
            <span>
              经度
              <el-input v-model="value15" placeholder="请输入经度" size="medium"></el-input>
            </span>
            <span>
              纬度
              <el-input v-model="value15" placeholder="请输入纬度" size="medium"></el-input>
            </span>
          </el-col>
        </el-row>
      </div>
      <div class="lastbtn-bx">
        <el-button type="primary" size="medium" v-if="flag">保存</el-button>
        <el-button type="danger" size="medium" v-if="flag" @click="calloff">取消</el-button>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      carstopname: "",
      carstoptableData: [
        {
          name: "国际停车场"
        }
      ],
      selectedOptions: "",
      options: [
        {
          value: "1",
          label: "国际停车场",
          children: [
            {
              value: "1-1",
              label: "入口"
            },
            {
              value: "1-2",
              label: "出口"
            }
          ]
        }
      ],
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      optionsvalue8: [], //辅助相机类型
      value8: "",
      value9: "",
      value10: "",
      optionsvalue11: [],
      value11: "",
      value12: "",
      value13: "",
      value14: "",
      value15: "",
      value16: "",
      value17: "",
      value18: "",
      value19: "",
      value20: "",
      value21: "",
      value22: "",
      value23: "",
      value24: "",
      value25: "",
      value26: "",
      optionsvalue27: [
        { label: "网络发送给道闸", value: "1" },
        { label: "通过相机485透传给道闸", value: "2" },
        { label: "相机开关信号开闸(高)", value: "3" },
        { label: "相机开关信号开闸(低)", value: "4" },
        { label: "相机电平开闸", value: "5" },
        { label: "蓝泽显示卡开闸", value: "6" },
        { label: "华夏智信相机开闸", value: "7" }
      ],
      value27: "1",
      flag: false //保存按钮的显示隐藏
    };
  },
  methods: {
    setquery() {
      this.flag = true;
    },
    calloff() {
      this.flag = false;
    }
  }
};
</script>
<style lang="less" scoped>
.first-container {
  padding: 10px;
  height: 100%;
  .el-aside {
    box-shadow: 0 0 10px rgb(156, 206, 163);
    padding: 0;
    margin-right: 10px;
    .el-container {
      height: 100%;
      .aside-carstop {
        display: flex;
        padding-top: 10px;
        .el-input {
          margin-right: 10px;
        }
      }
      .carstoptabledata {
        margin-top: 10px;
      }
    }
  }
  .el-main {
    padding: 0 10px;
    background-color: #fff;
    .main-header-first {
      padding-top: 10px;
      .el-cascader {
        margin-right: 10px;
      }
    }
  }
  .el-footer {
    padding: 10px;
    text-align: center;
    background-color: #fff;
    margin-top: 10px;
  }
  .main-main {
    // box-shadow: 0 0 10px rgb(70, 102, 28);
    .basic-info-bx {
      margin-top: 10px;
      box-shadow: 0 0 10px rgb(70, 102, 28);
      .basic-info {
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        padding: 5px;
        .el-col {
          h4 {
            font-size: 14px;
          }
          p {
            font-size: 14px;
          }
          .el-input {
            width: 218px;
          }
        }
        .switch-col {
          padding-top: 10px;
        }
      }
    }
    .equipment-info-bx {
      margin-top: 10px;
      box-shadow: 0 0 10px rgb(70, 102, 28);
      .basic-info {
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        padding: 5px;
        .el-col {
          h4 {
            font-size: 14px;
          }
          p {
            font-size: 14px;
          }
          .el-input {
            width: 218px;
          }
        }
        .switch-col {
          padding-top: 10px;
        }
      }
    }
    .lastbtn-bx {
      text-align: center;
      margin: 20px 0;
    }
  }
}
</style>