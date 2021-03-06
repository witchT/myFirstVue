// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import fastClick from 'fastclick'//解决移动端300毫秒点击延迟
import router from './router'
import 'styles/reset.css'
import'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
//路由就是根据网址的不同，返回不同的内容给用户
