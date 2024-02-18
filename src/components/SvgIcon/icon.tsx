import { computed, defineComponent, toRefs } from 'vue';

/**
 * @description: 图标组件
 * @name: Hyun
 * @param {String} name 图标名称
 * @param {String} color 线条颜色
 * @param {String} fill 填充颜色
 * @param {String | Number} size 图标大小
 * @return {JSX.Element}
 *
 */
export default defineComponent({
  name: 'SvgIcon',
  props: {
    // 图标名称
    name: {
      type: String,
      default: '',
    },
    // 线条颜色
    color: {
      type: String,
      default: '#333',
    },
    // 如果设置了，鼠标移入将会设置该颜色
    hoverColor: {
      type: String,
      default: '',
    },
    // 填充颜色
    fill: {
      type: String,
      default: '#FFF',
    },
    // 图标大小
    size: {
      type: [String, Number],
      default: '20',
    },
  },
  setup(props) {
    const { size, name, color, fill } = toRefs(props);

    const symbolId = `#icon-${name.value}`;
    const svgKey = computed(() => {
      return `${name.value}_${color.value}_${size.value}`;
    });

    return () => (
      <svg aria-hidden="true" key={svgKey.value} width={size.value} height={size.value}>
        <use xlinkHref={symbolId} fill={fill.value} stroke={color.value} />
      </svg>
    );
  },
});
