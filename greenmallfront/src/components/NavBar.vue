<template>
  <div>
    <el-menu
      style="background-color: #F2F6FC"
      class="el-menu-demo"
      @select="getKey"
      mode="horizontal">
      <el-menu-item index="/index" @click="toUrl"><span style="font-size: 20px">首页</span></el-menu-item>
         <el-submenu
           index="7">
           <template slot="title">
             <span style="font-size: 20px">农产品</span>
           </template>

           <el-submenu index="1-1">
             <template slot="title">蔬菜</template>
             <el-menu-item @click="toSelect" index="根菜类">根菜类</el-menu-item>
             <el-menu-item @click="toSelect" index="瓜果类">瓜果类</el-menu-item>
             <el-menu-item @click="toSelect" index="菌类">菌类</el-menu-item>
             <el-menu-item @click="toSelect" index="葱蒜类">葱蒜类</el-menu-item>
             <el-menu-item @click="toSelect" index="豆荚类">豆荚类</el-menu-item>
             <el-menu-item @click="toSelect" index="叶菜类">叶菜类</el-menu-item>
           </el-submenu>

           <el-submenu index="1-2">
             <template slot="title">水果</template>
             <el-menu-item @click="toSelect" index="瓜果类">瓜果类</el-menu-item>
             <el-menu-item @click="toSelect" index="柑橘类">柑橘类</el-menu-item>
             <el-menu-item @click="toSelect" index="核果仁果类">核果仁果类</el-menu-item>
             <el-menu-item @click="toSelect" index="浆果类">浆果类</el-menu-item>
             <el-menu-item @click="toSelect" index="热带水果">热带水果</el-menu-item>


           </el-submenu>
         </el-submenu>
      <el-menu-item index="/user/set" @click="toUrl"><span style="font-size: 20px">我的账户</span></el-menu-item>
      <el-menu-item index="/index/about" @click="toUrl"><span style="font-size: 20px">关于我们</span></el-menu-item>
      <el-menu-item index="/index/join" @click="toUrl"><span style="font-size: 20px">加入我们</span></el-menu-item>

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
      console.log("getKey" + key)
      this.url = key
    },
//
    toSelect() {
      sessionStorage.setItem("select", this.url)
      console.log(sessionStorage.getItem('select'))
      this.$router.push('/selectgoods').then((result) => {
      }).catch(reason => {
      })
      this.$router.go(0)
    },

//   跳转页面
    toUrl() {
      console.log("toUrl" + this.url)
      if (this.url == '/user/set' || this.url == 5) {
        if (sessionStorage.getItem('username') == null) {
          this.$confirm('您还未登录！！', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
        } else {
          this.$router.push(this.url).then((result) => {
          }).catch(reason => {
          })
        }
      } else {
        this.$router.push(this.url).then((result) => {
        }).catch(reason => {
        })
      }


    }
  }


}
</script>

<style scoped>

</style>
