<template>
  <div>
    <el-menu
      style="background-color: #F2F6FC"
      class="el-menu-demo"
      @select="getKey"
      mode="horizontal">
      <el-menu-item index=""><span style="font-size: 20px">首页</span></el-menu-item>
      <el-menu-item index="2" @click="toUrl"><span style="font-size: 20px">商城</span></el-menu-item>
      <el-menu-item index="3" @click="toUrl"><span style="font-size: 20px">文章</span></el-menu-item>
      <el-menu-item index="4" @click="toUrl"><span style="font-size: 20px">我的账户</span></el-menu-item>
      <el-menu-item index="5" @click="toUrl"><span style="font-size: 20px">购物车</span></el-menu-item>
      <el-menu-item index="6" @click="toUrl"><span style="font-size: 20px">加入我们</span></el-menu-item>
    </el-menu>
  </div>
</template>

<script>


export default {
  name: "NavBar",
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
      if (this.url == 4 || this.url == 5) {
        if (sessionStorage.getItem('username') == null) {
          this.$confirm('您还未登录！！', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
        } else {
          this.$router.push(this.url)
        }
      } else {
        this.$router.push(this.url)
      }


    }
  }


}
</script>

<style scoped>

</style>
