import Vue from 'vue'
import App from './App.vue'
import '@/styles/index.scss'

// 全部引入组件
// import ElementUI from `${}`

const { VUE_APP_UI_COMPONENT } = process.env
const ElementUI = import('../../../node_modules/vant/lib/index.js')

// 全局注册组件
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
