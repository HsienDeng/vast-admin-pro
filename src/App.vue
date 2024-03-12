<script setup lang="ts">
  import { computed } from 'vue';
  import { darkTheme } from 'naive-ui';
  import { useDesignSettingStore } from '@/store/modules/designSetting';
  import { AppProvider } from '@/components/Application';

  const settingStore = useDesignSettingStore();
  // 深色主题切换
  const getTheme = computed(() => (settingStore.darkTheme ? darkTheme : undefined));
  // 主题颜色切换
  const themeOverrides = computed(() => {
    const themeColor = settingStore.themeColor;
    return {
      common: {
        primaryColor: themeColor,
        primaryColorHover: themeColor,
        primaryColorPressed: themeColor,
      },
    };
  });
</script>

<template>
  <NConfigProvider :theme="getTheme" :theme-overrides="themeOverrides">
    <AppProvider>
      <router-view />
    </AppProvider>
  </NConfigProvider>
</template>

<style lang="scss" scoped>
  .n-config-provider {
    height: 100%;
  }
</style>
