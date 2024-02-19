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
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useDesignSettingStore } from '@/store/modules/designSetting';

  import SvgIcon from '@/components/SvgIcon';

  const settingStore = useDesignSettingStore();
  const active = ref(false);

  defineExpose({
    showDrawer: (bol) => (active.value = bol),
  });
</script>

<style lang="less" scoped>
  .n-divider:not(.n-divider--vertical) {
    margin: 10px 0;
  }
</style>
