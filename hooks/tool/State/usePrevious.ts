import { Ref, isReactive, ref, unref, watchEffect } from 'vue'

/**
 * @description 保存上一次状态的 Hook
 * @example 
 * const count = ref(0);
 * const previous = usePrevious(count);
 * 
 * count.value = count.value++
 * 
 * // counter current value: {count = 1}
 * // counter previous value: {previous = 0}
 */
function usePrevious <T>(params: T) {

  const pre = ref<T>();
  const current = ref<T>();
  
  watchEffect(() => {
    pre.value = current.value;
    current.value = isReactive(params) ? ({ ...params }) : unref(params);
  })

  return pre
}


export default usePrevious


