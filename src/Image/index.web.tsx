import './web/style/index.css';

import React from 'react';
import { tailwind } from '../utils/tool';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  containerClass?: string;
  src: string;
  mode?: string;
  onError?: () => void;
  onLoad?: (e: any) => void;
  imgProps?: Record<string, any>;
}

class _Image extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoaded: false,
    };
    this.imageOnLoad = this.imageOnLoad.bind(this);
    // this.observer = {}
  }

  observer: any = {};
  imgRef: any = null;

  componentDidMount() {}

  componentWillUnmount() {}

  imageOnLoad(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    const { onLoad } = this.props;
    const target = e.target as HTMLImageElement;
    Object.defineProperty(e, 'detail', {
      enumerable: true,
      writable: true,
      value: {
        width: target.width,
        height: target.height,
      },
    });

    onLoad && onLoad(e);
  }

  render() {
    const { containerClass = '', style = {}, src, mode, onError, imgProps, ...reset } = this.props;
    const clsName = mode === 'widthFix' ? 'afu-img afu-img__widthfix' : 'afu-img';
    const cls = {
      ...tailwind(containerClass),
      ...style,
    };
    const imgCls = 'afu-img__mode-' + (mode || 'cover').toLowerCase().replace(/\s/g, '');
    return (
      <div className={clsName} style={cls} {...reset}>
        <img
          ref={(img) => (this.imgRef = img)}
          className={imgCls}
          src={src}
          onLoad={this.imageOnLoad}
          onError={onError}
          {...imgProps}
        />
      </div>
    );
  }
}

export { _Image };
export default _Image;
