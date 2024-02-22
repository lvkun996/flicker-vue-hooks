import { onUnmounted } from 'vue'

/**
 * @description 只会执行一次定时器， 会在执行完后销毁
 * @param cb  回调函数
 * @param delay 延迟 大部分浏览器动画的刷新时间会在四毫秒, setTimeout延迟默认在四毫秒左右
 * @example 
 * 
 * useSchedulerOnce(() => do somethings, 1000 )
 */
const useSchedulerOnce = (  
  cb: () => void,
  delay: number = 4
) => {

  const timeId = setTimeout(() => {
    cb()
    clearTimeout(timeId)
  }, delay)

  onUnmounted(() => clearTimeout(timeId))

}


export default useSchedulerOnce

