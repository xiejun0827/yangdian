<template>
  <div class="hello">
    <div class="nav">
      <div class="int">
        <input type="text" placeholder="Montagne jeunesse">
        <img src="../../../static/classify/search_03.jpg" class="search">
      </div>
    </div>
    <div class="main">
      <div class="left">
        <div v-for="(item,ind) in arr" :style="sty[ind]" @click="ttt(ind,brr[ind])">
          {{item.name}}
        </div>
      </div>
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
          arr:[],
          sty:[{
          background:"#fff",
          color:"#ff9900",
          borderLeft: 0.1+"rem solid #1d84a7"
        }],
        brr:["/classify/classify-two","/classify/classify-three","/classify/classify-four","/classify/classify-five","/classify/classify-six"]
      }
    },
    methods:{
      ttt(x,i){
          this.sty=[];
          this.$set(this.sty,x,{
            background:"#fff",
            color:"#ff9900",
            borderLeft: 0.1+"rem solid #1d84a7"
          });
          this.$router.push(i)
      }
    },
    mounted(){
        this.$http({
          url:"http://yd.msword.top/getClassify"
        })
          .then(res => {
            this.arr = res.data.data;
          })
    }
  }
</script>
<!--4.1rem-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  width: 7.5rem;
  height: 1.38rem;
  margin: -0.3rem auto 0;
  background: url("../../../static/classify/classify_01.jpg");
  overflow: hidden;
  background-size: cover;
}
.nav .int{
  width: 5.16rem;
  height: 0.6rem;
  margin: 0 auto;
  position: relative;
  margin-top: 0.59rem;
}
.nav .int input{
  width: 5.16rem;
  height: 0.6rem;
  background: #ffe1b5;
  border-radius: 0.1rem;
  font-size: 0.28rem;
  padding-left: 0.2rem;
}
.nav .int img{
  position: absolute;
  right: 0.2rem;
  top: 0;
  display: block;
  width: 0.39rem;
  height: 0.6rem
}
.main{
  width: 7.5rem;
  margin: 0 auto;
  overflow: hidden;
  background:#fafafa
}
.left{
  float: left;
}
.left div{
  font-size: 0.25rem;
  height: 0.93rem;
  padding: 0.1rem 0.47rem 0;
  line-height: 0.93rem;
}
  .right ul{
    overflow: hidden;
  }
.right ul li{
  position: relative;
  float: left;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  border: 3px solid #2b8cad;
  border-radius: 0.05rem;
  padding: 0.13rem 0.32rem 0.47rem;
}
.right ul li p{
  height: 0.46rem;
  position: absolute;
  width: 2.34rem;
  text-align: center;
  line-height: 0.46rem;
  margin-left: -0.32rem;
  background: #2b8cad;
  font-size: 0.22rem;
  color: #fff;
}
</style>
