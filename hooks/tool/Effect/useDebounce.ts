import { ref } from "vue";
import { useSchedulerOnce } from "..";



export interface Options {
  delay: number
}
/**
 * @description 处理防抖值的 Hook
 * @example 
 *  const { run, cancel, resume } = useDebounce(() => {
 *    console.log('useDebounce')
 *  }, {delay: 1000})
 */
const useDebounce = (
  cb: () => void,
  options: Options
) => {
  const { delay = 1000 } = options

  const allowRunRef = ref(true)

  const stop = ref(() => {});
  
  const run = () => {
    if (allowRunRef) {
      stop.value!()
      stop.value = useSchedulerOnce(cb, delay)
    } else {
      cb()
    }
   
  }

  const cancel = () => {
    allowRunRef.value = false
  }
  
  const resume = () => {
    allowRunRef. value = true
  }

  return {
    run,
    cancel,
    resume
  }
}

export default useDebounce


