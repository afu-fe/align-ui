import './web/style/index.css';

import React from 'react';
import { tailwind } from '../utils/tool';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  containerClass?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  hoverClass?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  onTouchStart?(e: React.TouchEvent<HTMLDivElement>): void;
  onTouchEnd?(e: React.TouchEvent<HTMLDivElement>): void;
  onTouchMove?(e: React.TouchEvent<HTMLDivElement>): void;
  onLongPress?(): void;
}

interface IState {
  hover: boolean;
  touch: boolean;
}

class _View extends React.Component<IProps, IState> {
  timeoutEvent: ReturnType<typeof setTimeout>;
  constructor(props: IProps) {
    super(props);
    this.state = {
      hover: false,
      touch: false,
    };
    this.timeoutEvent = setTimeout(() => {}, 1000); // 确保在构造函数中赋值
  }
  startTime = 0;

  render() {
    const {
      containerClass = '',
      style,
      hoverClass,
      onTouchStart,
      onTouchEnd,
      onTouchMove,
      hoverStartTime = 50,
      hoverStayTime = 400,
      ...other
    } = this.props;

    const cls = {
      display: 'flex',
      ...tailwind(containerClass),
      ...style,
    };

    const _onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
      if (hoverClass) {
        this.setState(() => ({
          touch: true,
        }));
        setTimeout(() => {
          if (this.state.touch) {
            this.setState(() => ({
              hover: true,
            }));
          }
        }, hoverStartTime);
      }
      onTouchStart && onTouchStart(e);
      if (this.props.onLongPress) {
        this.timeoutEvent = setTimeout(() => {
          this.props.onLongPress!();
        }, 350);
        this.startTime = new Date().getTime();
      }
    };

    const _onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
      clearTimeout(this.timeoutEvent);
      onTouchMove && onTouchMove(e);
    };

    const _onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
      const spanTime = new Date().getTime() - this.startTime;
      if (spanTime < 350) {
        clearTimeout(this.timeoutEvent);
      }
      if (hoverClass) {
        this.setState(() => ({
          touch: false,
        }));
        setTimeout(() => {
          if (!this.state.touch) {
            this.setState(() => ({
              hover: false,
            }));
          }
        }, hoverStayTime);
      }
      onTouchEnd && onTouchEnd(e);
    };

    return (
      <div
        className="afu-text"
        style={cls}
        onTouchStart={_onTouchStart}
        onTouchEnd={_onTouchEnd}
        onTouchMove={_onTouchMove}
        {...other}
      >
        {this.props.children}
      </div>
    );
  }
}

export { _View };
export default _View;
