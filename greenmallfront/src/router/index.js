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
import StoreMain from "../components/store/StoreMain";
import UserAbout from "../components/user/UserAbout";
import JoinUs from "../components/JoinUs";
import StoreLogin from "../components/store/StoreLogin";
import GoodsInfo from "../components/GoodsInfo";
import UserGoodsInfo from "../components/user/UserGoodsInfo";
import UserJoin from "../components/user/UserJoin";
import UserSelectGoods from "../components/user/UserSelectGoods";
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: "/store/main"},
    {path: '/index', component: Index},
    {path: '/test', component: Test},
    {path: '/user/main', component: UserMain},
    {path: '/user/select', component: UserSelectGoods},
    {path: '/user/set', component: UserSet},
    {path: '/user/join', component: UserJoin},
    {path: '/user/goodsInfo', component: UserGoodsInfo},
    {path: '/selectgoods', component: SelectGoods},
    {path: '/showgoods2', component: ShowGoods2},
    {path: '/index/about', component: About},
    {path: '/index/join', component: JoinUs},
    {path: '/store/main', component: StoreMain},
    {path: '/store/login', component: StoreLogin},
    {path: '/user/about', component: UserAbout},
    {path: '/index/goodsinfo', component: GoodsInfo},


  ]
})
