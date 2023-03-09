<template>
  <div>
    <el-carousel
      height="400px" style="height: 100%;height: 100%;background: #FFCC33">
      <el-carousel-item
        v-for="(item,index) in imgs" :key="index">
        <el-image
          @click="getID(item.id)"
          style="height: 100%;width: 100%"
          :src="item.img" fit="fill"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "BannerModule",
  data() {
    return {
      imgs: [

        {id: '1', img: require('../assets/homeImgs/slider1.jpg')},
        {id: '2', img: require('../assets/homeImgs/slider2.jpg')},
        {id: '4', img: require('../assets/homeImgs/slider3.jpg')},
        {id: '3', img: require('../assets/homeImgs/slider4.jpg')},
        {id: '5', img: require('../assets/homeImgs/slider5.jpg')},
      ]
    }
  },
  methods: {
    //  test
    getID(index) {
      console.log(index)
    }
  }
}
</script>

<style scoped>

</style>
