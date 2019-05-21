<template>
    <div>
        <div class="slider">
            <img width="100%" :src="gallery[current].img_url" alt="">
        </div>
    </div>
</template>>
<script>
import {setInterval} from 'times';
export default {
    data(){
        return{current:0}
    },
    props:["gallery"],
    mounted(){
        //每隔3秒surrent+1
        //如果current超过gallery的长度 等于0
        setInterval(() => {
           this.current++; 
           if(this.current>=this.gallery.length){
               this.current=0;
           }
        }, 3000);
    }
}
</script>