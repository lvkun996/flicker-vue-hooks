---
title: useEventListener
---

优雅的使用 addEventListener, 无须关心removeListener移除问题


## ✨ 使用

## 代码演示
::: vue-playground useEventListener 交互演示

@file App.vue

```vue

<template>
  <h1 >count值：{{count}}</h1>

  <button ref="app" >click me</button>

</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { useEventListener } from 'flicker-vue-hooks'

const app = ref()

const count = ref(0)

useEventListener('click', () => {
  count.value += 1
}, {target: app })
</script>

```

<!-- @include: ../../common/import.md -->

:::

## API

```typescript
useEventListener(
  eventName: keyof HTMLElementEventMap,
  handler: (ev: Event) => void,
  options?: Options,
)
```

## Params
| 参数  | 说明 | 类型 | 默认值 |
| --- | --- |  --- | --- |
| eventName    | 事件名称  | HTMLElementEventMap | - |
| handler    | 处理函数  | (ev: Event) => void | - |
| options    | 设置(可选)  | Options | - |


## Options
| 参数  | 说明 | 类型 | 默认值 |
| --- | --- |  --- | --- |
| target    | 目标节点  |``  Window \| Document \| HTMLElement \| Ref<HTMLElement> \| HTMLElement[] \| Ref<HTMLElement>[] `` | document |
| capture    | 是否捕获阶段  | boolean | false |
| once	    | 设置为true时, listener在调用后会被移除  | boolean | false |
| passive	    | 设置为 true 时，表示 listener 永远不会调用 preventDefault()  | boolean | false |
