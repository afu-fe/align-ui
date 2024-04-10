import * as React from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { tailwind } from '../utils/tool';
import Image from '../Image';

/**
 * 加载失败状态
 */
export interface FailedProps {
  image?: string | ReactNode;
  description?: string | ReactNode;
  title?: string | ReactNode;
  imageStyle?: CSSProperties;
  imageClass?: string;
  titleStyle?: CSSProperties;
  titleClass?: string;
  descriptionStyle?: CSSProperties;
  descriptionClass?: string;
  btnText?: string | ReactNode;
  btnStyle?: CSSProperties;
  btnClass?: string;
  btnTextStyle?: CSSProperties;
  btnTextClass?: string;
  onBtnClick?: () => void;
}

class _Failed extends React.Component<FailedProps> {
  static displayName = '_Failed';
  static defaultProps = {
    image: require('../assets/failed@3x.png'),
    title: '加载失败',
    description: '脑袋放空中，坐下来休息会吧',
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
      image,
      imageStyle = {},
      imageClass = '',
      description,
      descriptionStyle = {},
      descriptionClass = '',
      title,
      titleStyle = {},
      titleClass = '',
      btnStyle = {},
      btnClass = '',
      btnText,
      btnTextStyle = {},
      btnTextClass = '',
      onBtnClick,
    } = this.props;

    return (
      <div style={tailwind('w-full,h-full,flex,justify-center,item-center,bg-white')}>
        <div style={tailwind('flex,flex-col,justify-center,item-center')}>
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

          {this.getRenderNode(title, (el) => {
            return (
              <div
                style={{
                  ...tailwind('text-8.5,text-gray_1,text-center,mt-9'),
                  ...this.getStylesByAttr(titleClass, titleStyle),
                }}
              >
                {el}
              </div>
            );
          })}

          {this.getRenderNode(description, (el) => {
            return (
              <div
                style={{
                  ...tailwind('text-7,text-gray_2,text-center,mt-6'),
                  ...this.getStylesByAttr(descriptionClass, descriptionStyle),
                }}
              >
                {el}
              </div>
            );
          })}

          {btnText ? (
            <div style={tailwind('flex,justify-center,item-center,flex-row')}>
              <div
                style={{
                  ...tailwind(
                    'w-54,h-22,bg-blue-20,mt-20,rounded-2,item-center,flex,justify-center',
                  ),
                  ...this.getStylesByAttr(btnClass, btnStyle),
                }}
                onClick={() => {
                  onBtnClick?.();
                }}
              >
                <span
                  style={{
                    ...tailwind('text-7,text-blue,regular,font-normal'),
                    ...this.getStylesByAttr(btnTextClass, btnTextStyle),
                  }}
                >
                  {btnText}
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export { _Failed };
export default _Failed;
