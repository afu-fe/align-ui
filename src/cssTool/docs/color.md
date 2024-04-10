---
mobile: false
title: 颜色模块
order: 1
nav:
  title: 样式系统
  path: /cssSite
  order: 1
group:
  title: 系统介绍
  path: /info
  order: 1
---

# 颜色模块

样式组件系统对该颜色进行封装，每种颜色值直接转变为一个前端变量，将前端编程语言与设计语言统一，使组件和设计系统可以被快速实现。比如直接写 text-red 即可。样式组件系统会自动转换为字体的颜色

- View 组件 支持 颜色/背景颜色
- Text 组件 支持 颜色

```jsx | pure
  <View containerClass={'bg-red,text-red'}>颜色</View>
  <Text containerClass={'text-red'}>颜色</Text>
```

## color

用于控制元素颜色

```jsx | nomobile
import React from 'react'
import { colorbase } from '../config/index'
import { addOpacity } from '../utils/index'
import { color, colors } from '../../utils/index'
import './index.css'
const Index = () => {
  const colorArr = Object.keys(colorbase)
  const colorExtend = Object.keys(colors.colorsPalette)
  return (
    <div className="color-box" style={{ width: '100%', position: 'relative' }}>
      {colorArr.map((ele, index) => (
        <li key={index} className="item">
          <p className="name">{ele}</p>
          <span
            style={{
              background: addOpacity(colorbase[ele], 100),
            }}></span>
        </li>
      ))}
      {colorExtend.map((ele, index) => (
        <li key={index} className="item">
          <p className="name">{ele}</p>
          <span
            style={{
              background: addOpacity(colors.colorsPalette[ele], 100),
            }}></span>
        </li>
      ))}
    </div>
  )
}

export default Index
```
