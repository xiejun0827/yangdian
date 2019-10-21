<template>
  <div class="helloo" style="padding-bottom: 1.32rem">
    <banner></banner>
    <main-one></main-one>
    <main-two></main-two>
    <main-three></main-three>
    <main-four></main-four>
    <main-five></main-five>
    <main-six></main-six>
  </div>
</template>

<script>
  import banner from "./index/banner.vue"
  import mainOne from "./index/main-one.vue"
  import mainTwo from "./index/main-two.vue"
  import mainThree from "./index/main-three.vue"
  import mainFour from "./index/main-four.vue"
  import mainFive from "./index/main-five.vue"
  import mainSix from "./index/main-six.vue"
  export default {
    name: 'HelloWorld',
    components:{
        banner,
        mainOne,
        mainTwo,
      mainThree,
      mainFour,
      mainFive,
      mainSix
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.helloo{
  background: #fafafa;
}
</style>
