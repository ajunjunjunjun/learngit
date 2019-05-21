<template>
    <div>
        <h1>我是个人中心</h1>
        <!-- <h1>{{$route.params.id}}</h1> -->
        <div v-if="user.M_LoginID">
            <p>用户名：{{user.M_LoginID}}</p>
            <p>用户名：{{user.M_Scores}}</p>
            <button @click="logout()">注销</button>
        </div>
        <div v-else @click="$router.push('/login?redirect=/user')">请登陆</div>
    </div>
</template>
<script>
import bus from './../bus'
export default {
    data(){
        return {user:{}}
    },
        created(){
            this.getUser();
        },
        methods:{
            getUser(){
                this.$http({
                    url:"http://www.520.com/member/ajax_login.php",
                    method:"GET",
                    withCredentials:true,
                    
                })
                .then(res=>{
                    this.user = res.data;
                })
            },
            logout(){
                this.$http({
                    url:"http://www.520.com/member/ajax_login.php",
                    method:"POST",
                    withCredentials:true,
                    data:'dopost=exit'
                })
                .then(res=>{
                    if(res.data.status){
                        console.log("注销成功")
                        this.user={},
                        bus.islog = false;
                        // this.$route.push
                    }
                })
            },
        }
}
</script>
<style>
    
</style>
        
