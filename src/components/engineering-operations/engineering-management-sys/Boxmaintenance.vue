<template>
  <!-- 工程运维-岗亭维护 -->
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
        <el-cascader
          expand-trigger="hover"
          :options="options"
          v-model="selectedOptions"
          @change="handleChange"
          size="mini"
        ></el-cascader>
        <el-button type="primary" size="mini" icon="el-icon-plus" @click="blockset()">添加岗亭</el-button>
      </div>
      <div class="basic-info">
        <el-row>
          <el-col :span="12">
            <h4>基本信息</h4>
          </el-col>
          <el-col :span="12" class="col-right set-padding">
            <el-button type="primary" size="medium" v-if="flag">保存</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>岗亭名称</h5>
            <p>请设置岗亭名称。</p>
          </el-col>
          <el-col :span="12" class="col-right">
            <el-input placeholder="请输入岗亭名称" size="medium"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <h5>通道名称</h5>
            <p>请设置通道一个或多个。</p>
          </el-col>
          <el-col :span="12">
            <div class="set-gallery" v-popover:popover4 v-show="flag">
              <el-tag
                v-for="itme in checkList"
                closable
                :key="itme"
                size="mini"
                @close="handleClose(itme)"
              >{{itme}}</el-tag>
            </div>
            <el-popover ref="popover4" placement="bottom" width="400" trigger="click">
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="国际停车场A"></el-checkbox>
                <el-checkbox label="国际停车场B"></el-checkbox>
              </el-checkbox-group>
            </el-popover>
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
      selectedOptions: "",
      options: [
        {
          value: "1",
          label: "超级停车场",
          children: [
            {
              value: "1-1",
              label: "无敌一号"
            },
            {
              value: "1-2",
              label: "牛逼二号"
            }
          ]
        }
      ],
      checkList: ["国际停车场A", "国际停车场B"],
      flag: false
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleClose(itme) {
      this.checkList.splice(this.checkList.indexOf(itme), 1);
    },
    blockset() {
      this.flag = !this.flag;
    }
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
      .el-cascader {
        margin-right: 10px;
      }
    }
    .basic-info {
      .el-row {
        padding: 5px 0;
        border-top: 1px solid #ccc;
        .col-right {
          text-align: right;
        }
        h4{
            line-height: 36px;
        }
        .set-padding{
            height: 36px;
        }
        .set-gallery {
          width: 100%;
          height: 36px;
          line-height: 36px;
          border: 1px solid #ccc;
          border-radius: 4px;
          .el-tag {
            margin: 0 20px;
          }
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