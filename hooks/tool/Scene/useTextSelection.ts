import { Ref, onUnmounted, unref, ref, onMounted } from "vue";
import useEventListener from "../Dom/useEventListener";
import { BasicTarget } from "../utils/types";




/**
 * @description 实时获取用户当前选取的文本内容及位置。
 * @example  
 * 
 * useTextSelecttion(({text, start, end}) => {
 *    console.log(text)
 *    console.log(start)
 *    console.log(end)
 * })
 */

const useTextSelecttion = (
  cb: ({text, start, end}: {text: string, start: number, end: number}) => void,
  options?: { target: BasicTarget | Document}
) => {

  const { target } = options || {target: document}

  const fn = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      const selectedText = selection.toString();
      const range = selection.getRangeAt(0);
      const { startOffset } = range;
      const { endOffset } = range;
      const selectedPosition = { start: startOffset, end: endOffset };
      cb({text: selectedText, ...selectedPosition})
    }
  }

  useEventListener('mouseup', fn, {target})

}

export default useTextSelecttion