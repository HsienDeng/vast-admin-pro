import { h } from 'vue';
import SvgIcon from '@/components/SvgIcon';

/**
 * 动态渲染图标
 * @param iconName
 * @returns
 */
function renderIcon(iconName: string) {
  return () =>
    h(
      SvgIcon,
      {
        name: iconName,
      },
      { default: null },
    );
}

/**
 * 递归组装菜单格式
 */
export function generatorMenu(routerMap: Array<any>) {
  return filterRouter(routerMap).map((item) => {
    if (item.meta?.hidden) {
      return false;
    }
    const isRoot = isRootRouter(item);
    const info = isRoot ? item.children[0] : item;
    const currentMenu = {
      ...info,
      key: info.name,
      label: info.meta?.title,
      icon: renderIcon(info.meta?.icon),
    };
    // 是否有子菜单，并递归处理
    if (currentMenu.children && currentMenu.children.length > 0) {
      // Recursion
      currentMenu['children'] = generatorMenu(info.children);
    }
    return currentMenu;
  });
}

/**
 * 判断根路由 Router
 * */
export function isRootRouter(item) {
  // 可根据项目实际情况进行更改
  return item.children?.length === 1 && (!item.meta || !item.meta.title);
}

/**
 * 排除Router
 * */
export function filterRouter(routerMap: Array<any>) {
  return routerMap.filter((item) => {
    return (item.meta?.hidden || false) != true && !['/:path(.*)*', '/'].includes(item.path);
  });
}
