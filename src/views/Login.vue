<template>
  <div class="loginBx">
    <el-container>
      <el-header height="80px"></el-header>

      <el-main>
        <div class="main-divbox">
          <el-row>
            <el-col :span="6" :offset="4">
              <div class="loginBx"></div>
            </el-col>
            <el-col :span="8" :offset="4">
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
                    <img width="140" height="140" src="../assets/loginimage/qrcode-none.png" alt="" srcset="">
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
        <p class="footerP">© Copyright 2017-2018 Chengdu New Epoch High Tech Development Co.,Ltd.All Rights Reserver.蜀ICP备06006284号-3</p>
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
    changelogin(){
      this.loginflag = !this.loginflag
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
        margin-top: 200px;
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
        .el-button{
          width: 100%;
        }
      }
    }
    .el-footer {
      padding: 0;
    }
  }
  .imgstyle{
    margin-top: 50px;
    text-align: center;
  }
  p{
    padding: 10px;
  }
}

.footerP{
  text-align: center;
  margin-top: 100px;
}
</style>
