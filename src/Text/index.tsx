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
