/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import * as React from 'react';
import type { ReactNode } from 'react';
import type { TextStyle, ImageStyle, ViewStyle } from 'react-native';
import { TouchableOpacity, View, Text } from 'react-native';
import { tailwind } from '../utils/tool';
import Image from '../Image';

/**
 * 空状态
 */
export interface EmptyProps {
  image?: string | ReactNode;
  description?: string | ReactNode;
  imageStyle?: ImageStyle;
  imageClass?: string;
  descriptionStyle?: TextStyle;
  descriptionClass?: string;
  btnText?: string | ReactNode;
  btnStyle?: ViewStyle;
  btnClass?: string;
  btnTextStyle?: TextStyle;
  btnTextClass?: string;
  onBtnClick?: () => void;
}

class _Empty extends React.Component<EmptyProps> {
  static displayName = '_Empty';
  static defaultProps = {
    image: require('../assets/no-data@3x.png'),
    description: '暂无数据',
  };

  /**
   * 如果是字符串转为tailwind样式
   * @param attr
   * @param className
   */
  getStylesByAttr = (className: string, attr: ImageStyle | ViewStyle) => {
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
      btnStyle = {},
      btnClass = '',
      btnText,
      btnTextStyle = {},
      btnTextClass = '',
      onBtnClick,
    } = this.props;

    return (
      <View style={tailwind('w-full,h-full,justify-center,item-center,bg-white')}>
        <View style={tailwind('justify-center,item-center')}>
          {this.getRenderNode(image, (el) => {
            return (
              <Image
                style={{
                  ...tailwind('w-78,h-80'),
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
                  ...tailwind('text-7,text-gray_1,text-center,mt-9'),
                  ...this.getStylesByAttr(descriptionClass, descriptionStyle),
                }}
              >
                {el}
              </Text>
            );
          })}

          {btnText ? (
            <View style={tailwind('justify-center,item-center,flex-row')}>
              <TouchableOpacity
                testID="RN_BOTTOM_RETRY_BTN"
                activeOpacity={0.9}
                style={{
                  ...tailwind('w-54,h-22,bg-blue-20,mt-20,rounded-2,item-center,justify-center'),
                  ...this.getStylesByAttr(btnClass, btnStyle),
                }}
                onPress={() => {
                  onBtnClick?.();
                }}
              >
                <Text
                  style={{
                    ...tailwind('text-7,text-blue,regular,font-normal'),
                    ...this.getStylesByAttr(btnTextClass, btnTextStyle),
                  }}
                >
                  {btnText}
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

export { _Empty };
export default _Empty;
