import Vue from 'vue'
import VueRouter from 'vue-router'
import routerGuards from './routerGuards'
// import Home from '../views/home'

// 路由模块
import controlledRoutes from './modules/controlledRoutes'
import noLoginRoutes from './modules/noLoginRoutes'
import notFoundRoutes from './modules/notFoundRoutes'
import noPermissionRoutes from './modules/noPermissionRoutes'

Vue.use(VueRouter)

const routes = [...noLoginRoutes, ...noPermissionRoutes, ...controlledRoutes, ...notFoundRoutes]

// 实例化 router
const router = new VueRouter({
  routes,
})

// 应用路由守卫
routerGuards(router)

export default router
