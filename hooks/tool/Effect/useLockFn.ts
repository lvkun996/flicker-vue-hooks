
/**
 * @description 竞态锁  防止函数并发执行
 * @param fn
 * @returns 
 */

 const useLockFn = (fn: Function) => {

  let lock = false

  return async () => {
    if (lock) return
    lock = true
    await fn()
    lock = false
  }

}

export default useLockFn


