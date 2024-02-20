---
title: useInViewport
---

检查当前元素是否在页面上不可见

## API

```html
<div id='app' >app<div>
```

```typescript

const { inViewport, unobserve } = useInViewport(document.getElementById('app'))

// unobserve() 关闭检测

```
