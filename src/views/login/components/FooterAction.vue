<!--
 * @Author: Coder Derek
 * @File: FooterAction.vue
 * @Software: WebStorm
 * @Description: FooterAction
-->
<template>
  <n-row :gutter="24">
    <n-col v-for="config in getFormBtnConfig" :key="config.state" :span="12">
      <n-button class="w-full" @click="handleCurrentState(config.state)">{{ config.text }}</n-button>
    </n-col>
  </n-row>
</template>

<script setup lang="ts">
  import { useLoginState, getFormBtnConfig, StateEnum } from './loginPreference';

  const { state } = useLoginState();

  /**
   * 切换登录表单
   * @param event
   */
  function handleCurrentState(event: StateEnum) {
    state.value = event;
  }
</script>

<style scoped lang="scss"></style>
