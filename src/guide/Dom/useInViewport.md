---
title: useInViewport
---

检查当前元素是否在页面上不可见

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
