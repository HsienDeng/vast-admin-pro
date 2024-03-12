<script setup lang="ts">
  import LayoutSide from './components/Side/index.vue';
  import LayoutHeader from './components/Header/index.vue';
  import { layoutContentStyle, layoutHeaderStyle } from '@/settings/designSetting';
  import { useDesignSettingStore } from '@/store/modules/designSetting';

  const designSetting = useDesignSettingStore();
</script>

<template>
  <n-layout has-sider position="absolute" class="h-full">
    <n-layout-sider
      :collapsed="designSetting.collapsed"
      :native-scrollbar="false"
      bordered
      :collapsed-width="64"
      show-trigger="bar"
      collapse-mode="width"
      @update:collapsed="(event: boolean) => (designSetting.collapsed = event)"
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
