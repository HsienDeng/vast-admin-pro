<script setup lang="ts">
  import { computed } from 'vue';
  import { darkTheme } from 'naive-ui';
  import type { GlobalThemeOverrides } from 'naive-ui';
  import { useDesignSettingStore } from '@/store/modules/designSetting';

  const settingStore = useDesignSettingStore();
  // 深色主题切换
  const getTheme = computed(() => (settingStore.darkTheme ? darkTheme : undefined));
  // 主题颜色切换
  const themeOverrides: GlobalThemeOverrides = {
    common: {
      primaryColor: '#7232dd',
    },
  };
</script>

<template>
  <NConfigProvider :theme="getTheme" :theme-overrides="themeOverrides">
    <router-view />
  </NConfigProvider>
</template>

<style lang="scss" scoped></style>
