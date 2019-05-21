<template>
  <div id="app full">
    <keep-alive include="category">
      <!-- 缓存组件 -->
    <router-view class="full has-tabs"/>
    </keep-alive>
    <div  class="row tac tabs">
      <router-link class="col" to="/">首页</router-link>      
      <router-link class="col" to="/category">分类</router-link> 
      <router-link class="col" to="/cart">购物车({{cartNum}})</router-link> 
      <router-link class="col" to="/user">个人中心</router-link>
    </div>
  </div>
</template>
<script>
import {mapGetters,mapActions} from "vuex";
export default {
  created(){
    //  当vue创建完毕调用 getGoods获取商品信息
    this.getGoods();
    this.$http.get("http://www.mi.com/pro")
    .then(res=>{
      console.log(res.data);
    })
  },
  computed:{
    // 把vuex里面的getter属性，转换为vue组件里面computed属性
    ...mapGetters(["cartNum"])
  },
  methods:{
    // 把vuex里面的action方法转换为vue组件里面的方法
    ...mapActions(["getGoods"])
  }
}
</script>


<style lang="less">
.about.router-link-active{ color:#f30;}
.router-link-exact-active{color:#f30;}
</style>
