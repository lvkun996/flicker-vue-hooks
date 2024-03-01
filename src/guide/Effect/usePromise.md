---
title: usePromise
---

promise的增强版 暴露 resolve与reject， 在任意时刻调用

## ✨ 使用


## 代码演示
::: vue-playground usePromise 交互演示

@file App.vue

```vue
<template>
  <h1>count:  {{count}} </h1>
  <button @click="submit" >提交</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { usePromise } from 'flicker-vue-hooks'

consftgt count = ref(0)

usePromise(() => {
  count.value++
})

count.value++

</script>

```

<!-- @include: ../../common/import.md -->


:::


## API

```typescript

const [resolve, reject] = usePromise((resolve, reject) => {
 console.log('do something');
})

```
