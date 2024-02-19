<script setup lang="ts">
  import { computed } from 'vue';
  import { darkTheme } from 'naive-ui';
  import { useDesignSettingStore } from '@/store/modules/designSetting';

  const settingStore = useDesignSettingStore();

  const getTheme = computed(() => (settingStore.darkTheme ? darkTheme : undefined));
</script>

<template>
  <NConfigProvider :theme="getTheme">
    <router-view />
  </NConfigProvider>
</template>

<style lang="scss" scoped></style>
