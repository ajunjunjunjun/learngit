<template>
  <div id="app full">
    <keep-alive include="category">
      <!-- 缓存组件 -->
	   <router-view class="full has-tabs"/>
	  </keep-alive>
	  <div class="row tac tabs">
      <router-link class="col" to="/">首页</router-link>
      <router-link class="col" to="/category">分类</router-link>
      <router-link class="col" to="/cart">购物车({{cartNum}})</router-link>
      <router-link class="col" to="/user">个人中心</router-link>
    </div>
    

  </div>
</template>

<style lang="less">
	.about.router-link-active{color: #ff3300};
	.router-link-exact-active{color: #f30};

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }


</style>
<script>

import { mapGetters,mapActions } from 'vuex';
export default {
  created(){
    //dangvue创建完毕调用 getgoods获取商品信息
    this.getGoods();
    this.$http.get("http://www.mi.com/pro")
    .then(res=>{
      console.log(res,data)
    })
  },
  computed:{
    // 把vuex里面的getter属性，转换为vue组件里面的computed属性
    ...mapGetters(["carNum"])
  },
  methods:{
    // 把vuex里面的action方法转换为vue组件里面的方法
    ...mapActions(["getGoods"])
  }
}
</script>