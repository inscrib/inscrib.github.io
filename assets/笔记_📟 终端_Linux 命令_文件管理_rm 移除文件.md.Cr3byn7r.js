import{_ as e,c as h,I as s,j as i,a as p,an as k,D as a,o as r}from"./chunks/framework.DK5kX09G.js";const u=JSON.parse('{"title":"rm 移除文件","description":"","frontmatter":{},"headers":[],"relativePath":"笔记/📟 终端/Linux 命令/文件管理/rm 移除文件.md","filePath":"笔记/📟 终端/Linux 命令/文件管理/rm 移除文件.md"}'),o={name:"笔记/📟 终端/Linux 命令/文件管理/rm 移除文件.md"},d=i("h1",{id:"rm-移除文件",tabindex:"-1"},[i("code",null,"rm"),p(" 移除文件 "),i("a",{class:"header-anchor",href:"#rm-移除文件","aria-label":'Permalink to "`rm` 移除文件"'},"​")],-1),c=k(`<h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p><strong>r</strong>e<strong>m</strong>ove，移除的含义，使用这个命令可以删除文件或者目录。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [参数] 文件名...</span></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><h3 id="无需询问-直接删除-参数-f" tabindex="-1">无需询问，直接删除 - 参数 f <a class="header-anchor" href="#无需询问-直接删除-参数-f" aria-label="Permalink to &quot;无需询问，直接删除 - 参数 f&quot;">​</a></h3><p>如果我们只是使用 rm 命令（不加参数）删除某文件的话，每次都会询问是否删除，如果我们需要强制删除，就需要<strong>参数 <code>f</code></strong>，force（强制）的含义，即使原档案属性设为唯读，亦直接删除，无需逐一确认。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tree</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 当前目录下的文件结构</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> meow</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tests/meow</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">是否删除</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 一般文件</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;meow&quot;?</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> y</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 此时需要加 y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tests/meow</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tree</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 成功删除</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tests</span></span></code></pre></div><h3 id="递归删除目录下子目录及其文件-参数-r" tabindex="-1">递归删除目录下子目录及其文件 - 参数 r <a class="header-anchor" href="#递归删除目录下子目录及其文件-参数-r" aria-label="Permalink to &quot;递归删除目录下子目录及其文件 - 参数 r&quot;">​</a></h3><p>有时候我们需要把目录下面完全清空，需要用到<strong>参数 <code>r</code></strong>，r（递归）的含义，将目录及以下之档案亦逐一删除。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tree</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 当前目录下的文件结构</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> meow</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tests2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        └──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> meow2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tests</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 尝试删除 tests 目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">rm:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 无法删除&#39;tests&#39;:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 是一个目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tests</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 加参数 r</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tree</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 成功删除</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span></span></code></pre></div>`,11);function F(g,y,C,m,_,A){const n=a("NolebasePageProperties"),t=a("NolebaseGitContributors"),l=a("NolebaseGitChangelog");return r(),h("div",null,[d,s(n),c,s(t),s(l)])}const E=e(o,[["render",F]]);export{u as __pageData,E as default};
