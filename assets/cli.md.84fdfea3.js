import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.62b283ab.js";const u=JSON.parse('{"title":"jll-cli 安装使用说明","description":"","frontmatter":{},"headers":[],"relativePath":"cli.md","filePath":"cli.md","lastUpdated":1715764036000}'),p={name:"cli.md"},e=l(`<h1 id="jll-cli-安装使用说明" tabindex="-1">jll-cli 安装使用说明 <a class="header-anchor" href="#jll-cli-安装使用说明" aria-label="Permalink to &quot;jll-cli 安装使用说明&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">说明</p><p>安装该cli，可快速构建基于<code>Vue 2.x</code> 的机制开发脚手架</p><p>技术栈：Vue 2.x全家桶~</p></div><h2 id="环境要求" tabindex="-1">环境要求 <a class="header-anchor" href="#环境要求" aria-label="Permalink to &quot;环境要求&quot;">​</a></h2><p>node版本：<code>v16+</code></p><h2 id="全局安装-jll-cli" tabindex="-1">全局安装 jll-cli <a class="header-anchor" href="#全局安装-jll-cli" aria-label="Permalink to &quot;全局安装 jll-cli&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jll-cli</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看是否安装成功</span></span>
<span class="line"><span style="color:#B392F0;">jll-cli</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span></span>
<span class="line"><span style="color:#6A737D;">#输出版本号代表安装成功</span></span>
<span class="line"><span style="color:#B392F0;">v1.0.1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jll-cli</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看是否安装成功</span></span>
<span class="line"><span style="color:#6F42C1;">jll-cli</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--version</span></span>
<span class="line"><span style="color:#6A737D;">#输出版本号代表安装成功</span></span>
<span class="line"><span style="color:#6F42C1;">v1.0.1</span></span></code></pre></div><h2 id="创建开发机制的基础脚手架" tabindex="-1">创建开发机制的基础脚手架 <a class="header-anchor" href="#创建开发机制的基础脚手架" aria-label="Permalink to &quot;创建开发机制的基础脚手架&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 第一步，执行 create</span></span>
<span class="line"><span style="color:#B392F0;">jll-cli</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span></span>
<span class="line"><span style="color:#6A737D;"># 输入项目名称</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> 请输入项目名称：test</span></span>
<span class="line"><span style="color:#6A737D;"># 选择脚手架模板 目前只有 vue，后续会更新 基于 cocos creater的基础模板</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> 请选择模版： (Use arrow keys)</span></span>
<span class="line"><span style="color:#E1E4E8;">[❯ vue2-js-h5</span></span>
<span class="line"><span style="color:#6A737D;"># 选择完后直接拉取基础模板代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入 test 目录</span></span>
<span class="line"><span style="color:#E1E4E8;">cd test</span></span>
<span class="line"><span style="color:#6A737D;"># 安装项目依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">npm install</span></span>
<span class="line"><span style="color:#6A737D;"># 本地运行项目</span></span>
<span class="line"><span style="color:#E1E4E8;">npm run serve</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 第一步，执行 create</span></span>
<span class="line"><span style="color:#6F42C1;">jll-cli</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span></span>
<span class="line"><span style="color:#6A737D;"># 输入项目名称</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> 请输入项目名称：test</span></span>
<span class="line"><span style="color:#6A737D;"># 选择脚手架模板 目前只有 vue，后续会更新 基于 cocos creater的基础模板</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> 请选择模版： (Use arrow keys)</span></span>
<span class="line"><span style="color:#24292E;">[❯ vue2-js-h5</span></span>
<span class="line"><span style="color:#6A737D;"># 选择完后直接拉取基础模板代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入 test 目录</span></span>
<span class="line"><span style="color:#24292E;">cd test</span></span>
<span class="line"><span style="color:#6A737D;"># 安装项目依赖</span></span>
<span class="line"><span style="color:#24292E;">npm install</span></span>
<span class="line"><span style="color:#6A737D;"># 本地运行项目</span></span>
<span class="line"><span style="color:#24292E;">npm run serve</span></span></code></pre></div>`,8),o=[e];function c(t,r,i,y,d,E){return a(),n("div",null,o)}const v=s(p,[["render",c]]);export{u as __pageData,v as default};
