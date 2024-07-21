import{_ as l,c as p,I as s,j as a,a as o,an as h,D as i,o as d}from"./chunks/framework.DK5kX09G.js";const F=JSON.parse('{"title":"解决 npm yarn pnpm 全局安装无效","description":"","frontmatter":{"tags":["开发/Nodejs","开发/Nodejs/npm","开发/Nodejs/pnpm","开发/Nodejs/yarn","操作系统/macOS","操作系统/Linux","操作系统/Windows"]},"headers":[],"relativePath":"笔记/📟 终端/解决 npm yarn pnpm 全局安装无效.md","filePath":"笔记/📟 终端/解决 npm yarn pnpm 全局安装无效.md"}'),r={name:"笔记/📟 终端/解决 npm yarn pnpm 全局安装无效.md"},c=a("h1",{id:"解决-npm-yarn-pnpm-全局安装无效",tabindex:"-1"},[o("解决 npm yarn pnpm 全局安装无效 "),a("a",{class:"header-anchor",href:"#解决-npm-yarn-pnpm-全局安装无效","aria-label":'Permalink to "解决 npm yarn pnpm 全局安装无效"'},"​")],-1),k=h('<p>把 <code>npm</code> 或 <code>yarn</code> 的执行目录添加到 <code>PATH</code> 就行了。</p><h2 id="查看-bin-文件夹所在位置" tabindex="-1">查看 <code>bin</code> 文件夹所在位置 <a class="header-anchor" href="#查看-bin-文件夹所在位置" aria-label="Permalink to &quot;查看 `bin` 文件夹所在位置&quot;">​</a></h2><p>执行下面的命令可以查看目录位置, 把输出的路径信息添加到 <code>npm</code> 或 <code>yarn</code> 的执行程序目录。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> bin</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">      # npm</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> bin</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">     # pnpm</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> bin</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # yarn</span></span></code></pre></div><h2 id="将-bin-添加到-path-中" tabindex="-1">将 <code>bin</code> 添加到 <code>PATH</code> 中 <a class="header-anchor" href="#将-bin-添加到-path-中" aria-label="Permalink to &quot;将 `bin` 添加到 `PATH` 中&quot;">​</a></h2><h3 id="在-mac-和-linux-下" tabindex="-1">在 Mac 和 Linux 下 <a class="header-anchor" href="#在-mac-和-linux-下" aria-label="Permalink to &quot;在 Mac 和 Linux 下&quot;">​</a></h3><blockquote><p>如果使用 <code>zsh</code> 请将命令中出现的所有 <code>profile</code> 替换为 <code>zprofile</code> 权限不足时在命令开头添加 <code>sudo</code> 命令，使用管理员权限运行</p></blockquote><p>在终端中执行下面的命令打开系统配置文件（暂且称为系统配置文件吧）</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/profile</span></span></code></pre></div><p>在最下面加入一行</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;要添加到系统执行路径的路径:</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span></code></pre></div><p>保存后执行下面的命令刷新系统配置就可以生效了</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/profile</span></span></code></pre></div><h3 id="在-windows-下" tabindex="-1">在 Windows 下 <a class="header-anchor" href="#在-windows-下" aria-label="Permalink to &quot;在 Windows 下&quot;">​</a></h3><ol><li>按Win+R键打开运行窗口</li><li>输入下面的命令， 回车</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">SystemPropertiesAdvanced</span></span></code></pre></div><ol start="3"><li>点击“环境变量”</li><li>双击 系统变量 &gt; PATH</li><li>点击“新建”</li><li>输入要添加到系统的执行路径，点击“确定”就行了</li></ol>',17);function g(m,y,b,u,_,C){const e=i("NolebasePageProperties"),n=i("NolebaseGitContributors"),t=i("NolebaseGitChangelog");return d(),p("div",null,[c,s(e),k,s(n),s(t)])}const f=l(r,[["render",g]]);export{F as __pageData,f as default};
