<template>

  <div>
    <div style="">
      <!--第一行布局-->
      <el-row style="color: Transparent;height: 80px;background-color: Transparent;" :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple">5</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-image :src="require('../../assets/homeImgs/biao.jpg')"
                      style="height: 79px"></el-image>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="4">
          <div
            style="margin-top: 20px"
            class="grid-content bg-purple-light">
            <!--          搜索框-->
            <el-input v-model="selectGoods" placeholder="请输入内容"></el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div
            style="margin-top: 20px"
            class="grid-content bg-purple">
            <!--          搜索按钮-->
            <el-button @click="select" type="primary" icon="el-icon-search">搜索</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <div style="margin-top: 20px">
              <el-button round icon="el-icon-user-solid" type="success">{{ username }}</el-button>
              <!--            退出登录状态-->
              <el-button
                @click="exit"
                type="danger" round>退出
              </el-button>
            </div>
          </div>
        </el-col>
      </el-row>
      <!--    导航栏组件-->
      <UserNavBar></UserNavBar>

    </div>
    <div id="bg">
      <div style="font-size: 40px;margin-top: 20px;color: #606266;margin-left: 45%">搜索结果</div>
    </div>
    <div style="min-height: 400px;width: 80%;background: #FFCC33;margin-left: 10%;overflow: hidden">
      <!--        商品展示-->
      <div>
        <div v-for="(item,index) in showGoods"
             :key="index"
             style="width: 18%;float: left;margin:14px">
          <el-card shadow="hover">
            <img style="height: 150px" :src="item.goods_photo">
            <div style="padding: 14px;">
              <div><span>名称:{{ item.goods_name }}</span></div>
              <div><span style="color:red;">￥： {{ item.goods_prices }}</span></div>
              <span></span>
              <div>
                <el-button
                  @click="addCart(item.goods_id,item.store_id,item.goods_name,item.goods_photo,item.goods_prices,item.goods_description,item.goods_stock)"
                  type="text" class="button">加入购物车
                </el-button>
                <el-button
                  @click="toGoodsInfo(item.goods_id,item.store_id,item.goods_name,item.goods_photo,item.goods_prices,item.goods_description,item.goods_stock)"
                  type="text" class="button">详情
                </el-button>
                <el-button
                  @click="addOrder(item.goods_id,item.goods_name,item.goods_photo,item.goods_prices,item.goods_stock)"
                  type="text" class="button">下单
                </el-button>
              </div>
            </div>
          </el-card>
        </div>
      </div>

      <!--     下单弹窗-->
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

    <div>
      <Explain></Explain>
      <Footer></Footer>
    </div>

  </div>
</template>
<script>
import Footer from "../Footer";
import UserHeader from "./UserHeader";
import Explain from "../Explain";
import UserNavBar from "./UserNavBar";

export default {
  name: "UserSelectGoods",
  components: {Footer, UserHeader, Explain, UserNavBar},
  data() {
    return {
      // 下单弹窗显示
      outerVisible: false,
      innerVisible: false,

      //  下单表单
      orderForm: {formname: '', formphono: '', formprice: '', formstock: ''},
      cartForm: {formname: '', formphono: '', formprice: '', formstock: ''},
      addCartVisible: false,
      cartNumber: '',
      password: '',
      user: {user_name: '', user_password: ''},
      //修改库存
      upGoods: {goods_id: '', goods_stock: ''},
      //  订单信息
      goodsnumber: '',
      orderData: {user_id: '', goods_id: '', order_goodsnumber: '', order_time: '', order_state: ''},

      //搜索内容
      showGoods: [],
      //搜索栏
      selectGoods: '',
      goods: {goods_name: '', goods_stock: ''},
      username: sessionStorage.getItem('user_name'),
    }
  },
  methods: {


    //下单操作
    addOrder(goods_id, goods_name, goods_photo, goods_prices, goods_stock) {
      if (sessionStorage.getItem('user_id') == null) {
        this.$confirm('您还未登录！！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
      } else {
        this.orderData.goods_id = goods_id
        this.orderData.user_id = sessionStorage.getItem("user_id")

        this.orderForm.formname = goods_name
        this.orderForm.formphono = goods_photo
        this.orderForm.formprice = goods_prices
        this.orderForm.formstock = goods_stock
        console.log("库存" + goods_stock)
        this.outerVisible = true
      }

    },
    //添加订单信息
    finishOrder() {

      this.user.user_name = sessionStorage.getItem("user_name")
      this.user.user_password = this.password
      //获取当前时间
      var aData = new Date();
      this.orderData.order_time = aData.getFullYear() + "-" + (aData.getMonth() + 1) + "-" + aData.getDate() + "-" + aData.getHours();
      this.orderData.order_state = '已下单'
      this.orderData.order_goodsnumber = this.goodsnumber

      console.log(this.orderData.goods_id)
      console.log(this.orderData.user_id)
      console.log(this.orderData.order_goodsnumber)
      console.log(this.orderData.order_time)
      console.log(this.orderData.order_state)
      //验证密码 添加订单
      this.$http.post("http://localhost:8080/user/login", this.user).then(res => {
        if (res.data != '') {
          this.$http.post("http://localhost:8080/order/insert", this.orderData).then(reso => {
            if (reso.data == true) {
              //修改后goods库存
              this.upGoods.goods_id = this.orderData.goods_id
              this.upGoods.goods_stock = parseInt(this.orderForm.formstock) - parseInt(this.goodsnumber)
              this.$http.post("http://localhost:8080/goods/updateStock", this.upGoods).then(resou => {
                if (resou.data == true) {
                  console.log("up suu")
                } else {
                  console.log("up err")
                }
              })
              this.$message({
                type: 'success',
                message: '下单成功!'
              });
              //验证通过关闭弹窗
              this.closeOuterVisible()
              this.innerVisible = false
            } else {
              this.$message({
                type: 'error',
                message: '添加失败!'
              });
            }
          })
          console.log("验证密码")
          console.log(res.data)


        } else {
          this.$message({
            type: 'error',
            message: '密码错误!'
          });
        }
      })

    },
    checkForm() {
      console.log("input" + this.goodsnumber)
      if (parseInt(this.goodsnumber) < parseInt('1') || parseInt(this.goodsnumber) > parseInt(this.orderForm.formstock)) {
        this.$message({
          type: 'error',
          message: '输入有效数量'
        });
      } else {
        this.innerVisible = true
      }
    },

    //搜索信息
    select() {
      if (this.selectGoods == '') {
        this.$message({
          type: 'error',
          message: '输入信息!'
        });
      } else {
        this.goods.goods_name = "%" + this.selectGoods + "%"
        this.$http.post("http://localhost:8080/goods/select", this.goods).then(res => {
          this.showGoods = res.data
          sessionStorage.setItem("select", this.selectGoods)
          this.selectGoods = ''
        })
        console.log("开始搜索")
      }
    },
    /**
     * 退出登录
     */
    exit() {
      sessionStorage.removeItem('user_name')
      sessionStorage.removeItem('user_id')
      console.log(sessionStorage.getItem('user_name'))
      this.$router.push('/index')
    },

    //跳转详情页
    toGoodsInfo(gid, sid, goods_name, goods_photo, goods_prices, goods_description, goods_stock) {

      sessionStorage.setItem("goods_id", gid)
      sessionStorage.setItem("store_id", sid)
      sessionStorage.setItem("goods_name", goods_name)
      sessionStorage.setItem("goods_photo", goods_photo)
      sessionStorage.setItem("goods_prices", goods_prices)
      sessionStorage.setItem("goods_description", goods_description)
      sessionStorage.setItem("goods_stock", goods_stock)
      console.log("uid")
      console.log(sessionStorage.getItem("user_id"))

      if (sessionStorage.getItem("user_id") == null) {
        this.$router.push('/index/goodsinfo')
      } else {
        this.$router.push('/user/goodsInfo')
      }
    },
    addCart(goods_id, store_id, goods_name, goods_photo, goods_prices, goods_description, goods_stock) {
      if (sessionStorage.getItem('user_id') == null) {
        this.$confirm('您还未登录！！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
      } else {
        this.addCartVisible = true
        console.log("开始加购")
        this.cartForm.formname = goods_name
        this.cartForm.formphono = goods_photo
        this.cartForm.formprice = goods_prices
        this.cartForm.formstock = goods_stock
      }

    },
    //弹窗取消清除数据
    closeOuterVisible() {
      this.outerVisible = false
      this.password = ''
      this.goodsnumber = ''
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
    this.goods.goods_name = "%" + sessionStorage.getItem("select") + "%"
    console.log(this.goods.goods_name)

    this.$http.post("http://localhost:8080/goods/select", this.goods).then(res => {
      this.showGoods = res.data
    })

  }

}
</script>

<style scoped>
#bg {
  background: url('../../assets/homeImgs/bg1.jpg') center;
  height: 100px;
  width: 100%;
  align-content: center;
}
</style>
