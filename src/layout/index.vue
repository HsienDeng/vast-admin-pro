<script setup lang="ts">
  import { useDesignSettingStore } from '@/store/modules/designSetting';
  import LayoutSide from './components/Side/index.vue';
  import LayoutHeader from './components/Header/index.vue';

  const layoutHeaderStyle = 'height: 56px;';
  const layoutContentStyle = 'padding: 10px; height:100%';
  const designSetting = useDesignSettingStore();
</script>

<template>
  <n-layout has-sider position="absolute" class="h-full">
    <n-layout-sider
      :collapsed="designSetting.collapsed"
      :native-scrollbar="false"
      bordered
      :collapsed-width="64"
      show-trigger
      collapse-mode="width"
      @update:collapsed="(event) => (designSetting.collapsed = event)"
    >
      <LayoutSide :collapsed="designSetting.collapsed" />
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
