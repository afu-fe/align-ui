import type WebpackChain from "webpack-chain";
import { defineConfig } from "dumi";
const pkgJSON = require("./package.json");
const CopyPlugin = require("copy-webpack-plugin");
const navs = [
  {
    title: "指南",
    path: "/guide",
  },
  {
    title: "样式系统",
    path: "/cssSite",
  },
  {
    title: "组件",
    path: "/component",
  },
  {
    title: `GitHub v${pkgJSON.version}`,
    path: "",
  },
  ];
// 生成版本json文件
const CopyWebpackPlugin = new CopyPlugin({
  patterns: [
    {
      from: "./package.json",
      to: "./app-info.json",
      transform: () => {
        return JSON.stringify(
          {
            navs,
            appName: pkgJSON.name,
          },
          null,
          2
        );
      },
    },
  ],
});
const repo = process.env.PUBLIC_PATH || "";

export default defineConfig({
  chainWebpack(memo: WebpackChain) {
    memo.plugins.delete("copy");
    if (process.env.NODE_ENV !== "development") {
      memo.plugin("copy-webpack-plugin").use(CopyWebpackPlugin);
    }
  },
  title: "align-ui",
  mode: "site",
  outputPath: "docs-dist",
  hash: true,
  favicon: "https://z.autoimg.cn/sou/auto-ui/logo-new.png",
  logo: "https://z.autoimg.cn/sou/auto-ui/logo-new.png",
  base: `/afu_ui/`,
  publicPath: `/afu_ui/`,
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  apiParser: {
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
    },
  },
  history: {
    type: "hash",
  },
  navs,
  resolve: {
    includes: ["docs", "src"],
  },
  locales: [["zh-CN", "中文"]],
  styles: [],
});
