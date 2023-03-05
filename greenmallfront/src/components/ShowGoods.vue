<template>
  <div>

    <el-container>
      <div style="margin: 20px">
        <!--      展示标题-->
        <div
          style="margin-top: 30px"
          id="Goods">
          <el-row style="color: transparent">
            <el-col :span="8">
              <div class="grid-content bg-purple">1</div>
            </el-col>
            <el-col :span="8">
              <div
                style="text-align: center"
                class="grid-content bg-purple-light">
                <div style="font-size: 40px;margin-top: 20px;color: #606266">热门产品</div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">1</div>
            </el-col>
          </el-row>
        </div>

        <div>
          <el-row
            style="height: 1000px"
            :gutter="20">
            <el-col :span="4">
              <div class="grid-content bg-purple"><span style="color:Transparent ">1</span></div>
            </el-col>
            <el-col
              style="background: red"
              :span="16">
              <div
                class="grid-content bg-purple">
                <!--        商品展示-->
                <div v-for="goo in good"
                     style="width: 29%;float: left;margin: 20px">
                  <el-card>
                    <img style="height: 200px" src="../assets/homeImgs/productbig13.jpg">
                    <div style="padding: 14px;">
                      <span>q</span>
                      <div>
                        <el-button type="text" class="button">加入购物车</el-button>
                        <el-button type="text" class="button">详情</el-button>
                      </div>
                    </div>
                  </el-card>
                </div>

              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple"><span style="color:Transparent ">1</span></div>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-container>
    <el-container>
      <div style="margin: 20px">
        <!--      展示标题-->
        <div
          style="margin-top: 30px"
          id="Goods">
          <el-row style="color: transparent">
            <el-col :span="8">
              <div class="grid-content bg-purple">1</div>
            </el-col>
            <el-col :span="8">
              <div
                style="text-align: center"
                class="grid-content bg-purple-light">
                <div style="font-size: 40px;margin-top: 20px;color: #606266">蔬菜</div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">1</div>
            </el-col>
          </el-row>
        </div>

        <div>
          <el-row
            style="height: 1000px"
            :gutter="20">
            <el-col :span="4">
              <div class="grid-content bg-purple"><span style="color:Transparent ">1</span></div>
            </el-col>
            <el-col
              style="background: red"
              :span="16">
              <div
                class="grid-content bg-purple">
                <!--        商品展示-->
                <div v-for="goo in good"
                     style="width: 29%;float: left;margin: 20px">
                  <el-card>
                    <img style="height: 200px" src="../assets/homeImgs/productbig13.jpg">
                    <div style="padding: 14px;">
                      <span>q</span>
                      <div>
                        <el-button type="text" class="button">加入购物车</el-button>
                        <el-button type="text" class="button">详情</el-button>
                      </div>
                    </div>
                  </el-card>
                </div>

              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple"><span style="color:Transparent ">1</span></div>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-container>
    <el-container>
      <div style="margin: 20px">
        <!--      展示标题-->
        <div
          style="margin-top: 30px"
          id="Goods">
          <el-row style="color: transparent">
            <el-col :span="8">
              <div class="grid-content bg-purple">1</div>
            </el-col>
            <el-col :span="8">
              <div
                style="text-align: center"
                class="grid-content bg-purple-light">
                <div style="font-size: 40px;margin-top: 20px;color: #606266">蔬菜</div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">1</div>
            </el-col>
          </el-row>
        </div>
        <!--    商品展示-->
        <div>
          <el-row
            style="height: 1000px"
            :gutter="20">
            <el-col :span="4">
              <div class="grid-content bg-purple"><span style="color:Transparent ">1</span></div>
            </el-col>
            <el-col
              style="background: red"
              :span="16">
              <div
                class="grid-content bg-purple">
                <!--        商品展示-->
                <div v-for="goo in good"
                     style="width: 29%;float: left;margin: 20px">
                  <el-card>
                    <img style="height: 200px" src="../assets/homeImgs/productbig13.jpg">
                    <div style="padding: 14px;">
                      <span>{{ goo.ginfo }}</span>
                      <div>
                        <el-button type="text" class="button">加入购物车</el-button>
                        <el-button type="text" class="button">详情</el-button>
                      </div>
                    </div>
                  </el-card>
                </div>

              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple"><span style="color:Transparent ">1</span></div>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-container>
  </div>

</template>

<script>
export default {
  name: "ShowGoods",

  data() {
    return {
      good: [
        {id: 1, img: require('../assets/homeImgs/productbig13.jpg'), ginfo: 'pingguo'},
        {id: 2, img: require('../assets/homeImgs/1.jpg'), ginfo: 'guo'},
        {id: 3, img: "../assets/homeImgs/productbig13.jpg", ginfo: 'pingguo'},
        {id: 1, img: require('../assets/homeImgs/productbig13.jpg'), ginfo: 'pingguo'},
        {id: 2, img: require('../assets/homeImgs/1.jpg'), ginfo: 'guo'},
        {id: 3, img: "../assets/homeImgs/productbig13.jpg", ginfo: 'pingguo'},
        {id: 1, img: require('../assets/homeImgs/productbig13.jpg'), ginfo: 'pingguo'},
        {id: 2, img: require('../assets/homeImgs/1.jpg'), ginfo: 'guo'},
        {id: 3, img: "../assets/homeImgs/productbig13.jpg", ginfo: 'pingguo'},

      ]

    }
  }
}
</script>

<style scoped>
#Goods {
  background: url('../assets/homeImgs/bg1.jpg') center;
  height: 100px;
  width: 100%;
  align-content: center;
}
</style>
