<!--
 * @Author: Coder Derek
 * @File: index.vue
 * @Software: WebStorm
-->
<template>
  <n-flex justify="space-between" class="vast-header h-full">
    <!-- 左侧内容 -->
    <div class="vast-content-left">
      <div class="collapse cursor-pointer" @click="toggleCollapsed">
        <SvgIcon :name="settingStore.collapsed ? 'menu-unfold' : 'menu-unfold-one'" />
      </div>
    </div>
    <!-- 右侧内容 -->
    <div class="vast-content-right">
      <div class="functional-list-content">
        <n-flex justify="end">
          <div class="icon-item item">
            <SvgIcon name="search" />
          </div>
          <div class="icon-item item">
            <SvgIcon name="international" />
          </div>
          <div class="item">
            <n-avatar src="https://i0.imgs.ovh/2024/02/17/oo6uv.png" />
          </div>
          <div class="icon-item item" @click="showSettingDrawer">
            <SvgIcon name="setting" />
          </div>
        </n-flex>
      </div>
    </div>
  </n-flex>

  <SettingDrawer ref="settingDrawer" />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import SettingDrawer from './SettingDrawer.vue';

  import { useDesignSettingStore } from '@/store/modules/designSetting';

  const settingDrawer = ref<InstanceType<typeof SettingDrawer>>();
  const settingStore = useDesignSettingStore();

  // Toggle collapsed
  const toggleCollapsed = () => {
    settingStore.collapsed = !settingStore.collapsed;
  };

  // Show setting drawer
  const showSettingDrawer = () => {
    settingDrawer.value?.showDrawer(true);
  };
</script>

<style scoped lang="less">
  .vast-header {
    padding: 0 25px 0 15px;
    align-items: center;

    .vast-content-right {
      cursor: pointer;

      .functional-list-content {
        .item {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon-item {
          box-sizing: border-box;
          padding: 12px;
          border-radius: 8px;
          transition: all 0.5s linear;
        }
        .icon-item:hover {
          background-color: #e9f2ff;
          color: #2080f0;
          // :deep(svg use) {
          //   stroke: #2080f0;
          // }
        }
      }
    }
  }
</style>
