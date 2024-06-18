---
title: Popup 弹层
nav:
  title: 组件
group:
  title: 反馈组件
  order: 3
---

# Popup 弹层

> 弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

## 代码演示

```jsx
/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */
import React, { Component, useState } from 'react';
import { View, Popup, Text, Button } from 'align-ui';

function Demo() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState();
  return (
    
    <View containerClass={'relative,h-full,w-full,flex-col'}>
      <View>弹出位置</View>
      <View>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true)
            setPosition('center')
          }}
        >Popup 居中弹出</Button>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true)
            setPosition('left')
          }}
        >Popup 左侧弹出</Button>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true)
            setPosition('top')
          }}
        >Popup 顶部弹出</Button>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true)
            setPosition('right')
          }}
        >Popup 右侧弹出</Button>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true)
            setPosition('bottom')
          }}
        >Popup 底部弹出</Button>
      </View>
      <Popup
        visible={visible}
        position={position}
        round
        onPressOverlay={()=>{
          setVisible(false)
        }}
      >
        <View containerClass={'bg-white, h-full,px-5,py-5'}>Popup 弹出按钮Popup 弹出按钮Popup 弹出按钮Popup 弹出按钮</View>
      </Popup>
      <View>弹出位置</View>
    </View>
  );
}
export default Demo;

```


### Popup

#### 属性


| 属性           | 说明       | 类型      | 默认值 |
| -------------- | ---------- | --------- | ------ |
| style       | 最外层样式   | StyleProp<ViewStyle>  | -      |
| containerClass | 最外层样式系统样式   | string  | -      |
| visible | 是否显示   | `boolean`  | fasle      |
| overlay | 是否显示遮罩层   | `boolean`  | true     |
| onPressOverlay | 点击遮罩层时触发   | `() => void`  | -      |
| onOpen | 打开弹出层时触发   | `() => void`  | -      |
| onOpened | 打开弹出层且动画结束后触发   | `() => void`  | -      |
| onClose | 关闭弹出层时触发   | `() => void`  | -      |
| onClosed | 关闭弹出层且动画结束后触发   | `() => void`  | -      |
| position | 弹出位置，   | `可选值为 'top' 'bottom' 'right' 'left' 'center'`  | 'center' |
| round | 显示圆角   | `number`  | 0     |
| lazyRender | 是否在显示弹层时才渲染节点   | `boolean`  | true     |




