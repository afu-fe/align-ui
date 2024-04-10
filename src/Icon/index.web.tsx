import React from 'react';
import { tailwind } from '../utils/tool';
import * as WEUI from '../assets/weui';

import type { IconProps } from './PropsType';
import { iconTypeMap } from './PropsType';

interface UIType {
  [key: string]: any;
}
// interface IProps extends React.HTMLAttributes<HTMLDivElement>;
class Icon extends React.Component<IconProps> {
  constructor(props: IconProps) {
    super(props);
  }

  render() {
    const { containerClass = '', type, size = 23 } = this.props;
    const iconObj: any = (WEUI as UIType)[iconTypeMap[type || ''] || ''];
    const imgCls = { width: size, height: size };
    if (!iconObj) {
      return <div style={imgCls} />;
    }
    const imageAsset: any = iconObj.image;
    const cls = {
      ...tailwind(containerClass),
      ...{ width: size, height: size },
    };
    return (
      <div style={cls}>
        <img src={imageAsset} style={imgCls} />
      </div>
    );
  }
}

export default Icon;
