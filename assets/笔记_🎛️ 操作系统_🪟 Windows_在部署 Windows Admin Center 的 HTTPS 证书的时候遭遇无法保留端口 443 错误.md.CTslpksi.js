import{_ as c,c as d,I as s,j as e,a as n,w as t,an as i,D as o,o as h}from"./chunks/framework.DK5kX09G.js";const P=JSON.parse('{"title":"在部署 Windows Admin Center 的 HTTPS 证书的时候遭遇无法保留端口 443 错误","description":"","frontmatter":{"tags":["操作系统/Windows","操作系统/Windows-Server","软件/Windows/WindowsAdminCenter","软件/Windows/Powershell","命令行/Powershell","数学/密码学/证书","数学/密码学/证书/TLS/SSL","命令行/openssl","数学/密码学/算法/ECDSA","数学/密码学/算法/ED25519","数学/密码学/算法/RSA","数学/密码学/证书/TLS/HTTPS","命令行/msiexec","软件/Windows/msiexec"]},"headers":[],"relativePath":"笔记/🎛️ 操作系统/🪟 Windows/在部署 Windows Admin Center 的 HTTPS 证书的时候遭遇无法保留端口 443 错误.md","filePath":"笔记/🎛️ 操作系统/🪟 Windows/在部署 Windows Admin Center 的 HTTPS 证书的时候遭遇无法保留端口 443 错误.md"}'),m={name:"笔记/🎛️ 操作系统/🪟 Windows/在部署 Windows Admin Center 的 HTTPS 证书的时候遭遇无法保留端口 443 错误.md"},_=e("h1",{id:"在部署-windows-admin-center-的-https-证书的时候遭遇无法保留端口-443-错误",tabindex:"-1"},[n("在部署 Windows Admin Center 的 HTTPS 证书的时候遭遇无法保留端口 443 错误 "),e("a",{class:"header-anchor",href:"#在部署-windows-admin-center-的-https-证书的时候遭遇无法保留端口-443-错误","aria-label":'Permalink to "在部署 Windows Admin Center 的 HTTPS 证书的时候遭遇无法保留端口 443 错误"'},"​")],-1),u=i(`<h2 id="tl-dr" tabindex="-1">TL;DR <a class="header-anchor" href="#tl-dr" aria-label="Permalink to &quot;TL;DR&quot;">​</a></h2><p>可能和证书算法和格式不兼容有关，通过 ED25519 和 ECDSA Secp256k1 算法生成了证书，而不是往常的 RSA 证书，但也许这是 Windows Admin Center 的 HTTPS 服务器尚不支持的，所以出现了问题，切换到 RSA 就好了。</p><h2 id="缘由" tabindex="-1">缘由 <a class="header-anchor" href="#缘由" aria-label="Permalink to &quot;缘由&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>1. Unhandled Exception</span></span>
<span class="line"><span>Microsoft.Deployment.WindowsInstaller.InstallerException</span></span>
<span class="line"><span>Failed to reserve port 443</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>1. 未处理的异常</span></span>
<span class="line"><span>Microsoft.Deployment.WindowsInstaller.InstallerException</span></span>
<span class="line"><span>无法保留端口 443</span></span></code></pre></div><h2 id="排查" tabindex="-1">排查 <a class="header-anchor" href="#排查" aria-label="Permalink to &quot;排查&quot;">​</a></h2><p>通过事件查看器（<code>eventvwr.msc</code>）查阅了系统的日志之后发现 Windows Admin Center 的安装器以 1603 的错误代码返回了。</p>`,7),S=i(`<div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">msiexec </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">i </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;C:\\Users\\neko.HOMELAB\\Downloads\\WindowsAdminCenter2306.msi&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">v </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;log.log&quot;</span></span></code></pre></div><p>但是实际上依然不行，日志中就是单纯的描述了在绑定端口的时候出现了问题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>MSI (s) (94:D4) [23:46:23:247]: Executing op: ActionStart(Name=BindSslPort,,)</span></span>
<span class="line"><span>操作 23:46:23: BindSslPort.</span></span>
<span class="line"><span>MSI (s) (94:D4) [23:46:23:263]: Executing op: CustomActionSchedule(Action=BindSslPort,ActionType=3073,Source=BinaryData,Target=BindSslPort,CustomActionData=SME_PORT=443;SME_THUMBPRINT=46a713bd4e296069908c688837642c458d5700d5;SUPPORTED_SERVER_SKU=1)</span></span>
<span class="line"><span>MSI (s) (94:D0) [23:46:23:263]: Invoking remote custom action. DLL: C:\\Windows\\Installer\\MSI74A1.tmp, Entrypoint: BindSslPort</span></span>
<span class="line"><span>SFXCA: Extracting custom action to temporary directory: C:\\Windows\\Installer\\MSI74A1.tmp-\\</span></span>
<span class="line"><span>SFXCA: Binding to CLR version v4.0.30319</span></span>
<span class="line"><span>Calling custom action Microsoft.ManagementExperience.Setup.CustomActions!Microsoft.ManagementExperience.Setup.CustomActions.CustomAction.BindSslPort</span></span>
<span class="line"><span>操作 23:46:23: 正在绑定 SSL 端口. 正在绑定 SSL 端口</span></span>
<span class="line"><span>异常:</span></span>
<span class="line"><span>Microsoft.Deployment.WindowsInstaller.InstallerException</span></span>
<span class="line"><span>无法保留端口 443</span></span>
<span class="line"><span>   在 Microsoft.ManagementExperience.Setup.CustomActions.CustomAction.&lt;&gt;c__DisplayClass32_0.&lt;BindSslPort&gt;b__0()</span></span>
<span class="line"><span>   在 Microsoft.ManagementExperience.Setup.CustomActions.CustomAction.RunInstallerAction(Session session, Func\`1 action)</span></span>
<span class="line"><span>1: 未经处理的异常: Microsoft.Deployment.WindowsInstaller.InstallerException 无法保留端口 443</span></span>
<span class="line"><span>MSI (s) (94!94) [23:49:51:915]: Transforming table Error.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MSI (s) (94!94) [23:49:51:915]: 产品: Windows Admin Center -- 1: 未经处理的异常: Microsoft.Deployment.WindowsInstaller.InstallerException 无法保留端口 443</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CustomAction BindSslPort returned actual error code 1603 (note this may not be 100% accurate if translation happened inside sandbox)</span></span>
<span class="line"><span>操作结束 23:49:51: InstallFinalize。返回值 3。</span></span></code></pre></div><p>我尝试通过在服务（<code>services.msc</code>）中关闭正在运行的需要升级的 Windows Admin Center 或者切换端口来尝试解决这个问题，但是实际上没有效果，依然是一样的报错。</p><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>我想起来在我尝试实践[[在本地用 OpenSSL 用配置文件和版本控制的方式创建、配置和使用 Intermediate CA（中间 CA）]]的时候通过 ED25519 和 ECDSA Secp256k1 算法生成了证书，而不是往常的 RSA 证书，我这个时候意识到可能是我使用了 Windows Admin Center 的 HTTPS 服务器尚不支持的证书算法导致的，于是我切换到了 RSA 算法来重新生成和部署证书，然后这个问题就被解决了。</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2>`,7);function w(g,C,f,k,A,b){const r=o("NolebasePageProperties"),a=o("VPNolebaseInlineLinkPreview"),l=o("NolebaseGitContributors"),p=o("NolebaseGitChangelog");return h(),d("div",null,[_,s(r),u,e("p",null,[n("我尝试通过"),s(a,{href:"/笔记/🎛️ 操作系统/🪟 Windows/调试 MSI - 输出 MSI 安装器的输出为日志.html"},{default:t(()=>[n("将 MSI 安装器的日志输出")]),_:1}),n("的方式来调试：")]),S,e("p",null,[s(a,{href:"https://community.spiceworks.com/topic/2467339-window-s-admin-center-failes-to-install-cannot-reserve-port",target:"_blank",rel:"noreferrer"},{default:t(()=>[n("Window's Admin Center Failes to Install Cannot reserve port.")]),_:1})]),e("p",null,[s(a,{href:"https://social.technet.microsoft.com/Forums/windowsserver/en-US/30c13d54-4abe-455b-bc36-71208116e991/windows-admin-center-installation-error?forum=WinServerPreview",target:"_blank",rel:"noreferrer"},{default:t(()=>[n("Windows Admin Center Installation Error")]),_:1})]),e("p",null,[s(a,{href:"https://github.com/MicrosoftDocs/windowsserverdocs/issues/2154",target:"_blank",rel:"noreferrer"},{default:t(()=>[n("Install fails: Failed to reserve port 6516 · Issue #2154 · MicrosoftDocs/windowsserverdocs")]),_:1})]),e("p",null,[s(a,{href:"https://github.com/MicrosoftDocs/windowsserverdocs/issues/611",target:"_blank",rel:"noreferrer"},{default:t(()=>[n("Thumbprint format · Issue #611 · MicrosoftDocs/windowsserverdocs")]),_:1})]),e("p",null,[s(a,{href:"https://github.com/MicrosoftDocs/windowsserverdocs/issues/645",target:"_blank",rel:"noreferrer"},{default:t(()=>[n("Can not open the Page · Issue #645 · MicrosoftDocs/windowsserverdocs")]),_:1})]),e("p",null,[s(a,{href:"https://learn.microsoft.com/en-us/answers/questions/1341345/windows-admin-center",target:"_blank",rel:"noreferrer"},{default:t(()=>[n("安装windows admin center时提示端口的问题 - Microsoft Q&A")]),_:1})]),e("p",null,[s(a,{href:"https://learn.microsoft.com/en-us/troubleshoot/windows-server/application-management/msi-installation-error-1603",target:"_blank",rel:"noreferrer"},{default:t(()=>[n("MSI installation error 1603 - Windows Server | Microsoft Learn")]),_:1})]),s(l),s(p)])}const T=c(m,[["render",w]]);export{P as __pageData,T as default};
