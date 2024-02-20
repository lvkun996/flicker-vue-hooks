import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: './tool/index.ts', // 工具库入口
      name: 'flicker-vue-hooks', // 工具库名称
      fileName: (format) => `flicker-vue-hooks.${format}.js`, // 工具库名称
    },
    rollupOptions: {
       // 确保外部化处理那些你不想打包进库的依赖
       external: ['vue'],
       output: {
         // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
         globals: {
           vue: 'Vue',
         },
       },
    }
  }
})
