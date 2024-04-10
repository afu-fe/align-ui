/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import * as React from 'react';
import type { ReactNode, CSSProperties } from 'react';
import { tailwind } from '../utils/tool';
import Icon from '../Icon/index.web';
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
  containerStyle?: CSSProperties;
  containerClass?: string;
  messageStyle?: CSSProperties;
  messageClass?: string;
  descriptionStyle?: CSSProperties;
  descriptionClass?: string;
}

class _Alert extends React.Component<AlertProps> {
  static displayName = '_Alert';
  static defaultProps = {
    showIcon: false,
  };

  typeMap = {
    info: {
      containerStyle: tailwind(
        'bg-blue_1-10,border-blue_1,border-0.5,rounded-4,flex,pl-6,pr-6,pt-4,pb-4,min-h-20',
      ),
      iconStyle: this.props.description ? 24 : 14,
      messageStyle: {
        ...tailwind(
          `text-gray_1,text-${this.props.description ? 8 : 7},leading-${
            this.props.description ? 12 : 11
          }`,
        ),
        lineHeight: this.props.description ? '24px' : '22px',
      },
      descriptionStyle: tailwind(`text-gray_2,text-7`),
      defaultIcon: 'info',
    },
    success: {
      containerStyle: tailwind(
        'bg-green_1-10,border-green_1,border-0.5,rounded-4,flex,pl-6,pr-6,pt-4,pb-4,min-h-20',
      ),
      iconStyle: this.props.description ? 24 : 14,
      messageStyle: {
        ...tailwind(
          `text-gray_1,text-${this.props.description ? 8 : 7},leading-${
            this.props.description ? 12 : 11
          }`,
        ),
        lineHeight: this.props.description ? '24px' : '22px',
      },
      descriptionStyle: tailwind(`text-gray_2,text-7`),
      defaultIcon: 'success',
    },
    warning: {
      containerStyle: tailwind(
        'bg-Orange_3-10,border-Orange_3,border-0.5,rounded-4,flex,pl-6,pr-6,pt-4,pb-4,min-h-20',
      ),
      iconStyle: this.props.description ? 24 : 14,
      messageStyle: {
        ...tailwind(
          `text-gray_1,text-${this.props.description ? 8 : 7},leading-${
            this.props.description ? 12 : 11
          }`,
        ),
        lineHeight: this.props.description ? '24px' : '22px',
      },
      descriptionStyle: tailwind(`text-gray_2,text-7`),
      defaultIcon: 'warn',
    },
    error: {
      containerStyle: tailwind(
        'bg-red_1-10,border-red_1,border-0.5,rounded-4,flex,pl-6,pr-6,pt-4,pb-4,min-h-20',
      ),
      iconStyle: this.props.description ? 24 : 14,
      messageStyle: {
        ...tailwind(
          `text-cgray_1,text-${this.props.description ? 8 : 7},leading-${
            this.props.description ? 12 : 11
          }`,
        ),
        lineHeight: this.props.description ? '24px' : '22px',
      },
      descriptionStyle: tailwind(`text-gray_2,text-7`),
      defaultIcon: 'cancel',
    },
  };

  /**
   * 如果是字符串转为tailwind样式
   * @param attr
   * @param className
   */
  getStylesByAttr = (className: string | string[], attr: CSSProperties) => {
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
      <div
        style={{
          ...this.typeMap[type].containerStyle,
          ...this.getStylesByAttr(containerClass, containerStyle),
        }}
      >
        <div style={tailwind('flex,flex-row,flex-1')}>
          {showIcon ? (
            icon ? (
              icon
            ) : (
              <div
                style={tailwind(
                  `h-${description ? 12 : 11},flex,item-center,mr-${description ? 6 : 4}`,
                )}
              >
                <Icon
                  type={this.typeMap[type].defaultIcon as IconType}
                  size={this.typeMap[type].iconStyle}
                />
              </div>
            )
          ) : null}
          <div>
            {message
              ? this.getRenderNode(message, (el) => {
                  return (
                    <span
                      style={{
                        ...this.typeMap[type].messageStyle,
                        ...this.getStylesByAttr(messageClass, messageStyle),
                      }}
                    >
                      {el}
                    </span>
                  );
                })
              : null}
            {description
              ? this.getRenderNode(description, (el) => {
                  return (
                    <div
                      style={{
                        ...this.typeMap[type].descriptionStyle,
                        ...this.getStylesByAttr(descriptionClass, descriptionStyle),
                      }}
                    >
                      {el}
                    </div>
                  );
                })
              : null}
          </div>
          {action}
        </div>
        {showCloseIcon ? (
          closeIcon ? (
            closeIcon
          ) : (
            <div
              style={tailwind(`h-${description ? 12 : 11},flex,item-center,ml-4`)}
              onClick={() => {
                onClose?.();
              }}
            >
              <Icon type="close" size={12} />
            </div>
          )
        ) : null}
      </div>
    );
  }
}
export { _Alert };
export default _Alert;
