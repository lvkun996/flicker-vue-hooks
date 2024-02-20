---
title: useReactive
---

vue 中reactive的增强版, 支持重置reactive的值


## API

```typescript

const { state, reset } = useReactive<Record<string, string>>({
  name: '困困',
  age: 1
})

state.name = '圈圈'

reset()

```
