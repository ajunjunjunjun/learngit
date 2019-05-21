<template>
    <div>
        <h1>我是登陆页面</h1>
        <p>用户名：<input type="text" v-model="userid" /></p>
        <p>密码：<input type="password" v-model="pwd"/></p>
        <button @click="login()">登陆</button>
    </div>
</template>
<script>
import bus from "./../bus.js";
export default {
    data(){
        return { userid:'',pwd:''}
    },
    
    methods:{
        login(){
            console.log(this.$route);
            this.$http({
                url:"http://www.520mg.com/member/index_login.php",
                method:"POST",
                withCredentials:true,
                data:`fmdo=login&dopost=login&userid=${this.userid}&pwd=${this.pwd}`
            })
            .then(
                res=>{
                    if(res.data.status==1){
                            // 告诉其他页面登录状态
                            bus.islog=true;
                            // redirect 从哪儿来的，如果有从哪儿来的信息就跳转到哪儿
                            if(this.$route.query.redirect){
                                this.$router.push(this.$route.query.redirect);
                            }else{
                                // 如果用户是直接进入就跳转到首页
                                this.$router.push("/")
                            }
                    }else{
                        alert(res.data.msg)
                    }
                },
            err=>{
                console.log(err);
            } )
           
        }
    }
}
</script>
<style>

</style>
