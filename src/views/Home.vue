<template>
  <div class="home">
    <!-- 顶部栏 -->
    <div class="bar-header row">
      <a href="" class="logo pa">
        <img width="32" src="./../assets/images/logo.png" alt="">
        </a>
      <div class="col">
        <input type="text" class="bo"> 
      </div> 
      <span class="btn pa">用户</span>
    </div>
    <!-- 次顶部栏 -->
    <div class="sub-header scollH no-wrap">
      <!-- 渲染tabs -->
      <span class="pa" v-for="item in tabs" :key="item.page_id">{{item.name}}</span>
    </div>
    <!-- 内容区域 -->
    <div class="full has-subHeader">
      <swiper v-bind:gallery="gallery" v-if="gallery.length"></swiper>
      <div class="row">
        <div class="col" v-for="item in subNav1" :key="item.material_id">
        <img :src="item.img_url" width="100%" alt="">
      </div>
      </div>
      <div class="row">
        <div class="col" v-for="item in subNav2" :key="item.material_id">
        <img :src="item.img_url" width="100%" alt="">
      </div>
      </div>
       <div class="row" v-for="item in list2" :key="item.name">
         <div class="col-30">
           <img width="100%" :src="item.pic" alt="">
         </div>
         <div class="col">
           <p>{{item.title}}</p>
           <p>{{item.price}}</p>
         </div>
       </div>

       <hr>
       <div class="row" v-for="item in list2" :key="item.stadiumId">
         <div class="col-30">
           <img width="100%" :src="item.imageList[0].imageUrl" alt="">
         </div>
         <div class="col">
           <p>{{item.stadiumItemName}}</p>
       
         </div>
       </div>
    <div>{{user.name}}-{{user.tel}}-{{user.email}}</div>
    <div>{{user.ctitle}}</div>
    <div>{{user.add}}</div>
    <div>{{user.des}}</div>
    <div><img :src="user.pic" width="100" alt=""></div>
    <hr>

      </div>
    <!-- 3调用swiper -->
    <!-- v-if="gallery.length" 有长度有数据才显示 -->
   
  </div>
</template>
<script>
//1导入swiper组件
import swiper from './../components/swiper'
export default {
  name:'home',
  data(){
    return{
      //定义tabs数据
      tabs:[],
      //定义gallery数据 幻灯片图片信息
      gallery:[],
      subNav1:[],
      subNav2:[],
      user:{},
      list:[],
      list2:[],
    }
  },
  created(){
    this.getPage();
    this.getUser();
    this.getWatch();
    this.getList();
  },
  methods:{
    getPage(){
      this.$http.get("https://biger.applinzi.com/page.php")
      .then(res=>{
        // console.log(res.data);
        //2当ajax获取数据后重新赋值tabs
        this.tabs=res.data.data.tabs;
        this.gallery = res.data.data.data.sections[0].body.items;
        this.subNav1 = res.data.data.data.sections[1].body.items;
        this.subNav2 = res.data.data.data.sections[2].body.items;
        // console.log(this.gallery)
      })
    },
    getUser(){
      this.$http.get("http://www.mi.com/user")
      .then(res=>{
        console.log(res.data);
        this.user = res.data;
      })
    },
    getWatch(){
      this.$http.get("http://m.liyimall.com/watch")
      .then(res=>{
        this.list = res.data.data;
      })
    },
    getList(){
      this.$http.get("http://www.1yd.com")
      .then(res=>{
        this.list2 = res.data.data.dataList;
        console.log(this.list2);
      })
    }
  },
  //注册swiper组件
  components:{
    swiper,
  }
}
</script>
<style lang="less">

</style>
