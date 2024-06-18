import './web/style/index.css';

import React from 'react';
import { tailwind } from '../utils/tool';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  selectable?: boolean;
  containerClass?: string; // Add the missing property containerClass
  children?: React.ReactNode;
  onClick?: () => void;
}
class _Text extends React.Component<IProps, Record<string, unknown>> {
  render() {
    const { containerClass = '', style, selectable = false, ...restProps } = this.props;
    const cls = {
      ...tailwind(containerClass),
      ...style,
    };
    return (
      <span
        {...restProps}
        className={selectable ? 'afu-text afu-text__selectable' : `afu-text`}
        style={cls}
        onClick={this.props?.onClick}
      >
        {this.props.children}
      </span>
    );
  }
}

export { _Text };
export default _Text;
