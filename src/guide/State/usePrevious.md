---
title: usePrevious
---

获取上一次值的hook

## ✨ 使用

## 代码演示
::: vue-playground 基础演示

@file App.vue

```vue

<template>
  <h1>上一次的值:{{preCount}}</h1>
  <h1>当前值:{{count}}</h1>
  <button ref="app">click me</button>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { usePrevious, useEventListener } from 'flicker-vue-hooks'

const app = ref()

const count = ref(0)

const preCount = usePrevious(count)

useEventListener('click', () => {
  count.value += 1
}, {target: app})

</script>

```

<!-- @include: ../../common/import.md -->

:::

## API

```typescript
usePrevious(
  params: Reactive
)
```

## Params
| 参数  | 说明 | 类型 | 默认值 |
| --- | --- |  --- | --- |
| params    | 参数  | Reactive | - |


## Result
| 参数  | 说明 | 类型 | 默认值 |
| --- | --- |  --- | --- |
| pre | 上一次的值  | Ref | - |