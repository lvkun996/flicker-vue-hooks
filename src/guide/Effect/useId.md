---
title: useId
---

获取一个 随机id 的 Hook

## ✨ 使用

## 代码演示
::: vue-playground useId 交互演示

@file App.vue

```vue

<template>
  <h1>交互演示: {{id}}</h1>
</template>

<script lang="ts" setup>

import { useId } from 'flicker-vue-hooks'


const id = useId()

</script>

```

<!-- @include: ../../common/import.md -->


:::


## API
```typescript
const id = useId()
```


## Result

| 参数  | 说明 | 类型 | 默认值 |
| --- | --- |  --- | --- |
| id    | 随机16进制字符串  | string | - |