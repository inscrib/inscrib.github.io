import{_ as r,c as n,I as e,j as p,a as _,an as c,D as a,o as i}from"./chunks/framework.DK5kX09G.js";const l="/assets/1%E8%8C%83%E6%95%B0-2%E8%8C%83%E6%95%B0-%E6%97%A0%E7%A9%B7%E8%8C%83%E6%95%B0%E7%9A%84%E9%80%9A%E4%BF%97%E7%90%86%E8%A7%A3-v2-91ad054010749e83972f4102eb515eca_b.CWn3v-JC.jpeg",d="/assets/1%E8%8C%83%E6%95%B0-2%E8%8C%83%E6%95%B0-%E6%97%A0%E7%A9%B7%E8%8C%83%E6%95%B0%E7%9A%84%E9%80%9A%E4%BF%97%E7%90%86%E8%A7%A3-v2-5796d2dd5cdd20d7c37a5df507596ea2_b.CIXSxsu7.jpeg",N=JSON.parse('{"title":"1 范数、2 范数、无穷范数的通俗理解？","description":"","frontmatter":{"created":"2022-05-02T23:13:07 (UTC +08:00)","source":"https://zhuanlan.zhihu.com/p/111762323","tags":["数学/线性代数","数学/高等数学","数学/矩阵","数学/范数","数学/矩阵论"]},"headers":[],"relativePath":"笔记/🤖 AI 人工智能/机器学习/知识点/1范数 2范数 无穷范数的通俗理解.md","filePath":"笔记/🤖 AI 人工智能/机器学习/知识点/1范数 2范数 无穷范数的通俗理解.md"}'),h={name:"笔记/🤖 AI 人工智能/机器学习/知识点/1范数 2范数 无穷范数的通俗理解.md"},E=p("h1",{id:"_1-范数、2-范数、无穷范数的通俗理解",tabindex:"-1"},[_("1 范数、2 范数、无穷范数的通俗理解？ "),p("a",{class:"header-anchor",href:"#_1-范数、2-范数、无穷范数的通俗理解","aria-label":'Permalink to "1 范数、2 范数、无穷范数的通俗理解？"'},"​")],-1),m=c('<blockquote><p><strong>Excerpt</strong> 引言 很多人学完了矩阵理论或者数值分析，脑海里还是蒙的，有些比较基础的东西至今还没有一个深刻的理解，就比如矩阵理论中1范数、2范数，以及无穷范数代表什么含义呢？ 范数的理解 我们来讲个故事，保证大家能够…</p></blockquote><hr><h2 id="引言" tabindex="-1">引言 <a class="header-anchor" href="#引言" aria-label="Permalink to &quot;引言&quot;">​</a></h2><p>很多人学完了矩阵理论或者数值分析，脑海里还是蒙的，有些比较基础的东西至今还没有一个深刻的理解，就比如矩阵理论中1范数、2范数，以及无穷范数代表什么含义呢？</p><h3 id="范数的理解" tabindex="-1">范数的理解 <a class="header-anchor" href="#范数的理解" aria-label="Permalink to &quot;范数的理解&quot;">​</a></h3><p>我们来讲个故事，保证大家能够明白，这里主要是以向量范数为例。假设小花要选男朋友，她想在小强和小刚之间选。</p><p>第1种情况，小花的选择标准只有一个，即身高。</p><p>那么，小强的身高是1.7米，小刚的身高是1.8米，所以她会选小刚（这里假如女孩子喜欢高一点的男孩子）。</p><p>第2种情况，小花的择偶标准有两个，即身高和月收入。</p><p>假如小强的月收入为2万，小刚为1万。那么在小花的眼中，小强={1.7，2}，小刚={1.8，1}。</p><p>可是，这怎么比呢？</p><p>于是，小花想出了一个办法，更方便度量，就是综合收入和身高的平均值，她的办法是画出坐标系，看最终谁的点离原点点更远。</p><p>所以通过勾股定理，可以求得小强更远，所以她选择了小强。</p><p>换句话也就是说，范数可以等于点到坐标零点的距离。</p><p>是不是很清新，是不是很明了？</p><p>所以通俗的说，范数就是为了方便度量而定义出的一个概念，主要就是面对复杂空间和多维数组时，选取出一个统一的量化标准，以方便度量和比较。请务必记住，范数是人为定义的一种度量方法。</p><p>那么，如果一个向量里元素更多。例如，小花的择偶标准里再加上性格评分，以及身体素质评分，就变成了（1.7, 2.0, 4.0, 5.8 ）这样形式的向量，维度又增加了。</p><p>所以，我们还可以定义更多的统一度量标准。</p><h3 id="_1范数、2范数、无穷范数-向量范数" tabindex="-1">1范数、2范数、无穷范数（向量范数） <a class="header-anchor" href="#_1范数、2范数、无穷范数-向量范数" aria-label="Permalink to &quot;1范数、2范数、无穷范数（向量范数）&quot;">​</a></h3><p>这三种不同的范数都是不同的度量方法。</p><p>（0范数，向量中非零元素的个数，这里不解释）</p><p><strong>1范数</strong>：所有元素绝对值的和。</p><p><img src="'+l+'" alt=""></p><p><strong>2范数</strong>：所有元素平方和的开方。</p><p><img src="'+d+'" alt=""></p><p><strong>无穷范数</strong>：正无穷范数：所有元素中绝对值最小的。负无穷范数：所有元素中绝对值最大的。</p><p>║x║∞=max（│x1│，│x2│，…，│xn│）</p><p>《武林外传》里一段台词用来解释这几个范数或许是最生动的了。</p><p>佟湘玉有一天在同福客栈说：“额滴神呐，展堂，你说隔壁的赛貂蝉有什么好。”</p><p>老白：“她没没你温柔，没你贤惠，没你大气，没你端庄。”</p><p>佟湘玉：“那为啥你们总往她那跑呢?”老白：“因为他的相貌是满分啊”。</p><p>看到没有？</p><p>如果用2范数来衡量赛貂蝉和佟湘玉，那么可以说佟湘玉并不占下风，但是压不住人家赛貂蝉有一个满分啊，也就是说，从无穷范数的角度来看，赛貂蝉的稳稳超过佟湘玉的。</p><p>再看一个辩题“当今社会更需要通才还是专才”。通才是1范数2范数比较大，而专才就是无穷范数比较大。</p><p>是不是一下子就整明白了，最后，记住，范数是比较向量/矩阵是否“优秀”的一种标准而已。为了加深印象大家还可以使用MATLAB去编程计算一下。</p><p>最后我们讲一下范数对于数学的意义，范数其实就是从数学本质上描述了“什么叫空间”，它不再是我们日常生活对话里的“空间”了。它从更深刻的角度来洞察我们这个世界，下次你一看到空间，你一给你家装修，搞空间艺术，你是不是马上就会想到，我们搞的是范数2空间。</p><p>我们可以想象一下会不会在那么一个平行宇宙，那里的人搞空间艺术，要考虑的却是范数3的空间呢？</p>',37);function b(g,A,u,C,x,f){const t=a("NolebasePageProperties"),o=a("NolebaseGitContributors"),s=a("NolebaseGitChangelog");return i(),n("div",null,[E,e(t),m,e(o),e(s)])}const P=r(h,[["render",b]]);export{N as __pageData,P as default};
