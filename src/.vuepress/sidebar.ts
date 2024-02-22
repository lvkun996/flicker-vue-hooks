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
      text: "Scene",
      prefix: "guide/Scene/",
      children: "structure"
    },
    {
      text: "State",
      prefix: "guide/State/",
      children: "structure"
    },
    {
      text: "Effect",
      prefix: "guide/Effect/",
      children: "structure"
    },
    {
      text: "Dom",
      prefix: "guide/Dom/",
      children: "structure"
    },
    {
      text: "LifeCycle",
      prefix: "guide/LifeCycle/",
      children: "structure"
    }
  ],
});
