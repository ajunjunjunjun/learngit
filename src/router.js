import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
// import Produce from './views/Produce.vue'
import Arg from './views/Arg.vue'
import Detail from './views/Detail.vue'
import User from './views/User.vue'
import Login from './views/Login.vue'
import bus from './bus.js'
import Cart from './views/cart/Cart.vue'
import Product from './views/product/Product.vue'
import Register from './views/register/register.vue'
Vue.use(Router)
const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias:["/home","/main"]
     
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/reg',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      name: 'user',
      // meta:{reAuth:true},
      //添加路由信息，代表当前路由需要权限
      component: User
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Produce
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      children:[
        {path:"arg",component:Arg},
        {path:"detail",component:Detail},
        {path:"",redirect:'arg'}
      ]
    }
  ]
})
//导航守卫：当我们要进入或者离开某个页面时，需要额外操作（进入用户页面发现没有登录，就让他跳转到
// 登录页面，如果登陆了，就进入用户页面）
router.beforeEach(function(to,from,next){
  //to 要去哪个页面
  //from 从哪个页面来
  //最终去哪个页面
  console.log(to,from)
  if(to.meta.reAuth){ //如果当前页面需要权限才能进入
    //检查是否登录了，如果登陆了，next，没有跳转到登录页面
    if(bus.islog){
      next();//如果登录就进入用户页面 
    }else{
      next("/login?redirect-"+to.path)//如果没有的管理 进入登陆页面
    }
  }else{
    next();
    //next必须被调用 否则页面不会切换
  }
  
 
})
export default router;