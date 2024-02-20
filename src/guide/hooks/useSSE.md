---
title: useSSE
---

SSE协议

## API

```typescript
const { state, close, onMessage } = useSSE<string>({
  url: 'your remote url',
  immediate: true
})


```


