<template>
<div class="doctor">
    <div class="header" >
		<i @click='show'></i>医生在线
	</div>
	<div class="section" >
		<h3>普通外科</h3>
		<ul>
			<router-link
			 tag="li"
			 to="/list">
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
			</router-link>
			<router-link
			 tag="li"
			 to="/list">
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
			</router-link>
			<router-link
			 tag="li"
			 to="/list">
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
			</router-link>
		</ul>
	</div>
	<div class="footer">	
			<router-link
			 tag="a"
			 to="/list">
			 <img src="../assets/img/b11.png">免费咨询
			</router-link>
			<router-link
			 tag="a"
			 to="/list">
			 <img src="../assets/img/b12.png">门诊服务
			</router-link>
			<router-link
			 tag="a"
			 to="/list">
			 <img src="../assets/img/b13.png">手术服务
			</router-link>
		<!-- <a href="#"><img src="../assets/img/b12.png">门诊服务</a>
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
.section{ background: #efefef;  padding: .2rem;  }
.section h3{font: .4rem/1.02rem " "; padding-top: .12rem; }
.ection ul{ margin-right: .18rem; }
.section ul li{border: .01rem solid #dddddd; border-radius: .04rem;
   display: block; margin-bottom: .2rem; background: #fff}
.section ul li .da{display: block;}
.section ul li .top{ display: flex;border-bottom: .01rem solid #dddddd }
.section ul li .top .dx{display: inline-block;
	 margin: .26rem .2rem .34rem .18rem;  
    width: 1.6rem;height: 1.56rem;
     border-radius: 50%;overflow: hidden;}
.section ul li .top .dx img{display: inline-block;
	 width: 1.6rem;height: 1.56rem; }
.section ul li .top h4{font: .4rem/.75rem " ";color: #333; }
.section ul li .top h4 span{font: .3rem/.65rem " "; color: #585657;margin-left: .25rem; }
.section ul li .top p{font: .3rem/.48rem " ";color: #585657;  }
.section ul li b{background: #6ec7ff;color: #fff;display: inline-block;
  font: .28rem/.46rem " ";margin:.19rem ;
  padding: 0 .16rem; border-radius:.12rem;  }
.footer{border-top: .01rem solid #d2d2d2; display: flex;justify-content: space-between;
   padding: 0 .4rem; position: fixed;bottom: 0; left: 0;right: 0;background: #fff;
   }
.footer a{ display:inline-block;color: #717171;font: .3rem/.64rem "";text-align: center; }
.footer a img{ display: block;width: .65rem;height: .64rem ;margin: 0 auto;
	/* background: url(b1.png) no-repeat ; background-size: 1.95rem .65rem; */
     margin-top: .07rem}

</style>
