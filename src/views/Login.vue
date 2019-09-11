<template>
  <div class="loginBx">
    <el-button type="parmiry" @click="gotomenu()">登录</el-button>
  </div>
</template>

<script>

export default {
  data(){
    return{

    }
  },
  methods:{
    gotomenu(){
      this.$router.push('navigationMenu')
    }
  }
};
</script>

<style lang="less" scoped>
.loginBx{
  width: 100%;
  height: 100%;
  background-color: #aaa;
  

}


</style>
