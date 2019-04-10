<template>
  <div class="wrapper">
  <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) of list" :key="index"><img class="swiper-img" :src="item.imgUrl"/></swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
    export default {
       name:'HomeSwiper',
       props:{
         list: Array
       },
       data (){
         return {
           swiperOption: {
             pagination: '.swiper-pagination',
             loop:true
           }
         }
       },
       computed:{
         showSwiper (){
           return this.list.length;
         }
       }
    }
</script>

<style lang="stylus" scoped>
  .swiper-img{width: 100%;}
  .wrapper{width: 100%;height: 0;overflow: hidden;padding-bottom: 30.83%;}
  .wrapper >>> .swiper-pagination-bullet-active{background: #fff;}
</style>
