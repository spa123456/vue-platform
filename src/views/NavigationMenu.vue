<template>
  <div>
    <el-container>
      <!-- 侧边菜单栏 -->
      <el-aside width="210px" class="menuall">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo menu-height"
          background-color="#34462c"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-openeds = menuoptions
          router
        >
          <div style="height:50px;">
            <img src height="100px" width alt />
          </div>

          <!-- 停车场管理 -->
          <el-submenu index="1" v-if="typevalue==1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>停车场管理</span>
            </template>
            <el-menu-item index="carmessage">车辆信息</el-menu-item>
            <el-menu-item index="peoplemessage">人员管理</el-menu-item>
            <el-menu-item index="channelmessage">通道管理</el-menu-item>
            <el-menu-item index="includecar">包月车辆</el-menu-item>
            <el-menu-item index="freecar">免费车辆</el-menu-item>
            <el-menu-item index="blacklistcar">黑名车辆</el-menu-item>
            <el-menu-item index="stopcarcrcode">停车记录</el-menu-item>
            <el-menu-item index="cartype">车辆类型</el-menu-item>
            <el-menu-item index="pallibleplatenumber">易错车牌</el-menu-item>
            <el-menu-item index="parkstopcar">临停车辆</el-menu-item>
            <el-menu-item index="includerule">包月规则</el-menu-item>
            <el-menu-item index="exceptionrecord">异常记录</el-menu-item>
          </el-submenu>

          <!-- 商户应用 -->
          <el-submenu index="2" v-if="typevalue==1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商户应用</span>
            </template>
            <el-menu-item index="businessinformation">商户信息</el-menu-item>
            <el-menu-item index="payrank">充值记录</el-menu-item>
            <el-menu-item index="presenter">赠送</el-menu-item>
            <el-menu-item index="givingrecords">赠送记录</el-menu-item>
            <el-menu-item index="rulesset">规则记录</el-menu-item>
          </el-submenu>

          <!-- 报表查询 -->
          <el-submenu index="3" v-if="typevalue==1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>报表查询</span>
            </template>
            <el-menu-item index="businesspandect">营业总览</el-menu-item>
            <el-menu-item index="incomestatistics">收入统计</el-menu-item>
            <el-menu-item index="monthlystatistics">包月统计</el-menu-item>
            <el-menu-item index="parkstatistics">临停统计</el-menu-item>
            <el-menu-item index="watchrecords">值班记录</el-menu-item>
          </el-submenu>

          <!-- 交易管理 -->
          <el-submenu index="4" v-if="typevalue==1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>交易管理</span>
            </template>
            <el-menu-item index="refundmanagement">退款管理</el-menu-item>
          </el-submenu>

          <!-- 储蓄卡用户管理 -->
          <el-submenu index="5" v-if="typevalue==1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>储蓄卡用户管理</span>
            </template>
            <el-menu-item index="savinginformation">储蓄信息</el-menu-item>
            <el-menu-item index="rechargerecord">充值记录</el-menu-item>
            <el-menu-item index="expensecalendar">消费记录</el-menu-item>
          </el-submenu>

          <!-- 日志查询 -->
          <el-submenu index="6" v-if="typevalue==1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>日志查询</span>
            </template>
            <el-menu-item index="operationlog">操作日志</el-menu-item>
            <el-menu-item index="loginlog">登录日志</el-menu-item>
          </el-submenu>

          <!-- 岗亭管理系统 -->
          <!-- ======================================== -->
          <el-submenu index="1" v-if="typevalue==2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>岗亭系统</span>
            </template>
            <el-menu-item index="sentrysystem">实时收费</el-menu-item>
            <el-menu-item index="carquery">车辆查询</el-menu-item>
          </el-submenu>

          <!-- 基础权限管理系统 -->
          <!-- 基础权限管理系统=============================== -->
          <el-submenu index="1" v-if="typevalue==3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>组织机构管理</span>
            </template>
            <el-menu-item index="brandmanagement">品牌管理</el-menu-item>
            <el-menu-item index="unitmanagement">单位管理</el-menu-item>
            <el-menu-item index="rolemanagement">角色管理</el-menu-item>
            <el-menu-item index="unitrolemanagement">单位角色管理</el-menu-item>
            <el-menu-item index="personnermanagement">人员管理</el-menu-item>
          </el-submenu>
          <el-submenu index="2" v-if="typevalue==3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>基础数据管理</span>
            </template>
            <el-menu-item index="sidemanagement">站点管理</el-menu-item>
            <!-- <el-menu-item index="functionmenu">功能菜单</el-menu-item> -->
            <el-menu-item index="configurationparameter">配置参数</el-menu-item>
            <el-menu-item index="loginlogtwo">登陆日志</el-menu-item>
            <el-menu-item index="datalog">数据日志</el-menu-item>
          </el-submenu>

          <!-- 工程运维管理系统 -->
          <!-- 工程运维管理系统=============================== -->
          <el-submenu index="1" v-if="typevalue==4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>工程运维管理</span>
            </template>
            <el-menu-item index="stopcarpark">停车场管理</el-menu-item>
            <el-menu-item index="channesettings">通道设置</el-menu-item>
            <el-menu-item index="hardwaresetup">硬件设置</el-menu-item>
            <el-menu-item index="hardwarecheck">硬件检查</el-menu-item>
            <el-menu-item index="boxmaintenance">岗亭维护</el-menu-item>
            <el-menu-item index="payparameters">支付参数</el-menu-item>
          </el-submenu>
          <el-submenu index="2" v-if="typevalue==4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>支付宝平台</span>
            </template>
            <el-menu-item index="alipayBrandmanagement">品牌管理</el-menu-item>
            <el-menu-item index="alipayUnitmanagement">单位管理</el-menu-item>
            <el-menu-item index="alipayCarmanagment">停车场管理</el-menu-item>
          </el-submenu>

          <!-- 商户应用系统 -->
          <!-- 商户应用系统=============================== -->
          <el-submenu index="1" v-if="typevalue==5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商户应用管理</span>
            </template>
            <el-menu-item index="businessinformation">商户信息</el-menu-item>
            <el-menu-item index="payrank">充值记录</el-menu-item>
            <el-menu-item index="presenter">赠送</el-menu-item>
            <el-menu-item index="givingrecords">赠送记录</el-menu-item>
          </el-submenu>

          <!-- 平安成都 -->
          <!-- 平安成都=============================== -->
          <el-submenu index="1" v-if="typevalue==6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>嫌疑车辆管理</span>
            </template>
            <el-menu-item index="suspicioncar">嫌疑车辆</el-menu-item>
            <el-menu-item index="cartrack">车辆轨迹</el-menu-item>
            <el-menu-item index="realtimemonitoring">实时监控</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 顶部导航栏 -->
        <el-header height="50px">
          <el-row>
            <el-col :span="4">
              <div class="left-menu">
                <el-select v-model="typevalue" class="navselect" @change="menuchange()">
                  <el-option value="1" label="停车管理系统"></el-option>
                  <el-option value="2" label="岗亭管理系统"></el-option>
                  <el-option value="3" label="基础权限管理系统"></el-option>
                  <el-option value="4" label="工程运维管理系统"></el-option>
                  <el-option value="5" label="商户应用系统"></el-option>
                  <el-option value="6" label="平安成都"></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="4" :offset="16">
              <div class="right-menu">
                <el-row>
                  <el-col :span="4">
                    <div class="nav-style">
                      <span>
                        <el-button type="text"  @click="gotohome()">Home</el-button>
                      </span>
                    </div>
                  </el-col>
                  <el-col :span="4" class="nav-style">
                    <div>
                      <i class="el-icon-bell"></i>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="nav-style">
                      <i class="el-icon-service"></i>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="dropdown">
                      <el-dropdown>
                        <span class="el-dropdown-link">
                          下拉菜单
                          <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>账户管理</el-dropdown-item>
                          <el-dropdown-item class="dropdown-item">
                            <router-link tag="span" :to="{path:'login'}" style="color:red">安全退出</router-link>
                          </el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row> 
        </el-header>

        <!-- 路由组件的放置/子路由 -->
        <el-main class="routerBx">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typevalue: "1",
      menuoptions:['1']
    };
  },
  mounted(){
    sessionStorage.getItem("key")==undefined?this.typevalue = '1':this.typevalue = sessionStorage.getItem("key");
  },
  methods: {
    /*
    **  @description 不同系统改变时展示不同的菜单页面
    **  @param {} 
    **  @return 
    **  @author shipingan
    */
    menuchange(){
      if (this.typevalue == 1) {
        this.$router.push('businesspandect')
      }else if (this.typevalue == 2) {
        this.$router.push('sentrysystem')
      } else if (this.typevalue == 3) {
        this.$router.push('brandmanagement')
      }else if (this.typevalue == 4) {
        this.$router.push('stopcarpark')
      }else if (this.typevalue == 5) {
        this.$router.push('businessinformation')
      }else if(this.typevalue == 6) {
        this.$router.push('suspicioncar')
      }
      //设置一个SS
      sessionStorage.setItem("key",this.typevalue)
    },
    /*
    **  @description 顶部导航HOME按钮点击时间
    **  @param {} 
    **  @return 
    **  @author shipingan
    */
    gotohome(){
      this.typevalue = "1"
      this.$router.push('businesspandect')
    }
  }
};
</script>

<style lang="less" scoped>
.menu-height {
  height: 100vh;
}
.nav-style {
  line-height: 50px;
  text-align: center;
  span {
    cursor: pointer;
  }
}
.left-menu {
  width: 200px;
  .navselect {
    /deep/ .el-input .el-input__inner {
      height: 50px;
      border: none;
      width: 180px;
      font-size: 16px;
    }
  }
}
.right-menu {
  min-width: 200px;
  .el-menu {
    border-right-width: 0;
  }
  .dropdown {
    height: 50px;
    line-height: 48px;
    text-align: center;
    .dropdown-item {
      color: red;
    }
  }
}
.el-header {
  padding: 0;
}
.el-main {
  color: #34462c;
  padding: 0;
  background-color: rgb(243, 243, 243);
}
</style>
<style lang="less">
.el-menu-item,
.el-submenu__title {
  height: 50px;
  line-height: 50px;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 50px;
  line-height: 50px;
  border: none;
  color: #000;
}
.el-menu.el-menu--horizontal {
  border: none;
}
.el-submenu .el-menu-item {
  height: 40px;
  line-height: 40px;
}
.routerBx {
  height: calc(100vh - 50px); //设置子路由组建在模块中的高度
}
</style>