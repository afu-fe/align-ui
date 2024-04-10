import * as React from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { tailwind } from '../utils/tool';
import Image from '../Image';

/**
 * 加载失败状态
 */
export interface LoadingProps {
  image?: string | ReactNode;
  description?: string | ReactNode;
  imageStyle?: CSSProperties;
  imageClass?: string;
  descriptionStyle?: CSSProperties;
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
    } = this.props;

    return (
      <div style={tailwind('w-full,h-full,justify-center,flex,item-center,bg-white')}>
        <div style={tailwind('flex,flex-col,justify-center,item-center')}>
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
              <div
                style={{
                  ...tailwind('text-7,text-gray_3,text-center,mt-3'),
                  ...this.getStylesByAttr(descriptionClass, descriptionStyle),
                }}
              >
                {el}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export { _Loading };
export default _Loading;
