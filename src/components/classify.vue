<template>
  <div class="hello">
    <main-one></main-one>
  </div>
</template>

<script>
  import mainOne from "./classify/classify-one.vue"
  export default {
    data(){
      return{
          arr:[]
      }
    },
    components:{
        mainOne,
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
