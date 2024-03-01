---
title: useClickAway
---

监听目标元素外的点击事件


## ✨ 使用

## 代码演示
::: vue-playground useClickAway 交互演示

@file App.vue

```vue

<template>
  <h1 >count值：{{count}}</h1>

  <div ref="app" style="width: 100px;height: 100px;background-color: #000;" ></div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { useClickAway } from 'flicker-vue-hooks'


const app = ref()

const count = ref(0)

useClickAway(() => {
   count.value += 1;
}, {
   target: app,
});

</script>

```

<!-- @include: ../../common/import.md -->


:::