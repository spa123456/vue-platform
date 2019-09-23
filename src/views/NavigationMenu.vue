<template>
  <div>
    <el-container>
      <!-- 侧边菜单栏 -->
      <el-aside width="210px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo menu-height"
          @open="handleOpen"
          @close="handleClose"
          background-color="#34462c"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <div style="height:50px;">
            <img src height="100px" width alt />
          </div>

          <!-- 停车场管理 -->
          <el-submenu index="1">
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
          <el-submenu index="2">
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
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>报表查询</span>
            </template>
            <el-menu-item index="businesspandect">营业总览</el-menu-item>
            <el-menu-item index="3-2">收入统计</el-menu-item>
            <el-menu-item index="3-3">包月统计</el-menu-item>
            <el-menu-item index="3-4">临停统计</el-menu-item>
            <el-menu-item index="3-5">值班记录</el-menu-item>
          </el-submenu>

          <!-- 交易管理 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>交易管理</span>
            </template>
            <el-menu-item index="4-1">退款管理</el-menu-item>
          </el-submenu>

          <!-- 储蓄卡用户管理 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>储蓄卡用户管理</span>
            </template>
            <el-menu-item index="5-1">储蓄信息</el-menu-item>
            <el-menu-item index="5-2">充值记录</el-menu-item>
            <el-menu-item index="5-3">消费记录</el-menu-item>
          </el-submenu>

          <!-- 日志查询 -->
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>日志查询</span>
            </template>
            <el-menu-item index="6-1">操作日志</el-menu-item>
            <el-menu-item index="6-2">登录日志</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 顶部导航栏 -->
        <el-header height="50px">
          <el-row>
            <el-col :span="4">
              <div class="left-menu">
                <el-menu mode="horizontal">
                  <el-submenu index="4">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                  </el-submenu>
                </el-menu>
              </div>
            </el-col>
            <el-col :span="4" :offset="16">
              <div class="right-menu">
                <el-row>
                  <el-col :span="4">
                    <div class="nav-style">
                      <span>
                        <router-link tag="span" :to="{path:'login'}">Home</router-link>
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
                    <div class>
                      <el-menu mode="horizontal">
                        <el-submenu index="4">
                          <template slot="title">我的工作台</template>
                          <el-menu-item index="2-1">选项1</el-menu-item>
                          <el-menu-item index="2-2">选项2</el-menu-item>
                        </el-submenu>
                      </el-menu>
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
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
  .el-menu {
    border-right-width: 0;
  }
}
.right-menu {
  .el-menu {
    border-right-width: 0;
  }
}
.el-header {
  padding: 0;
}
.el-main {
  color: #34462c;
  padding: 0;
  background-color: rgb(231, 231, 231);
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
.el-submenu .el-menu-item{
  height: 40px;
  line-height: 40px;
}
.routerBx{
  height:calc(100vh - 50px);//设置子路由组建在模块中的高度
}
</style>