import { ref } from "vue";



export interface Options {
  delay: number
}

/**
 * @description 用来处理函数节流的 Hook
 * @example
 * 
 *  const { run, cancel, resume } = useThrottleFn(() => {
 *    console.log('useThrottleFn')
 *  }, {delay: 1000 })
 * 
 *  run() // 运行
 *  cancel() // 取消
 *  resume() // 恢复
 */

const useThrottleFn = (
  cb: () => void,
  options: Options
) => {

  const { delay = 1000 } = options

  const allowRunRef = ref(true);

  let lastExecutedTime = 0;
   const run = () => {
    if (allowRunRef.value) {
      cb();
      return;
    }
    const currentTime = Date.now();
    if (currentTime - lastExecutedTime > delay) {
      cb();
      lastExecutedTime = currentTime;
    }
  };

  const cancel = () => {
    allowRunRef.value = false;
  };

  const resume = () => {
    allowRunRef.value = true;
  }

  return {
    run,
    cancel,
    resume
  };
  
}

export default useThrottleFn