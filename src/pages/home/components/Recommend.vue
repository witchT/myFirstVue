<template>
  <div>
  <div class="title">热销推荐</div>
  <ul>
    <router-link
     tag="li" 
     class="item border-bottom"
     v-for="item of list"
     :key="item.id"
     :to="'/detail/' + item.id"
    >
      <div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl">
      </div>
      <div class="item-info">
      <p class="item-title">{{item.title}}</p>
      <p class="item-desc">{{item.desc}}</p>
      <button class="item-button">查看详情</button>
      </div>
    </router-link>
  </ul>
  </div>
</template>

<script>
export default {
  name:'HomeRecommend',
  props:{
    list:Array
  },
  data () {
    return{
    
    }
  }
}
</script>
 
<style  lang='stylus' scoped>
@import '~styles/mixins.styl';
    .title 
      line-height .8rem;
      background #eee;
      margin-top .2rem;
      text-indent .2rem;
      font-size .24rem;
    .item
      display flex;
      height 1.9rem;
      overflow hidden;
      .item-img
        width 1.7rem;
        height 1.7rem;
        padding .1rem;
      .item-info
         flex 1
         min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
      .item-desc
        line-height .4rem
        color #ccc
        font-size .24rem
        ellipsis()
      .item-button
         line-height .5rem
         background #ff9300
         color #fff
         border-radius 0.06rem
         border none
         font-size .22rem
</style>


