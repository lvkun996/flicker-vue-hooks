import { onUnmounted, ref, Ref, watchEffect, reactive, UnwrapNestedRefs, warn, onMounted } from "vue"

/** 
 * @description  导出一个名为 useId 的常量变量，该变量生成一个随机的十六进制字符串
 * @example const id = useId()
*/
 function useId () { 
  return Math.random().toString(16).slice(2)
}

/** 
 * 
 * @description  检测元素有没有出现在视口内 返回一个boolean值的结果和一个取消监控的函数
 * @example const { inViewport, unobserve }  = useInViewport(document.getElementById('#id'))
 * 
 * if (inViewport)  // do something
 * 
 * else unobserve()
 * 
*/
 const useInViewport = (el: Ref<HTMLElement>) => {

  const inViewport = ref<boolean>(false)

  const observer = new IntersectionObserver((entrys) => {
    entrys.forEach(entry => {
      inViewport.value = entry.isIntersecting
    })
  })

  observer.observe(el.value)

  onUnmounted(() => {
    observer.disconnect()
  })

  return {
    inViewport: inViewport.value,
    unobserve: () =>  observer.unobserve(el.value)
  }

}


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



/**
 * @description promise的增强版 暴露 resolve与reject， 在任意时刻调用
 * @param cb 
 * @example
 *  const [resolve, reject] = usePromise((resolve, reject) => {
 *    console.log('do something');
 *  })
 */

 const usePromise = <T>(cb: (resolve: (value: T) => void, reject: (reason?: any) => void) => void): [(value: T) => void,  (reason?: any) => void] => {

  const _resolve = ref()
  const _reject = ref()

  new Promise<T>( async (resolve, reject) => {
    _resolve.value = resolve
    _reject.value = reject
    return await cb(resolve, reject)
  })

  return [ _resolve.value, _reject.value ]

}


/**
 * @description reactive增强版 该hook传入一个对象后，第一个返回值state具备reactive hook同样的能力 第二个返回值是函数，调用后将对象重置为初始值
 * @param {T} record - `record` 参数是一个类型为 `T` 的对象，用于初始化反应状态。这是将由 useReactive 函数返回的反应对象的初始状态。
 * @returns 函数“useReactive”返回一个包含两个元素的数组：“state”和“reset”。 `state` 是根据传递给函数的 `record` 参数创建的反应对象，`reset`
 * 是一个函数，可用于将 `state` 对象重置为其初始值。
 * @example
 *  const { state, reset} = useReactive({name: 'flicker vue hooks'})
 * 
 *  state.name = 'flicker'
 * 
 *  console.log(state) // {name: 'flicker'}
 * 
 *  reset() // {name: 'flicker vue hooks'}
 */

 const useReactive = <T extends Object>(record: T): { state: UnwrapNestedRefs<T>, reset: T | null | {} } => {

  const initState = ref<T>(record)

  const state = reactive<T>(record)

  const reset = (_record: any) => {

    if (!_record) {
      Object.assign(state, initState.value)
    } else {
      Object.assign(state, _record)
    }
  }

  return { state, reset }

}


 interface UseSchedulerFastCall {
  timeId: NodeJS.Timer | null,
  start: () => void
  pause: () => void
  onPlaying: () => void
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
 * onPlaying((timeStamp) => {
 *    console.log(timeStamp)
 * })  // 计时器运行
 *
 */
 const useScheduler = (cb: Function, delay: number) => {
  const stx: UseSchedulerFastCall = {
    timeId: null,
    start: () => {},
    pause: () => {},
    onPlaying: () => {}
  }

  let timeId = ref()

  const stamp = ref(0)

  const playing = (playingCb?: Function) => {
    playingCb && playingCb(stamp.value)
  }

  const clearScheduler = () => timeId.value && clearInterval(timeId.value)

  onUnmounted(clearScheduler)

  stx.start = () => {
    timeId.value = setInterval(() => {
      cb()
      playing()
      stamp.value += delay
    }, delay)
  }

  stx.pause = () => clearScheduler()

  stx.onPlaying = playing

  return stx
}


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


/**
 * 
 * @description 使用SSE协议
 * @param url 一个USVString ，它代表远程资源的位置
 * @param immediate 一个boolean值，它代表是否应该立即创建与服务器发送事件通信的接口
 * @example 
 *  const {start, close, onOpen, onMessage, onError} = useSSE({url: 'your remote url'})
 * 
 *  onMounted(() => start())
 * 
 *  close() // 关闭链接
 * 
 *  onOpen((e) => {}) // 链接回调
 * 
 *  onMessage((e) => {  // 接受信息回调
 *    console.log(e)   
 *  })
 *    
 *  onError((e) => {})  // 发生错误回调
*/

 const useSSE = <T>({
  url,    
  immediate = false
}: {
  url: string,
  immediate: boolean
}) => {

  const sseRef = ref<EventSource>()

  let onMessage = (cb: (e: MessageEvent<T>) => void) => { }
  let onOpen = (cb: () => void) => {}
  let onError = (cb: (e: Event) => void) => {}

  const start = () => {
    if (!!sseRef.value) {
      warn('SSE对象已经被创建')
      return
    }
    sseRef.value = new EventSource(url)
  }

  sseRef.value!.onmessage = (e: MessageEvent<T>) => {
    onMessage((e) => {})
  }

  sseRef.value!.onopen = () => {
    onOpen(() => {})
  }

  sseRef.value!.onerror = (e: Event) => {
    onError((e) => {})
  }

  const close = () => {
    sseRef.value?.close()
  }

  onMounted(() => {
    immediate && start()
  })

  return {
    start,
    close,
    onOpen, 
    onMessage,
    onError
  }

}



export {
  useId,
  useInViewport,
  useLockFn,
  usePrevious,
  usePromise,
  useReactive,
  useScheduler,
  useSchedulerOnce,
  useSSE,
}