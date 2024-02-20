import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      icon: "lightbulb",
      text: "介绍",
      prefix: "guide/intro/",
      link: "guide/intro/"
    },
    {
      icon: "lightbulb",
      text: "hooks",
      prefix: "guide/hooks/",
      collapsible: true,
      children: "structure"
    },
  ],
});
