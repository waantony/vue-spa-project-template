// 免登录的路由

export default [
  {
    path: '/login',
    component: () => import('../../views/login'),
    meta: { title: '登录', icon: '', id: '' },
  },
]
