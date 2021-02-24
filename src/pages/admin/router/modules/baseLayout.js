import layout from '../../layout'
import controlledRoutes from './controlledRoutes'
// import controlledRoutes from './controlledRoutes'
// 需要 layout 模版布局的路由，作为 children 传入
export default [
  {
    path: '/',
    component: layout,
    children: [...controlledRoutes],
  },
]
