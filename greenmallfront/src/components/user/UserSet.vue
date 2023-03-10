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
    <div id="bg1">
      <el-tabs style="width: 60%;margin-left: 20%;height: 600px" type="border-card">
        <el-tab-pane>
          <span style="font-size: 20px" slot="label"><i class="el-icon-date"></i> 购物车</span>
          购物车
        </el-tab-pane>
        <el-tab-pane>
          <span style="font-size: 20px" slot="label"><i class="el-icon-date"></i> 我的订单</span>
          购物车
        </el-tab-pane>
        <el-tab-pane>
          <span style="font-size: 20px" slot="label"><i class="el-icon-date"></i> 个人信息</span>
          购物车
        </el-tab-pane>
        <el-tab-pane>
          <span style="font-size: 20px" slot="label"><i class="el-icon-date"></i> 密码设置</span>
          购物车
        </el-tab-pane>

      </el-tabs>
    </div>

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

#bg1 {
  background: url('../../assets/homeImgs/bg2.jpg') center;
  height: 700px;
  width: 100%;
  align-content: center;
}
</style>
