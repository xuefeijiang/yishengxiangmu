<template>
    <div class="List">
        <div class="header">
		<i @click="show"></i>二哈
	     </div>
	<div class="section">
		<ul>
			<li>
				<a href="#" class="da">
					<div class="top">
						<a href="#" class="dx"><img src="../assets/img/t6.jpg"></a>
						<div class="xiao">
						    <h4>二哈<span>外科专家</span><span>博士</span></h4>
						    <p>中山大学附属第三医院</p>
						    <p>专长：心脑血管，高血压的诊治，冠心病，先天性心脏病</p>
					    </div>
	                </div>
	                <b>外科医师</b><b>主治专家</b><b>教授</b>
                </a>
			</li>
	   </ul>
	 </div> 
	 <div class="main">
	 <h3>朱晓东，外科教授，业务专长心外科</h3><p>
    朱晓东教授，心脏科专家男，1932年出生于河南开封，解放后就读于开动高中。1950年冬在轰轰烈烈的抗美援朝浪潮中投入军事下校分配到哈尔滨科大学学习。1956年毕业后分配到解放军科医院，后教为中国医学科学院阜外医院。60年代攻读协和套科大学心血管外科研究牛。70年代中80年代初，两到英国和澳大利亚进修心脏外科1992-1996年担任中国医学科学院阜外医究与心血管病研究所院所长。
<p>朱晓东教授具石全面丰富的心脏外科临床实践经验，在础科研方对巾液动力学，心脏外科解剖学以及人1心脏瓣膜等有深入研究。1976任国内首先研制生物盖膜（心包瓣）并成功币于临床，他多次获得国家、生部、北京市、医科院的各种奖动和荣誉称号。1988年中央人事部授予突出贡献的中青年医学科学支术专家称号，1993年获中国医学科学院国协和医科大学名医称号。1995年当选为中国工程院院士。</p>
<p>从医40余年来，朱晓东院土亲自施行各类心班手术4000余例，包括种疑难重症。
同时积极参与建立全国术协作网在全国推广心脏外科扳术。</p>
	 </div> 
	 <div class="footer">
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
                to="/login">
                <a href="javascript:;" >
                <img src="../assets/img/t23.png">
                <p>门诊服务</p></a>
                </router-link>
                <router-link
                tag="li"
                active-class="active"
                to="/doctor">
                <a href="javascript:;" >
                <img src="../assets/img/t24.png">
                <p>手术服务</p></a>
                </router-link>
		<!-- <a href="#"><img src="../assets/img/b11.png">免费咨询</a>
		<a href="#"><img src="../assets/img/b12.png">门诊服务</a>
		<a href="#"><img src="../assets/img/b13.png">手术服务</a> -->
	</div>
    </div>
</template>
<script>
export default {
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
.section{ background: #efefef;  /*padding-left: .25rem;*/  }          

.section ul li{border: .01rem solid #dddddd; border-radius: .04rem;
   display: block; margin-bottom: .2rem; background: #fff}
.section ul li .da{display: block;}
.section ul li .top{ display: flex;border-bottom: .01rem solid #dddddd }
.section ul li .top .dx{display: inline-block;
	margin: .26rem 0 .34rem .18rem; 
 width: 1.56rem;height: 1.56rem; border-radius: 50%;overflow: hidden;}
.section ul li .top .dx img{display: inline-block;
	 width: 1.56rem;height: 1.56rem;/* margin: .26rem .44rem 0 .18rem;*/ }
.section ul li .top h4{font: .4rem/.75rem " ";color: #333; margin-top: .13rem; }
.section ul li .top h4 span{font: .3rem/.65rem " "; color: #585657;margin-left: .25rem; }
.section ul li .top p{font: .3rem/.48rem " ";color: #585657;  }
.section ul li b{background: #6ec7ff;color: #fff;display: inline-block;
  font: .28rem/.46rem " ";margin:.19rem ;
  padding: 0 .16rem; border-radius:.12rem;  }   
.main { margin:0 .35rem; overflow: hidden; }
.main h3{color: #333;font: .36rem/.83rem " ";margin-top: .16rem;  }
.main  p{ color: #585657;font: .32rem/.78rem " "; text-indent: 2em;}
.footer{border-top: .01rem solid #d2d2d2; display: flex;justify-content: space-between;
   padding: 0 .4rem; position: fixed;bottom: 0; left: 0;right: 0;background: #fff;
   }
.footer a{ display:inline-block;color: #717171;font: .3rem/.64rem " ";text-align: center; }
.footer a img{ display: block;width: .65rem;height: .64rem ;margin: 0 auto;
	
     margin-top: .07rem}


</style>
