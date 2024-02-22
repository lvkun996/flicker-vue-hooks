import { ref, warn, onMounted } from 'vue'
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

export default useSSE