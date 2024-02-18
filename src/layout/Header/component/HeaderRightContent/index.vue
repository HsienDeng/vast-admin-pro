<!--
 * @Author: Coder Derek
 * @File: HeaderRightContent
 * @Software: WebStorm
-->
<template>
  <div class="vast-content-right">
    <div class="functional-list-content">
      <n-flex justify="end">
        <div class="icon-item item">
          <SvgIcon name="search" />
        </div>
        <div class="item">
          <n-avatar size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        </div>
        <div class="icon-item item">
          <SvgIcon name="international" />
        </div>
        <div class="icon-item item">
          <SvgIcon name="setting" />
        </div>
      </n-flex>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
        :deep(svg use) {
          stroke: #2080f0;
        }
      }
    }
  }
</style>
