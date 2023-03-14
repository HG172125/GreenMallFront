<template>
  <el-container>
    <div style="background: #F2F6FC; margin-left: 10%;width: 1500px;margin-top: 20px">
      <el-row style="height: 150px">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-row>
              <el-col
                style="width: 20%"
                :span="12">
                <div class="grid-content bg-purple">
                  <img
                    style="margin-top: 60px"
                    src="../assets/homeImgs/shipping1.jpg">
                </div>
              </el-col>
              <el-col
                style="margin-top:50px"
                :span="12">
                <div class="grid-content bg-purple-light">
                  <div><span style="font-size: larger">免运费</span></div>
                  <div style="margin-top: 10px"><span>订单总价超过88元免运费</span></div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <el-row>
              <el-col
                style="width: 20%"
                :span="12">
                <div class="grid-content bg-purple">
                  <img
                    style="margin-top: 60px"
                    src="../assets/homeImgs/shipping2.jpg">
                </div>
              </el-col>
              <el-col
                style="margin-top:50px"
                :span="12">
                <div class="grid-content bg-purple-light">
                  <div><span style="font-size: larger">联系我们</span></div>
                  <div style="margin-top: 10px"><span>24*7小时内可联系我们</span></div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-row>
              <el-col
                style="width: 20%"
                :span="12">
                <div class="grid-content bg-purple">
                  <img
                    style="margin-top: 60px"
                    src="../assets/homeImgs/shipping3.jpg">
                </div>
              </el-col>
              <el-col
                style="margin-top:50px"
                :span="12">
                <div class="grid-content bg-purple-light">
                  <div><span style="font-size: larger">12天退货</span></div>
                  <div style="margin-top: 10px"><span>订单完成后12天内可退货</span></div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <el-row>
              <el-col
                style="width: 20%"
                :span="12">
                <div class="grid-content bg-purple">
                  <img
                    style="margin-top: 60px"
                    src="../assets/homeImgs/shipping4.jpg">
                </div>
              </el-col>
              <el-col
                style="margin-top:50px"
                :span="12">
                <div class="grid-content bg-purple-light">
                  <div><span style="font-size: larger">安全支付</span></div>
                  <div style="margin-top: 10px"><span>保证您的订单安全</span></div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-container>

</template>

<script>
export default {
  name: "Explain"
}
</script>

<style scoped>

</style>
