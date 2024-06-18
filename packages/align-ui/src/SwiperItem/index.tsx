/**
 * SwiperItem
 */

import * as React from 'react';
import { View } from 'react-native';
import { omit } from '../utils/tool';
import type { ViewStyle } from 'react-native';
import { tailwind } from '../utils/tool';
export interface SwiperItemProps {
  containerClass?: string;
  style?: ViewStyle;
  children?: React.ReactNode;
}

const _SwiperItem: React.FC<SwiperItemProps> = (props) => {
  const { children, style, containerClass = '' } = props;
  return (
    <View
      {...omit(props, ['style'])}
      style={[tailwind('flex-1,item-center,justify-center,'), tailwind(containerClass), style]}
    >
      {children}
    </View>
  );
};

_SwiperItem.displayName = '_SwiperItem';

export default _SwiperItem;
