/** 
 * @description  导出一个名为 useId 的常量变量，该变量生成一个随机的十六进制字符串
 * @example const id = useId()
 *  
 * 
*/

function useId () {
  return Math.random().toString(16).slice(2)
}


export default useId