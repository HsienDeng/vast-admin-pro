import { generateMessage } from '../helper';

const modules = import.meta.glob('./zh-CN/**/*.{json,ts,js}', { eager: true });

export default {
  ...generateMessage(modules as Recordable<Recordable>, 'zh-CN'),
};
