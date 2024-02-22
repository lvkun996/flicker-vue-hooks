import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-7443epeG.js";const t={},p=e(`<p>检查当前元素是否在页面上不可见</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>app<span class="token punctuation">&#39;</span></span> <span class="token punctuation">&gt;</span></span>app<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> unobserve <span class="token operator">=</span> <span class="token function">useInViewport</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">(</span>isIntersecting<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>isIntersecting<span class="token punctuation">)</span> <span class="token comment">// 当前元素隐藏状态</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// unobserve() 关闭检测</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","useInViewport.html.vue"]]),m=JSON.parse('{"path":"/guide/Dom/useInViewport.html","title":"useInViewport","lang":"zh-CN","frontmatter":{"title":"useInViewport","description":"检查当前元素是否在页面上不可见 API ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/flicker-vue-hooks/guide/Dom/useInViewport.html"}],["meta",{"property":"og:site_name","content":"flicker-vue-hooks"}],["meta",{"property":"og:title","content":"useInViewport"}],["meta",{"property":"og:description","content":"检查当前元素是否在页面上不可见 API "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"useInViewport\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"API","slug":"api","link":"#api","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.17,"words":50},"filePathRelative":"guide/Dom/useInViewport.md","autoDesc":true}');export{d as comp,m as data};