const Layout = () => import('@/layout/index.vue');

const routes = [
  {
    redirect: '/dashboard/main',
    path: '/',
  },
  {
    path: '/dashboard/main',
    name: '',
    component: Layout,
    children: [
      {
        path: '',
        meta: {
          title: '中控台',
          icon: 'home',
        },
        name: 'DashboardMain',
        component: () => import('@/views/dashboard/main/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      icon: 'system',
      hidden: true,
    },
    component: () => import('@/views/login/login.vue'),
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
