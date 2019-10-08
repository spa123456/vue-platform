<template>
  <!-- 工程运维-支付参数 -->
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
        <el-select v-model="typeoptions" placeholder="请选择支付类型" size="mini">
          <el-option value="0" label="请选择支付类型"></el-option>
          <el-option value="1" label="招行通行"></el-option>
          <el-option value="2" label="微信、支付宝公众号收款"></el-option>
        </el-select>
      </div>
      <div class="set-query-bx" v-if="typeoptions!=0">
        <el-row>
          <el-col :span="24">
            <h3>{{typeoptions==0?"":typeoptions==1?"招行通行":"微信、支付宝公众号收款"}}</h3>
          </el-col>
        </el-row>
        <h4>聚合支付参数(招行)</h4>
        <el-row>
          <el-col :span="12">
            <h5>open_id</h5>
            <p>设置open_id参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入open_id参数" size="medium" v-model="value1"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>open_key</h5>
            <p>设置open_key参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入open_key参数" size="medium" v-model="value2"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>wexin_tag</h5>
            <p>设置wexin_tag参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入wexin_tag参数" size="medium" v-model="value3"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>alipay_tag</h5>
            <p>设置alipay_tag参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入alipay_tag参数" size="medium" v-model="value4"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>jump_url</h5>
            <p>设置jump_url参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入jump_url参数" size="medium" v-model="value5"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>unified_pay_url</h5>
            <p>设置unified_pay_url参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入unified_pay_url参数" size="medium" v-model="value6"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>sub_appid</h5>
            <p>设置sub_appid参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入sub_appid参数" size="medium" v-model="value7"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>branch_no</h5>
            <p>设置branch_no参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入branch_no参数" size="medium" v-model="value8"></el-input>
          </el-col>
        </el-row>

        <h4>招行一网通参数(招行)</h4>
        <el-row>
          <el-col :span="12">
            <h5>merchant_no</h5>
            <p>设置merchant_no参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入merchant_no参数" size="medium" v-model="value9"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>card_type</h5>
            <p>设置card_type参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入card_type参数" size="medium" v-model="value10"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>secret_key</h5>
            <p>设置secret_key参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入secret_key参数" size="medium" v-model="value11"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>sign_notice_url</h5>
            <p>设置sign_notice_url参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入sign_notice_url参数" size="medium" v-model="value12"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>return_urll</h5>
            <p>设置return_url参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入return_urll参数" size="medium" v-model="value13"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>expire_time_span</h5>
            <p>设置expire_time_span参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入expire_time_span参数" size="medium" v-model="value14"></el-input>
          </el-col>
        </el-row>

        <h4>无感支付参数(招行)</h4>
        <el-row>
          <el-col :span="12">
            <h5>smart_url</h5>
            <p>设置smart_url参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入smart_url参数" size="medium" v-model="value15"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>smart_sign_notice_url</h5>
            <p>设置smart_sign_notice_url参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入smart_sign_notice_url参数" size="medium" v-model="value16"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>smart_private_key</h5>
            <p>设置smart_private_key参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入smart_private_key参数" size="medium" v-model="value17"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>smart_app_version</h5>
            <p>设置smart_app_version参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入smart_app_version参数" size="medium" v-model="value18"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>smart_merchant_id</h5>
            <p>设置smart_merchant_id参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入smart_merchant_id参数" size="medium" v-model="value19"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>smart_notice_url</h5>
            <p>设置smart_notice_url参数</p>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="请输入smart_notice_url参数" size="medium" v-model="value20"></el-input>
          </el-col>
        </el-row>
        <div class="btn-bx">
          <el-button type="primary">保存并使用</el-button>
        </div>
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
      typeoptions: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "",
      value10: "",
      value11: "",
      value12: "",
      value13: "",
      value14: "",
      value15: "",
      value16: "",
      value17: "",
      value18: "",
      value19: "",
      value20: ""
    };
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
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
    }
    .set-query-bx {
      .el-row {
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
        h3 {
          color: rgb(192, 138, 21);
        }

        p {
          color: rgb(146, 146, 146);
          font-size: 14px;
        }
      }
      h4 {
        color: rgb(9, 180, 95);
      }
      .btn-bx {
        text-align: center;
        .el-button {
          margin: 20px;
          right: 0px;
        }
      }
    }
  }
  .el-footer {
    padding: 10px;
    text-align: center;
    background-color: #fff;
    margin-top: 10px;
  }
}
</style>