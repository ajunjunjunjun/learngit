<template>
    <div>
        <div class="container">
            <div class="header row">
                <button @click="$router.go(-1)">返回</button>
                <div class="col"></div>
                <button>分享</button>
            </div>
        <swiper :gallery="gallery" v-if="gallery.length"></swiper>
         <h3>{{product_info.name}}</h3>
         <p v-html="product_info.product_desc"></p>
        <h2>价格</h2>
        <button @click="addToCart(product)">加入购物车</button>
        </div>
    </div>
</template>
<script>
import swiper from "./../../components/swiper"
import {mapMutation} from 'vuex';
// import func from '../../vue-temp/vue-editor-bridge';
export default {
        data(){
            return {
                product_info:{},
                galleryView:[],
                product:{},
            }
        },
        created(){
            this.getProduct();
        },
        methods:{
            ...mapMutations(['addToCart']),
            getProduct(){
                this.$http.get("https://biger.applinzi.com/product.php?id="+this.$route.params.id)
                .then(res=>{
                    console.log(res.data);
                    this.product_info = res.data.data.data.product_info;
                    this.galleryView = res.data.data.data.view_content.galleryView.galleryView
                    this.product = res.data.data.goods_info[0];
                    this.product.num=1;
                    // 当前商品
                })
            }
        },
        components:{swiper},
        computed:{
            "gallery":function(){
                return this.galleryView.map(item=>({img_url:item}))
            }
        }
}
</script>
<style lang="less" scoped>
    .header{
        position: absolute;
        width: 100%;
        height: .44rem;
        top: 0;
    
    button{
        border-radius: 0.3rem;
        background: rgba(0, 0, 0, .3);
        border: none;
        color: #fff;
        width: .3rem;
        height: .3rem;
        font-size: .1rem;
        margin: 0.07rem;
    }
    }
</style>
        
