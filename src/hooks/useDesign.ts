import { useAppProviderContext } from '@/hooks/core/useAppContext.ts';

export function useDesign(scope: string) {
  const values = useAppProviderContext();
  return {
    prefixCls: `${values.prefixCls}-${scope}`,
    prefixVar: values.prefixCls,
  };
}
