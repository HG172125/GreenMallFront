<template>
  <div>
    <el-container>
      <div id="bg">
        <div style="font-size: 40px;margin-top: 20px;color: #606266;margin-left: 45%">{{ title }}</div>

        <div style="margin-left:18%;height: auto;width: 1200px;background: #FFCC33;margin-top: 40px">

          <el-carousel
            style="height: 800px"
            indicator-position="outside">
            <el-carousel-item
              style="height: 800px"
              v-for="item in imgs" :key="item">

              <el-image
                style="height: 100%"
                fit="fit"
                :src="item"></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </el-container>
    <!--    轮播图实现-->


  </div>
</template>

<script>
import Header from "./Header";

export default {
  name: "About",
  components: {Header},

  data() {
    return {
      title: '关于我们',
      imgs: [
        require('../assets/homeImgs/slider7.jpg'),
        require('../assets/homeImgs/slider8.jpg'),
        require('../assets/homeImgs/slider9.jpg'),
        require('../assets/homeImgs/slider10.jpg'),
        require('../assets/homeImgs/slider11.jpg'),
        require('../assets/homeImgs/slider12.jpg'),
      ]
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
