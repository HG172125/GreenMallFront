<template>
  <div>
    <div style="text-align: center;background: #F2F6FC">
      <UserNavBar style="margin-left: 35%"></UserNavBar>
    </div>

    <!--    题目-->
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
      <el-tabs style="width: 60%;margin-left: 20%;height: 600px" type="border-card">
        <el-tab-pane>
          <span style="font-size: 20px" slot="label"><i class="el-icon-date"></i> 购物车</span>
          <!--          购物车-->
          <el-table
            height="500"
            :data="shopData.filter(data => !search || data.goods_name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column
              label="时间"
              prop="order_time">
            </el-table-column>
            <el-table-column
              label="名称"
              prop="goods_name">
            </el-table-column>
            <el-table-column
              label="价格"
              prop="goods_prices">
            </el-table-column>
            <el-table-column
              label="数量"
              prop="order_goodsnumber">
            </el-table-column>
            <el-table-column
              align="right">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
              </template>
              <template slot-scope="scope">

                <el-button
                  size="mini"
                  @click="toGoodsInfo(scope.$index, scope.row)">详情
                </el-button>
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleEdit(scope.$index, scope.row)">付款
                </el-button>
                <el-popconfirm
                  @confirm="handleDelete(scope.row)"
                  title="确定删除订单？">
                  <el-button
                    slot="reference"
                    size="mini"
                    type="danger"
                    @click="">删除
                  </el-button>
                </el-popconfirm>
                <!--                <el-button-->
                <!--                  size="mini"-->
                <!--                  type="danger"-->
                <!--                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
              </template>
            </el-table-column>
          </el-table>
          <!--                        付款密码弹窗-->
          <el-dialog
            width="30%"
            center
            title="输入密码验证"
            :visible.sync="innerVisible"
            append-to-body>
            <el-input style="width: 50%;margin-left: 25%" placeholder="请输入密码" v-model="password"
                      show-password></el-input>
            <div slot="footer" class="dialog-footer">
              <el-button @click="innerVisible=false">取 消</el-button>
              <el-button type="primary" @click="confirmOrder">确认</el-button>
            </div>
          </el-dialog>

        </el-tab-pane>
        <el-tab-pane>
          <span style="font-size: 18px" @click="myOrder" slot="label"><i class="el-icon-date"></i> 我的订单</span>

          <el-tabs
            tabPosition="left"
            style="background: #FFCC33" type="card">
            <el-tab-pane>
              <span style="font-size: 18px" slot="label">已下单</span>
              <el-table
                height="500"
                :data="yixiadan.filter(data => !search || data.goods_name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
                <el-table-column
                  label="名称"
                  prop="goods_name">
                </el-table-column>
                <el-table-column
                  label="商家"
                  prop="store_name">
                </el-table-column>
                <el-table-column
                  label="价格"
                  prop="goods_prices">
                </el-table-column>
                <el-table-column
                  label="数量"
                  prop="order_goodsnumber">
                </el-table-column>
                <el-table-column
                  label="手机号"
                  prop="user_phone">
                </el-table-column>
                <el-table-column
                  label="地址"
                  prop="user_address">
                </el-table-column>
                <el-table-column
                  label="订单状态"
                  prop="order_state">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  align="right">
                  <template slot="header" slot-scope="scope">
                    <el-input
                      v-model="search"
                      size="mini"
                      placeholder="输入关键字搜索"/>
                  </template>
                  <template slot-scope="scope">
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>

            <el-tab-pane>
              <span style="font-size: 18px" slot="label">已发货</span>
              <el-table
                height="500"
                :data="yifahuo.filter(data => !search || data.goods_name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
                <el-table-column
                  label="名称"
                  prop="goods_name">
                </el-table-column>
                <el-table-column
                  label="商家"
                  prop="store_name">
                </el-table-column>
                <el-table-column
                  label="价格"
                  prop="goods_prices">
                </el-table-column>
                <el-table-column
                  label="数量"
                  prop="order_goodsnumber">
                </el-table-column>
                <el-table-column
                  label="手机号"
                  prop="user_phone">
                </el-table-column>
                <el-table-column
                  label="地址"
                  prop="user_address">
                </el-table-column>
                <el-table-column
                  label="订单状态"
                  prop="order_state">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  align="right">
                  <template slot="header" slot-scope="scope">
                    <el-input
                      v-model="search"
                      size="mini"
                      placeholder="输入关键字搜索"/>
                  </template>
                  <template slot-scope="scope">
                    <el-popconfirm
                      @confirm="reipt(scope.row)"
                      title="确定收货？">
                      <el-button
                        slot="reference"
                        size="mini"
                        type="success"
                        @click="">收货
                      </el-button>
                    </el-popconfirm>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane>
              <span style="font-size: 18px" slot="label">已完成</span>
              <el-table
                height="500"
                :data="yiwancheng.filter(data => !search || data.goods_name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
                <el-table-column
                  label="名称"
                  prop="goods_name">
                </el-table-column>
                <el-table-column
                  label="商家"
                  prop="store_name">
                </el-table-column>
                <el-table-column
                  label="价格"
                  prop="goods_prices">
                </el-table-column>
                <el-table-column
                  label="数量"
                  prop="order_goodsnumber">
                </el-table-column>
                <el-table-column
                  label="手机号"
                  prop="user_phone">
                </el-table-column>
                <el-table-column
                  label="地址"
                  prop="user_address">
                </el-table-column>
                <el-table-column
                  label="订单状态"
                  prop="order_state">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  align="right">
                  <template slot="header" slot-scope="scope">
                    <el-input
                      v-model="search"
                      size="mini"
                      placeholder="输入关键字搜索"/>
                  </template>
                  <template slot-scope="scope">
                    <!--                    <el-popconfirm-->
                    <!--                      @confirm="deleteOrder(scope.row)"-->
                    <!--                      title="是否删除订单？">-->
                    <!--                      <el-button-->
                    <!--                        slot="reference"-->
                    <!--                        size="mini"-->
                    <!--                        type="danger"-->
                    <!--                        @click="">删除-->
                    <!--                      </el-button>-->
                    <!--                    </el-popconfirm>-->
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane>
          <span style="font-size: 20px" @click="getUserInfo" slot="label"><i class="el-icon-date"></i> 个人信息</span>
          <el-dialog
            title="修改信息"
            :visible.sync="dialogVisible"
            width="30%">
            <el-form label-position="top" label-width="80px" style="width: 400px">
              <el-form-item label="用户名">
                <el-input v-model="updeteUserInfo.user_name"></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input v-model="updeteUserInfo.user_phone"></el-input>
              </el-form-item>
              <el-form-item label="地址">
                <el-input v-model="updeteUserInfo.user_address"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                  <el-button @click="closeUpdete">取 消</el-button>
                  <el-button type="primary" @click="saveUser">确 定</el-button>
                </span>
          </el-dialog>


          <el-descriptions class="margin-top" title="个人信息" :column="3" size="" border>
            <template slot="extra">
              <el-button @click="dialogVisible = true" type="primary" size="small">修改信息</el-button>
            </template>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-user"></i>
                用户名
              </template>
              {{ userInfo.user_name }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                手机号
              </template>
              {{ userInfo.user_phone }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-office-building"></i>
                地址
              </template>
              {{ userInfo.user_address }}
            </el-descriptions-item>
          </el-descriptions>


        </el-tab-pane>
        <el-tab-pane>
          <span style="font-size: 20px" slot="label"><i class="el-icon-date"></i> 密码设置</span>
          <el-form status-icon label-width="100px" class="demo-ruleForm">
            <el-form-item label="旧密码" prop="pass">
              <el-input type="password" v-model="oldPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="checkPass">
              <el-input type="password" v-model="newPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认新密码" prop="checkPass">
              <el-input type="password" v-model="checknewpass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="updeteUserPass" type="primary">提交</el-button>
              <el-button @click="closePass">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>

      </el-tabs>


    </div>

  </div>
</template>

<script>
//引入UserHeade
import UserNavBar from "./UserNavBar";
import UserHeader from "./UserHeader";

export default {
  name: "UserSet",
  components: {
    UserHeader, UserNavBar
  },
  data() {
    return {
      dialogVisible: false,
      innerVisible: false,
      password: '',

      //购物车表格
      search: '',


      ruleForm: {checkPass: '', pass: ''},

      //  用户基本信息
      user: {},
      //购物车数据
      shopData: [],

      orderData: {},
      updateGoods: {},

      yixiadan: [],
      yifahuo: [],
      yiwancheng: [],
      orderUser: {},
      userInfo: {},
      updeteUserInfo: {},
      userPass: {},


      oldPass: '',
      newPass: '',
      checknewpass: '',


    }
  },
  methods: {
    //修改密码
    updeteUserPass() {
      if (this.checknewpass != this.newPass) {
        this.$message({
          type: 'error',
          message: '两次密码不一致'
        });
      } else if (this.oldPass == this.newPass) {
        this.$message({
          type: 'error',
          message: '新密码与旧密码重复'
        });
      } else {
        this.userPass.user_name = sessionStorage.getItem("user_name")
        this.userPass.user_password = this.oldPass
        console.log("旧密码" + this.oldPass)
        this.$http.post("http://localhost:8080/user/login", this.userPass).then(res => {
          console.log("旧密码查询结果" + res.data)
          if (res.data != '') {
            console.log("oldpass suss")
            this.userPass.user_password = this.newPass
            this.userPass.user_id = sessionStorage.getItem("user_id")
            this.$http.post("http://localhost:8080/user/updetePass", this.userPass).then(reo => {
              if (reo.data == true) {
                this.$message({
                  type: 'success',
                  message: '修改成功'
                });
                this.closePass()
              } else {
                this.$message({
                  type: 'error',
                  message: '修改错误'
                });
              }
            })
          } else {
            this.$message({
              type: 'error',
              message: '旧密码错误'
            });
          }
        })
      }

    },
    //清空密码
    closePass() {
      this.newPass = ''
      this.oldPass = ''
      this.checknewpass = ''
    },

    closeUpdete() {
      console.log("取消修改")
      this.updeteUserInfo.user_address = ''
      this.updeteUserInfo.user_name = ''
      this.updeteUserInfo.user_phone = ''
      this.dialogVisible = false
    },

    saveUser() {
      console.log(this.updeteUserInfo)
      this.updeteUserInfo.user_id = sessionStorage.getItem("user_id")
      console.log(this.updeteUserInfo.user_id)

      this.$http.post("http://localhost:8080/user/updete", this.updeteUserInfo).then(res => {
        if (res.data == true) {
          console.log(res.data)
          this.$message({
            type: 'success',
            message: '修改成功'
          });
          this.userInfo.user_address = this.updeteUserInfo.user_address
          this.userInfo.user_name = this.updeteUserInfo.user_name
          this.userInfo.user_phone = this.updeteUserInfo.user_phone
          sessionStorage.setItem('user_name', this.updeteUserInfo.user_name)
          sessionStorage.setItem('user_phone', this.updeteUserInfo.user_phone)
          sessionStorage.setItem('user_address', this.updeteUserInfo.user_address)
          this.closeUpdete()
        } else {
          this.$message({
            type: 'error',
            message: '修改失败'
          });
        }
      })
    },

    //获取用户信息
    getUserInfo() {
      console.log("huoqu用户信息")
      this.userInfo.user_name = sessionStorage.getItem("user_name")
      this.userInfo.user_phone = sessionStorage.getItem("user_phone")
      this.userInfo.user_id = sessionStorage.getItem("user_id")
      this.userInfo.user_address = sessionStorage.getItem("user_address")
    },


    //删除订单
    deleteOrder(row) {
      this.orderUser.order_id = row.order_id
      this.$http.post("http://localhost:8080/order/deleteOrderBid", this.orderUser).then(res => {
        if (res.data == true) {
          console.log("dele sucess")
          this.$message({
            type: 'success',
            message: '删除成功'
          });
          this.$http.post("http://localhost:8080/order/yiwancheng", this.user).then(rese => {
            this.yiwancheng = rese.data
            console.log("yiwancheng")
          })
        } else {
          this.$message({
            type: 'error',
            message: '删除失败'
          });
        }
      })

    },

    //确认收货
    reipt(row) {
      this.orderUser.order_state = '已完成'
      this.orderUser.order_id = row.order_id
      console.log("确认收货")
      this.$http.post("http://localhost:8080/order/updateState", this.orderUser).then(res => {
        if (res.data == true) {
          this.$message({
            type: 'success',
            message: '收货成功'
          });
          this.$http.post("http://localhost:8080/order/yiwancheng", this.user).then(rese => {
            this.yiwancheng = rese.data
            console.log("yiwancheng")
          })

          this.$http.post("http://localhost:8080/order/yifahuo", this.user).then(reso => {
            this.yifahuo = reso.data
            console.log("yifahuo")
          })
        } else {
          this.$message({
            type: 'error',
            message: '收货失败'
          });
        }
      })
    },

    myOrder() {
      console.log("获取我的订单")
      this.$http.post("http://localhost:8080/order/yixiadan", this.user).then(res => {
        this.yixiadan = res.data
        console.log("获取yixiadan")
      })

      this.$http.post("http://localhost:8080/order/yifahuo", this.user).then(reso => {
        this.yifahuo = reso.data
        console.log("yifahuo")
      })
      this.$http.post("http://localhost:8080/order/yiwancheng", this.user).then(rese => {
        this.yiwancheng = rese.data
        console.log("yiwancheng")
      })

    },
    //下单按钮
    handleEdit(index, row) {
      this.innerVisible = true
      this.user.user_name = sessionStorage.getItem("user_name")
      this.orderData.order_id = row.order_id
      this.updateGoods.goods_id = row.goods_id
      this.updateGoods.goods_stock = parseInt(row.goods_stock) - row.order_goodsnumber
      console.log(this.updateGoods.goods_stock + "=" + parseInt(row.goods_stock) + "-" + row.order_goodsnumber)
    },
    //输入密码 确认下单
    confirmOrder() {
      if (this.password == '') {
        this.$message({
          type: 'info',
          message: '输入有效信息'
        });
      } else {
        this.user.user_password = this.password
        console.log(" 验证用户状态")
        this.$http.post("http://localhost:8080/user/login", this.user).then(res => {
          if (res.data != '') {
            console.log(" 验证用户状态成功")
            this.orderData.order_state = '已下单'
            this.$http.post("http://localhost:8080/order/updateState", this.orderData).then(reso => {
              console.log("修改订单状态" + reso.data)
              if (reso.data == true) {
                console.log("修改商品库存")
                this.$http.post("http://localhost:8080/goods/updateStock", this.updateGoods).then(resou => {
                  if (resou.data == true) {
                    console.log("up suu")
                    this.$message({
                      type: 'success',
                      message: '付款成功！'
                    });

                    this.password = ''
                    this.$http.post("http://localhost:8080/order/findCart", this.user).then(res => {
                      this.shopData = res.data
                    })
                    this.innerVisible = false
                  } else {
                    this.$message({
                      type: 'error',
                      message: '付款失败！'
                    });
                    this.password = ''
                    console.log("up err")
                  }
                })
              }
            })

          } else {
            this.$message({
              type: 'error',
              message: '付款失败！'
            });
            this.password = ''
          }
        })
      }

    },


    handleDelete(row) {
      this.orderData.order_id = row.order_id
      this.$http.post("http://localhost:8080/order/deleteOrderBid", this.orderData).then(res => {
        if (res.data == true) {
          console.log("删除成功")
          this.$message({
            type: 'success',
            message: '删除成功'
          });
          this.$http.post("http://localhost:8080/order/findCart", this.user).then(res => {
            this.shopData = res.data
          })
        } else {
          this.$message({
            type: 'error',
            message: '删除失败'
          });
        }
      })
    },
    //跳转详情页
    toGoodsInfo(index, row) {
      sessionStorage.setItem("goods_id", row.goods_id)
      sessionStorage.setItem("store_id", row.store_id)
      sessionStorage.setItem("goods_name", row.goods_name)
      sessionStorage.setItem("goods_photo", row.goods_photo)
      sessionStorage.setItem("goods_prices", row.goods_prices)
      sessionStorage.setItem("goods_description", row.goods_description)
      sessionStorage.setItem("goods_stock", row.goods_stock)
      console.log("uid")
      console.log(sessionStorage.getItem("user_id"))

      if (sessionStorage.getItem("user_id") == null) {
        this.$router.push('/index/goodsinfo')
      } else {
        this.$router.push('/user/goodsInfo')
      }
    },


    /**
     * 修改，删除地址
     *
     */
    addressEdit(index, row) {
      console.log(index, row);
    },
    addressDelete(index, row) {
      console.log(index, row);
    }
  },

  mounted() {
    this.user.user_name = sessionStorage.getItem('user_name'),
      this.user.user_id = sessionStorage.getItem("user_id")
    console.log(sessionStorage.getItem("user_name"))
    console.log(sessionStorage.getItem("user_id"))

    console.log("huoqu用户信息")
    this.userInfo.user_name = sessionStorage.getItem("user_name")
    this.userInfo.user_phone = sessionStorage.getItem("user_phone")
    console.log(this.userInfo.user_name)
    this.userInfo.user_address = sessionStorage.getItem("user_address")
    this.$http.post("http://localhost:8080/order/findCart", this.user).then(res => {
      this.shopData = res.data
    })
    this.$http.post("http://localhost:8080/order/yixiadan", this.user).then(res => {
      this.yixiadan = res.data
      console.log("获取yixiadan")
    })

    this.$http.post("http://localhost:8080/order/yifahuo", this.user).then(reso => {
      this.yifahuo = reso.data
      console.log("yifahuo")
    })
    this.$http.post("http://localhost:8080/order/yiwancheng", this.user).then(rese => {
      this.yiwancheng = rese.data
      console.log("yiwancheng")
    })

  }


}
</script>

<style scoped>
#divImg {
  background: url("../../assets/homeImgs/bg1.jpg") center;
  height: 100px;
  width: 100%;
  align-content: center;
  color: Transparent;
}

#bg1 {
  background: url('../../assets/homeImgs/bg2.jpg') center;
  height: 700px;
  width: 100%;
  align-content: center;
}
</style>
