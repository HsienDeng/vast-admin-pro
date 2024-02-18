<script setup lang="ts">
  import { useDesignSettingStore } from '@/store/modules';
  import LayoutSide from './Menu/index.vue';
  import LayoutHeader from './Header/index.vue';

  const layoutHeaderStyle = 'height: 56px;';
  const layoutContentStyle = 'padding: 10px;height:100%';
  const designSetting = useDesignSettingStore();
</script>

<template>
  <n-layout has-sider position="absolute" class="h-full">
    <n-layout-sider :collapsed="true" :native-scrollbar="false" bordered>
      <LayoutSide />
    </n-layout-sider>
    <n-layout>
      <n-layout-header bordered :style="layoutHeaderStyle">
        <LayoutHeader />
      </n-layout-header>
      <n-layout-content :content-style="layoutContentStyle" :native-scrollbar="false" bordered>
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped lang="scss"></style>
