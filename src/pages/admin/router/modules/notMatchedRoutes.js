import Layout from '@/routerComponents/Layout'

// 不匹配的路由
export default [
  {
    path: '*',
    component: Layout,
    children: [
      {
        path: '*',
        meta: { title: '404（页面不存在）', icon: 'el-icon-house' },
        component: () => import('@/routerComponents/NotFound'),
      },
    ],
  },
]
