<template>
  <div>home</div>
</template>

<script setup lang="ts">
  import { useDesign } from '@/hooks/useDesign.ts';

  const { prefixCls } = useDesign('home');
  console.log(prefixCls);
</script>

<style lang="less" scoped></style>
