import Vue from 'vue'
import VueRouter from 'vue-router'
import routerGuards from './routerGuards'

// 非侧边栏路由模块
import publicRoutes from './modules/publicRoutes'
import notMatchedRoutes from './modules/notMatchedRoutes'

// 无权限的侧边栏路由
import notControlledSidebarRoutes from './sidebar'

Vue.use(VueRouter)

// 初始化的路由列表
const routes = [
  ...notControlledSidebarRoutes, // 无权限的侧边栏路由
  ...publicRoutes, // 无登录，无权限的开放路由
  ...notMatchedRoutes, // 不匹配路由
]

// 实例化 router
const router = new VueRouter({
  routes,
})

// 应用路由守卫
routerGuards(router)

export default router
