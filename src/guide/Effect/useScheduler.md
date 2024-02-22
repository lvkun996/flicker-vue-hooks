---
title: useScheduler
---

重复执行的定时器， 会在组件的unMounted阶段销毁


## API



## 示例

```typescript
const {start, pause, resume, stop, onPlaying} = useScheduler(() => do somethings, 1000)


// start() // 运行计时器
// pause() // 暂停计时器
// resume() // 恢复计时器
// stop() // 停止计时器
// onPlaying((timeStamp) => {
//    console.log(timeStamp)
// })  // 计时器运行
//

```