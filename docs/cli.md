# jll-cli 安装使用说明

::: tip 说明
安装该cli，可快速构建基于`Vue 2.x` 的机制开发脚手架

技术栈：Vue 2.x全家桶~
:::

## 环境要求
node版本：`v16+`

## 全局安装 jll-cli
``` sh
npm install jll-cli

# 查看是否安装成功
jll-cli --version
#输出版本号代表安装成功
v1.0.1
```

## 创建开发机制的基础脚手架
``` sh
# 第一步，执行 create
jll-cli create
# 输入项目名称
[? 请输入项目名称：test
# 选择脚手架模板 目前只有 vue，后续会更新 基于 cocos creater的基础模板
[? 请选择模版： (Use arrow keys)
[❯ vue2-js-h5
# 选择完后直接拉取基础模板代码

# 进入 test 目录
cd test
# 安装项目依赖
npm install
# 本地运行项目
npm run serve
```