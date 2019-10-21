<template>
  <div class="hello">
    <div class="top"></div>
    <div class="main">
      <div class="ooo">
        <p @click="$router.go(-1)"><</p>
        <p>登录</p>
        <p @click="$router.push('/zuce')">注册</p>
      </div>
    </div>
    <div class="main-1">
      <div class="mmm">
        手机号: <input type="text" v-model="phone">
      </div>
      <div class="mmm">
        密码: <input type="password" v-model="password">
      </div>
      <div>忘记密码</div>
      <div @click="www()">登录</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data(){
        return{
            phone:"",
          password:"",
        }
    },
    methods:{
        www(){
          let reg =/^1[3-9][0-9]{9}$/;
          if(!reg.test(Number(this.phone))){
            alert("手机号格式错误")
          }else if (this.password.length<6){
            alert("密码不能小于六位")
          }else {
            this.$http({
              url:"http://yd.msword.top/login",
              params:{
                phone:this.phone,
                password:this.password,
              }
            })
              .then(res => {
                if(res.data.msg==="登录成功。"){
                  alert(res.data.msg);
                  this.$router.push('/goo');
                  sessionStorage.setItem('flag',true)
                }else {
                  alert(res.data.msg)
                }
              });
          }
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/login.css";
  /*.top{*/
    /*width: 7.5rem;*/
    /*height: 0.4rem;*/
    /*margin: 0 auto;*/
    /*background: url("../../static/details/details-top_01.jpg");*/
    /*background-size: cover;*/
  /*}*/
</style>
