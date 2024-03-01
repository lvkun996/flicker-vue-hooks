---
title: useTextSelecttion
---
实时获取用户当前选取的文本内容及位置。

## ✨ 使用

## 代码演示
::: vue-playground useTextSelecttion 交互演示

@file App.vue

```vue

<template>
  <div>我打江南走过,那等在季节里的容颜如莲花的开落,东风不来, 三月的柳絮不飞, 你的心如小小寂寞的城, 恰若青石的街道向晚跫音不响, 三月的春帷不揭, 你的心是小小的窗扉紧掩 </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTextSelection } from 'flicker-vue-hooks'

const section = ref({
  text: "",
  start: 0,
  end: 0
})

useTextSelection((record) => {
  section.value = record
  alert(JSON.stringify(section.value))
})

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