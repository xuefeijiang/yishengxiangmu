<template>
      <div class="fuwu" >
        <div class="header">
          <i @click="show"></i>推荐名医
        </div>
        
        <ul> 
             <li>
                 <div class="tu">
                    <img src="../assets/img/f1.png">
                    <p class="label01">可咨询</p>
                </div>
                <div >
                    <span class="zhuanjia">张启 </span>
                    <span class="jieshao">儿科 主治医师</span>
                </div>
                <div class="yi1"> 北京大学第一医院</div>
                <div class="yi2">擅长：呼吸系统疾病、消化系统疾病、儿童生长发育、幼儿急诊、小儿肺热</div>
                <div class="yi3">
                    <span class="ys">咨询量：</span>
                    <span>6</span>
                </div> 
            </li>
            <li>
                 <div class="tu">
                    <img src="../assets/img/f1.png">
                    <p class="label01">可咨询</p>
                </div>
                <div >
                    <span class="zhuanjia">张启 </span>
                    <span class="jieshao">儿科 主治医师</span>
                </div>
                <div class="yi1"> 北京大学第一医院</div>
                <div class="yi2">擅长：呼吸系统疾病、消化系统疾病、儿童生长发育、幼儿急诊、小儿肺热</div>
                <div class="yi3">
                    <span class="label03">图文：20元/次</span>
                    <span class="label04">语音：50元/次</span>
                </div> 
            </li>
            <li>
                 <div class="tu">
                    <img src="../assets/img/f1.png">
                    <p class="label01">可咨询</p>
                </div>
                <div >
                    <span class="zhuanjia">张启 </span>
                    <span class="jieshao">儿科 主治医师</span>
                </div>
                <div class="yi1"> 北京大学第一医院</div>
                <div class="yi2">擅长：呼吸系统疾病、消化系统疾病、儿童生长发育、幼儿急诊、小儿肺热</div>
                <div class="yi3">
                    <span class="label03">图文：20元/次</span>
                    <span class="label04">语音：50元/次</span>  
                </div> 
            </li>
            <li>
                 <div class="tu">
                    <img src="../assets/img/f1.png">
                    <p class="label01">可咨询</p>
                </div>
                <div >
                    <span class="zhuanjia">张启 </span>
                    <span class="jieshao">儿科 主治医师</span>
                </div>
                <div class="yi1"> 北京大学第一医院</div>
                <div class="yi2">擅长：呼吸系统疾病、消化系统疾病、儿童生长发育、幼儿急诊、小儿肺热</div>
                <div class="yi3">
                    <span class="label03">图文：20元/次</span>
                    <span class="label04">语音：50元/次</span>
                </div> 
            </li>
              <li>
                 <div class="tu">
                    <img src="../assets/img/f1.png">
                    <p class="label01">可咨询</p>
                </div>
                <div >
                    <span class="zhuanjia">张启 </span>
                    <span class="jieshao">儿科 主治医师</span>
                </div>
                <div class="yi1"> 北京大学第一医院</div>
                <div class="yi2">擅长：呼吸系统疾病、消化系统疾病、儿童生长发育、幼儿急诊、小儿肺热</div>
                <div class="yi3">
                    <span class="label03">图文：20元/次</span>
                    <span class="label04">语音：50元/次</span>
                </div> 
            </li>
        </ul>
    </div> 
</template>
<script>
// import router from '../plugins/router'
 export default {
//      data(){
//        return {
//          user:{}
//        }
//     },
//     beforeRouteEnter(to,from,next){
//         axios({
//             url:'/api/user'
//         }).then(
//             res=>{
//                 if(res.data.err===0){
//                   next(_this=>_this.user=res.data.data)
//                 }else{
//                 //   this.$router.push('/login')拿不到
//                 // router.push('/login')
//                 next('/login')
//                 }
//             }
//         )
//     },
	 methods:{
        show(){
            this.$router.go(-1)	
        }
    }
}
</script>

<style scoped>
   .header i{width: .48rem;height: .48rem;border-top: .05rem solid #fff;
          border-left: .05rem solid #fff;display: inline-block;
          float: left; 
          transform: rotate(-45deg); position: relative;
          top: .4rem; left: .25rem;}    
   ul li{overflow: hidden;  margin:.2rem;padding: .1rem;
   border-bottom: solid #585657 .01rem}
   ul li .tu{ float: left; margin-right:.1rem }
   ul li img{ display: inline;}  
   ul li  p{ text-align: center;border: .01rem solid  #585657}
   ul li .zhuanjia{ font-weight:bold;color:#808080;}
   ul li .jieshao{ color:#808080;font-size:.12rem}
   ul li .yi1{margin-bottom:.04rem;color:#808080;font-size:.011rem;}
   ul li .yi2{margin-bottom:.04rem;color:#c7c7c7;font-size:.01rem;}
   ul li .yi3{height:.25rem;margin-top: .2rem}
   ul li .yi3 .ys{ margin-left: .1rem; color: #808080;
    font-size: .12rem;}
   ul li .yi3 .label03{    background-color: #00c304;
    color: #FFF;
    font-size: .11rem;
    border-radius: .05rem;
    margin: .02rem .1rem .02rem 0rem;
    padding: .03rem .08rem;}
    ul li .yi3 .label04{  background-color: #ff6a00;
    color: #FFF;
    font-size: .11rem;
    border-radius: .05rem;
    margin: .02rem .1rem .02rem 0rem;
    padding: .03rem .08rem;}
</style>



