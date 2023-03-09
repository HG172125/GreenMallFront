<template>
  <div>

    <el-container>
      <div style="margin-top:20px;height: auto;background: cadetblue;width: 100%">
        <!--      展示标题-->
        <div
          style="margin-top: 10px;height: 100px;background: black"
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
        <!--        内容展示-->
        <el-row
          style="height:auto"
          :gutter="20">
          <el-col :span="2">
            <div class="grid-content bg-purple"><span style="color:Transparent ">1</span></div>
          </el-col>
          <el-col
            style="background: red"
            :span="20">
            <div
              class="grid-content bg-purple">
              <!--        商品展示-->
              <div v-for="(item,index) in good"
                   :key="index"
                   style="width: 23%;float: left;margin:12px">
                <el-card>
                  <img style="height: 150px" src="../assets/homeImgs/productbig13.jpg">
                  <div style="padding: 14px;">
                    <div><span>名称:{{ item.id }}</span></div>
                    <div><span>价格:{{ item.ginfo }}</span></div>
                    <span></span>
                    <div>
                      <el-button type="text" class="button">加入购物车</el-button>
                      <el-button @click="getId(item.id)" type="text" class="button">详情</el-button>
                      <el-button type="text" class="button">下单</el-button>
                    </div>
                  </div>
                </el-card>
              </div>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple"><span style="color:Transparent ">1</span></div>
          </el-col>
        </el-row>
      </div>
    </el-container>


  </div>

</template>

<script>
export default {
  name: "ShowGoods",

  data() {
    return {

      newGoods: [],
      hotGoods: [],
      good: [
        {id: 1, img: require('../assets/homeImgs/productbig13.jpg'), ginfo: 'pingguo'},
        {id: 2, img: require('../assets/homeImgs/1.jpg'), ginfo: 'guo'},
        {id: 3, img: "../assets/homeImgs/productbig13.jpg", ginfo: 'pingguo'},
        {id: 1, img: require('../assets/homeImgs/productbig13.jpg'), ginfo: 'pingguo'},
        {id: 2, img: require('../assets/homeImgs/1.jpg'), ginfo: 'guo'},
        {id: 1, img: require('../assets/homeImgs/productbig13.jpg'), ginfo: 'pingguo'},
        {id: 2, img: require('../assets/homeImgs/1.jpg'), ginfo: 'guo'},
        {id: 3, img: "../assets/homeImgs/productbig13.jpg", ginfo: 'pingguo'},
      ]

    }
  },

  methods: {
    getId(id) {
      console.log(id)
    }
  },
  mounted() {

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
