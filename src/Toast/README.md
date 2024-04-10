---
title: Toast 轻提示
nav:
  title: 组件
  path: /component
group:
  title: 通用组件
  path: /general
  order: 1
---

# Toast 轻提示

提供一个简单的 Toast，可以传入 icon、image 来展示不同的效果，页面层级为 1090

### 功能

- 当某个页面需要向用户显示提示的信息时。
- 非浮层的静态展现形式，可自动消失，可始终展现。

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React, { Component, useState } from 'react';
import { Toast, View, Button } from 'align-ui';

function Demo() {
  const [msgdata, setMsgdata] = React.useState({
    msg: '',
    type: 0,
    iconType: '',
    image: '',
  });
  const [iconType, seticonType] = useState('');
  return (
    <>
      <View containerClass={'text-8,mb-5,text-black,din'}>Toast 轻提示</View>
      <View containerClass="flex-col,h-300">
        <Button
          onClick={() => {
            setMsgdata({
              msg: '这是一条提示信息',
              type: '',
              iconType: '',
              image: '',
            });
          }}
        >
          提示信息
        </Button>
        <Button
          onClick={() => {
            setMsgdata({
              msg: '文本信息+Icon',
              type: '',
              iconType: 'success',
              image: '',
            });
          }}
        >
          文本信息+Icon
        </Button>
        <Button
          onClick={() => {
            setMsgdata({
              msg: '文本信息+image',
              type: '',
              iconType: '',
              image: 'https://xqimg.imedao.com/1811de0356b43273fe4a0066.png',
            });
          }}
        >
          文本信息+image
        </Button>
        <Toast content={msgdata.msg} iconType={msgdata.iconType} image={msgdata.image} />
      </View>
    </>
  );
}
export default Demo;
```

### Toast

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 文字描述 | `string` | `--` |
| iconType | 定义 Icon , 取值范围同 Icon 组件 | `string` | `--` |
| image | 元素展示的图片 | `string` | `--` |
| duration | 元素持续的事件（设置为 0 将不会自动消失） 默认 3000 | `Number` | `3` |
| onClose | 关闭时触发的回调函数 | `() => void` | `--` |
| onAnimationEnd | 动画结束时触发的回调函数 | `() => void` | `--` |
| mask | 是否存在底部遮罩层(无法点击底部的内容区) | `Boolean` | `--` |
| textCss | 弹窗文本的样式 | `string` | `text-7.5,text-white` |
