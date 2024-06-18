import isNil from 'lodash/isNil'
import isUndefined from 'lodash/isUndefined'
import React, { isValidElement } from 'react'
import type {
  TextStyle,
  StyleProp,
  TextProps,
} from 'react-native'
import { Text } from 'react-native'


export * from './attach-properties-to-component'

/** 获取默认值 */
export const getDefaultValue = <T,>(value: T, defaultValue: T): T => {
  return !isUndefined(value) ? value : defaultValue
}

/** 渲染类文字的 JSX */
export const renderTextLikeJSX = (
  node: React.ReactNode,
  style: StyleProp<TextStyle>,
  restProps?: Omit<TextProps, 'style'>,
) => {
  return !isNil(node) ? (
    isValidElement(node) ? (
      node
    ) : (
      <Text {...restProps} style={style}>
        {node}
      </Text>
    )
  ) : null
}