<script setup lang="ts">
  import { computed } from 'vue';
  import { darkTheme } from 'naive-ui';
  import type { GlobalThemeOverrides } from 'naive-ui';
  import { useDesignSettingStore } from '@/store/modules/designSetting';

  const settingStore = useDesignSettingStore();
  // 深色主题切换
  const getTheme = computed(() => (settingStore.darkTheme ? darkTheme : undefined));

  const appThemeList: string[] = [
    '#2d8cf0',
    '#0960bd',
    '#0084f4',
    '#009688',
    '#536dfe',
    '#ff5c93',
    '#ee4f12',
    '#0096c7',
    '#9c27b0',
    '#ff9800',
    '#FF3D68',
    '#00C1D4',
    '#71EFA3',
    '#171010',
    '#78DEC7',
    '#1768AC',
    '#FB9300',
    '#FC5404',
  ];

  // 主题颜色切换
  const themeOverrides: GlobalThemeOverrides = {
    common: {
      primaryColor: appThemeList[0],
      primaryColorHover: appThemeList[0],
      primaryColorPressed: appThemeList[0],
    },
  };
</script>

<template>
  <NConfigProvider :theme="getTheme" :theme-overrides="themeOverrides">
    <router-view />
  </NConfigProvider>
</template>

<style lang="scss" scoped>
  .n-config-provider {
    height: 100%;
  }
</style>
