<template>
  <div style="width: 1500px;background:#F2F6FC;margin: auto">


    <!--        轮播图-->
    <BannerModule></BannerModule>

    <!--        商品展示-->
    <ShowGoods></ShowGoods>
    <!--        -->
    <Explain></Explain>


  </div>
</template>

<script>
import ShowGoods from "./ShowGoods";
import Explain from "./Explain";
import BannerModule from "./BannerModule";

export default {
  name: "Main",
  components: {Explain, ShowGoods, BannerModule},
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
