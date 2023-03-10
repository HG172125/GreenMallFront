<template>
  <div>
    <div id="divImg">
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="8">
          <div
            style="text-align: center"
            class="grid-content bg-purple-light">
            <div style="font-size: 40px;margin-top: 20px;color: #606266">我的账户</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">1</div>
        </el-col>
      </el-row>
    </div>
    <div id="bg1">
      <el-row>
        <el-col :span="12">
          <div style="height: 500px" class="grid-content bg-purple">
            <!--          左侧照片展示-->
            <el-card style="height: 400px;width: 400px;margin-left: 50%;margin-top: 100px">
              <img width="360" height="360" :src="goodsData.goods_photo" class="image">
            </el-card>

          </div>
        </el-col>
        <el-col :span="12">
          <div style="height: 500px" class="grid-content bg-purple-light">
            <!--          右侧操作-->
            <div style="font-size: 20px;height: 100px;margin-left: 100px;margin-top:100px;line-height: 100px"><span
              style="font-size: 30px">{{ goodsData.goods_name }}</span></div>
            <div style="font-size: 20px;height: 100px;margin-left: 100px;line-height: 100px">价格：￥<span
              style="font-size: 20px;color: red">{{ goodsData.goods_prices }}</span></div>
            <div style="font-size: 20px;height: 150px;margin-left: 100px;line-height: 100px">库存:<span
              style="font-size: 16px;color:cornflowerblue;margin-right: 10px">{{ goodsData.goods_stock }}</span>描述：<span
              style="font-size: 16px">{{ goodsData.goods_description }}</span></div>
            <div style="margin-left: 150px">
              <el-button type="primary" plain>加入购物车</el-button>
              <el-button @click="outerVisible=true" type="success" plain>下单</el-button>
            </div>
          </div>
        </el-col>
      </el-row>

      <!--      下单弹窗-->
      <el-dialog
        title="确认订单" center
        :visible.sync="outerVisible">
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <img style="height: 150px" :src="orderForm.formphono">
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <!--      下单表单-->
              <el-form :inline="true" class="demo-form-inline">
                <el-form-item style="width: 200px" label="商品名称">
                  <span>{{ orderForm.formname }}</span>
                </el-form-item>
                <el-form-item style="width: 200px" label="商品单价">
                  <span>{{ orderForm.formprice }}</span>
                </el-form-item>
                <el-form-item label="购买数量">
                  <el-input v-model="goodsnumber" :placeholder="'剩余数量'+orderForm.formstock"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>

        <el-dialog
          width="30%"
          center
          title="输入密码验证"
          :visible.sync="innerVisible"
          append-to-body>
          <el-input style="width: 50%;margin-left: 25%" placeholder="请输入密码" v-model="password" show-password></el-input>
          <div slot="footer" class="dialog-footer">
            <el-button @click="innerVisible=false">取 消</el-button>
            <el-button type="primary" @click="finishOrder">确认</el-button>
          </div>
        </el-dialog>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeOuterVisible">取 消</el-button>
          <el-button type="primary" @click="checkForm">确认</el-button>
        </div>
      </el-dialog>


    </div>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";

export default {
  name: "GoodsInformation",
  components: {Header, NavBar},

  data() {
    return {

      test: {name: '123', id: 123},
      //  商品展示数据
      goodsData: {goods_name: '', goods_photo: '', goods_prices: '', goods_stock: '', goods_description: ''},

      //商品详细信息
      goodsInfo: [],

      // 下单弹窗显示
      outerVisible: false,
      innerVisible: false,

      user: {user_name: '', user_password: ''},
      //  下单表单
      orderForm: {formname: '', formphono: '', formprice: '', formstock: ''},
      //  支付密码
      password: '',
      //修改库存
      upGoods: {goods_id: '', goods_stock: ''},

      //  订单信息
      goodsnumber: '',
      orderData: {user_id: '', goods_id: '', order_goodsnumber: '', order_time: '', order_state: ''},


    }
  },
  methods: {},
  mounted() {
    this.goodsData.goods_name = sessionStorage.getItem("goods_name")
    this.goodsData.goods_photo = sessionStorage.getItem("goods_photo")
    this.goodsData.goods_prices = sessionStorage.getItem("goods_prices")
    this.goodsData.goods_stock = sessionStorage.getItem("goods_stock")
    this.goodsData.goods_description = sessionStorage.getItem("goods_description")
    console.log(sessionStorage.getItem("goods_id"))
    console.log(this.goodsData.goods_description)
  }

}
</script>

<style scoped>
#bg {
  background: url('../assets/homeImgs/bg1.jpg') center;
  height: 80px;
  width: 100%;
  align-content: center;
}

#bg1 {
  background: url('../assets/homeImgs/bg2.jpg') center;
  height: 700px;
  width: 100%;
  align-content: center;
}

#divImg {
  background: url("../assets/homeImgs/bg1.jpg") center;
  height: 100px;
  width: 100%;
  align-content: center;
  color: Transparent;
}
</style>
