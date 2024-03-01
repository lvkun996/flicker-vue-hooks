---
title: useSchedulerOnce
---

使用一次后自动销毁，在切换页面时也会自动销毁，



## ✨ 使用

## 代码演示
::: vue-playground useSchedulerOnce 交互演示

@file App.vue

```vue

<template>
  <h1> count: {{count}} </h1>
</template>

<script lang="ts" setup>

import { ref, onMounted } from 'vue'
import { useSchedulerOnce } from 'flicker-vue-hooks'

const count = ref(0)

const stop = useSchedulerOnce(() => {
  count.value++
}, 1000)


stop()

</script>

```

<!-- @include: ../../common/import.md -->


:::

## API

```typescript
useSchedulerOnce(() => {
  console.log('做点什么')
}， 1000)
```
