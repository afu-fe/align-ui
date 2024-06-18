---
title: Overlay 遮罩层
nav:
  title: 组件
group:
  title: 反馈组件
  order: 3
---

# Overlay 遮罩层

> 创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

## 代码演示

```jsx
/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { Text, TouchableWithoutFeedback } from 'react-native'

import {
  Overlay,
  Button,
  View,
} from 'align-ui'

const BasicOverlay: React.FC = () => {
  const [state, setState] = useState<
    Record<'normal' | 'inset' | 'backgroundColor', boolean>
  >({
    normal: false,
    inset: false,
    backgroundColor: false,
  })

  return (
    <View containerClass={'relative,w-full,h-full'}>
        <Button
          type="primary"
          onClick={() => {
            setState(s => ({
              ...s,
              normal: true,
            }))
          }}
        >显示遮罩层 Android 返回关闭</Button>
        <Button
          type="primary"
          onClick={() => {
            setState(s => ({
              ...s,
              inset: true,
            }))
          }}
        >嵌入内容</Button>
          <Button
            type="primary"
            onClick={() => {
              setState(s => ({
                ...s,
                backgroundColor: true,
              }))
            }}
          >自定义背景色</Button>

      <Overlay
        visible={state.normal}
        onPress={() => {
          setState(s => ({
            ...s,
            normal: false,
          }))
        }}
        onRequestClose={() => {
          console.log('???')
          setState(s => ({
            ...s,
            normal: false,
          }))
          return true
        }}
      />

      <Overlay
        visible={state.inset}
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onPress={() => {
          setState(s => ({
            ...s,
            inset: false,
          }))
        }}>
        <TouchableWithoutFeedback>
          <View
            style={{
              backgroundColor: '#fff',
              width: 200,
              height: 300,
              zIndex: 4,
              borderRadius: 4,
            }}>
            <Text>
              外层嵌套 TouchableWithoutFeedback
              可以阻断子元素的点击事件向外传递，避免误触发关闭。
            </Text>

            <Text>一般情况不在内部放置子元素，而是和其他弹出层同层级。</Text>
          </View>
        </TouchableWithoutFeedback>
      </Overlay>

      <Overlay
        visible={state.backgroundColor}
        backgroundColor="rgba(0,255,0,0.3)"
        onPress={() => {
          setState(s => ({
            ...s,
            backgroundColor: false,
          }))
        }}
      />
    </View>
  )
}

export default BasicOverlay

```


### Overlay

#### 属性


| 属性           | 说明       | 类型      | 默认值 |
| -------------- | ---------- | --------- | ------ |
| style       | 最外层样式   | StyleProp<ViewStyle>  | -      |
| containerClass | 最外层样式系统样式   | string  | -      |
| overlayStyle| overlay 样式 | StyleProp<ViewStyle>  | -      |
| overlayClass| overlay 样式系统样式 | string  | -      |
| visible       | 是否展示遮罩层   | boolean  | false     |
| zIndex       | z-index 层级   | number  | 1      |
| duration       | 动画时长，单位毫秒   | number  | 300     |
| onPress       | 点击弹层   | fun  | () => void      |
| onRequestClose| 当点击返回按钮时触发   | () => boolean  | -      |
| backgroundColor| 弹层背景   | ColorValue  | -      |
| closeOnClickOverlay| 是否点击遮罩关闭   | boolean  | true     |

