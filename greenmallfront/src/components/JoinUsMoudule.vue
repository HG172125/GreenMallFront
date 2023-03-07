<template>
  <div>
    <div id="bg">
      <div style="font-size: 40px;margin-top: 20px;color: #606266;margin-left: 45%">{{ title }}</div>
    </div>

    <div style="width: 60%;height: 500px;margin-left: 20%">
      <div style="margin-top: 20px">
        <el-steps :active="active" finish-status="success">
          <el-step title="设置店铺名称"></el-step>
          <el-step title="商户姓名"></el-step>
          <el-step title="商户手机号"></el-step>
          <el-step title="登录密码"></el-step>
          <el-step v-show="success" title="注册成功"></el-step>
          <el-step v-show="error" title="注册失败"></el-step>
        </el-steps>
        <!-- 第一步-->
        <div v-show="step1" style="text-align: center;margin-top: 20px">
          <span>店铺名称</span>
          <el-input
            style="width: 50%"
            placeholder="请输入内容"
            v-model="input.sname"
            clearable>
          </el-input>
          <el-button style="margin-top: 12px;" @click="next">下一步</el-button>

        </div>
        <!-- 第2步-->
        <div v-show="step2" style="text-align: center;margin-top: 20px">
          <span>商户姓名</span>
          <el-input
            style="width: 50%"
            placeholder="请输入内容"
            v-model="input.susername"
            clearable>
          </el-input>
          <el-button style="margin-top: 12px;" @click="next">下一步</el-button>

        </div>
        <!-- 第3步-->
        <div v-show="step3" style="text-align: center;margin-top: 20px">
          <span>设置手机号</span>
          <el-input
            style="width: 50%"
            placeholder="请输入内容"
            v-model="input.suserphone"
            clearable>
          </el-input>
          <el-button style="margin-top: 12px;" @click="next">下一步</el-button>


        </div>
        <!-- 第4步-->
        <div v-show="step4" style="text-align: center;margin-top: 20px">
          <span>登录密码</span>
          <el-input
            style="width: 50%"
            placeholder="请输入内容"
            v-model="input.spassword"
            show-password
            clearable>
          </el-input>
          <el-button style="margin-top: 12px;" @click="next">下一步</el-button>


        </div>
        <!-- 成功-->
        <div v-show="step5" style="text-align: center;margin-top: 20px">
          <el-button type="success" style="margin-top: 12px;" @click="">注册成功</el-button>
        </div>
        <!-- 失败-->
        <div v-show="step6" style="text-align: center;margin-top: 20px">
          <el-button type="danger" style="margin-top: 12px;" @click="">注册失败</el-button>
        </div>

      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: "JoinUsMoudule",
  data() {
    return {

      //进度条
      step1: true,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      step6: false,
      // 完成状态
      success: true,
      error: false,

      active: 0,
      title: '加入我们',
      input: {sname: '', susername: '', suserphone: '', spassword: ''}
    };
  },

  methods: {
    next() {
      if (this.active++ > 5) this.active = 0;
      switch (this.active) {
        case 1:
          this.step1 = false;
          this.step2 = true;
          break;
        case 2:
          this.step2 = false;
          this.step3 = true;
          break;
        case 3:
          this.step3 = false;
          this.step4 = true;

          break;
        case 4:
          //信息输入完成执行addStore
          this.$http.post("http://localhost:8080/store/add", this.input).then(res => {
            console.log(res.data)
            if (res.data) {
              this.step4 = false;
              this.step5 = true;
            } else {
              this.step4 = false;
              this.step6 = true;
              this.success = false;
              this.error = true;
            }

          });


      }
    }
  }
}
</script>

<style scoped>
#bg {
  background: url('../assets/homeImgs/bg1.jpg') center;
  height: 100px;
  width: 100%;
  align-content: center;
}
</style>
