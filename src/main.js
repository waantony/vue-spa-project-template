import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/styles/index.scss'

// 全部引入 vant 组件
// import Vant from 'vant'
// import { Button } from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
