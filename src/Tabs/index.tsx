/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import * as React from 'react';
// import ScrollView from '../ScrollView';
import type { ReactNode } from 'react';
import type { TextStyle, ViewStyle } from 'react-native';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { tailwind } from '../utils/tool';

/**
 * Tabs组件属性
 */
export interface TabsProps {
  title: string[] | ReactNode[]; // tabs展示标题
  titleContainerStyle?: ViewStyle; // tabs标题样式
  titleContainerClass?: string; // tabs标题样式
  titleStyle?: TextStyle; // tabs标题样式
  titleClass?: string; // tabs标题样式
  showIndicator?: boolean; // 是否展示底部指示器
  indicator?: ReactNode; // 自定义底部指示器
  indicatorStyle?: ViewStyle; // 指示器样式
  indicatorClass?: string; // 指示器样式
  onChange?: (index: number) => void; // tab切换回调
  startIndex?: number; // 初始化选中tab索引
  children?: ReactNode[]; // 子组件
  height?: number;
}

interface IState {
  activeIndex: number;
  indicatorLeft: number;
  indicatorWidth: number;
}

class _Tabs extends React.Component<TabsProps, IState> {
  constructor(props: TabsProps) {
    super(props);
    this.state = {
      activeIndex:
        props.startIndex && props.startIndex > props.title?.length ? 0 : props.startIndex || 0,
      indicatorLeft: 0,
      indicatorWidth: 0,
    };
  }
  static displayName = '_Tab';
  static defaultProps = {
    startIndex: 0,
    showIndicator: true,
  };
  tabRefs: TouchableOpacity[] = [];
  scrollWidth = 0;
  scrollRef = React.createRef<ScrollView>();

  /**
   * 如果是字符串转为tailwind样式
   * @param attr
   * @param className
   */
  getStylesByAttr = (className: string | string[], attr: ViewStyle) => {
    return className ? { ...tailwind(className), ...attr } : attr;
  };

  /**
   * tab切换
   * @param index
   */
  onTabChange = (index: number) => {
    {
      const { onChange } = this.props;
      this.setState({
        activeIndex: index,
      });
      this.tabRefs?.[index]?.measure?.((_x: number, _y: number, width: number) => {
        const scrollToLeft = _x - this.scrollWidth / 2 + width / 2;
        this.scrollRef.current?.scrollTo?.({
          x: scrollToLeft,
          y: 0,
          animated: true,
        });
        this.setState({
          indicatorLeft: _x - 16 + width / 2,
        });
      });
      onChange?.(index);
    }
  };

  render(): JSX.Element {
    const {
      title,
      titleStyle = {},
      titleClass = '',
      titleContainerStyle = {},
      titleContainerClass = '',
      showIndicator,
      indicator,
      indicatorStyle = {},
      indicatorClass = '',
      children,
      startIndex = 0,
      height,
    } = this.props;

    return (
      <View>
        <ScrollView
          horizontal
          ref={this.scrollRef}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={tailwind('px-8,relative')}
          onLayout={(event) => {
            this.scrollWidth = event.nativeEvent.layout.width;
            this.onTabChange(startIndex);
          }}
        >
          {title?.map?.((item: string | ReactNode, index: number) => {
            return (
              <>
                <TouchableOpacity
                  key={index}
                  style={{
                    ...tailwind(
                      `min-h-20,justify-center,item-center,px-8,py-4${
                        showIndicator ? ',pb-9' : ''
                      }${height ? ',h-' + height / 2 : ''}`,
                    ),
                    ...this.getStylesByAttr(titleContainerClass, titleContainerStyle),
                  }}
                  onPress={() => {
                    this.onTabChange(index);
                  }}
                  ref={(ref) => {
                    if (ref) {
                      this.tabRefs[index] = ref;
                    }
                  }}
                  onLayout={() => {
                    if (index === this.props.startIndex) {
                      this.tabRefs?.[index]?.measure?.((_x: number, _y: number, width: number) => {
                        this.setState({
                          indicatorLeft: _x - 16 + width / 2,
                        });
                      });
                    }
                  }}
                >
                  {typeof item === 'string' ? (
                    <Text
                      numberOfLines={1}
                      style={{
                        ...tailwind('regular,text-8,text-gray_1'),
                        ...this.getStylesByAttr(titleClass, titleStyle),
                      }}
                    >
                      {item}
                    </Text>
                  ) : (
                    item
                  )}
                </TouchableOpacity>
                {showIndicator ? (
                  <View
                    onLayout={(event) => {
                      this.setState({
                        indicatorWidth: event.nativeEvent.layout.width,
                      });
                    }}
                    style={{
                      ...tailwind(
                        `absolute,w-auto,bottom-3,left-${
                          (this.state.indicatorLeft + this.state.indicatorWidth / 2) / 2
                        }`,
                      ),
                    }}
                  >
                    {indicator ? (
                      indicator
                    ) : (
                      <View
                        style={{
                          ...tailwind(`h-2,w-7,bg-gray_1`),
                          ...this.getStylesByAttr(indicatorClass, indicatorStyle),
                        }}
                      ></View>
                    )}
                  </View>
                ) : null}
              </>
            );
          })}
        </ScrollView>
        {children?.[this.state.activeIndex]}
      </View>
    );
  }
}

export { _Tabs };
export default _Tabs;
