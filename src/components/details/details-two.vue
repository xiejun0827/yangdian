<template>
  <div class="hello">
    <div style="width: 6.58rem;margin: 0 auto">
      <img :src="a" alt="" v-for="(a,i) in arr.shopDes" style="width: 6.58rem;">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data(){
        return{
            arr:[],
        }
    },
    mounted(){
      this.$http({
        url:`http://yd.msword.top/getDetails?pid=${this.$route.query.id}`
      })
        .then(res => {
          this.arr = res.data.data;
        });
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media screen and (max-width: 415px) {
    img{width:50%}
  }
</style>
