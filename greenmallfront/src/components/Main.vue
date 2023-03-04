<template>
  <div style="width: 1500px;height: auto;background-color: aqua;margin: auto">
    <el-container>
      <!--      侧边栏-->
      <el-aside style="background-color: antiquewhite;height: 500px;width: 250px">Aside</el-aside>
      <el-main>
        <!--        轮播图-->
        <div>
          <el-carousel style="background-color: red;height: 400px">
            <el-carousel-item
              style="height: auto"
              v-for="(item,index) in imgs" :key="index">
              <el-image :src="item" fit="fill"></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-main>
    </el-container>
    <el-container>
      <!--      底部容器-->
      <el-main>
        <div style="background-color: green;width: 1000px;margin: auto;height: 500px">

        </div>
      </el-main>

    </el-container>

  </div>
</template>

<script>
export default {
  name: "Main",
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
