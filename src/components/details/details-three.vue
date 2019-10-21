<template>
  <div class="hello">
    <ul class="ul-1">
      <li v-for="(a,i) in brr" :style="crr[i]" @click="send(i)">
        {{a.title}}
      </li>
    </ul>
    <ul class="ul-2" v-for="(a,i) in drr[0]">
      <li>
        <div class="div">
          <p>{{a.buyerName}}</p>
          <span>{{a.createTime | timer}}</span>
        </div>
        <img :src="aa" alt="" v-for="(aa,ii) in a.postImg">
        <p class="p1">{{a.postDescribe}}</p>
        <span class="span1">
          {{a.adminReviews}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data(){
        return{
            brr:[
              {
                  title:"全部评价",
                  name:""
              },
              {
                  title:"好评",
                  name:""
              },
              {
                  title:"差评",
                  name:""
              },
              {
                  title:"晒单",
                  name:""
              }
            ],
            arr:[],
            drr:[""],
            crr:[{
                background:"#ff9900"
            }]
        }
    },
    methods:{
        send(i){
            this.crr=[];
            this.$set(this.crr,i,{
              background:"#ff9900"
            });
          this.$set(this.drr,0,this.brr[i].name);
        }
    },
    mounted(){
      this.$http({
        url:`http://yd.msword.top/getDetails?pid=${this.$route.query.id}`
      })
        .then(res => {
          this.arr = res.data.data;
          this.brr[0].name=res.data.data.buyerReviews.all;
          this.brr[1].name=res.data.data.buyerReviews.good;
          this.brr[2].name=res.data.data.buyerReviews.bad;
          this.brr[3].name=res.data.data.buyerReviews.postForm;
          this.$set(this.drr,0,res.data.data.buyerReviews.all)
        });
    },
    filters:{
        timer:function (x) {
          let date = new Date(Number(x));
          let y = date.getFullYear();
          let MM = date.getMonth() + 1;
          MM = MM < 10 ? ('0' + MM) : MM;
          let d = date.getDate();
          d = d < 10 ? ('0' + d) : d;
          let h = date.getHours();
          h = h < 10 ? ('0' + h) : h;
          let m = date.getMinutes();
          m = m < 10 ? ('0' + m) : m;
          let s = date.getSeconds();
          s = s < 10 ? ('0' + s) : s;
          return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/details-three.css";
@media screen and (max-width: 415px) {
  img{width:50%}
}
</style>
