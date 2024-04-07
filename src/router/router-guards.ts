import { Router } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { PageEnum } from '@/enums/pageEnum';
/**
 * 创建路由守卫
 */
export function createRouterGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    NProgress.start();
    // 如果没有token，跳转到登录页
    if (to.path === PageEnum.BASE_LOGIN) {
      next();
    } else if (!localStorage.getItem('token')) {
      next(PageEnum.BASE_LOGIN);
      // return;
    } else {
      next();
    }
  });

  router.afterEach(() => {
    NProgress.done();
  });
}
