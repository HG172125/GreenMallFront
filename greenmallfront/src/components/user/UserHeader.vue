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
          6
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">1</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">2</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">3</div>
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
    <div style="display: flex;justify-content:center">
      <el-menu class="el-menu-demo"
               mode="horizontal">
        <el-menu-item index="1"><span style="font-size: 20px">首页</span></el-menu-item>
        <el-menu-item index="2"><span style="font-size: 20px">首页</span></el-menu-item>
        <el-menu-item index="3"><span style="font-size: 20px">首页</span></el-menu-item>
        <el-menu-item index="4"><span style="font-size: 20px">首页</span></el-menu-item>
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
