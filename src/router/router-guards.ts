import { Router } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

/**
 * 创建路由守卫
 */
export function createRouterGuards(router: Router) {
  router.beforeEach(() => {
    NProgress.start();
  });

  router.afterEach(() => {
    NProgress.done();
  });
}
