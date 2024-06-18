/*
 * @Author: cuiwujie 
 * @Date: 2024-03-05 11:21:48
 * @LastEditors: cuiwujie 
 * @LastEditTime: 2024-03-13 14:21:49
 * @FilePath: /afu-ui/packages/core/src/Text/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * ✔ selectable
 * ✘ space
 * ✘ decode: Fixed value TRUE
 */

import * as React from 'react';
import { Text } from 'react-native';
import type { TextProps } from 'react-native';

import { extracteTextStyle, tailwind } from '../utils/tool';
export interface ITextProps extends TextProps {
  containerClass?: string;
  style?: TextProps;
  children?: React.ReactNode;
  selectable?: boolean;
  onClick?: () => void;
}
const _Text: React.FC<ITextProps> = ({
  containerClass = '',
  style,
  children,
  selectable,
  onClick,
  ...otherProps
}) => {
  return (
    <Text
      selectable={!!selectable}
      style={[tailwind(containerClass), extracteTextStyle(style)]}
      onPress={onClick}
      {...otherProps}
      testID="RNE__text__wrap"
    >
      {children}
    </Text>
  );
};

_Text.displayName = '_Text';

export { _Text };
export default _Text;
