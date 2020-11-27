import Vue from 'vue'
import VueRouter from 'vue-router'
import routerGuards from './routerGuards'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/test',
    component: () => import('@/views/test'),
    meta: { title: '测试页面' },
  },
]

const router = new VueRouter({
  routes,
})

routerGuards(router)

export default router
