import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { isContext } from 'vm'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods:[{name:'小米8'},{name:'小米9'},{name:'小米电视42'}]
  },
  mutations: {
    initGoods:function(state,data){
      state.goods = data;
    },
    addToCart:function(state,data){
      var ind =null;
      // 如果 state里面的goods 里面有data
      state.goods.forEach((item,index)=>{
        if(item.name==data.name){
          ind = index;
          //查出是第几个重复的
          state.goods[index].num=parseInt(state.goods[index].num);
          state.goods[index].num++
          // console.log(item.num,"item.num")
          // num++
          if(item.num>item.buy_linit){
            alert("最多购买"+item.buy_limit+"件")
            state.goods[index].num = state.goods[index].buy_limit
            //如果超过了最大购买数量 就等于最大购买数量
    }
      state.goods.splice(index,1,item);
      // 出发getter更新
  }
})
      // 如果没有重复就添加    
      if(ind==null){
        // console.log(data,"data");
        state.goods.unshift(data);
      }
    }
  },
  actions: {
    getGoods:function(context){
      // 获取接口数据
      axios.get("http://biger.applinzi.com/cart.php")
      .then(res=>{
        // 调用·mutations 初始化goods
        context.commit("initGoods",res.data)
      })
    }
  },
  getters:{
    cartNum:function(state){
      var n = 0;
      state.goods.forEach(iem=>{
        n+=parseInt(item.num);
      })
      // console.log(n)
      return n;
    }
  }
})
