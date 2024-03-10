<template>
  <n-drawer v-model:show="active" :width="300">
    <n-drawer-content title="项目通用设置" :native-scrollbar="false" closable>
      <n-divider title-placement="center">深色模式</n-divider>
      <n-flex justify="center">
        <n-switch v-model:value="settingStore.darkTheme" class="dark-theme-switch" size="large">
          <template #icon>
            <SvgIcon name="dark-mode" size="24" />
          </template>
        </n-switch>
      </n-flex>
      <n-divider title-placement="center">主题颜色</n-divider>
      <n-flex justify="center">
        <span
          class="theme-item flex justify-center align-center"
          v-for="(item, index) in appThemeList"
          :key="index"
          :style="{ 'background-color': item }"
        >
          <div v-if="settingStore.themeColor === item">
            <SvgIcon name="check" color="#ffffff" />
          </div>
        </span>
      </n-flex>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useDesignSettingStore } from '@/store/modules/designSetting';
  import { appThemeList } from '@/settings/designSetting.ts';

  import SvgIcon from '@/components/SvgIcon';

  const settingStore = useDesignSettingStore();
  const active = ref(false);

  console.log(settingStore.themeColor);

  defineExpose({
    showDrawer: (bol: boolean) => (active.value = bol),
  });
</script>

<style lang="less" scoped>
  //.n-divider:not(.n-divider--vertical) {
  //  margin: 0 20px 0;
  //}

  .theme-item {
    width: 20px;
    min-width: 20px;
    height: 20px;
    cursor: pointer;
    border: 1px solid #eee;
    border-radius: 2px;
    margin: 0 5px 5px 0;
    text-align: center;
    line-height: 14px;

    .n-icon {
      color: #fff;
    }
  }
</style>
