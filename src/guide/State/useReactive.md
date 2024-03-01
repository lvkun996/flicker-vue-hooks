---
title: useReactive
---

vue 中reactive的增强版, 支持重置reactive的值

## ✨ 使用

## 代码演示
::: vue-playground 基础演示

@file App.vue

```vue

<template>
  <h1>{{state.key}} {{state.value}}</h1>
  <button ref="add">add</button>
  <button ref="app" style="margin: 0 10px" >reset</button>
  <button ref="resetValue">resetValue</button>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { useReactive, useEventListener } from 'flicker-vue-hooks'

const app = ref()

const add = ref()

const resetValue = ref()

const {state, reset} = useReactive({
  key: 'flicker vue hook',
  value: 1
})

useEventListener('click', () => {
  state.value += 1
}, {target: add})

useEventListener('click', () => {
  reset()
}, {target: app})

useEventListener('click', () => {
  reset({
    key: 'hook vue flicker',
    value: state.value * 2
  })
}, {target: resetValue})

</script>

```

<!-- @include: ../../common/import.md -->

:::

## API

```typescript
useReactive(
  params: Record<string, any>,
)
```

## Params
| 参数  | 说明 | 类型 | 默认值 |
| --- | --- |  --- | --- |
| params  | 参数  | Record<string, any> | - |


## Result
| 参数  | 说明 | 类型 | 默认值 |
| --- | --- |  --- | --- |
| state | 返回值 | {} | - |
| reset | 重置state的函数 | funtion | - |
