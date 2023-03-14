// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入echart
import ECharts from "vue-echarts";
import 'echarts'

//引入Axios前端请求
import axios from "axios";


Vue.config.productionTip = false
//全局使用elementui
Vue.use(ElementUI);
//修改内部 $http为axios
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({//vue全局实例
  el: '#app',//vue全局实例作用范围
  router,//注册路由对象
  components: {App},//注册app组件
  template: '<App/>'
})
