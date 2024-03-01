---
title: useHover
---

监听 DOM 元素是否有鼠标悬停。


## ✨ 使用

## 代码演示
::: vue-playground 基础演示

@file App.vue

```vue

<template>
  <h1 ref="app" >鼠标是否移入：{{isEnter}}</h1>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { useHover } from 'flicker-vue-hooks'

const app = ref()

const isEnter = useHover(app, {
  onEnter: () => console.log('进入'),
  onLeave: () => console.log('离开'),
  onEnter: (isHover) => console.log(isHover)
})
</script>

```

<!-- @include: ../../common/import.md -->

:::

## API

```typescript
useHover(
  target: HTMLElement | Ref<HTMLElement> | HTMLElement[] | Ref<HTMLElement>[],
  options?: Options,
)
```

## Params
| 参数  | 说明 | 类型 | 默认值 |
| --- | --- |  --- | --- |
| target    | 目标节点  | `` HTMLElement \| Ref<HTMLElement> \| HTMLElement[] \| Ref<HTMLElement>[] `` | - |
| options    | 设置(可选)  | Options | - |


## Options
| 参数  | 说明 | 类型 | 默认值 |
| --- | --- |  --- | --- |
| onEnter    | 鼠标进入触发 |（）=> void | - |
| onLeave    | 鼠标离开触发 |（）=> void | - |
| onChange    | 鼠标进入离开都触发 |（isHover: boolean）=> void | - |
