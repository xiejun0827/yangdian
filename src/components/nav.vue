<template>
  <div class="hello">
    <router-view></router-view>
    <div class="foot">
      <div>
        <router-link style="font-size: 0.4rem; float: left" active-class="abc"
                     :class="a['css']" :to="flag?ppp[i]:ooo[i]" v-for="(a,i) in arr" class="ppp" :key="i">
          <span style="font-size: 0.22rem">{{a['tit']}}</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        ooo:["/index","/classify","/shop","/my"],
        ppp:["/index","/classify","/shop","/goo"],
        arr:[
          {css:"iconfont icon-shouye",
            tit:`首页`,


          },
          {css:"iconfont icon-tubiaolunkuo-",
            tit:`分类`,


          },
          {css:"iconfont icon-qicheqianlian-",
            tit:`购物车`,


          },
          {css:"iconfont icon-wo",
            tit:`我`,
          },

        ],
        brr:["yellow"],
        crr:[true],
        flag:false
      }
    },
    methods:{
      sty(x){
        this.crr=[];
        this.$set(this.crr,x,true);
      }
    },
    mounted(){
         this.flag = sessionStorage.getItem('flag')
    },
    components:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "../../font_ce6kwehbr1b/iconfont.css"
  @media screen and (max-width: 415px) {
    img{width:100%}
  }
  .foot
    position fixed
    bottom 0
    width 100%
    height 1.001rem
    background white
    padding-top 0.14rem
    border-top 2px solid #eee
  .abc{
    color orange
  }
  .ppp{
    width 25%
    text-align center
  }
  .ppp span{
    width 100%
    text-align center
    display block
    margin-top 0.1rem
  }

</style>
