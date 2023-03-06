<template>
  <div>
    <UserHeader></UserHeader>
    <el-container>
      <div id="bg">
        <div style="font-size: 40px;margin-top: 20px;color: #606266;margin-left: 45%">{{ title }}</div>
      </div>
    </el-container>
    <el-container
      style="background: #FFCC33;width: 1500px;height: auto;margin-left: 10%">


      <!--        商品展示-->
      <div>
        <div v-for="goo in good"
             style="width:18%;float: left;margin-left: 23px;margin-top: 20px">
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


    </el-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../Footer";
import UserHeader from "./UserHeader";

export default {
  name: "UserShowGoods",
  components: {Footer, UserHeader},
  data() {
    return {
      //标题内容
      title: '默认',
      //搜索内容
      good: [
        {id: 1, img: require('../assets/homeImgs/productbig13.jpg'), ginfo: 'pingguo'},
        {id: 2, img: require('../assets/homeImgs/1.jpg'), ginfo: 'guo'},
        {id: 3, img: "../assets/homeImgs/productbig13.jpg", ginfo: 'pingguo'},
        {id: 1, img: require('../assets/homeImgs/productbig13.jpg'), ginfo: 'pingguo'},
        {id: 2, img: require('../assets/homeImgs/1.jpg'), ginfo: 'guo'},
        {id: 3, img: "../assets/homeImgs/productbig13.jpg", ginfo: 'pingguo'},
        {id: 1, img: require('../assets/homeImgs/productbig13.jpg'), ginfo: 'pingguo'},
        {id: 2, img: require('../assets/homeImgs/1.jpg'), ginfo: 'guo'},
        {id: 3, img: "../assets/homeImgs/productbig13.jpg", ginfo: 'pingguo'}
      ]
    }
  },
  methods: {},
  mounted() {

  }

}
</script>

<style scoped>

</style>
