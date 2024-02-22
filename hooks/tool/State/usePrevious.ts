import { Ref, ref, watchEffect } from 'vue'

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
function usePrevious <T>(params: Ref<T>): Ref<T | undefined> {

  const r = ref<T>()

  const pre = ref<T>()
  
  watchEffect(() => {
    r.value = pre.value
    pre.value = params.value
  })

  return r
}


export default usePrevious


