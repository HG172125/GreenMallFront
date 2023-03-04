<template>
  <div>
    <!--第一行布局-->
    <el-row style="color: white" :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple">1</div>
      </el-col>
      <el-col :span="4">
        <div style="color:green" class="grid-content bg-purple-light">
          <span>欢迎来到绿色助农商城！</span>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">1</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">1</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">1</div>
      </el-col>
    </el-row>
    <!--      第二行布局-->
    <el-row style="color: black;height: 80px;background-color: green" :gutter="20">
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
          <el-input v-model="selectGoods" placeholder="请输入内容"></el-input>
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
            <el-button round icon="el-icon-user-solid" type="success">用户名</el-button>
            <el-button type="success" round>成功按钮</el-button>
          </div>

        </div>
      </el-col>
    </el-row>
    <div style="background-color: red">
      <el-menu class="el-menu-demo"
               mode="horizontal"
               style="background-color: blue">
        <el-menu-item index="1"><span style="font-size: 20px">首页</span></el-menu-item>
        <el-menu-item index="2"><span style="font-size: 20px">商城</span></el-menu-item>
        <el-menu-item index="3"><span style="font-size: 20px">文章</span></el-menu-item>
        <el-menu-item index="4"><span style="font-size: 20px">我的账户</span></el-menu-item>
        <el-menu-item index="3"><span style="font-size: 20px">购物车</span></el-menu-item>
        <el-menu-item index="4"><span style="font-size: 20px">加入我们</span></el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>

export default {
  name: "UserHeader",
  data() {
    return {
      name: ''
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
