# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## 可能出现的坑
1 在mac用electron-builder打包时，可能出现错误：
在mac上打包时出现下载electron-v2.0.18-darwin-x64.zip下载错误
解决：参考  https://blog.csdn.net/weixin_44287376/article/details/103630809

2 推荐用官方推荐的electron-forge打包。用electron-builder打包可能会出现一些错误。

3 打包时，先用vite打包，再用electron-forge打包