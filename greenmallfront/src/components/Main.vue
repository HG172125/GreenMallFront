<template>
  <div style="width: 1500px; background-color:indianred;height: 1500px;margin: auto">
    <el-container>
      <!--      侧边栏-->
      <!--      <el-aside style="background-color: #FFFFFF;height: 500px;width: 150px">-->
      <!--        &lt;!&ndash;       侧边导航栏&ndash;&gt;-->
      <!--        <el-menu-->
      <!--          style="background-color: #F2F6FC;margin-top: 40px"-->
      <!--          default-active="2"-->
      <!--          class="el-menu-vertical-demo">-->
      <!--          <el-submenu-->
      <!--            index="1">-->
      <!--            <template slot="title">-->
      <!--              <i class="el-icon-more"></i>-->
      <!--              <span>蔬菜</span>-->
      <!--            </template>-->
      <!--            <el-submenu index="1-1">-->
      <!--              <template slot="title">叶类</template>-->
      <!--              <el-menu-item index="1-1-1">白菜</el-menu-item>-->
      <!--            </el-submenu>-->
      <!--          </el-submenu>-->

      <!--          <el-submenu-->
      <!--            index="2">-->
      <!--            <template slot="title">-->
      <!--              <i class="el-icon-more"></i>-->
      <!--              <span>瓜果</span>-->
      <!--            </template>-->
      <!--            <el-submenu index="2-1">-->
      <!--              <template slot="title">叶类</template>-->
      <!--              <el-menu-item index="2-1-1">白菜</el-menu-item>-->
      <!--            </el-submenu>-->
      <!--          </el-submenu>-->
      <!--        </el-menu>-->
      <!--      </el-aside>-->
      <el-main>
        <!--        轮播图-->
        <div>
          <el-carousel style="height: 425px">
            <el-carousel-item
              style="height: auto"
              v-for="(item,index) in imgs" :key="index">
              <el-image
                style="height: 100%;width: 100%"
                :src="item" fit="fill"></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-main>
    </el-container>
    <el-container>
      <!--      底部容器-->

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
