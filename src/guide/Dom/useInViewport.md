---
title: useInViewport
---

检查当前元素是否在页面上不可见


## ✨ 使用

## 代码演示
::: vue-playground useInViewport 交互演示

@file App.vue

```vue

<template>
  <h1 style="position: fixed; top: 0px; left: 0px" > 显示状态： {{JSON.stringify(isIntersecting)}} </h1>

  <div style="width: 100px; height: 200vh" >
    <div ref="app" style="width: 100px;height: 100px;background-color: red;" ></div>
  </div>

</template>

<script lang="ts" setup>

import { ref, onMounted } from 'vue'
import { useInViewport } from 'flicker-vue-hooks'

const app = ref()

const isIntersecting = ref(false)

onMounted (() => {
  const unobserve = useInViewport(app, (isIntersecting) => {
     console.log(isIntersecting)
    isIntersecting.value = isIntersecting
   
  })
}) 

</script>

```

<!-- @include: ../../common/import.md -->


:::

## API

```html
<div ref='app' >app</div>
```

```typescript

const app = ref()

const unobserve = useInViewport(app, (isIntersecting) => {
  console.log(isIntersecting) // 当前元素隐藏状态
})

// unobserve() 关闭检测

```
