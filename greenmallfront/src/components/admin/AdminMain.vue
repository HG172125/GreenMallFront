<template>

  <div id="bg">
    <div>
      <el-row>
        <el-col :span="8">
          <div style="color:Transparent;" class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light"><h2 style="margin-top: 10px;margin-left: 48%"> 管理员后台</h2></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-button @click="out" style="margin-left: 80%;margin-top: 10px" type="danger" plain>退出</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div>

      <el-tabs type="border-card">
        <el-tab-pane>
          <span style="font-size: 20px;height: 100px" slot="label"><i class="el-icon-date"></i>首页信息</span>
          <el-row>
            <el-col style="height: 300px" :span="12">
              <div style="line-height: 100px;margin-left: 20px" class="grid-content bg-purple">
                <el-row>
                  <el-col :span="8">
                    <div class="grid-content bg-purple">
                      <h3>日订单量：<span style="font-size: 50px;color: red">{{ this.dayOrder }}</span></h3>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-purple-light">
                      <h3>月订单量：<span style="font-size: 50px;color: red">{{ this.mouthOrder }}</span></h3>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-purple">
                      <h3>总订单量：<span style="font-size: 50px;color: red">{{ this.yearOrder }}</span></h3>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col style="height:300px;" :span="12">
              <div style="line-height: 100px;margin-left: 20px" class="grid-content bg-purple">

                <el-row :gutter="20">
                  <el-col :span="4">
                    <div class="grid-content bg-purple">
                      <h3>近日销量：</h3>
                    </div>
                  </el-col>
                  <el-col :span="20">
                    <div class="grid-content bg-purple">
                      <div style="height: 300px;width: 800px" id="main"></div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col style="height: 500px;background: #FFFFFF" :span="12">
              <div class="grid-content bg-purple">
                <div class="grid-content bg-purple-light">
                  <div style="height: 500px;width: 800px" id="main1"></div>
                </div>

              </div>
            </el-col>
            <el-col style="height: 500px" :span="12">
              <div class="grid-content bg-purple">
                <el-row>
                  <el-col :span="12">
                    <div class="grid-content bg-purple">
                      <div>
                        <h2>全站热门商品</h2>
                      </div>
                      <div>
                        <el-table
                          :data="hotGoods"
                          height="450"
                          border
                          style="width: 270px">
                          <el-table-column
                            prop="goods_name"
                            label="商品名称">
                          </el-table-column>
                          <el-table-column
                            prop="goods_state"
                            label="商品销量">
                          </el-table-column>
                        </el-table>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                      <div>
                        <h2>热门店铺</h2>
                      </div>
                      <div>
                        <el-table
                          :data="hotStore"
                          height="450"
                          border
                          style="width: 270px">
                          <el-table-column
                            prop="store_name"
                            label="店铺名称">
                          </el-table-column>
                          <el-table-column
                            prop="store_state"
                            label="店铺销量">
                          </el-table-column>
                        </el-table>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>

          </el-row>
        </el-tab-pane>
        <el-tab-pane>
          <span style="font-size: 20px" slot="label"><i class="el-icon-date"></i>用户管理</span>
          <el-table
            height="800"
            :data="userData.filter(data => !search1 || data.user_name.toLowerCase().includes(search1.toLowerCase()))"
            style="width: 100%">
            <el-table-column
              label="注册时间"
              prop="user_time">
            </el-table-column>
            <el-table-column
              label="姓名"
              prop="user_name">
            </el-table-column>
            <el-table-column
              label="电话"
              prop="user_phone">
            </el-table-column>
            <el-table-column
              label="地址"
              prop="user_address">
            </el-table-column>
            <el-table-column
              label="状态"
              prop="user_state">
            </el-table-column>
            <el-table-column
              align="right">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search1"
                  size="medium"
                  placeholder="输入关键字搜索"/>
              </template>
              <template slot-scope="scope">
                <el-popconfirm
                  @confirm="disableUser(scope.row)"
                  title="确认禁用该用户？">
                  <el-button
                    slot="reference"
                    size="mini"
                    type="danger"
                    @click="">禁用
                  </el-button>
                </el-popconfirm>
                <el-popconfirm
                  @confirm="ableUser(scope.row)"
                  title="确认启用该用户？">
                  <el-button
                    slot="reference"
                    size="mini"
                    type="success"
                    @click="">启用
                  </el-button>
                </el-popconfirm>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane>
          <span style="font-size: 20px" slot="label"><i class="el-icon-date"></i>商家管理</span>
          <el-table
            height="800"
            :data="storeData.filter(data => !search2 || data.store_name.toLowerCase().includes(search2.toLowerCase()))"
            style="width: 100%">
            <el-table-column
              label="注册时间"
              prop="store_time">
            </el-table-column>
            <el-table-column
              label="店铺名称"
              prop="store_name">
            </el-table-column>
            <el-table-column
              label="店铺所有人"
              prop="store_username">
            </el-table-column>
            <el-table-column
              label="商品在售数量"
              prop="store_number">
            </el-table-column>
            <el-table-column
              label="店铺状态"
              prop="store_state">
            </el-table-column>
            <el-table-column
              align="right">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search2"
                  size="medium"
                  placeholder="输入关键字搜索"/>
              </template>
              <template slot-scope="scope">
                <el-popconfirm
                  @confirm="disableStore(scope.row)"
                  title="确认禁用该店铺？">
                  <el-button
                    slot="reference"
                    size="mini"
                    type="danger"
                    @click="">禁用
                  </el-button>
                </el-popconfirm>
                <el-popconfirm
                  @confirm="ableStore(scope.row)"
                  title="确认启用该店铺？">
                  <el-button
                    slot="reference"
                    size="mini"
                    type="success"
                    @click="">启用
                  </el-button>
                </el-popconfirm>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane>
          <span style="font-size: 20px" slot="label"><i class="el-icon-date"></i>产品管理</span>
          <el-table
            height="800"
            :data="goodsData.filter(data => !search3 || data.store_name.toLowerCase().includes(search3.toLowerCase()))"
            style="width: 100%">
            <el-table-column
              label="注册时间"
              prop="goods_time">
            </el-table-column>
            <el-table-column
              label="商品名称"
              prop="goods_name">
            </el-table-column>
            <el-table-column
              label="所属店铺"
              prop="store_name">
            </el-table-column>
            <el-table-column
              label="商品照片"
              width="180">
              <template slot-scope="scope">
                <img style="margin-left: 10px;height: 100px;width: 100px" :src="scope.row.goods_photo">
              </template>
            </el-table-column>
            <el-table-column
              label="商品价格"
              prop="goods_prices">
            </el-table-column>
            <el-table-column
              label="剩余库存"
              prop="goods_stock">
            </el-table-column>
            <el-table-column
              label="商品状态"
              prop="goods_state">
            </el-table-column>
            <el-table-column
              align="right">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search3"
                  size="medium"
                  placeholder="输入关键字搜索"/>
              </template>
              <template slot-scope="scope">
                <el-popconfirm
                  @confirm="downGoods(scope.row)"
                  title="确定下架商品？">
                  <el-button
                    slot="reference"
                    size="mini"
                    type="danger"
                    @click="">下架
                  </el-button>
                </el-popconfirm>
                <el-popconfirm
                  @confirm="upGoods(scope.row)"
                  title="确定上架商品？">
                  <el-button
                    slot="reference"
                    size="mini"
                    type="success"
                    @click="">上架
                  </el-button>
                </el-popconfirm>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane>
          <span style="font-size: 20px" slot="label"><i class="el-icon-date"></i>订单列表</span>
          <el-table
            height="800"
            :data="orderData.filter(data => !search4 || data.user_name.toLowerCase().includes(search4.toLowerCase()))"
            style="width: 100%">
            <el-table-column
              label="订单状态"
              prop="order_state">
            </el-table-column>
            <el-table-column
              label="订单id"
              prop="order_id">
            </el-table-column>
            <el-table-column
              label="用户名称"
              prop="user_name">
            </el-table-column>
            <el-table-column
              label="商品名称"
              prop="goods_name">
            </el-table-column>
            <el-table-column
              label="所属店铺"
              prop="store_name">
            </el-table-column>
            <el-table-column
              label="商品照片"
              width="180">
              <template slot-scope="scope">
                <img style="margin-left: 10px;height: 100px;width: 100px" :src="scope.row.goods_photo">
              </template>
            </el-table-column>
            <el-table-column
              label="商品价格"
              prop="goods_prices">
            </el-table-column>
            <el-table-column
              label="商品数量"
              prop="order_goodsnumber">
            </el-table-column>
            <el-table-column
              align="right">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search4"
                  size="medium"
                  placeholder="输入用户名搜索"/>
              </template>
              <template slot-scope="scope">
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>

    </div>
  </div>

</template>

<script>

import * as echarts from 'echarts/core';
import {GridComponent} from 'echarts/components';
import {LineChart} from 'echarts/charts';
import {UniversalTransition} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import {PieChart} from 'echarts/charts';
import {LabelLayout} from 'echarts/features';


export default {
  name: "AdminMain",
  data() {
    return {
      search1: '',
      search3: '',
      search4: '',
      search2: '',
      dayOrder: '',
      mouthOrder: '',
      yearOrder: '',
      hotGoods: [],
      hotStore: [],
      ordertype: [],
      userData: [],
      storeData: [],
      goodsData: [],
      orderData: [],


    }
  },
  methods: {
    //退出按钮
    out() {
      this.$router.push("/index")
    },

    //上下架商品
    upGoods(row) {
      console.log("上架" + row.goods_id)

      var goods = {goods_state: '上架', goods_id: row.goods_id}
      this.$http.post('http://localhost:8080/goods/updateState', goods).then(res => {
        if (res.data == true) {
          this.$message({
            type: 'success',
            message: '上架成功'
          });
          this.$http.post('http://localhost:8080/goods/findAllGoods').then(res => {
            this.goodsData = res.data
          })
        } else {
          this.$message({
            type: 'error',
            message: '上架失败'
          });
        }
      })

    },
    downGoods(row) {
      console.log("下架" + row.goods_id)

      var goods = {goods_state: '下架', goods_id: row.goods_id}
      this.$http.post('http://localhost:8080/goods/updateState', goods).then(res => {
        if (res.data == true) {
          this.$message({
            type: 'success',
            message: '下架成功'
          });
          this.$http.post('http://localhost:8080/goods/findAllGoods').then(res => {
            this.goodsData = res.data
          })
        } else {
          this.$message({
            type: 'error',
            message: '下架失败'
          });
        }
      })
    },

    //禁用店铺
    disableStore(row) {
      console.log("禁用店铺：" + row.store_id)

      var store = {store_id: row.store_id, store_state: '禁用'}
      this.$http.post('http://localhost:8080/store/updateStoreState', store).then(res => {
        if (res.data == true) {
          this.$message({
            type: 'success',
            message: '禁用成功'
          });

          this.$http.post('http://localhost:8080/store/findAllStore').then(res => {
            this.storeData = res.data
          })
        } else {
          this.$message({
            type: 'error',
            message: '禁用失败'
          });
        }
      })

    },
    //
    ableStore(row) {
      console.log("启用店铺：" + row.store_id)

      var store = {store_id: row.store_id, store_state: '启用'}
      this.$http.post('http://localhost:8080/store/updateStoreState', store).then(res => {
        if (res.data == true) {
          this.$message({
            type: 'success',
            message: '启用成功'
          });

          this.$http.post('http://localhost:8080/store/findAllStore').then(res => {
            this.storeData = res.data
          })
        } else {
          this.$message({
            type: 'error',
            message: '启用失败'
          });
        }
      })
    },


    //  启用用户
    ableUser(row) {
      console.log("启用用户：" + row.user_id)
      var user = {user_id: row.user_id, user_state: '启用'}
      this.$http.post('http://localhost:8080/user/updateUserState', user).then(res => {
        if (res.data == true) {
          this.$message({
            type: 'success',
            message: '启用成功'
          });
          //  刷新列表
          this.$http.post('http://localhost:8080/user/findAllUser').then(res => {
            this.userData = res.data
          })
        } else {
          this.$message({
            type: 'error',
            message: '启用失败'
          });
        }
      })

    },
    //  禁用用户
    disableUser(row) {
      console.log("禁用用户：" + row.user_id)
      var user = {user_id: row.user_id, user_state: '禁用'}
      this.$http.post('http://localhost:8080/user/updateUserState', user).then(res => {
        if (res.data == true) {
          this.$message({
            type: 'success',
            message: '禁用成功'
          });
          //  刷新列表
          this.$http.post('http://localhost:8080/user/findAllUser').then(res => {
            this.userData = res.data
          })
        } else {
          this.$message({
            type: 'error',
            message: '禁用失败'
          });
        }
      })

    },
    //  管理员删除商品
    //   deleGoods(row){
    //     console.log(row.goods_id)
    //     console.log(row.goods_name)
    //     this.$http.post('http://localhost:8080/goods/delete',row).then(res => {
    //       console.log(res.data)
    //       if (res.data==true){
    //         this.$message({
    //           type: 'success',
    //           message: '删除成功'
    //         });
    //       //  刷新列表
    //         this.$http.post('http://localhost:8080/goods/findAllGoods').then(res => {
    //           this.goodsData = res.data
    //         })
    //       }else {
    //         this.$message({
    //           type: 'error',
    //           message: '删除失败'
    //         });
    //       }
    //     })
    //   },

    //  删除用户
    //   handleDelete(row){
    //     console.log(row.user_id)
    //     this.$http.post('http://localhost:8080/user/deleteUserByUid',row).then(res => {
    //       if(res.data==true){
    //         this.$http.post('http://localhost:8080/user/findAllUser').then(res => {
    //           this.userData = res.data
    //         })
    //         this.$message({
    //           type: 'success',
    //           message: '删除成功'
    //         });
    //       }else {
    //         this.$message({
    //           type: 'error',
    //           message: '删除失败'
    //         });
    //       }
    //
    //
    //     })
    //   }
  },
  created() {
    echarts.use([TitleComponent,
      TooltipComponent,
      LegendComponent,
      PieChart,
      CanvasRenderer,
      LabelLayout, GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
  },
  mounted() {
    this.$http.post('http://localhost:8080/goods/findAllGoods').then(res => {
      this.goodsData = res.data
    })

    this.$http.post('http://localhost:8080/order/findAllOrderInfo').then(res => {
      this.orderData = res.data
    })

    this.$http.post('http://localhost:8080/store/findAllStore').then(res => {
      this.storeData = res.data
    })
    this.$http.post('http://localhost:8080/order/findDaysOrder').then(res => {
      this.dayOrder = res.data
    })
    this.$http.post('http://localhost:8080/order/findMouthOreder').then(res => {
      this.mouthOrder = res.data
    })
    this.$http.post('http://localhost:8080/order/findYearsOrder').then(res => {
      this.yearOrder = res.data
    })
    this.$http.post('http://localhost:8080/user/findAllUser').then(res => {
      this.userData = res.data
    })
    //饼图
    this.$http.post('http://localhost:8080/order/findAllOrderState').then(res => {
      this.ordertype = res.data

      var chartDom = document.getElementById('main1');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: '订单状态分析',
          subtext: '',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '订单状态分析',
            type: 'pie',
            radius: '50%',
            data: [
              {value: res.data[0].order_goodsnumber, name: res.data[0].order_state},
              {value: res.data[1].order_goodsnumber, name: res.data[1].order_state},
              {value: res.data[2].order_goodsnumber, name: res.data[2].order_state},
              {value: res.data[3].order_goodsnumber, name: res.data[3].order_state},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      myChart.setOption(option);
    })

    //折线图表
    this.$http.post('http://localhost:8080/order/findWeeksOrder').then(res => {
      console.log(res.data)
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        xAxis: {
          type: 'category',
          data: [res.data[6].order_time, res.data[5].order_time, res.data[4].order_time, res.data[3].order_time, res.data[2].order_time, res.data[1].order_time, res.data[0].order_time]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [res.data[6].order_goodsnumber, res.data[5].order_goodsnumber, res.data[4].order_goodsnumber, res.data[3].order_goodsnumber, res.data[2].order_goodsnumber, res.data[1].order_goodsnumber, res.data[0].order_goodsnumber],
            type: 'line'
          }
        ]
      };
      myChart.setOption(option);
    })

    this.$http.post("http://localhost:8080/goods/findAllHotGoods").then(res4 => {
      this.hotGoods = res4.data
    })
    this.$http.post("http://localhost:8080/store/findHotStore").then(res4 => {
      this.hotStore = res4.data
    })

  }

}
</script>

<style>
#bg {
  background: url('../../assets/homeImgs/bg2.jpg') center;
  height: 900px;
  width: 100%;
}
</style>
