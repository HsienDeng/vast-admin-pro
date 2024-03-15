import type { App } from 'vue';
import i18n from './index.ts';

export function setupLang(app: App<Element>) {
  app.use(i18n);
}
