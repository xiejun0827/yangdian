<template>
  <div class="hello">
    <div class="top"></div>
    <div class="top1">
      <span @click="$router.go(-1)"><</span>
      <p>购物车</p>
    </div>
    <div class="main" v-if="!zzz==false?arr.length===0&&zzz:!zzz">
      <img src="../../static/nav/nav-3_04_12.jpg" alt="">
      <p>购物车还是空的快去逛逛吧~</p>
    </div>
    <ul class="main-1" v-else="arr.length>0&&zzz">
      <li v-for="(a,i) in arr">
        <div class="one">
          <img src="../../static/nav/images/home_03.jpg" alt="" class="p1">
          <p class="p2">杭州保税区仓</p>
        </div>
        <div class="two">
          <p class="iconfont icon-2xuanzhong p1" :style="brr[i]" @click="sss(i)"></p>
          <img :src="a.url" alt="" class="p2">
          <div class="p3">
            <div class="pp1">
              <span class="s1">{{a.title}}</span>
              <span class="s2" style="margin-left: 0.2rem">{{a.a}}</span>
              <span class="s3">/{{a.b}}</span>
            </div>
            <div class="pp2">
              <span class="s4" style="  border-left: 0.03rem solid #cccccc;" @click="jian(i)">-</span>
              <span class="s5">{{a.num}}</span>
              <span class="s6" @click="jia(i)">+</span>
            </div>
          </div>
          <p class="p4">￥{{a.all}}</p>
          <transition
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutDown"
          >
            <p class="p5" v-if="ttt" @click="del(i)">删除</p>
          </transition>
        </div>
      </li>
    </ul>
    <div class="down">
      <div>
        <p class="iconfont icon-2xuanzhong p1" @click="set()" :style="[flag===true?{color:'#ff9a02'}:{color:'#cdcdcd'}]"></p>
        <p @click="set()" :style="[flag===true?{color:'#ff9a02'}:{color:'#cdcdcd'}]">全选</p>
      </div>
      <div>
        <p class="iconfont icon-2xuanzhong p1" @click="kkk()" :style="[ttt===true&&arr.length!=0?{color:'#ff9a02'}:{color:'#cdcdcd'}]"></p>
        <p @click="kkk()" :style="[ttt===true&&arr.length!=0?{color:'#ff9a02'}:{color:'#cdcdcd'}]">编辑</p>
      </div>
      <div>
        <p>合计:{{sum}}</p>
        <p>(不含运费)</p>
      </div>
      <transition
        enter-active-class="animated hinge"
        leave-active-class="animated hinge"
      >
        <div @click="remove()" v-if="flag&&ttt">全部删除</div>
      </transition>
      <div class="ooo">
        去结算
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data(){
      return{
          arr:[],
          num:"",
          all:'',
          brr:[],
          flag:false,
          flag1:[],
          sum:0,
          ttt:false,
          xxx:"",
          zzz:false
      }
    },
    mounted(){
      this.xxx= Number(localStorage.getItem('num'));
      for(let i=0;i<localStorage.length;i++){
        if(localStorage.key(i) =="loglevel:webpack-dev-server"){
              continue
          }else if(localStorage.key(i) =="num"){
              continue
          } else {
            this.arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            this.flag1.push(false)
          }
        }
      this.zzz = sessionStorage.getItem('flag');
    },
    methods:{
      jia(i){
          this.arr[i].num++;
          this.arr[i].all = this.arr[i].num*this.arr[i].dan;
          localStorage.setItem(i,JSON.stringify(this.arr[i]));
          if(this.flag1[i] === true){
            this.sum += (1*this.arr[i].dan)
          }
      },
      jian(i){
          if(this.arr[i].num>0){
            this.arr[i].num--;
            this.arr[i].all = this.arr[i].num*this.arr[i].dan;
            localStorage.setItem(i,JSON.stringify(this.arr[i]));
            if(this.flag1[i] === true){
              this.sum -= (1*this.arr[i].dan)
            }
          }
      },
      set(){
          if(this.arr.length>0){
            this.flag=!this.flag;
            this.brr =[];
            if(this.flag===true){
              for(let i=0;i<this.arr.length;i++){
                this.brr.push({color:"#ff9a02"});
                this.flag1[i] = true;
                this.sum += this.arr[i].num*this.arr[i].dan
              }
            }else {
              for(let i=0;i<this.arr.length;i++){
                this.brr.push({color:"#cdcdcd"});
                this.flag1[i] = false;
                this.sum -= this.arr[i].num*this.arr[i].dan
              }
            }
          }
      },
      sss(i){
          this.flag1[i]=!this.flag1[i];
        if(this.flag1[i]===true){
          this.sum += this.arr[i].all
        }
        if(this.flag1[i] === false){
          this.sum -= this.arr[i].all
        }
          if(this.flag1[i]===true){
            this.$set(this.brr,i,{color:"#ff9a02"})
          }
          else {
            this.$set(this.brr,i,{color:"#cdcdcd"})
          }
          let aaa = this.flag1.every((val,ind) => {
            return val===true
          });
          if(aaa===true){
              this.flag=true
          }
          else {
              this.flag=false
          }
      },
      kkk(){
          if(this.arr.length>0){
            this.ttt=!this.ttt
          }
      },
      del(i){
        this.arr.splice(i,1);
        localStorage.clear();
          if(this.xxx>=0){
            this.xxx=this.xxx-1;
          }
        localStorage.setItem('num',this.xxx);
        if(this.xxx<0){
          localStorage.clear();
          this.ttt=false;
          this.flag=false;
          this.sum=0;
        }else {
          for(let o=0;o<=this.xxx;o++){
           localStorage.setItem(o,JSON.stringify(this.arr[o]));
          }
          if(this.flag===true){
            let zzz =this.arr.reduce((ind,val) => {
              return ind +=val.num*Number(val.dan)
            },0);
            this.sum =zzz
          }
        }
      },
      remove(){
          this.arr.splice(0,);
          if(this.flag===true&&this.ttt===true){
            localStorage.clear();
            this.sum =0;
            this.ttt=false;
            this.flag=false;
          }
      }
    },
    update(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/shop.css";
  @import "../../font_8wfirznlpdv/iconfont.css";
  @media screen and (max-width: 415px) {
    img{width:5%}
    .main-1 .two .p4{margin-left: 0.1rem}
    .down div:nth-child(4),div:nth-child(5){width: 1.6rem}
  }
  /*.top{*/
    /*width: 7.5rem;*/
    /*height: 0.4rem;*/
    /*margin: 0 auto;*/
    /*background: url("../../static/details/details-top_01.jpg");*/
    /*background-size: cover;*/
  /*}*/
</style>
