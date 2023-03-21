<template>

  <div>

    <div>
      <div id="main">tubaio</div>
    </div>
    <h1>nihaotest</h1>
  </div>

</template>

<script>
import StoreLogin from "./store/StoreLogin";
import JoinUs from "./JoinUs";
import Header from "./Header";


import * as echarts from 'echarts/core';
import {GridComponent} from 'echarts/components';
import {LineChart} from 'echarts/charts';
import {UniversalTransition} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';

export default {
  name: "Test",
  components: {StoreLogin, JoinUs, Header},

  created() {
    echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
  },
  mounted() {

    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };
    myChart.setOption(option);
  }


}
</script>

<style>
#main {
  height: 600px;
  width: 600px;
}

</style>

