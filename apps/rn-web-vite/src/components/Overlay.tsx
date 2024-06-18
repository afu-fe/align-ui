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
