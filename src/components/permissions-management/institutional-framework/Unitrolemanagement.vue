<template>
  <el-container>
    <el-aside width="400px">
      <h4>品牌单位列表</h4>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item
          v-for="(itme,index) in asideunitdata"
          :title="itme.value"
          :key="index"
          :name="itme.value"
        >
          <div>
            <el-table :data="unitroledata" :show-header="false" :highlight-current-row="true">
              <el-table-column prop="name"></el-table-column>
            </el-table>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-aside>
    <el-main>
      <div>
        <H4>可用角色选择</H4>
      </div>
      <div class="mian-role">
        <el-checkbox-group v-model="checkbox">
          <el-checkbox-button v-for="itme in rolename" :label="itme" :key="itme">{{itme}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div class="main-btn">
        <el-button type="primary">保存</el-button>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      asideunitdata: [
        { value: "第一届" },
        { value: "第er届" },
        { value: "第san届" }
      ],
      unitroledata: [
        {
          name: "aaaa"
        },
        {
          name: "aaasd21fasd"
        },
        {
          name: "agdfasdasaaa"
        },
        {
          name: "aaahfadwqda"
        }
      ],
      activeName: "1",
      checkbox:[''],
      rolename:['系统管理员','平台管理员','物业管理员','停车场管理','停车场财务','停车场客服','岗亭值班人员','大型商户','普通商户','路边停车管理','PDA管理员']
    };
  }
};
</script>
<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-aside {
    padding: 10px;
    box-shadow: 0 0 20px #ccc;
    h4 {
      text-align: center;
      color: rgb(44, 44, 44);
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
    }
    .el-collapse {
      /deep/ .el-collapse-item__content {
        padding-bottom: 0;
        .el-table {
          color: rgb(78, 134, 197);
          .cell {
            padding-left: 40px;
          }
        }
      }
      /deep/ .el-collapse-item__header {
        padding-left: 20px;
      }
    }
  }

  .el-main {
    padding: 10px;
    h4 {
      border-bottom: 1px solid #ccc;
      padding: 10px;
    }
    .mian-role {
      height: 300px;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      padding: 40px 80px;
      .el-checkbox-button{
        /deep/ .el-checkbox-button__inner{
              width: 120px;
          }
          margin: 20px;
      }
    }
    .main-btn {
      padding: 40px;
      text-align: right;
    }
  }
}
</style>