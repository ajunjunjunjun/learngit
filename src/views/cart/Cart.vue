<template>
    <div>
       <h1>购物车</h1>
       <p v-for="(item,index) in goods" :key="index">{{item.name}}--{{item.num}}</p>
    </div>
</template>
<script>
//导入mapstate方法
import {mapState} from 'vuex';
export default{
    computed:{
        ...mapState(["goods"])
    }
}
</script>
<style>

</style>
