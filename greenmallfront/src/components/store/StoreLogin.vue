<template>

  <div id="bg">
    <h3 style="margin-top: 10px"> 商家后台登录</h3>
    <!--    登录表单-->
    <el-container>
      <div style="width: 800px;height: 500px;margin-left: 30%">

        <el-form ref="form" label-width="80px" size="medium"
                 style="padding:20px">
          <el-form-item label="账号"
                        style="margin-top: 20%">
            <el-input v-model="store.sname" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="store.spassword" placeholder="输入密码"></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="backindex">取 消</el-button>
        <el-button type="primary" @click="storelogin">登录</el-button>
      </div>
    </el-container>


  </div>
</template>

<script>
export default {
  name: "StoreLogin",
  data() {
    return {
      store: {sname: '', spassword: ''}

    }
  },

  methods: {

    //商户登录
    storelogin() {
      this.$http.post('http://localhost:8080/store/findone', this.store).then(res => {
        console.log(res.data)
        if (res.data.sname == this.store.sname) {
          console.log("true")
          this.$router.push('/storemain')
        } else {
          this.$confirm('用户名或密码错误！！', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
        }
      })

    },
    //返回首页
    backindex() {
      this.$router.push("/index")
    }
  }

}
</script>

<style scoped>
#bg {
  background: url('../../assets/homeImgs/bg2.jpg') center;
  height: 800px;
  width: 100%;
  align-content: center;
  text-align: center;
}
</style>
