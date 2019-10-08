<template>
  <!-- 工程运维-硬件检查 -->
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
        <el-row>
          <el-col :span="12" style="line-height: 36px;">
            <p>默认为主停车场，如需设置子停车场请在右边选择子停车场再设置</p>
          </el-col>
          <el-col :span="12" style=" text-align: right;">
            <el-select v-model="childrenstop" size="medium">
              <el-option
                v-for="itme in childrenstopoptions"
                :key="itme.value"
                :value="itme.value"
                :label="itme.lable"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
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
      childrenstop: "",
      childrenstopoptions:[{
          value:'1',
          lable:'金沙子1停车场'
      }],
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
  }
  .el-footer {
    padding: 10px;
    text-align: center;
    background-color: #fff;
    margin-top: 10px;
  }
  .main-main {
    box-shadow: 0 0 10px rgb(70, 102, 28);
    .main-header-first{
         padding: 10px 0;
        border-bottom: 1px solid #ccc;
    }
  }
}
</style>