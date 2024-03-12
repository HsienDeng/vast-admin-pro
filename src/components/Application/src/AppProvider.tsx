import { defineComponent, toRefs } from 'vue';
import { createAppProviderContext } from '@/hooks/core/useAppContext.ts';
import { prefixCls } from '@/settings/designSetting.ts';

export default defineComponent({
  props: {
    prefixCls: {
      type: String,
      default: prefixCls,
    },
  },
  setup(props, { slots }) {
    const { prefixCls } = toRefs(props);

    createAppProviderContext({
      prefixCls,
    });

    return () => {
      return <div>{slots.default && slots.default()}</div>;
    };
  },
});
