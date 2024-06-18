import isUndefined from 'lodash/isUndefined'
import React, { useEffect, useRef, useState, memo } from 'react'
import {
  TouchableOpacity,
  Animated,
} from 'react-native'

import type { OverlayProps } from './interface'
import { tailwind } from '../utils/tool';
/**
 * Overlay 遮罩层
 * @description 创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。
 * TODO 统计遮罩层数量，动态控制状态栏的颜色，避免黑色遮罩层配合黑色文字的状态栏。
 */
const Overlay: React.FC<OverlayProps> = ({
  testID,
  children,
  style,
  containerClass,
  overlayStyle,
  overlayClass = '',
  zIndex,
  visible = false,
  duration = 300,
  onPress,
  closeOnClickOverlay = true,
  backgroundColor = 'rgba(0, 0, 0, 0.7)',
}) => {
  const fadeAnim = useRef(new Animated.Value(0))
  const fadeInstance = useRef<Animated.CompositeAnimation | null>(null)
  const [localVisible, setLocalVisible] = useState(visible)


  // 监听状态变化，执行动画
  useEffect(() => {
    if (visible) {
      setLocalVisible(true)
    }
    fadeInstance.current = Animated.timing(
      fadeAnim.current, // 动画中的变量值
      {
        toValue: visible ? 1 : 0,
        duration: duration,
        useNativeDriver: true,
      },
    )

    fadeInstance.current.start(({ finished }) => {
      if (finished) {
        fadeInstance.current = null
        if (!visible) {
          setLocalVisible(false)
        }
      }
    })

    return () => {
      // 停止动画
      if (fadeInstance.current) {
        fadeInstance.current.stop()
        fadeInstance.current = null
      }
    }
  }, [visible, duration])

  if (!localVisible) {
    // TODO 优化文档报错
    // 直接返回 null dumi 报错 -、-
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>
  }

  return (
    <Animated.View
      testID={testID}
      style={[
        tailwind(`relative,top-0,left-0,bottom-0,right-0,${containerClass}`),
        localVisible ? tailwind('absolute'): null,
        {
          opacity: fadeAnim.current,
          backgroundColor: backgroundColor,
          zIndex: !isUndefined(zIndex) ? zIndex : 10,
        },
        overlayStyle,
      ]}>
      <TouchableOpacity
        style={[tailwind(`flex-1,${overlayClass}`), style]}
        activeOpacity={1}
        onPress={()=>{
          if (closeOnClickOverlay && onPress){
            onPress()
          }
        }}>
        {children}
      </TouchableOpacity>
    </Animated.View>
  )
}

export default memo(Overlay)
