<template>
  <div>
    <!--第一行布局-->
    <el-row style="color: Transparent;height: 80px;background-color: Transparent;" :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple">5</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">
          <el-image :src="require('../../assets/homeImgs/biao.jpg')"
                    style="height: 79px"></el-image>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">1</div>
      </el-col>
      <el-col :span="4">
        <div
          style="margin-top: 20px"
          class="grid-content bg-purple-light">
          <!--          搜索框-->
          <el-input placeholder="请输入内容"></el-input>
        </div>
      </el-col>
      <el-col :span="4">
        <div
          style="margin-top: 20px"
          class="grid-content bg-purple">
          <!--          搜索按钮-->
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">
          <div style="margin-top: 20px">
            <el-button round icon="el-icon-user-solid" type="success">{{ username }}</el-button>
            <!--            退出登录状态-->
            <el-button
              @click="exit"
              type="danger" round>退出
            </el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <!--    导航栏组件-->
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from "../NavBar";

export default {
  name: "UserHeader",
  components: {NavBar},
  data() {
    return {
      username: sessionStorage.getItem('username')
    }
  },
  methods: {
    /**
     * 展示用户名
     */
    showUserName() {
      this.username = sessionStorage.getItem('username')
    },


    /**
     * 退出登录
     */
    exit() {
      sessionStorage.removeItem('username')
      console.log(sessionStorage.getItem('username'))
      this.$router.push('/index')
    }
  }
}
</script>

<style scoped>

</style>
