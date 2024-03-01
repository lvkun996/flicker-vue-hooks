import { UnwrapNestedRefs, ref, reactive } from 'vue'
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
 * 
 *  reset({name: 'vue hooks'}) // {name: 'vue hooks'}
 */

const useReactive = <T extends Object>(record: T): { state: UnwrapNestedRefs<T>, reset: (record: any) => void } => {

  const initState = ref<T>(JSON.parse(JSON.stringify(record)))

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

export default useReactive