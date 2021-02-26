
// 不需要权限控制的路由
export default [
  {
    path: '/',
    meta: { title: '首页', icon: 'el-icon-house' },
    component: () => import('../../views/home'),
  },
  {
    path: '/statistics',
    meta: { title: '统计', icon: 'el-icon-s-data' },
    component: () => import('../../views/statistics'),
  },
  {
    path: '/system1',
    component: () => import('@/routerComponents/NestedRouterView'),
    meta: { title: '系统管理1', icon: 'el-icon-setting' },
    children: [
      {
        path: 'users/',
        component: () => import('@/routerComponents/NestedRouterView'),
        meta: { title: '用户管理', icon: 'el-icon-user' },
        children: [
          {
            path: 'list/',
            component: () => import('../../views/system/users'),
            meta: {
              title: '用户列表',
              icon: 'el-icon-user',
              value: 'sys:user:user',
            },
          },
          {
            path: 'roles',
            component: () => import('../../views/system/roles'),
            meta: {
              title: '角色管理',
              icon: 'el-icon-key',
              value: 'sys:role:role',
            },
          },
        ],
      },
      {
        path: 'departments',
        component: () => import('../../views/system/departments'),
        meta: {
          title: '部门管理',
          icon: 'el-icon-menu',
          value: 'sys:dept:dept',
        },
      },
    ],
  },
  {
    path: '/system2',
    component: () => import('@/routerComponents/NestedRouterView'),
    meta: { title: '系统管理1', icon: 'el-icon-setting' },
    children: [
      {
        path: 'users/',
        component: () => import('@/routerComponents/NestedRouterView'),
        meta: { title: '用户管理', icon: 'el-icon-user' },
        children: [
          {
            path: 'list/',
            component: () => import('../../views/system/users'),
            meta: {
              title: '用户列表',
              icon: 'el-icon-user',
              value: 'sys:user:user',
            },
          },
          {
            path: 'roles',
            component: () => import('../../views/system/roles'),
            meta: {
              title: '角色管理',
              icon: 'el-icon-key',
              value: 'sys:role:role',
            },
          },
        ],
      },
      {
        path: 'departments',
        component: () => import('../../views/system/departments'),
        meta: {
          title: '部门管理',
          icon: 'el-icon-menu',
          value: 'sys:dept:dept',
        },
      },
    ],
  },
  {
    path: '/system3',
    component: () => import('@/routerComponents/NestedRouterView'),
    meta: { title: '系统管理1', icon: 'el-icon-setting' },
    children: [
      {
        path: 'users/',
        component: () => import('@/routerComponents/NestedRouterView'),
        meta: { title: '用户管理', icon: 'el-icon-user' },
        children: [
          {
            path: 'list/',
            component: () => import('../../views/system/users'),
            meta: {
              title: '用户列表',
              icon: 'el-icon-user',
              value: 'sys:user:user',
            },
          },
          {
            path: 'roles',
            component: () => import('../../views/system/roles'),
            meta: {
              title: '角色管理',
              icon: 'el-icon-key',
              value: 'sys:role:role',
            },
          },
        ],
      },
      {
        path: 'departments',
        component: () => import('../../views/system/departments'),
        meta: {
          title: '部门管理',
          icon: 'el-icon-menu',
          value: 'sys:dept:dept',
        },
      },
    ],
  },
  {
    path: '/system4',
    component: () => import('@/routerComponents/NestedRouterView'),
    meta: { title: '系统管理1', icon: 'el-icon-setting' },
    children: [
      {
        path: 'users/',
        component: () => import('@/routerComponents/NestedRouterView'),
        meta: { title: '用户管理', icon: 'el-icon-user' },
        children: [
          {
            path: 'list/',
            component: () => import('../../views/system/users'),
            meta: {
              title: '用户列表',
              icon: 'el-icon-user',
              value: 'sys:user:user',
            },
          },
          {
            path: 'roles',
            component: () => import('../../views/system/roles'),
            meta: {
              title: '角色管理',
              icon: 'el-icon-key',
              value: 'sys:role:role',
            },
          },
        ],
      },
      {
        path: 'departments',
        component: () => import('../../views/system/departments'),
        meta: {
          title: '部门管理',
          icon: 'el-icon-menu',
          value: 'sys:dept:dept',
        },
      },
    ],
  },
  {
    path: '/system5',
    component: () => import('@/routerComponents/NestedRouterView'),
    meta: { title: '系统管理1', icon: 'el-icon-setting' },
    children: [
      {
        path: 'users/',
        component: () => import('@/routerComponents/NestedRouterView'),
        meta: { title: '用户管理', icon: 'el-icon-user' },
        children: [
          {
            path: 'list/',
            component: () => import('../../views/system/users'),
            meta: {
              title: '用户列表',
              icon: 'el-icon-user',
              value: 'sys:user:user',
            },
          },
          {
            path: 'roles',
            component: () => import('../../views/system/roles'),
            meta: {
              title: '角色管理',
              icon: 'el-icon-key',
              value: 'sys:role:role',
            },
          },
        ],
      },
      {
        path: 'departments',
        component: () => import('../../views/system/departments'),
        meta: {
          title: '部门管理',
          icon: 'el-icon-menu',
          value: 'sys:dept:dept',
        },
      },
    ],
  },
]
