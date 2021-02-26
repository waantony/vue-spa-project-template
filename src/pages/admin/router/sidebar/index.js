import Layout from '@/routerComponents/Layout'
import notControlledRoutes from './notControlledRoutes'
// import controlledRoutes from './controlledRoutes'

// 需要 Layout 布局的路由，全部作为 children 使用
const children = [
  ...notControlledRoutes,
]

export default [
  {
    path: '/',
    component: Layout,
    children,
    props: {
      sideBarMenus: children,
    },
  },
]
