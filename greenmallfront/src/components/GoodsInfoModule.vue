<template>
  <div>
    <div id="divImg">
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-button @click="back" style="margin: 25px" type="primary" round>返回</el-button>
          </div>
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
              <el-button @click="addCart" type="primary" plain>加入购物车</el-button>
              <el-button @click="beginOrder" type="success" plain>下单</el-button>
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
            <el-button @click="cancelCheck">取 消</el-button>
            <el-button @click="finishOreder" type="primary">确认</el-button>
          </div>
        </el-dialog>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancelOrder">取 消</el-button>
          <el-button @click="confirmOrder" type="primary">确认</el-button>
        </div>
      </el-dialog>

      <!--      加购物车弹窗-->
      <el-dialog
        title="添加购物车" center
        :visible.sync="addCartVisible">
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <img style="height: 150px" :src="cartForm.formphono">
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <!--      下单表单-->
              <el-form :inline="true" class="demo-form-inline">
                <el-form-item style="width: 200px" label="商品名称">
                  <span>{{ cartForm.formname }}</span>
                </el-form-item>
                <el-form-item style="width: 200px" label="商品单价">
                  <span>{{ cartForm.formprice }}</span>
                </el-form-item>
                <el-form-item label="商品数量">
                  <el-input v-model="cartNumber" :placeholder="'剩余数量'+cartForm.formstock"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>

        <div slot="footer" class="dialog-footer">
          <el-button @click="closeAddCart">取 消</el-button>
          <el-button @click="confirmAddCart" type="primary">确认</el-button>
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

      //  商品展示数据
      goodsData: {goods_name: '', goods_photo: '', goods_prices: '', goods_stock: '', goods_description: ''},

      //商品详细信息
      goodsInfo: [],

      // 下单弹窗显示
      outerVisible: false,
      innerVisible: false,
      addCartVisible: false,
      cartNumber: '',

      user: {user_name: '', user_password: ''},
      //  下单表单
      orderForm: {formname: '', formphono: '', formprice: '', formstock: ''},
      cartForm: {formname: '', formphono: '', formprice: '', formstock: ''},

      //  支付密码
      password: '',
      //修改库存
      upGoods: {goods_id: '', goods_stock: ''},

      //  订单信息
      goodsnumber: '',
      orderData: {user_id: '', goods_id: '', order_goodsnumber: '', order_time: '', order_state: ''},


    }
  },
  methods: {
    //  返回按钮  返回上一级
    back() {
      this.$router.back()
    },

    //   点击下单
    beginOrder() {
      if (sessionStorage.getItem('user_id') == null) {
        this.$confirm('您还未登录！！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
      } else {
        this.outerVisible = true
        console.log("开始下单")
        this.orderForm.formname = this.goodsData.goods_name
        this.orderForm.formphono = this.goodsData.goods_photo
        this.orderForm.formprice = this.goodsData.goods_prices
        this.orderForm.formstock = this.goodsData.goods_stock
      }
    },

    //  确认订单
    confirmOrder() {
      console.log("input" + this.goodsnumber)
      if (this.goodsnumber == '' || parseInt(this.goodsnumber) < parseInt('1') || parseInt(this.goodsnumber) > parseInt(this.orderForm.formstock)) {
        this.$message({
          type: 'error',
          message: '输入有效数量'
        });
      } else {
        this.innerVisible = true
      }
    },

    //  取消订单
    cancelOrder() {
      this.goodsnumber = ''
      this.outerVisible = false

    },
    //  验证密码确认订单
    finishOreder() {
      //验证密码信息
      this.user.user_name = sessionStorage.getItem("user_name")
      this.user.user_password = this.password
      //订单信息
      this.orderData.goods_id = sessionStorage.getItem("goods_id")
      this.orderData.user_id = sessionStorage.getItem("user_id")
      this.orderData.order_goodsnumber = this.goodsnumber
      this.orderData.order_state = "已下单"
      var aData = new Date();
      this.orderData.order_time = aData.getFullYear() + "-" + (aData.getMonth() + 1) + "-" + aData.getDate() + "-" + aData.getHours();

      this.$http.post("http://localhost:8080/user/login", this.user).then(res => {
        if (res.data != '') {
          this.$http.post("http://localhost:8080/order/insert", this.orderData).then(reso => {
            if (reso.data == true) {
              //添加订单成功
              this.$message({
                type: 'success',
                message: '下单成功!'
              });

              //修改后goods库存
              this.upGoods.goods_id = sessionStorage.getItem("goods_id")
              this.upGoods.goods_stock = parseInt(this.orderForm.formstock) - parseInt(this.goodsnumber)

              //关闭弹窗
              this.cancelOrder()
              this.cancelCheck()

              this.$http.post("http://localhost:8080/goods/updateStock", this.upGoods).then(resou => {
                if (resou.data == true) {
                  console.log("up suu")
                } else {
                  console.log("up err")
                }
              })

            } else {
              this.$message({
                type: 'error',
                message: '添加失败!'
              });
            }
          })

        } else {
          this.$message({
            type: 'error',
            message: '密码错误!'
          });
        }
      })


    },
    //  取消密码验证
    cancelCheck() {
      this.password = ''
      this.innerVisible = false

    },

    //添加购物车
    addCart() {
      if (sessionStorage.getItem('user_id') == null) {
        this.$confirm('您还未登录！！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
      } else {
        this.addCartVisible = true
        console.log("开始加购")
        this.cartForm.formname = this.goodsData.goods_name
        this.cartForm.formphono = this.goodsData.goods_photo
        this.cartForm.formprice = this.goodsData.goods_prices
        this.cartForm.formstock = this.goodsData.goods_stock
      }

    },

    //  取消添加购车
    closeAddCart() {
      this.addCartVisible = false
      this.cartNumber = ''

    },

    // 确认添加购物车
    confirmAddCart() {
      if (this.cartNumber == '' || parseInt(this.cartNumber) < parseInt('1') || parseInt(this.cartNumber) > parseInt(this.cartForm.formstock)) {
        this.$message({
          type: 'error',
          message: '输入有效数量'
        });
      } else {
        //  添加购物车
        this.orderData.goods_id = sessionStorage.getItem("goods_id")
        this.orderData.user_id = sessionStorage.getItem("user_id")
        this.orderData.order_goodsnumber = this.cartNumber
        this.orderData.order_state = "已加购"
        var aData = new Date();
        this.orderData.order_time = aData.getFullYear() + "-" + (aData.getMonth() + 1) + "-" + aData.getDate() + "-" + aData.getHours();
        this.$http.post("http://localhost:8080/order/insert", this.orderData).then(res => {
          if (res.data == true) {
            //添加购物车成功
            this.$message({
              type: 'success',
              message: '添加购物车成功!'
            });
            this.closeAddCart()
          } else {
            this.$message({
              type: 'error',
              message: '添加购物车失败!'
            });
          }
        })
      }
    },


  },
  mounted() {
    this.goodsData.goods_name = sessionStorage.getItem("goods_name")
    this.goodsData.goods_photo = sessionStorage.getItem("goods_photo")
    this.goodsData.goods_prices = sessionStorage.getItem("goods_prices")
    this.goodsData.goods_stock = sessionStorage.getItem("goods_stock")
    this.goodsData.goods_description = sessionStorage.getItem("goods_description")
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
