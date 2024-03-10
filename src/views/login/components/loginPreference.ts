/**
 * login preference component
 */

/* 当前表单状态枚举 */
import { computed, ref } from 'vue';

export enum StateEnum {
  ACCOUNT,
  PHONE,
  REGISTER,
}

/* 表单配置 type */
type FromBtnConfig = {
  text: string;
  state: StateEnum;
};

// 当前表单状态
const currentState = ref<StateEnum>(StateEnum.ACCOUNT);

// Getter & Setter
const getLoginState = (): StateEnum => currentState.value;
const setLoginState = (nState: StateEnum) => {
  currentState.value = nState;
};

/**
 * 使用
 */
function useLoginState() {
  const state = computed({
    get: () => getLoginState(),
    set: (val) => setLoginState(val),
  });
  return {
    state,
  };
}

/**
 * 根据传入的状态枚举，返回对应的表单配置
 * @param state
 */
const getFormBtnConfig = computed(() => {
  const configMap: { [key in StateEnum]: FromBtnConfig[] } = {
    0: [
      { text: '手机登录', state: StateEnum.PHONE },
      { text: '注册', state: StateEnum.REGISTER },
    ],
    1: [
      { text: '账号登录', state: StateEnum.ACCOUNT },
      { text: '注册', state: StateEnum.REGISTER },
    ],
    2: [
      { text: '账号登录', state: StateEnum.ACCOUNT },
      { text: '手机登录', state: StateEnum.PHONE },
    ],
  };

  return configMap[getLoginState()];
});

export { useLoginState, getFormBtnConfig };
