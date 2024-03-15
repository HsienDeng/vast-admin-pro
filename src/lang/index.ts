import { createI18n } from 'vue-i18n';
import { LANG_ENUM } from '@/enum/lang';

import znCn from './zh-cn';
import enUs from './en-us';

const i18n = createI18n({
  legacy: false,
  locale: 'zh-cn',
  messages: {
    [LANG_ENUM.Zh]: znCn,
    [LANG_ENUM.En]: enUs,
  },
});
export default i18n;
