import Vue from 'vue'
import Router from 'vue-router'
//引入Index路由
import Index from '../components/Index'
import Test from "../components/Test";
import UserMain from "../components/user/UserMain";
import UserSet from "../components/user/UserSet";
import SelectGoods from "../components/SelectGoods";
import ShowGoods2 from "../components/ShowGoods2";
import About from "../components/About";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: "test"},
    {path: '/index', component: Index},
    {path: '/test', component: Test},
    {path: '/user', component: UserMain},
    {path: '/user/set', component: UserSet},
    {path: '/selectgoods', component: SelectGoods},
    {path: '/showgoods2', component: ShowGoods2},
    {path: '/about', component: About},


  ]
})
