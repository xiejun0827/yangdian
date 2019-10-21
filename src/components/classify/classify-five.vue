<template>
  <div class="hello">
    <div class="right">
        <ul>
          <li v-for="(item,ind) in arr.list">
            <img :src="item.thumbnail">
            <p>{{item.name}}</p>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
          arr:{},
      }
    },
    mounted(){
        this.$http({
          url:"http://yd.msword.top/getClassify"
        }).then(res => {
            this.arr = res.data.data[3];
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media screen and (max-width: 415px) {
    img{width:1.7rem;height: 1.7rem}
    p{width: 2.34rem}
  }
  ul{
    overflow: hidden;
    background: #fff;
  }
 ul li{
  position: relative;
  float: left;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  border: 3px solid #2b8cad;
  border-radius: 0.05rem;
  padding: 0.13rem 0.32rem 0.47rem;
}
 ul li p{
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
