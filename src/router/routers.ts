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
          icon: 'home',
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
      icon: 'system',
    },
    children: [
      {
        path: 'menu',
        name: 'Menu',
        meta: {
          title: '菜单管理',
          icon: 'application-menu',
        },
        component: () => import('@/views/system/menu-manager/index.vue'),
      },
      {
        path: 'user',
        name: 'User',
        meta: {
          title: '用户管理',
          icon: 'user',
        },
        component: () => import('@/views/system/user-manager/index.vue'),
      },
    ],
  },
];
export default routes;
