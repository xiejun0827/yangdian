<template>
  <div class="hello">
    <div class="one">
      <img src="../../../static/index/furniture.png" alt="" class="img">
      <p class="one-p">{{arr.name}}</p>
    </div>
    <ul>
      <li v-for="item in arr.list" @click="send(item.id)">
        <img :src="item.thumbnail" alt="">
        <p class="li-2" >{{item.name}}</p>
        <div class="li-1">
          <p>￥{{item.reduct_price}}</p>
          <span>￥{{item.original_price}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
          img:"",
        arr:[],
      }
    },
    methods:{
      send(x){
        this.$router.push({
          path:"/details",
          query:{
            id:x
          }
        })
      }
    },
    mounted(){
        this.$http({
          url:"http://yd.msword.top/getIndexData"
        })
          .then(res => {
            this.arr =res.data.data[3]
          })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @media screen and (max-width: 415px) {
    img{width:6%}
  }
  .one
   width 7.5rem
   height 0.95rem
   margin 0 auto
   .img
    margin-left 0.23rem
    margin-top 0.27rem
    float left
   .one-p
    float left
    font-size 0.28rem
    line-height 0.95rem
    padding-left 0.2rem
  ul
   overflow-x auto
   width 100%
   li
    display inline-block
    border 3px solid #eeeeee
    margin-left 0.19rem
    width 3.24rem
    img
      width 3.24rem
      height 3.29rem
    .li-2
      font-size 0.26rem
      color: #666666
      padding-left 0.20rem
      padding-right 0.26rem
      margin-top 0.24rem
      word-break: break-all
      padding-bottom 0.2rem
      height 0.74rem
    .li-1
      overflow hidden
      padding-bottom 0.2rem
      p
       float left
       margin-left 0.24rem
       font-size 0.26rem
       color #ffa002
      span
       float right
       margin-right 0.14rem
       font-size 0.26rem
       color #747474

</style>
