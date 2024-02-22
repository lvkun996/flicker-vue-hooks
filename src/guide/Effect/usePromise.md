---
title: usePromise
---

promise的增强版 暴露 resolve与reject， 在任意时刻调用

## API

```typescript

const [resolve, reject] = usePromise((resolve, reject) => {
 console.log('do something');
})

```
