/*
 * @Author: cuiwujie 
 * @Date: 2024-02-23 13:36:13
 * @LastEditors: cuiwujie 
 * @LastEditTime: 2024-04-03 13:46:25
 * @FilePath: /afu-ui/packages/core/src/components/View/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from 'react';
import { View, Text } from 'react-native';
import type { ViewProps, TextProps, ViewStyle, TextStyle } from 'react-native';

import { extracteTextStyle, omit, tailwind } from '../utils/tool';

import useClickable, { clickableHandlers } from '../hooks/useClickable';
import type { ClickableProps } from '../hooks/PropsType';

export interface _ViewProps extends ViewProps, TextProps {
  containerClass?: string;
  style?: ViewStyle | TextProps;
  children?: React.ReactNode;
}

const stringToText = (child: any, props: any) => {
  // TODO: 实现小程序中效果
  if (typeof child === 'string' || typeof child === 'number') {
    // textNode节点
    return <Text {...omit(props, clickableHandlers)}>{child}</Text>;
  }
  return child;
};

// 兼容View中没用Text包裹的文字 防止报错 直接继承props在安卓中文字会消失？？？
const renderChildren = (children: React.ReactNode, props: any) => {
  let textStyle: TextStyle | null = null;
  if (Array.isArray(children)) {
    return children.map((child, i) => {
      if ((typeof child === 'string' || typeof child === 'number') && !textStyle) {
        // 存在textNode，解析textStyle
        textStyle = extracteTextStyle({ ...tailwind(props?.containerClass), ...props.style });
      }
      return stringToText(child, { key: i, ...props, style: textStyle });
    });
  } else {
    if ((typeof children === 'string' || typeof children === 'number') && !textStyle) {
      // 存在textNode，解析textStyle
      textStyle = extracteTextStyle({ ...tailwind(props?.containerClass), ...props.style });
    }
    return stringToText(children, { ...props, style: textStyle });
  }
};

const _View: React.ForwardRefExoticComponent<
  _ViewProps & ClickableProps & React.RefAttributes<any>
> = React.forwardRef((props: _ViewProps & ClickableProps, ref: React.ForwardedRef<any>) => {
  const clickable = useClickable(props); // 性能优化：从HOC替换成hooks，减少一层组件实例
  return (
    <View ref={ref} {...clickable} testID="RNE__view__wrap">
      {renderChildren(props.children, props)}
    </View>
  );
});

_View.displayName = '_View';

export { _View };
export default _View;
