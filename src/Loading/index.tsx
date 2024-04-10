/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import * as React from 'react';
import type { ReactNode } from 'react';
import type { TextStyle, ImageStyle } from 'react-native';
import { View, Text } from 'react-native';
import { tailwind } from '../utils/tool';
import Image from '../Image';

/**
 * 加载失败状态
 */
export interface LoadingProps {
  image?: string | ReactNode;
  description?: string | ReactNode;
  imageStyle?: ImageStyle;
  imageClass?: string;
  descriptionStyle?: TextStyle;
  descriptionClass?: string;
}

class _Loading extends React.Component<LoadingProps> {
  static displayName = '_Loading';
  static defaultProps = {
    image: require('../assets/pageloading.gif'),
    description: '加载中...',
  };

  /**
   * 如果是字符串转为tailwind样式
   * @param attr
   * @param className
   */
  getStylesByAttr = (className: string, attr: TextStyle | ImageStyle) => {
    return className ? { ...tailwind(className), ...attr } : attr;
  };

  getRenderNode(
    el?: string | React.ReactNode,
    cb?: (el: string) => React.ReactNode,
  ): React.ReactNode | null {
    if (!el) {
      return null;
    }
    if (typeof el === 'string') {
      return cb?.(el);
    } else {
      return el;
    }
  }

  render(): JSX.Element {
    const {
      image,
      imageStyle = {},
      imageClass = '',
      description,
      descriptionStyle = {},
      descriptionClass = '',
    } = this.props;

    return (
      <View style={tailwind('w-full,h-full,justify-center,item-center,bg-white')}>
        <View style={tailwind('justify-center,item-center')}>
          {this.getRenderNode(image, (el) => {
            return (
              <Image
                style={{
                  ...tailwind('w-35,h-35'),
                  ...this.getStylesByAttr(imageClass, imageStyle),
                }}
                src={el}
              />
            );
          })}
          {this.getRenderNode(description, (el) => {
            return (
              <Text
                style={{
                  ...tailwind('text-7,text-gray_3,text-center,mt-3'),
                  ...this.getStylesByAttr(descriptionClass, descriptionStyle),
                }}
              >
                {el}
              </Text>
            );
          })}
        </View>
      </View>
    );
  }
}
export { _Loading };
export default _Loading;
