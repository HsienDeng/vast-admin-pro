import { defineStore } from 'pinia';
import { store } from '@/store';
import { appThemeList } from '@/settings/designSetting.ts';

interface DesignSettingState {
  // 当前语言
  lang: string;
  // 当前主题色
  themeColor: string;
  // 菜单是否收起
  collapsed: boolean;
  // 是否开启暗黑模式
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
      lang: 'zh-cn',
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
    // 修改语言
    setLang(lang: string) {
      this.lang = lang;
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
