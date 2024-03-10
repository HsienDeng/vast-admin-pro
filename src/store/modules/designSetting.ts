import { defineStore } from 'pinia';
import { store } from '@/store';
import { appThemeList } from '@/settings/designSetting.ts';

interface DesignSettingState {
  themeColor: string;
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
      themeColor: appThemeList[0],
      collapsed: false,
      darkTheme: false,
    };
  },
  actions: {
    /**
     * Set theme color
     * @param themeColor
     */
    setThemeColor(themeColor: string) {
      this.themeColor = themeColor;
    },
    /**
     * Set collapsed
     * @param collapsed
     */
    setCollapsed(collapsed: boolean) {
      this.collapsed = collapsed;
    },
    /**
     * Set dark theme
     * @param darkTheme
     */
    setDarkTheme(darkTheme: boolean) {
      this.darkTheme = darkTheme;
    },
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
