import { store } from '@/store';
import { ref } from 'vue';
import { defineStore } from 'pinia';

/**
 * @name useDesignSettingStore
 */
const useDesignSettingStore = defineStore('app-design-setting', () => {
  // 菜单是否展开
  const collapse = ref(false);

  const setCollapse = (bol: boolean) => {
    collapse.value = bol;
  };

  return {
    collapse,
    setCollapse,
  };
});

export default useDesignSettingStore;

// 需要在安装程序之外使用
export function useDesignSettingWithOut() {
  return useDesignSettingStore(store);
}
