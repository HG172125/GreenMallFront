<template>
  <div style="width: 1500px; background-color:indianred;margin: auto">
    <el-container>
      <el-main>
        <!--        轮播图-->
        <div>
          <el-carousel style="height: 100%;height: 100%">
            <el-carousel-item
              v-for="(item,index) in imgs" :key="index">
              <el-image
                style="height: 100%;width: 100%"
                :src="item" fit="fill"></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>

        <!--        商品展示-->
        <ShowGoods></ShowGoods>
        <!--        -->
        <Explain></Explain>
      </el-main>


    </el-container>
  </div>
</template>

<script>
import ShowGoods from "./ShowGoods";
import Explain from "./Explain";

export default {
  name: "Main",
  components: {Explain, ShowGoods},
  data() {
    return {
      imgs: [
        require('../assets/homeImgs/slider1.jpg'),
        require('../assets/homeImgs/slider2.jpg'),
        require('../assets/homeImgs/slider3.jpg'),
        require('../assets/homeImgs/slider4.jpg'),
      ]
    }
  }
}
</script>

<style scoped>

</style>
