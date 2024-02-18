import { defineComponent } from 'vue';

import './style.less';

export default defineComponent({
  name: 'Logo',
  setup() {
    return () => (
      <div class="vast-logo flex">
        <img src="/src/assets/vast.svg" alt="logo" class="w-30" />
        <span class="ml-10 font-bold text-7xl">VastAdminPro</span>
      </div>
    );
  },
});
