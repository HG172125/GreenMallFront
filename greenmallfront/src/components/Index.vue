<template>
  <div>
    <Header></Header>
    <div style="width: 1500px;height: auto;background-color: aqua;margin: auto">
      <el-container>
        <!--      侧边栏-->
        <el-aside style="background-color: antiquewhite;height: 400px;width: 250px">Aside</el-aside>
        <el-main>
          <!--        轮播图-->
          <div>
            <el-carousel style="background-color: red;height: 350px">
              <el-carousel-item v-for="(item,index) in imgs" :key="index">
                <el-image :src="item" fit="contain"></el-image>
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
    <Footer></Footer>
  </div>

</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "index",
  components: {Header, Footer},

  data() {
    return {
      imgs: [
        require('../assets/homeImgs/1.jpg'),
        require('../assets/homeImgs/2.jpg'),
        require('../assets/homeImgs/3.jpg'),
        require('../assets/homeImgs/4.jpg'),
      ]
    }
  }
}
</script>

<style scoped>

</style>
