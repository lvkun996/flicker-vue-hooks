import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";


export default defineUserConfig({
  base: "/flicker-vue-hooks/",
  lang: "zh-CN",
  title: "flicker-vue-hooks",
  description: "flicker-vue-hooks",
  theme: theme
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
