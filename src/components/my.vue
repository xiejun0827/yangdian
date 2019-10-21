<template>
  <div class="hello">
    <div class="top"></div>
    <div class="main">
      <div>
        <img src="../../static/my/set.jpg" alt="">
        <p>个人中心</p>
        <img src="../../static/my/news.jpg" alt="" class="img1">
      </div>
    </div>
    <div class="main-1">
      <div></div>
      <div @click="$router.push('/login')">点击登录</div>
      <div>
        <img src="../../static/my/xinxin.png" alt="">
        <p>我的收藏</p>
      </div>
    </div>
    <div class="main-2">
      <p>我的订单</p>
      <p>查看全部订单</p>
    </div>
    <ul class="main-3">
      <li v-for="(a,i) in arr">
        <img :src="a.url" alt="">
        <p>{{a.title}}</p>
      </li>
    </ul>
    <div class="main-4">
      <p>收货地址管理</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data(){
        return{
            arr:[{title:"待付款",url:"../../static/my/img0.png"},
              {title:"待发货",url:"../../static/my/img1.png"},
              {title:"待收货",url:"../../static/my/img2.png"},
              {title:"待评价",url:"../../static/my/img3.png"},
              {title:"退款/善后",url:"../../static/my/img4.png"},]
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/my.css";
  @media screen and (max-width: 415px) {
    img{width:5%}
    .main-3 img{width: 40%;height: 0.5rem}
  }
  /*.top{*/
    /*width: 7.5rem;*/
    /*height: 0.4rem;*/
    /*margin: 0 auto;*/
    /*background: url("../../static/details/details-top_01.jpg");*/
    /*background-size: cover;*/
  /*}*/
</style>
