import layout from '../../layout'

// 需要权限控制的路由
export default [
  // {
  //   path: '/tasklist',
  //   component: layout,
  //   children: [
  //     {
  //       path: '',
  //       name: 'taskList',
  //       component: () => import('../../views/tasks/taskList'),
  //       meta: {
  //         title: '任务管理',
  //         icon: 'el-icon-document',
  //         value: 'task:task',
  //         btnPerms: [
  //           { txt: '审核', value: 'task:audit' },
  //           { txt: '查看', value: 'task:view' },
  //           { txt: '新增', value: 'task:add' },
  //           { txt: '编辑', value: 'task:edit' },
  //           { txt: '删除', value: 'task:remove' },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/itemList',
  //   component: layout,
  //   children: [
  //     {
  //       path: '',
  //       name: 'itemList',
  //       component: () => import('../../views/items'),
  //       meta: {
  //         title: '项目管理',
  //         icon: 'el-icon-document',
  //         value: 'item:item',
  //         btnPerms: [
  //           // { txt: '审核', value: 'item:view' },
  //           { txt: '查看', value: 'item:view' },
  //           { txt: '新增', value: 'item:add' },
  //           { txt: '编辑', value: 'item:edit' },
  //           { txt: '删除', value: 'item:remove' },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/stations',
  //   component: layout,
  //   children: [
  //     {
  //       path: '',
  //       name: 'stations',
  //       component: () => import('../../views/stations'),
  //       meta: {
  //         title: '基站管理',
  //         icon: 'el-icon-position',
  //         value: 'station:station',
  //         btnPerms: [
  //           { txt: '查看', value: 'station:view' },
  //           { txt: '新增', value: 'station:add' },
  //           { txt: '编辑', value: 'station:edit' },
  //           { txt: '删除', value: 'station:remove' },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/persons',
  //   component: layout,
  //   children: [
  //     {
  //       path: '',
  //       name: 'persons',
  //       component: () => import('../../views/persons'),
  //       meta: {
  //         title: '人员管理',
  //         icon: 'el-icon-user-solid',
  //         value: 'person:person',
  //         btnPerms: [
  //           { txt: '查看', value: 'person:view' },
  //           { txt: '新增', value: 'person:add' },
  //           { txt: '编辑', value: 'person:edit' },
  //           { txt: '删除', value: 'person:remove' },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/pics',
  //   component: layout,
  //   children: [
  //     {
  //       path: '',
  //       name: 'pics',
  //       component: () => import('../../views/pics'),
  //       meta: {
  //         title: '图片库',
  //         icon: 'el-icon-picture-outline',
  //         value: 'person:person',
  //         btnPerms: [
  //           { txt: '查看', value: 'person:view' },
  //           { txt: '新增', value: 'person:add' },
  //           { txt: '编辑', value: 'person:edit' },
  //           { txt: '删除', value: 'person:remove' },
  //         ],
  //       },
  //     },
  //   ],
  // },
  {
    path: '/system',
    component: layout,
    meta: { title: '系统管理', icon: 'el-icon-setting' },
    children: [
      {
        path: 'users',
        component: () => import('@/components/BaseNestedRouterView'),
        meta: { title: '用户管理', icon: 'el-icon-user' },
        children: [
          {
            path: 'list',
            name: 'userList',
            component: () => import('../../views/system/users'),
            meta: {
              title: '用户列表',
              icon: 'el-icon-user',
              value: 'sys:user:user',
            },
          },
          {
            path: 'roles',
            name: 'roles',
            component: () => import('../../views/system/roles'),
            meta: {
              title: '角色管理',
              icon: 'el-icon-key',
              value: 'sys:role:role',
            },
          },
        ],
      },
      // {
      //   path: 'departments',
      //   name: 'departments',
      //   component: () => import('../../views/system/departments'),
      //   meta: {
      //     title: '部门管理',
      //     icon: 'el-icon-menu',
      //     value: 'sys:dept:dept',
      //     btnPerms: [
      //       { txt: '查看', value: 'sys:dept:view' },
      //       { txt: '新增', value: 'sys:dept:add' },
      //       { txt: '编辑', value: 'sys:dept:edit' },
      //       { txt: '删除', value: 'sys:dept:remove' },
      //     ]
      //   }
      // },
    ],
  },
]
