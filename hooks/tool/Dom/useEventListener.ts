import { Ref, onMounted, onUnmounted, ref, unref, warn } from "vue"
import { refToHTML } from "../utils";
import { BasicTarget } from "../utils/types";



export interface Options {
  target: BasicTarget | Window | Document,
  capture?: boolean,
  once?: boolean,
  passive?: boolean
}


const useEventListener = (
  eventName: keyof HTMLElementEventMap,
  handler: (ev: Event) => void,
  options?: Options
) => {
    const { target = document, capture = false, once = false, passive = false } = options || {
      target: document,
      capture: false,
      once: false,
      passive: false
    }

    if (!target) {
      warn('target不能为空, 需要一个目标节点')
      return
    }

    const targets = ref<HTMLElement[] | Window[] | Document[]>([])

    const fn = (ev: Event) => handler(ev)

    onMounted(() => {
      targets.value = refToHTML<BasicTarget | Window | Document >(target);
      targets.value.forEach( item => item.addEventListener(eventName, fn, { capture, once, passive }))
    })
    
    onUnmounted(() => {
      targets.value.forEach( item => item.removeEventListener(eventName, fn))
    })
}

export default useEventListener