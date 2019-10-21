<template>
  <div class="hello">
    <div class="banner">
      <div class="banner-1">
        <div class="int"> <input type="text" placeholder="Montagne jeunesse">
          <img src="../../../static/index/search_03.jpg" class="search">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @media screen and (max-width: 415px) {
    img{width:10%}
  }
.banner
  width 100%
  height 5.21rem
  .banner-1
   width 7.5rem
   height 5.21rem
   margin -0.33rem auto 0
   background url("../../../static/index/banner_01.jpg")
   background-size cover
   .int
     width 5.16rem
     height 0.6rem
     margin 0 auto
     position relative
     .search
      position absolute
      right 0.2rem
      top 0.66rem
      display block
      width 0.39rem
      height 0.6rem
   input
     width 4.93rem
     height 0.6rem
     background #fed1dd
     border-radius 0.1rem
     font-size 0.28rem
     padding-left 0.23rem
     margin-top 0.66rem
</style>
