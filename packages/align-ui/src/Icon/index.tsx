/**
 * ✔ type
 * ✔ size
 * ✔ color
 */

import * as React from 'react';
import { View, Image } from 'react-native';
import { tailwind } from '../utils/tool';
import * as WEUI from '../assets/weui';
import type { IconProps } from './PropsType';
import { iconTypeMap } from './PropsType';

interface UIType {
  [key: string]: any;
}
const _Icon: React.FC<IconProps> = ({ containerClass = '', type, size = 23, color }: IconProps) => {
  size = ~~size;

  const iconObj: any = (WEUI as UIType)[iconTypeMap[type || ''] || ''];

  if (!iconObj) {
    return <View style={[{ width: size, height: size }]} />;
  }

  const imageAsset: any = iconObj.image;
  const iconColor: string = color || iconObj.defaultColor;

  return (
    <View testID="RNE__icon__svg" style={[tailwind(containerClass), { width: size, height: size }]}>
      <Image
        testID="RNE__image__svg"
        source={{ uri: imageAsset }}
        style={{
          width: size,
          height: size,
          tintColor: iconColor,
        }}
      />
    </View>
  );
};

_Icon.displayName = '_Icon';

export { _Icon };
export default _Icon;
