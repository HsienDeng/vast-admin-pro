import { generateMessage } from '../helper';

const modules = import.meta.glob('./en/**/*.{json,ts,js}', { eager: true });

export default {
  ...generateMessage(modules as Recordable<Recordable>, 'en'),
};
