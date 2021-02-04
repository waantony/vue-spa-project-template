import Vue from 'vue'
import VueRouter from 'vue-router'
import routerGuards from './routerGuards'
import Home from '../views/home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: '首页', keepAlive: true },
  },
  {
    path: '/lazy',
    component: () => import('../views/home'),
    meta: { title: '首页', keepAlive: true },
  },
]

const router = new VueRouter({
  routes,
})

routerGuards(router)

export default router
