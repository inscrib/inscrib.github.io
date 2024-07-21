import{_ as h,c as l,I as s,j as a,a as p,an as o,D as i,o as r}from"./chunks/framework.DK5kX09G.js";const m=JSON.parse('{"title":"清理 Git 分支","description":"","frontmatter":{"tags":["开发/Git","命令行/git","命令行/git/操作"]},"headers":[],"relativePath":"笔记/📟 终端/软件/Git 版本控制/清理 Git 分支.md","filePath":"笔记/📟 终端/软件/Git 版本控制/清理 Git 分支.md"}'),d={name:"笔记/📟 终端/软件/Git 版本控制/清理 Git 分支.md"},k=a("h1",{id:"清理-git-分支",tabindex:"-1"},[p("清理 Git 分支 "),a("a",{class:"header-anchor",href:"#清理-git-分支","aria-label":'Permalink to "清理 Git 分支"'},"​")],-1),c=o('<h2 id="清理追踪分支" tabindex="-1">清理追踪分支 <a class="header-anchor" href="#清理追踪分支" aria-label="Permalink to &quot;清理追踪分支&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --prune</span></span></code></pre></div><p>或者</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --prune</span></span></code></pre></div><p>如果不想更新本地 Git 存储库但是想先执行试试的话：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> prune</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> origin</span></span></code></pre></div><h2 id="清理本地分支" tabindex="-1">清理本地分支 <a class="header-anchor" href="#清理本地分支" aria-label="Permalink to &quot;清理本地分支&quot;">​</a></h2><h3 id="清理本地所有包含-dev-的分支" tabindex="-1">清理本地所有包含 <code>dev/</code> 的分支 <a class="header-anchor" href="#清理本地所有包含-dev-的分支" aria-label="Permalink to &quot;清理本地所有包含 `dev/` 的分支&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;dev/&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> xargs</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -D</span></span></code></pre></div><h3 id="清理本地除去包含-dev-的分支以外所有的分支" tabindex="-1">清理本地除去包含 <code>dev/</code> 的分支以外所有的分支 <a class="header-anchor" href="#清理本地除去包含-dev-的分支以外所有的分支" aria-label="Permalink to &quot;清理本地除去包含 `dev/` 的分支以外所有的分支&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;dev/&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> xargs</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -D</span></span></code></pre></div>',11);function g(C,F,y,u,b,v){const e=i("NolebasePageProperties"),t=i("NolebaseGitContributors"),n=i("NolebaseGitChangelog");return r(),l("div",null,[k,s(e),c,s(t),s(n)])}const A=h(d,[["render",g]]);export{m as __pageData,A as default};
