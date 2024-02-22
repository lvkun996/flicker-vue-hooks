import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,a as t}from"./app-7443epeG.js";const a={},o=t(`<p>保存上一次状态的 Hook</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token function">usePrevious</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>

count<span class="token punctuation">.</span>value <span class="token operator">=</span> count<span class="token punctuation">.</span>value<span class="token operator">++</span>

<span class="token comment">// counter current value: {count = 1}</span>
<span class="token comment">// counter previous value: {previous = 0}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),i=[o];function p(c,r){return n(),s("div",null,i)}const d=e(a,[["render",p],["__file","usePrevious.html.vue"]]),v=JSON.parse('{"path":"/guide/State/usePrevious.html","title":"usePrevious","lang":"zh-CN","frontmatter":{"title":"usePrevious","description":"保存上一次状态的 Hook API ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/flicker-vue-hooks/guide/State/usePrevious.html"}],["meta",{"property":"og:site_name","content":"flicker-vue-hooks"}],["meta",{"property":"og:title","content":"usePrevious"}],["meta",{"property":"og:description","content":"保存上一次状态的 Hook API "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"usePrevious\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"API","slug":"api","link":"#api","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.12,"words":35},"filePathRelative":"guide/State/usePrevious.md","autoDesc":true}');export{d as comp,v as data};