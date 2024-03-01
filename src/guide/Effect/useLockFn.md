---
title: useLockFn
---

竞态锁  防止函数并发执行

## ✨ 使用


## 代码演示
::: vue-playground useLockFn 交互演示

@file App.vue

```vue

<template>
  <h1>count:  {{count}} </h1>
  <button @click="submit" >提交</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useSchedulerOnce, useLockFn } from 'flicker-vue-hooks'

const asyncFn = () => {
  return new Promise( (resolve) => {
    useSchedulerOnce(() => {
      resolve()
    }, 3000)
  })
}

const count = ref(0)

const submit = useLockFn( async ( ) => {  
  await asyncFn()
  count.value++
})

</script>

```

<!-- @include: ../../common/import.md -->


:::



## API


```typescript

useLockFn(
  cb: () => void
)

```

## Params
| 参数  | 说明 | 类型 | 默认值 |
| --- | --- |  --- | --- |
| cb    | 回调函数  | () => void | - |


## Result
| 参数  | 说明 | 类型 | 默认值 |
| --- | --- |  --- | --- |
| result | 调用函数  | （） => void | - |

