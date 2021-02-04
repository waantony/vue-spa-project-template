import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import '@/styles/index.scss'

// 全部引入组件
import ElementUI from 'element-ui'

// 全局注册组件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
