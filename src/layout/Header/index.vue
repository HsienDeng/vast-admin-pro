<!--
 * @Author: Coder Derek
 * @File: index.vue
 * @Software: WebStorm
-->
<template>
  <n-flex justify="space-between" class="vast-header h-full">
    <HeaderLeftContent />
    <HeaderRightContent />
  </n-flex>
</template>

<script setup lang="ts">
  import { HeaderRightContent, HeaderLeftContent } from './component/index.ts';
</script>

<style scoped lang="less">
  .vast-header {
    padding: 0 25px 0 15px;
    align-items: center;
  }
</style>
