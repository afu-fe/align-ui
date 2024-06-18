import * as React from 'react';
import omit from 'lodash/omit';
import { Animated, TouchableOpacity, View, Dimensions } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
export type PopupPosition = 'top' | 'bottom' | 'right' | 'left' | 'center';
export type State = {
  visible: boolean
  zIndex: number
  lazyRender: boolean
}
let zIndex = 2000

/**
 * 获取下一个 z-index
 */
export const getNextZIndex = () => ++zIndex

export const isTopOrBottom = (position: PopupPosition) =>
  position === 'top' || position === 'bottom'
export const absolute = {
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
}
export const getBorderRadius = (
  position: PopupPosition,
  round: number,
): ViewStyle => {
  const borderRadius = round
  return {
    borderTopLeftRadius:
      position === 'bottom' || position === 'right' ? borderRadius : 0,
    borderTopRightRadius:
      position === 'bottom' || position === 'left' ? borderRadius : 0,
    borderBottomLeftRadius:
      position === 'top' || position === 'right' ? borderRadius : 0,
    borderBottomRightRadius:
      position === 'top' || position === 'left' ? borderRadius : 0,
  }
}
export const getTransform = (
  position: PopupPosition,
  value: any,
): ViewStyle => {
  if (position === 'center') {
    return {
      opacity: value,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      // transform: [
      //   {
      //     translateX: 0,
      //   },
      //   {
      //     translateY: 0,
      //   },
      // ],
    }
  }

  const isY = isTopOrBottom(position)

  return {
    transform: [
      isY
        ? {
            translateY: value,
          }
        : {
            translateX: value,
          },
    ],
  }
}
export const getPosition = (visible: boolean, position: PopupPosition) => {
  if (position === 'center') {
    return visible ? 1 : 0
  }

  if (visible) {
    return 0
  }

  const screen = Dimensions.get('window')

  const x = screen.width * (visible ? 0 : 1)
  const y = screen.height * (visible ? 0 : 1)

  switch (position) {
    case 'top':
      return -y

    case 'bottom':
      return y

    case 'left':
      return -x

    case 'right':
      return x

    default:
      return 0
  }
}
export const PopupPositionMap: Record<PopupPosition, ViewStyle> = {
  center: {
    flex: 1,
    backgroundColor: 'transparent',
    // backgroundColor: 'rgba(0,0,0,0.8)', // to test ui
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: omit(absolute, ['right']),
  right: omit(absolute, ['left']),
  top: omit(absolute, ['bottom']),
  bottom: omit(absolute, ['top']),
}