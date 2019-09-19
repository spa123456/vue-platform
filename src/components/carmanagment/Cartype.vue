<template>
  <el-container>
    <el-aside width="330px">
      <el-container>
        <el-header height="40px">
          <el-row>
            <el-col :span="18">
              <div class>
                <el-input v-model="input" placeholder="请输入停车场名称">
                  <i class="el-icon-search el-input__icon" slot="prefix"></i>
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="aside-btn">
                <el-button>查询</el-button>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <template>
            <el-table
              :data="tableData"
              style="width: 100%"
              :show-header="false"
              stripe
              @row-click="querydate"
            >
              <el-table-column prop="date"></el-table-column>
            </el-table>
          </template>
        </el-main>
        <el-footer>
          <el-pagination
            background
            layout="prev,pager ,next"
            :total="20"
            :page-size="10"
            :prev-text="newsprev"
            :next-text="newsNext"
          ></el-pagination>
        </el-footer>
      </el-container>
    </el-aside>
    <el-container class="right-container">
      <el-row style="width:100%">
        <el-col :span="24">
          <div class="settype-content">
            <fieldset>
              <legend>包月类型</legend>
              <p>设置包月车辆的包月类型</p>
              <div class="tagBx">
                <el-tag
                  :key="tag"
                  type="primary"
                  v-for="tag in dynamicTags1"
                  closable
                  :disable-transitions="false"
                  @close="handleClose1(tag)"
                >{{tag}}</el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="inputVisible1"
                  v-model="inputValue1"
                  ref="saveTagInput1"
                  size="small"
                  @keyup.enter.native="handleInputConfirm1"
                  @blur="handleInputConfirm1"
                ></el-input>
                <el-button
                  v-else
                  class="button-new-tag"
                  type="primary"
                  size="small"
                  @click="showInput1"
                >+ 添加</el-button>
              </div>
            </fieldset>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="settype-content">
                          <fieldset>
              <legend>免费车辆类型</legend>
              <p>设置免费车辆类型</p>
              <div class="tagBx">
                <el-tag
                  :key="tag"
                  type="primary"
                  v-for="tag in dynamicTags2"
                  closable
                  :disable-transitions="false"
                  @close="handleClose2(tag)"
                >{{tag}}</el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="inputVisible2"
                  v-model="inputValue2"
                  ref="saveTagInput2"
                  size="small"
                  @keyup.enter.native="handleInputConfirm2"
                  @blur="handleInputConfirm2"
                ></el-input>
                <el-button
                  v-else
                  class="button-new-tag"
                  type="primary"
                  size="small"
                  @click="showInput2"
                >+ 添加</el-button>
              </div>
            </fieldset>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="settype-content">
                          <fieldset>
              <legend>免费放行类型</legend>
              <p>设置免费放行车辆类型</p>
              <div class="tagBx">
                <el-tag
                  :key="tag"
                  type="primary"
                  v-for="tag in dynamicTags3"
                  closable
                  :disable-transitions="false"
                  @close="handleClose3(tag)"
                >{{tag}}</el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="inputVisible3"
                  v-model="inputValue3"
                  ref="saveTagInput3"
                  size="small"
                  @keyup.enter.native="handleInputConfirm3"
                  @blur="handleInputConfirm3"
                ></el-input>
                <el-button
                  v-else
                  class="button-new-tag"
                  type="primary"
                  size="small"
                  @click="showInput3"
                >+ 添加</el-button>
              </div>
            </fieldset>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="settype-content">
                          <fieldset>
              <legend>临停车辆类型</legend>
              <p>设置临停车辆类型</p>
              <div class="tagBx">
                <el-tag
                  :key="tag"
                  type="primary"
                  v-for="tag in dynamicTags4"
                  closable
                  :disable-transitions="false"
                  @close="handleClose4(tag)"
                >{{tag}}</el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="inputVisible4"
                  v-model="inputValue4"
                  ref="saveTagInput4"
                  size="small"
                  @keyup.enter.native="handleInputConfirm4"
                  @blur="handleInputConfirm4"
                ></el-input>
                <el-button
                  v-else
                  class="button-new-tag"
                  type="primary"
                  size="small"
                  @click="showInput4"
                >+ 添加</el-button>
              </div>
            </fieldset>
          </div>
        </el-col>
      </el-row>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      input: "", //aside查询停车场的input
      inputValue1: "", //查询车主房主车位信息的号码
      tableData: [
        {
          date: "aaaaaaaaaa"
        }
      ],
      newsprev: "上一页",
      newsNext: "下一页",
      dynamicTags1: ["标签一", "标签二", "标签三"],
      dynamicTags2: ["标签a一", "标签二", "标签三"],
      dynamicTags3: ["标签d一", "标签二", "标签三"],
      dynamicTags4: ["标签c一", "标签二", "标签三"],
      inputVisible1: false,
      inputVisible2: false,
      inputVisible3: false,
      inputVisible4: false,
      inputValue1: "",
      inputValue2: "",
      inputValue3: "",
      inputValue4: "",
    };
  },
  methods: {
    querydate(val) {
      console.log(val.date);
    },

    //第一块
    handleClose1(tag) {
      this.dynamicTags1.splice(this.dynamicTags1.indexOf(tag), 1);
    },
    showInput1() {
      this.inputVisible1 = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput1.$refs.input.focus();
      });
    },
    handleInputConfirm1() {
      let inputValue1 = this.inputValue1;
      if (inputValue1) {
        this.dynamicTags1.push(inputValue1);
      }
      this.inputVisible1 = false;
      this.inputValue1 = "";
    },

    //第二块

    handleClose2(tag) {
      this.dynamicTags2.splice(this.dynamicTags2.indexOf(tag), 1);
    },
    showInput2() {
      this.inputVisible2 = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput2.$refs.input.focus();
      });
    },
    handleInputConfirm2() {
      let inputValue2 = this.inputValue2;
      if (inputValue2) {
        this.dynamicTags2.push(inputValue2);
      }
      this.inputVisible2 = false;
      this.inputValue2 = "";
    },

    //第三块

    handleClose3(tag) {
      this.dynamicTags3.splice(this.dynamicTags3.indexOf(tag), 1);
    },
    showInput3() {
      this.inputVisible3 = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput3.$refs.input.focus();
      });
    },
    handleInputConfirm3() {
      let inputValue3 = this.inputValue3;
      if (inputValue3) {
        this.dynamicTags3.push(inputValue3);
      }
      this.inputVisible3 = false;
      this.inputValue3 = "";
    },

    //第四块

    handleClose4(tag) {
      this.dynamicTags4.splice(this.dynamicTags4.indexOf(tag), 1);
    },
    showInput4() {
      this.inputVisible4 = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput4.$refs.input.focus();
      });
    },
    handleInputConfirm4() {
      let inputValue4 = this.inputValue4;
      if (inputValue4) {
        this.dynamicTags4.push(inputValue4);
      }
      this.inputVisible4 = false;
      this.inputValue4 = "";
    },
  }
};
</script>

<style lang="less" scoped>
.el-container {
  padding: 10px;
  height: 100%;
  .el-aside {
    background-color: rgb(231, 231, 231);
    height: 100%;
    .el-header {
      box-shadow: none;
      background-color: rgb(231, 231, 231);
      padding: 0;
      .el-input {
        width: 90%;
        box-shadow: 1px 1px 3px #ccc;
      }
      .aside-btn {
        text-align: right;
      }
    }
    .el-main {
      padding: 0;
      margin: 10px 0;
      background-color: #fff;
    }
    .el-footer {
      text-align: center;
      padding-top: 20px;
      background-color: #fff;
    }
  }

  .right-container {
    background-color: rgb(240, 240, 240);
    .settype-content {
      fieldset {
        border-width: 1px;
        border-color: #ccc;
        .el-tag + .el-tag {
          margin: 20px 0 20px 10px;
        }
        .button-new-tag {
          margin: 20px;
          height: 32px;
          line-height: 30px;
          padding-top: 0;
          padding-bottom: 0;
        }
        .input-new-tag {
          width: 90px;
          margin: 20px;
          vertical-align: bottom;
        }
        .tagBx {
          padding: 10px;
        }
        p {
          font-size: 14px;
          color: rgb(82, 177, 114);
          padding-left: 20px;
        }
        legend {
          margin-left: 20px;
          padding: 10px;
          color: rgb(14, 13, 13);
        }
      }
    }
  }
}
</style>