// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入Element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 引入初始化css文件
import '@/assets/css/border.css'
import '@/assets/css/reset.css'

//  引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

//money 过滤器
Vue.filter('money', (val)=>{
  if(typeof val === 'number'){
    if (val%1 === 0){
      return val + '.00'
    } else {
      return val
    }
  } else {
    return val
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
