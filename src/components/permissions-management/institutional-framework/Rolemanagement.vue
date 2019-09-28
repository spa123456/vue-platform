<template>
  <el-container>
    <el-aside width="400px">
      <div class="aside-input">
        <el-input v-model="unitvalue" placeholder="输入角色名称" size="small"></el-input>
        <el-button type="primary" size="small" class="aside-button">查询</el-button>
        <el-button type="primary" size="small">新建</el-button>
      </div>
      <div>
        <el-table
          :data="tableData"
          style="width: 100%"
          :show-header="false"
          :highlight-current-row="true"
        >
          <el-table-column prop="date" label="角色"></el-table-column>
          <el-table-column label="状态" width="80px">
            <template slot-scope="scope">
              <el-tag type="danger">{{scope.row.status==1?'启用':"停用"}}</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-aside>
    <el-main>
      <div class="main-bx">
        <div class="main-query">
          <h4>角色设置</h4>
        </div>
        <div class="main-query">
          <el-row>
            <el-col :span="6">
              <h4>角色名称</h4>
              <span>角色名称设置</span>
            </el-col>
            <el-col :span="18" class="setinput">
              <el-input></el-input>
            </el-col>
          </el-row>
        </div>
        <div class="main-query">
          <el-row>
            <el-col :span="6">
              <h4>角色编码</h4>
              <span>角色编码设置</span>
            </el-col>
            <el-col :span="18" class="setinput">
              <el-input></el-input>
            </el-col>
          </el-row>
        </div>
        <div class="main-query">
          <el-row>
            <el-col :span="6">
              <h4>备注信息</h4>
              <span>备注信息设置</span>
            </el-col>
            <el-col :span="18">
              <el-input></el-input>
            </el-col>
          </el-row>
        </div>
        <div class="main-query last-set">
          <el-row>
            <el-col :span="6">
              <h4>备注信息</h4>
              <span>备注信息设置</span>
            </el-col>
            <el-col :span="18">
              <div class="setquery">
                <el-tree :data="data" show-checkbox node-key="id" :props="defaultProps"></el-tree>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="btn-bx">
          <el-button type="success">保存</el-button>
          <el-button type="danger">停用</el-button>
          <el-button type="primary">恢复</el-button>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      unitvalue: "",
      tableData: [
        {
          date: "超级管理员",
          status: "0"
        }
      ],
      //树形控制节点设置
      data: [
        {
          id: 1,
          label: "停车场管理系统",
          children: [
            {
              id: 1 - 1,
              label: "停车场管理",
              children: [
                {
                  id: 1 - 1 - 1,
                  label: "车场信息"
                },
                {
                  id: 1 - 1 - 2,
                  label: "人员管理"
                },
                {
                  id: 1 - 1 - 3,
                  label: "通道管理"
                },
                {
                  id: 1 - 1 - 4,
                  label: "包月车辆"
                },
                {
                  id: 1 - 1 - 5,
                  label: "免费车辆"
                },
                {
                  id: 1 - 1 - 6,
                  label: "黑名车辆"
                },
                {
                  id: 1 - 1 - 7,
                  label: "停车记录"
                },
                {
                  id: 1 - 1 - 8,
                  label: "车辆类型"
                },
                {
                  id: 1 - 1 - 9,
                  label: "易错车牌"
                },
                {
                  id: 1 - 1 - 10,
                  label: "临停车辆"
                },
                {
                  id: 1 - 1 - 11,
                  label: "包月规则"
                },
                {
                  id: 1 - 1 - 12,
                  label: "异常记录"
                }
              ]
            },
            {
              id: 1 - 2,
              label: "商户应用",
              children: [
                {
                  id: 1 - 2 - 1,
                  label: "商户信息"
                },
                {
                  id: 1 - 2 - 2,
                  label: "充值记录"
                },
                {
                  id: 1 - 2 - 3,
                  label: "赠送"
                },
                {
                  id: 1 - 2 - 4,
                  label: "赠送记录"
                },
                {
                  id: 1 - 2 - 5,
                  label: "规则设置"
                }
              ]
            },
            {
              id: 1 - 3,
              label: "报表查询",
              children: [
                {
                  id: 1 - 3 - 1,
                  label: "营业总览"
                },
                {
                  id: 1 - 3 - 2,
                  label: "收入统计"
                },
                {
                  id: 1 - 3 - 3,
                  label: "包月统计"
                },
                {
                  id: 1 - 3 - 4,
                  label: "临停统计"
                },
                {
                  id: 1 - 3 - 5,
                  label: "商户统计"
                },
                {
                  id: 1 - 3 - 6,
                  label: "值班统计"
                }
              ]
            },
            {
              id: 1 - 4,
              label: "交易管理",
              children: [
                {
                  id: 1 - 4 - 1,
                  label: "交易退款"
                }
              ]
            },
            {
              id: 1 - 5,
              label: "储蓄卡用户管理",
              children: [
                {
                  id: 1 - 5 - 1,
                  label: "储蓄信息"
                },
                {
                  id: 1 - 5 - 2,
                  label: "充值记录"
                },
                {
                  id: 1 - 5 - 3,
                  label: "消费记录"
                }
              ]
            },
            {
              id: 1 - 6,
              label: "日志查询",
              children: [
                {
                  id: 1 - 6 - 1,
                  label: "操作日志"
                },
                {
                  id: 1 - 6 - 2,
                  label: "登陆日志"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "岗亭管理系统",
          children: [
            {
              id: 2 - 1,
              label: "岗亭系统",
              children: [
                {
                  id: 2 - 1 - 1,
                  label: "车辆查询"
                },
                {
                  id: 2 - 1 - 2,
                  label: "实时收费"
                },
                {
                  id: 2 - 1 - 3,
                  label: "值班详情"
                }
              ]
            }
          ]
        },
        {
          id: 3,
          label: "基础权限管理系统",
          children: [
            {
              id: 3 - 1,
              label: "组织机构管理",
              children: [
                {
                  id: 3 - 1 - 1,
                  label: "品牌管理"
                },
                {
                  id: 3 - 1 - 2,
                  label: "单位管理"
                },
                {
                  id: 3 - 1 - 3,
                  label: "角色管理"
                },
                {
                  id: 3 - 1 - 4,
                  label: "单位角色管理"
                },
                {
                  id: 3 - 1 - 5,
                  label: "人员管理"
                }
              ]
            },
            {
              id: 3 - 2,
              label: "基础数据管理",
              children: [
                {
                  id: 3 - 2 - 1,
                  label: "站点管理"
                },
                {
                  id: 3 - 2 - 2,
                  label: "功能菜单"
                },
                {
                  id: 3 - 2 - 3,
                  label: "配置参数"
                },
                {
                  id: 3 - 2 - 4,
                  label: "登录日志"
                },
                {
                  id: 3 - 2 - 5,
                  label: "数据日志"
                }
              ]
            }
          ]
        },
        {
          id: 4,
          label: "工程运维系统",
          children: [
            {
              id: 4 - 1,
              label: "工程运维管理",
              children: [
                {
                  id: 4 - 1 - 1,
                  label: "停车场管理"
                },
                {
                  id: 4 - 1 - 2,
                  label: "通道设置"
                },
                {
                  id: 4 - 1 - 3,
                  label: "硬件设置"
                },
                {
                  id: 4 - 1 - 4,
                  label: "硬件检查"
                },
                {
                  id: 4 - 1 - 5,
                  label: "岗亭维护"
                },
                {
                  id: 4 - 1 - 6,
                  label: "支付参数"
                }
              ]
            },
            {
              id: 4 - 2,
              label: "支付宝平台",
              children: [
                {
                  id: 4 - 2 - 1,
                  label: "品牌管理"
                },
                {
                  id: 4 - 2 - 2,
                  label: "单位管理"
                },
                {
                  id: 4 - 2 - 3,
                  label: "停车场管理"
                }
              ]
            }
          ]
        },
        {
          id: 5,
          label: "商户应用系统",
          children: [
            {
              id: 5 - 1,
              label: "商户应用管理",
              children: [
                {
                  id: 5 - 1 - 1,
                  label: "商户信息"
                },
                {
                  id: 5 - 1 - 2,
                  label: "充值记录"
                },
                {
                  id: 5 - 1 - 3,
                  label: "赠送"
                },
                {
                  id: 5 - 1 - 4,
                  label: "赠送记录"
                },
                {
                  id: 5 - 1 - 5,
                  label: "商户主页"
                }
              ]
            }
          ]
        },
        {
          id: 6,
          label: "平安成都",
          children: [
            {
              id: 6 - 1,
              label: "嫌疑车辆管理",
              children: [
                {
                  id: 6 - 1 - 1,
                  label: "嫌疑车辆"
                },
                {
                  id: 6 - 1 - 2,
                  label: "车辆轨迹"
                },
                {
                  id: 6 - 1 - 3,
                  label: "实时监控"
                }
              ]
            }
          ]
        },
        {
          id: 7,
          label: "路边停车系统",
          children: [
            {
              id: 7 - 1,
              label: "路边停车系统",
              children: [
                {
                  id: 7 - 1 - 1,
                  label: "通知"
                },
                {
                  id: 7 - 1 - 2,
                  label: "车位"
                },
                {
                  id: 7 - 1 - 3,
                  label: "记录查询"
                },
                {
                  id: 7 - 1 - 4,
                  label: "登记"
                },
                {
                  id: 7 - 1 - 5,
                  label: "收费"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.el-container {
  width: 100%;
  height: 100%;
  .el-aside {
    padding: 10px;
    box-shadow: 0px 0px 20px #ccc;
    .aside-input {
      display: flex;
    }
    .aside-button {
      margin-left: 10px;
    }
    .el-table {
      margin-top: 10px;
    }
  }
  .el-main {
    padding: 10px;
    color: rgb(56, 55, 55);
    font-size: 14px;
    .main-bx {
      box-sizing: border-box;
      box-shadow: 0 0 20px #ccc;
      width: 100%;
      height: 100%;
      padding: 10px;
      position: relative;
      .main-query {
        border-bottom: 1px dashed #ccc;
        padding: 10px 0;
        .setinput {
          text-align: right;
          .el-input {
            width: 300px;
          }
        }
      }
      .btn-bx{
          position: absolute;
          right: 40px;
          bottom: 20px;
      }
      .last-set {
        height: 300px;
        .setquery {
          border: 1px solid #ccc;
          padding: 0 0 10px 0;
          max-height: 350px;
          overflow: auto;
        }
      }
    }
  }
}
</style>