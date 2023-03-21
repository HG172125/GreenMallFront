<template>
  <div id="bg">
    <h1 style="margin-top: 10px">管理员登录</h1>
    <!--    登录表单-->
    <el-container>
      <div style="width: 800px;height: 500px;margin-left: 30%">

        <el-form ref="form" label-width="80px" size="medium"
                 style="padding:20px;background: #F2F6FC">
          <el-form-item label="账号"
                        style="margin-top: 20%">
            <el-input v-model="admin.admin_name" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="admin.admin_password" placeholder="输入密码"></el-input>
          </el-form-item>

          <el-button @click="backindex">取 消</el-button>
          <el-button type="primary" @click="adminlogin">登录</el-button>

        </el-form>

      </div>
    </el-container>


  </div>
</template>

<script>
import Footer from "../Footer";
export default {
  name: "AdminLogin",
  components: {Footer},
  data() {
    return {
      admin: {admin_name: '', admin_password: ''}

    }
  },

  methods: {

    //管理员登录
    adminlogin() {

      this.$http.post('http://localhost:8080/admin/login', this.admin).then(res => {
        if (res.data != '') {
          this.$message({
            type: 'success',
            message: '登录成功!'
          });
          this.$router.push('/admin/main')
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
