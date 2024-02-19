import { defineComponent, toRefs } from 'vue';

import './style.less';

export default defineComponent({
  name: 'Logo',
  props: {
    collpased: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { collpased } = toRefs(props);
    return () => (
      <div class="vast-logo flex">
        <img src="/src/assets/vast.svg" alt="logo" class="w-30" />
        {!collpased.value && <span class="ml-10 font-bold text-7xl">VastAdminPro</span>}
      </div>
    );
  },
});
