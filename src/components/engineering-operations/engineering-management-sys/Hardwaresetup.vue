<template>
  <!-- 工程运维-硬件设置 -->
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
            <el-button type="danger">待分配硬件</el-button>
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
      <el-container style="height:100%">
        <el-header class="main-header-first">
          <p>绑定所选择的停车场</p>
        </el-header>
        <el-main>
          <el-tabs v-model="activeName">
            <el-tab-pane label="全部" name="first">
              <div class="tablequery-bx">
                <el-table :data="tableData" style="width: 100%" border size="mini">
                  <el-table-column prop="date" label="硬件类别" align="center"></el-table-column>
                  <el-table-column prop="name" label="归属通道" align="center"></el-table-column>
                  <el-table-column prop="address" label="二维码地址" align="center"></el-table-column>
                  <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                      <el-button @click="setquery(scope.row)" type="primary" size="mini">编辑</el-button>
                      <el-button @click="setquery(scope.row)" type="danger" size="mini">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="相机" name="second">
              <div class="tablequery-bx">
                <el-table :data="tableData" style="width: 100%" border size="mini">
                  <el-table-column prop="date" label="硬件类别" align="center"></el-table-column>
                  <el-table-column prop="name" label="归属通道" align="center"></el-table-column>
                  <el-table-column prop="address" label="二维码地址" align="center"></el-table-column>
                  <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                      <el-button @click="setquery(scope.row)" type="primary" size="mini">编辑</el-button>
                      <el-button @click="setquery(scope.row)" type="danger" size="mini">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="显示屏" name="third">
              <div class="tablequery-bx">
                <el-table :data="tableData" style="width: 100%" border size="mini">
                  <el-table-column prop="date" label="硬件类别" align="center"></el-table-column>
                  <el-table-column prop="name" label="归属通道" align="center"></el-table-column>
                  <el-table-column prop="address" label="二维码地址" align="center"></el-table-column>
                  <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                      <el-button @click="setquery(scope.row)" type="primary" size="mini">编辑</el-button>
                      <el-button @click="setquery(scope.row)" type="danger" size="mini">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="出口收费机" name="fourth">
              <div class="tablequery-bx">
                <el-table :data="tableData" style="width: 100%" border size="mini">
                  <el-table-column prop="date" label="硬件类别" align="center"></el-table-column>
                  <el-table-column prop="name" label="归属通道" align="center"></el-table-column>
                  <el-table-column prop="address" label="二维码地址" align="center"></el-table-column>
                  <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                      <el-button @click="setquery(scope.row)" type="primary" size="mini">编辑</el-button>
                      <el-button @click="setquery(scope.row)" type="danger" size="mini">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="场内收费机" name="five">
              <div class="tablequery-bx">
                <el-table :data="tableData" style="width: 100%" border size="mini">
                  <el-table-column prop="date" label="硬件类别" align="center"></el-table-column>
                  <el-table-column prop="name" label="归属通道" align="center"></el-table-column>
                  <el-table-column prop="address" label="二维码地址" align="center"></el-table-column>
                  <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                      <el-button @click="setquery(scope.row)" type="primary" size="mini">编辑</el-button>
                      <el-button @click="setquery(scope.row)" type="danger" size="mini">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="工控机" name="six">
              <div class="tablequery-bx">
                <el-table :data="tableData" style="width: 100%" border size="mini">
                  <el-table-column prop="date" label="硬件类别" align="center"></el-table-column>
                  <el-table-column prop="name" label="归属通道" align="center"></el-table-column>
                  <el-table-column prop="address" label="二维码地址" align="center"></el-table-column>
                  <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                      <el-button @click="setquery(scope.row)" type="primary" size="mini">编辑</el-button>
                      <el-button @click="setquery(scope.row)" type="danger" size="mini">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-main>
        <el-footer>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="10"
            prev-text="上一页"
            next-text="下一页"
            background
            layout="prev, pager, next"
            :total="40"
          ></el-pagination>
        </el-footer>
      </el-container>
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
      activeName: "first",
      tableData: [
        {
          date: "阿萨的",
          name: "fasdas",
          address: "www.baidu.com"
        }
      ],
      currentPage:1,

    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
        .el-button {
          width: 100%;
          margin-bottom: 5px;
        }
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
    .main-header-first {
      padding: 10px 0;
      line-height: 40px;
      border-bottom: 1px solid #ccc;
    }
    .tablequery-bx {
      padding: 10px;
    }
  }
}
</style>