<template>
  <div class="hello">
    <div class="top"></div>
    <banner></banner>
    <div class="main">
      <p v-for="(a,i) in arr" :key="i">
        <router-link :to="{
          path:crr[i],
          query:{id:$route.query.id}
        }" active-class="a" >{{a}}</router-link>
      </p>
      <router-view></router-view>
    </div>
    <transition
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutDown"
    >
      <div class="big" v-show="flag">
        <div class="big-1">
          <div class="big-div1">
            <img :src="url" alt="">
            <div>
              <p class="p1">￥{{drr.reduct_price}}</p>
              <p class="p2">库存{{drr.total}}件</p>
              <p class="p3">请选择商品属性</p>
            </div>
            <span @click="ppp()">x</span>
          </div>
          <div class="big-div2">
            <p>购买数量</p>
            <div>
              <span class="s1" @click="jian()">-</span>
              <span class="s2">{{num}}</span>
              <span class="s3" @click="jia()">+</span>
            </div>
          </div>
          <div v-for="(a,i) in drr.buySelect" class="big-div3">
            <p>{{a.name}}</p>
            <ul>
              <li v-for="(aa,ii) in a.list" @click="set(ii,i)" :style="[i===0?styy[ii]:sty[ii]]">
                {{aa}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>

    <div class="bottom">
      <div style="float: left" class="div1">
        <p>总价：</p>
        <span>￥{{all}}</span>
      </div>
      <div style="float: right" class="div2" @click="ccc()">加入购物车</div>
      <div style="float: right" class="div3" @click="ooo()">立即购买</div>
    </div>
  </div>
</template>

<script>
  import banner from "./details/details-one.vue"
  export default {
    name: 'HelloWorld',
    data(){
        return{
            arr:["商家详情","买家口碑"],
            crr:["/details/details-two","/details/details-three"],
            drr:[],
            flag:false,
            url:"",
            num:0,
            sty:[{
                background:"#ff9900"
            }],
            styy:[{
            background:"#ff9900"
          }],
          lll:0,
          nnn:0,
          lrr:{},
          obj:[],
          name:"",
          aaa:1,
        }
    },
    create(){
        localStorage.clear()
    },
    mounted(){
      this.$http({
        url:`http://yd.msword.top/getDetails?pid=${this.$route.query.id}`
      })
        .then(res => {
          this.drr = res.data.data;
          this.url = res.data.data.swiperImgArr[0];
        });
      this.name=localStorage.getItem("num");
      this.obj=[];
      for(let i=0;i<=this.name;i++){
        this.obj.push(JSON.parse(localStorage.getItem(i)));
      }
    },
    methods:{
        ooo(){
          this.flag=true;
        },
        ppp(){
        this.flag=false;
        this.num=0;
        },
        jia(){
            this.num++;
        },
        jian(){
        if(this.num>0){
          this.num--;
        }
        },
        set(i,x){
            if(x===0){
              this.styy=[];
              this.lll=i;
              this.$set(this.styy,i,{
                background:"#ff9900"
              })
            }else {
              this.nnn = i;
              this.sty=[];
              this.$set(this.sty,i,{
                background:"#ff9900"
              })
            }
        },
        ccc(){
          if(this.flag===true){
              this.lrr={
                    all:this.all,
                    num:this.num,
                    a:this.drr.buySelect[0].list[this.lll],
                    b:this.drr.buySelect[1].list[this.nnn],
                    title:this.drr.name,
                    url:this.url,
                    id:this.drr.pid,
                    dan:this.drr.reduct_price
              };
              this.$router.push({
                path:"/shop",
              });
            if(this.name==null){
              let qqq = JSON.stringify(this.lrr);
              localStorage.setItem(0,qqq);
              localStorage.setItem("num",0);
            } else {
              let v2=this.obj.filter((val,ind) => {
                return this.drr.pid==val.id && val.a==this.lrr.a && val.b==this.lrr.b
              });
              let v3 = this.obj.indexOf(v2[0]);
              if(v3==-1) {
                this.name++;
                let qqq = JSON.stringify(this.lrr);
                localStorage.setItem(this.name, qqq);
                localStorage.setItem("num", this.name);
              }
              else{
                this.obj[v3].all = this.obj[v3].all+this.all;
                this.obj[v3].num = this.obj[v3].num+this.num;
                let qqq = JSON.stringify(this.obj[v3]);
                localStorage.setItem(v3,qqq);
              }
            }
          }
        }
    },
    computed:{
        all(){
            let sum = 0.00;
            if(this.flag===true){
                sum = this.num*this.drr.reduct_price;
                return sum
            }else {
              return sum.toFixed(2);
            }
        }
    },
    components:{
      banner,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/details.css";
.top{
  width: 7.5rem;
  height: 0.4rem;
  margin: 0 auto;
  background: white;
  background-size: cover;
}
.main{
  width: 7.5rem;
  margin: 0 auto;
  padding-top: 0.22rem;
  overflow: hidden;
}
.main p{
  float: left;
  width: 50%;
  text-align: center;
  padding-bottom: 0.1rem;
  padding-top: 0.1rem;
  border-bottom: 1px solid #dddddd;
  border-top: 1px solid #dddddd;
}
.main p a{
  font-size: 0.24rem;
  display: inline-block;
  width: 1.5rem;
  padding-bottom: 0.1rem;
}
.main p .a{
  color: #ffb566;
  border-bottom: 0.02rem solid #ff9900;
}
</style>
