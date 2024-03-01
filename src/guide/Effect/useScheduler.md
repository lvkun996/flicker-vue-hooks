---
title: useScheduler
---

重复执行的定时器， 会在组件的unMounted阶段销毁


## ✨ 使用

## 代码演示
::: vue-playground 基础演示

@file App.vue

```vue

<template>
  <h1> count: {{count}} </h1>
  <button @click="start" >start</button>
  <button style="margin: 0 5px" @click="pause" >pause</button>
  <button style="margin: 0 5px" @click="resume" >resume</button>
  <button @click="stop" >stop</button>
</template>

<script lang="ts" setup>

import { ref, onMounted } from 'vue'
import { useScheduler } from 'flicker-vue-hooks'

const count = ref(0)

const { start, pause, resume, stop} = useScheduler(() => {
  count.value++
}, {
  delay: 1000,
  onPlaying: (stamp) => {
    // stamp 已经运行的时间的总和
  }
})


</script>

```

<!-- @include: ../../common/import.md -->


:::




## 示例

```typescript
const {start, pause, resume, stop} = useScheduler(() =>/* do somethings */, 1000)

```

## Params
| 参数  | 说明 | 类型 | 默认值 |
| --- | --- |  --- | --- |
| cb    | 回调函数  | () => void | - |
| options    | 配置项  | Options | - |


## Options
| 参数  | 说明 | 类型 | 默认值 |
| --- | --- |  --- | --- |
| delay    | 计时器间隔  | number | 1000ms |
| onPlaying    | 计时器回调, stamp是计时器执行时长的总和  | (stamp: number) => void | - |


## Result
| 参数  | 说明 | 类型 | 默认值 |
| --- | --- |  --- | --- |
| start    | 启动scheduler, stamp值从0开始  | () => void | - |
| stop    | 移除scheduler, stamp的值清0 | () => void | - |
| pause    | 暂停scheduler, stamp值暂停  | () => void | - |
| resume    | 恢复scheduler, stamp值继续累加  | () => void | - |