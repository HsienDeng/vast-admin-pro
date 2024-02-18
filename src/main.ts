import { createApp } from 'vue';
import App from './App.vue';

import '@unocss/reset/tailwind.css';
import './styles/index.less';
import 'uno.css';
import 'virtual:svg-icons-register';

import { setupAppComponent } from '@/plugins';
import router from '@/router';
import { setupStore } from '@/store';

function boostrap() {
  const app = createApp(App);

  /* 挂载全局组件 */
  setupAppComponent(app);

  /* 挂载pinia */
  setupStore(app);

  app.use(router);

  app.mount('#app');
}

void boostrap();
