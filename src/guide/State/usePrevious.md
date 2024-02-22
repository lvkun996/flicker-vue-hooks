---
title: usePrevious
---

保存上一次状态的 Hook

## API


```typescript

const count = ref(0);
const previous = usePrevious(count);

count.value = count.value++

// counter current value: {count = 1}
// counter previous value: {previous = 0}


```
