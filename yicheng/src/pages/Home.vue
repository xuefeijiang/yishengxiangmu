<template>
    <div class="home">
        <div class="header">医生在线</div>      
            <Slider></Slider> 
           <!-- <router-viem></router-viem>  -->
            
            <!-- <img src="../../public/images/1.jpg"> -->
        <div class="main">
            <ul>
                <router-link
                tag="li"
                active-class="active"
                 to="/zixun">
                <a href="javascript:;" >
                <img src="../assets/img/t21.png">
                <p>免费咨询</p></a>
                </router-link>
                <router-link
                tag="li"
                active-class="active"
                to="/fuwu">
                <a href="javascript:;" >
                <img src="../assets/img/t22.png">
                <p>专家推荐</p></a>
                </router-link>
                <router-link
                tag="li"
                active-class="active"
                to="/doctor">
                <a href="javascript:;" >
                <img src="../assets/img/t23.png">
                <p>我的</p></a>
                </router-link>
                <router-link
                tag="li"
                active-class="active"
                to="/reg">
                <a href="javascript:;" >
                <img src="../assets/img/t24.png">
                <p>服务</p></a>
                </router-link>
                 <!-- <li><a href="#"><img src="../assets/img/t21.png"><p>免费咨询</p></a></li>
                <li><a href="#"><img src="../assets/img/t22.png"><p>专家推荐</p></a></li>
                <li><a href="#"><img src="../assets/img/t23.png"><p>门诊服务</p></a></li>
                <li><a href="#"><img src="../assets/img/t24.png"><p>手术服务</p></a></li>  -->
            </ul>
        </div>
    </div>
</template>
<script>
import Slider from '@/components/Slider'
import axios from '../plugins/axios'
// import router from '../plugins/router'
export default {
    // data(){
    //    return {
    //      user:{}
    //    }
    // },
    // beforeRouteEnter(to,from,next){
    //     axios({
    //         url:'/api/user'
    //     }).then(
    //         res=>{
    //             if(res.data.err===0){
    //               next(_this=>_this.user=res.data.data)
    //             }else{
    //             //   this.$router.push('/login')拿不到
    //             // router.push('/login')
    //             next('/login')
    //             }
    //         }
    //     )
    // },
    name:'home',
    components:{Slider}
}
</script>



<style scoped>
 /* .banner{ height: 6.73rem; }  */
.banner img{ width: 100%; }
.main{ background: #efefef; }
.main ul{ display: flex;justify-content: space-around; 
flex-wrap: wrap;
   }
.main ul li{background: #fff; margin-top: .1rem  }
.main ul li a{ display: block; text-align: center;padding:0  .1rem .2rem}
.main ul li a p{ color: #333;font-size:.3rem; }
.main ul li a img{
     width: 2.40rem;height: 2.40rem; 
    margin: .2rem ;
   } 
/* main ul li a i.i2{ background-position: -2.74rem 0; }
main ul li a i.i3{ background-position: 0 -2.74rem; }
main ul li a i.i4{ background-position: -2.74rem -2.74rem; } */
</style>
