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
          <!--登录弹窗-->
          <div>
            <!--登录按钮-->
            <el-button type="text"
                       @click="dialogVisible1 = true"
                       style="line-height: 5px;color: #FFCC33">请先登录？
            </el-button>
            <!--注册按钮-->
            <el-button type="text"
                       @click="dialogVisible2 = true"
                       style="line-height: 5px;color: #FFCC33">免费注册
            </el-button>
            <div>
              <!--登录提示框-->
              <el-dialog
                title="请登录"
                :visible.sync="dialogVisible1"
                width="30%"
                :before-close="handleClose">
                <span slot="footer" class="dialog-footer">
                   <div style="margin-bottom: 20px">
                      <el-form ref="form" label-width="80px" size="mini" style="border:1px solid #C4E1C5;padding:20px;">
                        <el-form-item label="用户名">
                           <el-input v-model="user.name"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                         <el-input type="password" v-model="user.password"></el-input>
                        </el-form-item>
                      </el-form>
                   </div>

                   <el-button @click="dialogVisible1 = false">取 消</el-button>
                   <el-button type="primary" @click="">登录</el-button>
                   </span>
              </el-dialog>
              <!--注册提示框-->
              <el-dialog
                title="注册"
                :visible.sync="dialogVisible2"
                width="30%"
                :before-close="handleClose">
                <span slot="footer" class="dialog-footer">
                    <div style="margin-bottom: 20px">
                        <el-form ref="form" label-width="80px" size="mini"
                                 style="border:1px solid #C4E1C5;padding:20px;">
                        <el-form-item label="用户名">
                           <el-input v-model="user.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                         <el-input type="password" v-model="user.password"></el-input>
                        </el-form-item>
                          <el-form-item label="重复密码">
                         <el-input type="password" v-model="checkPassWord"></el-input>
                        </el-form-item>
                      </el-form>
                    </div>
                   <el-button @click="dialogVisible2 = false">取 消</el-button>
                   <el-button type="primary" @click="saveUser">注 册</el-button>
                   </span>
              </el-dialog>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">1</div>
      </el-col>
    </el-row>
    <!--      第二行布局-->
    <el-row style="color: aquamarine;background-color:red;height: 100px" :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple">2</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">2</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">2</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">2</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">2</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">2</div>
      </el-col>
    </el-row>
    <div style="display: flex;justify-content:center">
      <el-menu :default-active="activeIndex"
               class="el-menu-demo"
               mode="horizontal"
               @select="handleSelect">
        <el-menu-item index="1"><span style="font-size: 20px">首页</span></el-menu-item>
        <el-menu-item index="2"><span style="font-size: 20px">首页</span></el-menu-item>
        <el-menu-item index="3"><span style="font-size: 20px">首页</span></el-menu-item>
        <el-menu-item index="4"><span style="font-size: 20px">首页</span></el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
//引入 js—cookies
import cookies from "js-cookie"

export default {//暴露当前组件
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      //对话框状态
      dialogVisible1: false,
      dialogVisible2: false,

      //  登录表单
      user: {},
      checkPassWord: '',
    };

  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    saveUser() {
      if (this.user.username == null || this.user.password == null || this.checkPassWord == null) {
        this.$confirm('用户名或密码不能为空', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
      } else if (this.checkPassWord != this.user.password) {
        this.$confirm('密码不一致', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
      } else {
        //  --------------------------------------------------------------------------
        //添加用户执行
        this.$http.post("http://localhost:8080/user/add", this.user).then(res => {
          console.log(res.data)
          if (res.data == true) {
            this.$message({
              type: 'success',
              message: '注册成功!'
            });
            this.dialogVisible2 = false;

          } else {
            this.$message({
              type: 'error',
              message: '用户名重复!'
            });
          }
        })
      }
      //  --------------------------------------------------------------------------

    },


    //登录注册确认关闭
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {
        });
    },
    open() {
      this.$confirm('密码不一致', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
  // 注册
  UserZhuCe() {
    console.log(this.user);
    // 发送axios请求
    this.$http.get("http://localhost:8080/user", this.user).then(res => {
      console.log(res);
      if (res.data.user != null) {
        //切换路由
        this.$router.push("/test")
      }
    })
  },
  //登录
  userDelu() {

  }

}
</script>

<style>

</style>
