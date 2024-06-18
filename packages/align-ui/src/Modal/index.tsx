import * as React from 'react';
import { Modal, TouchableOpacity, View, Text } from 'react-native';
import { tailwind } from '../utils/tool';

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
      <Modal visible={visible} animationType={showAnimation ? 'fade' : 'none'} transparent={true}>
        <View style={tailwind('w-full,h-full,bg-black-50,justify-center,item-center')}>
          <View style={tailwind('w-4/5,rounded-6,bg-white,hidden,min-h-100')}>
            {this.getRenderNode(title, (content) => (
              <Text
                numberOfLines={1}
                style={tailwind('text-9,font-abold,text-gray_1,mx-8,text-center,my-8')}
              >
                {content}
              </Text>
            ))}
            <View style={tailwind('flex-1')}>
              {children
                ? children
                : this.getRenderNode(description, (content) => (
                    <Text style={tailwind('text-7,leading-10,font-normal,mx-8,text-gray_2')}>
                      {content}
                    </Text>
                  ))}
            </View>
            <View style={tailwind('w-full,h-0.25,bg-gray_5')}></View>
            {footer ? (
              footer
            ) : (
              <View style={tailwind('h-25,flex-row,item-center')}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    onCancel?.();
                  }}
                  style={tailwind('flex-1,h-full,justify-center,item-center')}
                >
                  {this.getRenderNode(cancelText, (content) => (
                    <Text numberOfLines={1} style={tailwind('text-8,text-gray_2,text-center')}>
                      {content}
                    </Text>
                  ))}
                </TouchableOpacity>
                <View style={tailwind('w-0.25,h-9,bg-gray_5')}></View>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    onOk?.();
                  }}
                  style={tailwind('flex-1,h-full,justify-center,item-center')}
                >
                  {this.getRenderNode(okText, (content) => (
                    <Text numberOfLines={1} style={tailwind('text-8,text-blue_2,text-center')}>
                      {content}
                    </Text>
                  ))}
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
    );
  }
}
export { _Modal };
export default _Modal;
