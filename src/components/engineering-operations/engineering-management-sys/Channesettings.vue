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
        <el-cascader :options="options" v-model="selectedOptions" size="mini"></el-cascader>
        <el-button type="primary" size="mini">添加通道<i class="el-icon-plus el-icon--right"></i></el-button>
      </div>
      <div></div>
      <div></div>
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
      selectedOptions:'',
      options:[{
        value:'1',
        label:'国际停车场',
        children:[{
          value:'1-1',
          label:"入口",
        },{
          value:'1-2',
          label:'出口'
        }]
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
    .main-header-first{
      padding-top: 10px;
      .el-cascader{
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
    box-shadow: 0 0 10px rgb(70, 102, 28);
  }
}
</style>