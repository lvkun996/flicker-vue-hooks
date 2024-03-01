import { onUnmounted, isRef, Ref, unref, onMounted } from "vue"

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
 const useInViewport = (el: Ref<HTMLElement> | HTMLElement, cb: (isIntersecting: boolean) => void) => {

  const observer = new IntersectionObserver((entrys) => entrys.forEach(entry => cb && cb(entry.isIntersecting)))
  
  onMounted(() => observer.observe(unref(el)))

  onUnmounted(() => observer.disconnect())
  
  return () => observer.unobserve(unref(el))
  
}


export default useInViewport