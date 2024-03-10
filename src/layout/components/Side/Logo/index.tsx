import { defineComponent, toRefs } from 'vue';

import './style.less';

export default defineComponent({
  name: 'Logo',
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { collapsed } = toRefs(props);
    return () => (
      <div class="vast-logo flex">
        <img src="/src/assets/vast.svg" alt="logo" class="w-8" />
        {!collapsed.value && <span class="ml-1 font-bold text-xl">VastAdminPro</span>}
      </div>
    );
  },
});
