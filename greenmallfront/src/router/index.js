import Vue from 'vue'
import Router from 'vue-router'
//引入Index路由
import Index from '../components/Index'
import Test from "../components/Test";
import UserMain from "../components/user/UserMain";
import UserSet from "../components/user/UserSet";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: "/user/set"},
    {path: '/index', component: Index},
    {path: '/test', component: Test},
    {path: '/user', component: UserMain},
    {path: '/user/set', component: UserSet},

  ]
})
