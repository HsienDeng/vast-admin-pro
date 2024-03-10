import { defineStore } from 'pinia';
import { store } from '@/store';

interface DesignSettingState {
  // Menu collapsed
  collapsed: boolean;
  // Dark theme
  darkTheme: boolean;
}

/**
 * Project setting store
 * @name useDesignSettingStore
 */
export const useDesignSettingStore = defineStore({
  id: 'app-design-setting',
  state: (): DesignSettingState => {
    return {
      collapsed: false,
      darkTheme: false,
    };
  },
  persist: {
    key: 'app-design-setting',
    storage: localStorage,
  },
});

// Without use function
export function useDesignSettingWithOut() {
  return useDesignSettingStore(store);
}
