<template>
  <div class="container">
    <div class="wrapper" :option='swiperOptions'>
      <swiper>
    <!-- slides -->
    <swiper-slide><img class="gallary-img" src="//source.qunarzz.com/site/images/wns/20190328_qunar_dujia_homepage_2.jpg"/></swiper-slide>
    <swiper-slide><img class="gallary-img" src="//source.qunarzz.com/site/images/wns/20190328_qunar_dujia_homepage_2.jpg"/></swiper-slide>
    <swiper-slide><img class="gallary-img" src="//source.qunarzz.com/site/images/wns/20190328_qunar_dujia_homepage_2.jpg"/></swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  data () {
    return {
      swiperOptions :{
      pagination:'.swiper-pagination',
      paginationType: 'fraction'
      }
    }
  }
  
}
</script>
<style lang='stylus' scoped>
.container >>> .swiper-container
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background #000
.wrapper
  background #fff
  width 100%
  height 0
  overflow hidden
  padding-bottom 100%

.gallary-img
  width 100%
.swiper-pagination
  color #fff
  bottom -1rem

  

</style>


