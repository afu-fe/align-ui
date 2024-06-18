# Align-ui

# 介绍

🌈 轻量、可靠的跨端组件库。

RN/H5 同构：一套代码 iOS / Android / H5 三端运行，组件库抹平三端差异。RN 为客户端提供热更新能力，并能在纯 web 项目中使用

定制的样式系统：在 rn-atomcssRN 端样式工具的基础上，拓展了 H5 的样式生成，一些特殊的 web 端的样式，可以通过写行内样式的方式来实现

改善 RN 开发体验：将 RN 开发门槛从客户端降低为 web 开发，可在浏览器通过 web 调试方式进行业务逻辑开发和接口联调等，无需启动模拟器或连接真机。


# 安装

### 通过 npm 安装

在现有项目中使用 `align-ui` 时，可以通过 npm 或 yarn 进行安装。

> 推荐使用 yarn，npm 可能造成项目中存在多个版本 react native，引入 `align-ui` 代码后红屏。

```bash
## npm
npm i align-ui

## yarn
yarn add align-ui

```

## 引入组件

### 使用组件

```tsx | pure
import React from 'react'
import { Provider, View } from 'align-ui'

const App: React.FC = () => {
  return (
    <Provider>
      <View>普通按钮</View>
    </Provider>
  )
}
```

### 使用样式系统

> 表示宽 60 高 80

```tsx | pure
import React from 'react'
import { View } from 'align-ui'

const App: React.FC = () => {
  return <View containerClass={'w-30,h-40'}>普通按钮</View>
}
```

## 常见问题