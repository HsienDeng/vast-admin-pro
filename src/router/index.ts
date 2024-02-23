import { createRouter, createWebHistory, RouterOptions, Router } from 'vue-router';
import routes from './routers';
import { createRouterGuards } from './router-guards';

// RouterOptions是路由选项类型
const options: RouterOptions = {
  history: createWebHistory(),
  routes,
};

// Router是路由对象类型
const router: Router = createRouter(options);

createRouterGuards(router);

export default router;
