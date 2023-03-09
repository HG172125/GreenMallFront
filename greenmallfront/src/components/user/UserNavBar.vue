<template>
  <div>
    <el-menu
      style="background-color: #F2F6FC"
      class="el-menu-demo"
      @select="getKey"
      mode="horizontal">
      <el-menu-item index="/user/main" @click="toUrl"><span style="font-size: 20px">首页</span></el-menu-item>
      <el-submenu
        index="7">
        <template slot="title">
          <span style="font-size: 20px">农产品</span>
        </template>

        <el-submenu index="7-1">
          <template slot="title">蔬菜</template>
          <el-menu-item index="7-1-1">白菜</el-menu-item>
        </el-submenu>

        <el-submenu index="7-2">
          <template slot="title">水果</template>
          <el-menu-item index="7-2-1">白菜</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/user/set" @click="toUrl"><span style="font-size: 20px">我的账户</span></el-menu-item>
      <el-menu-item index="5" @click="toUrl"><span style="font-size: 20px">购物车</span></el-menu-item>
      <el-menu-item index="/user/about" @click="toUrl"><span style="font-size: 20px">关于我们</span></el-menu-item>
      <el-menu-item index="/user/join" @click="toUrl"><span style="font-size: 20px">加入我们</span></el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: "UserNavBar",
  data() {
    return {
      url: '',
    };
  },
  methods: {
    //获取导航标
    getKey(key) {
      this.url = key
    },
//   跳转页面
    toUrl() {
      if (this.url == '/user/set' || this.url == 5) {
        if (sessionStorage.getItem('user_name') == null) {
          this.$confirm('您还未登录！！', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
        } else {
          this.$router.push(this.url)
        }
      } else {
        console.log(this.url)
        this.$router.push(this.url)
      }
    }
  }
}
</script>

<style scoped>

</style>
