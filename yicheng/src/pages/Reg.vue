<template>
    <div class="reg">
        <div class="regTop">
            <span>用户注册</span>
            <!-- <a class="back" href="index.html" >&lt;   返回</a> -->
            <router-link class="back" to="/home">&lt;   返回</router-link>
             <router-link class="back1" to="/login">登录 &gt; </router-link>
        </div>
        <div class="content">
            <div class="point">
                <span>注册成功后，手机号也可为登录账号。</span>
            </div>
            <form action="">
                <div class="message">
                    <input type="tel" placeholder="用户名"   v-model="username"/>
                    <input type="password" placeholder="请输入6-25位密码"  v-model="password"/>
                    <input type="password" placeholder="请再次输入密码"/>   
                     <!-- pattern="[0-9A-Za-z]{6,25}" required              -->
                    <select name="job">
                        <option value="choose">选择职位</option>
                        <option value="boss">病人</option>
                        <option value="staff">医生</option>
                    </select> 
                     
                    <div class="icons">
                        <b><img src="../assets/img/zc-1.jpg" alt=""/></b>
                        <b><img src="../assets/img/zc-2.jpg" alt=""/></b>
                        <b><img src="../assets/img/zc-3.jpg" alt=""/></b>  
                    </div>
                    <input type="file" ref="f1">
                    <span>{{mess}}</span>
                </div>
                <div class="agree">
                    <input type="checkbox"/><span>&nbsp;同意&nbsp;</span><a href="">《注册协议》</a>
                </div>
                <button class="submit" type="submit" @click="reg">注册</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:'',
            password:'',
            mess:''
        }
    },
    methods:{
        reg(){
            let formData =new FormData();
            formData.append('username',this.username)
            formData.append('password',this.password)
            formData.append('icon',this.$refs.f1.files[0])
        axios({
            url:'/api/reg',
            method:'post',
            data:formData
        }).then(
             res=>res.data.err===0 ? this.$router.push('/fuwu') : this.mess = res.data.msg 
             
            //console.log(res.data)
        )
        },
    }
}
</script>



<style scoped>
   .regTop{
    width: 100%;
    padding:8% 0 6%;
    background: #50b4f9;
    text-align: center;
    color: #ffffff;
    position: relative;
}
 .regTop span{
     font-size: .36rem
 }
 .regTop a{
     font-size: .3rem
 }
.back{
    position: absolute;
    left: 2%;
    top: 50%;
    color: #ffffff;
}
.back1{
    position: absolute;
    left: 80%;
    top: 50%;
    color: #ffffff;
}
.point{
    padding: 6% 5%;
    background-color: #909093
}
.point span{
    font-size: .3rem;
    font-family: "Microsoft YaHei";
    color: #535353;
}
.content form input:not(:nth-child(6)){
    border: 0;
    border-bottom: 1px solid #c3c3c5;
}
.content form{
    width: 100%;
    height: 35.21%;
}
.message{
    background: #ffffff;
    padding:2% 5% 0 5%;
    position: relative;
}
.message input{
    width: 90%;
    padding: 4% 0 4% 10%;
    font-size: 0.875em;
    font-family: "Microsoft YaHei";
}
.message .icons b{
    position: absolute;
    width: 3.75%;
    height: 4%;
    top: 7%;
    left: 7%;
}
.message .icons b img{
    width: 100%;
}
.message .icons b:nth-child(2){
    width: 5%;
    top: 26%;
    left: 6%;
}
.message .icons b:nth-child(3){
    top: 43%;
}
/* .message .icons b:nth-child(4){
    top: 61%;
} */
.code{
    position: absolute;
    top: 60%;
    right:10%;
    color: #21a9f5;
    font-size: 0.875em;
    font-family: "Microsoft YaHei";
}
select{
    width: 33%;
    padding: 2% 1%;
    margin: 5%;
    font-size: 1em;
    color: #909093;
    border: solid 1px #909093;
    font-family: "Microsoft YaHei";
}
.agree{
    margin: 6% 5%;
}
.agree span{
     font-size: .24rem;
}
.submit{
    width: 84%;
    margin: 2% 8%;
    background: #21a9f5;
    color: #ffffff;
    border: 0;
    padding: 3.25% 0;
    font-size: .3rem;
    font-family: "Microsoft YaHei";
}
form .agree input[type="checkbox"] :default{
    outline: 2px solid #21a9f5;
}
</style>
