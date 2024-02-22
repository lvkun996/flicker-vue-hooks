import { ref, onUnmounted } from 'vue'

export interface UseScheduler {
  start: () => void
  pause: () => void
  onPlaying: () => void,
  resume: () => void
  stop: () => void
}

/**
 *
 * @description 重复执行的定时器， 会在组件的unMounted阶段销毁
 * @returns start 启动定时器 pause 暂停计时器  onPlaying useScheduler运行回调 回调函数会返回当前运行的时间戳
 * 
 * @example const {start, pause, onPlaying} = useScheduler(() => do somethings , 1000)
 * 
 * start() // 运行计时器
 * pause() // 暂停计时器
 * resume() // 恢复计时器
 * stop() // 停止计时器
 * onPlaying((timeStamp) => {
 *    console.log(timeStamp)
 * })  // 计时器运行
 *
 */
const useScheduler = (cb: Function, delay: number) => {
  const stx: UseScheduler = {
    start: () => {},
    pause: () => {},
    resume: () => {},
    onPlaying: () => {},
    stop: () => {}
  }

  let timeId = ref()

  const stamp = ref(0)

  const playing = (playingCb?: Function) => {
    playingCb && playingCb(stamp.value)
  }

  const clearScheduler = () => timeId.value && clearInterval(timeId.value)

  const execCallback = () => {
    timeId.value = setInterval(() => {
      cb()
      playing()
      stamp.value += delay
    }, delay)
  }

  stx.start = () => execCallback()

  stx.pause = () => clearScheduler()

  stx.resume = () => timeId.value && execCallback()

  stx.stop = () => {
    clearScheduler()
    timeId.value = null
    stamp.value = 0
  }

  stx.onPlaying = playing

  onUnmounted(clearScheduler)

  return stx
}


export default useScheduler
