<template>
  <div class="hello">
    <div class="top"></div>
    <div class="main">
      <div class="ooo">
        <p @click="$router.go(-1)"><</p>
        <p>注册</p>
        <p @click="$router.push('/login')">登录</p>
      </div>
    </div>
    <div class="main-1">
      <div class="mmm">
        手机号: <input type="text" v-model="phone">
      </div>
      <div class="mmm">
        密码: <input type="password" v-model="passWord">
      </div>
      <div class="mmm">
        验证码: <input type="text" v-model="code">
        <span @click="get()">点击获取</span>
      </div>
      <div @click="go()">注册</div>
      <div>
        <input type="checkbox" name="age" id="age" v-model="flag" @click="ccc()"><label for="age">我已阅读并同意使用条款和隐私政策</label>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from "qs"
  export default {
    name: 'HelloWorld',
    data(){
        return{
            phone:"",
            passWord:"",
            code:"",
            flag:false,
        }
    },
    methods:{
        get(){
            let reg =/^1[3-9][0-9]{9}$/;
          if(!reg.test(Number(this.phone))){
              alert("手机号格式错误")
            }else if (this.passWord.length<6){
               alert("密码不能小于六位")
          } else if(reg.test(Number(this.phone))) {
            alert("获取验证码成功");
            this.$http({
              url:"http://49.232.129.237:3000/captcha/sent",
              params:{
                  phone:this.phone
              }
            })
              .then(res => {
                console.log(res);
              })
          }
        },
        go(){
            let params={
              phone:this.phone,
              password:this.passWord
          };
          let reg =/^1[3-9][0-9]{9}$/;
          if(!reg.test(Number(this.phone))){
            alert("手机号格式错误")
          }else if (this.passWord.length<6){
            alert("密码不能小于六位")
          }else if(this.flag===false){
            alert("请同意协议")
          }else if(this.code===""){
            alert("验证码不能为空")
          } else if(this.code!=="") {
            this.$http({
              url:"http://49.232.129.237:3000/captcha/verify",
              params:{
                phone:this.phone,
                captcha:this.code,
              }
            })
              .then(res => {
                console.log(res);
                if(res.data.code===200){
                    this.$http({
                      url:"http://yd.msword.top/register",
                      method:"post",
                      data:qs.stringify(params)
                    })
                      .then(res => {
                        if(res.data.msg==="注册成功"){
                            alert(res.data.msg);
                            this.$router.push('/login')
                        }else {
                          alert(res.data.msg)
                        }
                      })
                }
              })
          }
        },
        ccc(){
        this.flag=!this.flag;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/zuce.css";
  @media screen and (max-width: 415px) {
    .main-1 .mmm span{margin-left: 0}
  }
  /*.top{*/
    /*width: 7.5rem;*/
    /*height: 0.4rem;*/
    /*margin: 0 auto;*/
    /*background: url("../../static/details/details-top_01.jpg");*/
    /*background-size: cover;*/
  /*}*/
</style>
