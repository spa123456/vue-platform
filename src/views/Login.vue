<template>
  <div class="loginBx">
    <el-container>
      <el-header height="80px"></el-header>

      <el-main>
        <div class="main-divbox">
          <el-row>
            <el-col :span="6" :offset="6">
              <div class="loginBx-left">
                <h2>专注停车、人行通道解决方案提供商</h2>
                <div>
                  <span class="span1">智能客服</span>
                  <span class="span2">值守机器人</span>
                  <span class="span3">视频监控</span>
                  <span class="span4">车牌识别</span>
                  <span class="span5">智能门禁</span>
                  <span class="span6">云收费</span>
                  <span class="span7">人脸识别</span>
                  <span class="span8">弈博停车</span>
                  <span class="span9">AR保障</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8" :offset="2">
              <div class="loginBx">
                <div>
                  <el-row>
                    <el-col :span="8">
                      <div>
                        <h2>账号登陆</h2>
                      </div>
                    </el-col>
                    <el-col :span="9" :offset="7">
                      <div class="loginrightbx">
                        <span class="tagspan">
                          <el-tag v-if="loginflag">扫码登陆</el-tag>
                          <el-tag v-if="!loginflag">账号登陆</el-tag>
                        </span>
                        <span style="width:40px;height:40px;">
                          <img
                            src="../assets/loginimage/YFY-72-72.png"
                            alt
                            width="40"
                            height="40"
                            v-if="loginflag"
                            @click="changelogin"
                          />
                          <img
                            src="../assets/loginimage/YFY-PC-70-70.png"
                            alt
                            width="40"
                            height="40"
                            v-if="!loginflag"
                            @click="changelogin"
                          />
                        </span>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div>
                  <p v-if="loginflag">请使用管理员授权账号登陆</p>

                  <div v-if="!loginflag" class="imgstyle">
                    <img
                      width="140"
                      height="140"
                      src="../assets/loginimage/qrcode-none.png"
                      alt
                      srcset
                    />
                    <p v-if="!loginflag">打开 手机微信 扫一扫登录</p>
                  </div>
                </div>

                <div>
                  <el-form :model="ruleForm" v-if="loginflag">
                    <el-form-item prop="text">
                      <el-input type="text" v-model="ruleForm.text" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="pass">
                      <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>

      <el-footer>
        <p
          class="footerP"
        >© Copyright 2017-2018 Chengdu New Epoch High Tech Development Co.,Ltd.All Rights Reserver.蜀ICP备06006284号-3</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginflag: true,
      ruleForm: {
        pass: "",
        text: ""
      }
    };
  },
  methods: {
    submitForm() {
      this.$router.push("navigationMenu");
    },
    changelogin() {
      this.loginflag = !this.loginflag;
    }
  }
};
</script>

<style lang="less" scoped>
.loginBx {
  width: 100%;
  height: 100%;
  background-color: #000;
  .el-container {
    padding: none;
    .el-header {
      padding: 0;
    }
    .el-main {
      padding: 0;
      height: 638px;
      background: url("../assets/loginimage/login.png") no-repeat;
      background-size: 100% 100%;
      .main-divbox {
        box-sizing: border-box;
        padding: 0 100px;
        // background-color: #fff;
        margin-top: 150px;
        .loginBx-left {
          h2 {
            margin-top: -40px;
          }
          div{
            height: 300px;
            position: relative;
            span{
              display: block;
              position: absolute;
            }
            // span:hover{
            //   color: orangered;
            //   cursor: pointer;
            // }
            .span1{
              top: 230px;
              left: 210px;
              color: #fff;
              font-size: 20px;
              animation: gospan1 3s infinite linear alternate-reverse;
            }
           
            .span2{
              top: 170px;
              left: 230px;
              color: #fff;
              font-size: 20px;
              animation: gospan2 4s infinite linear alternate-reverse;
            }
            .span3{
              top: 80px;
              left: 260px;
              color: #fff;
              font-size: 20px;
              animation: gospan3 5s infinite linear alternate-reverse;
            }
            .span4{
              top: 60px;
              left: 160px;
              color: #fff;
              font-size: 20px;
              animation: gospan4 6s infinite linear alternate-reverse;
            }
            .span5{
              top: 100px;
              left: 120px;
              color: #fff;
              font-size: 20px;
              animation: gospan5 2s infinite linear alternate-reverse;
            }
            .span6{
              top: 140px;
              left: 200px;
              color: #fff;
              font-size: 20px;
              animation: gospan6 3s infinite linear alternate-reverse;
            }
            .span7{
              top: 200px;
              left: 160px;
              color: #fff;
              font-size: 20px;
              animation: gospan7 3s infinite linear alternate-reverse;
            }
            .span8{
              top: 140px;
              left: 60px;
              color: #fff;
              font-size: 20px;
              animation: gospan8 5s infinite linear alternate-reverse;
            }
            .span9{
              top: 220px;
              left: 90px;
              color: #fff;
              font-size: 20px;
              animation: gospan9 4s infinite linear alternate-reverse;
            }
             @keyframes gospan1 {
              100% {
                top: 40px;
                left: 100px;
                font-size: 14px;
                transform: translateZ(100px);
                color: rgb(173, 98, 98);
              }
            }
            @keyframes gospan2 {
              100% {
                top: 80px;
                left: 100px;
                font-size: 14px;
                transform: translateZ(100px);
                color: rgb(173, 98, 98);
              }
            }
            @keyframes gospan3 {
              100% {
                top: 60px;
                left: 100px;
                font-size: 14px;
                transform: translateZ(100px);
                color: rgb(173, 98, 98);
              }
            }
            @keyframes gospan4 {
              100% {
                top: 130px;
                left: 200px;
                font-size: 14px;
                transform: translateZ(100px);
                color: rgb(173, 98, 98);
              }
            }
            @keyframes gospan5 {
              100% {
                top: 40px;
                left: 100px;
                font-size: 14px;
                transform: translateZ(100px);
                color: rgb(173, 98, 98);
              }
            }
            @keyframes gospan6 {
              100% {
                top: 40px;
                left: 100px;
                font-size: 14px;
                transform: translateZ(100px);
                color: rgb(173, 98, 98);
              }
            }
            @keyframes gospan7 {
              100% {
                top: 40px;
                left: 100px;
                font-size: 14px;
                transform: translateZ(100px);
                color: rgb(173, 98, 98);
              }
            }
            @keyframes gospan8 {
              100% {
                top: 40px;
                left: 100px;
                font-size: 14px;
                transform: translateZ(100px);
                color: rgb(173, 98, 98);
              }
            }
            @keyframes gospan9 {
              100% {
                top: 40px;
                left: 100px;
                font-size: 14px;
                transform: translateZ(100px);
                color: rgb(173, 98, 98);
              }
            }
          }
        }
        .loginBx {
          // height: 260px;
          width: 380px;
          padding: 20px 20px 5px 20px;
          box-sizing: border-box;
          background-color: #fff;
          .loginrightbx {
            text-align: right;
            position: relative;
            .tagspan {
              position: absolute;
              margin-top: 0px;
              right: 40px;
            }
          }
        }
        .el-button {
          width: 100%;
        }
      }
    }
    .el-footer {
      padding: 0;
    }
  }
  .imgstyle {
    margin-top: 50px;
    text-align: center;
  }
  p {
    padding: 10px;
  }
}

.footerP {
  text-align: center;
  margin-top: 100px;
}
</style>
