<template>
    <div class="banner">
        <ul class="clearfix">
            <!-- <li>
                <img src="../../public/images/1.jpg"/>
                <div class="text-box">
                <h2>一张美丽的图片33</h2>
                <p>专属照片3</p>
                </div>
            </li> 
             <li>
                <img src="../../public/images/2.jpg"/>
                <div class="text-box">
                <h2>一张美丽的图片33</h2>
                <p>专属照片3</p>
                </div>
            </li>  -->
            <router-link
             tag="li"
             to="/list"
             >
                <img src="../../public/images/1.jpg"/>
                <div class="text-box">
                <h2>一张美丽的图片33</h2>
                <p>专属照片3</p>
                </div>
            </router-link> 
            <router-link
             tag="li"
             to="/list"
             >
                <img src="../../public/images/2.jpg"/>
                <div class="text-box">
                <h2>一张美丽的图片33</h2>
                <p>专属照片3</p>
                </div>
            </router-link>
             <router-link
             tag="li"
             to="/list"
             >
                <img src="../../public/images/3.jpg"/>
                <div class="text-box">
                <h2>一张美丽的图片33</h2>
                <p>专属照片3</p>
                </div>
            </router-link>    
        </ul>
    </div>
</template>
<script>
import Swipe from 'swipe'
import $ from 'jquery'

export default {
    mounted(){
        new Swipe($('.banner')[0],{//轮播图插件
            auto:2000,
            continuous:true,
            stopPropation:true,
            callback:function (index,element){
            $('.banner ol li').removeClass('active');
            $('.banner ol li').eq(index).addClass('active');
            }
        })
    },
    pros:['banner']
}
</script>
<style scoped>
.banner{position: relative;overflow: hidden; z-index: 1} 
.banner ul li{
      width:6.4rem;  
    float:left;
    position: relative;}
.banner ul li img{width:100%; display:block;}
.banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; 
position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
.text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; 
line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;
text-overflow:ellipsis;}
.text-box p{ line-height:100%;} 

.banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
.banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; 
  float:left; border-radius:50%; margin-right:0.08rem;}
.banner ol li.active{ background:#fff;}
</style>
