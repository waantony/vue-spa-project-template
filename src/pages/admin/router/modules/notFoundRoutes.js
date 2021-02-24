// 无匹配的路由
import layout from '../../layout'

export default [
  {
    path: '*',
    component: layout,
    children: [
      {
        path: '*',
        meta: { title: '404', icon: 'el-icon-house' },
        component: () => import('@/components/BaseNotFound'),
      },
    ],
  },
  // {
  //   path: '*',
  //   name: 'notFound',
  //   redirect: '/',
  // },
]
