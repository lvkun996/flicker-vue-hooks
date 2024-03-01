import {Ref, ref, warn, onMounted, unref, onUnmounted} from 'vue'
import useEventListener from './useEventListener';


/**
 * @deprecated 监听鼠标在元素上的进入、离开事件
 * 
 */
const useHover = (
  target: HTMLElement | Ref<HTMLElement> | HTMLElement[] | Ref<HTMLElement>[],
  options?: {
    onEnter?: () => void,
    onLeave?: () => void,
    onChange?: (isHover: boolean) => void
  },
) => {
  const { onEnter, onLeave, onChange } = options || {};

  const state = ref(false);

  const fn = (flag: boolean) => {
    // eslint-disable-next-line no-unused-expressions
    flag ? onEnter?.() : onLeave?.();
    // eslint-disable-next-line no-unused-expressions
    onChange?.(flag);
    state.value = flag;
  };

  useEventListener('mouseenter', () => fn(true),{ target })
  useEventListener('mouseleave', () => fn(false),{ target })

  return state;
};


export default useHover;