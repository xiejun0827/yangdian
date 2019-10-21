<template>
  <div class="hello">
    <div class="up">
      <span class="span1 iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-" @click="$router.go(-1)"></span>
      <span class="span2">...</span>
      <span class="span3 iconfont icon-shoppingcart-over" @click="send()"></span>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in arr.swiperImgArr">
          <img :src="item" alt="">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination">
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next" style="font-size: 0.5rem"></div>
      <div class="swiper-button-prev" style="font-size: 0.5rem"></div>
    </div>
    <div class="banner">
      <div class="banner-one">
        <p>{{arr.name}}</p>
        <div>
          <img src="../../../static/details/xinxin_03.jpg" alt="">
          <span>收藏</span>
        </div>
      </div>
      <div class="banner-two">
        <p>￥{{arr.reduct_price}}</p>
        <span style="margin-left: 0.4rem">{{parseFloat(arr.allowance*10).toFixed(1)}}折</span>
        <span>包邮</span>
      </div>
      <div class="banner-three">
        <p>￥{{arr.original_price}}</p>
        <div>
          <span v-for="(ar,i) in arr.describe" :key="i">
          {{ar}}
        </span>
        </div>
      </div>
    </div>
    <div class="down"></div>
  </div>
</template>

<script>
  import Swiper from "swiper";
  export default {
    name: 'HelloWorld',
    data(){
        return{
            arr:{}
        }
    },
    methods:{
        send(){
            this.$router.push({
              path:"/shop"
            })
        }
    },
    mounted(){
      this.$http({
        url:`http://yd.msword.top/getDetails?pid=${this.$route.query.id}`
      })
        .then(res => {
          this.arr = res.data.data;
          this.$nextTick(() => {
            let swiper = new Swiper('.swiper-container', {
              spaceBetween: 30,
              centeredSlides: true,
              autoplay: {
                delay: 3500,
                disableOnInteraction: false,
              },
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });
          })
        });
    },
    components:{
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../node_modules/swiper/css/swiper.min.css";
  @import "../../assets/details-one.css";
  @import "../../../font_sra86ljmwai/iconfont.css";
  @media screen and (max-width: 415px) {
    img{width:45%}
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .swiper-slide img{
    height: 5.42rem;
    width: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
