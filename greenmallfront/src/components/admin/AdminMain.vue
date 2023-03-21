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
            <el-col style="height: 300px;background:green" :span="12">
              <div style="line-height: 100px;margin-left: 20px;background: #FFCC33" class="grid-content bg-purple">
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
              <div style="line-height: 100px;margin-left: 20px;background: #FFCC33" class="grid-content bg-purple">

                <el-row :gutter="20">
                  <el-col :span="4">
                    <div class="grid-content bg-purple">
                      <h3>近日销量</h3>
                    </div>
                  </el-col>
                  <el-col :span="20">
                    <div class="grid-content bg-purple">
                      <div style="height: 300px;width: 800px;background: #C4E1C5" id="main"></div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col style="height: 400px" :span="12">
              <div class="grid-content bg-purple">
                <el-row>
                  <el-col :span="12">
                    <div class="grid-content bg-purple"><h2>热门分类</h2></div>
                  </el-col>
                  <el-col :span="12">
                    <div class="grid-content bg-purple-light"><h2>热门店铺</h2></div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col style="height: 400px;background: #FFFFFF" :span="12">
              <div class="grid-content bg-purple">
                <el-row>
                  <el-col :span="12">
                    <div class="grid-content bg-purple">
                      <h3>用户活跃数：<span style="font-size: 50px;color: red">{{  }}</span></h3>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                      <h3>商家活跃数：<span style="font-size: 50px;color: red">{{  }}</span></h3>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane>
          <span style="font-size: 20px" slot="label"><i class="el-icon-date"></i>用户管理</span>

        </el-tab-pane>
        <el-tab-pane>
          <span style="font-size: 20px" slot="label"><i class="el-icon-date"></i>商家管理</span>
          用户管理
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


export default {
  name: "AdminMain",
  data() {
    return {
      dayOrder: '',
      mouthOrder: '',
      yearOrder: '',
      hotGoods: [],
      hotStore: [],


    }
  },
  methods: {
    //退出按钮
    out() {
      this.$router.push("/index")
    },
  },
  created() {
    echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
  },
  mounted() {


    this.$http.post('http://localhost:8080/order/findDaysOrder').then(res => {
      console.log(res.data)
      this.dayOrder = res.data
    })
    this.$http.post('http://localhost:8080/order/findMouthOreder').then(res => {
      console.log(res.data)
      this.mouthOrder = res.data
    })
    this.$http.post('http://localhost:8080/order/findYearsOrder').then(res => {
      console.log(res.data)
      this.yearOrder = res.data
    })
    //图表
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
