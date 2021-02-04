import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import '@/styles/index.scss'

// 通过 CDN 引入的组件库
const ElementUI = window.ELEMENT

// 注册组件库
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
