<template>
  <Logo :collpased="collapsed" />
  <n-menu
    :value="selectedKeys"
    :collapsed="collapsed"
    :collapsed-width="64"
    :options="menuOptions"
    @update:value="clickMenuItem"
  />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import routes from '@/router/routers.ts';
  import { generatorMenu } from '@/adapter/menu.ts';
  import Logo from './Logo';

  defineProps<{
    collapsed: boolean;
  }>();

  const router = useRouter();
  const currentRoute = useRoute();
  const selectedKeys = ref<string>(currentRoute.name as string);

  // 监听路由变化
  router.afterEach((value) => {
    selectedKeys.value = value.name as string;
  });

  const menuOptions = generatorMenu(routes);

  const clickMenuItem = (value: string) => {
    router.push({
      name: value,
    });
  };
</script>

<style scoped lang="scss"></style>
./Logo
