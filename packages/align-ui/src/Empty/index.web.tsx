/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import * as React from 'react';
import type { ReactNode, CSSProperties } from 'react';
import { tailwind } from '../utils/tool';
import Image from '../Image';

/**
 * 空状态
 */
export interface EmptyProps {
  image?: string | ReactNode;
  description?: string | ReactNode;
  imageStyle?: CSSProperties;
  imageClass?: string;
  descriptionStyle?: CSSProperties;
  descriptionClass?: string;
  btnText?: string | ReactNode;
  btnStyle?: CSSProperties;
  btnClass?: string;
  btnTextStyle?: CSSProperties;
  btnTextClass?: string;
  onBtnClick?: () => void;
}

class _Empty extends React.Component<EmptyProps> {
  static displayName = '_Empty';
  static defaultProps = {
    image: 'https://fs.autohome.com.cn/afu_views/react-comps/empty/no-data@3x.png',
    description: '暂无数据',
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
          {this.getRenderNode(description, (el) => {
            return (
              <div
                style={{
                  ...tailwind('text-7,text-gray_1,text-center,mt-9'),
                  ...this.getStylesByAttr(descriptionClass, descriptionStyle),
                }}
              >
                {el}
              </div>
            );
          })}

          {btnText ? (
            <div style={tailwind('justify-center,item-center,flex,flex-row')}>
              <div
                style={{
                  ...tailwind(
                    'w-54,h-22,bg-blue-20,mt-20,rounded-2,flex,item-center,justify-center',
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

export { _Empty };
export default _Empty;
