import Vue from 'vue'
import App from './App.vue'
import '@/styles/index.scss'

// 通过 CDN 引入的组件库
const ElementUI = window.ELEMENT

// 注册组件
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
