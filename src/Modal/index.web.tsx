import * as React from 'react';
import { tailwind } from '../utils/tool';
import './css/web.css';

/**
 * 弹窗组件
 */
export interface ModalProps {
  visible: boolean; // 是否显示模态框
  title?: string | React.ReactNode; // 标题内容
  description?: string | React.ReactNode; // 描述内容
  children?: React.ReactNode; // 模态框内容
  cancelText?: string | React.ReactNode; // 取消文案
  okText?: string | React.ReactNode; // 确认文案
  showAnimation?: boolean; // 是否显示动画
  onCancel?: () => {}; // 点击取消按钮的回调
  onOk?: () => {}; // 点击确认按钮的回调
  footer?: React.ReactNode; // 自定义底部内容
}

class _Modal extends React.Component<ModalProps> {
  static displayName = '_Modal';
  static defaultProps = {
    visible: false,
    cancelText: '取消',
    okText: '确认',
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
      visible,
      title,
      description,
      children,
      cancelText,
      okText,
      showAnimation,
      onCancel,
      onOk,
      footer,
    } = this.props;

    return (
      <div
        style={{ ...tailwind('w-full,h-full,left-0,top-0'), position: 'fixed', zIndex: 999999 }}
        className={`${
          showAnimation ? (visible ? 'fade-in' : 'fade-out') : visible ? 'show-modal' : 'hidden'
        }`}
      >
        <div style={tailwind('w-full,h-full,bg-black-50,flex,justify-center,item-center')}>
          <div style={tailwind('w-4/5,rounded-6,bg-white,hidden,min-h-100,flex,flex-col')}>
            {this.getRenderNode(title, (content) => (
              <div
                style={tailwind('text-9,font-abold,text-gray_1,ml-8,mr-8,text-center,mt-8,mb-8')}
              >
                {content}
              </div>
            ))}
            <div style={tailwind('flex-1')}>
              {children
                ? children
                : this.getRenderNode(description, (content) => (
                    <span
                      style={{
                        ...tailwind('text-7,font-normal,ml-8,mr-8,text-gray_2'),
                        lineHeight: '20px',
                      }}
                    >
                      {content}
                    </span>
                  ))}
            </div>
            <div style={tailwind('w-full,h-0.25,bg-gray_5')}></div>
            {footer ? (
              footer
            ) : (
              <div style={tailwind('h-25,flex,flex-row,item-center')}>
                <div
                  onClick={() => {
                    onCancel?.();
                  }}
                  style={tailwind('flex-1,h-full,flex,justify-center,item-center')}
                >
                  {this.getRenderNode(cancelText, (content) => (
                    <span style={tailwind('text-8,text-gray_2,text-center')}>{content}</span>
                  ))}
                </div>
                <div style={tailwind('w-0.25,h-9,bg-gray_5')}></div>
                <div
                  onClick={() => {
                    onOk?.();
                  }}
                  style={tailwind('flex,flex-1,h-full,justify-center,item-center')}
                >
                  {this.getRenderNode(okText, (content) => (
                    <span style={tailwind('text-8,text-blue_2,text-center')}>{content}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export { _Modal };
export default _Modal;
