const Layout = () => import('@/layout/index.vue');

const routes = [
  {
    redirect: '/home',
    path: '/',
  },
  {
    path: '/home',
    name: '',
    component: Layout,
    children: [
      {
        path: '',
        meta: {
          title: '首页',
        },
        name: 'HomeView',
        component: () => import('@/views/home.vue'),
      },
    ],
  },
  {
    path: '/system',
    name: 'System',
    component: Layout,
    meta: {
      title: '系统管理',
    },
    children: [
      {
        path: 'menu',
        name: 'Menu',
        meta: {
          title: '菜单管理',
        },
        component: () => import('@/views/system/menu-manager/index.vue'),
      },
      {
        path: 'user',
        name: 'User',
        meta: {
          title: '用户管理',
        },
        component: () => import('@/views/system/user-manager/index.vue'),
      },
    ],
  },
];
export default routes;
