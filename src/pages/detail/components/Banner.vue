<template>
  <div>
    <div class="banner" @click="handleBannerClick">
    <img class="banner-img" src="//source.qunarzz.com/site/images/wns/20190328_qunar_dujia_homepage_2.jpg">
     <div class="banner-info">
      <div class="banner-title">大连海洋区</div>
      <div class="banner-number"><span class="iconfont">&#xe6dd;</span>39</div>
    </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name:'DetailBanner',
  data (){
    return {
    showGallary:false,
    imgs :[
      '//source.qunarzz.com/site/images/wns/20190328_qunar_dujia_homepage_2.jpg',
      '//source.qunarzz.com/site/images/wns/20190328_qunar_dujia_homepage_2.jpg'
    ]
    }
    
  },
  methods :{
    handleBannerClick (){
      this.showGallary=true;
    },
    handleGallaryClose(){
      this.showGallary=false;
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 35%
.banner-img
  width 100%
.banner-info
  display flex
  position absolute
  left 0
  right 0
  bottom 0
  line-height .6rem
  color #fff
  background-image linear-gradient(top,rgba(0,0,0,0), rgba(0,0,0,0.8))
.banner-title
  flex 1
  font-size .32rem
  padding 0 .2rem

.banner-number
  padding 0 .4rem
  line-height .4rem
  height .4rem
  border-radius .2rem
  background rgba(0,0,0,0.8)
  font-size .32rem



</style>


