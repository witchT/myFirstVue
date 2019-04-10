<template>
<div class="header">
  <div class="header-left">
    <span class="iconfont back-icon">&#xe606;</span>
  </div>
  <div class="header-center">
    <span class="iconfont">&#xe621;</span>输入城市/景点/游玩主题
  </div>
  <router-link to='/city'>
  <div class="header-right">
    {{this.$store.state.city}}
    <span class="iconfont ">&#xe6aa;</span>
  </div>
</router-link>
</div>
</template>

<script>
  export default{

    name:'HomeHeader',
    props:{
      city: String
    }

  }

</script>
<style lang="stylus"  scoped>
  @import "~styles/varibles.styl";
  .header
    display: flex; font-size: .24rem;height: $headerHeight;background:$bgColor;color: #fff;line-height: $headerHeight;
  .header-left{float: left;width: .64rem;}
  .back-icon{}
  .header-center{flex: 1;background: #fff;height: .64rem;line-height: .64rem;color: #ccc;margin-top: .1rem;border-radius: .1rem;}
  .header-right{float: right;width: 1.24rem;text-align: center;}

</style>
