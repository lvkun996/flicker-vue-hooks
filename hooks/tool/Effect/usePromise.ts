import { ref } from 'vue'
/**
 * @description promise的增强版 暴露 resolve与reject， 在任意时刻调用
 * @param cb 
 * @example
 *  const { resolve, reject } = usePromise((resolve, reject) => {
 *    console.log('do something');
 *  })
 */

const usePromise = <T>(
  cb: (resolve: (value: T) => void, reject: (reason?: any) => void) => void
) =>
  {
    const _resolve = ref()
    const _reject = ref()

    new Promise<T>( async (resolve, reject) => {
      _resolve.value = resolve
      _reject.value = reject
      return await cb(resolve, reject)
    })

    return { resolve: _resolve.value, reject: _reject.value }

  }


export default usePromise