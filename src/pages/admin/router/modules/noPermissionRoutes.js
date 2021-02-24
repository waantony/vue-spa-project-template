import layout from '../../layout'

// 不需要权限控制的路由
export default [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/',
        name: 'home',
        meta: { title: '首页', icon: 'el-icon-house' },
        component: () => import('../../views/home'),
      },
    ],
  },
  {
    path: '/statistics',
    component: layout,
    meta: { title: '统计', icon: 'el-icon-s-data' },
    children: [
      {
        path: '',
        name: 'statistics',
        meta: { title: '统计', icon: 'el-icon-s-data' },
        component: () => import('../../views/statistics'),
      },
    ],
  },
]
