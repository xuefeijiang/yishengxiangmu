<template>
    <div class="login">
        <div id="logo">
            <img src="../assets/img/logo.png" alt=""/>
        </div>
        <div class="userName">
            <span>用&nbsp;户&nbsp;名：</span>
            <input type="text" v-model="username" name="name" placeholder="请输入用户名" pattern="[0-9A-Za-z]{6,16}" required/>
        </div>
        <div class="passWord">
            <span>密&nbsp;&nbsp;&nbsp;码：</span>
            <input type="password" v-model="password"  name="password" placeholder="请输入密码" pattern="[0-9A-Za-z]{6,25}" required/>
        </div>
        <div class="choose_box">
            <div>
                <input type="checkbox" checked="checked" name="checkbox"/>
                <span>记住密码</span>
            </div>
            <a href="">忘记密码</a>
        </div>
        <button class="login_btn" type="submit" @click="login">登&nbsp;&nbsp;录</button>
      
        <div class="other_login"> 
            <router-link class="back" to="/home">&lt; 返回首页</router-link>
            <div class="other"></div>
            <span>其他方式登录</span>
            <div class="other"></div>
           
        </div>

        <div class="other_choose">
            <a href="">
                <img src="../assets/img/qq.png" alt=""/>
            </a>
            <a href="">
                <img src="../assets/img/wx.png" alt=""/>
            </a>
            <a href="">
                <img src="../assets/img/wb.png" alt=""/>
            </a>
        </div>
    </div>
</template>
<script>
//  console.log(axios)
export default {
  data(){
    return {
      username:'',
      password:'',
      mess:''
    }
  },   
  methods:{
    login(){   
      axios({
        url:'/api/login',
        method:'post',      
        data:{username:this.username,password:this.password}
      }).then(
        res => {
         //console.log('1',res);
          if(res.data.err===0){
            this.$router.push('/home')
          }else{
            this.mess = res.data.msg
          }
        }
      )
    }
  }
}
</script>

<style scoped>
#logo{
    margin: 9% auto;
    width: 30.25%;
}
img{
    width: 100%;
}

 div.userName,div.passWord{
    border: 1px solid #c1c1c1;
    padding:3.5% 0 4% 3%;
    height: 22%;
    background: #ffffff;
   margin:0 .1rem
}
 div.userName{
    border-bottom:0;
    -webkit-border-top-left-radius: 0.45em;
    -webkit-border-top-right-radius: 0.45em;
    -moz-border-radius-topleft: 0.45em;
    -moz-border-radius-topright: 0.45em;
    border-top-left-radius: 0.45em;
    border-top-right-radius: 0.45em;
}
 div.passWord{
    -webkit-border-bottom-left-radius: 0.45em;
    -webkit-border-bottom-right-radius: 0.45em;
    -moz-border-radius-bottomleft: 0.45em;
    -moz-border-radius-bottomright: 0.45em;
    border-bottom-left-radius: 0.45em;
    border-bottom-right-radius: 0.45em;
}
 div.userName input,div.passWord input{
    width: 68%;
    height: 80%;
    border:none;
    background: transparent;
    font-size: 1em;
    font-family: "Microsoft YaHei";
    color: #b3b3b3;
    letter-spacing: 1px;
    padding-left: 2px;
}
.choose_box{
    height: 4.5em;
    line-height: 4.5em;
    padding: 0 5px;
}
.choose_box div{
    float: left;
}
.choose_box a{
    float: right;
}
.login_btn{
    width: 100%;
    display: block;
    padding:3% 0 ;
    background: #098fe4;
    border: 0;
    font-size: 1em;
    font-family: "Microsoft YaHei";
    color:#374782;
    -webkit-box-shadow: #8f9bad 0px 0px 20px;
    -moz-box-shadow: #8f9bad 0px 0px 20px;
    box-shadow: #8f9bad 0px 0px 20px;
    text-align: center;
    
}
.other_login{
    width: 80%;
    height: 15px;
    position: absolute;
    top:75%;
    margin: 0 10%;
}
.other_login .other,.other_login span{
    display: inline-block;
    vertical-align: middle;
}
.other_login .other{
    width: 30%;
    height: 8px;
    border-bottom:1px solid #2f2c59;
}
.other_login .back{
    position: absolute;
    left: 0;
    top: -.5rem;
    color: #000;
    background: #098fe4;
    padding: .1rem;
}

.other_login span{
    width:40%;
    text-align: center;
}
.other_choose{
    width: 74%;
    top:83.5%;
    position: absolute;
    margin: 0 13%;
}
.login_bg .other_choose a{
    display: block;
    float: left;
    border: 2px solid #505887;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
}
.other_choose a:nth-child(2) img {
    padding-left: .85rem
}
.other_choose a:nth-child(3) {
     padding-left: .85rem
}
.other_choose a img{
    width: 1rem;   
}

</style>

