<template>
  <el-container>
    <el-header height="80px">
      <el-row>
        <el-col :span="12">
          <div>
            <span>实时收费</span>
            <el-button type="primary">车辆查询</el-button>
            <el-button type="primary">值班详情</el-button>
          </div>
        </el-col>
        <el-col :span="12" class="el-col-right">
          <div class="el-col-right-div">
            <span>当前岗亭：</span>
            <el-select v-model="sentryvalue">
              <el-option
                v-for="item in options"
                :key="item.value"
                :value="item.value"
                :label="item.lable"
              ></el-option>
            </el-select>
            <el-button>800/800</el-button>
            <el-button type="primary">交接班</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <div>
        <el-button size="small">测试入口</el-button>
        <el-button size="small" class="tagbtn">测试出口</el-button>
        &nbsp
        <el-button @click="opentag()" v-if="selfstate==false" size="small" style="margin-left:0px;">自动切换</el-button>
        <el-tag closable @close="closetag()" v-if="selfstate">开启中</el-tag>
      </div>
      <div></div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      sentryvalue: "1",
      options: [
        {
          value: "1",
          lable: "不得了的岗亭"
        }
      ],
      selfstate: false
    };
  },
  methods: {
    opentag() {
      this.selfstate = true;
    },
    closetag() {
      this.selfstate = false;
    }
  }
};
</script>

<style lang="less" scoped>
.el-header {
  border-bottom: 1px solid #ccc;
  .el-row {
    padding-top: 20px;
    .el-button {
      margin-left: 10px;
    }
  }
  .el-col-right {
    text-align: right;
    .el-col-right-div {
      width: 100%;
      .el-select {
        width: 200px;
      }
    }
  }

}
</style>