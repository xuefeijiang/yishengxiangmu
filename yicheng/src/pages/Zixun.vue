<template>
    <div class="zixun">
        <div class="header" >
		<i @click='show'></i>免费咨询
        </div>
        <div class="main">
            <ul>
                <li>
                    <span>姓名:</span>
                    <input type="text" placeholder="请输入真实姓名">
                </li>
                <li>
                    <span>性别:</span>
                    <input type="text" placeholder="请输入性别">
                </li>
                <li>
                    <span>手机号码:</span>
                    <input type="text" placeholder="请输入11位手机号码">
                </li>
                <li>
                    <span>出生日期:</span>
                    <input type="text" placeholder="请输入出生日期">
                    <i></i>
                </li>
            </ul>
        </div>	
        <div class="ss">
            <span>所在省市:</span>
            <select><option selected="selected">--省--</option><option>上海</option><option>北京</option><option>东京</option><option>上海</option><option>上海</option><option>上海</option></select>
            <select><option selected="selected">--市--</option><option>上海</option><option>北京</option><option>苏州</option><option>上海</option><option>南京</option><option>上海</option></select>
        </div>
        <div class="bz">
            <span>病状描述:</span>
            <textarea></textarea>
        </div>
        <div class="sc">
            <span>长传附件:</span>
            <input type="file" id="ff">
            <label for="ff" class="lab"><img src="../assets/img/t1.png"></label>
        </div>
        <h3><a href="#">确&nbsp;&nbsp;定</a></h3>
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
.header i{width: .48rem;height: .48rem;
         border-top: .05rem solid #fff;
          border-left: .05rem solid #fff;
          display: inline-block;
          float: left; 
          transform: rotate(-45deg);
           position: relative;
          top: .4rem; left: .25rem;} 
.main{padding: 0 .2rem }       
 .main ul{margin-top: .3rem;  }
.main ul li{ 
    /* width: 9.96rem; */
   border: .01rem solid #dcdedd;
    margin:0 0 .2rem 0;border-radius: .08rem; }
.main ul li span{font-size:.3rem;color:#9b9b9b;
padding-left: .1rem;  }
.main ul li input{ border: 0;color: #c6c6c6;font-size:.27rem;}
.main ul li i{ width: .2rem;height: .2rem;border-top: .05rem solid #c6c6c6;
          border-left: .05rem solid #c6c6c6;display: inline-block;
          float: right; 
          transform: rotate(-135deg); position: relative;
          top:0; right:.7rem; }
.ss{display: flex;justify-content: space-between;align-items: center;
       padding:0 .2rem; }
.ss span{ font-size:.27rem;color:#9b9b9b;
       display: block; }
.ss select{ border: 0;border: .01rem solid #dcdedd;width:2.1rem;
	    display: inline-block;height: .3rem;background: none;
	    text-align:center;  text-align-last: center; color:#9b9b9b;}
.ss select option{display: inline-block; background: none;}
.bz {display: flex; padding:0 .2rem; justify-content: space-between;
	 align-items: flex-start; }
.bz span{ font-size:.27rem;color:#9b9b9b;
       display: block;margin-top: .19rem}
.bz textarea {border: 0;border: .01rem solid #dddddd;border-radius: .04rem;
        width: 4.5rem;
       height: 2.86rem ; margin-top: .19rem; 
      font-size: .27rem; }
.sc{  padding:0 .2rem; display: flex;align-items: flex-start;}
.sc span{font-size: .27rem;  color:#9b9b9b; margin-top: .3rem}
.sc input{display:none;}
.sc .lab{ 
     /* height: 1.58rem;width: 1.58rem; */
     border:.01rem solid #dddddd;border-radius: .04rem;
       margin: .3rem 0 0 .28rem;  
      }
.sc .lab img{margin: .1rem}      
h3{display: block; height: 1.1rem;background: #098fe4;
   text-align: center;color: #fff;font: .35rem/1.1rem " ";
   border-radius: .1rem;margin: .2rem;
    position: relative;top:1.21rem; left: 0;}
h3 a{display: block; color: #fff; margin-bottom: 1.5rem; }

</style>

