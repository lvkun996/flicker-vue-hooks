import { Ref, onMounted, onUnmounted, ref, unref } from 'vue';
import useEventListener, { Options } from './useEventListener';
import { refToHTML } from '../utils';



/**
 * @description 监听目标元素外的点击事件。
 * @example 
    <div ref="app" style="width: 100px;height: 100px;background-color: #000;" ></div>

    const app = ref()
    const count = ref(0)

    useClickAway(() => {
      count.value += 1;
    }, {
      target: app,
    });
 */



const useClickAway = (
  cb: () => void,
  options: Options
) => {

  const fn = (e: Event) => {
    if (refToHTML(options.target).find((_target) => e.target === unref(_target))) return;
    cb();
  };

  useEventListener('click', (e) => fn(e), options)

}

export default useClickAway                                                                                                                                                                                             


