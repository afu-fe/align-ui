/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import * as React from 'react';
import type { ReactNode } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';
import { tailwind } from '../utils/tool';
import Icon from '../Icon';
import type { IconType } from '../Icon/PropsType';

/**
 * 空状态
 */
export interface AlertProps {
  action?: ReactNode;
  closeIcon?: ReactNode;
  showCloseIcon?: boolean;
  description?: string | ReactNode;
  icon?: ReactNode;
  message: string | ReactNode;
  showIcon?: boolean;
  type: 'info' | 'success' | 'warning' | 'error';
  onClose?: () => void;
  containerStyle?: ViewStyle;
  containerClass?: string;
  messageStyle?: TextStyle;
  messageClass?: string;
  descriptionStyle?: TextStyle;
  descriptionClass?: string;
}

class _Alert extends React.Component<AlertProps> {
  static displayName = '_Alert';
  static defaultProps = {
    showIcon: false,
    showCloseIcon: false,
  };

  typeMap = {
    info: {
      containerStyle: tailwind(
        'bg-blue_1-10,border-blue_1,border-0.5,rounded-4,flex-row,px-6,py-4,min-h-20',
      ),
      iconStyle: this.props.description ? 24 : 14,
      messageStyle: tailwind(
        `text-gray_1,text-${this.props.description ? 8 : 7},leading-${
          this.props.description ? 12 : 11
        }`,
      ),
      descriptionStyle: tailwind(`text-gray_2,text-7`),
      defaultIcon: 'info',
    },
    success: {
      containerStyle: tailwind(
        'bg-green_1-10,border-green_1,border-0.5,rounded-4,flex-row,px-6,py-4,min-h-20',
      ),
      iconStyle: this.props.description ? 24 : 14,
      messageStyle: tailwind(
        `text-gray_1,text-${this.props.description ? 8 : 7},leading-${
          this.props.description ? 12 : 11
        }`,
      ),
      descriptionStyle: tailwind(`text-gray_2,text-7`),
      defaultIcon: 'success',
    },
    warning: {
      containerStyle: tailwind(
        'bg-Orange_3-10,border-Orange_3,border-0.5,rounded-4,flex-row,px-6,py-4,min-h-20',
      ),
      iconStyle: this.props.description ? 24 : 14,
      messageStyle: tailwind(
        `text-gray_1,text-${this.props.description ? 8 : 7},leading-${
          this.props.description ? 12 : 11
        }`,
      ),
      descriptionStyle: tailwind(`text-gray_2,text-7`),
      defaultIcon: 'warn',
    },
    error: {
      containerStyle: tailwind(
        'bg-red_1-10,border-red_1,border-0.5,rounded-4,flex-row,px-6,py-4,min-h-20',
      ),
      iconStyle: this.props.description ? 24 : 14,
      messageStyle: tailwind(
        `text-gray_1,text-${this.props.description ? 8 : 7},leading-${
          this.props.description ? 12 : 11
        }`,
      ),
      descriptionStyle: tailwind(`text-gray_2,text-7`),
      defaultIcon: 'cancel',
    },
  };

  /**
   * 如果是字符串转为tailwind样式
   * @param attr
   * @param className
   */
  getStylesByAttr = (className: string | string[], attr: ViewStyle) => {
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
      action,
      description,
      closeIcon,
      icon,
      message,
      showIcon,
      type,
      onClose,
      containerStyle = {},
      messageStyle = {},
      descriptionStyle = {},
      showCloseIcon,
      containerClass = '',
      messageClass = '',
      descriptionClass = '',
    } = this.props;

    return (
      <View
        style={{
          ...this.typeMap[type].containerStyle,
          ...this.getStylesByAttr(containerClass, containerStyle),
        }}
      >
        <View style={tailwind(`flex-row,flex-1`)}>
          {showIcon ? (
            icon ? (
              icon
            ) : (
              <View
                style={tailwind(
                  `h-${description ? 12 : 11},justify-center,mr-${description ? 6 : 4}`,
                )}
              >
                <Icon
                  type={this.typeMap[type].defaultIcon as IconType}
                  size={this.typeMap[type].iconStyle}
                />
              </View>
            )
          ) : null}
          <View>
            {message
              ? this.getRenderNode(message, (el) => {
                  return (
                    <Text
                      style={{
                        ...this.typeMap[type].messageStyle,
                        ...this.getStylesByAttr(messageClass, messageStyle),
                      }}
                    >
                      {el}
                    </Text>
                  );
                })
              : null}
            {description
              ? this.getRenderNode(description, (el) => {
                  return (
                    <Text
                      style={{
                        ...this.typeMap[type].descriptionStyle,
                        ...this.getStylesByAttr(descriptionClass, descriptionStyle),
                      }}
                    >
                      {el}
                    </Text>
                  );
                })
              : null}
          </View>
          {action}
        </View>
        {showCloseIcon ? (
          closeIcon ? (
            closeIcon
          ) : (
            <TouchableOpacity
              activeOpacity={0.9}
              style={tailwind(`h-${description ? 12 : 11},justify-center,ml-4`)}
              onPress={() => {
                onClose?.();
              }}
            >
              <Icon type="close" size={12} />
            </TouchableOpacity>
          )
        ) : null}
      </View>
    );
  }
}

export { _Alert };
export default _Alert;
