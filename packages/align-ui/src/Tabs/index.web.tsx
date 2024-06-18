/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import * as React from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { tailwind } from '../utils/tool';
import './css/index.web.css';

/**
 * Tabs组件属性
 */
export interface TabsProps {
  title: string[] | ReactNode[]; // tabs展示标题
  titleContainerStyle?: CSSProperties; // tabs标题样式
  titleContainerClass?: string; // tabs标题样式
  titleStyle?: CSSProperties; // tabs标题样式
  titleClass?: string; // tabs标题样式
  showIndicator?: boolean; // 是否展示底部指示器
  indicator?: ReactNode; // 自定义底部指示器
  indicatorStyle?: CSSProperties; // 指示器样式
  indicatorClass?: string; // 指示器样式
  onChange?: (index: number) => void; // tab切换回调
  startIndex?: number; // 初始化选中tab索引
  children?: ReactNode[]; // 子组件
  height?: number; // tabs高度
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
  tabContainerRef = React.createRef<HTMLDivElement>();
  tabItemRefs: HTMLDivElement[] = [];
  indicatorWidthRef = React.createRef<HTMLDivElement>();

  getTabContainerWidth = () => {
    return this.tabContainerRef.current?.clientWidth || 0;
  };

  getTabItemRect = (index: number) => {
    return {
      width: this.tabItemRefs[index]?.clientWidth || 0,
      clientLeft: this.tabItemRefs[index]?.clientLeft || 0,
      offsetLeft: this.tabItemRefs[index]?.offsetLeft || 0,
    };
  };

  componentDidMount() {
    if (this.tabContainerRef.current) {
      this.setState(
        {
          indicatorWidth: this.indicatorWidthRef.current?.clientWidth || 0,
        },
        () => {
          const { width, offsetLeft } = this.getTabItemRect(0);
          this.setState({
            indicatorLeft: offsetLeft + width / 2 - this.state.indicatorWidth / 2,
          });
        },
      );
    }
  }

  /**
   * 如果是字符串转为tailwind样式
   * @param attr
   * @param className
   */
  getStylesByAttr = (className: string, attr: CSSProperties | {}) => {
    return className ? { ...tailwind(className), ...attr } : attr;
  };

  onTabChange = (index: number) => {
    this.setState({
      activeIndex: index,
    });
    const { offsetLeft, width } = this.getTabItemRect(index);
    const scrollTo = offsetLeft - this.getTabContainerWidth() / 2 + width / 2;
    if (this.tabContainerRef.current) {
      this.tabContainerRef.current.scrollTo({
        left: scrollTo,
        top: 0,
        behavior: 'smooth',
      });
    }
    this.setState(
      {
        indicatorWidth: this.indicatorWidthRef.current?.clientWidth || 0,
      },
      () => {
        const { width, offsetLeft } = this.getTabItemRect(index);
        this.setState({
          indicatorLeft: offsetLeft + width / 2 - this.state.indicatorWidth / 2,
        });
      },
    );
    this.props.onChange?.(index);
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
      height = 0,
    } = this.props;

    return (
      <div style={tailwind('w-full')}>
        <div style={tailwind(`h-${height / 2 || 22},w-full,relative`)}>
          <div
            className="tab-container"
            style={{
              ...tailwind('absolute,top-0,left-0,w-full,h-full,z-1'),
              overflowX: 'auto',
            }}
            ref={this.tabContainerRef}
          >
            <div style={tailwind('flex,flex-row,item-center,relative,h-full')}>
              {title?.map?.((item: string | ReactNode, index: number) => {
                return (
                  <>
                    <div
                      key={index}
                      ref={(ref) => {
                        if (ref) {
                          this.tabItemRefs[index] = ref;
                        }
                      }}
                      style={{
                        ...tailwind(
                          `h-${height / 2 - 2 || 20},flex,justify-center,item-center,pl-8,pr-8`,
                        ),
                        ...this.getStylesByAttr(titleContainerClass, titleContainerStyle),
                        cursor: 'pointer',
                        userSelect: 'none',
                      }}
                      onClick={() => {
                        this.onTabChange(index);
                      }}
                    >
                      {typeof item === 'string' ? (
                        <span
                          style={{
                            ...tailwind('regular,text-8,text-gray_1'),
                            ...this.getStylesByAttr(titleClass, titleStyle),
                          }}
                        >
                          {item}
                        </span>
                      ) : (
                        item
                      )}
                    </div>
                    {showIndicator ? (
                      <div
                        ref={this.indicatorWidthRef}
                        style={{
                          ...tailwind(
                            `absolute,w-auto,bottom-0,left-${this.state.indicatorLeft / 2}`,
                          ),
                          transition: 'all 0.3s',
                        }}
                      >
                        {indicator ? (
                          indicator
                        ) : (
                          <div
                            style={{
                              ...tailwind(`h-2,w-7,bg-gray_1`),
                              ...this.getStylesByAttr(indicatorClass, indicatorStyle),
                            }}
                          ></div>
                        )}
                      </div>
                    ) : null}
                  </>
                );
              })}
            </div>
          </div>
        </div>
        {children?.[this.state.activeIndex]}
      </div>
    );
  }
}

export { _Tabs };
export default _Tabs;
