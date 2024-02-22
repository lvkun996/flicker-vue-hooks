import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as p,c as o,d as s,e as n,b as i,a as l}from"./app-7443epeG.js";const c={},r=l(`<p>通过该章节，你将了解到如何快速开始使用 Flicker-Vue-Hooks</p><h2 id="✨-特性" tabindex="-1"><a class="header-anchor" href="#✨-特性"><span>✨ 特性</span></a></h2><ul><li>🏄🏼‍♂️ 易学易用</li><li>🔋 支持 SSR</li><li>🛸 丰富的 Hooks</li><li>🏟️ 覆盖大部分业务场景</li><li>🦾 首选 useRequest，强大的请求中间层</li><li>🎪 交互式 demo，身临其境</li><li>🎯 使用 TypeScript 构建，提供完整的类型定义文件</li><li>🪄 支持按需加载，减少打包体积</li><li>🤺 演练场，大有用武之地</li><li>🔐 测试完善，安全可靠</li></ul><h2 id="📦-安装" tabindex="-1"><a class="header-anchor" href="#📦-安装"><span>📦 安装</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i flicker-vue-hooks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="🔨-使用" tabindex="-1"><a class="header-anchor" href="#🔨-使用"><span>🔨 使用</span></a></h2><h3 id="全量引入" tabindex="-1"><a class="header-anchor" href="#全量引入"><span>全量引入</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;flicker-vue-hooks&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="按需引入" tabindex="-1"><a class="header-anchor" href="#按需引入"><span>按需引入</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> useRequest <span class="token keyword">from</span> <span class="token string">&#39;flicker-vue-hooks/es/useRequest&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="自动引入" tabindex="-1"><a class="header-anchor" href="#自动引入"><span>自动引入</span></a></h3><p>使用 <code>unplugin-auto-import</code> 的 <code>resolver</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">npm</span> i <span class="token parameter variable">-D</span> @flicker-vue-hooks/resolvers

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vite" tabindex="-1"><a class="header-anchor" href="#vite"><span>Vite</span></a></h4><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VueHooksPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@flicker-vue-hooks/resolvers&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">AutoImportDeps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    imports<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.[tj]sx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue\\?vue</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.md$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    dts<span class="token operator">:</span> <span class="token string">&#39;src/auto-imports.d.ts&#39;</span><span class="token punctuation">,</span>
    resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">VueHooksPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack"><span>Webpack</span></a></h4><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> VueHooksPlusResolver <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;@flicker-vue-hooks/resolvers&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-auto-import/webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      imports<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.[tj]sx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue\\?vue</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.md$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      dts<span class="token operator">:</span> <span class="token string">&#39;src/auto-imports.d.ts&#39;</span><span class="token punctuation">,</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">VueHooksPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),u={href:"https://github.com/antfu/unplugin-auto-import",target:"_blank",rel:"noopener noreferrer"},d=s("br",null,null,-1),k=s("h2",{id:"🧩-兼容",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#🧩-兼容"},[s("span",null,"🧩 兼容")])],-1),m=s("div",{class:"hint-container warning"},[s("p",{class:"hint-container-title"},"不兼容 vue2 版本")],-1);function v(g,h){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,s("p",null,[n("其他支持的工具, 更多请看 "),s("a",u,[n("unplugin-auto-import"),i(a)])]),d,k,m])}const f=e(c,[["render",v],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/guide/intro/","title":"介绍","lang":"zh-CN","frontmatter":{"title":"介绍","icon":"lightbulb","description":"通过该章节，你将了解到如何快速开始使用 Flicker-Vue-Hooks ✨ 特性 🏄🏼‍♂️ 易学易用 🔋 支持 SSR 🛸 丰富的 Hooks 🏟️ 覆盖大部分业务场景 🦾 首选 useRequest，强大的请求中间层 🎪 交互式 demo，身临其境 🎯 使用 TypeScript 构建，提供完整的类型定义文件 🪄 支持按需加载...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/flicker-vue-hooks/guide/intro/"}],["meta",{"property":"og:site_name","content":"flicker-vue-hooks"}],["meta",{"property":"og:title","content":"介绍"}],["meta",{"property":"og:description","content":"通过该章节，你将了解到如何快速开始使用 Flicker-Vue-Hooks ✨ 特性 🏄🏼‍♂️ 易学易用 🔋 支持 SSR 🛸 丰富的 Hooks 🏟️ 覆盖大部分业务场景 🦾 首选 useRequest，强大的请求中间层 🎪 交互式 demo，身临其境 🎯 使用 TypeScript 构建，提供完整的类型定义文件 🪄 支持按需加载..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-20T03:35:23.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-20T03:35:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"介绍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-20T03:35:23.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"✨ 特性","slug":"✨-特性","link":"#✨-特性","children":[]},{"level":2,"title":"📦 安装","slug":"📦-安装","link":"#📦-安装","children":[]},{"level":2,"title":"🔨 使用","slug":"🔨-使用","link":"#🔨-使用","children":[{"level":3,"title":"全量引入","slug":"全量引入","link":"#全量引入","children":[]},{"level":3,"title":"按需引入","slug":"按需引入","link":"#按需引入","children":[]},{"level":3,"title":"自动引入","slug":"自动引入","link":"#自动引入","children":[]}]},{"level":2,"title":"🧩 兼容","slug":"🧩-兼容","link":"#🧩-兼容","children":[]}],"git":{"createdTime":1708400123000,"updatedTime":1708400123000,"contributors":[{"name":"lvkun996","email":"1549630250@qq.com","commits":1}]},"readingTime":{"minutes":0.91,"words":274},"filePathRelative":"guide/intro/README.md","localizedDate":"2024年2月20日","autoDesc":true}');export{f as comp,y as data};
