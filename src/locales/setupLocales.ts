import type { App } from 'vue';
import { createI18n } from 'vue-i18n';
import { LANG_ENUM } from '@/enums/lang';
import { useProjectSettingStore } from '@/store/modules/projectSetting';
import zhCn from './lang/zh-cn';
import en from './lang/en';

export let i18n: ReturnType<typeof createI18n>;

export function setupLocales(app: App<Element>) {
  const projectSettingStore = useProjectSettingStore();

  i18n = createI18n({
    legacy: false,
    locale: projectSettingStore.lang,
    messages: {
      [LANG_ENUM.Zh]: zhCn,
      [LANG_ENUM.En]: en,
    },
    globalInjection: true,
  });

  app.use(i18n);
}
