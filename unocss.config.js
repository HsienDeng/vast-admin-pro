import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
  corePlugins: {
    preflight: false,
  },
  presets: [presetUno(), presetAttributify()],
});
