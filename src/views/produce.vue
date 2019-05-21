<template>
    <div>
        <span @click="$router.go(-1)">返回</span> |
        <span @click="$router.push('/')">回到首页</span>
        <h1>我是产品页面</h1>
        <h1>名称:{{$route.params.id}}</h1>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>
