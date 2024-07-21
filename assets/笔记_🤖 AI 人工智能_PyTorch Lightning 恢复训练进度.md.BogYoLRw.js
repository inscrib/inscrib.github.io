import{_ as e,c as r,I as s,j as i,w as h,a as n,an as d,D as a,o as g}from"./chunks/framework.DK5kX09G.js";const u=JSON.parse('{"title":"PyTorch Lightning 恢复训练进度","description":"","frontmatter":{"tags":["AI","AI/PyTorch","开发/Python/PyTorch","开发/Python/PyTorchLightning","开发/Python"]},"headers":[],"relativePath":"笔记/🤖 AI 人工智能/PyTorch Lightning 恢复训练进度.md","filePath":"笔记/🤖 AI 人工智能/PyTorch Lightning 恢复训练进度.md"}'),y={name:"笔记/🤖 AI 人工智能/PyTorch Lightning 恢复训练进度.md"},o=i("h1",{id:"pytorch-lightning-恢复训练进度",tabindex:"-1"},[n("PyTorch Lightning 恢复训练进度 "),i("a",{class:"header-anchor",href:"#pytorch-lightning-恢复训练进度","aria-label":'Permalink to "PyTorch Lightning 恢复训练进度"'},"​")],-1),B=d(`<p>下面的代码基于这个镜像进行作业：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>huggingface/transformers-pytorch-deepspeed-latest-gpu</span></span></code></pre></div><p>在镜像中运行下面的命令安装 <code>lightning</code>：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> lightning</span></span></code></pre></div><p>添加修改代码如下：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> os</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> glob</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> find_latest_checkpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    # 获取所有版本目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    version_dirs </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> glob.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">glob</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;lightning_logs/version_*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    # 按版本号排序</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    version_dirs.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">sort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">lambda</span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(x.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;_&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)[</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    # 获取最新版本目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    latest_version_dir </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> version_dirs[</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    # 获取该版本目录下的所有检查点文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    ckpt_files </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> glob.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">glob</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(os.path.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(latest_version_dir, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;checkpoints&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;*.ckpt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    # 按步骤号排序</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    ckpt_files.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">sort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">lambda</span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(x.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;=&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)[</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">].</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    # 获取最新的检查点文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    latest_ckpt_file </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ckpt_files[</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> latest_ckpt_file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    # rest of the code...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    latest_ckpt_path </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;"> find_latest_checkpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> os.path.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">exists</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(latest_ckpt_path):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        logger.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;latest_ckpt_path detected, resuming from </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">latest_ckpt_path</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        trainer.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">fit</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(model, mnist_data, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">ckpt_path</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">latest_ckpt_path)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    else</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        trainer.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">fit</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(model, mnist_data)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;"> __name__</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;__main__&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">    main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span></code></pre></div><p>之后运行下面的命令就可以自动检测最新的检查点文件并恢复训练进度啦！</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">torchrun</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> main.py</span></span></code></pre></div>`,8);function c(A,F,E,_,C,D){const l=a("NolebasePageProperties"),t=a("VPNolebaseInlineLinkPreview"),k=a("NolebaseGitContributors"),p=a("NolebaseGitChangelog");return g(),r("div",null,[o,s(l),B,i("ul",null,[i("li",null,[s(t,{href:"https://help.aliyun.com/zh/pai/user-guide/easyckpt?spm=a2c4g.11186623.0.0.18c02772MLDUbC",target:"_blank",rel:"noreferrer"},{default:h(()=>[n("easyckpt的技术原理和使用方法_人工智能平台 PAI(PAI)-阿里云帮助中心")]),_:1})]),i("li",null,[s(t,{href:"https://help.aliyun.com/zh/pai/user-guide/easyckpt",target:"_blank",rel:"noreferrer"},{default:h(()=>[n("easyckpt的技术原理和使用方法_人工智能平台 PAI(PAI)-阿里云帮助中心")]),_:1})]),i("li",null,[s(t,{href:"https://zhuanlan.zhihu.com/p/159068033",target:"_blank",rel:"noreferrer"},{default:h(()=>[n("Pytorch模型resume training，加载模型基础上继续训练 - 知乎")]),_:1})])]),s(k),s(p)])}const m=e(y,[["render",c]]);export{u as __pageData,m as default};
