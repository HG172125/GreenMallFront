<template>
  <div>
    <div>
      <UserHeader></UserHeader>
    </div>
    <!--    题目-->
    <div id="divImg">
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="8">
          <div
            style="text-align: center"
            class="grid-content bg-purple-light">
            <div style="font-size: 40px;margin-top: 20px;color: #606266">我的账户</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">1</div>
        </el-col>
      </el-row>
    </div>
    <el-container>
      <el-tabs
        type="border-card" style="height: 500px;width: 60%;margin-left: 20%">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i>个人信息</span>

          <!--用户基本信息展示-->
          <el-descriptions
            style="background-color: indianred;margin: 2%"
            class="margin-top" title="用户基本信息" :column="3" size="medium" border>
            <template slot="extra">
              <el-button
                style="margin: 5px"
                type="primary" size="small">修改
              </el-button>
            </template>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-user"></i>
                用户名
              </template>
              {{ user.username }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                手机号
              </template>
              {{ user.userphone }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-office-building"></i>
                联系地址
              </template>
              {{ user.useraddress }}
            </el-descriptions-item>
          </el-descriptions>


        </el-tab-pane>
        <el-tab-pane label="地址管理"
                     style="background-color: chartreuse;height: 100%">

          <!--          地址展示表格-->
          <el-table
            height="380"
            :data="addressData"
            style="width: 100%;background-color: #FFCC33">
            <el-table-column
              label="姓名"
              width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              label="手机号"
              width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>手机号: {{ scope.row.phone }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.phone }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              label="地址"
              width="250">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.address }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="addressEdit">编辑
                </el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="addressDelete">删除
                </el-button>
                <el-button
                  size="mini"
                  type="success"
                  @click="addressDelete">设为默认
                </el-button>
              </template>
            </el-table-column>

          </el-table>
          <el-button
            style="margin: 5px"
            icon="el-icon-circle-plus-outline"
            type="primary">
            添加地址
          </el-button>

        </el-tab-pane>
        <el-tab-pane label="购物车">

          <!--          购物车表格-->
          <el-table
            :data="shopData"
            height="250"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="goods"
              label="名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="goodsimage"
              label="图片"
              width="180">
            </el-table-column>
            <el-table-column
              prop="goodsprice"
              label="价格"
              width="180">
            </el-table-column>
            <el-table-column
              prop="goodsnumber"
              label="数量"
              width="180">
            </el-table-column>
            <el-table-column
              label="操作">
              <el-button
                size="mini"
                type="danger"
                @click="addressDelete">删除
              </el-button>
              <el-button
                size="mini"
                type="success"
                @click="addressDelete">下单
              </el-button>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="我的订单">
          <!--          订单表格-->
          <el-table
            :data="shopData"
            height="250"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="goods"
              label="名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="goodsimage"
              label="图片"
              width="180">
            </el-table-column>
            <el-table-column
              prop="goodsprice"
              label="价格"
              width="180">
            </el-table-column>
            <el-table-column
              prop="goodsnumber"
              label="订单状态"
              width="180">
            </el-table-column>
            <el-table-column
              label="操作">
              <el-button
                size="mini"
                type="danger"
                @click="addressDelete">删除
              </el-button>
              <el-button
                size="mini"
                type="success"
                @click="addressDelete">下单
              </el-button>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="修改密码">
          <el-tabs tab-position="left" style="height: 380px" type="border-card">
            <el-tab-pane label="用户密码">
              <el-form
                style="width: 60%"
                :model="ruleForm">
                <el-button type="success">用户登录密码修改</el-button>
                <el-form-item label="新密码">
                  <el-input type="password" v-model="ruleForm.pass"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                  <el-input type="password" v-model="ruleForm.checkPass"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="">提交</el-button>
                  <el-button @click="">重置</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="支付密码">
              <el-form
                style="width: 60%"
                :model="ruleForm">
                <el-button type="success">支付密码修改</el-button>
                <el-form-item label="新密码">
                  <el-input type="password" v-model="ruleForm.pass"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                  <el-input type="password" v-model="ruleForm.checkPass"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="">提交</el-button>
                  <el-button @click="">重置</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>

          </el-tabs>
        </el-tab-pane>
      </el-tabs>



    </el-container>
  </div>
</template>

<script>
//引入UserHeade
import UserHeader from "./UserHeader";

export default {
  name: "UserSet",
  components: {
    UserHeader,
  },
  data() {
    return {
      ruleForm: {checkPass: '', pass: ''},

      //  用户基本信息
      user: {
        username: '获取失败',
        userphone: '获取失败',
        useraddress: '获取失败'
      },
      //购物车数据
      shopData: [{date: '20221002', goods: '苹果'}

      ],

      //  地址信息
      addressData: [
        {name: 'HG', phone: '1524427689', address: '山东省菏泽市青岗集正种钻奶奶的时间'},
        {name: 'HG', phone: '1524427689', address: '2'},
        {name: 'HG', phone: '1524427689', address: '山东省菏泽市青岗集正种钻奶奶的时间'},
        {name: 'HG', phone: '1524427689', address: '2'},
        {name: 'HG', phone: '1524427689', address: '3'},
        {name: 'HG', phone: '1524427689', address: '山东省菏泽市青岗集正种钻奶奶的时间'},
        {name: 'HG', phone: '1524427689', address: '2'},
        {name: 'HG', phone: '1524427689', address: '3'},
        {name: 'HG', phone: '1524427689', address: '3'},
        {name: 'HG', phone: '1524427689', address: '山东省菏泽市青岗集正种钻奶奶的时间'},
        {name: 'HG', phone: '1524427689', address: '2'},
        {name: 'HG', phone: '1524427689', address: '3'}, {
          name: 'HG',
          phone: '1524427689',
          address: '山东省菏泽市青岗集正种钻奶奶的时间'
        },
        {name: 'HG', phone: '1524427689', address: '2'},
        {name: 'HG', phone: '1524427689', address: '3'}
      ]

    }
  },
  methods: {
    /**
     * 修改，删除地址
     *
     */
    addressEdit(index, row) {
      console.log(index, row);
    },
    addressDelete(index, row) {
      console.log(index, row);
    }
  },

  mounted() {
    this.user.userName = sessionStorage.getItem('username'),
      this.$http.post("http://localhost:8080/user/userinfo", this.user).then(res => {
        console.log(res.data.username)
        console.log(res)
      });
  }


}
</script>

<style scoped>
#divImg {
  background: url("../../assets/homeImgs/bg1.jpg") center;
  height: 100px;
  width: 100%;
  align-content: center;
  color: Transparent;
}

</style>
