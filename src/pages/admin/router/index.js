import Vue from 'vue'
import VueRouter from 'vue-router'
import routerGuards from './routerGuards'
// import Home from '../views/home'

// 路由模块
import controlledRoutes from './modules/controlledRoutes'
import publicRoutes from './modules/publicRoutes'
import notMatchedRoutes from './modules/notMatchedRoutes'
import LayoutRoutes from './modules/LayoutRoutes'
Vue.use(VueRouter)

const routes = [
  ...publicRoutes,
  ...controlledRoutes,
  ...LayoutRoutes,
  ...notMatchedRoutes,
]

// 实例化 router
const router = new VueRouter({
  routes,
})

// 应用路由守卫
routerGuards(router)

export default router
