---
title: useThrottle
---

节流函数


## ✨ 使用

## 代码演示
::: vue-playground 基础演示

@file App.vue

```vue

<template>
  <h1>{{count}}</h1>
  <div>
    <button @click='run'>run</button>
    <button @click='cancel' style="margin: 0 10px">cancel</button>
    <button @click='resume' >resume</button>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { useThrottle } from 'flicker-vue-hooks'

const app = ref()

const count = ref(0)

const { run, cancel, resume} = useThrottle(() => {
  count.value += 1
}, {delay:  3000})

</script>

```

<!-- @include: ../../common/import.md -->

:::

## API

```typescript
useThrottle(
  cb: () => void,
  options?: Options,
)
```

## Params
| 参数  | 说明 | 类型 | 默认值 |
| --- | --- |  --- | --- |
| cb    | 回调函数  | () => void | - |
| options    | 设置(可选)  | Options | - |


## Options
| 参数  | 说明 | 类型 | 默认值 |
| --- | --- |  --- | --- |
| delay    | 触发间隔时间 | number | 1000 |
